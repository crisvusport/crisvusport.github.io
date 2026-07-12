
function qs(s){return document.querySelector(s)}
function qsa(s){return [...document.querySelectorAll(s)]}
function getParam(name){return new URLSearchParams(location.search).get(name)}

function openDrawer(){
  qs("#mobileDrawer")?.classList.add("open");
  qs("#drawerOverlay")?.classList.add("show");
  document.body.classList.add("lock");
}
function closeDrawer(){
  qs("#mobileDrawer")?.classList.remove("open");
  qs("#drawerOverlay")?.classList.remove("show");
  document.body.classList.remove("lock");
}

function productCard(p){
  return `
    <article class="product-card">
      <a href="product.html?id=${encodeURIComponent(p.id)}">
        <div class="product-image-wrap">
          <img src="${p.images[0]}" alt="${p.title}" loading="lazy">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
        </div>
        <div class="product-info">
          <h3>${p.title}</h3>
          <div class="product-meta">${p.version} · ${p.size}</div>
          <div class="product-price">${p.price}</div>
        </div>
      </a>
    </article>`;
}

function buildMega(id, data){
  const el = qs("#"+id);
  if(!el) return;
  el.innerHTML = `<div class="container mega-grid">${
    Object.entries(data).map(([title,items])=>`
      <div>
        <h4>${title}</h4>
        ${items.map(item=>`<a href="catalog.html?q=${encodeURIComponent(item)}">${item}</a>`).join("")}
      </div>`
    ).join("")
  }</div>`;
}

function buildMobileMenu(){
  const el = qs("#mobileMenuContent");
  if(!el) return;
  el.innerHTML = `
    <details>
      <summary>CLB</summary>
      ${Object.values(CLUBS).flat().map(x=>`<a href="catalog.html?q=${encodeURIComponent(x)}">${x}</a>`).join("")}
    </details>
    <details>
      <summary>WORLD CUP 2026</summary>
      ${Object.values(WORLDCUP).flat().map(x=>`<a href="catalog.html?q=${encodeURIComponent(x)}">${x}</a>`).join("")}
    </details>
    <details>
      <summary>ĐỘI TUYỂN</summary>
      ${Object.values(NATIONS).flat().map(x=>`<a href="catalog.html?q=${encodeURIComponent(x)}">${x}</a>`).join("")}
    </details>
    <details><summary>RETRO VINTAGE</summary><a href="catalog.html?collection=retro">Xem tất cả Retro</a></details>
    <details><summary>TRẺ EM</summary><a href="catalog.html?category=kids">Xem bộ trẻ em</a></details>
  `;
}

function initCommon(){
  buildMega("clubMega", CLUBS);
  buildMega("nationMega", NATIONS);
  buildMega("worldcupMega", WORLDCUP);
  buildMobileMenu();

  qs("#menuBtn")?.addEventListener("click", openDrawer);
  qs("#drawerClose")?.addEventListener("click", closeDrawer);
  qs("#drawerOverlay")?.addEventListener("click", closeDrawer);
  qs("#promoClose")?.addEventListener("click", ()=>qs("#promo")?.remove());

  const search = qs("#globalSearch");
  if(search){
    search.addEventListener("keydown", e=>{
      if(e.key==="Enter" && search.value.trim()){
        location.href=`catalog.html?q=${encodeURIComponent(search.value.trim())}`;
      }
    });
  }
}

function initHome(){
  qs("#homeProducts").innerHTML = PRODUCTS.map(productCard).join("");
  qs("#groupGrid").innerHTML = Object.entries(WORLDCUP).map(([group,teams])=>`
    <div class="group-card">
      <h3>${group}</h3>
      ${teams.map(team=>`<a href="catalog.html?q=${encodeURIComponent(team)}">${team}</a>`).join("")}
    </div>`
  ).join("");
}

function initCatalog(){
  const q = (getParam("q")||"").toLowerCase();
  const category = getParam("category");
  const collection = getParam("collection");

  const filtered = PRODUCTS.filter(p=>{
    const qHit = !q || `${p.title} ${p.search} ${p.team}`.toLowerCase().includes(q);
    const categoryHit = !category || p.categoryKey===category;
    const collectionHit = !collection || p.collectionKey===collection;
    return qHit && categoryHit && collectionHit;
  });

  const heading = q ? q.toUpperCase() : (collection || category || "TẤT CẢ SẢN PHẨM").toUpperCase();
  qs("#catalogTitle").textContent = heading;
  qs("#catalogCount").textContent = `${filtered.length} sản phẩm`;
  qs("#catalogGrid").innerHTML = filtered.map(productCard).join("") || "<p>Không có sản phẩm phù hợp.</p>";
}

function initProduct(){
  const id = getParam("id") || PRODUCTS[0].id;
  const p = PRODUCTS.find(x=>x.id===id) || PRODUCTS[0];

  qs("#productTitle").textContent = p.title;
  qs("#productPrice").textContent = p.price;
  qs("#productTeam").textContent = p.team;
  qs("#productYear").textContent = p.year;
  qs("#productStyle").textContent = p.style;
  qs("#productVersion").textContent = p.version;
  qs("#productSize").textContent = p.size;
  qs("#mainProductImage").src = p.images[0];
  qs("#mainProductImage").alt = p.title;
  qs("#facebookBtn").href = CONTACTS.facebook;
  qs("#zaloBtn").href = CONTACTS.zalo;

  qs("#productThumbs").innerHTML = p.images.map((img,index)=>`
    <button class="thumb ${index===0?"active":""}" data-image="${img}">
      <img src="${img}" alt="${p.title} ${index+1}">
    </button>`).join("");

  qsa(".thumb").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      qsa(".thumb").forEach(x=>x.classList.remove("active"));
      btn.classList.add("active");
      qs("#mainProductImage").src = btn.dataset.image;
    });
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  initCommon();
  const page = document.body.dataset.page;
  if(page==="home") initHome();
  if(page==="catalog") initCatalog();
  if(page==="product") initProduct();
});
