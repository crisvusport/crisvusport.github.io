const PRODUCTS = [
  {
    "id": "portugal-2000-home-retro",
    "title": "ÁO PORTUGAL 2000 HOME RETRO",
    "team": "Portugal",
    "category": "ĐỘI TUYỂN",
    "categoryKey": "nation",
    "collection": "RETRO VINTAGE",
    "collectionKey": "retro",
    "year": "2000",
    "style": "HOME",
    "version": "RETRO FAN",
    "size": "S–2XL",
    "price": "479.000đ",
    "badge": "RETRO",
    "images": [
      "Portugal 2000 Home Retro (front).jpg",
      "Portugal 2000 Home Retro (back).jpg",
      "Portugal 2000 Home Retro (detail 1).jpg",
      "Portugal 2000 Home Retro (detail 2).jpg",
      "Portugal 2000 Home Retro (detail 3).jpg",
      "Portugal 2000 Home Retro (detail 4).jpg",
      "Portugal 2000 Home Retro (detail 5).jpg"
    ],
    "search": "portugal bồ đào nha 2000 home retro fan"
  },
  {
    "id": "portugal-2026-home-player",
    "title": "ÁO PORTUGAL 2026 HOME PLAYER",
    "team": "Portugal",
    "category": "ĐỘI TUYỂN",
    "categoryKey": "nation",
    "collection": "WORLD CUP 2026",
    "collectionKey": "worldcup",
    "year": "2026",
    "style": "HOME",
    "version": "PLAYER",
    "size": "S–2XL",
    "price": "479.000đ",
    "badge": "PLAYER",
    "images": [
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1000&q=85"
    ],
    "search": "portugal bồ đào nha 2026 home player world cup"
  },
  {
    "id": "argentina-2026-home-fan",
    "title": "ÁO ARGENTINA 2026 HOME FAN",
    "team": "Argentina",
    "category": "ĐỘI TUYỂN",
    "categoryKey": "nation",
    "collection": "WORLD CUP 2026",
    "collectionKey": "worldcup",
    "year": "2026",
    "style": "HOME",
    "version": "FAN",
    "size": "S–4XL",
    "price": "349.000đ",
    "badge": "MỚI",
    "images": [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=85"
    ],
    "search": "argentina 2026 home fan world cup"
  },
  {
    "id": "brazil-2002-home-retro",
    "title": "ÁO BRAZIL 2002 HOME RETRO",
    "team": "Brazil",
    "category": "ĐỘI TUYỂN",
    "categoryKey": "nation",
    "collection": "RETRO VINTAGE",
    "collectionKey": "retro",
    "year": "2002",
    "style": "HOME",
    "version": "RETRO FAN",
    "size": "S–2XL",
    "price": "479.000đ",
    "badge": "RETRO",
    "images": [
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1000&q=85"
    ],
    "search": "brazil 2002 home retro"
  },
  {
    "id": "real-madrid-home-player",
    "title": "ÁO REAL MADRID HOME PLAYER",
    "team": "Real Madrid",
    "category": "CLB",
    "categoryKey": "club",
    "collection": "CLB",
    "collectionKey": "club",
    "year": "2026",
    "style": "HOME",
    "version": "PLAYER",
    "size": "S–2XL",
    "price": "479.000đ",
    "badge": "PLAYER",
    "images": [
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1000&q=85"
    ],
    "search": "real madrid home player club clb"
  },
  {
    "id": "manchester-united-home-fan",
    "title": "ÁO MANCHESTER UNITED HOME FAN",
    "team": "Manchester United",
    "category": "CLB",
    "categoryKey": "club",
    "collection": "CLB",
    "collectionKey": "club",
    "year": "2026",
    "style": "HOME",
    "version": "FAN",
    "size": "S–4XL",
    "price": "349.000đ",
    "badge": "FAN",
    "images": [
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1000&q=85"
    ],
    "search": "manchester united home fan club premier league"
  },
  {
    "id": "portugal-kids-kit",
    "title": "BỘ ÁO PORTUGAL TRẺ EM",
    "team": "Portugal",
    "category": "TRẺ EM",
    "categoryKey": "kids",
    "collection": "TRẺ EM",
    "collectionKey": "kids",
    "year": "2026",
    "style": "HOME",
    "version": "KIDS KIT",
    "size": "16–28",
    "price": "449.000đ",
    "badge": "TRẺ EM",
    "images": [
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=1000&q=85"
    ],
    "search": "portugal kids trẻ em bộ quần áo"
  },
  {
    "id": "ac-milan-home-retro",
    "title": "ÁO AC MILAN HOME RETRO",
    "team": "AC Milan",
    "category": "CLB",
    "categoryKey": "club",
    "collection": "RETRO VINTAGE",
    "collectionKey": "retro",
    "year": "2006",
    "style": "HOME",
    "version": "RETRO FAN",
    "size": "S–2XL",
    "price": "479.000đ",
    "badge": "RETRO",
    "images": [
      "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=1000&q=85"
    ],
    "search": "ac milan home retro"
  }
];
const CLUBS = {
  "PREMIER LEAGUE": [
    "Manchester City",
    "Chelsea",
    "Manchester United",
    "Arsenal",
    "Liverpool",
    "Tottenham Hotspur",
    "Aston Villa",
    "Newcastle United"
  ],
  "SERIE A": [
    "Inter Milan",
    "AC Milan",
    "Juventus",
    "Napoli",
    "AS Roma",
    "Fiorentina",
    "Atalanta",
    "Lazio"
  ],
  "LA LIGA": [
    "Real Madrid",
    "Barcelona",
    "Atlético de Madrid",
    "Athletic Bilbao",
    "Real Sociedad",
    "Real Betis"
  ],
  "BUNDESLIGA": [
    "Bayern München",
    "Borussia Dortmund",
    "RB Leipzig",
    "Leverkusen",
    "Frankfurt"
  ],
  "LIGUE 1": [
    "PSG",
    "Monaco",
    "Marseille",
    "Lyon",
    "Lille"
  ]
};
const NATIONS = {
  "ĐỘI TUYỂN NỔI BẬT": [
    "Brazil",
    "Argentina",
    "France",
    "England",
    "Germany",
    "Spain",
    "Portugal",
    "Italy",
    "Netherlands",
    "Mexico",
    "Japan",
    "South Korea"
  ],
  "CHÂU ÂU": [
    "Belgium",
    "Croatia",
    "Switzerland",
    "Denmark",
    "Sweden",
    "Norway",
    "Scotland",
    "Poland",
    "Ukraine",
    "Serbia"
  ],
  "CHÂU Á": [
    "Australia",
    "Iran",
    "Saudi Arabia",
    "Qatar",
    "United Arab Emirates"
  ],
  "NAM MỸ": [
    "Uruguay",
    "Colombia",
    "Chile",
    "Peru",
    "Ecuador",
    "Paraguay"
  ],
  "QUỐC GIA KHÁC": [
    "Canada",
    "Costa Rica",
    "Panama",
    "Morocco",
    "Senegal",
    "Ghana",
    "Nigeria",
    "Cameroon"
  ]
};
const WORLDCUP = {
  "GROUP A": [
    "Mexico",
    "South Africa",
    "South Korea"
  ],
  "GROUP B": [
    "Canada",
    "Qatar",
    "Switzerland"
  ],
  "GROUP C": [
    "Brazil",
    "Morocco",
    "Haiti",
    "Scotland"
  ],
  "GROUP D": [
    "United States",
    "Paraguay",
    "Australia"
  ],
  "GROUP E": [
    "Germany",
    "Curacao",
    "Ivory Coast",
    "Ecuador"
  ],
  "GROUP F": [
    "Netherlands",
    "Japan",
    "Tunisia"
  ],
  "GROUP G": [
    "Belgium",
    "Egypt",
    "Iran",
    "New Zealand"
  ],
  "GROUP H": [
    "Spain",
    "Cape Verde",
    "Saudi Arabia",
    "Uruguay"
  ],
  "GROUP I": [
    "France",
    "Senegal",
    "Norway"
  ],
  "GROUP J": [
    "Argentina",
    "Algeria",
    "Austria",
    "Jordan"
  ],
  "GROUP K": [
    "Portugal",
    "Uzbekistan",
    "Colombia"
  ],
  "GROUP L": [
    "England",
    "Croatia",
    "Ghana",
    "Panama"
  ]
};
const CONTACTS = { facebook: "https://www.facebook.com/cristiano.vu1602/", zalo: "https://zalo.me/0333623175" };

