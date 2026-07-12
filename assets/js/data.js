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