const CLUB_MENU = [
  {
    league: "PREMIER LEAGUE",
    teams: [
      { name: "EFL Championship", logo: "assets/clubs/efl-championship.png" },
      { name: "Manchester City", logo: "assets/clubs/manchester-city.png" },
      { name: "Chelsea", logo: "assets/clubs/chelsea.jpg" },
      { name: "Manchester United", logo: "assets/clubs/manchester-united.png" },
      { name: "Arsenal", logo: "assets/clubs/arsenal.png" },
      { name: "Liverpool", logo: "assets/clubs/liverpool.png" },
      { name: "Tottenham Hotspur", logo: "assets/clubs/tottenham-hotspur.png" },
      { name: "Aston Villa", logo: "assets/clubs/aston-villa.jpg" },
      { name: "Newcastle United", logo: "assets/clubs/newcastle-united.png" },
      { name: "West Ham United", logo: "assets/clubs/west-ham-united.jpg" },
      { name: "Crystal Palace", logo: "assets/clubs/crystal-palace.png" },
      { name: "Wolverhampton", logo: "assets/clubs/wolverhampton.jpg" },
      { name: "Brighton", logo: "assets/clubs/brighton.jpg" },
      { name: "Nottingham Forest", logo: "assets/clubs/nottingham-forest.png" },
      { name: "Everton", logo: "assets/clubs/everton.jpg" },
      { name: "Leeds United", logo: "assets/clubs/leeds-united.png" },
      { name: "Fulham", logo: "assets/clubs/fulham.jpg" },
      { name: "Sunderland", logo: "assets/clubs/sunderland.png" },
      { name: "Celtic", logo: "assets/clubs/celtic.png" },
      { name: "Burnley", logo: "assets/clubs/burnley.png" }
    ]
  },
  {
    league: "SERIE A",
    teams: [
      { name: "Inter Milan", logo: "assets/clubs/inter-milan.png" },
      { name: "AC Milan", logo: "assets/clubs/ac-milan.png" },
      { name: "Juventus", logo: "assets/clubs/juventus.png" },
      { name: "Napoli", logo: "assets/clubs/napoli.png" },
      { name: "AS Roma", logo: "assets/clubs/as-roma.jpg" },
      { name: "Fiorentina", logo: "assets/clubs/fiorentina.jpg" },
      { name: "Atalanta", logo: "assets/clubs/atalanta.jpg" },
      { name: "Lazio", logo: "assets/clubs/lazio.png" },
      { name: "Bologna", logo: "assets/clubs/bologna.png" },
      { name: "Parma", logo: "assets/clubs/parma.png" },
      { name: "Torino", logo: "assets/clubs/torino.jpg" },
      { name: "Palermo FC", logo: "assets/clubs/palermo-fc.jpeg" },
      { name: "Cagliari Calcio", logo: "assets/clubs/cagliari-calcio.png" },
      { name: "Pisa SC", logo: "assets/clubs/pisa-sc.png" },
      { name: "Brescia Calcio", logo: "assets/clubs/brescia-calcio.png" },
      { name: "Lecce", logo: "assets/clubs/lecce.png" },
      { name: "Monza", logo: "assets/clubs/monza.png" },
      { name: "Genoa", logo: "assets/clubs/genoa.png" },
      { name: "Udinese", logo: "assets/clubs/udinese.png" },
      { name: "Cremonese", logo: "assets/clubs/cremonese.avif" },
      { name: "Sassuolo", logo: "assets/clubs/sassuolo.jpg" },
      { name: "Como", logo: "assets/clubs/como.webp" },
      { name: "Hellas Verona", logo: "assets/clubs/hellas-verona.jpg" },
      { name: "Bari", logo: "assets/clubs/bari.jpg" }
    ]
  },
  {
    league: "LIGA",
    teams: [
      { name: "LaLiga Hypermotion", logo: "assets/clubs/laliga-hypermotion.png" },
      { name: "Real Madrid", logo: "assets/clubs/real-madrid.png" },
      { name: "Barcelona", logo: "assets/clubs/barcelona.png" },
      { name: "Atlético de Madrid", logo: "assets/clubs/atletico-de-madrid.png" },
      { name: "Athletic Bilbao", logo: "assets/clubs/athletic-bilbao.png" },
      { name: "Real Sociedad", logo: "assets/clubs/real-sociedad.jpg" },
      { name: "Real Betis", logo: "assets/clubs/real-betis.png" },
      { name: "Celta de Vigo", logo: "assets/clubs/celta-de-vigo.png" },
      { name: "Girona", logo: "assets/clubs/girona.webp" },
      { name: "Villarreal", logo: "assets/clubs/villarreal.png" },
      { name: "Valencia", logo: "assets/clubs/valencia.jpg" },
      { name: "Osasuna", logo: "assets/clubs/osasuna.png" },
      { name: "Sevilla", logo: "assets/clubs/sevilla.png" },
      { name: "Rayo Vallecano", logo: "assets/clubs/rayo-vallecano.png" },
      { name: "Deportivo Alavés", logo: "assets/clubs/deportivo-alaves.jpg" },
      { name: "Espanyol", logo: "assets/clubs/espanyol.png" },
      { name: "Getafe", logo: "assets/clubs/getafe.png" },
      { name: "RCD Mallorca", logo: "assets/clubs/rcd-mallorca.png" },
      { name: "Real Oviedo", logo: "assets/clubs/real-oviedo.png" },
      { name: "Elche CF", logo: "assets/clubs/elche-cf.png" }
    ]
  },
  {
    league: "BUNDESLIGA",
    teams: [
      { name: "Bayern München", logo: "assets/clubs/bayern-munchen.png" },
      { name: "Borussia Dortmund", logo: "assets/clubs/borussia-dortmund.png" },
      { name: "Frankfurt", logo: "assets/clubs/frankfurt.png" },
      { name: "RB Leipzig", logo: "assets/clubs/rb-leipzig.png" },
      { name: "Bayer 04 Leverkusen", logo: "assets/clubs/bayer-04-leverkusen.png" },
      { name: "Schalke 04", logo: "assets/clubs/schalke-04.png" },
      { name: "Köln", logo: "assets/clubs/koln.png" },
      { name: "Hamburger SV", logo: "assets/clubs/hamburger-sv.jpg" },
      { name: "St. Pauli", logo: "assets/clubs/st-pauli.png" },
      { name: "Greuther Furth", logo: "assets/clubs/greuther-furth.png" },
      { name: "FC Kaiserslautern", logo: "assets/clubs/fc-kaiserslautern.png" },
      { name: "Borussia Mönchengladbach", logo: "assets/clubs/borussia-monchengladbach.png" },
      { name: "1.FC Heidenheim 1846", logo: "assets/clubs/1fc-heidenheim-1846.jpg" },
      { name: "1. FC Union Berlin", logo: "assets/clubs/1-fc-union-berlin.jpg" },
      { name: "Augsburg", logo: "assets/clubs/augsburg.jpg" },
      { name: "VfL Wolfsburg", logo: "assets/clubs/vfl-wolfsburg.png" }
    ]
  },
  {
    league: "LIGUE 1",
    teams: [
      { name: "PSG", logo: "assets/clubs/psg.png" },
      { name: "Monaco", logo: "assets/clubs/monaco.png" },
      { name: "Olympique de Marseille", logo: "assets/clubs/olympique-de-marseille.png" },
      { name: "Olympique Lyonnais", logo: "assets/clubs/olympique-lyonnais.png" },
      { name: "Lille", logo: "assets/clubs/lille.jpg" },
      { name: "AJ Auxerre", logo: "assets/clubs/aj-auxerre.jpg" },
      { name: "RC Lens", logo: "assets/clubs/rc-lens.png" },
      { name: "FC Nantes", logo: "assets/clubs/fc-nantes.png" },
      { name: "Paris FC", logo: "assets/clubs/paris-fc.webp" },
      { name: "AS Saint-Etienne", logo: "assets/clubs/as-saint-etienne.jpg" },
      { name: "Nice", logo: "assets/clubs/nice.png" },
      { name: "Angers SCO", logo: "assets/clubs/angers-sco.png" },
      { name: "Strasbourg", logo: "assets/clubs/strasbourg.png" },
      { name: "Stade Rennais", logo: "assets/clubs/stade-rennais.png" }
    ]
  },
  {
    league: "PORTUGAL LIGA",
    teams: [
      { name: "FC Porto", logo: "assets/clubs/fc-porto.png" },
      { name: "S.L. Benfica", logo: "assets/clubs/sl-benfica.png" },
      { name: "Sporting CP", logo: "assets/clubs/sporting-cp.png" },
      { name: "Vitória S.C.", logo: "assets/clubs/vitoria-sc.png" },
      { name: "F.C. Alverca", logo: "assets/clubs/fc-alverca.webp" },
      { name: "S.C. Braga", logo: "assets/clubs/sc-braga.jpg" },
      { name: "Famalicao", logo: "assets/clubs/famalicao.png" }
    ]
  }
];
