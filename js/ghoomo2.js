/* ============================================================
   GHOOMO — India's Travel Package Comparison Marketplace
   Prototype SPA: destinations, comparison engine, i18n, filters
   ============================================================ */

/* ---------- DESTINATION IMAGE MAP: one destination-specific photo per circuit ---------- */
const DESTINATION_IMAGES = [
  {match:['Goa','Baga beach'], url:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2'},
  {match:['Kerala','Alleppey','backwaters'], url:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944'},
  {match:['Rajasthan','Jaipur','Jodhpur','Jaisalmer','Udaipur','Hawa Mahal'], url:'https://images.unsplash.com/photo-1477587458883-47145ed94245'},
  {match:['Kashmir','Srinagar','Dal Lake','Gulmarg','Pahalgam'], url:'https://images.unsplash.com/photo-1598091383021-15ddea10925d'},
  {match:['Golden Triangle','Taj Mahal','Agra'], url:'https://images.unsplash.com/photo-1564507592333-c60657eea523'},
  {match:['Varanasi','Ganges ghats','UP Spiritual','Ayodhya','Prayagraj'], url:'https://images.unsplash.com/photo-1561361058-c24cecae35ca'},
  {match:['Uttarakhand','Rishikesh','Haridwar','Mussoorie'], url:'https://images.unsplash.com/photo-1548013146-72479768bada'},
  {match:['Himachal','Manali','Shimla','Solang'], url:'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d'},
  {match:['Andaman','Radhanagar','Havelock','Neil Island'], url:'https://images.unsplash.com/photo-1544551763-46a013bb70d5'},
  {match:['Khajuraho Temples','Khajuraho Group of Monuments','Orchha'], url:'https://images.unsplash.com/photo-1606293926075-69a00dbfde81'},
  {match:['Kanha Tiger Reserve','Kanha National Park'], url:'https://images.unsplash.com/photo-1561731216-c3a4d99437d5'},
  {match:['Ujjain–Omkareshwar','Ujjain','Omkareshwar','Mahakaleshwar'], url:'https://commons.wikimedia.org/wiki/Special:FilePath/Mahakaleshwar%20Temple%20in%20Ujjain.jpg'},
  {match:['Bhedaghat Marble Rocks','Marble Rocks'], url:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e'},
  {match:['Madhya Pradesh'], url:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da'},
  {match:['Tarkarli','Malvan','Sindhudurg'], url:'https://images.unsplash.com/photo-1500375592092-40eb2168fd21'},
  {match:['Ganpatipule','Jaigad'], url:'https://images.unsplash.com/photo-1500375592092-40eb2168fd21'},
  {match:['Diveagar','Harihareshwar','Shrivardhan'], url:'https://images.unsplash.com/photo-1500375592092-40eb2168fd21'},
  {match:['Dapoli','Harnai'], url:'https://images.unsplash.com/photo-1500375592092-40eb2168fd21'},
  {match:['Ratnagiri','Pawas'], url:'https://images.unsplash.com/photo-1500375592092-40eb2168fd21'},
  {match:['Konkan Coast','Mumbai','Alibaug','Murud','Western Ghats','Chiplun'], url:'https://images.unsplash.com/photo-1570168007204-dfb528c6958f'},
  {match:['Ajanta','Ellora','Aurangabad'], url:'https://images.unsplash.com/photo-1606293926075-69a00dbfde81'},
  {match:['Kutch','Ahmedabad','Rann of Kutch'], url:'https://images.unsplash.com/photo-1518005020951-eccb494ad742'},
  {match:['Statue of Unity','Vadodara','Ekta Nagar'], url:'https://images.unsplash.com/photo-1567157577867-05R9b2a3f4a1'},
  {match:['Mysuru','Mysore','Coorg','Madikeri'], url:'https://images.unsplash.com/photo-1600100397608-f0102d6f4a5b'},
  {match:['Hampi','Vijayanagara','Hospet'], url:'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1'},
  {match:['Tamil Nadu Temple Trail','Thanjavur','Chennai'], url:'https://images.unsplash.com/photo-1609766857041-ed402ea8069a'},
  {match:['Madurai','Rameswaram','Ramanathapuram'], url:'https://images.unsplash.com/photo-1598434192043-6c7f9e1e9e9e'},
  {match:['Tirupati','Tirumala','Andhra Heritage'], url:'https://images.unsplash.com/photo-1605649487212-47bdab064df7'},
  {match:['Hyderabad','Golconda','Ramoji'], url:'https://images.unsplash.com/photo-1572445271230-a78b5944a659'},
  {match:['Puri','Konark','Odisha'], url:'https://images.unsplash.com/photo-1590766940551-4c5d14e3b2e2'},
  {match:['Darjeeling','North Bengal','tea gardens'], url:'https://images.unsplash.com/photo-1544735716-392fe2489ffa'},
  {match:['Gangtok','Sikkim','Tsomgo'], url:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'},
  {match:['Kaziranga','Assam','Brahmaputra'], url:'https://images.unsplash.com/photo-1561731216-c3a4d99437d5'},
  {match:['Meghalaya','Cherrapunji','Mawlynnong','waterfalls'], url:'https://images.unsplash.com/photo-1433086966358-54859d0ed716'},
  {match:['Bodh Gaya','Nalanda','Bihar'], url:'https://images.unsplash.com/photo-1548013146-72479768bada'},
  {match:['Amritsar','Golden Temple','Punjab'], url:'https://images.unsplash.com/photo-1588099768531-a72d4a198538'},
  {match:['Kurukshetra','Jyotisar','Brahma Sarovar'], url:'https://images.unsplash.com/photo-1605649487212-47bdab064df7'},
  {match:['Ranchi','Netarhat','Jharkhand'], url:'https://images.unsplash.com/photo-1511497584788-876760111969'},
  {match:['Bastar','Chitrakote','Chhattisgarh'], url:'https://images.unsplash.com/photo-1433086966358-54859d0ed716'},
  {match:['Tawang','Arunachal Pradesh','Bomdila'], url:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b'},
  {match:['Kohima','Nagaland','heritage sites'], url:'https://images.unsplash.com/photo-1500534623283-312aade485b7'},
  {match:['Imphal','Loktak Lake','Manipur'], url:'https://images.unsplash.com/photo-1501785888041-af3ef285b470'},
  {match:['Tripura','Agartala','Neermahal','Ujjayanta Palace'], url:'https://images.unsplash.com/photo-1518005020951-eccb494ad742'},
  {match:['Aizawl','Mizoram'], url:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'},
  {match:['Dzukou Valley','Dzukou'], url:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b'},
  {match:['Delhi','Old Delhi','India Gate'], url:'https://images.unsplash.com/photo-1587474260584-136574528ed5'},
  {match:['Ladakh','Leh','high-altitude'], url:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'},
  {match:['Lakshadweep','Agatti','island lagoons'], url:'https://images.unsplash.com/photo-1500375592092-40eb2168fd21'}
];
/* Destination-verified image source: Wikipedia page thumbnails for the named landmark/region.
   These are resolved from the page-image API so the picture matches the destination rather
   than relying on a generic stock-photo keyword match. If the API is unavailable, the
   existing curated image map remains as the fallback. */
const DESTINATION_WIKI_PAGES = {
  'goa':'Baga Beach', 'kerala':'Thekkady', 'rajasthan':'Hawa Mahal',
  'kashmir':'Gulmarg', 'golden-triangle':'Fatehpur Sikri', 'up-spiritual':'Varanasi',
  'uttarakhand':'Rishikesh', 'himachal':'Manali, Himachal Pradesh', 'andaman':'Port Blair',
  'madhya-pradesh':'Mahakaleshwar Temple, Ujjain', 'maharashtra-konkan':'Konkan Coast',
  'maharashtra-ajanta-ellora':'Ellora Caves', 'konkan-ganpatipule':'Jaigad Fort',
  'konkan-tarkarli-malvan':'Tarkarli', 'konkan-alibaug':'Murud-Janjira Fort',
  'konkan-diveagar-harihareshwar':'Diveagar', 'konkan-dapoli':'Harnai, Maharashtra',
  'konkan-ratnagiri':'Ratnagiri', 'konkan-mahabaleshwar-coast':'Western Ghats',
  'gujarat-kutch':'Kutch District', 'gujarat-statue-unity':'Statue of Unity',
  'karnataka-mysuru-coorg':'Coorg', 'karnataka-hampi':'Vijayanagara',
  'tamil-nadu-temple-trail':'Brihadisvara Temple', 'tamil-nadu-rameswaram':'Dhanushkodi',
  'andhra-tirupati':'Venkateswara Temple, Tirumala', 'telangana-hyderabad':'Golconda Fort',
  'odisha-puri-konark':'Jagannath Temple, Puri', 'west-bengal-darjeeling':'Darjeeling Himalayan Railway',
  'sikkim-gangtok':'Gangtok', 'assam-kaziranga':'Kaziranga National Park',
  'meghalaya-shillong':'Shillong', 'bihar-bodh-gaya':'Bodh Gaya',
  'punjab-amritsar':'Jallianwala Bagh', 'haryana-kurukshetra':'Jyotisar',
  'jharkhand-ranchi':'Hundru Falls', 'chhattisgarh-bastar':'Bastar',
  'arunachal-tawang':'Sela Pass', 'nagaland-kohima':'Kohima War Cemetery',
  'manipur-imphal':'Imphal', 'tripura-agartala':'Agartala', 'mizoram-aizawl':'Aizawl',
  'nagaland-dzukou':'Dzüko Valley', 'delhi-city':'Qutub Minar', 'ladakh-leh':'Leh Palace',
  'lakshadweep-islands':'Minicoy',
  "andhra-pradesh-araku-valley-borra-caves": "Araku Valley",
  "andhra-pradesh-tirupati-spiritual-journey": "Venkateswara Temple",
  "andhra-pradesh-vijayawada-amaravati-heritage": "Amaravati, Andhra Pradesh",
  "arunachal-pradesh-tawang-monastery-high-himalaya": "Tawang Monastery",
  "arunachal-pradesh-ziro-valley-culture-escape": "Ziro Valley",
  "arunachal-pradesh-namdapha-wildlife-gateway": "Namdapha National Park",
  "assam-kaziranga-wildlife-safari": "Indian rhinoceros",
  "assam-kamakhya-guwahati-spiritual-trail": "Kamakhya Temple",
  "assam-majuli-island-culture-journey": "Majuli",
  "bihar-bodh-gaya-buddhist-circuit": "Mahabodhi Temple",
  "bihar-nalanda-rajgir-heritage-trail": "Nalanda Mahavihara",
  "bihar-patna-vaishali-history-route": "Golghar",
  "chhattisgarh-chitrakote-bastar-nature-circuit": "Chitrakote Falls",
  "chhattisgarh-sirpur-buddhist-heritage": "Sirpur",
  "chhattisgarh-barnawapara-wildlife-escape": "Barnawapara Wildlife Sanctuary",
  "goa-old-goa-churches-panaji-heritage": "Basilica of Bom Jesus",
  "goa-south-goa-beaches-cabo-de-rama": "Cabo de Rama Fort",
  "goa-dudhsagar-western-ghats": "Dudhsagar Falls",
  "gujarat-dwarka-somnath-pilgrimage": "Dwarkadhish Temple",
  "gujarat-rann-of-kutch-bhuj-culture": "Great Rann of Kutch",
  "gujarat-ahmedabad-stepwells-heritage": "Adalaj Stepwell",
  "haryana-kurukshetra-sacred-heritage": "Brahma Sarovar",
  "haryana-sultanpur-birding-escape": "Sultanpur National Park",
  "haryana-morni-hills-pinjore-gardens": "Morni Hills",
  "himachal-pradesh-shimla-kufri-mountain-escape": "Shimla",
  "himachal-pradesh-dharamshala-mcleod-ganj": "McLeod Ganj",
  "himachal-pradesh-manali-solang-valley": "Solang Valley",
  "jharkhand-deoghar-baidyanath-dham-yatra": "Baidyanath Temple",
  "jharkhand-netarhat-hills-sunsets": "Netarhat",
  "jharkhand-betla-national-park-nature-trip": "Betla National Park",
  "karnataka-hampi-vijayanagara-heritage": "Hampi",
  "karnataka-mysuru-palace-coorg-hills": "Mysore Palace",
  "karnataka-gokarna-coastal-temple-trail": "Gokarna",
  "kerala-alappuzha-backwaters": "Alappuzha",
  "kerala-munnar-tea-gardens-hills": "Munnar",
  "kerala-kochi-fort-heritage-coast": "Fort Kochi",
  "madhya-pradesh-khajuraho-temples-orchha": "Khajuraho Group of Monuments",
  "madhya-pradesh-ujjain-omkareshwar-jyotirlinga-circuit": "Mahakaleshwar Jyotirlinga",
  "madhya-pradesh-kanha-tiger-reserve-nature-trip": "Kanha National Park",
  "maharashtra-mumbai-heritage-elephanta": "Elephanta Caves",
  "maharashtra-ajanta-ellora-cave-heritage": "Ajanta Caves",
  "maharashtra-konkan-coast-ganpatipule": "Ganpatipule",
  "manipur-loktak-lake-keibul-lamjao": "Loktak Lake",
  "manipur-imphal-heritage-kangla": "Kangla Fort",
  "manipur-ukhrul-hills-shirui-country": "Shirui Kashong Peak",
  "meghalaya-cherrapunji-waterfalls-caves": "Nohkalikai Falls",
  "meghalaya-dawki-river-mawlynnong": "Umngot River",
  "meghalaya-shillong-umiam-lake": "Umiam Lake",
  "mizoram-aizawl-city-reiek-hills": "Reiek",
  "mizoram-phawngpui-blue-mountain-escape": "Phawngpui National Park",
  "mizoram-serchhip-waterfall-village-culture": "Vantawng Falls",
  "nagaland-kohima-kisama-heritage": "Kisama Heritage Village",
  "nagaland-dzukou-valley-trek-gateway": "Dzukou Valley",
  "nagaland-mokokchung-ao-culture-trail": "Mokokchung",
  "odisha-puri-konark-bhubaneswar-heritage": "Konark Sun Temple",
  "odisha-chilika-lake-birdlife": "Chilika Lake",
  "odisha-similipal-forest-nature-route": "Similipal National Park",
  "punjab-amritsar-golden-temple-heritage": "Golden Temple",
  "punjab-anandpur-sahib-sikh-heritage": "Takht Sri Keshgarh Sahib",
  "punjab-rural-punjab-food-culture": "Qila Mubarak, Patiala",
  "rajasthan-jaipur-amber-fort-pink-city": "Amber Fort",
  "rajasthan-jaisalmer-desert-fort": "Jaisalmer Fort",
  "rajasthan-udaipur-lakes-mewar-heritage": "City Palace, Udaipur",
  "sikkim-gangtok-monasteries-tsomgo-lake": "Tsomgo Lake",
  "sikkim-pelling-monasteries-kanchenjunga-views": "Pemayangtse Monastery",
  "sikkim-namchi-south-sikkim-culture": "Buddha Park of Ravangla",
  "tamil-nadu-madurai-rameswaram-pilgrimage": "Ramanathaswamy Temple",
  "tamil-nadu-chennai-mahabalipuram-heritage": "Shore Temple",
  "tamil-nadu-ooty-nilgiri-mountain-escape": "Ooty",
  "telangana-hyderabad-forts-old-city": "Charminar",
  "telangana-ramappa-warangal-heritage": "Ramappa Temple",
  "telangana-nagarjuna-sagar-buddhist-heritage": "Nagarjuna Sagar",
  "tripura-ujjayanta-palace-agartala-heritage": "Ujjayanta Palace",
  "tripura-neermahal-lake-palace-journey": "Neermahal",
  "tripura-unakoti-rock-reliefs-forests": "Unakoti",
  "uttar-pradesh-varanasi-ghats-sarnath": "Dashashwamedh Ghat",
  "uttar-pradesh-ayodhya-spiritual-journey": "Ram Mandir, Ayodhya",
  "uttar-pradesh-agra-taj-mahal-fatehpur-sikri": "Taj Mahal",
  "uttarakhand-char-dham-yatra": "Kedarnath Temple",
  "uttarakhand-rishikesh-haridwar-spiritual-river-circuit": "Har Ki Pauri",
  "uttarakhand-nainital-kumaon-lakes": "Naini Lake",
  "west-bengal-kolkata-colonial-cultural-heritage": "Victoria Memorial, Kolkata",
  "west-bengal-darjeeling-tea-himalayan-views": "Happy Valley Tea Estate",
  "west-bengal-sundarbans-mangrove-nature-trip": "Sundarbans National Park",
  "andaman-and-nicobar-islands-port-blair-freedom-island-heritage": "Cellular Jail",
  "andaman-and-nicobar-islands-havelock-beaches-reef-coast": "Radhanagar Beach",
  "andaman-and-nicobar-islands-neil-island-slow-island-escape": "Bharatpur Beach, Andaman and Nicobar Islands",
  "chandigarh-chandigarh-architecture-rock-garden": "Rock Garden of Chandigarh",
  "chandigarh-sukhna-lake-garden-circuit": "Sukhna Lake",
  "chandigarh-chandigarh-pinjore-garden-heritage": "Yadavindra Gardens",
  "dadra-and-nagar-haveli-and-daman-and-diu-diu-fort-nagoa-beach": "Diu Fort",
  "dadra-and-nagar-haveli-and-daman-and-diu-daman-coastal-heritage": "Moti Daman Fort",
  "dadra-and-nagar-haveli-and-daman-and-diu-silvassa-tribal-culture-nature": "Vanganga Lake Garden",
  "delhi-old-delhi-mughal-heritage": "Red Fort",
  "delhi-new-delhi-monuments-museums": "India Gate",
  "delhi-delhi-spiritual-diversity-trail": "Lotus Temple",
  "jammu-and-kashmir-amarnath-yatra": "Amarnath Temple",
  "jammu-and-kashmir-srinagar-lakes-mughal-gardens": "Dal Lake",
  "jammu-and-kashmir-pahalgam-valley-nature-escape": "Pahalgam",
  "ladakh-leh-monasteries-indus-valley": "Thikse Monastery",
  "ladakh-nubra-valley-diskit": "Diskit Monastery",
  "ladakh-pangong-lake-landscape-journey": "Pangong Tso",
  "lakshadweep-agatti-lagoon-island-life": "Agatti Island",
  "lakshadweep-kavaratti-culture-coast": "Kavaratti",
  "lakshadweep-bangaram-island-slow-escape": "Bangaram Island",
  "puducherry-puducherry-french-quarter-promenade": "French Quarter, Puducherry",
  "puducherry-auroville-serenity-beach": "Auroville",
  "puducherry-karaikal-temple-coastal-trail": "Karaikal Ammaiyar Temple"
};
/* Verified, place-specific Wikimedia Commons image files for destinations whose prior
   fallback photos were misleading. Direct FilePath links avoid depending on Wikipedia's
   page-image API, which may be blocked by CORS or network filters in some browsers. */
const DESTINATION_DIRECT_IMAGE_FILES = {
  'madhya-pradesh': 'Mahakaleshwar Temple, Ujjain.jpg',
  'kashmir': 'Meadows of Gulmarg.jpg',
  'madhya-pradesh-ujjain-omkareshwar-jyotirlinga-circuit': 'Mahakaleshwar Temple in Ujjain.jpg',
  'maharashtra-ajanta-ellora': 'Ellora Caves, India.jpg',
  'maharashtra-ajanta-ellora-cave-heritage': 'Ajanta Caves India.jpg',
  'maharashtra-mumbai-heritage-elephanta': 'Elephanta Caves in Mumbai.jpg',
  'konkan-ganpatipule': 'Ganpatipule Temple.jpg',
  'konkan-tarkarli-malvan': 'Tarkarli beach.JPG',
  'konkan-alibaug': 'Murud-Janjira Fort.jpg',
  'konkan-diveagar-harihareshwar': 'Diveagar beach.jpg',
  'konkan-dapoli': 'Harnai beach in Dapoli district from a hilltop, Feb 2013.jpg',
  'konkan-ratnagiri': 'Beach in Ratnagiri.jpg',
  'konkan-mahabaleshwar-coast': 'The hills of the western Ghats, seen from a Konkan Railway train.jpg',
  'jammu-and-kashmir-amarnath-yatra': 'Shri Amarnath cave.jpg',
  'jammu-and-kashmir-srinagar-lakes-mughal-gardens': 'Dal Lake, Srinagar, Kashmir.jpg',
  'jammu-and-kashmir-pahalgam-valley-nature-escape': 'Pahalgam meadow.jpg',
  'ladakh-leh': 'Leh Palace, Ladakh 01.jpg',
  'ladakh-leh-monasteries-indus-valley': 'Thiksey Monastery Ladakh.jpg',
  'ladakh-nubra-valley-diskit': 'Diskit Valley view from the Monastery.jpg',
  'ladakh-pangong-lake-landscape-journey': 'Pangong Tso Lake.jpg',
  'punjab-amritsar': 'Golden Temple - Amritsar India.jpg',
  'punjab-amritsar-golden-temple-heritage': 'Golden Temple India.jpg',
  'punjab-anandpur-sahib-sikh-heritage': 'Photograph of Takht Kesgarh Sahib, Anandpur Sahib, Punjab, India, ca.1952 04.jpg',
  'punjab-rural-punjab-food-culture': 'Qila Mubarak, Patiala.jpg',
  'chandigarh-chandigarh-architecture-rock-garden': 'Rockgardenchandigarh 04.jpg',
  'chandigarh-sukhna-lake-garden-circuit': 'Sukhna Lake, Chandigarh.jpg',
  'chandigarh-chandigarh-pinjore-garden-heritage': 'Yadavindra Gardens in Pinjore.jpg'
};
function commonsImageUrl(file) {
  return 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(file).replace(/%20/g, '_') + '?width=1200';
}
function directDestinationImageUrl(slug) {
  const file = DESTINATION_DIRECT_IMAGE_FILES[slug];
  return file ? commonsImageUrl(file) : null;
}
function destinationPlaceholderUrl(slug) {
  const d = DESTINATIONS.find(item => item.slug === slug);
  const name = (d ? d.name : String(slug || 'Destination')).replace(/[&<>]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[ch]));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 900 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#dce9df"/><stop offset="1" stop-color="#e8eef7"/></linearGradient></defs><rect width="900" height="600" fill="url(#g)"/><circle cx="450" cy="215" r="82" fill="#ffffff" opacity=".78"/><path d="M395 239l55-76 55 76z" fill="#7a9c82"/><path d="M355 282l95-96 95 96z" fill="#426e58"/><text x="450" y="390" fill="#17365b" font-size="34" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700">${name.replace(/"/g,'&quot;')}</text><text x="450" y="438" fill="#526a80" font-size="21" text-anchor="middle" font-family="Arial,sans-serif">GHOOMO · Destination image</text></svg>`;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

const destinationImageCache = new Map();
async function getDestinationWikiImage(slug) {
  const page = DESTINATION_WIKI_PAGES[slug];
  if (!page) return null;
  if (!destinationImageCache.has(slug)) {
    const promise = fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=1400&titles=' + encodeURIComponent(page) + '&origin=*')
      .then(response => response.ok ? response.json() : null)
      .then(data => {
        const pages = data && data.query && data.query.pages ? Object.values(data.query.pages) : [];
        return pages.find(item => item.thumbnail && item.thumbnail.source)?.thumbnail.source || null;
      }).catch(() => null);
    destinationImageCache.set(slug, promise);
  }
  return destinationImageCache.get(slug);
}
async function resolveDestinationImages(root) {
  if (!root) return;
  const targets = [...root.querySelectorAll('[data-destination-image]')];
  const pending = [];
  for (const target of targets) {
    const slug = target.dataset.destinationImage;
    const directFile = DESTINATION_DIRECT_IMAGE_FILES[slug];
    target.onerror = () => {
      if (target.dataset.imagePlaceholderApplied === '1') return;
      target.dataset.imagePlaceholderApplied = '1';
      target.onerror = null;
      target.src = destinationPlaceholderUrl(slug);
    };
    if (directFile) {
      // Assign the explicit landmark photograph immediately; do not flash a generic fallback.
      target.src = commonsImageUrl(directFile);
    } else {
      pending.push(target);
    }
  }
  // Other destinations continue to use their specific Wikipedia page thumbnail when available.
  let next = 0;
  const workers = Array.from({length: Math.min(5, pending.length)}, async () => {
    while (next < pending.length) {
      const target = pending[next++];
      const url = await getDestinationWikiImage(target.dataset.destinationImage);
      if (!target.isConnected) continue;
      if (url) target.src = url;
      else if (!target.getAttribute('src')) target.src = destinationPlaceholderUrl(target.dataset.destinationImage);
    }
  });
  await Promise.all(workers);
}
function img(keywords, lock, w, h) {
  w = w || 1200; h = h || 800;
  const item = DESTINATION_IMAGES.find(x => x.match.some(term => keywords.toLowerCase().includes(term.toLowerCase())));
  return item ? `${item.url}${item.url.includes('wikimedia.org') ? '' : '?auto=format&fit=crop&w='+w+'&h='+h+'&q=88'}` : `https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=${w}&h=${h}&q=88`;
}

/* ---------- DESTINATIONS DATA ---------- */
const DESTINATIONS = [
  {
    slug: 'goa', name: 'Goa', state: 'Goa', region: 'North Goa · South Goa', tags: ['Beach','Heritage','Nightlife'],
    desc: 'Beaches, heritage, water sports and relaxed coastal experiences.',
    days: '4N / 5D', nights: 4, priceFrom: 13999, rating: 4.6, lock: 1, imgKey: 'Goa, Baga beach, Portuguese heritage, India',
    tripStyles: [
      {t:'Classic Goa', d:'Beaches + sightseeing'},
      {t:'Beach & Chill', d:'Relaxed coastal escape'},
      {t:'Adventure Goa', d:'Water sports + experiences'},
      {t:'Culture & Heritage', d:'Churches + old Goa'}
    ],
    itinerary: [
      {t:'Arrive · North Goa', d:'Check-in, relax and discover the nearby beach.'},
      {t:'North Goa circuit', d:'Calangute · Baga · Anjuna · Vagator.'},
      {t:'South Goa', d:'Colva · heritage sights · sunset by the coast.'},
      {t:'Free / experience day', d:'Choose water sports, leisure or local exploration.'},
      {t:'Departure', d:'Breakfast, check-out and onward journey.'}
    ]
  },
  {
    slug: 'kerala', name: 'Kerala', state: 'Kerala', region: 'Kochi · Munnar · Thekkady · Alleppey', tags: ['Backwaters','Wellness','Hills'],
    desc: 'Hill stations, wildlife, spices and tranquil backwaters.',
    days: '6N / 7D', nights: 6, priceFrom: 21999, rating: 4.7, lock: 2, imgKey: 'Kerala Alleppey backwaters houseboat India',
    tripStyles: [
      {t:'Classic Kerala', d:'Backwaters + hills'},
      {t:'Ayurveda & Wellness', d:'Spa retreats + houseboat'},
      {t:'Wildlife Trail', d:'Thekkady + Periyar reserve'},
      {t:'Honeymoon Special', d:'Munnar + Alleppey houseboat'}
    ],
    itinerary: [
      {t:'Arrive · Kochi', d:'Fort Kochi heritage walk and Chinese fishing nets.'},
      {t:'Munnar hills', d:'Tea gardens, viewpoints and cool climate.'},
      {t:'Thekkady wildlife', d:'Periyar sanctuary and spice plantation tour.'},
      {t:'Alleppey backwaters', d:'Overnight traditional houseboat cruise.'},
      {t:'Kumarakom', d:'Backwater villages and bird sanctuary.'},
      {t:'Leisure day', d:'Beach or ayurveda spa, at your pace.'},
      {t:'Departure', d:'Transfer to Kochi for onward journey.'}
    ]
  },
  {
    slug: 'rajasthan', name: 'Rajasthan', state: 'Rajasthan', region: 'Jaipur · Jodhpur · Jaisalmer · Udaipur', tags: ['Heritage','Desert','Royalty'],
    desc: 'Forts, palaces, desert landscapes and royal cities.',
    days: '8N / 9D', nights: 8, priceFrom: 27999, rating: 4.7, lock: 3, imgKey: 'Rajasthan Jaipur Hawa Mahal India',
    tripStyles: [
      {t:'Royal Rajasthan', d:'Forts + palaces circuit'},
      {t:'Desert Experience', d:'Jaisalmer + camel safari'},
      {t:'Lakes & Havelis', d:'Udaipur + Jodhpur focus'},
      {t:'Heritage Hotels', d:'Palace-stay upgrade route'}
    ],
    itinerary: [
      {t:'Arrive · Jaipur', d:'Amber Fort and City Palace heritage walk.'},
      {t:'Jaipur sightseeing', d:'Hawa Mahal, Jantar Mantar and local bazaars.'},
      {t:'Drive to Jodhpur', d:'Mehrangarh Fort and the Blue City.'},
      {t:'Jodhpur to Jaisalmer', d:'Golden Fort and havelis.'},
      {t:'Desert camp', d:'Camel safari and overnight desert camp.'},
      {t:'Jaisalmer to Udaipur', d:'Scenic drive through rural Rajasthan.'},
      {t:'Udaipur', d:'City Palace, Lake Pichola boat ride.'},
      {t:'Leisure day', d:'Local markets and optional excursions.'},
      {t:'Departure', d:'Transfer to airport / railway station.'}
    ]
  },
  {
    slug: 'kashmir', name: 'Kashmir', state: 'Jammu & Kashmir', region: 'Srinagar · Gulmarg · Pahalgam · Sonamarg', tags: ['Lakes','Mountains','Snow'],
    desc: 'Lakes, mountains and seasonal alpine experiences.',
    days: '5N / 6D', nights: 5, priceFrom: 24999, rating: 4.8, lock: 4, imgKey: 'Kashmir Srinagar Dal Lake mountains India',
    tripStyles: [
      {t:'Classic Kashmir', d:'Srinagar + Gulmarg + Pahalgam'},
      {t:'Snow Special', d:'Gulmarg gondola + snow points'},
      {t:'Houseboat Stay', d:'Dal Lake shikara + houseboat'},
      {t:'Honeymoon Special', d:'Scenic valleys, slower pace'}
    ],
    itinerary: [
      {t:'Arrive · Srinagar', d:'Dal Lake shikara ride and houseboat check-in.'},
      {t:'Gulmarg', d:'Gondola ride and meadow views.'},
      {t:'Pahalgam', d:'Betaab Valley and Lidder river.'},
      {t:'Sonamarg', d:'Thajiwas glacier viewpoint.'},
      {t:'Srinagar gardens', d:'Mughal Gardens and local handicrafts.'},
      {t:'Departure', d:'Transfer to Srinagar airport.'}
    ]
  },
  {
    slug: 'golden-triangle', name: 'Golden Triangle', state: 'Delhi · Uttar Pradesh · Rajasthan', region: 'Delhi · Agra · Jaipur', tags: ['Heritage','Culture','First Trip'],
    desc: "India's iconic first-time heritage circuit.",
    days: '4N / 5D', nights: 4, priceFrom: 15999, rating: 4.6, lock: 5, imgKey: 'Agra Taj Mahal India',
    tripStyles: [
      {t:'Classic Circuit', d:'Delhi + Agra + Jaipur'},
      {t:'Heritage Deep-Dive', d:'Extra time at monuments'},
      {t:'Comfort Plus', d:'Premium hotels + private cab'}
    ],
    itinerary: [
      {t:'Arrive · Delhi', d:'Qutub Minar and India Gate drive-by.'},
      {t:'Delhi to Agra', d:'Taj Mahal at sunrise, Agra Fort.'},
      {t:'Agra to Jaipur', d:'Fatehpur Sikri en route.'},
      {t:'Jaipur sightseeing', d:'Amber Fort, City Palace, Hawa Mahal.'},
      {t:'Departure', d:'Transfer to Jaipur airport / Delhi return.'}
    ]
  },
  {
    slug: 'up-spiritual', name: 'UP Spiritual Circuit', state: 'Uttar Pradesh', region: 'Ayodhya · Varanasi · Prayagraj', tags: ['Pilgrimage','Culture','Heritage'],
    desc: 'A spiritual journey linking major pilgrimage experiences.',
    days: '5N / 6D', nights: 5, priceFrom: 16999, rating: 4.5, lock: 6, imgKey: 'Varanasi Ganges ghats India',
    tripStyles: [
      {t:'Classic Circuit', d:'Ayodhya + Varanasi + Prayagraj'},
      {t:'Ganga Aarti Special', d:'Evening aarti focus, Varanasi'},
      {t:'Senior Friendly', d:'Slower pace, private transport'}
    ],
    itinerary: [
      {t:'Arrive · Ayodhya', d:'Ram Janmabhoomi and Saryu Aarti.'},
      {t:'Ayodhya to Prayagraj', d:'Triveni Sangam boat ride.'},
      {t:'Prayagraj to Varanasi', d:'Evening Ganga Aarti at Dashashwamedh Ghat.'},
      {t:'Varanasi', d:'Sunrise boat ride and old city walk.'},
      {t:'Sarnath excursion', d:'Buddhist heritage site visit.'},
      {t:'Departure', d:'Transfer to Varanasi airport.'}
    ]
  },
  {
    slug: 'uttarakhand', name: 'Uttarakhand', state: 'Uttarakhand', region: 'Haridwar · Rishikesh · Mussoorie', tags: ['Spiritual','Yoga','Adventure'],
    desc: 'Ganga spirituality, yoga and Himalayan foothill escapes.',
    days: '5N / 6D', nights: 5, priceFrom: 18999, rating: 4.6, lock: 7, imgKey: 'Rishikesh Ganges Himalaya India',
    tripStyles: [
      {t:'Classic Circuit', d:'Haridwar + Rishikesh + Mussoorie'},
      {t:'Yoga & Wellness', d:'Ashram stay + yoga sessions'},
      {t:'Adventure Add-on', d:'River rafting + trekking'}
    ],
    itinerary: [
      {t:'Arrive · Haridwar', d:'Ganga Aarti at Har Ki Pauri.'},
      {t:'Rishikesh', d:'Laxman Jhula, ashrams and riverside cafes.'},
      {t:'Rishikesh adventure', d:'Optional river rafting on the Ganges.'},
      {t:'Drive to Mussoorie', d:'Hill station check-in, Mall Road evening.'},
      {t:'Mussoorie sightseeing', d:'Kempty Falls and viewpoints.'},
      {t:'Departure', d:'Transfer to Dehradun airport / railway station.'}
    ]
  },
  {
    slug: 'himachal', name: 'Himachal Pradesh', state: 'Himachal Pradesh', region: 'Shimla · Manali · Solang', tags: ['Mountains','Snow','Family'],
    desc: 'Hill towns, valleys and Himalayan adventure.',
    days: '6N / 7D', nights: 6, priceFrom: 19999, rating: 4.6, lock: 8, imgKey: 'Manali Himachal Pradesh mountains India',
    tripStyles: [
      {t:'Classic Himachal', d:'Shimla + Manali'},
      {t:'Snow & Adventure', d:'Solang Valley activities'},
      {t:'Family Special', d:'Comfortable pace, toy train'}
    ],
    itinerary: [
      {t:'Arrive · Shimla', d:'Mall Road and Ridge, toy train option.'},
      {t:'Shimla to Manali', d:'Scenic Kullu valley drive.'},
      {t:'Manali sightseeing', d:'Hadimba Temple and Old Manali.'},
      {t:'Solang Valley', d:'Adventure activities and cable car.'},
      {t:'Rohtang / Atal Tunnel', d:'Snow point excursion (season-dependent).'},
      {t:'Leisure day', d:'Local markets and cafes.'},
      {t:'Departure', d:'Transfer to Chandigarh airport.'}
    ]
  },
  {
    slug: 'andaman', name: 'Andaman', state: 'Andaman & Nicobar Islands', region: 'Port Blair · Havelock · Neil Island', tags: ['Island','Beach','Diving'],
    desc: 'Island beaches and marine experiences.',
    days: '5N / 6D', nights: 5, priceFrom: 28999, rating: 4.7, lock: 9, imgKey: 'Andaman Radhanagar Beach India',
    tripStyles: [
      {t:'Classic Islands', d:'Port Blair + Havelock + Neil'},
      {t:'Diving Special', d:'Scuba + snorkeling focus'},
      {t:'Honeymoon Special', d:'Beach resort, slower pace'}
    ],
    itinerary: [
      {t:'Arrive · Port Blair', d:'Cellular Jail light and sound show.'},
      {t:'Port Blair to Havelock', d:'Ferry transfer, Radhanagar Beach sunset.'},
      {t:'Havelock activities', d:'Scuba diving or snorkeling.'},
      {t:'Havelock to Neil Island', d:'Bharatpur and Laxmanpur beaches.'},
      {t:'Return to Port Blair', d:'Ferry transfer, leisure evening.'},
      {t:'Departure', d:'Transfer to Port Blair airport.'}
    ]
  },
  {
    slug: 'madhya-pradesh', name: 'Madhya Pradesh', state: 'Madhya Pradesh', region: 'Indore · Ujjain · Omkareshwar', tags: ['Heritage','Wildlife','Spiritual'],
    desc: 'Food, temples and Jyotirlinga pilgrimage.',
    days: '4N / 5D', nights: 4, priceFrom: 14999, rating: 4.5, lock: 10, imgKey: 'Bhedaghat Marble Rocks Madhya Pradesh',
    tripStyles: [
      {t:'Classic Circuit', d:'Indore + Ujjain + Omkareshwar'},
      {t:'Temple Trail', d:'Jyotirlinga-focused pilgrimage'},
      {t:'Food & Heritage', d:'Indore street food + old city'}
    ],
    itinerary: [
      {t:'Arrive · Indore', d:'Sarafa Bazaar street food walk.'},
      {t:'Indore to Ujjain', d:'Mahakaleshwar Temple darshan.'},
      {t:'Ujjain sightseeing', d:'Ram Ghat and local temples.'},
      {t:'Ujjain to Omkareshwar', d:'Narmada riverside temple visit.'},
      {t:'Departure', d:'Transfer to Indore airport.'}
    ]
  },
  {
    slug: "maharashtra-konkan", name: "Konkan Coast & Mumbai", state: "Maharashtra", region: "Mumbai · Alibaug · Ratnagiri", tags: ["Beach", "Culture", "Family"],
    desc: "Coastal escapes, heritage neighbourhoods and Konkan cuisine.", days: "5N / 6D", nights: 5, priceFrom: 15999, rating: 4.5, lock: 11, imgKey: "Konkan Coast & Mumbai Maharashtra India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Mumbai", d:"Explore the Gateway of India waterfront."},
      {t:"Mumbai heritage", d:"Choose a heritage walk or museum visit."},
      {t:"Konkan coast", d:"Travel onward to a coastal town; route depends on package."},
      {t:"Coastal day", d:"Enjoy beaches and local food at a relaxed pace."},
      {t:"Departure", d:"Return transfer to Mumbai."}
    ]
  },
  {
    slug: "maharashtra-ajanta-ellora", name: "Ajanta & Ellora Heritage", state: "Maharashtra", region: "Aurangabad · Ajanta · Ellora", tags: ["Heritage", "Culture", "Family"],
    desc: "Cave temples, historic architecture and regional food.", days: "4N / 5D", nights: 4, priceFrom: 13999, rating: 4.5, lock: 12, imgKey: "Ajanta & Ellora Heritage Maharashtra India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Chhatrapati Sambhajinagar", d:"Check in and explore the city."},
      {t:"Ellora Caves", d:"Visit the rock-cut cave complex."},
      {t:"Ajanta Caves", d:"Plan a full-day heritage excursion."},
      {t:"Departure", d:"Transfer to the railway station or airport."}
    ]
  },
  {
    slug: "konkan-ganpatipule", name: "Ganpatipule & Jaigad", state: "Maharashtra", region: "Ratnagiri · Ganpatipule · Jaigad", tags: ["Beach", "Temple", "Coast"],
    desc: "Konkan beaches, the Ganpati temple and coastal forts.", days: "3N / 4D", nights: 3, priceFrom: 9999, rating: 4.5, lock: 39, imgKey: "Ganpatipule Konkan Maharashtra beach temple",
    tripStyles: [{t:"Beach & temple",d:"Ganpatipule beach and temple visit"},{t:"Coastal heritage",d:"Jaigad Fort and nearby viewpoints"},{t:"Relaxed Konkan",d:"Local food and a slower coastal pace"}],
    itinerary: [{t:"Arrive · Ratnagiri",d:"Transfer to the coast and check in."},{t:"Ganpatipule",d:"Visit the temple and beach; follow local guidance."},{t:"Jaigad coast",d:"Explore the fort area and coastal viewpoints."},{t:"Departure",d:"Return transfer as arranged."}]
  },
  {
    slug: "konkan-tarkarli-malvan", name: "Tarkarli & Malvan", state: "Maharashtra", region: "Malvan · Tarkarli · Sindhudurg", tags: ["Beach", "Fort", "Nature"],
    desc: "Konkan beaches, Sindhudurg Fort and seasonal water activities.", days: "4N / 5D", nights: 4, priceFrom: 12999, rating: 4.5, lock: 40, imgKey: "Tarkarli Malvan Sindhudurg Konkan beach",
    tripStyles: [{t:"Beach break",d:"Tarkarli shoreline and relaxed time"},{t:"Fort & culture",d:"Sindhudurg Fort, subject to access and conditions"},{t:"Coastal adventure",d:"Optional local water activities when available"}],
    itinerary: [{t:"Arrive · Malvan",d:"Check in and explore the local area."},{t:"Sindhudurg Fort",d:"Plan a visit subject to boat services and sea conditions."},{t:"Tarkarli beach",d:"Enjoy the coast and optional activities."},{t:"Local Konkan day",d:"Try regional cuisine and explore nearby beaches."},{t:"Departure",d:"Return transfer as arranged."}]
  },
  {
    slug: "konkan-alibaug", name: "Alibaug & Murud–Janjira", state: "Maharashtra", region: "Alibaug · Murud · Janjira", tags: ["Beach", "Fort", "Weekend"],
    desc: "A coastal getaway with beaches and the historic sea-fort area.", days: "3N / 4D", nights: 3, priceFrom: 10999, rating: 4.5, lock: 41, imgKey: "Alibaug Murud Janjira Konkan coast",
    tripStyles: [{t:"Weekend coast",d:"Beach time and local food"},{t:"Fort trail",d:"Murud–Janjira visit subject to boat access"},{t:"Family getaway",d:"Flexible schedule with rest time"}],
    itinerary: [{t:"Arrive · Alibaug",d:"Check in and visit a nearby beach."},{t:"Alibaug coast",d:"Explore the coast and local attractions."},{t:"Murud–Janjira",d:"Plan a fort excursion subject to weather and boat operations."},{t:"Departure",d:"Return transfer as arranged."}]
  },
  {
    slug: "konkan-diveagar-harihareshwar", name: "Diveagar & Harihareshwar", state: "Maharashtra", region: "Diveagar · Shrivardhan · Harihareshwar", tags: ["Beach", "Nature", "Relaxed"],
    desc: "A quieter Konkan circuit with beaches, coastal scenery and temples.", days: "3N / 4D", nights: 3, priceFrom: 9999, rating: 4.4, lock: 42, imgKey: "Diveagar Harihareshwar Shrivardhan Konkan beach",
    tripStyles: [{t:"Quiet beaches",d:"A slower coastal escape"},{t:"Temple & coast",d:"Harihareshwar temple area and shoreline"},{t:"Relaxed family trip",d:"Flexible pace and downtime"}],
    itinerary: [{t:"Arrive · Diveagar",d:"Check in and enjoy the beach area."},{t:"Diveagar & Shrivardhan",d:"Explore beaches and local cuisine."},{t:"Harihareshwar",d:"Visit the temple area and coast, respecting local conditions."},{t:"Departure",d:"Return transfer as arranged."}]
  },
  {
    slug: "konkan-dapoli", name: "Dapoli & Harnai Coast", state: "Maharashtra", region: "Dapoli · Harnai · Murud", tags: ["Beach", "Nature", "Family"],
    desc: "Green coastal landscapes, beaches and fishing-harbour experiences.", days: "3N / 4D", nights: 3, priceFrom: 10499, rating: 4.4, lock: 43, imgKey: "Dapoli Harnai Konkan Maharashtra coastline",
    tripStyles: [{t:"Coastal escape",d:"Beaches and coastal viewpoints"},{t:"Local life",d:"Fishing harbour and regional food where available"},{t:"Easy pace",d:"Flexible sightseeing with breaks"}],
    itinerary: [{t:"Arrive · Dapoli",d:"Check in and explore nearby surroundings."},{t:"Harnai coast",d:"Visit the harbour area subject to local activity and access."},{t:"Beach day",d:"Choose a nearby beach and enjoy a relaxed schedule."},{t:"Departure",d:"Return transfer as arranged."}]
  },
  {
    slug: "konkan-ratnagiri", name: "Ratnagiri & Ganpatipule", state: "Maharashtra", region: "Ratnagiri · Pawas · Ganpatipule", tags: ["Coast", "Heritage", "Food"],
    desc: "Konkan coastal scenery, heritage stops and seasonal mango-country experiences.", days: "4N / 5D", nights: 4, priceFrom: 11999, rating: 4.5, lock: 44, imgKey: "Ratnagiri Ganpatipule Konkan coastline",
    tripStyles: [{t:"Coast & heritage",d:"Coastal viewpoints and local heritage"},{t:"Food & orchards",d:"Regional cuisine and seasonal produce"},{t:"Temple & beach",d:"Ganpatipule with a relaxed coastal plan"}],
    itinerary: [{t:"Arrive · Ratnagiri",d:"Check in and explore the town."},{t:"Ratnagiri coast",d:"Visit selected viewpoints and heritage stops."},{t:"Pawas & local area",d:"Optional visit depending on traveller interest and opening conditions."},{t:"Ganpatipule",d:"Visit the temple and beach."},{t:"Departure",d:"Return transfer as arranged."}]
  },
  {
    slug: "konkan-mahabaleshwar-coast", name: "Konkan Coast & Western Ghats", state: "Maharashtra", region: "Chiplun · Khed · coastal viewpoints", tags: ["Nature", "Road trip", "Scenic"],
    desc: "A flexible inland-to-coast circuit through Konkan landscapes; exact route depends on package.", days: "4N / 5D", nights: 4, priceFrom: 12999, rating: 4.4, lock: 45, imgKey: "Konkan Western Ghats Maharashtra green coast",
    tripStyles: [{t:"Scenic drive",d:"Plan a route with breaks and daylight travel"},{t:"Nature-focused",d:"Green landscapes and local viewpoints"},{t:"Slow travel",d:"Fewer stops and longer stays"}],
    itinerary: [{t:"Arrive · Chiplun area",d:"Check in and confirm onward transport."},{t:"Konkan landscapes",d:"Explore selected viewpoints based on weather and access."},{t:"Coastal excursion",d:"Choose a nearby coastal destination with your provider."},{t:"Leisure day",d:"Local food and flexible sightseeing."},{t:"Departure",d:"Return transfer as arranged."}]
  },
  {
    slug: "gujarat-kutch", name: "Kutch & Ahmedabad", state: "Gujarat", region: "Ahmedabad · Bhuj · Rann of Kutch", tags: ["Culture", "Heritage", "Family"],
    desc: "Craft villages, historic Ahmedabad and seasonal salt-desert landscapes.", days: "5N / 6D", nights: 5, priceFrom: 18999, rating: 4.5, lock: 13, imgKey: "Kutch & Ahmedabad Gujarat India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Ahmedabad", d:"Explore the old city and local cuisine."},
      {t:"Ahmedabad heritage", d:"Visit selected heritage landmarks."},
      {t:"Travel to Kutch", d:"Continue to Bhuj and nearby craft communities."},
      {t:"Rann experience", d:"Salt-desert visit subject to season and access."},
      {t:"Departure", d:"Return transfer as arranged."}
    ]
  },
  {
    slug: "gujarat-statue-unity", name: "Statue of Unity & Vadodara", state: "Gujarat", region: "Vadodara · Ekta Nagar · Statue of Unity", tags: ["Family", "Culture", "Family"],
    desc: "A family-friendly cultural and landmark circuit.", days: "3N / 4D", nights: 3, priceFrom: 11999, rating: 4.5, lock: 14, imgKey: "Statue of Unity & Vadodara Gujarat India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Vadodara", d:"Check in and explore the city."},
      {t:"Statue of Unity", d:"Visit the landmark and surrounding attractions."},
      {t:"Departure", d:"Return transfer to Vadodara."}
    ]
  },
  {
    slug: "karnataka-mysuru-coorg", name: "Mysuru & Coorg", state: "Karnataka", region: "Mysuru · Madikeri · Coorg", tags: ["Nature", "Culture", "Family"],
    desc: "Palaces, coffee country and misty Western Ghats landscapes.", days: "5N / 6D", nights: 5, priceFrom: 17999, rating: 4.5, lock: 15, imgKey: "Mysuru & Coorg Karnataka India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Mysuru", d:"Visit the palace area and local markets."},
      {t:"Mysuru sightseeing", d:"Explore gardens and cultural sights."},
      {t:"Drive to Coorg", d:"Scenic transfer into coffee country."},
      {t:"Coorg nature day", d:"Choose a viewpoint, estate visit or easy nature walk."},
      {t:"Departure", d:"Transfer to the onward connection."}
    ]
  },
  {
    slug: "karnataka-hampi", name: "Hampi Heritage Trail", state: "Karnataka", region: "Hospet · Hampi · Vijayanagara", tags: ["Heritage", "Culture", "Family"],
    desc: "Ruins, temples and landscapes of the Vijayanagara region.", days: "4N / 5D", nights: 4, priceFrom: 14999, rating: 4.5, lock: 16, imgKey: "Hampi Heritage Trail Karnataka India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Hospet", d:"Transfer to Hampi and check in."},
      {t:"Hampi monuments", d:"Explore the main temple and palace areas."},
      {t:"Hampi landscape", d:"Visit selected ruins and viewpoints."},
      {t:"Departure", d:"Transfer to Hospet station."}
    ]
  },
  {
    slug: "tamil-nadu-temple-trail", name: "Tamil Nadu Temple Trail", state: "Tamil Nadu", region: "Chennai · Thanjavur · Madurai", tags: ["Spiritual", "Culture", "Family"],
    desc: "Temple architecture, classical heritage and local cuisine.", days: "5N / 6D", nights: 5, priceFrom: 17999, rating: 4.5, lock: 17, imgKey: "Tamil Nadu Temple Trail Tamil Nadu India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Chennai", d:"Check in and explore nearby sights."},
      {t:"Travel to Thanjavur", d:"Visit the historic temple district."},
      {t:"Heritage day", d:"Explore local architecture and crafts."},
      {t:"Madurai", d:"Visit the temple area and markets."},
      {t:"Departure", d:"Transfer to the onward connection."}
    ]
  },
  {
    slug: "tamil-nadu-rameswaram", name: "Madurai & Rameswaram", state: "Tamil Nadu", region: "Madurai · Ramanathapuram · Rameswaram", tags: ["Spiritual", "Culture", "Family"],
    desc: "A pilgrimage and coastal heritage route in southern Tamil Nadu.", days: "4N / 5D", nights: 4, priceFrom: 14999, rating: 4.5, lock: 18, imgKey: "Madurai & Rameswaram Tamil Nadu India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Madurai", d:"Visit the city and temple district."},
      {t:"Travel to Rameswaram", d:"Journey across the Pamban region."},
      {t:"Rameswaram sightseeing", d:"Explore key pilgrimage sites at your pace."},
      {t:"Departure", d:"Return transfer as arranged."}
    ]
  },
  {
    slug: "andhra-tirupati", name: "Tirupati & Andhra Heritage", state: "Andhra Pradesh", region: "Tirupati · Tirumala · Chandragiri", tags: ["Spiritual", "Culture", "Family"],
    desc: "Pilgrimage planning with heritage stops around Tirupati.", days: "3N / 4D", nights: 3, priceFrom: 9999, rating: 4.5, lock: 19, imgKey: "Tirupati & Andhra Heritage Andhra Pradesh India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Tirupati", d:"Check in and prepare for darshan arrangements."},
      {t:"Tirumala visit", d:"Darshan subject to official booking and timings."},
      {t:"Departure", d:"Transfer to the station or airport."}
    ]
  },
  {
    slug: "telangana-hyderabad", name: "Hyderabad City Escape", state: "Telangana", region: "Hyderabad · Golconda · Ramoji area", tags: ["Culture", "Heritage", "Family"],
    desc: "Historic monuments, markets and Hyderabadi cuisine.", days: "3N / 4D", nights: 3, priceFrom: 10999, rating: 4.5, lock: 20, imgKey: "Hyderabad City Escape Telangana India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Hyderabad", d:"Explore the old city and local food."},
      {t:"City highlights", d:"Visit selected monuments and museums."},
      {t:"Departure", d:"Transfer to the airport or station."}
    ]
  },
  {
    slug: "odisha-puri-konark", name: "Puri & Konark Coast", state: "Odisha", region: "Bhubaneswar · Puri · Konark", tags: ["Spiritual", "Culture", "Family"],
    desc: "Temple heritage, coastal scenery and craft traditions.", days: "4N / 5D", nights: 4, priceFrom: 13999, rating: 4.5, lock: 21, imgKey: "Puri & Konark Coast Odisha India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Bhubaneswar", d:"Explore selected city temples."},
      {t:"Puri", d:"Visit the town and seaside area."},
      {t:"Konark excursion", d:"Visit the Sun Temple area; check access before travel."},
      {t:"Departure", d:"Transfer to Bhubaneswar."}
    ]
  },
  {
    slug: "west-bengal-darjeeling", name: "Darjeeling & North Bengal", state: "West Bengal", region: "Siliguri · Darjeeling · tea gardens", tags: ["Mountains", "Culture", "Nature"],
    desc: "Tea estates, Himalayan views and hill-town heritage.", days: "5N / 6D", nights: 5, priceFrom: 18999, rating: 4.5, lock: 22, imgKey: "Darjeeling & North Bengal West Bengal India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Siliguri", d:"Transfer to the hills."},
      {t:"Darjeeling town", d:"Explore local markets and viewpoints."},
      {t:"Tea and heritage", d:"Choose a tea estate or heritage railway experience."},
      {t:"Leisure day", d:"Enjoy a relaxed hill-town day."},
      {t:"Departure", d:"Transfer back to Siliguri."}
    ]
  },
  {
    slug: "sikkim-gangtok", name: "Gangtok & Sikkim", state: "Sikkim", region: "Gangtok · Tsomgo area · local monasteries", tags: ["Mountains", "Culture", "Nature"],
    desc: "Mountain viewpoints, monasteries and local culture.", days: "5N / 6D", nights: 5, priceFrom: 19999, rating: 4.5, lock: 23, imgKey: "Gangtok & Sikkim Sikkim India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Gangtok", d:"Transfer and acclimatise."},
      {t:"Gangtok sightseeing", d:"Explore monasteries and town viewpoints."},
      {t:"Mountain excursion", d:"Tsomgo-area visits subject to permits and weather."},
      {t:"Leisure day", d:"Explore local markets and cafes."},
      {t:"Departure", d:"Transfer to the onward connection."}
    ]
  },
  {
    slug: "assam-kaziranga", name: "Assam & Kaziranga", state: "Assam", region: "Guwahati · Kaziranga · Brahmaputra", tags: ["Wildlife", "Culture", "Family"],
    desc: "Wildlife experiences, river landscapes and Assamese culture.", days: "4N / 5D", nights: 4, priceFrom: 17999, rating: 4.5, lock: 24, imgKey: "Assam & Kaziranga Assam India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Guwahati", d:"Explore selected city sights."},
      {t:"Travel to Kaziranga", d:"Transfer to the park region."},
      {t:"Wildlife experience", d:"Safaris depend on season, permits and park rules."},
      {t:"Departure", d:"Return transfer as arranged."}
    ]
  },
  {
    slug: "meghalaya-shillong", name: "Meghalaya Waterfalls & Caves", state: "Meghalaya", region: "Shillong · Cherrapunji · Mawlynnong area", tags: ["Nature", "Culture", "Family"],
    desc: "Waterfalls, caves and green hill landscapes.", days: "4N / 5D", nights: 4, priceFrom: 16999, rating: 4.5, lock: 25, imgKey: "Meghalaya Waterfalls & Caves Meghalaya India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Shillong", d:"Explore the town and local markets."},
      {t:"Cherrapunji region", d:"Visit selected waterfalls and viewpoints."},
      {t:"Caves and villages", d:"Choose accessible caves or village visits based on conditions."},
      {t:"Departure", d:"Transfer back to Guwahati or Shillong as arranged."}
    ]
  },
  {
    slug: "bihar-bodh-gaya", name: "Bodh Gaya & Nalanda", state: "Bihar", region: "Gaya · Bodh Gaya · Nalanda", tags: ["Spiritual", "Culture", "Family"],
    desc: "Buddhist heritage, learning centres and pilgrimage sites.", days: "4N / 5D", nights: 4, priceFrom: 12999, rating: 4.5, lock: 26, imgKey: "Bodh Gaya & Nalanda Bihar India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Gaya", d:"Transfer to Bodh Gaya."},
      {t:"Bodh Gaya", d:"Visit the Mahabodhi Temple complex."},
      {t:"Nalanda excursion", d:"Explore the archaeological heritage area."},
      {t:"Departure", d:"Transfer to Gaya station or airport."}
    ]
  },
  {
    slug: "punjab-amritsar", name: "Amritsar Heritage & Food", state: "Punjab", region: "Amritsar · Golden Temple · Wagah area", tags: ["Culture", "Heritage", "Family"],
    desc: "Sikh heritage, Punjabi cuisine and city experiences.", days: "3N / 4D", nights: 3, priceFrom: 9999, rating: 4.5, lock: 27, imgKey: "Amritsar Heritage & Food Punjab India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Amritsar", d:"Visit the Golden Temple area."},
      {t:"City and border-area visit", d:"Plan timings and access for selected sights."},
      {t:"Departure", d:"Transfer to the station or airport."}
    ]
  },
  {
    slug: "haryana-kurukshetra", name: "Kurukshetra Heritage", state: "Haryana", region: "Kurukshetra · Jyotisar · Brahma Sarovar", tags: ["Heritage", "Culture", "Family"],
    desc: "Sacred sites, museums and cultural history.", days: "2N / 3D", nights: 2, priceFrom: 8999, rating: 4.5, lock: 28, imgKey: "Kurukshetra Heritage Haryana India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Kurukshetra", d:"Explore Brahma Sarovar and nearby sights."},
      {t:"Heritage circuit", d:"Visit selected sites, then depart."}
    ]
  },
  {
    slug: "jharkhand-ranchi", name: "Ranchi & Netarhat", state: "Jharkhand", region: "Ranchi · waterfalls · Netarhat", tags: ["Nature", "Culture", "Family"],
    desc: "Waterfalls, forest landscapes and hill viewpoints.", days: "4N / 5D", nights: 4, priceFrom: 13999, rating: 4.5, lock: 29, imgKey: "Ranchi & Netarhat Jharkhand India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Ranchi", d:"Explore the city and nearby sights."},
      {t:"Waterfall circuit", d:"Visit selected waterfalls depending on conditions."},
      {t:"Netarhat region", d:"Scenic hill viewpoints and relaxed exploration."},
      {t:"Departure", d:"Return transfer to Ranchi."}
    ]
  },
  {
    slug: "chhattisgarh-bastar", name: "Bastar Culture & Nature", state: "Chhattisgarh", region: "Jagdalpur · Chitrakote · local craft villages", tags: ["Nature", "Culture", "Family"],
    desc: "Waterfalls, tribal arts and regional cultural experiences.", days: "4N / 5D", nights: 4, priceFrom: 14999, rating: 4.5, lock: 30, imgKey: "Bastar Culture & Nature Chhattisgarh India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Jagdalpur", d:"Check in and explore local markets."},
      {t:"Chitrakote area", d:"Visit the waterfall viewpoint subject to conditions."},
      {t:"Culture and crafts", d:"Choose a responsible, community-led experience where available."},
      {t:"Departure", d:"Transfer as arranged."}
    ]
  },
  {
    slug: "arunachal-tawang", name: "Arunachal Pradesh: Tawang", state: "Arunachal Pradesh", region: "Guwahati · Bomdila · Tawang", tags: ["Mountains", "Culture", "Nature"],
    desc: "Monasteries, mountain passes and Himalayan scenery.", days: "6N / 7D", nights: 6, priceFrom: 24999, rating: 4.5, lock: 31, imgKey: "Arunachal Pradesh: Tawang Arunachal Pradesh India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Guwahati", d:"Begin the overland journey as arranged."},
      {t:"Mountain route", d:"Travel toward Bomdila with rest stops."},
      {t:"Tawang", d:"Explore the town and monastery area."},
      {t:"Local sightseeing", d:"Visits depend on weather, permits and road conditions."},
      {t:"Return journey", d:"Begin return transfer."},
      {t:"Departure", d:"Connect onward from the agreed departure point."}
    ]
  },
  {
    slug: "nagaland-kohima", name: "Kohima & Nagaland", state: "Nagaland", region: "Kohima · heritage sites · village experiences", tags: ["Culture", "Heritage", "Family"],
    desc: "Hill scenery, local history and cultural experiences.", days: "4N / 5D", nights: 4, priceFrom: 17999, rating: 4.5, lock: 32, imgKey: "Kohima & Nagaland Nagaland India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Dimapur", d:"Transfer to Kohima."},
      {t:"Kohima heritage", d:"Visit selected memorials and local sights."},
      {t:"Culture day", d:"Community-led village visits where available."},
      {t:"Departure", d:"Transfer to Dimapur."}
    ]
  },
  {
    slug: "manipur-imphal", name: "Imphal & Loktak Lake", state: "Manipur", region: "Imphal · Loktak Lake · cultural sites", tags: ["Nature", "Culture", "Family"],
    desc: "Lake landscapes, local history and cultural heritage.", days: "4N / 5D", nights: 4, priceFrom: 15999, rating: 4.5, lock: 33, imgKey: "Imphal & Loktak Lake Manipur India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Imphal", d:"Check in and explore the city."},
      {t:"Imphal heritage", d:"Visit selected cultural and historical sites."},
      {t:"Loktak Lake", d:"Plan a lake excursion subject to local conditions."},
      {t:"Departure", d:"Transfer to the airport."}
    ]
  },
  {
    slug: "tripura-agartala", name: "Tripura Heritage Trail", state: "Tripura", region: "Agartala · Ujjayanta Palace · Neermahal", tags: ["Heritage", "Culture", "Family"],
    desc: "Palaces, lakes and northeastern cultural heritage.", days: "3N / 4D", nights: 3, priceFrom: 12999, rating: 4.5, lock: 34, imgKey: "Tripura Heritage Trail Tripura India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Agartala", d:"Explore the city and palace area."},
      {t:"Heritage excursion", d:"Visit Neermahal subject to boat and site availability."},
      {t:"Departure", d:"Transfer to the airport or station."}
    ]
  },
  {
    slug: "mizoram-aizawl", name: "Aizawl & Mizoram", state: "Mizoram", region: "Aizawl · viewpoints · local markets", tags: ["Culture", "Heritage", "Family"],
    desc: "Hilltop views, local culture and relaxed city exploration.", days: "3N / 4D", nights: 3, priceFrom: 14999, rating: 4.5, lock: 35, imgKey: "Aizawl & Mizoram Mizoram India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Aizawl", d:"Check in and explore local markets."},
      {t:"Aizawl sightseeing", d:"Visit selected viewpoints and cultural stops."},
      {t:"Departure", d:"Transfer to the airport."}
    ]
  },
  {
    slug: "nagaland-dzukou", name: "Dzukou Valley Gateway", state: "Nagaland", region: "Kohima · Dzukou Valley access", tags: ["Adventure", "Culture", "Nature"],
    desc: "A trekking-oriented trip with weather and fitness considerations.", days: "3N / 4D", nights: 3, priceFrom: 16999, rating: 4.5, lock: 36, imgKey: "Dzukou Valley Gateway Nagaland India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Kohima", d:"Prepare for the hike and check local guidance."},
      {t:"Dzukou Valley trek", d:"Trek only with suitable fitness, gear and local conditions."},
      {t:"Return and depart", d:"Return from the trail and transfer onward."}
    ]
  },
  {
    slug: "delhi-city", name: "Delhi Heritage & Food", state: "Delhi", region: "Old Delhi · New Delhi · museums", tags: ["Culture", "Heritage", "Family"],
    desc: "Historic landmarks, markets and food experiences in the capital.", days: "3N / 4D", nights: 3, priceFrom: 11999, rating: 4.5, lock: 37, imgKey: "Delhi Heritage & Food Delhi India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Delhi", d:"Explore selected central landmarks."},
      {t:"Old Delhi", d:"Heritage walk and local food experiences."},
      {t:"Departure", d:"Transfer to the airport or station."}
    ]
  },
  {
    slug: "ladakh-leh", name: "Ladakh & Leh", state: "Ladakh", region: "Leh · monasteries · high-altitude landscapes", tags: ["Mountains", "Culture", "Nature"],
    desc: "High-altitude landscapes, monasteries and scenic routes.", days: "5N / 6D", nights: 5, priceFrom: 27999, rating: 4.5, lock: 38, imgKey: "Ladakh & Leh Ladakh India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Leh", d:"Rest and acclimatise; avoid strenuous activity."},
      {t:"Leh local sights", d:"Visit selected monasteries and town sights."},
      {t:"Scenic excursion", d:"Route depends on acclimatisation, permits and weather."},
      {t:"Leisure / buffer day", d:"Keep a flexible day for altitude and road conditions."},
      {t:"Departure", d:"Transfer to Leh airport."}
    ]
  },
  {
    slug: "lakshadweep-islands", name: "Lakshadweep Islands", state: "Lakshadweep", region: "Agatti · island lagoons", tags: ["Island", "Culture", "Family"],
    desc: "Island lagoons and marine activities subject to permits.", days: "4N / 5D", nights: 4, priceFrom: 32999, rating: 4.5, lock: 39, imgKey: "Lakshadweep Islands Lakshadweep India",
    tripStyles: [{t:'Classic route',d:'A flexible introductory itinerary'},{t:'Culture & local life',d:'Heritage, food and community experiences'},{t:'Relaxed pace',d:'More time at selected highlights'}],
    itinerary: [
      {t:"Arrive · Agatti", d:"Transfer and follow local island guidance."},
      {t:"Island experience", d:"Beach and lagoon activities subject to permissions."},
      {t:"Marine day", d:"Snorkelling or other permitted activities, conditions allowing."},
      {t:"Departure", d:"Transfer to the departure point."}
    ]
  },
  {"slug":"andhra-pradesh-araku-valley-borra-caves","name":"Araku Valley & Borra Caves","state":"Andhra Pradesh","region":"Visakhapatnam · Araku","tags":["Nature","Hill Station"],"desc":"Eastern Ghats viewpoints, coffee plantations and limestone caves.","days":"3N / 4D","nights":3,"priceFrom":11999,"rating":4.5,"lock":1,"imgKey":"Araku Valley & Borra Caves, Araku Valley, Andhra Pradesh, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Hill Station","d":"Suggested hill station experience"}],"itinerary":[{"t":"Day 1 · Visakhapatnam arrival","d":"Visakhapatnam arrival"},{"t":"Day 2 · Borra Caves and Ananthagiri","d":"Borra Caves and Ananthagiri"},{"t":"Day 3 · Araku Valley viewpoints","d":"Araku Valley viewpoints"},{"t":"Day 4 · Return to Visakhapatnam","d":"Return to Visakhapatnam"}]},
  {"slug":"andhra-pradesh-tirupati-spiritual-journey","name":"Tirupati Spiritual Journey","state":"Andhra Pradesh","region":"Tirupati · Tirumala","tags":["Pilgrimage","Culture"],"desc":"A pilgrimage-focused visit to Tirumala and nearby sacred sites.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.6000000000000005,"lock":1,"imgKey":"Tirupati Spiritual Journey, Venkateswara Temple, Andhra Pradesh, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Arrive in Tirupati","d":"Arrive in Tirupati"},{"t":"Day 2 · Tirumala darshan (subject to booking)","d":"Tirumala darshan (subject to booking)"},{"t":"Day 3 · Local temples and departure","d":"Local temples and departure"}]},
  {"slug":"andhra-pradesh-vijayawada-amaravati-heritage","name":"Vijayawada & Amaravati Heritage","state":"Andhra Pradesh","region":"Vijayawada · Amaravati","tags":["Heritage","Culture"],"desc":"Riverfront landmarks, Buddhist heritage and regional culture.","days":"2N / 3D","nights":2,"priceFrom":8499,"rating":4.7,"lock":1,"imgKey":"Vijayawada & Amaravati Heritage, Amaravati, Andhra Pradesh, Andhra Pradesh, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Vijayawada arrival and Kanaka Durga Temple","d":"Vijayawada arrival and Kanaka Durga Temple"},{"t":"Day 2 · Amaravati heritage sites","d":"Amaravati heritage sites"},{"t":"Day 3 · Undavalli Caves and departure","d":"Undavalli Caves and departure"}]},
  {"slug":"arunachal-pradesh-tawang-monastery-high-himalaya","name":"Tawang Monastery & High Himalaya","state":"Arunachal Pradesh","region":"Tawang","tags":["Heritage","Nature"],"desc":"Mountain landscapes and one of the region’s best-known monasteries.","days":"5N / 6D","nights":5,"priceFrom":22999,"rating":4.5,"lock":1,"imgKey":"Tawang Monastery & High Himalaya, Tawang Monastery, Arunachal Pradesh, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Guwahati arrival and transfer","d":"Guwahati arrival and transfer"},{"t":"Day 2 · Dirang valley","d":"Dirang valley"},{"t":"Day 3 · Sela Pass and Tawang","d":"Sela Pass and Tawang"},{"t":"Day 4 · Tawang Monastery and local sights","d":"Tawang Monastery and local sights"},{"t":"Day 5 · Return journey","d":"Return journey"}]},
  {"slug":"arunachal-pradesh-ziro-valley-culture-escape","name":"Ziro Valley Culture Escape","state":"Arunachal Pradesh","region":"Ziro","tags":["Culture","Nature"],"desc":"Green valley scenery and Apatani cultural heritage.","days":"3N / 4D","nights":3,"priceFrom":15999,"rating":4.6000000000000005,"lock":1,"imgKey":"Ziro Valley Culture Escape, Ziro Valley, Arunachal Pradesh, India","tripStyles":[{"t":"Culture","d":"Suggested culture experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Hapoli arrival","d":"Hapoli arrival"},{"t":"Day 2 · Ziro valley villages","d":"Ziro valley villages"},{"t":"Day 3 · Nature walks and local culture","d":"Nature walks and local culture"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"arunachal-pradesh-namdapha-wildlife-gateway","name":"Namdapha Wildlife Gateway","state":"Arunachal Pradesh","region":"Changlang · Miao","tags":["Wildlife","Nature"],"desc":"A nature-focused itinerary near Namdapha National Park; permits and access need checking.","days":"3N / 4D","nights":3,"priceFrom":16999,"rating":4.7,"lock":1,"imgKey":"Namdapha Wildlife Gateway, Namdapha National Park, Arunachal Pradesh, India","tripStyles":[{"t":"Wildlife","d":"Suggested wildlife experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Travel to Miao","d":"Travel to Miao"},{"t":"Day 2 · Park-edge nature experiences","d":"Park-edge nature experiences"},{"t":"Day 3 · Local guided excursion subject to access","d":"Local guided excursion subject to access"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"assam-kaziranga-wildlife-safari","name":"Kaziranga Wildlife Safari","state":"Assam","region":"Kaziranga · Bokakhat","tags":["Wildlife","Nature"],"desc":"Explore the landscapes and wildlife of Kaziranga National Park.","days":"2N / 3D","nights":2,"priceFrom":13999,"rating":4.5,"lock":1,"imgKey":"Kaziranga Wildlife Safari, Kaziranga National Park, Assam, India","tripStyles":[{"t":"Wildlife","d":"Suggested wildlife experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Arrive near Kaziranga","d":"Arrive near Kaziranga"},{"t":"Day 2 · Pre-booked safari subject to park rules","d":"Pre-booked safari subject to park rules"},{"t":"Day 3 · Local nature visit and departure","d":"Local nature visit and departure"}]},
  {"slug":"assam-kamakhya-guwahati-spiritual-trail","name":"Kamakhya & Guwahati Spiritual Trail","state":"Assam","region":"Guwahati","tags":["Pilgrimage","Culture"],"desc":"A spiritual and cultural circuit around Guwahati.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.6000000000000005,"lock":1,"imgKey":"Kamakhya & Guwahati Spiritual Trail, Kamakhya Temple, Assam, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Guwahati arrival","d":"Guwahati arrival"},{"t":"Day 2 · Kamakhya Temple and riverfront","d":"Kamakhya Temple and riverfront"},{"t":"Day 3 · Umananda area and departure","d":"Umananda area and departure"}]},
  {"slug":"assam-majuli-island-culture-journey","name":"Majuli Island Culture Journey","state":"Assam","region":"Majuli · Jorhat","tags":["Culture","Nature"],"desc":"River-island scenery and Assamese satra traditions.","days":"2N / 3D","nights":2,"priceFrom":11999,"rating":4.7,"lock":1,"imgKey":"Majuli Island Culture Journey, Majuli, Assam, India","tripStyles":[{"t":"Culture","d":"Suggested culture experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Jorhat arrival and ferry transfer","d":"Jorhat arrival and ferry transfer"},{"t":"Day 2 · Majuli satras and villages","d":"Majuli satras and villages"},{"t":"Day 3 · Return ferry and departure","d":"Return ferry and departure"}]},
  {"slug":"bihar-bodh-gaya-buddhist-circuit","name":"Bodh Gaya Buddhist Circuit","state":"Bihar","region":"Gaya · Bodh Gaya","tags":["Pilgrimage","Heritage"],"desc":"Visit major Buddhist pilgrimage landmarks around Bodh Gaya.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.5,"lock":1,"imgKey":"Bodh Gaya Buddhist Circuit, Mahabodhi Temple, Bihar, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Heritage","d":"Suggested heritage experience"}],"itinerary":[{"t":"Day 1 · Arrive in Gaya","d":"Arrive in Gaya"},{"t":"Day 2 · Mahabodhi Temple and monasteries","d":"Mahabodhi Temple and monasteries"},{"t":"Day 3 · Nearby heritage sites and departure","d":"Nearby heritage sites and departure"}]},
  {"slug":"bihar-nalanda-rajgir-heritage-trail","name":"Nalanda & Rajgir Heritage Trail","state":"Bihar","region":"Nalanda · Rajgir","tags":["Heritage","Culture"],"desc":"Ancient learning heritage and important sites around Rajgir.","days":"2N / 3D","nights":2,"priceFrom":8499,"rating":4.6000000000000005,"lock":1,"imgKey":"Nalanda & Rajgir Heritage Trail, Nalanda Mahavihara, Bihar, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Patna arrival","d":"Patna arrival"},{"t":"Day 2 · Nalanda archaeological site","d":"Nalanda archaeological site"},{"t":"Day 3 · Rajgir landmarks and departure","d":"Rajgir landmarks and departure"}]},
  {"slug":"bihar-patna-vaishali-history-route","name":"Patna & Vaishali History Route","state":"Bihar","region":"Patna · Vaishali","tags":["Heritage","Culture"],"desc":"Museums, historic landmarks and early Buddhist heritage.","days":"2N / 3D","nights":2,"priceFrom":7999,"rating":4.7,"lock":1,"imgKey":"Patna & Vaishali History Route, Golghar, Bihar, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Patna city heritage","d":"Patna city heritage"},{"t":"Day 2 · Vaishali day excursion","d":"Vaishali day excursion"},{"t":"Day 3 · Local museum visit and departure","d":"Local museum visit and departure"}]},
  {"slug":"chhattisgarh-chitrakote-bastar-nature-circuit","name":"Chitrakote & Bastar Nature Circuit","state":"Chhattisgarh","region":"Jagdalpur · Bastar","tags":["Nature","Culture"],"desc":"Waterfalls and Bastar’s distinctive regional culture.","days":"3N / 4D","nights":3,"priceFrom":11999,"rating":4.5,"lock":1,"imgKey":"Chitrakote & Bastar Nature Circuit, Chitrakote Falls, Chhattisgarh, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Jagdalpur arrival","d":"Jagdalpur arrival"},{"t":"Day 2 · Chitrakote Falls","d":"Chitrakote Falls"},{"t":"Day 3 · Tirathgarh area and local culture","d":"Tirathgarh area and local culture"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"chhattisgarh-sirpur-buddhist-heritage","name":"Sirpur Buddhist Heritage","state":"Chhattisgarh","region":"Sirpur · Raipur","tags":["Heritage","Culture"],"desc":"Archaeological remains and temple heritage at Sirpur.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.6000000000000005,"lock":1,"imgKey":"Sirpur Buddhist Heritage, Sirpur, Chhattisgarh, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Raipur arrival","d":"Raipur arrival"},{"t":"Day 2 · Sirpur archaeological and temple sites","d":"Sirpur archaeological and temple sites"},{"t":"Day 3 · Local city visit and departure","d":"Local city visit and departure"}]},
  {"slug":"chhattisgarh-barnawapara-wildlife-escape","name":"Barnawapara Wildlife Escape","state":"Chhattisgarh","region":"Mahasamund · Raipur","tags":["Wildlife","Nature"],"desc":"A nature break around a forest sanctuary; safari availability varies.","days":"2N / 3D","nights":2,"priceFrom":9999,"rating":4.7,"lock":1,"imgKey":"Barnawapara Wildlife Escape, Barnawapara Wildlife Sanctuary, Chhattisgarh, India","tripStyles":[{"t":"Wildlife","d":"Suggested wildlife experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Raipur arrival","d":"Raipur arrival"},{"t":"Day 2 · Sanctuary visit subject to local permits","d":"Sanctuary visit subject to local permits"},{"t":"Day 3 · Return to Raipur","d":"Return to Raipur"}]},
  {"slug":"goa-old-goa-churches-panaji-heritage","name":"Old Goa Churches & Panaji Heritage","state":"Goa","region":"Panaji · Old Goa","tags":["Heritage","Culture"],"desc":"Portuguese-era architecture, churches and Latin Quarter lanes.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.5,"lock":1,"imgKey":"Old Goa Churches & Panaji Heritage, Basilica of Bom Jesus, Goa, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Panaji arrival","d":"Panaji arrival"},{"t":"Day 2 · Old Goa churches and heritage","d":"Old Goa churches and heritage"},{"t":"Day 3 · Fontainhas walk and departure","d":"Fontainhas walk and departure"}]},
  {"slug":"goa-south-goa-beaches-cabo-de-rama","name":"South Goa Beaches & Cabo de Rama","state":"Goa","region":"South Goa","tags":["Beach","Nature"],"desc":"Quieter beaches, coastal viewpoints and a historic fort.","days":"3N / 4D","nights":3,"priceFrom":11999,"rating":4.6000000000000005,"lock":1,"imgKey":"South Goa Beaches & Cabo de Rama, Cabo de Rama Fort, Goa, India","tripStyles":[{"t":"Beach","d":"Suggested beach experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Arrival and Colva","d":"Arrival and Colva"},{"t":"Day 2 · Palolem coast","d":"Palolem coast"},{"t":"Day 3 · Cabo de Rama and nearby beaches","d":"Cabo de Rama and nearby beaches"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"goa-dudhsagar-western-ghats","name":"Dudhsagar & Western Ghats","state":"Goa","region":"Mollem · Goa","tags":["Nature","Adventure"],"desc":"Forest landscapes and the famous Dudhsagar waterfall area.","days":"2N / 3D","nights":2,"priceFrom":10999,"rating":4.7,"lock":1,"imgKey":"Dudhsagar & Western Ghats, Dudhsagar Falls, Goa, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Adventure","d":"Suggested adventure experience"}],"itinerary":[{"t":"Day 1 · Arrive in Goa","d":"Arrive in Goa"},{"t":"Day 2 · Pre-booked waterfall excursion subject to access","d":"Pre-booked waterfall excursion subject to access"},{"t":"Day 3 · Local nature stop and departure","d":"Local nature stop and departure"}]},
  {"slug":"gujarat-dwarka-somnath-pilgrimage","name":"Dwarka–Somnath Pilgrimage","state":"Gujarat","region":"Dwarka · Somnath","tags":["Pilgrimage","Heritage"],"desc":"A major temple circuit across Gujarat’s Saurashtra coast.","days":"4N / 5D","nights":4,"priceFrom":15999,"rating":4.5,"lock":1,"imgKey":"Dwarka–Somnath Pilgrimage, Dwarkadhish Temple, Gujarat, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Heritage","d":"Suggested heritage experience"}],"itinerary":[{"t":"Day 1 · Rajkot arrival","d":"Rajkot arrival"},{"t":"Day 2 · Dwarkadhish Temple","d":"Dwarkadhish Temple"},{"t":"Day 3 · Coastal transfer and Somnath Temple","d":"Coastal transfer and Somnath Temple"},{"t":"Day 4 · Nearby heritage sites","d":"Nearby heritage sites"},{"t":"Day 5 · Departure","d":"Departure"}]},
  {"slug":"gujarat-rann-of-kutch-bhuj-culture","name":"Rann of Kutch & Bhuj Culture","state":"Gujarat","region":"Bhuj · Kutch","tags":["Culture","Nature"],"desc":"White desert landscapes, crafts and Kutch cultural experiences.","days":"3N / 4D","nights":3,"priceFrom":14999,"rating":4.6000000000000005,"lock":1,"imgKey":"Rann of Kutch & Bhuj Culture, Great Rann of Kutch, Gujarat, India","tripStyles":[{"t":"Culture","d":"Suggested culture experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Bhuj arrival","d":"Bhuj arrival"},{"t":"Day 2 · Craft villages","d":"Craft villages"},{"t":"Day 3 · Rann visit subject to season and permits","d":"Rann visit subject to season and permits"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"gujarat-ahmedabad-stepwells-heritage","name":"Ahmedabad Stepwells & Heritage","state":"Gujarat","region":"Ahmedabad","tags":["Heritage","Culture"],"desc":"Historic architecture, stepwells and old-city traditions.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.7,"lock":1,"imgKey":"Ahmedabad Stepwells & Heritage, Adalaj Stepwell, Gujarat, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Old Ahmedabad heritage walk","d":"Old Ahmedabad heritage walk"},{"t":"Day 2 · Adalaj Stepwell and nearby landmarks","d":"Adalaj Stepwell and nearby landmarks"},{"t":"Day 3 · Sabarmati area and departure","d":"Sabarmati area and departure"}]},
  {"slug":"haryana-kurukshetra-sacred-heritage","name":"Kurukshetra Sacred Heritage","state":"Haryana","region":"Kurukshetra","tags":["Pilgrimage","Heritage"],"desc":"Mahabharata-associated sites and museums around Kurukshetra.","days":"2N / 3D","nights":2,"priceFrom":7999,"rating":4.5,"lock":1,"imgKey":"Kurukshetra Sacred Heritage, Brahma Sarovar, Haryana, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Heritage","d":"Suggested heritage experience"}],"itinerary":[{"t":"Day 1 · Kurukshetra arrival","d":"Kurukshetra arrival"},{"t":"Day 2 · Brahma Sarovar and heritage sites","d":"Brahma Sarovar and heritage sites"},{"t":"Day 3 · Museum visit and departure","d":"Museum visit and departure"}]},
  {"slug":"haryana-sultanpur-birding-escape","name":"Sultanpur Birding Escape","state":"Haryana","region":"Gurugram · Sultanpur","tags":["Wildlife","Nature"],"desc":"A short birdwatching trip; sightings vary by season.","days":"1N / 2D","nights":1,"priceFrom":6999,"rating":4.6000000000000005,"lock":1,"imgKey":"Sultanpur Birding Escape, Sultanpur National Park, Haryana, India","tripStyles":[{"t":"Wildlife","d":"Suggested wildlife experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Gurugram arrival","d":"Gurugram arrival"},{"t":"Day 2 · Sultanpur nature visit","d":"Sultanpur nature visit"},{"t":"Day 3 · Departure","d":"Departure"}]},
  {"slug":"haryana-morni-hills-pinjore-gardens","name":"Morni Hills & Pinjore Gardens","state":"Haryana","region":"Panchkula · Morni","tags":["Nature","Hill Station"],"desc":"A gentle hills-and-gardens itinerary near the Shivalik foothills.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.7,"lock":1,"imgKey":"Morni Hills & Pinjore Gardens, Morni Hills, Haryana, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Hill Station","d":"Suggested hill station experience"}],"itinerary":[{"t":"Day 1 · Panchkula arrival","d":"Panchkula arrival"},{"t":"Day 2 · Morni Hills and lake area","d":"Morni Hills and lake area"},{"t":"Day 3 · Pinjore Gardens and departure","d":"Pinjore Gardens and departure"}]},
  {"slug":"himachal-pradesh-shimla-kufri-mountain-escape","name":"Shimla–Kufri Mountain Escape","state":"Himachal Pradesh","region":"Shimla · Kufri","tags":["Hill Station","Nature"],"desc":"Colonial-era Shimla, mountain viewpoints and Kufri.","days":"3N / 4D","nights":3,"priceFrom":12999,"rating":4.5,"lock":1,"imgKey":"Shimla–Kufri Mountain Escape, Shimla, Himachal Pradesh, India","tripStyles":[{"t":"Hill Station","d":"Suggested hill station experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Shimla arrival and Mall Road","d":"Shimla arrival and Mall Road"},{"t":"Day 2 · Kufri excursion","d":"Kufri excursion"},{"t":"Day 3 · Heritage walk and viewpoints","d":"Heritage walk and viewpoints"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"himachal-pradesh-dharamshala-mcleod-ganj","name":"Dharamshala & McLeod Ganj","state":"Himachal Pradesh","region":"Dharamshala","tags":["Culture","Nature"],"desc":"Himalayan scenery, monasteries and Tibetan cultural landmarks.","days":"3N / 4D","nights":3,"priceFrom":13999,"rating":4.6000000000000005,"lock":1,"imgKey":"Dharamshala & McLeod Ganj, McLeod Ganj, Himachal Pradesh, India","tripStyles":[{"t":"Culture","d":"Suggested culture experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Dharamshala arrival","d":"Dharamshala arrival"},{"t":"Day 2 · McLeod Ganj and monastery visit","d":"McLeod Ganj and monastery visit"},{"t":"Day 3 · Bhagsu area and viewpoints","d":"Bhagsu area and viewpoints"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"himachal-pradesh-manali-solang-valley","name":"Manali & Solang Valley","state":"Himachal Pradesh","region":"Manali","tags":["Hill Station","Adventure"],"desc":"Mountain scenery and seasonal outdoor experiences.","days":"4N / 5D","nights":4,"priceFrom":16999,"rating":4.7,"lock":1,"imgKey":"Manali & Solang Valley, Solang Valley, Himachal Pradesh, India","tripStyles":[{"t":"Hill Station","d":"Suggested hill station experience"},{"t":"Adventure","d":"Suggested adventure experience"}],"itinerary":[{"t":"Day 1 · Manali arrival","d":"Manali arrival"},{"t":"Day 2 · Old Manali and town","d":"Old Manali and town"},{"t":"Day 3 · Solang Valley subject to conditions","d":"Solang Valley subject to conditions"},{"t":"Day 4 · Kullu valley excursion","d":"Kullu valley excursion"},{"t":"Day 5 · Departure","d":"Departure"}]},
  {"slug":"jharkhand-deoghar-baidyanath-dham-yatra","name":"Deoghar Baidyanath Dham Yatra","state":"Jharkhand","region":"Deoghar","tags":["Pilgrimage","Culture"],"desc":"A major Shiva pilgrimage destination; festival crowds can be substantial.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.5,"lock":1,"imgKey":"Deoghar Baidyanath Dham Yatra, Baidyanath Temple, Jharkhand, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Deoghar arrival","d":"Deoghar arrival"},{"t":"Day 2 · Baidyanath Dham visit subject to temple arrangements","d":"Baidyanath Dham visit subject to temple arrangements"},{"t":"Day 3 · Local sights and departure","d":"Local sights and departure"}]},
  {"slug":"jharkhand-netarhat-hills-sunsets","name":"Netarhat Hills & Sunsets","state":"Jharkhand","region":"Netarhat","tags":["Hill Station","Nature"],"desc":"Forest roads, viewpoints and plateau scenery.","days":"2N / 3D","nights":2,"priceFrom":10999,"rating":4.6000000000000005,"lock":1,"imgKey":"Netarhat Hills & Sunsets, Netarhat, Jharkhand, India","tripStyles":[{"t":"Hill Station","d":"Suggested hill station experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Ranchi arrival and transfer","d":"Ranchi arrival and transfer"},{"t":"Day 2 · Netarhat viewpoints","d":"Netarhat viewpoints"},{"t":"Day 3 · Return journey","d":"Return journey"}]},
  {"slug":"jharkhand-betla-national-park-nature-trip","name":"Betla National Park Nature Trip","state":"Jharkhand","region":"Latehar · Palamu","tags":["Wildlife","Nature"],"desc":"Forest landscapes and wildlife experiences subject to park rules.","days":"2N / 3D","nights":2,"priceFrom":10999,"rating":4.7,"lock":1,"imgKey":"Betla National Park Nature Trip, Betla National Park, Jharkhand, India","tripStyles":[{"t":"Wildlife","d":"Suggested wildlife experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Ranchi arrival","d":"Ranchi arrival"},{"t":"Day 2 · Betla forest area","d":"Betla forest area"},{"t":"Day 3 · Local heritage stop and departure","d":"Local heritage stop and departure"}]},
  {"slug":"karnataka-hampi-vijayanagara-heritage","name":"Hampi Vijayanagara Heritage","state":"Karnataka","region":"Hampi · Hospet","tags":["Heritage","Culture"],"desc":"Explore the monumental remains of the Vijayanagara Empire.","days":"3N / 4D","nights":3,"priceFrom":12999,"rating":4.5,"lock":1,"imgKey":"Hampi Vijayanagara Heritage, Hampi, Karnataka, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Hospet arrival","d":"Hospet arrival"},{"t":"Day 2 · Hampi temple and bazaar area","d":"Hampi temple and bazaar area"},{"t":"Day 3 · Royal enclosure and river landscape","d":"Royal enclosure and river landscape"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"karnataka-mysuru-palace-coorg-hills","name":"Mysuru Palace & Coorg Hills","state":"Karnataka","region":"Mysuru · Coorg","tags":["Heritage","Hill Station"],"desc":"Royal Mysuru architecture followed by Western Ghats scenery.","days":"4N / 5D","nights":4,"priceFrom":16999,"rating":4.6000000000000005,"lock":1,"imgKey":"Mysuru Palace & Coorg Hills, Mysore Palace, Karnataka, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Hill Station","d":"Suggested hill station experience"}],"itinerary":[{"t":"Day 1 · Mysuru arrival and palace","d":"Mysuru arrival and palace"},{"t":"Day 2 · Transfer to Coorg","d":"Transfer to Coorg"},{"t":"Day 3 · Plantation and nature visit","d":"Plantation and nature visit"},{"t":"Day 4 · Local viewpoint and return","d":"Local viewpoint and return"},{"t":"Day 5 · Departure","d":"Departure"}]},
  {"slug":"karnataka-gokarna-coastal-temple-trail","name":"Gokarna Coastal & Temple Trail","state":"Karnataka","region":"Gokarna · Karwar","tags":["Beach","Pilgrimage"],"desc":"Coastal beaches alongside Gokarna’s temple-town heritage.","days":"3N / 4D","nights":3,"priceFrom":11999,"rating":4.7,"lock":1,"imgKey":"Gokarna Coastal & Temple Trail, Gokarna, Karnataka, India","tripStyles":[{"t":"Beach","d":"Suggested beach experience"},{"t":"Pilgrimage","d":"Suggested pilgrimage experience"}],"itinerary":[{"t":"Day 1 · Gokarna arrival","d":"Gokarna arrival"},{"t":"Day 2 · Mahabaleshwar Temple and town","d":"Mahabaleshwar Temple and town"},{"t":"Day 3 · Coastal beach walk","d":"Coastal beach walk"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"kerala-alappuzha-backwaters","name":"Alappuzha Backwaters","state":"Kerala","region":"Alappuzha","tags":["Nature","Culture"],"desc":"Backwater landscapes and village life; boat options depend on availability.","days":"2N / 3D","nights":2,"priceFrom":10999,"rating":4.5,"lock":1,"imgKey":"Alappuzha Backwaters, Alappuzha, Kerala, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Alappuzha arrival","d":"Alappuzha arrival"},{"t":"Day 2 · Backwater cruise or day boat","d":"Backwater cruise or day boat"},{"t":"Day 3 · Village and market visit","d":"Village and market visit"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"kerala-munnar-tea-gardens-hills","name":"Munnar Tea Gardens & Hills","state":"Kerala","region":"Munnar","tags":["Hill Station","Nature"],"desc":"Tea estates, mountain viewpoints and cool-climate scenery.","days":"3N / 4D","nights":3,"priceFrom":12999,"rating":4.6000000000000005,"lock":1,"imgKey":"Munnar Tea Gardens & Hills, Munnar, Kerala, India","tripStyles":[{"t":"Hill Station","d":"Suggested hill station experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Kochi arrival and transfer","d":"Kochi arrival and transfer"},{"t":"Day 2 · Tea museum or estate visit","d":"Tea museum or estate visit"},{"t":"Day 3 · Eravikulam area subject to access","d":"Eravikulam area subject to access"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"kerala-kochi-fort-heritage-coast","name":"Kochi Fort & Heritage Coast","state":"Kerala","region":"Kochi","tags":["Heritage","Culture"],"desc":"Historic waterfront streets, museums and coastal heritage.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.7,"lock":1,"imgKey":"Kochi Fort & Heritage Coast, Fort Kochi, Kerala, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Fort Kochi arrival","d":"Fort Kochi arrival"},{"t":"Day 2 · Heritage lanes and waterfront","d":"Heritage lanes and waterfront"},{"t":"Day 3 · Mattancherry area and departure","d":"Mattancherry area and departure"}]},
  {"slug":"madhya-pradesh-khajuraho-temples-orchha","name":"Khajuraho Temples & Orchha","state":"Madhya Pradesh","region":"Khajuraho · Orchha","tags":["Heritage","Culture"],"desc":"Temple architecture and Bundelkhand heritage towns.","days":"3N / 4D","nights":3,"priceFrom":12999,"rating":4.5,"lock":1,"imgKey":"Khajuraho Temples & Orchha, Khajuraho Group of Monuments, Madhya Pradesh, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Khajuraho temples","d":"Khajuraho temples"},{"t":"Day 2 · Transfer toward Orchha","d":"Transfer toward Orchha"},{"t":"Day 3 · Orchha palaces and temples","d":"Orchha palaces and temples"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"madhya-pradesh-ujjain-omkareshwar-jyotirlinga-circuit","name":"Ujjain–Omkareshwar Jyotirlinga Circuit","state":"Madhya Pradesh","region":"Ujjain · Omkareshwar","tags":["Pilgrimage","Culture"],"desc":"A central India spiritual route featuring two major Shiva pilgrimage sites.","days":"3N / 4D","nights":3,"priceFrom":11999,"rating":4.6000000000000005,"lock":1,"imgKey":"Ujjain–Omkareshwar Jyotirlinga Circuit, Mahakaleshwar Jyotirlinga, Madhya Pradesh, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Ujjain arrival","d":"Ujjain arrival"},{"t":"Day 2 · Mahakaleshwar and city temples","d":"Mahakaleshwar and city temples"},{"t":"Day 3 · Omkareshwar day trip","d":"Omkareshwar day trip"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"madhya-pradesh-kanha-tiger-reserve-nature-trip","name":"Kanha Tiger Reserve Nature Trip","state":"Madhya Pradesh","region":"Kanha · Mandla","tags":["Wildlife","Nature"],"desc":"Forest and wildlife experiences; safari bookings and sightings are not guaranteed.","days":"2N / 3D","nights":2,"priceFrom":15999,"rating":4.7,"lock":1,"imgKey":"Kanha Tiger Reserve Nature Trip, Kanha National Park, Madhya Pradesh, India","tripStyles":[{"t":"Wildlife","d":"Suggested wildlife experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Transfer to reserve area","d":"Transfer to reserve area"},{"t":"Day 2 · Pre-booked safari subject to park rules","d":"Pre-booked safari subject to park rules"},{"t":"Day 3 · Departure","d":"Departure"}]},
  {"slug":"maharashtra-mumbai-heritage-elephanta","name":"Mumbai Heritage & Elephanta","state":"Maharashtra","region":"Mumbai","tags":["Heritage","Culture"],"desc":"City heritage, waterfront landmarks and Elephanta cave temples.","days":"2N / 3D","nights":2,"priceFrom":9999,"rating":4.5,"lock":1,"imgKey":"Mumbai Heritage & Elephanta, Elephanta Caves, Maharashtra, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · South Mumbai heritage","d":"South Mumbai heritage"},{"t":"Day 2 · Elephanta Caves subject to ferry and site access","d":"Elephanta Caves subject to ferry and site access"},{"t":"Day 3 · Markets and departure","d":"Markets and departure"}]},
  {"slug":"maharashtra-ajanta-ellora-cave-heritage","name":"Ajanta–Ellora Cave Heritage","state":"Maharashtra","region":"Aurangabad · Chhatrapati Sambhajinagar","tags":["Heritage","Culture"],"desc":"UNESCO-listed cave art and architecture; opening days should be checked.","days":"3N / 4D","nights":3,"priceFrom":12999,"rating":4.6000000000000005,"lock":1,"imgKey":"Ajanta–Ellora Cave Heritage, Ajanta Caves, Maharashtra, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Arrival in Chhatrapati Sambhajinagar","d":"Arrival in Chhatrapati Sambhajinagar"},{"t":"Day 2 · Ellora Caves and nearby landmarks","d":"Ellora Caves and nearby landmarks"},{"t":"Day 3 · Ajanta Caves day excursion","d":"Ajanta Caves day excursion"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"maharashtra-konkan-coast-ganpatipule","name":"Konkan Coast & Ganpatipule","state":"Maharashtra","region":"Ratnagiri · Ganpatipule","tags":["Beach","Pilgrimage"],"desc":"Coastal scenery, beaches, forts and the Ganpatipule temple.","days":"3N / 4D","nights":3,"priceFrom":11999,"rating":4.7,"lock":1,"imgKey":"Konkan Coast & Ganpatipule, Ganpatipule, Maharashtra, India","tripStyles":[{"t":"Beach","d":"Suggested beach experience"},{"t":"Pilgrimage","d":"Suggested pilgrimage experience"}],"itinerary":[{"t":"Day 1 · Ratnagiri arrival","d":"Ratnagiri arrival"},{"t":"Day 2 · Ganpatipule Temple and beach","d":"Ganpatipule Temple and beach"},{"t":"Day 3 · Coastal fort or beach excursion","d":"Coastal fort or beach excursion"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"manipur-loktak-lake-keibul-lamjao","name":"Loktak Lake & Keibul Lamjao","state":"Manipur","region":"Bishnupur · Loktak","tags":["Nature","Wildlife"],"desc":"Lake scenery and the floating national park landscape; access rules apply.","days":"2N / 3D","nights":2,"priceFrom":10999,"rating":4.5,"lock":1,"imgKey":"Loktak Lake & Keibul Lamjao, Loktak Lake, Manipur, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Wildlife","d":"Suggested wildlife experience"}],"itinerary":[{"t":"Day 1 · Imphal arrival","d":"Imphal arrival"},{"t":"Day 2 · Loktak Lake viewpoints","d":"Loktak Lake viewpoints"},{"t":"Day 3 · Keibul Lamjao area subject to permits","d":"Keibul Lamjao area subject to permits"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"manipur-imphal-heritage-kangla","name":"Imphal Heritage & Kangla","state":"Manipur","region":"Imphal","tags":["Heritage","Culture"],"desc":"Historic sites and cultural landmarks in Manipur’s capital.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.6000000000000005,"lock":1,"imgKey":"Imphal Heritage & Kangla, Kangla Fort, Manipur, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Imphal arrival","d":"Imphal arrival"},{"t":"Day 2 · Kangla Fort and city heritage","d":"Kangla Fort and city heritage"},{"t":"Day 3 · Local markets and departure","d":"Local markets and departure"}]},
  {"slug":"manipur-ukhrul-hills-shirui-country","name":"Ukhrul Hills & Shirui Country","state":"Manipur","region":"Ukhrul","tags":["Nature","Hill Station"],"desc":"Highland scenery and local culture; seasonal conditions matter.","days":"3N / 4D","nights":3,"priceFrom":12999,"rating":4.7,"lock":1,"imgKey":"Ukhrul Hills & Shirui Country, Shirui Kashong Peak, Manipur, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Hill Station","d":"Suggested hill station experience"}],"itinerary":[{"t":"Day 1 · Travel to Ukhrul","d":"Travel to Ukhrul"},{"t":"Day 2 · Local cultural visits","d":"Local cultural visits"},{"t":"Day 3 · Shirui hills subject to season and access","d":"Shirui hills subject to season and access"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"meghalaya-cherrapunji-waterfalls-caves","name":"Cherrapunji Waterfalls & Caves","state":"Meghalaya","region":"Sohra · Cherrapunji","tags":["Nature","Adventure"],"desc":"Waterfalls, limestone caves and dramatic monsoon landscapes.","days":"3N / 4D","nights":3,"priceFrom":13999,"rating":4.5,"lock":1,"imgKey":"Cherrapunji Waterfalls & Caves, Nohkalikai Falls, Meghalaya, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Adventure","d":"Suggested adventure experience"}],"itinerary":[{"t":"Day 1 · Shillong arrival","d":"Shillong arrival"},{"t":"Day 2 · Sohra waterfalls and viewpoints","d":"Sohra waterfalls and viewpoints"},{"t":"Day 3 · Caves and village visits","d":"Caves and village visits"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"meghalaya-dawki-river-mawlynnong","name":"Dawki River & Mawlynnong","state":"Meghalaya","region":"Dawki · East Khasi Hills","tags":["Nature","Culture"],"desc":"River scenery and village experiences; water colour varies with conditions.","days":"2N / 3D","nights":2,"priceFrom":11999,"rating":4.6000000000000005,"lock":1,"imgKey":"Dawki River & Mawlynnong, Umngot River, Meghalaya, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Shillong transfer","d":"Shillong transfer"},{"t":"Day 2 · Dawki river area subject to local conditions","d":"Dawki river area subject to local conditions"},{"t":"Day 3 · Mawlynnong village visit","d":"Mawlynnong village visit"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"meghalaya-shillong-umiam-lake","name":"Shillong & Umiam Lake","state":"Meghalaya","region":"Shillong","tags":["Culture","Nature"],"desc":"Hill-city cafés, local culture and lake viewpoints.","days":"2N / 3D","nights":2,"priceFrom":9999,"rating":4.7,"lock":1,"imgKey":"Shillong & Umiam Lake, Umiam Lake, Meghalaya, India","tripStyles":[{"t":"Culture","d":"Suggested culture experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Shillong arrival","d":"Shillong arrival"},{"t":"Day 2 · City landmarks and local markets","d":"City landmarks and local markets"},{"t":"Day 3 · Umiam Lake viewpoint and departure","d":"Umiam Lake viewpoint and departure"}]},
  {"slug":"mizoram-aizawl-city-reiek-hills","name":"Aizawl City & Reiek Hills","state":"Mizoram","region":"Aizawl · Reiek","tags":["Culture","Nature"],"desc":"Hilltop views and Mizo cultural experiences.","days":"2N / 3D","nights":2,"priceFrom":10999,"rating":4.5,"lock":1,"imgKey":"Aizawl City & Reiek Hills, Reiek, Mizoram, India","tripStyles":[{"t":"Culture","d":"Suggested culture experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Aizawl arrival","d":"Aizawl arrival"},{"t":"Day 2 · City viewpoints and cultural centre","d":"City viewpoints and cultural centre"},{"t":"Day 3 · Reiek excursion subject to weather","d":"Reiek excursion subject to weather"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"mizoram-phawngpui-blue-mountain-escape","name":"Phawngpui Blue Mountain Escape","state":"Mizoram","region":"Lawngtlai","tags":["Nature","Adventure"],"desc":"A remote highland nature itinerary; logistics and permits require advance checking.","days":"4N / 5D","nights":4,"priceFrom":18999,"rating":4.6000000000000005,"lock":1,"imgKey":"Phawngpui Blue Mountain Escape, Phawngpui National Park, Mizoram, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Adventure","d":"Suggested adventure experience"}],"itinerary":[{"t":"Day 1 · Travel toward southern Mizoram","d":"Travel toward southern Mizoram"},{"t":"Day 2 · Local transfer and preparation","d":"Local transfer and preparation"},{"t":"Day 3 · Phawngpui excursion subject to access","d":"Phawngpui excursion subject to access"},{"t":"Day 4 · Return journey","d":"Return journey"},{"t":"Day 5 · Departure","d":"Departure"}]},
  {"slug":"mizoram-serchhip-waterfall-village-culture","name":"Serchhip Waterfall & Village Culture","state":"Mizoram","region":"Serchhip","tags":["Nature","Culture"],"desc":"A quieter regional circuit around waterfalls and village landscapes.","days":"2N / 3D","nights":2,"priceFrom":9999,"rating":4.7,"lock":1,"imgKey":"Serchhip Waterfall & Village Culture, Vantawng Falls, Mizoram, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Serchhip arrival","d":"Serchhip arrival"},{"t":"Day 2 · Vantawng Falls viewpoint","d":"Vantawng Falls viewpoint"},{"t":"Day 3 · Local village experience and departure","d":"Local village experience and departure"}]},
  {"slug":"nagaland-kohima-kisama-heritage","name":"Kohima & Kisama Heritage","state":"Nagaland","region":"Kohima · Kisama","tags":["Culture","Heritage"],"desc":"Naga cultural heritage and the Hornbill Festival grounds.","days":"2N / 3D","nights":2,"priceFrom":10999,"rating":4.5,"lock":1,"imgKey":"Kohima & Kisama Heritage, Kisama Heritage Village, Nagaland, India","tripStyles":[{"t":"Culture","d":"Suggested culture experience"},{"t":"Heritage","d":"Suggested heritage experience"}],"itinerary":[{"t":"Day 1 · Kohima arrival","d":"Kohima arrival"},{"t":"Day 2 · War cemetery and city heritage","d":"War cemetery and city heritage"},{"t":"Day 3 · Kisama village; festival dates vary","d":"Kisama village; festival dates vary"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"nagaland-dzukou-valley-trek-gateway","name":"Dzukou Valley Trek Gateway","state":"Nagaland","region":"Kohima · Viswema","tags":["Nature","Adventure"],"desc":"A popular trekking region requiring suitable fitness, guides and weather checks.","days":"2N / 3D","nights":2,"priceFrom":12999,"rating":4.6000000000000005,"lock":1,"imgKey":"Dzukou Valley Trek Gateway, Dzukou Valley, Nagaland, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Adventure","d":"Suggested adventure experience"}],"itinerary":[{"t":"Day 1 · Kohima arrival and briefing","d":"Kohima arrival and briefing"},{"t":"Day 2 · Trek subject to weather and permits","d":"Trek subject to weather and permits"},{"t":"Day 3 · Return and departure","d":"Return and departure"}]},
  {"slug":"nagaland-mokokchung-ao-culture-trail","name":"Mokokchung Ao Culture Trail","state":"Nagaland","region":"Mokokchung","tags":["Culture","Nature"],"desc":"Village landscapes and Ao Naga cultural experiences.","days":"3N / 4D","nights":3,"priceFrom":13999,"rating":4.7,"lock":1,"imgKey":"Mokokchung Ao Culture Trail, Mokokchung, Nagaland, India","tripStyles":[{"t":"Culture","d":"Suggested culture experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Mokokchung arrival","d":"Mokokchung arrival"},{"t":"Day 2 · Town and cultural landmarks","d":"Town and cultural landmarks"},{"t":"Day 3 · Nearby village visits with local guidance","d":"Nearby village visits with local guidance"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"odisha-puri-konark-bhubaneswar-heritage","name":"Puri–Konark–Bhubaneswar Heritage","state":"Odisha","region":"Puri · Konark · Bhubaneswar","tags":["Pilgrimage","Heritage"],"desc":"A classic coastal Odisha temple and heritage circuit.","days":"3N / 4D","nights":3,"priceFrom":11999,"rating":4.5,"lock":1,"imgKey":"Puri–Konark–Bhubaneswar Heritage, Konark Sun Temple, Odisha, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Heritage","d":"Suggested heritage experience"}],"itinerary":[{"t":"Day 1 · Bhubaneswar arrival","d":"Bhubaneswar arrival"},{"t":"Day 2 · Puri Jagannath Temple visit subject to arrangements","d":"Puri Jagannath Temple visit subject to arrangements"},{"t":"Day 3 · Konark Sun Temple","d":"Konark Sun Temple"},{"t":"Day 4 · Bhubaneswar heritage and departure","d":"Bhubaneswar heritage and departure"}]},
  {"slug":"odisha-chilika-lake-birdlife","name":"Chilika Lake & Birdlife","state":"Odisha","region":"Chilika · Satapada","tags":["Wildlife","Nature"],"desc":"Lagoon scenery and birdwatching; sightings depend on season.","days":"2N / 3D","nights":2,"priceFrom":9999,"rating":4.6000000000000005,"lock":1,"imgKey":"Chilika Lake & Birdlife, Chilika Lake, Odisha, India","tripStyles":[{"t":"Wildlife","d":"Suggested wildlife experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Coastal transfer","d":"Coastal transfer"},{"t":"Day 2 · Chilika boat experience subject to local conditions","d":"Chilika boat experience subject to local conditions"},{"t":"Day 3 · Departure","d":"Departure"}]},
  {"slug":"odisha-similipal-forest-nature-route","name":"Similipal Forest Nature Route","state":"Odisha","region":"Mayurbhanj","tags":["Wildlife","Nature"],"desc":"Forest landscapes and wildlife; park access and safari rules apply.","days":"3N / 4D","nights":3,"priceFrom":13999,"rating":4.7,"lock":1,"imgKey":"Similipal Forest Nature Route, Similipal National Park, Odisha, India","tripStyles":[{"t":"Wildlife","d":"Suggested wildlife experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Travel to Mayurbhanj","d":"Travel to Mayurbhanj"},{"t":"Day 2 · Park visit subject to permits and season","d":"Park visit subject to permits and season"},{"t":"Day 3 · Local nature stop","d":"Local nature stop"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"punjab-amritsar-golden-temple-heritage","name":"Amritsar Golden Temple & Heritage","state":"Punjab","region":"Amritsar","tags":["Pilgrimage","Heritage"],"desc":"A spiritual and historic visit centred on the Golden Temple.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.5,"lock":1,"imgKey":"Amritsar Golden Temple & Heritage, Golden Temple, Punjab, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Heritage","d":"Suggested heritage experience"}],"itinerary":[{"t":"Day 1 · Amritsar arrival","d":"Amritsar arrival"},{"t":"Day 2 · Golden Temple and heritage sites","d":"Golden Temple and heritage sites"},{"t":"Day 3 · Jallianwala Bagh and departure","d":"Jallianwala Bagh and departure"}]},
  {"slug":"punjab-anandpur-sahib-sikh-heritage","name":"Anandpur Sahib Sikh Heritage","state":"Punjab","region":"Anandpur Sahib","tags":["Pilgrimage","Culture"],"desc":"Important Sikh heritage sites in the Shivalik foothills.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.6000000000000005,"lock":1,"imgKey":"Anandpur Sahib Sikh Heritage, Takht Sri Keshgarh Sahib, Punjab, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Arrive in Anandpur Sahib","d":"Arrive in Anandpur Sahib"},{"t":"Day 2 · Takht Sri Keshgarh Sahib and heritage sites","d":"Takht Sri Keshgarh Sahib and heritage sites"},{"t":"Day 3 · Local visit and departure","d":"Local visit and departure"}]},
  {"slug":"punjab-rural-punjab-food-culture","name":"Rural Punjab Food & Culture","state":"Punjab","region":"Ludhiana · Patiala","tags":["Culture","Heritage"],"desc":"A culture-focused circuit of historic towns, food and rural experiences.","days":"2N / 3D","nights":2,"priceFrom":9499,"rating":4.7,"lock":1,"imgKey":"Rural Punjab Food & Culture, Qila Mubarak, Patiala, Punjab, India","tripStyles":[{"t":"Culture","d":"Suggested culture experience"},{"t":"Heritage","d":"Suggested heritage experience"}],"itinerary":[{"t":"Day 1 · Patiala heritage visit","d":"Patiala heritage visit"},{"t":"Day 2 · Local food and cultural experience","d":"Local food and cultural experience"},{"t":"Day 3 · Departure","d":"Departure"}]},
  {"slug":"rajasthan-jaipur-amber-fort-pink-city","name":"Jaipur Amber Fort & Pink City","state":"Rajasthan","region":"Jaipur","tags":["Heritage","Culture"],"desc":"Palaces, forts, stepwells and the historic Pink City.","days":"2N / 3D","nights":2,"priceFrom":9999,"rating":4.5,"lock":1,"imgKey":"Jaipur Amber Fort & Pink City, Amber Fort, Rajasthan, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Jaipur arrival","d":"Jaipur arrival"},{"t":"Day 2 · Amber Fort and old city","d":"Amber Fort and old city"},{"t":"Day 3 · City palace area and departure","d":"City palace area and departure"}]},
  {"slug":"rajasthan-jaisalmer-desert-fort","name":"Jaisalmer Desert & Fort","state":"Rajasthan","region":"Jaisalmer","tags":["Heritage","Culture"],"desc":"Golden sandstone architecture and desert-edge experiences.","days":"3N / 4D","nights":3,"priceFrom":13999,"rating":4.6000000000000005,"lock":1,"imgKey":"Jaisalmer Desert & Fort, Jaisalmer Fort, Rajasthan, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Jaisalmer arrival","d":"Jaisalmer arrival"},{"t":"Day 2 · Fort and havelis","d":"Fort and havelis"},{"t":"Day 3 · Desert excursion subject to local conditions","d":"Desert excursion subject to local conditions"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"rajasthan-udaipur-lakes-mewar-heritage","name":"Udaipur Lakes & Mewar Heritage","state":"Rajasthan","region":"Udaipur","tags":["Heritage","Nature"],"desc":"Lake views, palace heritage and old-city walks.","days":"2N / 3D","nights":2,"priceFrom":10999,"rating":4.7,"lock":1,"imgKey":"Udaipur Lakes & Mewar Heritage, City Palace, Udaipur, Rajasthan, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Udaipur arrival","d":"Udaipur arrival"},{"t":"Day 2 · City Palace and old city","d":"City Palace and old city"},{"t":"Day 3 · Lakefront and departure","d":"Lakefront and departure"}]},
  {"slug":"sikkim-gangtok-monasteries-tsomgo-lake","name":"Gangtok Monasteries & Tsomgo Lake","state":"Sikkim","region":"Gangtok · East Sikkim","tags":["Nature","Culture"],"desc":"Mountain scenery and monasteries; permits and weather affect high-altitude access.","days":"3N / 4D","nights":3,"priceFrom":14999,"rating":4.5,"lock":1,"imgKey":"Gangtok Monasteries & Tsomgo Lake, Tsomgo Lake, Sikkim, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Gangtok arrival","d":"Gangtok arrival"},{"t":"Day 2 · Monastery and city visit","d":"Monastery and city visit"},{"t":"Day 3 · Tsomgo Lake subject to permits and weather","d":"Tsomgo Lake subject to permits and weather"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"sikkim-pelling-monasteries-kanchenjunga-views","name":"Pelling Monasteries & Kanchenjunga Views","state":"Sikkim","region":"Pelling · West Sikkim","tags":["Nature","Heritage"],"desc":"Monasteries, viewpoints and Himalayan scenery.","days":"3N / 4D","nights":3,"priceFrom":13999,"rating":4.6000000000000005,"lock":1,"imgKey":"Pelling Monasteries & Kanchenjunga Views, Pemayangtse Monastery, Sikkim, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Heritage","d":"Suggested heritage experience"}],"itinerary":[{"t":"Day 1 · Pelling arrival","d":"Pelling arrival"},{"t":"Day 2 · Pemayangtse Monastery","d":"Pemayangtse Monastery"},{"t":"Day 3 · Local viewpoints subject to weather","d":"Local viewpoints subject to weather"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"sikkim-namchi-south-sikkim-culture","name":"Namchi & South Sikkim Culture","state":"Sikkim","region":"Namchi · Ravangla","tags":["Culture","Nature"],"desc":"Regional cultural landmarks and mountain viewpoints.","days":"2N / 3D","nights":2,"priceFrom":10999,"rating":4.7,"lock":1,"imgKey":"Namchi & South Sikkim Culture, Buddha Park of Ravangla, Sikkim, India","tripStyles":[{"t":"Culture","d":"Suggested culture experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Namchi arrival","d":"Namchi arrival"},{"t":"Day 2 · Local cultural landmarks","d":"Local cultural landmarks"},{"t":"Day 3 · Ravangla Buddha Park and departure","d":"Ravangla Buddha Park and departure"}]},
  {"slug":"tamil-nadu-madurai-rameswaram-pilgrimage","name":"Madurai–Rameswaram Pilgrimage","state":"Tamil Nadu","region":"Madurai · Rameswaram","tags":["Pilgrimage","Heritage"],"desc":"Temple architecture and a major coastal pilgrimage destination.","days":"3N / 4D","nights":3,"priceFrom":11999,"rating":4.5,"lock":1,"imgKey":"Madurai–Rameswaram Pilgrimage, Ramanathaswamy Temple, Tamil Nadu, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Heritage","d":"Suggested heritage experience"}],"itinerary":[{"t":"Day 1 · Madurai arrival and temple","d":"Madurai arrival and temple"},{"t":"Day 2 · Transfer to Rameswaram","d":"Transfer to Rameswaram"},{"t":"Day 3 · Temple visit and coastal landmarks","d":"Temple visit and coastal landmarks"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"tamil-nadu-chennai-mahabalipuram-heritage","name":"Chennai–Mahabalipuram Heritage","state":"Tamil Nadu","region":"Chennai · Mamallapuram","tags":["Heritage","Culture"],"desc":"Historic waterfront monuments and Chennai’s cultural landmarks.","days":"2N / 3D","nights":2,"priceFrom":9999,"rating":4.6000000000000005,"lock":1,"imgKey":"Chennai–Mahabalipuram Heritage, Shore Temple, Tamil Nadu, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Chennai city heritage","d":"Chennai city heritage"},{"t":"Day 2 · Mahabalipuram monuments","d":"Mahabalipuram monuments"},{"t":"Day 3 · Local cultural stop and departure","d":"Local cultural stop and departure"}]},
  {"slug":"tamil-nadu-ooty-nilgiri-mountain-escape","name":"Ooty & Nilgiri Mountain Escape","state":"Tamil Nadu","region":"Ooty · Coonoor","tags":["Hill Station","Nature"],"desc":"Tea country, mountain views and gardens in the Nilgiris.","days":"3N / 4D","nights":3,"priceFrom":13999,"rating":4.7,"lock":1,"imgKey":"Ooty & Nilgiri Mountain Escape, Ooty, Tamil Nadu, India","tripStyles":[{"t":"Hill Station","d":"Suggested hill station experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Ooty arrival","d":"Ooty arrival"},{"t":"Day 2 · Botanical garden and viewpoints","d":"Botanical garden and viewpoints"},{"t":"Day 3 · Coonoor tea country","d":"Coonoor tea country"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"telangana-hyderabad-forts-old-city","name":"Hyderabad Forts & Old City","state":"Telangana","region":"Hyderabad","tags":["Heritage","Culture"],"desc":"Historic forts, monuments and the food culture of Hyderabad.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.5,"lock":1,"imgKey":"Hyderabad Forts & Old City, Charminar, Telangana, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Hyderabad arrival","d":"Hyderabad arrival"},{"t":"Day 2 · Charminar and old-city heritage","d":"Charminar and old-city heritage"},{"t":"Day 3 · Golconda Fort and departure","d":"Golconda Fort and departure"}]},
  {"slug":"telangana-ramappa-warangal-heritage","name":"Ramappa & Warangal Heritage","state":"Telangana","region":"Warangal · Palampet","tags":["Heritage","Culture"],"desc":"Kakatiya-era architecture and temple heritage.","days":"2N / 3D","nights":2,"priceFrom":9999,"rating":4.6000000000000005,"lock":1,"imgKey":"Ramappa & Warangal Heritage, Ramappa Temple, Telangana, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Warangal arrival","d":"Warangal arrival"},{"t":"Day 2 · Warangal fort and heritage","d":"Warangal fort and heritage"},{"t":"Day 3 · Ramappa Temple excursion and departure","d":"Ramappa Temple excursion and departure"}]},
  {"slug":"telangana-nagarjuna-sagar-buddhist-heritage","name":"Nagarjuna Sagar & Buddhist Heritage","state":"Telangana","region":"Nalgonda","tags":["Nature","Heritage"],"desc":"Reservoir landscapes and Buddhist archaeological heritage.","days":"2N / 3D","nights":2,"priceFrom":9999,"rating":4.7,"lock":1,"imgKey":"Nagarjuna Sagar & Buddhist Heritage, Nagarjuna Sagar, Telangana, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Heritage","d":"Suggested heritage experience"}],"itinerary":[{"t":"Day 1 · Travel to Nagarjuna Sagar","d":"Travel to Nagarjuna Sagar"},{"t":"Day 2 · Dam area subject to access and museum/heritage visit","d":"Dam area subject to access and museum/heritage visit"},{"t":"Day 3 · Departure","d":"Departure"}]},
  {"slug":"tripura-ujjayanta-palace-agartala-heritage","name":"Ujjayanta Palace & Agartala Heritage","state":"Tripura","region":"Agartala","tags":["Heritage","Culture"],"desc":"Palace architecture, museums and city heritage.","days":"2N / 3D","nights":2,"priceFrom":7999,"rating":4.5,"lock":1,"imgKey":"Ujjayanta Palace & Agartala Heritage, Ujjayanta Palace, Tripura, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Agartala arrival","d":"Agartala arrival"},{"t":"Day 2 · Ujjayanta Palace and museum","d":"Ujjayanta Palace and museum"},{"t":"Day 3 · Local heritage visit and departure","d":"Local heritage visit and departure"}]},
  {"slug":"tripura-neermahal-lake-palace-journey","name":"Neermahal Lake Palace Journey","state":"Tripura","region":"Melaghar · Rudrasagar","tags":["Heritage","Nature"],"desc":"A lakeside palace and nearby cultural sites.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.6000000000000005,"lock":1,"imgKey":"Neermahal Lake Palace Journey, Neermahal, Tripura, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Agartala transfer","d":"Agartala transfer"},{"t":"Day 2 · Neermahal and Rudrasagar Lake","d":"Neermahal and Rudrasagar Lake"},{"t":"Day 3 · Local visit and departure","d":"Local visit and departure"}]},
  {"slug":"tripura-unakoti-rock-reliefs-forests","name":"Unakoti Rock Reliefs & Forests","state":"Tripura","region":"Unakoti · Kailashahar","tags":["Heritage","Nature"],"desc":"Historic rock-cut reliefs in a forested setting.","days":"2N / 3D","nights":2,"priceFrom":9999,"rating":4.7,"lock":1,"imgKey":"Unakoti Rock Reliefs & Forests, Unakoti, Tripura, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Kailashahar arrival","d":"Kailashahar arrival"},{"t":"Day 2 · Unakoti archaeological site","d":"Unakoti archaeological site"},{"t":"Day 3 · Local nature stop and departure","d":"Local nature stop and departure"}]},
  {"slug":"uttar-pradesh-varanasi-ghats-sarnath","name":"Varanasi Ghats & Sarnath","state":"Uttar Pradesh","region":"Varanasi","tags":["Pilgrimage","Heritage"],"desc":"Sacred riverfront traditions and Buddhist heritage at Sarnath.","days":"2N / 3D","nights":2,"priceFrom":9999,"rating":4.5,"lock":1,"imgKey":"Varanasi Ghats & Sarnath, Dashashwamedh Ghat, Uttar Pradesh, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Heritage","d":"Suggested heritage experience"}],"itinerary":[{"t":"Day 1 · Varanasi arrival","d":"Varanasi arrival"},{"t":"Day 2 · Ghats and temple district","d":"Ghats and temple district"},{"t":"Day 3 · Sarnath heritage excursion and departure","d":"Sarnath heritage excursion and departure"}]},
  {"slug":"uttar-pradesh-ayodhya-spiritual-journey","name":"Ayodhya Spiritual Journey","state":"Uttar Pradesh","region":"Ayodhya","tags":["Pilgrimage","Culture"],"desc":"A pilgrimage-focused visit to Ayodhya’s religious landmarks.","days":"2N / 3D","nights":2,"priceFrom":9999,"rating":4.6000000000000005,"lock":1,"imgKey":"Ayodhya Spiritual Journey, Ram Mandir, Ayodhya, Uttar Pradesh, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Ayodhya arrival","d":"Ayodhya arrival"},{"t":"Day 2 · Temple visits subject to local arrangements","d":"Temple visits subject to local arrangements"},{"t":"Day 3 · Riverfront and departure","d":"Riverfront and departure"}]},
  {"slug":"uttar-pradesh-agra-taj-mahal-fatehpur-sikri","name":"Agra Taj Mahal & Fatehpur Sikri","state":"Uttar Pradesh","region":"Agra · Fatehpur Sikri","tags":["Heritage","Culture"],"desc":"Mughal-era architecture and UNESCO-listed heritage.","days":"2N / 3D","nights":2,"priceFrom":10999,"rating":4.7,"lock":1,"imgKey":"Agra Taj Mahal & Fatehpur Sikri, Taj Mahal, Uttar Pradesh, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Agra arrival","d":"Agra arrival"},{"t":"Day 2 · Taj Mahal and Agra Fort","d":"Taj Mahal and Agra Fort"},{"t":"Day 3 · Fatehpur Sikri excursion and departure","d":"Fatehpur Sikri excursion and departure"}]},
  {"slug":"uttarakhand-char-dham-yatra","name":"Char Dham Yatra","state":"Uttarakhand","region":"Yamunotri · Gangotri · Kedarnath · Badrinath","tags":["Pilgrimage","Nature"],"desc":"Traditional four-shrine Himalayan pilgrimage; route, registration, weather and opening dates must be checked before travel.","days":"10N / 11D","nights":10,"priceFrom":32999,"rating":4.5,"lock":1,"imgKey":"Char Dham Yatra, Kedarnath Temple, Uttarakhand, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Haridwar/Rishikesh arrival and registration","d":"Haridwar/Rishikesh arrival and registration"},{"t":"Day 2 · Yamunotri sector","d":"Yamunotri sector"},{"t":"Day 3 · Gangotri sector","d":"Gangotri sector"},{"t":"Day 4 · Kedarnath sector with trek/approved transport","d":"Kedarnath sector with trek/approved transport"},{"t":"Day 5 · Badrinath sector","d":"Badrinath sector"}]},
  {"slug":"uttarakhand-rishikesh-haridwar-spiritual-river-circuit","name":"Rishikesh–Haridwar Spiritual & River Circuit","state":"Uttarakhand","region":"Rishikesh · Haridwar","tags":["Pilgrimage","Nature"],"desc":"Riverfront temples, ashrams and Himalayan foothill scenery.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.6000000000000005,"lock":1,"imgKey":"Rishikesh–Haridwar Spiritual & River Circuit, Har Ki Pauri, Uttarakhand, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Haridwar arrival and evening aarti","d":"Haridwar arrival and evening aarti"},{"t":"Day 2 · Rishikesh ghats and ashrams","d":"Rishikesh ghats and ashrams"},{"t":"Day 3 · Local temples and departure","d":"Local temples and departure"}]},
  {"slug":"uttarakhand-nainital-kumaon-lakes","name":"Nainital & Kumaon Lakes","state":"Uttarakhand","region":"Nainital · Bhimtal","tags":["Hill Station","Nature"],"desc":"Lake towns, viewpoints and relaxed Himalayan foothill scenery.","days":"3N / 4D","nights":3,"priceFrom":12999,"rating":4.7,"lock":1,"imgKey":"Nainital & Kumaon Lakes, Naini Lake, Uttarakhand, India","tripStyles":[{"t":"Hill Station","d":"Suggested hill station experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Nainital arrival","d":"Nainital arrival"},{"t":"Day 2 · Lake and town walk","d":"Lake and town walk"},{"t":"Day 3 · Bhimtal area excursion","d":"Bhimtal area excursion"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"west-bengal-kolkata-colonial-cultural-heritage","name":"Kolkata Colonial & Cultural Heritage","state":"West Bengal","region":"Kolkata","tags":["Heritage","Culture"],"desc":"Historic architecture, museums, markets and Bengali cultural landmarks.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.5,"lock":1,"imgKey":"Kolkata Colonial & Cultural Heritage, Victoria Memorial, Kolkata, West Bengal, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Kolkata arrival","d":"Kolkata arrival"},{"t":"Day 2 · Victoria Memorial and heritage district","d":"Victoria Memorial and heritage district"},{"t":"Day 3 · Markets and cultural sites; departure","d":"Markets and cultural sites; departure"}]},
  {"slug":"west-bengal-darjeeling-tea-himalayan-views","name":"Darjeeling Tea & Himalayan Views","state":"West Bengal","region":"Darjeeling","tags":["Hill Station","Nature"],"desc":"Tea gardens, mountain views and heritage rail experiences where operating.","days":"3N / 4D","nights":3,"priceFrom":13999,"rating":4.6000000000000005,"lock":1,"imgKey":"Darjeeling Tea & Himalayan Views, Darjeeling Himalayan Railway, West Bengal, India","tripStyles":[{"t":"Hill Station","d":"Suggested hill station experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Darjeeling arrival","d":"Darjeeling arrival"},{"t":"Day 2 · Tea estate and town","d":"Tea estate and town"},{"t":"Day 3 · Viewpoints subject to weather","d":"Viewpoints subject to weather"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"west-bengal-sundarbans-mangrove-nature-trip","name":"Sundarbans Mangrove Nature Trip","state":"West Bengal","region":"Sundarbans · South 24 Parganas","tags":["Wildlife","Nature"],"desc":"Mangrove waterways and guided nature experiences; sightings are not guaranteed.","days":"2N / 3D","nights":2,"priceFrom":12999,"rating":4.7,"lock":1,"imgKey":"Sundarbans Mangrove Nature Trip, Sundarbans National Park, West Bengal, India","tripStyles":[{"t":"Wildlife","d":"Suggested wildlife experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Transfer to gateway town","d":"Transfer to gateway town"},{"t":"Day 2 · Licensed boat excursion subject to rules","d":"Licensed boat excursion subject to rules"},{"t":"Day 3 · Return journey","d":"Return journey"}]},
  {"slug":"andaman-and-nicobar-islands-port-blair-freedom-island-heritage","name":"Port Blair Freedom & Island Heritage","state":"Andaman and Nicobar Islands","region":"Sri Vijaya Puram (Port Blair)","tags":["Heritage","Beach"],"desc":"Cellular Jail heritage and island history.","days":"2N / 3D","nights":2,"priceFrom":12999,"rating":4.5,"lock":1,"imgKey":"Port Blair Freedom & Island Heritage, Cellular Jail, Andaman and Nicobar Islands, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Beach","d":"Suggested beach experience"}],"itinerary":[{"t":"Day 1 · Arrival and island orientation","d":"Arrival and island orientation"},{"t":"Day 2 · Cellular Jail and local heritage","d":"Cellular Jail and local heritage"},{"t":"Day 3 · Departure or onward ferry","d":"Departure or onward ferry"}]},
  {"slug":"andaman-and-nicobar-islands-havelock-beaches-reef-coast","name":"Havelock Beaches & Reef Coast","state":"Andaman and Nicobar Islands","region":"Swaraj Dweep (Havelock)","tags":["Beach","Nature"],"desc":"Beach time and optional marine activities subject to conditions.","days":"3N / 4D","nights":3,"priceFrom":16999,"rating":4.6000000000000005,"lock":1,"imgKey":"Havelock Beaches & Reef Coast, Radhanagar Beach, Andaman and Nicobar Islands, India","tripStyles":[{"t":"Beach","d":"Suggested beach experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Ferry transfer","d":"Ferry transfer"},{"t":"Day 2 · Radhanagar Beach","d":"Radhanagar Beach"},{"t":"Day 3 · Optional licensed marine activity","d":"Optional licensed marine activity"},{"t":"Day 4 · Return ferry","d":"Return ferry"}]},
  {"slug":"andaman-and-nicobar-islands-neil-island-slow-island-escape","name":"Neil Island Slow Island Escape","state":"Andaman and Nicobar Islands","region":"Shaheed Dweep (Neil)","tags":["Beach","Nature"],"desc":"A slower-paced island itinerary with coastal viewpoints.","days":"2N / 3D","nights":2,"priceFrom":13999,"rating":4.7,"lock":1,"imgKey":"Neil Island Slow Island Escape, Bharatpur Beach, Andaman and Nicobar Islands, Andaman and Nicobar Islands, India","tripStyles":[{"t":"Beach","d":"Suggested beach experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Ferry transfer","d":"Ferry transfer"},{"t":"Day 2 · Island beaches and viewpoints","d":"Island beaches and viewpoints"},{"t":"Day 3 · Return ferry","d":"Return ferry"}]},
  {"slug":"chandigarh-chandigarh-architecture-rock-garden","name":"Chandigarh Architecture & Rock Garden","state":"Chandigarh","region":"Chandigarh","tags":["Heritage","Culture"],"desc":"Modernist city planning, gardens and public art.","days":"1N / 2D","nights":1,"priceFrom":6999,"rating":4.5,"lock":1,"imgKey":"Chandigarh Architecture & Rock Garden, Rock Garden of Chandigarh, Chandigarh, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · City architecture walk","d":"City architecture walk"},{"t":"Day 2 · Rock Garden and Sukhna Lake","d":"Rock Garden and Sukhna Lake"},{"t":"Day 3 · Departure","d":"Departure"}]},
  {"slug":"chandigarh-sukhna-lake-garden-circuit","name":"Sukhna Lake & Garden Circuit","state":"Chandigarh","region":"Chandigarh","tags":["Nature","Culture"],"desc":"A relaxed city break focused on lakeside and landscaped gardens.","days":"1N / 2D","nights":1,"priceFrom":6499,"rating":4.6000000000000005,"lock":1,"imgKey":"Sukhna Lake & Garden Circuit, Sukhna Lake, Chandigarh, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Sukhna Lake","d":"Sukhna Lake"},{"t":"Day 2 · Rose Garden and city gardens","d":"Rose Garden and city gardens"},{"t":"Day 3 · Departure","d":"Departure"}]},
  {"slug":"chandigarh-chandigarh-pinjore-garden-heritage","name":"Chandigarh–Pinjore Garden Heritage","state":"Chandigarh","region":"Chandigarh · Pinjore","tags":["Heritage","Nature"],"desc":"Mughal-style garden heritage and Chandigarh’s planned-city landmarks.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.7,"lock":1,"imgKey":"Chandigarh–Pinjore Garden Heritage, Yadavindra Gardens, Chandigarh, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Chandigarh city tour","d":"Chandigarh city tour"},{"t":"Day 2 · Pinjore Gardens","d":"Pinjore Gardens"},{"t":"Day 3 · Local architecture and departure","d":"Local architecture and departure"}]},
  {"slug":"dadra-and-nagar-haveli-and-daman-and-diu-diu-fort-nagoa-beach","name":"Diu Fort & Nagoa Beach","state":"Dadra and Nagar Haveli and Daman and Diu","region":"Diu","tags":["Heritage","Beach"],"desc":"Coastal fort heritage and beaches on Diu island.","days":"2N / 3D","nights":2,"priceFrom":9999,"rating":4.5,"lock":1,"imgKey":"Diu Fort & Nagoa Beach, Diu Fort, Dadra and Nagar Haveli and Daman and Diu, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Beach","d":"Suggested beach experience"}],"itinerary":[{"t":"Day 1 · Diu arrival","d":"Diu arrival"},{"t":"Day 2 · Diu Fort and old town","d":"Diu Fort and old town"},{"t":"Day 3 · Nagoa Beach and departure","d":"Nagoa Beach and departure"}]},
  {"slug":"dadra-and-nagar-haveli-and-daman-and-diu-daman-coastal-heritage","name":"Daman Coastal Heritage","state":"Dadra and Nagar Haveli and Daman and Diu","region":"Daman","tags":["Heritage","Beach"],"desc":"Historic Portuguese-era churches, forts and waterfronts.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.6000000000000005,"lock":1,"imgKey":"Daman Coastal Heritage, Moti Daman Fort, Dadra and Nagar Haveli and Daman and Diu, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Beach","d":"Suggested beach experience"}],"itinerary":[{"t":"Day 1 · Daman arrival","d":"Daman arrival"},{"t":"Day 2 · Moti Daman Fort and heritage","d":"Moti Daman Fort and heritage"},{"t":"Day 3 · Coastal visit and departure","d":"Coastal visit and departure"}]},
  {"slug":"dadra-and-nagar-haveli-and-daman-and-diu-silvassa-tribal-culture-nature","name":"Silvassa Tribal Culture & Nature","state":"Dadra and Nagar Haveli and Daman and Diu","region":"Silvassa","tags":["Culture","Nature"],"desc":"Museum and garden visits with a focus on regional culture.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.7,"lock":1,"imgKey":"Silvassa Tribal Culture & Nature, Vanganga Lake Garden, Dadra and Nagar Haveli and Daman and Diu, India","tripStyles":[{"t":"Culture","d":"Suggested culture experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Silvassa arrival","d":"Silvassa arrival"},{"t":"Day 2 · Culture museum and gardens","d":"Culture museum and gardens"},{"t":"Day 3 · Local nature stop and departure","d":"Local nature stop and departure"}]},
  {"slug":"delhi-old-delhi-mughal-heritage","name":"Old Delhi Mughal Heritage","state":"Delhi","region":"Delhi","tags":["Heritage","Culture"],"desc":"Historic monuments, markets and Mughal-era architecture.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.5,"lock":1,"imgKey":"Old Delhi Mughal Heritage, Red Fort, Delhi, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Old Delhi heritage walk","d":"Old Delhi heritage walk"},{"t":"Day 2 · Red Fort area and museums","d":"Red Fort area and museums"},{"t":"Day 3 · Departure","d":"Departure"}]},
  {"slug":"delhi-new-delhi-monuments-museums","name":"New Delhi Monuments & Museums","state":"Delhi","region":"Delhi","tags":["Heritage","Culture"],"desc":"Major national monuments and museum districts.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.6000000000000005,"lock":1,"imgKey":"New Delhi Monuments & Museums, India Gate, Delhi, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Central Vista and India Gate area","d":"Central Vista and India Gate area"},{"t":"Day 2 · Humayun’s Tomb and Qutub Minar","d":"Humayun’s Tomb and Qutub Minar"},{"t":"Day 3 · Departure","d":"Departure"}]},
  {"slug":"delhi-delhi-spiritual-diversity-trail","name":"Delhi Spiritual Diversity Trail","state":"Delhi","region":"Delhi","tags":["Pilgrimage","Culture"],"desc":"A respectful introduction to varied faith and worship sites across the capital.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.7,"lock":1,"imgKey":"Delhi Spiritual Diversity Trail, Lotus Temple, Delhi, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Visit selected places of worship with dress/entry rules observed","d":"Visit selected places of worship with dress/entry rules observed"},{"t":"Day 2 · Historic religious sites","d":"Historic religious sites"},{"t":"Day 3 · Departure","d":"Departure"}]},
  {"slug":"jammu-and-kashmir-amarnath-yatra","name":"Amarnath Yatra","state":"Jammu and Kashmir","region":"Pahalgam / Baltal route","tags":["Pilgrimage","Nature"],"desc":"Seasonal pilgrimage requiring official registration, medical fitness and current route advisories.","days":"5N / 6D","nights":5,"priceFrom":24999,"rating":4.5,"lock":1,"imgKey":"Amarnath Yatra, Amarnath Temple, Jammu and Kashmir, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Arrive at approved base location","d":"Arrive at approved base location"},{"t":"Day 2 · Complete registration and medical checks","d":"Complete registration and medical checks"},{"t":"Day 3 · Yatra route subject to official schedule and weather","d":"Yatra route subject to official schedule and weather"},{"t":"Day 4 · Return and departure; duration varies by route","d":"Return and departure; duration varies by route"}]},
  {"slug":"jammu-and-kashmir-srinagar-lakes-mughal-gardens","name":"Srinagar Lakes & Mughal Gardens","state":"Jammu and Kashmir","region":"Srinagar","tags":["Nature","Heritage"],"desc":"Lake views, gardens and Kashmiri cultural landmarks.","days":"3N / 4D","nights":3,"priceFrom":14999,"rating":4.6000000000000005,"lock":1,"imgKey":"Srinagar Lakes & Mughal Gardens, Dal Lake, Jammu and Kashmir, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Heritage","d":"Suggested heritage experience"}],"itinerary":[{"t":"Day 1 · Srinagar arrival","d":"Srinagar arrival"},{"t":"Day 2 · Dal Lake and old city","d":"Dal Lake and old city"},{"t":"Day 3 · Mughal gardens and local crafts","d":"Mughal gardens and local crafts"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"jammu-and-kashmir-pahalgam-valley-nature-escape","name":"Pahalgam Valley Nature Escape","state":"Jammu and Kashmir","region":"Pahalgam","tags":["Nature","Hill Station"],"desc":"River valleys and mountain scenery; local access rules may apply.","days":"3N / 4D","nights":3,"priceFrom":15999,"rating":4.7,"lock":1,"imgKey":"Pahalgam Valley Nature Escape, Pahalgam, Jammu and Kashmir, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Hill Station","d":"Suggested hill station experience"}],"itinerary":[{"t":"Day 1 · Transfer to Pahalgam","d":"Transfer to Pahalgam"},{"t":"Day 2 · Valley sightseeing subject to local access","d":"Valley sightseeing subject to local access"},{"t":"Day 3 · Nature walk and departure","d":"Nature walk and departure"}]},
  {"slug":"ladakh-leh-monasteries-indus-valley","name":"Leh Monasteries & Indus Valley","state":"Ladakh","region":"Leh","tags":["Culture","Nature"],"desc":"High-altitude monasteries and Indus Valley landscapes; acclimatisation is essential.","days":"4N / 5D","nights":4,"priceFrom":22999,"rating":4.5,"lock":1,"imgKey":"Leh Monasteries & Indus Valley, Thikse Monastery, Ladakh, India","tripStyles":[{"t":"Culture","d":"Suggested culture experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Arrival and acclimatisation rest","d":"Arrival and acclimatisation rest"},{"t":"Day 2 · Leh town and local heritage","d":"Leh town and local heritage"},{"t":"Day 3 · Indus Valley monasteries","d":"Indus Valley monasteries"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"ladakh-nubra-valley-diskit","name":"Nubra Valley & Diskit","state":"Ladakh","region":"Nubra Valley","tags":["Nature","Adventure"],"desc":"High mountain passes and Nubra’s desert-like valley scenery; weather permitting.","days":"4N / 5D","nights":4,"priceFrom":24999,"rating":4.6000000000000005,"lock":1,"imgKey":"Nubra Valley & Diskit, Diskit Monastery, Ladakh, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Adventure","d":"Suggested adventure experience"}],"itinerary":[{"t":"Day 1 · Leh acclimatisation","d":"Leh acclimatisation"},{"t":"Day 2 · Cross Khardung La subject to conditions","d":"Cross Khardung La subject to conditions"},{"t":"Day 3 · Nubra Valley and Diskit","d":"Nubra Valley and Diskit"},{"t":"Day 4 · Return to Leh and departure","d":"Return to Leh and departure"}]},
  {"slug":"ladakh-pangong-lake-landscape-journey","name":"Pangong Lake Landscape Journey","state":"Ladakh","region":"Pangong Tso","tags":["Nature","Adventure"],"desc":"A high-altitude lake trip requiring permits, weather checks and acclimatisation.","days":"3N / 4D","nights":3,"priceFrom":21999,"rating":4.7,"lock":1,"imgKey":"Pangong Lake Landscape Journey, Pangong Tso, Ladakh, India","tripStyles":[{"t":"Nature","d":"Suggested nature experience"},{"t":"Adventure","d":"Suggested adventure experience"}],"itinerary":[{"t":"Day 1 · Leh acclimatisation","d":"Leh acclimatisation"},{"t":"Day 2 · Transfer to Pangong subject to permits","d":"Transfer to Pangong subject to permits"},{"t":"Day 3 · Return to Leh","d":"Return to Leh"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"lakshadweep-agatti-lagoon-island-life","name":"Agatti Lagoon & Island Life","state":"Lakshadweep","region":"Agatti","tags":["Beach","Nature"],"desc":"Lagoon scenery and island culture; permits and transport must be confirmed.","days":"3N / 4D","nights":3,"priceFrom":24999,"rating":4.5,"lock":1,"imgKey":"Agatti Lagoon & Island Life, Agatti Island, Lakshadweep, India","tripStyles":[{"t":"Beach","d":"Suggested beach experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Arrival subject to approved transport","d":"Arrival subject to approved transport"},{"t":"Day 2 · Island orientation","d":"Island orientation"},{"t":"Day 3 · Lagoon activities subject to conditions","d":"Lagoon activities subject to conditions"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"lakshadweep-kavaratti-culture-coast","name":"Kavaratti Culture & Coast","state":"Lakshadweep","region":"Kavaratti","tags":["Beach","Culture"],"desc":"Island heritage and coastal experiences, subject to permits and local rules.","days":"3N / 4D","nights":3,"priceFrom":25999,"rating":4.6000000000000005,"lock":1,"imgKey":"Kavaratti Culture & Coast, Kavaratti, Lakshadweep, India","tripStyles":[{"t":"Beach","d":"Suggested beach experience"},{"t":"Culture","d":"Suggested culture experience"}],"itinerary":[{"t":"Day 1 · Approved transfer and check-in","d":"Approved transfer and check-in"},{"t":"Day 2 · Island culture and lagoon","d":"Island culture and lagoon"},{"t":"Day 3 · Coastal activities subject to local rules","d":"Coastal activities subject to local rules"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"lakshadweep-bangaram-island-slow-escape","name":"Bangaram Island Slow Escape","state":"Lakshadweep","region":"Bangaram Island","tags":["Beach","Nature"],"desc":"A low-key island escape with marine experiences subject to conditions.","days":"3N / 4D","nights":3,"priceFrom":28999,"rating":4.7,"lock":1,"imgKey":"Bangaram Island Slow Escape, Bangaram Island, Lakshadweep, India","tripStyles":[{"t":"Beach","d":"Suggested beach experience"},{"t":"Nature","d":"Suggested nature experience"}],"itinerary":[{"t":"Day 1 · Approved transfer","d":"Approved transfer"},{"t":"Day 2 · Island and lagoon time","d":"Island and lagoon time"},{"t":"Day 3 · Optional permitted marine activity","d":"Optional permitted marine activity"},{"t":"Day 4 · Departure","d":"Departure"}]},
  {"slug":"puducherry-puducherry-french-quarter-promenade","name":"Puducherry French Quarter & Promenade","state":"Puducherry","region":"Puducherry","tags":["Heritage","Beach"],"desc":"Colonial-era streets, waterfront walks and Tamil-French cultural layers.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.5,"lock":1,"imgKey":"Puducherry French Quarter & Promenade, French Quarter, Puducherry, Puducherry, India","tripStyles":[{"t":"Heritage","d":"Suggested heritage experience"},{"t":"Beach","d":"Suggested beach experience"}],"itinerary":[{"t":"Day 1 · French Quarter walk","d":"French Quarter walk"},{"t":"Day 2 · Promenade and local heritage","d":"Promenade and local heritage"},{"t":"Day 3 · Auroville area subject to visitor rules; departure","d":"Auroville area subject to visitor rules; departure"}]},
  {"slug":"puducherry-auroville-serenity-beach","name":"Auroville & Serenity Beach","state":"Puducherry","region":"Puducherry · Auroville","tags":["Culture","Beach"],"desc":"Community and architecture visits alongside a coastal break.","days":"2N / 3D","nights":2,"priceFrom":8999,"rating":4.6000000000000005,"lock":1,"imgKey":"Auroville & Serenity Beach, Auroville, Puducherry, India","tripStyles":[{"t":"Culture","d":"Suggested culture experience"},{"t":"Beach","d":"Suggested beach experience"}],"itinerary":[{"t":"Day 1 · Puducherry arrival","d":"Puducherry arrival"},{"t":"Day 2 · Auroville visitor areas subject to access","d":"Auroville visitor areas subject to access"},{"t":"Day 3 · Serenity Beach and departure","d":"Serenity Beach and departure"}]},
  {"slug":"puducherry-karaikal-temple-coastal-trail","name":"Karaikal Temple & Coastal Trail","state":"Puducherry","region":"Karaikal","tags":["Pilgrimage","Beach"],"desc":"A quieter coastal itinerary with temple-town heritage.","days":"2N / 3D","nights":2,"priceFrom":8499,"rating":4.7,"lock":1,"imgKey":"Karaikal Temple & Coastal Trail, Karaikal Ammaiyar Temple, Puducherry, India","tripStyles":[{"t":"Pilgrimage","d":"Suggested pilgrimage experience"},{"t":"Beach","d":"Suggested beach experience"}],"itinerary":[{"t":"Day 1 · Karaikal arrival","d":"Karaikal arrival"},{"t":"Day 2 · Local temple heritage","d":"Local temple heritage"},{"t":"Day 3 · Coastal visit and departure","d":"Coastal visit and departure"}]}
];

/* ---------- PROVIDER CATEGORIES ---------- */
const CATEGORY_META = {
  verified: {
    label: 'Verified Tour Operators', desc: 'Established tour companies', icon: '✓',
    providers: ['Veena World', 'Thomas Cook India', 'Kesari Tours', 'SOTC Travel', 'IRCTC Tourism']
  },
  local: {
    label: 'Local Tour Operators', desc: 'Destination specialists', icon: '⌂',
    providers: null /* generated per destination below */
  },
  ota: {
    label: 'OTA Platforms', desc: 'Indian online travel platforms', icon: '◎',
    providers: ['MakeMyTrip', 'Yatra', 'Cleartrip', 'ixigo', 'EaseMyTrip']
  }
};

const PROVIDER_COLORS = ['#8E2A4B','#C1602E','#B0242A','#22508C','#3E7C4A','#7A4EA8','#B8862F'];
const PROVIDER_META = {
  'Veena World':      {url:'https://www.veenaworld.com/', domain:'veenaworld.com'},
  'Thomas Cook India':{url:'https://www.thomascook.in/', domain:'thomascook.in'},
  'Kesari Tours':     {url:'https://www.kesari.in/', domain:'kesari.in'},
  'SOTC Travel':      {url:'https://www.sotc.in/', domain:'sotc.in'},
  'IRCTC Tourism':    {url:'https://www.irctctourism.com/', domain:'irctctourism.com'},
  'MakeMyTrip':       {url:'https://www.makemytrip.com/', domain:'makemytrip.com'},
  'Yatra':            {url:'https://www.yatra.com/', domain:'yatra.com'},
  'Cleartrip':        {url:'https://www.cleartrip.com/', domain:'cleartrip.com'},
  'ixigo':            {url:'https://www.ixigo.com/', domain:'ixigo.com'},
  'EaseMyTrip':       {url:'https://www.easemytrip.com/', domain:'easemytrip.com'},
  'Manza Holidays':   {url:'https://www.manzaholidays.com/', domain:'manzaholidays.com'},
  'Go India Explore': {url:'https://www.goindiaexplore.com/', domain:'goindiaexplore.com'},
  'Destico':          {url:'https://destico.in/', domain:'destico.in'},
  'HP Helpline Tourism': {url:'https://www.hphelplinetourism.com/', domain:'hphelplinetourism.com'},
  'Manasvee Travels': {url:'https://www.manasveeholidays.com/', domain:'manasveeholidays.com'}
};

const RAIL_ROUTE_KM = {
  'Goa': 600,
  'Kerala': 1000,
  'Rajasthan': 900,
  'Kashmir': 1500,
  'Golden Triangle': 500,
  'UP Spiritual Circuit': 750,
  'Uttarakhand': 500,
  'Himachal Pradesh': 700,
  'Andaman': 0,
  'Madhya Pradesh': 700
};
/* Indicative passenger CO₂ saving: 84 g road - 17 g rail = 67 g CO₂e per passenger-km.
   Route distances above are illustrative comparison distances, not live itinerary distances. */
const CO2_SAVING_G_PER_PKM = 67;
function co2Saved(destName) {
  const km = RAIL_ROUTE_KM[destName] || 0;
  if (!km) return 'Not applicable';
  const kg = (km * CO2_SAVING_G_PER_PKM) / 1000;
  return `≈ ${kg.toFixed(0)} kg / traveller`;
}


const LOCAL_OPERATOR_MAP = {
  'Goa': ['Manza Holidays','Destico'],
  'Kerala': ['Manza Holidays','Destico'],
  'Rajasthan': ['Manza Holidays','Go India Explore','Destico'],
  'Kashmir': ['Manza Holidays','Go India Explore','HP Helpline Tourism','Destico'],
  'Golden Triangle': ['Manza Holidays','Go India Explore','Destico'],
  'UP Spiritual Circuit': ['Manza Holidays','Go India Explore','Destico'],
  'Uttarakhand': ['Manza Holidays','Go India Explore','HP Helpline Tourism','Destico'],
  'Himachal Pradesh': ['Manza Holidays','Go India Explore','HP Helpline Tourism','Destico'],
  'Andaman': ['Manza Holidays','Destico','HP Helpline Tourism'],
  'Madhya Pradesh': ['Manza Holidays','Go India Explore','Manasvee Travels','Destico']
};

function localProviderNames(destName) {
  return LOCAL_OPERATOR_MAP[destName] || ['Manza Holidays'];
}

/* deterministic pseudo-random so numbers stay stable across renders */
function seedRandom(seedStr) {
  let h = 0;
  for (let i = 0; i < seedStr.length; i++) { h = (h * 31 + seedStr.charCodeAt(i)) >>> 0; }
  return function() { h = (h * 1103515245 + 12345) >>> 0; return (h % 10000) / 10000; };
}

// Pilot departure cities (three representative cities per state/UT). Estimates are not live fares.
const DEPARTURE_CITIES = [
['Andhra Pradesh','Visakhapatnam','South'],['Andhra Pradesh','Vijayawada','South'],['Andhra Pradesh','Tirupati','South'],['Arunachal Pradesh','Itanagar','Northeast'],['Arunachal Pradesh','Tawang','Northeast'],['Arunachal Pradesh','Pasighat','Northeast'],['Assam','Guwahati','Northeast'],['Assam','Dibrugarh','Northeast'],['Assam','Silchar','Northeast'],['Bihar','Patna','East'],['Bihar','Gaya','East'],['Bihar','Muzaffarpur','East'],['Chhattisgarh','Raipur','Central'],['Chhattisgarh','Bilaspur','Central'],['Chhattisgarh','Jagdalpur','Central'],['Goa','Panaji','West'],['Goa','Margao','West'],['Goa','Vasco da Gama','West'],['Gujarat','Ahmedabad','West'],['Gujarat','Surat','West'],['Gujarat','Vadodara','West'],['Haryana','Gurugram','North'],['Haryana','Faridabad','North'],['Haryana','Hisar','North'],['Himachal Pradesh','Shimla','North'],['Himachal Pradesh','Dharamshala','North'],['Himachal Pradesh','Manali','North'],['Jharkhand','Ranchi','East'],['Jharkhand','Jamshedpur','East'],['Jharkhand','Dhanbad','East'],['Karnataka','Bengaluru','South'],['Karnataka','Mysuru','South'],['Karnataka','Mangaluru','South'],['Kerala','Kochi','South'],['Kerala','Thiruvananthapuram','South'],['Kerala','Kozhikode','South'],['Madhya Pradesh','Bhopal','Central'],['Madhya Pradesh','Indore','Central'],['Madhya Pradesh','Jabalpur','Central'],['Maharashtra','Mumbai','West'],['Maharashtra','Pune','West'],['Maharashtra','Nagpur','West'],['Manipur','Imphal','Northeast'],['Manipur','Thoubal','Northeast'],['Manipur','Churachandpur','Northeast'],['Meghalaya','Shillong','Northeast'],['Meghalaya','Tura','Northeast'],['Meghalaya','Jowai','Northeast'],['Mizoram','Aizawl','Northeast'],['Mizoram','Lunglei','Northeast'],['Mizoram','Champhai','Northeast'],['Nagaland','Kohima','Northeast'],['Nagaland','Dimapur','Northeast'],['Nagaland','Mokokchung','Northeast'],['Odisha','Bhubaneswar','East'],['Odisha','Cuttack','East'],['Odisha','Rourkela','East'],['Punjab','Amritsar','North'],['Punjab','Ludhiana','North'],['Punjab','Jalandhar','North'],['Rajasthan','Jaipur','North'],['Rajasthan','Jodhpur','North'],['Rajasthan','Udaipur','North'],['Sikkim','Gangtok','Northeast'],['Sikkim','Namchi','Northeast'],['Sikkim','Gyalshing','Northeast'],['Tamil Nadu','Chennai','South'],['Tamil Nadu','Coimbatore','South'],['Tamil Nadu','Madurai','South'],['Telangana','Hyderabad','South'],['Telangana','Warangal','South'],['Telangana','Nizamabad','South'],['Tripura','Agartala','Northeast'],['Tripura','Udaipur','Northeast'],['Tripura','Dharmanagar','Northeast'],['Uttar Pradesh','Lucknow','North'],['Uttar Pradesh','Varanasi','North'],['Uttar Pradesh','Agra','North'],['Uttarakhand','Dehradun','North'],['Uttarakhand','Haridwar','North'],['Uttarakhand','Haldwani','North'],['West Bengal','Kolkata','East'],['West Bengal','Siliguri','East'],['West Bengal','Durgapur','East'],['Andaman and Nicobar Islands','Port Blair','Island'],['Andaman and Nicobar Islands','Diglipur','Island'],['Andaman and Nicobar Islands','Havelock Island','Island'],['Chandigarh','Chandigarh','North'],['Chandigarh','Mohali','North'],['Chandigarh','Panchkula','North'],['Dadra and Nagar Haveli and Daman and Diu','Daman','West'],['Dadra and Nagar Haveli and Daman and Diu','Silvassa','West'],['Dadra and Nagar Haveli and Daman and Diu','Diu','West'],['Delhi','New Delhi','North'],['Delhi','Dwarka','North'],['Delhi','Rohini','North'],['Jammu and Kashmir','Jammu','North'],['Jammu and Kashmir','Srinagar','North'],['Jammu and Kashmir','Anantnag','North'],['Ladakh','Leh','North'],['Ladakh','Kargil','North'],['Ladakh','Nubra','North'],['Lakshadweep','Kavaratti','Island'],['Lakshadweep','Agatti','Island'],['Lakshadweep','Minicoy','Island'],['Puducherry','Puducherry','South'],['Puducherry','Karaikal','South'],['Puducherry','Yanam','South']
];
const CITY_ZONE=Object.fromEntries(DEPARTURE_CITIES.map(([state,city,zone])=>[city,zone]));
const STATE_ZONE={'Andhra Pradesh':'South','Arunachal Pradesh':'Northeast','Assam':'Northeast','Bihar':'East','Chhattisgarh':'Central','Goa':'West','Gujarat':'West','Haryana':'North','Himachal Pradesh':'North','Jharkhand':'East','Karnataka':'South','Kerala':'South','Madhya Pradesh':'Central','Maharashtra':'West','Manipur':'Northeast','Meghalaya':'Northeast','Mizoram':'Northeast','Nagaland':'Northeast','Odisha':'East','Punjab':'North','Rajasthan':'North','Sikkim':'Northeast','Tamil Nadu':'South','Telangana':'South','Tripura':'Northeast','Uttar Pradesh':'North','Uttarakhand':'North','West Bengal':'East','Delhi':'North','Jammu and Kashmir':'North','Ladakh':'North','Andaman and Nicobar Islands':'Island','Lakshadweep':'Island','Puducherry':'South','Chandigarh':'North','Dadra and Nagar Haveli and Daman and Diu':'West'};
const ZONE_GAP={North:{North:0,Central:1,West:1,East:2,South:2,Northeast:3,Island:4},Central:{North:1,Central:0,West:1,East:1,South:2,Northeast:3,Island:4},West:{North:1,Central:1,West:0,East:2,South:1,Northeast:3,Island:4},East:{North:2,Central:1,West:2,East:0,South:2,Northeast:1,Island:4},South:{North:2,Central:2,West:1,East:2,South:0,Northeast:3,Island:3},Northeast:{North:3,Central:3,West:3,East:1,South:3,Northeast:0,Island:4},Island:{North:4,Central:4,West:4,East:4,South:3,Northeast:4,Island:0}};
function destinationState(dest){return dest.state||(dest.name==='Golden Triangle'||dest.name==='UP Spiritual Circuit'?'Uttar Pradesh':dest.name==='Andaman'?'Andaman and Nicobar Islands':dest.name==='Kashmir'?'Jammu and Kashmir':dest.name==='Lakshadweep Islands'?'Lakshadweep':dest.name==='Himachal Pradesh'?'Himachal Pradesh':dest.name==='Uttarakhand'?'Uttarakhand':dest.region?.split(' · ').pop())||'Madhya Pradesh';}
function departureFactor(dest){const oz=CITY_ZONE[selectedDepartureCity]||'South',dz=STATE_ZONE[destinationState(dest)]||'Central',gap=ZONE_GAP[oz]?.[dz]??2;const cityIndex=DEPARTURE_CITIES.findIndex(x=>x[1]===selectedDepartureCity);const cityAdjustment=((Math.max(0,cityIndex)%9)-4)*0.012;return 0.82+gap*0.14+cityAdjustment;}
function departureOptionsHtml(){const groups={};DEPARTURE_CITIES.forEach(([state,city])=>(groups[state]||=[]).push(city));return Object.keys(groups).map(state=>`<optgroup label="${state}">${groups[state].map(city=>`<option value="${city}" ${selectedDepartureCity===city?'selected':''}>${city}</option>`).join('')}</optgroup>`).join('');}
function setDepartureCity(city){selectedDepartureCity=city;const dest=DESTINATIONS.find(d=>d.slug===currentRoute.slug);if(dest){renderCompareControls(dest);renderCompareTable(dest);}}

const HOTEL_CATS = ['3-star', '3-star deluxe', '4-star', '4-star deluxe', '5-star'];
const MEAL_PLANS = ['Breakfast only', 'Half board (B+D)', 'Full board (all meals)'];
const TRANSPORT_OPTS = ['AC transfers'];
const CANCEL_OPTS = ['Free up to 72h before', 'Free up to 48h before', 'Free up to 24h before', 'Partial refund only'];

function displayReturnMode(providerName) {
  // Display-only label: never expose sample fare amounts in the comparison table.
  // Rail-first providers are shown as By Train; other providers are shown as By Air.
  const trainProviders = new Set(['IRCTC Tourism']);
  return trainProviders.has(providerName) ? 'By Train' : 'By Air';
}

function buildComparisonRows(dest, categoryKey) {
  const meta = CATEGORY_META[categoryKey];
  const names = meta.providers || localProviderNames(dest.name);
  return names.map((name, i) => {
    const rand = seedRandom(dest.slug + categoryKey + name);
    const priceVariance = 0.85 + rand() * 0.5;
    const price = Math.round((dest.priceFrom * priceVariance * departureFactor(dest)) / 100) * 100;
    return {
      name,
      color: PROVIDER_COLORS[i % PROVIDER_COLORS.length],
      initials: name.split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase(),
      website: PROVIDER_META[name] ? PROVIDER_META[name].url : '',
      domain: PROVIDER_META[name] ? PROVIDER_META[name].domain : '',
      price,
      duration: dest.days,
      hotel: HOTEL_CATS[Math.floor(rand() * HOTEL_CATS.length)],
      meals: MEAL_PLANS[Math.floor(rand() * MEAL_PLANS.length)],
      transport: TRANSPORT_OPTS[Math.floor(rand() * TRANSPORT_OPTS.length)],
      sightseeing: 'As per itinerary',
      cancellation: CANCEL_OPTS[Math.floor(rand() * CANCEL_OPTS.length)],
      returnFare: displayReturnMode(name),
      gst: rand() > 0.5 ? 'Included / as shown' : 'Extra / as applicable',
      insurance: rand() > 0.5 ? 'Included' : 'Optional add-on',
      rating: (4.1 + rand() * 0.8).toFixed(1)
    };
  });
}

/* ---------- i18n ---------- */
const LANGUAGES = [
  {code:'en', label:'English', ready:true},
  {code:'hi', label:'हिन्दी (Hindi)', ready:true},
  {code:'bn', label:'বাংলা (Bengali)', ready:true},
  {code:'ta', label:'தமிழ் (Tamil)', ready:true},
  {code:'te', label:'తెలుగు (Telugu)', ready:true},
  {code:'mr', label:'मराठी (Marathi)', ready:true},
  {code:'gu', label:'ગુજરાતી (Gujarati)', ready:true},
  {code:'kn', label:'ಕನ್ನಡ (Kannada)', ready:true},
  {code:'ml', label:'മലയാളം (Malayalam)', ready:true},
  {code:'pa', label:'ਪੰਜਾਬੀ (Punjabi)', ready:true},
  {code:'or', label:'ଓଡ଼ିଆ (Odia)', ready:true},
  {code:'as', label:'অসমীয়া (Assamese)', ready:true},
  {code:'ur', label:'اردو (Urdu)', ready:true},
  {code:'sd', label:'سنڌي (Sindhi)', ready:true}
];

const I18N = {
  en: {
    nav_destinations:'Destinations', nav_about:'Our Model', nav_compare:'Compare', nav_cta:'Compare Packages',
    hero_h1:"Don't just book a trip. Choose the right one.",
    hero_sub:'Ghoomo brings verified operators, Indian travel platforms and local experts into one clear comparison — so you spend less time searching and more time looking forward to your journey.',
    hero_search_ph:'Where do you want to Ghoomo?', hero_explore:'Explore',
    hero_check1:'Transparent comparison', hero_check2:'Domestic-first, India only', hero_check3:'Verified operators',
    filter_days:'No. of days', filter_cost:'Package cost', filter_category:'Provider category', filter_rating:'Ratings',
    filter_any:'Any', filter_apply:'Apply filters', filter_results:'destinations match your filters',
    section_popular_eyebrow:'EXPLORE INDIA', section_popular_h:'Popular travel circuits', section_popular_sub:'Start with a destination, then compare the ways to book it.',
    compare_btn:'Compare',
    why_eyebrow:'WHY GHOOMO', why_h:'One itinerary. Multiple ways to book.',
    why_sub:'Travellers should not have to open five tabs to understand what changes between packages. Ghoomo creates a neutral comparison layer across verified operators, OTA platforms and local experts.',
    step1_t:'Discover', step1_d:'Find high-demand Indian itineraries.',
    step2_t:'Compare', step2_d:'See package differences side by side.',
    step3_t:'Choose', step3_d:'Continue to the partner that fits.',
    footer_tagline:'Discover India. Compare. Choose. Travel.',
    footer_explore:'EXPLORE', footer_company:'COMPANY', footer_about_link:'About Ghoomo', footer_contact:'Contact', footer_partner:'Partner with us',
    footer_copyright:'© 2026 GHOOMO. Prototype — destination imagery is real (Creative Commons), provider pricing is illustrative sample data pending live operator integration.',
    back_to_destinations:'Back to all destinations',
    trip_style_h:'Build the trip that fits you', trip_style_sub:'Start with a trip style, then compare providers from the category you trust.',
    itinerary_h:'Day-by-day', category_h:'Now choose who you want to travel with', category_sub:'The comparison below uses the same trip and changes only the provider category you select.',
    compare_h:'Compare', compare_sub:'Showing only the currently selected category.',
    row_price:'Package price', row_duration:'Trip duration', row_hotel:'Hotel', row_meals:'Meals', row_transport:'Transport',
    row_sightseeing:'Sightseeing', row_cancel:'Refund / cancellation', row_co2:'CO₂ saved by train*', row_rating:'Rating', row_view:'Book / view',
    disclaimer:'Prices, ratings and cancellation policies shown are illustrative sample data for this prototype. Local operator entries are placeholders until real Ghoomo partners are onboarded. *CO₂ savings are indicative estimates using an assumed route distance and 67 g CO₂e/passenger-km difference between road and rail; actual savings vary by route, train, occupancy and comparison mode. Fare, GST and insurance values are illustrative and must be confirmed with the provider before booking.',
    about_eyebrow:'WHY GHOOMO', about_h:'India is too beautiful to see through a dozen browser tabs.',
    about_p1:'Ghoomo is built around a simple feeling: travel should be exciting, not confusing.',
    about_p2:'We help you discover a destination, understand the different ways to travel there, and compare your choices side-by-side before you decide. Whether you prefer an established tour company, an Indian online travel platform, or a trusted local specialist, Ghoomo puts the choice in your hands.',
    about_quote:'Less searching. More discovering. More memories.',
    lang_note:'The interface is available in all selected languages across the home page, destination pages, comparison view, Our Model page and footer.'
  },
  hi: {
    nav_destinations:'गंतव्य', nav_about:'हमारा मॉडल', nav_compare:'तुलना करें', nav_cta:'पैकेज तुलना करें',
    hero_h1:'सिर्फ यात्रा बुक न करें। सही विकल्प चुनें।',
    hero_sub:'घूमो सत्यापित ऑपरेटरों, भारतीय ट्रैवल प्लेटफ़ॉर्म और स्थानीय विशेषज्ञों को एक स्पष्ट तुलना में लाता है — ताकि आप कम खोजें और यात्रा की अधिक प्रतीक्षा करें।',
    hero_search_ph:'आप कहाँ घूमना चाहते हैं?', hero_explore:'खोजें',
    hero_check1:'पारदर्शी तुलना', hero_check2:'केवल घरेलू, भारत तक सीमित', hero_check3:'सत्यापित ऑपरेटर',
    filter_days:'दिनों की संख्या', filter_cost:'पैकेज लागत', filter_category:'प्रदाता श्रेणी', filter_rating:'रेटिंग',
    filter_any:'कोई भी', filter_apply:'फ़िल्टर लागू करें', filter_results:'गंतव्य आपके फ़िल्टर से मेल खाते हैं',
    section_popular_eyebrow:'भारत घूमें', section_popular_h:'लोकप्रिय यात्रा सर्किट', section_popular_sub:'एक गंतव्य से शुरू करें, फिर बुकिंग के तरीकों की तुलना करें।',
    compare_btn:'तुलना करें',
    why_eyebrow:'घूमो क्यों', why_h:'एक यात्रा योजना। बुकिंग के कई तरीके।',
    why_sub:'यात्रियों को यह समझने के लिए पाँच टैब खोलने की ज़रूरत नहीं होनी चाहिए कि पैकेजों में क्या अंतर है। घूमो सत्यापित ऑपरेटरों, ओटीए प्लेटफार्मों और स्थानीय विशेषज्ञों में एक निष्पक्ष तुलना परत बनाता है।',
    step1_t:'खोजें', step1_d:'लोकप्रिय भारतीय यात्रा योजनाएँ खोजें।',
    step2_t:'तुलना करें', step2_d:'पैकेज के अंतर साथ-साथ देखें।',
    step3_t:'चुनें', step3_d:'उपयुक्त साझेदार के पास आगे बढ़ें।',
    footer_tagline:'भारत को जानें। तुलना करें। चुनें। यात्रा करें।',
    footer_explore:'अन्वेषण करें', footer_company:'कंपनी', footer_about_link:'घूमो के बारे में', footer_contact:'संपर्क करें', footer_partner:'हमारे साथ जुड़ें',
    footer_copyright:'© 2026 घूमो। प्रोटोटाइप — गंतव्य की तस्वीरें असली हैं (क्रिएटिव कॉमन्स), प्रदाता मूल्य निर्धारण नमूना डेटा है जब तक वास्तविक ऑपरेटर एकीकरण नहीं होता।',
    back_to_destinations:'सभी गंतव्यों पर वापस जाएं',
    trip_style_h:'अपनी पसंद की यात्रा बनाएं', trip_style_sub:'एक यात्रा शैली से शुरू करें, फिर अपनी पसंदीदा श्रेणी के प्रदाताओं की तुलना करें।',
    itinerary_h:'दिन-प्रतिदिन', category_h:'अब चुनें कि आप किसके साथ यात्रा करना चाहते हैं', category_sub:'नीचे दी गई तुलना एक ही यात्रा का उपयोग करती है और केवल आपके द्वारा चुनी गई प्रदाता श्रेणी बदलती है।',
    compare_h:'तुलना करें', compare_sub:'केवल वर्तमान में चयनित श्रेणी दिखाई जा रही है।',
    row_price:'पैकेज मूल्य', row_duration:'यात्रा अवधि', row_hotel:'होटल', row_meals:'भोजन', row_transport:'परिवहन',
    row_sightseeing:'सैर-सपाटा', row_cancel:'रिफंड / रद्दीकरण', row_co2:'ट्रेन से बचने वाला CO₂*', row_rating:'रेटिंग', row_view:'बुक करें / देखें',
    disclaimer:'दिखाई गई कीमतें, रेटिंग और रद्दीकरण नीतियाँ इस प्रोटोटाइप के लिए उदाहरण डेटा हैं। वास्तविक घूमो साझेदारों के जुड़ने तक स्थानीय ऑपरेटर प्रविष्टियाँ प्लेसहोल्डर हैं।',
    about_eyebrow:'घूमो क्यों', about_h:'भारत दर्जनों ब्राउज़र टैब से देखने के लिए बहुत खूबसूरत है।',
    about_p1:'घूमो एक सरल भावना पर बना है: यात्रा रोमांचक होनी चाहिए, भ्रमित करने वाली नहीं।',
    about_p2:'हम आपको एक गंतव्य खोजने, वहाँ यात्रा करने के विभिन्न तरीकों को समझने और निर्णय लेने से पहले अपने विकल्पों की साथ-साथ तुलना करने में मदद करते हैं। चाहे आप एक स्थापित टूर कंपनी, एक भारतीय ऑनलाइन ट्रैवल प्लेटफ़ॉर्म, या एक विश्वसनीय स्थानीय विशेषज्ञ पसंद करें, घूमो चुनाव आपके हाथों में देता है।',
    about_quote:'कम खोजना। ज़्यादा खोज करना। ज़्यादा यादें।',
    lang_note:'चयनित भाषा में होम पेज, गंतव्य पेज, तुलना, हमारा मॉडल और फुटर उपलब्ध हैं।'
  },
  mr: {"nav_destinations": "गंतव्ये", "nav_about": "आमचे मॉडेल", "nav_compare": "तुलना करा", "nav_cta": "पॅकेजची तुलना करा", "hero_h1": "फक्त प्रवास बुक करू नका. योग्य पर्याय निवडा.", "hero_sub": "घूमो सत्यापित ऑपरेटर, भारतीय ट्रॅव्हल प्लॅटफॉर्म आणि स्थानिक तज्ज्ञांना एका स्पष्ट तुलनेत आणते — त्यामुळे शोधण्यात कमी वेळ आणि प्रवासाचा आनंद घेण्यासाठी अधिक वेळ.", "hero_search_ph": "तुम्हाला कुठे घूमायचे आहे?", "hero_explore": "शोधा", "hero_check1": "पारदर्शक तुलना", "hero_check2": "देशांतर्गत, फक्त भारत", "hero_check3": "सत्यापित ऑपरेटर", "filter_days": "दिवसांची संख्या", "filter_cost": "पॅकेज किंमत", "filter_category": "प्रदाता श्रेणी", "filter_rating": "रेटिंग", "filter_any": "कोणतेही", "filter_apply": "फिल्टर लागू करा", "filter_results": "गंतव्ये तुमच्या फिल्टरशी जुळतात", "section_popular_eyebrow": "भारत शोधा", "section_popular_h": "लोकप्रिय प्रवास मार्ग", "section_popular_sub": "गंतव्य निवडा आणि तेथे जाण्याच्या पर्यायांची तुलना करा.", "compare_btn": "तुलना करा", "why_eyebrow": "घूमो का?", "why_h": "एक प्रवास. बुक करण्याचे अनेक मार्ग.", "why_sub": "पॅकेजमधील फरक समजण्यासाठी प्रवाशांना अनेक टॅब उघडावे लागू नयेत. घूमो सत्यापित ऑपरेटर, OTA प्लॅटफॉर्म आणि स्थानिक तज्ज्ञांमध्ये तटस्थ तुलना देते.", "step1_t": "शोधा", "step1_d": "लोकप्रिय भारतीय प्रवास मार्ग शोधा.", "step2_t": "तुलना करा", "step2_d": "पॅकेजमधील फरक एकत्र पाहा.", "step3_t": "निवडा", "step3_d": "तुमच्यासाठी योग्य भागीदाराकडे पुढे जा.", "footer_tagline": "भारत शोधा. तुलना करा. निवडा. प्रवास करा.", "footer_explore": "शोधा", "footer_company": "कंपनी", "footer_about_link": "घूमो बद्दल", "footer_contact": "संपर्क", "footer_partner": "आमच्यासोबत भागीदार व्हा", "back_to_destinations": "सर्व गंतव्यांकडे परत", "trip_style_h": "तुमच्यासाठी योग्य प्रवास तयार करा", "trip_style_sub": "प्रवासाची शैली निवडा आणि पसंतीच्या प्रदाता श्रेणीतील पर्यायांची तुलना करा.", "itinerary_h": "दिवसागणिक", "category_h": "आता तुम्हाला कोणासोबत प्रवास करायचा ते निवडा", "category_sub": "खालील तुलना समान प्रवास ठेवते आणि फक्त निवडलेली प्रदाता श्रेणी बदलते.", "compare_h": "तुलना", "compare_sub": "फक्त सध्या निवडलेली श्रेणी दाखवत आहे.", "row_price": "पॅकेज किंमत", "row_duration": "प्रवासाचा कालावधी", "row_hotel": "हॉटेल", "row_meals": "जेवण", "row_transport": "वाहतूक", "row_sightseeing": "प्रेक्षणीय स्थळे", "row_cancel": "परतावा / रद्दीकरण", "row_co2": "ट्रेनने बचत होणारे CO₂*", "row_rating": "रेटिंग", "row_view": "बुक / पहा", "disclaimer": "दाखवलेल्या किंमती, रेटिंग आणि रद्दीकरण धोरणे या प्रोटोटाइपसाठी उदाहरण डेटा आहेत. वास्तविक घूमो भागीदार जोडले जाईपर्यंत स्थानिक ऑपरेटर नोंदी प्लेसहोल्डर आहेत."},
  gu: {"nav_destinations": "ગંતવ્યો", "nav_about": "અમારું મોડેલ", "nav_compare": "સરખામણી કરો", "nav_cta": "પેકેજની સરખામણી કરો", "hero_h1": "માત્ર પ્રવાસ બુક ન કરો. યોગ્ય વિકલ્પ પસંદ કરો.", "hero_sub": "ઘૂમો ચકાસાયેલા ઓપરેટરો, ભારતીય ટ્રાવેલ પ્લેટફોર્મ અને સ્થાનિક નિષ્ણાતોને એક સ્પષ્ટ સરખામણીમાં લાવે છે — જેથી શોધવામાં ઓછો સમય અને પ્રવાસની રાહ જોવામાં વધુ સમય મળે.", "hero_search_ph": "તમારે ક્યાં ફરવા જવું છે?", "hero_explore": "શોધો", "hero_check1": "પારદર્શક સરખામણી", "hero_check2": "ઘરેલું, માત્ર ભારત", "hero_check3": "ચકાસાયેલા ઓપરેટરો", "filter_days": "દિવસોની સંખ્યા", "filter_cost": "પેકેજ કિંમત", "filter_category": "પ્રદાતા શ્રેણી", "filter_rating": "રેટિંગ", "filter_any": "કોઈપણ", "filter_apply": "ફિલ્ટર લાગુ કરો", "filter_results": "ગંતવ્યો તમારા ફિલ્ટર સાથે મેળ ખાય છે", "section_popular_eyebrow": "ભારત શોધો", "section_popular_h": "લોકપ્રિય પ્રવાસ માર્ગો", "section_popular_sub": "ગંતવ્ય પસંદ કરો અને ત્યાં જવાના વિકલ્પોની સરખામણી કરો.", "compare_btn": "સરખામણી કરો", "why_eyebrow": "ઘૂમો શા માટે?", "why_h": "એક પ્રવાસ. બુક કરવાની અનેક રીતો.", "why_sub": "પેકેજમાં શું બદલાય છે તે સમજવા માટે મુસાફરોને અનેક ટેબ ખોલવાની જરૂર ન પડે. ઘૂમો ચકાસાયેલા ઓપરેટરો, OTA પ્લેટફોર્મ અને સ્થાનિક નિષ્ણાતો વચ્ચે તટસ્થ સરખામણી આપે છે.", "step1_t": "શોધો", "step1_d": "લોકપ્રિય ભારતીય પ્રવાસ માર્ગો શોધો.", "step2_t": "સરખામણી કરો", "step2_d": "પેકેજના તફાવતો સાથે-સાથે જુઓ.", "step3_t": "પસંદ કરો", "step3_d": "તમને યોગ્ય ભાગીદાર તરફ આગળ વધો.", "footer_tagline": "ભારત શોધો. સરખામણી કરો. પસંદ કરો. પ્રવાસ કરો.", "footer_explore": "શોધો", "footer_company": "કંપની", "footer_about_link": "ઘૂમો વિશે", "footer_contact": "સંપર્ક", "footer_partner": "અમારા સાથે ભાગીદાર બનો", "back_to_destinations": "બધા ગંતવ્યો પર પાછા", "trip_style_h": "તમને યોગ્ય પ્રવાસ બનાવો", "trip_style_sub": "પ્રવાસની શૈલી પસંદ કરો અને વિશ્વાસપાત્ર શ્રેણીના પ્રદાતાઓની સરખામણી કરો.", "itinerary_h": "દિવસ પ્રમાણે", "category_h": "હવે પસંદ કરો કે કોની સાથે પ્રવાસ કરવો છે", "category_sub": "નીચેની સરખામણીમાં પ્રવાસ સમાન છે; માત્ર પસંદ કરેલી પ્રદાતા શ્રેણી બદલાય છે.", "compare_h": "સરખામણી", "compare_sub": "હાલ પસંદ કરેલી શ્રેણી જ બતાવવામાં આવી રહી છે.", "row_price": "પેકેજ કિંમત", "row_duration": "પ્રવાસનો સમયગાળો", "row_hotel": "હોટેલ", "row_meals": "ભોજન", "row_transport": "પરિવહન", "row_sightseeing": "જોવાલાયક સ્થળો", "row_cancel": "પરતાવો / રદ", "row_co2": "ટ્રેનથી બચેલું CO₂*", "row_rating": "રેટિંગ", "row_view": "બુક / જુઓ", "disclaimer": "દર્શાવેલી કિંમતો, રેટિંગ અને રદ કરવાની નીતિઓ આ પ્રોટોટાઇપ માટે ઉદાહરણ ડેટા છે. વાસ્તવિક ઘૂમો ભાગીદારો જોડાય ત્યાં સુધી સ્થાનિક ઓપરેટર એન્ટ્રીઓ પ્લેસહોલ્ડર છે."},
  kn: {"nav_destinations": "ತಾಣಗಳು", "nav_about": "ನಮ್ಮ ಮಾದರಿ", "nav_compare": "ಹೋಲಿಸಿ", "nav_cta": "ಪ್ಯಾಕೇಜ್‌ಗಳನ್ನು ಹೋಲಿಸಿ", "hero_h1": "ಪ್ರವಾಸವನ್ನು ಮಾತ್ರ ಬುಕ್ ಮಾಡಬೇಡಿ. ಸರಿಯಾದ ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ.", "hero_sub": "ಘೂಮೋ ಪರಿಶೀಲಿತ ಆಪರೇಟರ್‌ಗಳು, ಭಾರತೀಯ ಟ್ರಾವೆಲ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ತಜ್ಞರನ್ನು ಒಂದೇ ಸ್ಪಷ್ಟ ಹೋಲಿಕೆಯಲ್ಲಿ ತರುತ್ತದೆ — ಕಡಿಮೆ ಹುಡುಕಾಟ, ಹೆಚ್ಚು ಪ್ರವಾಸದ ನಿರೀಕ್ಷೆ.", "hero_search_ph": "ನೀವು ಎಲ್ಲಿಗೆ ಪ್ರವಾಸ ಹೋಗಲು ಬಯಸುತ್ತೀರಿ?", "hero_explore": "ಹುಡುಕಿ", "hero_check1": "ಪಾರದರ್ಶಕ ಹೋಲಿಕೆ", "hero_check2": "ದೇಶೀಯ, ಭಾರತ ಮಾತ್ರ", "hero_check3": "ಪರಿಶೀಲಿತ ಆಪರೇಟರ್‌ಗಳು", "filter_days": "ದಿನಗಳ ಸಂಖ್ಯೆ", "filter_cost": "ಪ್ಯಾಕೇಜ್ ಬೆಲೆ", "filter_category": "ಪೂರೈಕೆದಾರ ವರ್ಗ", "filter_rating": "ರೇಟಿಂಗ್", "filter_any": "ಯಾವುದಾದರೂ", "filter_apply": "ಫಿಲ್ಟರ್ ಅನ್ವಯಿಸಿ", "filter_results": "ಗಮ್ಯಸ್ಥಾನಗಳು ನಿಮ್ಮ ಫಿಲ್ಟರ್‌ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ", "section_popular_eyebrow": "ಭಾರತ ಅನ್ವೇಷಿಸಿ", "section_popular_h": "ಜನಪ್ರಿಯ ಪ್ರವಾಸ ಮಾರ್ಗಗಳು", "section_popular_sub": "ಗಮ್ಯಸ್ಥಾನವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ, ನಂತರ ಬುಕ್ ಮಾಡುವ ವಿಧಾನಗಳನ್ನು ಹೋಲಿಸಿ.", "compare_btn": "ಹೋಲಿಸಿ", "why_eyebrow": "ಘೂಮೋ ಏಕೆ?", "why_h": "ಒಂದು ಪ್ರವಾಸ. ಬುಕ್ ಮಾಡಲು ಹಲವು ಮಾರ್ಗಗಳು.", "why_sub": "ಪ್ಯಾಕೇಜ್‌ಗಳಲ್ಲಿ ಏನು ಬದಲಾಗುತ್ತದೆ ಎಂದು ತಿಳಿಯಲು ಪ್ರಯಾಣಿಕರು ಐದು ಟ್ಯಾಬ್ ತೆರೆಯಬೇಕಾಗಿಲ್ಲ. ಘೂಮೋ ಪರಿಶೀಲಿತ ಆಪರೇಟರ್‌ಗಳು, OTA ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ತಜ್ಞರ ನಡುವೆ ತಟಸ್ಥ ಹೋಲಿಕೆ ನೀಡುತ್ತದೆ.", "step1_t": "ಅನ್ವೇಷಿಸಿ", "step1_d": "ಜನಪ್ರಿಯ ಭಾರತೀಯ ಪ್ರವಾಸ ಮಾರ್ಗಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.", "step2_t": "ಹೋಲಿಸಿ", "step2_d": "ಪ್ಯಾಕೇಜ್ ವ್ಯತ್ಯಾಸಗಳನ್ನು ಪಕ್ಕಪಕ್ಕದಲ್ಲಿ ನೋಡಿ.", "step3_t": "ಆರಿಸಿ", "step3_d": "ನಿಮಗೆ ಹೊಂದುವ ಪಾಲುದಾರರ ಕಡೆ ಮುಂದುವರಿಯಿರಿ.", "footer_tagline": "ಭಾರತ ಅನ್ವೇಷಿಸಿ. ಹೋಲಿಸಿ. ಆರಿಸಿ. ಪ್ರವಾಸ ಮಾಡಿ.", "footer_explore": "ಅನ್ವೇಷಿಸಿ", "footer_company": "ಕಂಪನಿ", "footer_about_link": "ಘೂಮೋ ಬಗ್ಗೆ", "footer_contact": "ಸಂಪರ್ಕ", "footer_partner": "ನಮ್ಮೊಂದಿಗೆ ಪಾಲುದಾರರಾಗಿ", "back_to_destinations": "ಎಲ್ಲಾ ತಾಣಗಳಿಗೆ ಹಿಂತಿರುಗಿ", "trip_style_h": "ನಿಮಗೆ ಹೊಂದುವ ಪ್ರವಾಸವನ್ನು ರೂಪಿಸಿ", "trip_style_sub": "ಪ್ರವಾಸ ಶೈಲಿಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು ನಂಬಿಕೆಯ ವರ್ಗದ ಪೂರೈಕೆದಾರರನ್ನು ಹೋಲಿಸಿ.", "itinerary_h": "ದಿನದಿಂದ ದಿನಕ್ಕೆ", "category_h": "ಈಗ ನೀವು ಯಾರೊಂದಿಗೆ ಪ್ರಯಾಣಿಸಬೇಕೆಂದು ಆಯ್ಕೆ ಮಾಡಿ", "category_sub": "ಕೆಳಗಿನ ಹೋಲಿಕೆಯಲ್ಲಿ ಪ್ರವಾಸ ಒಂದೇ; ನೀವು ಆಯ್ಕೆ ಮಾಡಿದ ಪೂರೈಕೆದಾರ ವರ್ಗ ಮಾತ್ರ ಬದಲಾಗುತ್ತದೆ.", "compare_h": "ಹೋಲಿಕೆ", "compare_sub": "ಪ್ರಸ್ತುತ ಆಯ್ಕೆ ಮಾಡಿದ ವರ್ಗ ಮಾತ್ರ ತೋರಿಸಲಾಗುತ್ತಿದೆ.", "row_price": "ಪ್ಯಾಕೇಜ್ ಬೆಲೆ", "row_duration": "ಪ್ರವಾಸದ ಅವಧಿ", "row_hotel": "ಹೋಟೆಲ್", "row_meals": "ಊಟ", "row_transport": "ಸಾರಿಗೆ", "row_sightseeing": "ವೀಕ್ಷಣೀಯ ಸ್ಥಳಗಳು", "row_cancel": "ಮರುಪಾವತಿ / ರದ್ದತಿ", "row_co2": "ರೈಲಿನಿಂದ ಉಳಿಯುವ CO₂*", "row_rating": "ರೇಟಿಂಗ್", "row_view": "ಬುಕ್ / ನೋಡಿ", "disclaimer": "ತೋರಿಸಲಾದ ಬೆಲೆಗಳು, ರೇಟಿಂಗ್‌ಗಳು ಮತ್ತು ರದ್ದತಿ ನೀತಿಗಳು ಈ ಪ್ರೋಟೋಟೈಪ್‌ನ ಉದಾಹರಣಾ ಡೇಟಾ. ನಿಜವಾದ ಘೂಮೋ ಪಾಲುದಾರರು ಸೇರುವವರೆಗೆ ಸ್ಥಳೀಯ ಆಪರೇಟರ್ ದಾಖಲೆಗಳು ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್‌ಗಳಾಗಿವೆ."},
  te: {"nav_destinations": "గమ్యస్థానాలు", "nav_about": "మా మోడల్", "nav_compare": "పోల్చండి", "nav_cta": "ప్యాకేజీలను పోల్చండి", "hero_h1": "కేవలం ప్రయాణాన్ని బుక్ చేయకండి. సరైన ఎంపికను ఎంచుకోండి.", "hero_sub": "ఘూమో ధృవీకరించిన ఆపరేటర్లు, భారతీయ ట్రావెల్ ప్లాట్‌ఫారమ్‌లు మరియు స్థానిక నిపుణులను ఒక స్పష్టమైన పోలికలోకి తీసుకువస్తుంది — తక్కువ శోధన, ఎక్కువ ప్రయాణ ఆనందం.", "hero_search_ph": "మీరు ఎక్కడికి ప్రయాణించాలనుకుంటున్నారు?", "hero_explore": "వెతకండి", "hero_check1": "పారదర్శక పోలిక", "hero_check2": "దేశీయ, భారత్ మాత్రమే", "hero_check3": "ధృవీకరించిన ఆపరేటర్లు", "filter_days": "రోజుల సంఖ్య", "filter_cost": "ప్యాకేజీ ధర", "filter_category": "ప్రొవైడర్ వర్గం", "filter_rating": "రేటింగ్స్", "filter_any": "ఏదైనా", "filter_apply": "ఫిల్టర్లను వర్తింపజేయండి", "filter_results": "గమ్యస్థానాలు మీ ఫిల్టర్‌కు సరిపోతున్నాయి", "section_popular_eyebrow": "భారతాన్ని అన్వేషించండి", "section_popular_h": "ప్రసిద్ధ ప్రయాణ మార్గాలు", "section_popular_sub": "గమ్యస్థానాన్ని ఎంచుకుని, బుక్ చేసే మార్గాలను పోల్చండి.", "compare_btn": "పోల్చండి", "why_eyebrow": "ఘూమో ఎందుకు?", "why_h": "ఒక ప్రయాణం. బుక్ చేసుకోవడానికి అనేక మార్గాలు.", "why_sub": "ప్యాకేజీల మధ్య తేడాలను తెలుసుకోవడానికి ప్రయాణికులు ఐదు ట్యాబ్‌లు తెరవాల్సిన అవసరం లేదు. ఘూమో ధృవీకరించిన ఆపరేటర్లు, OTA ప్లాట్‌ఫారమ్‌లు మరియు స్థానిక నిపుణుల మధ్య తటస్థ పోలికను అందిస్తుంది.", "step1_t": "కనుగొనండి", "step1_d": "భారతదేశంలోని ప్రసిద్ధ ప్రయాణ మార్గాలను కనుగొనండి.", "step2_t": "పోల్చండి", "step2_d": "ప్యాకేజీ తేడాలను పక్కపక్కన చూడండి.", "step3_t": "ఎంచుకోండి", "step3_d": "మీకు సరిపోయే భాగస్వామి వద్దకు కొనసాగండి.", "footer_tagline": "భారతాన్ని కనుగొనండి. పోల్చండి. ఎంచుకోండి. ప్రయాణించండి.", "footer_explore": "అన్వేషించండి", "footer_company": "కంపెనీ", "footer_about_link": "ఘూమో గురించి", "footer_contact": "సంప్రదించండి", "footer_partner": "మాతో భాగస్వామి అవ్వండి", "back_to_destinations": "అన్ని గమ్యస్థానాలకు తిరిగి", "trip_style_h": "మీకు సరిపోయే ప్రయాణాన్ని రూపొందించండి", "trip_style_sub": "ప్రయాణ శైలిని ఎంచుకుని, మీరు నమ్మే వర్గంలోని ప్రొవైడర్లను పోల్చండి.", "itinerary_h": "రోజువారీ", "category_h": "ఇప్పుడు మీరు ఎవరితో ప్రయాణించాలనుకుంటున్నారో ఎంచుకోండి", "category_sub": "క్రింది పోలికలో ప్రయాణం ఒకటే; మీరు ఎంచుకున్న ప్రొవైడర్ వర్గం మాత్రమే మారుతుంది.", "compare_h": "పోలిక", "compare_sub": "ప్రస్తుతం ఎంచుకున్న వర్గం మాత్రమే చూపుతోంది.", "row_price": "ప్యాకేజీ ధర", "row_duration": "ప్రయాణ వ్యవధి", "row_hotel": "హోటల్", "row_meals": "భోజనం", "row_transport": "రవాణా", "row_sightseeing": "చూడదగిన ప్రదేశాలు", "row_cancel": "రిఫండ్ / రద్దు", "row_co2": "రైలుతో ఆదా అయ్యే CO₂*", "row_rating": "రేటింగ్", "row_view": "బుక్ / చూడండి", "disclaimer": "చూపిన ధరలు, రేటింగ్‌లు మరియు రద్దు విధానాలు ఈ ప్రోటోటైప్‌కు ఉదాహరణ డేటా. నిజమైన ఘూమో భాగస్వాములు చేరేవరకు స్థానిక ఆపరేటర్ ఎంట్రీలు ప్లేస్‌హోల్డర్లు."},
  ml: {"nav_destinations": "യാത്രാ കേന്ദ്രങ്ങൾ", "nav_about": "ഞങ്ങളുടെ മാതൃക", "nav_compare": "താരതമ്യം ചെയ്യുക", "nav_cta": "പാക്കേജുകൾ താരതമ്യം ചെയ്യുക", "hero_h1": "യാത്ര വെറും ബുക്ക് ചെയ്യരുത്. ശരിയായത് തിരഞ്ഞെടുക്കൂ.", "hero_sub": "ഘൂമോ പരിശോധിച്ച ഓപ്പറേറ്റർമാരെയും ഇന്ത്യൻ ട്രാവൽ പ്ലാറ്റ്‌ഫോമുകളെയും പ്രാദേശിക വിദഗ്ധരെയും ഒരൊറ്റ വ്യക്തമായ താരതമ്യത്തിലേക്ക് കൊണ്ടുവരുന്നു — കുറച്ച് തിരച്ചിൽ, കൂടുതൽ യാത്രാ പ്രതീക്ഷ.", "hero_search_ph": "നിങ്ങൾ എവിടേക്കാണ് യാത്ര ചെയ്യാൻ ആഗ്രഹിക്കുന്നത്?", "hero_explore": "തിരയുക", "hero_check1": "സുതാര്യമായ താരതമ്യം", "hero_check2": "ആഭ്യന്തര യാത്ര, ഇന്ത്യ മാത്രം", "hero_check3": "പരിശോധിച്ച ഓപ്പറേറ്റർമാർ", "filter_days": "ദിവസങ്ങളുടെ എണ്ണം", "filter_cost": "പാക്കേജ് വില", "filter_category": "ദാതാവിന്റെ വിഭാഗം", "filter_rating": "റേറ്റിംഗ്", "filter_any": "ഏതെങ്കിലും", "filter_apply": "ഫിൽട്ടർ പ്രയോഗിക്കുക", "filter_results": "യാത്രാ കേന്ദ്രങ്ങൾ നിങ്ങളുടെ ഫിൽട്ടറുമായി പൊരുത്തപ്പെടുന്നു", "section_popular_eyebrow": "ഇന്ത്യ കണ്ടെത്തൂ", "section_popular_h": "ജനപ്രിയ യാത്രാ പാതകൾ", "section_popular_sub": "ഒരു യാത്രാ കേന്ദ്രം തിരഞ്ഞെടുക്കൂ, തുടർന്ന് ബുക്ക് ചെയ്യാനുള്ള വഴികൾ താരതമ്യം ചെയ്യൂ.", "compare_btn": "താരതമ്യം", "why_eyebrow": "എന്തുകൊണ്ട് ഘൂമോ?", "why_h": "ഒരു യാത്ര. ബുക്ക് ചെയ്യാൻ നിരവധി വഴികൾ.", "why_sub": "പാക്കേജുകൾ തമ്മിലുള്ള വ്യത്യാസം മനസ്സിലാക്കാൻ യാത്രക്കാർ അഞ്ച് ടാബുകൾ തുറക്കേണ്ടതില്ല. പരിശോധിച്ച ഓപ്പറേറ്റർമാർ, OTA പ്ലാറ്റ്‌ഫോമുകൾ, പ്രാദേശിക വിദഗ്ധർ എന്നിവയ്ക്കിടയിൽ ഘൂമോ നിഷ്പക്ഷ താരതമ്യം നൽകുന്നു.", "step1_t": "കണ്ടെത്തൂ", "step1_d": "ജനപ്രിയ ഇന്ത്യൻ യാത്രാ പാതകൾ കണ്ടെത്തൂ.", "step2_t": "താരതമ്യം ചെയ്യൂ", "step2_d": "പാക്കേജ് വ്യത്യാസങ്ങൾ ഒപ്പത്തിനൊപ്പം കാണൂ.", "step3_t": "തിരഞ്ഞെടുക്കൂ", "step3_d": "നിങ്ങൾക്ക് അനുയോജ്യമായ പങ്കാളിയിലേക്ക് തുടരൂ.", "footer_tagline": "ഇന്ത്യ കണ്ടെത്തൂ. താരതമ്യം ചെയ്യൂ. തിരഞ്ഞെടുക്കൂ. യാത്ര ചെയ്യൂ.", "footer_explore": "പര്യവേക്ഷണം", "footer_company": "കമ്പനി", "footer_about_link": "ഘൂമോയെ കുറിച്ച്", "footer_contact": "ബന്ധപ്പെടുക", "footer_partner": "ഞങ്ങളോടൊപ്പം പങ്കാളിയാകൂ", "back_to_destinations": "എല്ലാ യാത്രാ കേന്ദ്രങ്ങളിലേക്കും മടങ്ങുക", "trip_style_h": "നിങ്ങൾക്ക് അനുയോജ്യമായ യാത്ര രൂപപ്പെടുത്തൂ", "trip_style_sub": "യാത്രാ ശൈലി തിരഞ്ഞെടുക്കൂ, നിങ്ങൾ വിശ്വസിക്കുന്ന വിഭാഗത്തിലെ ദാതാക്കളെ താരതമ്യം ചെയ്യൂ.", "itinerary_h": "ദിവസംപ്രതി", "category_h": "ഇപ്പോൾ ആരോടൊപ്പം യാത്ര ചെയ്യണമെന്ന് തിരഞ്ഞെടുക്കൂ", "category_sub": "താഴെയുള്ള താരതമ്യത്തിൽ യാത്ര ഒരേയാണ്; തിരഞ്ഞെടുത്ത ദാതാവിന്റെ വിഭാഗം മാത്രമാണ് മാറുന്നത്.", "compare_h": "താരതമ്യം", "compare_sub": "നിലവിൽ തിരഞ്ഞെടുത്ത വിഭാഗം മാത്രം കാണിക്കുന്നു.", "row_price": "പാക്കേജ് വില", "row_duration": "യാത്രാ ദൈർഘ്യം", "row_hotel": "ഹോട്ടൽ", "row_meals": "ഭക്ഷണം", "row_transport": "ഗതാഗതം", "row_sightseeing": "കാണേണ്ട സ്ഥലങ്ങൾ", "row_cancel": "റീഫണ്ട് / റദ്ദാക്കൽ", "row_co2": "ട്രെയിനിലൂടെ ലാഭിക്കുന്ന CO₂*", "row_rating": "റേറ്റിംഗ്", "row_view": "ബുക്ക് / കാണുക", "disclaimer": "കാണിച്ചിരിക്കുന്ന വിലകൾ, റേറ്റിംഗുകൾ, റദ്ദാക്കൽ നയങ്ങൾ ഈ പ്രോട്ടോടൈപ്പിനുള്ള ഉദാഹരണ ഡാറ്റയാണ്. യഥാർത്ഥ ഘൂമോ പങ്കാളികൾ ചേർക്കുന്നതുവരെ പ്രാദേശിക ഓപ്പറേറ്റർ എൻട്രികൾ പ്ലേസ്ഹോൾഡറുകളാണ്."},
  ta: {"nav_destinations": "இலக்குகள்", "nav_about": "எங்கள் முறை", "nav_compare": "ஒப்பிடுக", "nav_cta": "தொகுப்புகளை ஒப்பிடுக", "hero_h1": "பயணத்தை வெறுமனே முன்பதிவு செய்யாதீர்கள். சரியானதைத் தேர்ந்தெடுக்கவும்.", "hero_sub": "கூமோ சரிபார்க்கப்பட்ட ஆபரேட்டர்கள், இந்திய பயண தளங்கள் மற்றும் உள்ளூர் நிபுணர்களை ஒரே தெளிவான ஒப்பீட்டில் இணைக்கிறது — குறைந்த தேடல், அதிக பயண எதிர்பார்ப்பு.", "hero_search_ph": "நீங்கள் எங்கு பயணம் செய்ய விரும்புகிறீர்கள்?", "hero_explore": "தேடுக", "hero_check1": "வெளிப்படையான ஒப்பீடு", "hero_check2": "உள்நாட்டு, இந்தியா மட்டும்", "hero_check3": "சரிபார்க்கப்பட்ட ஆபரேட்டர்கள்", "filter_days": "நாட்களின் எண்ணிக்கை", "filter_cost": "தொகுப்பு விலை", "filter_category": "வழங்குநர் வகை", "filter_rating": "மதிப்பீடுகள்", "filter_any": "ஏதேனும்", "filter_apply": "வடிகட்டிகளைப் பயன்படுத்து", "filter_results": "இலக்குகள் உங்கள் வடிகட்டிகளுடன் பொருந்துகின்றன", "section_popular_eyebrow": "இந்தியாவை ஆராயுங்கள்", "section_popular_h": "பிரபலமான பயண வழித்தடங்கள்", "section_popular_sub": "ஒரு இலக்கைத் தேர்ந்தெடுத்து, முன்பதிவு செய்யும் வழிகளை ஒப்பிடுங்கள்.", "compare_btn": "ஒப்பிடுக", "why_eyebrow": "ஏன் கூமோ?", "why_h": "ஒரு பயணம். முன்பதிவு செய்ய பல வழிகள்.", "why_sub": "தொகுப்புகளில் உள்ள வேறுபாடுகளைப் புரிந்துகொள்ள பயணிகள் ஐந்து தாவல்களைத் திறக்க வேண்டியதில்லை. சரிபார்க்கப்பட்ட ஆபரேட்டர்கள், OTA தளங்கள் மற்றும் உள்ளூர் நிபுணர்களுக்கிடையில் கூமோ நடுநிலையான ஒப்பீட்டை வழங்குகிறது.", "step1_t": "கண்டறியவும்", "step1_d": "பிரபலமான இந்திய பயண வழித்தடங்களைக் கண்டறியவும்.", "step2_t": "ஒப்பிடவும்", "step2_d": "தொகுப்பு வேறுபாடுகளை அருகருகே பார்க்கவும்.", "step3_t": "தேர்ந்தெடுக்கவும்", "step3_d": "உங்களுக்கு ஏற்ற கூட்டாளரிடம் தொடரவும்.", "footer_tagline": "இந்தியாவைக் கண்டறியுங்கள். ஒப்பிடுங்கள். தேர்ந்தெடுங்கள். பயணம் செய்யுங்கள்.", "footer_explore": "ஆராயுங்கள்", "footer_company": "நிறுவனம்", "footer_about_link": "கூமோ பற்றி", "footer_contact": "தொடர்பு", "footer_partner": "எங்களுடன் கூட்டாளராகுங்கள்", "back_to_destinations": "அனைத்து இலக்குகளுக்கும் திரும்பு", "trip_style_h": "உங்களுக்கு ஏற்ற பயணத்தை உருவாக்குங்கள்", "trip_style_sub": "பயண பாணியைத் தேர்ந்தெடுத்து, நீங்கள் நம்பும் வகை வழங்குநர்களை ஒப்பிடுங்கள்.", "itinerary_h": "நாளுக்கு நாள்", "category_h": "இப்போது யாருடன் பயணம் செய்ய வேண்டும் என்பதைத் தேர்ந்தெடுக்கவும்", "category_sub": "கீழேயுள்ள ஒப்பீட்டில் பயணம் ஒன்றே; நீங்கள் தேர்ந்தெடுத்த வழங்குநர் வகை மட்டும் மாறுகிறது.", "compare_h": "ஒப்பீடு", "compare_sub": "தற்போது தேர்ந்தெடுத்த வகை மட்டும் காட்டப்படுகிறது.", "row_price": "தொகுப்பு விலை", "row_duration": "பயண காலம்", "row_hotel": "ஹோட்டல்", "row_meals": "உணவு", "row_transport": "போக்குவரத்து", "row_sightseeing": "சுற்றுலா இடங்கள்", "row_cancel": "பணம் திரும்பப்பெறுதல் / ரத்து", "row_co2": "ரயிலில் சேமிக்கப்படும் CO₂*", "row_rating": "மதிப்பீடு", "row_view": "முன்பதிவு / பார்க்க", "disclaimer": "காட்டப்படும் விலைகள், மதிப்பீடுகள் மற்றும் ரத்து கொள்கைகள் இந்த முன்மாதிரிக்கான எடுத்துக்காட்டு தரவுகள். உண்மையான கூமோ கூட்டாளர்கள் சேரும் வரை உள்ளூர் ஆபரேட்டர் பதிவுகள் இடைக்காலமாகும்."},
  bn: {"nav_destinations": "গন্তব্য", "nav_about": "আমাদের মডেল", "nav_compare": "তুলনা করুন", "nav_cta": "প্যাকেজ তুলনা করুন", "hero_h1": "শুধু ভ্রমণ বুক করবেন না। সঠিকটি বেছে নিন।", "hero_sub": "ঘূমো যাচাইকৃত অপারেটর, ভারতীয় ট্রাভেল প্ল্যাটফর্ম এবং স্থানীয় বিশেষজ্ঞদের একটি পরিষ্কার তুলনায় আনে — কম খোঁজাখুঁজি, বেশি ভ্রমণের প্রস্তুতি।", "hero_search_ph": "আপনি কোথায় ঘুরতে চান?", "hero_explore": "খুঁজুন", "hero_check1": "স্বচ্ছ তুলনা", "hero_check2": "দেশীয়, শুধু ভারত", "hero_check3": "যাচাইকৃত অপারেটর", "filter_days": "দিনের সংখ্যা", "filter_cost": "প্যাকেজের মূল্য", "filter_category": "প্রদানকারী বিভাগ", "filter_rating": "রেটিং", "filter_any": "যেকোনো", "filter_apply": "ফিল্টার প্রয়োগ করুন", "filter_results": "গন্তব্যগুলি আপনার ফিল্টারের সঙ্গে মেলে", "section_popular_eyebrow": "ভারত ঘুরে দেখুন", "section_popular_h": "জনপ্রিয় ভ্রমণ পথ", "section_popular_sub": "একটি গন্তব্য বেছে নিয়ে বুক করার উপায়গুলি তুলনা করুন.", "compare_btn": "তুলনা করুন", "why_eyebrow": "কেন ঘূমো?", "why_h": "একটি ভ্রমণ। বুক করার একাধিক উপায়।", "why_sub": "প্যাকেজের পার্থক্য বুঝতে ভ্রমণকারীদের পাঁচটি ট্যাব খুলতে হবে না। ঘূমো যাচাইকৃত অপারেটর, OTA প্ল্যাটফর্ম এবং স্থানীয় বিশেষজ্ঞদের মধ্যে নিরপেক্ষ তুলনা দেয়।", "step1_t": "আবিষ্কার করুন", "step1_d": "জনপ্রিয় ভারতীয় ভ্রমণপথ খুঁজুন.", "step2_t": "তুলনা করুন", "step2_d": "প্যাকেজের পার্থক্য পাশাপাশি দেখুন.", "step3_t": "বেছে নিন", "step3_d": "আপনার উপযুক্ত অংশীদারের কাছে এগিয়ে যান.", "footer_tagline": "ভারত আবিষ্কার করুন। তুলনা করুন। বেছে নিন। ভ্রমণ করুন।", "footer_explore": "অন্বেষণ", "footer_company": "কোম্পানি", "footer_about_link": "ঘূমো সম্পর্কে", "footer_contact": "যোগাযোগ", "footer_partner": "আমাদের সঙ্গে অংশীদার হোন", "back_to_destinations": "সব গন্তব্যে ফিরে যান", "trip_style_h": "আপনার জন্য উপযুক্ত ভ্রমণ তৈরি করুন", "trip_style_sub": "ভ্রমণের ধরন বেছে নিন এবং আপনার বিশ্বাসের বিভাগের প্রদানকারীদের তুলনা করুন.", "itinerary_h": "দিন অনুযায়ী", "category_h": "এখন কার সঙ্গে ভ্রমণ করতে চান তা বেছে নিন", "category_sub": "নিচের তুলনায় ভ্রমণ একই থাকে; শুধু নির্বাচিত প্রদানকারী বিভাগটি বদলায়.", "compare_h": "তুলনা", "compare_sub": "শুধু নির্বাচিত বিভাগটি দেখানো হচ্ছে.", "row_price": "প্যাকেজের মূল্য", "row_duration": "ভ্রমণের সময়কাল", "row_hotel": "হোটেল", "row_meals": "খাবার", "row_transport": "পরিবহন", "row_sightseeing": "দর্শনীয় স্থান", "row_cancel": "রিফান্ড / বাতিল", "row_co2": "ট্রেনে সাশ্রয় হওয়া CO₂*", "row_rating": "রেটিং", "row_view": "বুক / দেখুন", "disclaimer": "দেখানো মূল্য, রেটিং এবং বাতিল নীতিগুলি এই প্রোটোটাইপের উদাহরণ তথ্য। বাস্তব ঘূমো অংশীদার যুক্ত না হওয়া পর্যন্ত স্থানীয় অপারেটর এন্ট্রিগুলি প্লেসহোল্ডার।"}

};

/* Complete UI translations for the four remaining languages. These keys are used across
   the home page, destination pages, comparison view, Our Model page and footer. */
const EXTRA_LANGS = {
  pa:{nav_destinations:'ਮੰਜ਼ਿਲਾਂ',nav_about:'ਸਾਡਾ ਮਾਡਲ',nav_compare:'ਤੁਲਨਾ ਕਰੋ',nav_cta:'ਪੈਕੇਜਾਂ ਦੀ ਤੁਲਨਾ ਕਰੋ',hero_h1:'ਸਿਰਫ਼ ਯਾਤਰਾ ਬੁੱਕ ਨਾ ਕਰੋ। ਸਹੀ ਚੋਣ ਕਰੋ।',hero_sub:'ਘੂਮੋ ਪ੍ਰਮਾਣਿਤ ਆਪਰੇਟਰਾਂ, ਭਾਰਤੀ ਟ੍ਰੈਵਲ ਪਲੇਟਫਾਰਮਾਂ ਅਤੇ ਸਥਾਨਕ ਮਾਹਿਰਾਂ ਨੂੰ ਇੱਕ ਸਪਸ਼ਟ ਤੁਲਨਾ ਵਿੱਚ ਲਿਆਉਂਦਾ ਹੈ।',hero_search_ph:'ਤੁਸੀਂ ਕਿੱਥੇ ਘੁੰਮਣਾ ਚਾਹੁੰਦੇ ਹੋ?',hero_explore:'ਖੋਜੋ',hero_check1:'ਪਾਰਦਰਸ਼ੀ ਤੁਲਨਾ',hero_check2:'ਭਾਰਤ-ਕੇਂਦਰਿਤ',hero_check3:'ਪ੍ਰਮਾਣਿਤ ਆਪਰੇਟਰ',filter_days:'ਦਿਨਾਂ ਦੀ ਗਿਣਤੀ',filter_cost:'ਪੈਕੇਜ ਦੀ ਲਾਗਤ',filter_category:'ਪ੍ਰਦਾਤਾ ਸ਼੍ਰੇਣੀ',filter_rating:'ਰੇਟਿੰਗ',filter_any:'ਕੋਈ ਵੀ',filter_apply:'ਫਿਲਟਰ ਲਾਗੂ ਕਰੋ',filter_results:'ਮੰਜ਼ਿਲਾਂ ਤੁਹਾਡੇ ਫਿਲਟਰ ਨਾਲ ਮਿਲਦੀਆਂ ਹਨ',section_popular_eyebrow:'ਭਾਰਤ ਦੀ ਖੋਜ ਕਰੋ',section_popular_h:'ਪ੍ਰਸਿੱਧ ਯਾਤਰਾ ਸਰਕਿਟ',section_popular_sub:'ਮੰਜ਼ਿਲ ਚੁਣੋ ਅਤੇ ਬੁਕਿੰਗ ਦੇ ਤਰੀਕਿਆਂ ਦੀ ਤੁਲਨਾ ਕਰੋ।',compare_btn:'ਤੁਲਨਾ ਕਰੋ',why_eyebrow:'ਘੂਮੋ ਕਿਉਂ?',why_h:'ਇੱਕ ਯਾਤਰਾ। ਬੁਕਿੰਗ ਦੇ ਕਈ ਤਰੀਕੇ।',why_sub:'ਯਾਤਰੀਆਂ ਨੂੰ ਪੈਕੇਜਾਂ ਦੇ ਅੰਤਰ ਸਮਝਣ ਲਈ ਕਈ ਟੈਬ ਖੋਲ੍ਹਣ ਦੀ ਲੋੜ ਨਹੀਂ।',step1_t:'ਖੋਜੋ',step1_d:'ਭਾਰਤ ਦੀਆਂ ਪ੍ਰਸਿੱਧ ਯਾਤਰਾਵਾਂ ਲੱਭੋ।',step2_t:'ਤੁਲਨਾ ਕਰੋ',step2_d:'ਪੈਕੇਜਾਂ ਦੇ ਅੰਤਰ ਨਾਲ-ਨਾਲ ਵੇਖੋ।',step3_t:'ਚੁਣੋ',step3_d:'ਆਪਣੇ ਲਈ ਢੁਕਵੇਂ ਸਾਥੀ ਨਾਲ ਅੱਗੇ ਵਧੋ।',footer_tagline:'ਭਾਰਤ ਖੋਜੋ। ਤੁਲਨਾ ਕਰੋ। ਚੁਣੋ। ਯਾਤਰਾ ਕਰੋ।',footer_explore:'ਖੋਜੋ',footer_company:'ਕੰਪਨੀ',footer_about_link:'ਘੂਮੋ ਬਾਰੇ',footer_contact:'ਸੰਪਰਕ',footer_partner:'ਸਾਡੇ ਨਾਲ ਭਾਗੀਦਾਰ ਬਣੋ',back_to_destinations:'ਸਾਰੀਆਂ ਮੰਜ਼ਿਲਾਂ ਵੱਲ ਵਾਪਸ',trip_style_h:'ਆਪਣੀ ਪਸੰਦ ਦੀ ਯਾਤਰਾ ਬਣਾਓ',trip_style_sub:'ਯਾਤਰਾ ਦੀ ਸ਼ੈਲੀ ਚੁਣੋ ਅਤੇ ਪ੍ਰਦਾਤਾਵਾਂ ਦੀ ਤੁਲਨਾ ਕਰੋ।',itinerary_h:'ਦਿਨ-ਪ੍ਰਤੀ-ਦਿਨ',category_h:'ਹੁਣ ਚੁਣੋ ਕਿ ਤੁਸੀਂ ਕਿਸ ਨਾਲ ਯਾਤਰਾ ਕਰਨੀ ਹੈ',category_sub:'ਤੁਲਨਾ ਵਿੱਚ ਯਾਤਰਾ ਇੱਕੋ ਹੈ; ਸਿਰਫ਼ ਸ਼੍ਰੇਣੀ ਬਦਲਦੀ ਹੈ।',compare_h:'ਤੁਲਨਾ',compare_sub:'ਸਿਰਫ਼ ਚੁਣੀ ਗਈ ਸ਼੍ਰੇਣੀ ਦਿਖਾਈ ਜਾ ਰਹੀ ਹੈ।',row_price:'ਪੈਕੇਜ ਕੀਮਤ',row_duration:'ਯਾਤਰਾ ਦੀ ਮਿਆਦ',row_hotel:'ਹੋਟਲ',row_meals:'ਭੋਜਨ',row_transport:'ਆਵਾਜਾਈ',row_sightseeing:'ਦਰਸ਼ਨ ਸਥਾਨ',row_cancel:'ਰਿਫੰਡ / ਰੱਦ ਕਰਨਾ',row_co2:'ਰੇਲ ਰਾਹੀਂ ਬਚਿਆ CO₂*',row_rating:'ਰੇਟਿੰਗ',row_view:'ਬੁੱਕ / ਵੇਖੋ',about_eyebrow:'ਘੂਮੋ ਕਿਉਂ?',about_h:'ਭਾਰਤ ਦਰਜਨਾਂ ਬ੍ਰਾਊਜ਼ਰ ਟੈਬਾਂ ਰਾਹੀਂ ਦੇਖਣ ਲਈ ਬਹੁਤ ਸੁੰਦਰ ਹੈ।',about_p1:'ਘੂਮੋ ਇੱਕ ਸਧਾਰਣ ਵਿਚਾਰ ’ਤੇ ਬਣਿਆ ਹੈ: ਯਾਤਰਾ ਰੋਮਾਂਚਕ ਹੋਵੇ, ਉਲਝਣ ਵਾਲੀ ਨਹੀਂ।',about_p2:'ਅਸੀਂ ਤੁਹਾਨੂੰ ਮੰਜ਼ਿਲ ਲੱਭਣ, ਯਾਤਰਾ ਦੇ ਤਰੀਕੇ ਸਮਝਣ ਅਤੇ ਵਿਕਲਪਾਂ ਦੀ ਤੁਲਨਾ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਾਂ।',about_quote:'ਘੱਟ ਖੋਜ। ਵੱਧ ਖੋਜ-ਅਨੁਭਵ। ਵੱਧ ਯਾਦਾਂ।'},
  as:{nav_destinations:'গন্তব্যসমূহ',nav_about:'আমাৰ মডেল',nav_compare:'তুলনা কৰক',nav_cta:'পেকেজ তুলনা কৰক',hero_h1:'কেৱল ভ্ৰমণ বুক নকৰিব। সঠিকটো বাছি লওক।',hero_sub:'ঘূমোৱে যাচাইকৃত অপাৰেটৰ, ভাৰতীয় ভ্ৰমণ প্লেটফৰ্ম আৰু স্থানীয় বিশেষজ্ঞক এক স্পষ্ট তুলনাত একত্ৰ কৰে।',hero_search_ph:'আপুনি ক’লৈ ফুৰিবলৈ যাব বিচাৰে?',hero_explore:'সন্ধান কৰক',hero_check1:'স্বচ্ছ তুলনা',hero_check2:'ভাৰত-কেন্দ্ৰিক',hero_check3:'যাচাইকৃত অপাৰেটৰ',filter_days:'দিনৰ সংখ্যা',filter_cost:'পেকেজৰ খৰচ',filter_category:'প্ৰদানকাৰীৰ শ্ৰেণী',filter_rating:'ৰেটিং',filter_any:'যিকোনো',filter_apply:'ফিল্টাৰ প্ৰয়োগ কৰক',filter_results:'গন্তব্যসমূহ আপোনাৰ ফিল্টাৰৰ সৈতে মিলে',section_popular_eyebrow:'ভাৰত অন্বেষণ কৰক',section_popular_h:'জনপ্ৰিয় ভ্ৰমণ পথ',section_popular_sub:'এটা গন্তব্য বাছি লৈ বুকিঙৰ পদ্ধতিসমূহ তুলনা কৰক।',compare_btn:'তুলনা কৰক',why_eyebrow:'ঘূমো কিয়?',why_h:'এটা ভ্ৰমণ। বুকিঙৰ বহু পথ।',why_sub:'পেকেজৰ পাৰ্থক্য বুজিবলৈ ভ্ৰমণকাৰীয়ে বহু টেব খুলিব নালাগে।',step1_t:'আৱিষ্কাৰ কৰক',step1_d:'জনপ্ৰিয় ভাৰতীয় ভ্ৰমণ পথ বিচাৰক।',step2_t:'তুলনা কৰক',step2_d:'পেকেজৰ পাৰ্থক্য কাষে কাষে চাওক।',step3_t:'বাছি লওক',step3_d:'আপোনাৰ বাবে উপযুক্ত অংশীদাৰৰ সৈতে আগবাঢ়ক।',footer_tagline:'ভাৰত আৱিষ্কাৰ কৰক। তুলনা কৰক। বাছি লওক। ভ্ৰমণ কৰক।',footer_explore:'অন্বেষণ',footer_company:'কোম্পানী',footer_about_link:'ঘূমোৰ বিষয়ে',footer_contact:'যোগাযোগ',footer_partner:'আমাৰ সৈতে অংশীদাৰ হওক',back_to_destinations:'সকলো গন্তব্যলৈ উভতি যাওক',trip_style_h:'আপোনাৰ উপযোগী ভ্ৰমণ গঢ়ক',trip_style_sub:'ভ্ৰমণৰ ধৰণ বাছি লৈ প্ৰদানকাৰীসকলৰ তুলনা কৰক।',itinerary_h:'দিনে দিনে',category_h:'এতিয়া কাৰ সৈতে ভ্ৰমণ কৰিব বিচাৰে বাছি লওক',category_sub:'তলৰ তুলনাত ভ্ৰমণ একেই; কেৱল শ্ৰেণী সলনি হয়।',compare_h:'তুলনা',compare_sub:'কেৱল নিৰ্বাচিত শ্ৰেণী দেখুওৱা হৈছে।',row_price:'পেকেজৰ মূল্য',row_duration:'ভ্ৰমণৰ সময়সীমা',row_hotel:'হোটেল',row_meals:'খাদ্য',row_transport:'পৰিবহণ',row_sightseeing:'দৰ্শনীয় স্থান',row_cancel:'ৰিফাণ্ড / বাতিল',row_co2:'ৰেলযোগে সঞ্চয় হোৱা CO₂*',row_rating:'ৰেটিং',row_view:'বুক / চাওক',about_eyebrow:'ঘূমো কিয়?',about_h:'ভাৰত ইমান সুন্দৰ যে ডজন ডজন ব্ৰাউজাৰ টেবত চাব নোৱাৰি।',about_p1:'ঘূমো এটা সহজ ধাৰণাৰ ওপৰত নিৰ্মিত: ভ্ৰমণ আনন্দদায়ক হওক, বিভ্ৰান্তিকৰ নহওক।',about_p2:'আমি আপোনাক গন্তব্য বিচাৰি উলিয়াব, ভ্ৰমণৰ পদ্ধতি বুজিব আৰু বিকল্পসমূহ তুলনা কৰাত সহায় কৰোঁ।',about_quote:'কম সন্ধান। অধিক আৱিষ্কাৰ। অধিক স্মৃতি।'},
  or:{nav_destinations:'ଗନ୍ତବ୍ୟସ୍ଥଳ',nav_about:'ଆମ ମଡେଲ୍',nav_compare:'ତୁଳନା କରନ୍ତୁ',nav_cta:'ପ୍ୟାକେଜ୍ ତୁଳନା କରନ୍ତୁ',hero_h1:'କେବଳ ଯାତ୍ରା ବୁକ୍ କରନ୍ତୁ ନାହିଁ। ଠିକ୍ ବିକଳ୍ପ ବାଛନ୍ତୁ।',hero_sub:'ଘୂମୋ ପ୍ରମାଣିତ ଅପରେଟର୍, ଭାରତୀୟ ଟ୍ରାଭେଲ୍ ପ୍ଲାଟଫର୍ମ ଏବଂ ସ୍ଥାନୀୟ ବିଶେଷଜ୍ଞଙ୍କୁ ଏକ ସ୍ପଷ୍ଟ ତୁଳନାରେ ଆଣେ।',hero_search_ph:'ଆପଣ କେଉଁଠି ଭ୍ରମଣ କରିବାକୁ ଚାହାଁନ୍ତି?',hero_explore:'ଖୋଜନ୍ତୁ',hero_check1:'ସ୍ୱଚ୍ଛ ତୁଳନା',hero_check2:'ଭାରତ-କେନ୍ଦ୍ରିତ',hero_check3:'ପ୍ରମାଣିତ ଅପରେଟର୍',filter_days:'ଦିନ ସଂଖ୍ୟା',filter_cost:'ପ୍ୟାକେଜ୍ ମୂଲ୍ୟ',filter_category:'ପ୍ରଦାନକାରୀ ଶ୍ରେଣୀ',filter_rating:'ରେଟିଂ',filter_any:'ଯେକୌଣସି',filter_apply:'ଫିଲ୍ଟର୍ ଲାଗୁ କରନ୍ତୁ',filter_results:'ଗନ୍ତବ୍ୟଗୁଡ଼ିକ ଆପଣଙ୍କ ଫିଲ୍ଟର୍ ସହ ମେଳ ଖାଉଛି',section_popular_eyebrow:'ଭାରତ ଅନ୍ୱେଷଣ କରନ୍ତୁ',section_popular_h:'ଲୋକପ୍ରିୟ ଯାତ୍ରା ପଥ',section_popular_sub:'ଏକ ଗନ୍ତବ୍ୟ ବାଛନ୍ତୁ ଏବଂ ବୁକିଂ ପଦ୍ଧତିଗୁଡ଼ିକୁ ତୁଳନା କରନ୍ତୁ।',compare_btn:'ତୁଳନା କରନ୍ତୁ',why_eyebrow:'ଘୂମୋ କାହିଁକି?',why_h:'ଗୋଟିଏ ଯାତ୍ରା। ବୁକିଂର ଅନେକ ଉପାୟ।',why_sub:'ପ୍ୟାକେଜ୍‌ର ତଫାତ୍ ବୁଝିବା ପାଇଁ ଯାତ୍ରୀମାନେ ଅନେକ ଟ୍ୟାବ୍ ଖୋଲିବା ଦରକାର ନାହିଁ।',step1_t:'ଆବିଷ୍କାର',step1_d:'ଲୋକପ୍ରିୟ ଭାରତୀୟ ଯାତ୍ରା ପଥ ଖୋଜନ୍ତୁ।',step2_t:'ତୁଳନା',step2_d:'ପ୍ୟାକେଜ୍‌ର ତଫାତ୍ ପାଖାପାଖି ଦେଖନ୍ତୁ।',step3_t:'ବାଛନ୍ତୁ',step3_d:'ଆପଣଙ୍କ ପାଇଁ ଉପଯୁକ୍ତ ସହଭାଗୀଙ୍କ ପାଖକୁ ଯାଆନ୍ତୁ।',footer_tagline:'ଭାରତ ଆବିଷ୍କାର କରନ୍ତୁ। ତୁଳନା କରନ୍ତୁ। ବାଛନ୍ତୁ। ଯାତ୍ରା କରନ୍ତୁ।',footer_explore:'ଅନ୍ୱେଷଣ',footer_company:'କମ୍ପାନୀ',footer_about_link:'ଘୂମୋ ବିଷୟରେ',footer_contact:'ଯୋଗାଯୋଗ',footer_partner:'ଆମ ସହ ଭାଗୀଦାର ହୁଅନ୍ତୁ',back_to_destinations:'ସମସ୍ତ ଗନ୍ତବ୍ୟକୁ ଫେରନ୍ତୁ',trip_style_h:'ଆପଣଙ୍କ ପାଇଁ ଉପଯୁକ୍ତ ଯାତ୍ରା ତିଆରି କରନ୍ତୁ',trip_style_sub:'ଯାତ୍ରା ଶୈଳୀ ବାଛନ୍ତୁ ଏବଂ ପ୍ରଦାନକାରୀଙ୍କୁ ତୁଳନା କରନ୍ତୁ।',itinerary_h:'ଦିନକ୍ରମେ',category_h:'ଏବେ କାହା ସହ ଯାତ୍ରା କରିବେ ବାଛନ୍ତୁ',category_sub:'ତଳର ତୁଳନାରେ ଯାତ୍ରା ସମାନ; କେବଳ ଶ୍ରେଣୀ ବଦଳେ।',compare_h:'ତୁଳନା',compare_sub:'କେବଳ ଚୟନିତ ଶ୍ରେଣୀ ଦେଖାଯାଉଛି।',row_price:'ପ୍ୟାକେଜ୍ ମୂଲ୍ୟ',row_duration:'ଯାତ୍ରା ଅବଧି',row_hotel:'ହୋଟେଲ୍',row_meals:'ଖାଦ୍ୟ',row_transport:'ପରିବହନ',row_sightseeing:'ଦର୍ଶନୀୟ ସ୍ଥାନ',row_cancel:'ଫେରସ୍ତ / ବାତିଲ୍',row_co2:'ଟ୍ରେନ୍‌ରେ ସଞ୍ଚିତ CO₂*',row_rating:'ରେଟିଂ',row_view:'ବୁକ୍ / ଦେଖନ୍ତୁ',about_eyebrow:'ଘୂମୋ କାହିଁକି?',about_h:'ଭାରତ ଏତେ ସୁନ୍ଦର ଯେ ଦଶଦଶଟି ବ୍ରାଉଜର୍ ଟ୍ୟାବ୍‌ରେ ଦେଖିହେବ ନାହିଁ।',about_p1:'ଘୂମୋ ଏକ ସରଳ ଧାରଣା ଉପରେ ନିର୍ମିତ: ଯାତ୍ରା ରୋମାଞ୍ଚକ ହେଉ, ଦ୍ୱନ୍ଦ୍ୱମୟ ନୁହେଁ।',about_p2:'ଆମେ ଆପଣଙ୍କୁ ଗନ୍ତବ୍ୟ ଖୋଜିବା, ଯାତ୍ରା ପଦ୍ଧତି ବୁଝିବା ଏବଂ ବିକଳ୍ପ ତୁଳନା କରିବାରେ ସାହାଯ୍ୟ କରୁ।',about_quote:'କମ୍ ଖୋଜା। ଅଧିକ ଆବିଷ୍କାର। ଅଧିକ ସ୍ମୃତି।'},
  ur:{nav_destinations:'مقامات',nav_about:'ہمارا ماڈل',nav_compare:'موازنہ کریں',nav_cta:'پیکیجز کا موازنہ کریں',hero_h1:'صرف سفر بک نہ کریں۔ درست انتخاب کریں۔',hero_sub:'گھومو تصدیق شدہ آپریٹرز، بھارتی ٹریول پلیٹ فارمز اور مقامی ماہرین کو ایک واضح موازنے میں لاتا ہے۔',hero_search_ph:'آپ کہاں گھومنا چاہتے ہیں؟',hero_explore:'تلاش کریں',hero_check1:'شفاف موازنہ',hero_check2:'بھارت پر مرکوز',hero_check3:'تصدیق شدہ آپریٹرز',filter_days:'دنوں کی تعداد',filter_cost:'پیکیج کی قیمت',filter_category:'فراہم کنندہ کی قسم',filter_rating:'ریٹنگ',filter_any:'کوئی بھی',filter_apply:'فلٹرز لاگو کریں',filter_results:'مقامات آپ کے فلٹرز سے میل کھاتے ہیں',section_popular_eyebrow:'بھارت دریافت کریں',section_popular_h:'مقبول سفری راستے',section_popular_sub:'ایک مقام منتخب کریں اور بکنگ کے طریقوں کا موازنہ کریں۔',compare_btn:'موازنہ',why_eyebrow:'گھومو کیوں؟',why_h:'ایک سفر۔ بکنگ کے کئی طریقے۔',why_sub:'مسافروں کو پیکیجز کا فرق سمجھنے کے لیے کئی ٹیب کھولنے کی ضرورت نہیں۔',step1_t:'دریافت کریں',step1_d:'بھارت کے مقبول سفری راستے تلاش کریں۔',step2_t:'موازنہ کریں',step2_d:'پیکیجز کے فرق ساتھ ساتھ دیکھیں۔',step3_t:'منتخب کریں',step3_d:'اپنے لیے موزوں پارٹنر کے ساتھ آگے بڑھیں۔',footer_tagline:'بھارت دریافت کریں۔ موازنہ کریں۔ منتخب کریں۔ سفر کریں۔',footer_explore:'دریافت',footer_company:'کمپنی',footer_about_link:'گھومو کے بارے میں',footer_contact:'رابطہ',footer_partner:'ہمارے ساتھ شراکت کریں',back_to_destinations:'تمام مقامات پر واپس جائیں',trip_style_h:'اپنے مطابق سفر بنائیں',trip_style_sub:'سفر کا انداز منتخب کریں اور فراہم کنندگان کا موازنہ کریں۔',itinerary_h:'دن بہ دن',category_h:'اب منتخب کریں کہ کس کے ساتھ سفر کرنا ہے',category_sub:'نیچے سفر ایک ہی ہے؛ صرف فراہم کنندہ کی قسم بدلتی ہے۔',compare_h:'موازنہ',compare_sub:'صرف منتخب قسم دکھائی جا رہی ہے۔',row_price:'پیکیج کی قیمت',row_duration:'سفر کی مدت',row_hotel:'ہوٹل',row_meals:'کھانا',row_transport:'نقل و حمل',row_sightseeing:'سیاحتی مقامات',row_cancel:'رقم واپسی / منسوخی',row_co2:'ٹرین سے بچایا گیا CO₂*',row_rating:'ریٹنگ',row_view:'بک / دیکھیں',about_eyebrow:'گھومو کیوں؟',about_h:'بھارت اتنا خوبصورت ہے کہ اسے درجنوں براؤزر ٹیبز سے نہیں دیکھا جا سکتا۔',about_p1:'گھومو ایک سادہ خیال پر قائم ہے: سفر پُرجوش ہو، الجھن والا نہیں۔',about_p2:'ہم آپ کو مقام دریافت کرنے، سفر کے طریقے سمجھنے اور اختیارات کا موازنہ کرنے میں مدد دیتے ہیں۔',about_quote:'کم تلاش۔ زیادہ دریافت۔ زیادہ یادیں۔'}
};
EXTRA_LANGS.sd = {
  nav_destinations:'منزلون', nav_about:'اسان جو ماڊل', nav_compare:'مقابلو ڪريو', nav_cta:'پيڪيجن جو مقابلو ڪريو',
  hero_h1:'رڳو سفر بُڪ نه ڪريو؛ صحيح چونڊ ڪريو.', hero_sub:'گھومو تصديق ٿيل آپريٽرن، ڀارتي سفري پليٽ فارمن ۽ مقامي ماهرن کي هڪ واضح مقابلي ۾ گڏ ڪري ٿو.', hero_search_ph:'توهان ڪٿي گهمڻ چاهيو ٿا؟', hero_explore:'ڳوليو',
  hero_check1:'شفاف مقابلو', hero_check2:'ڀارت تي ڌيان', hero_check3:'تصديق ٿيل آپريٽر',
  filter_days:'ڏينهن جو تعداد', filter_cost:'پيڪيج جي قيمت', filter_category:'فراهم ڪندڙ جو قسم', filter_rating:'ريٽنگ', filter_any:'ڪو به', filter_apply:'فلٽر لاڳو ڪريو', filter_results:'منزلون توهان جي فلٽر سان ملن ٿيون',
  section_popular_eyebrow:'ڀارت ڳوليو', section_popular_h:'مشهور سفري رستا', section_popular_sub:'هڪ منزل چونڊيو ۽ بُڪنگ جي طريقن جو مقابلو ڪريو.', compare_btn:'مقابلو ڪريو',
  why_eyebrow:'گھومو ڇو؟', why_h:'هڪ سفر. بُڪنگ جا ڪيترائي طريقا.', why_sub:'پيڪيجن جي فرق کي سمجهڻ لاءِ مسافرن کي ڪيترائي ٽيب کولڻ جي ضرورت ناهي.',
  step1_t:'دريافت ڪريو', step1_d:'ڀارت جا مشهور سفري رستا ڳوليو.', step2_t:'مقابلو ڪريو', step2_d:'پيڪيجن جا فرق گڏوگڏ ڏسو.', step3_t:'چونڊيو', step3_d:'پنهنجي لاءِ مناسب ساٿي سان اڳتي وڌو.',
  footer_tagline:'ڀارت ڳوليو. مقابلو ڪريو. چونڊيو. سفر ڪريو.', footer_explore:'ڳوليو', footer_company:'ڪمپني', footer_about_link:'گھومو بابت', footer_contact:'رابطو', footer_partner:'اسان سان ڀائيوار ٿيو', back_to_destinations:'سڀني منزلن ڏانهن واپس',
  trip_style_h:'پنهنجي پسند جو سفر ٺاهيو', trip_style_sub:'سفر جو انداز چونڊيو ۽ فراهم ڪندڙن جو مقابلو ڪريو.', itinerary_h:'ڏينهن بہ ڏينهن', category_h:'هاڻي چونڊيو ته توهان ڪنهن سان سفر ڪرڻ چاهيو ٿا', category_sub:'هيٺين مقابلي ۾ سفر ساڳيو آهي؛ رڳو قسم بدلجي ٿو.', compare_h:'مقابلو', compare_sub:'رڳو چونڊيل قسم ڏيکاريو پيو وڃي.',
  row_price:'پيڪيج جي قيمت', row_duration:'سفر جو مدو', row_hotel:'هوٽل', row_meals:'کاڌو', row_transport:'آمدرفت', row_sightseeing:'گهمڻ جون جايون', row_cancel:'رقم واپسي / منسوخي', row_co2:'ريل ذريعي بچايل CO₂*', row_rating:'ريٽنگ', row_view:'بُڪ / ڏسو',
  disclaimer:'ڏيکاريل قيمتون، ريٽنگون ۽ منسوخي جون پاليسيون هن پروٽوٽائپ لاءِ مثال طور ڏنل ڊيٽا آهن.'
};
Object.assign(I18N, EXTRA_LANGS);

/* ---------- Our Model page translations ---------- */
const MODEL_I18N = {
  en:{model_eyebrow:'THREE-HEAD TOUR STRUCTURE',model_title:'Every trip, three ways to book it',verified_title:'Verified Tour Operators',verified_desc:'Established Indian tour companies with a long track record. Operator listings can grow over time.',ota_title:'OTA Platforms',ota_desc:"India's major online travel platforms. Platform listings can grow over time.",local_title:'Local Tour Operators',local_desc:'Destination specialists who know the region best — smaller, local, and often the most personal way to travel.'},
  hi:{model_eyebrow:'तीन-प्रमुख यात्रा संरचना',model_title:'हर यात्रा के लिए बुकिंग के तीन तरीके',verified_title:'सत्यापित ऑपरेटर',verified_desc:'स्थापित भारतीय टूर कंपनियाँ जिनका लंबा अनुभव है। ऑपरेटरों की सूची समय के साथ बढ़ सकती है।',ota_title:'ओटीए प्लेटफ़ॉर्म',ota_desc:'भारत के प्रमुख ऑनलाइन ट्रैवल प्लेटफ़ॉर्म।',local_title:'स्थानीय टूर ऑपरेटर',local_desc:'क्षेत्र को जानने वाले स्थानीय यात्रा विशेषज्ञ।'},
  bn:{model_eyebrow:'তিন-ধরনের ট্যুর কাঠামো',model_title:'প্রতিটি ভ্রমণের জন্য বুকিংয়ের তিনটি উপায়',verified_title:'যাচাইকৃত অপারেটর',verified_desc:'প্রতিষ্ঠিত ভারতীয় ট্যুর কোম্পানি।',ota_title:'ওটিএ প্ল্যাটফর্ম',ota_desc:'ভারতের প্রধান অনলাইন ট্রাভেল প্ল্যাটফর্ম।',local_title:'স্থানীয় ট্যুর অপারেটর',local_desc:'অঞ্চলকে ভালোভাবে জানা স্থানীয় বিশেষজ্ঞ।'},
  ta:{model_eyebrow:'மூன்று வகை சுற்றுலா அமைப்பு',model_title:'ஒவ்வொரு பயணத்திற்கும் முன்பதிவு செய்ய மூன்று வழிகள்',verified_title:'சரிபார்க்கப்பட்ட இயக்குநர்கள்',verified_desc:'நிறுவப்பட்ட இந்திய சுற்றுலா நிறுவனங்கள்.',ota_title:'OTA தளங்கள்',ota_desc:'இந்தியாவின் முக்கிய ஆன்லைன் பயண தளங்கள்.',local_title:'உள்ளூர் சுற்றுலா இயக்குநர்கள்',local_desc:'பகுதியை நன்கு அறிந்த உள்ளூர் நிபுணர்கள்.'},
  te:{model_eyebrow:'మూడు రకాల టూర్ నిర్మాణం',model_title:'ప్రతి ప్రయాణానికి బుకింగ్ చేసుకునే మూడు మార్గాలు',verified_title:'ధృవీకరించిన ఆపరేటర్లు',verified_desc:'స్థాపిత భారతీయ టూర్ కంపెనీలు.',ota_title:'OTA ప్లాట్‌ఫారమ్‌లు',ota_desc:'భారతదేశంలోని ప్రధాన ఆన్‌లైన్ ట్రావెల్ ప్లాట్‌ఫారమ్‌లు.',local_title:'స్థానిక టూర్ ఆపరేటర్లు',local_desc:'ప్రాంతాన్ని బాగా తెలిసిన స్థానిక నిపుణులు.'},
  mr:{model_eyebrow:'तीन-प्रमुख टूर रचना',model_title:'प्रत्येक प्रवासासाठी बुकिंगचे तीन मार्ग',verified_title:'सत्यापित ऑपरेटर',verified_desc:'स्थापित भारतीय टूर कंपन्या.',ota_title:'OTA प्लॅटफॉर्म',ota_desc:'भारतातील प्रमुख ऑनलाइन ट्रॅव्हल प्लॅटफॉर्म.',local_title:'स्थानिक टूर ऑपरेटर',local_desc:'प्रदेशाची उत्तम माहिती असलेले स्थानिक तज्ज्ञ.'},
  gu:{model_eyebrow:'ત્રણ પ્રકારની ટૂર રચના',model_title:'દરેક પ્રવાસ માટે બુકિંગના ત્રણ રસ્તા',verified_title:'ચકાસાયેલા ઓપરેટર્સ',verified_desc:'સ્થાપિત ભારતીય ટૂર કંપનીઓ.',ota_title:'OTA પ્લેટફોર્મ્સ',ota_desc:'ભારતના મુખ્ય ઓનલાઈન ટ્રાવેલ પ્લેટફોર્મ્સ.',local_title:'સ્થાનિક ટૂર ઓપરેટર્સ',local_desc:'પ્રદેશને સારી રીતે જાણતા સ્થાનિક નિષ્ણાતો.'},
  kn:{model_eyebrow:'ಮೂರು ವಿಧದ ಪ್ರವಾಸ ರಚನೆ',model_title:'ಪ್ರತಿ ಪ್ರವಾಸವನ್ನು ಬುಕ್ ಮಾಡಲು ಮೂರು ಮಾರ್ಗಗಳು',verified_title:'ಪರಿಶೀಲಿತ ಆಪರೇಟರ್‌ಗಳು',verified_desc:'ಸ್ಥಾಪಿತ ಭಾರತೀಯ ಪ್ರವಾಸ ಕಂಪನಿಗಳು.',ota_title:'OTA ವೇದಿಕೆಗಳು',ota_desc:'ಭಾರತದ ಪ್ರಮುಖ ಆನ್‌ಲೈನ್ ಪ್ರಯಾಣ ವೇದಿಕೆಗಳು.',local_title:'ಸ್ಥಳೀಯ ಪ್ರವಾಸ ಆಪರೇಟರ್‌ಗಳು',local_desc:'ಪ್ರದೇಶವನ್ನು ಚೆನ್ನಾಗಿ ತಿಳಿದಿರುವ ಸ್ಥಳೀಯ ತಜ್ಞರು.'},
  ml:{model_eyebrow:'മൂന്ന് തരത്തിലുള്ള ടൂർ ഘടന',model_title:'ഓരോ യാത്രയും ബുക്ക് ചെയ്യാൻ മൂന്ന് മാർഗങ്ങൾ',verified_title:'സ്ഥിരീകരിച്ച ഓപ്പറേറ്റർമാർ',verified_desc:'സ്ഥാപിത ഇന്ത്യൻ ടൂർ കമ്പനികൾ.',ota_title:'OTA പ്ലാറ്റ്ഫോമുകൾ',ota_desc:'ഇന്ത്യയിലെ പ്രധാന ഓൺലൈൻ യാത്രാ പ്ലാറ്റ്ഫോമുകൾ.',local_title:'പ്രാദേശിക ടൂർ ഓപ്പറേറ്റർമാർ',local_desc:'പ്രദേശത്തെ നന്നായി അറിയുന്ന പ്രാദേശിക വിദഗ്ധർ.'},
  pa:{model_eyebrow:'ਤਿੰਨ-ਪੱਖੀ ਟੂਰ ਢਾਂਚਾ',model_title:'ਹਰ ਯਾਤਰਾ ਲਈ ਬੁਕਿੰਗ ਦੇ ਤਿੰਨ ਤਰੀਕੇ',verified_title:'ਪ੍ਰਮਾਣਿਤ ਆਪਰੇਟਰ',verified_desc:'ਸਥਾਪਿਤ ਭਾਰਤੀ ਟੂਰ ਕੰਪਨੀਆਂ।',ota_title:'ਓਟੀਏ ਪਲੇਟਫਾਰਮ',ota_desc:'ਭਾਰਤ ਦੇ ਮੁੱਖ ਆਨਲਾਈਨ ਟ੍ਰੈਵਲ ਪਲੇਟਫਾਰਮ।',local_title:'ਸਥਾਨਕ ਟੂਰ ਆਪਰੇਟਰ',local_desc:'ਖੇਤਰ ਨੂੰ ਚੰਗੀ ਤਰ੍ਹਾਂ ਜਾਣਦੇ ਸਥਾਨਕ ਮਾਹਿਰ।'},
  as:{model_eyebrow:'তিনি-মুখীয়া ভ্ৰমণ গঠন',model_title:'প্ৰতিটো ভ্ৰমণ বুক কৰাৰ তিনিটা উপায়',verified_title:'প্ৰমাণিত অপাৰেটৰ',verified_desc:'প্ৰতিষ্ঠিত ভাৰতীয় টুৰ কোম্পানী।',ota_title:'অ’টিএ প্লেটফৰ্ম',ota_desc:'ভাৰতৰ মুখ্য অনলাইন ট্ৰেভেল প্লেটফৰ্ম।',local_title:'স্থানীয় টুৰ অপাৰেটৰ',local_desc:'অঞ্চলটো ভালদৰে জনা স্থানীয় বিশেষজ্ঞ।'},
  ur:{model_eyebrow:'تین حصوں پر مشتمل ٹور ڈھانچہ',model_title:'ہر سفر کے لیے بکنگ کے تین طریقے',verified_title:'تصدیق شدہ آپریٹرز',verified_desc:'معروف بھارتی ٹور کمپنیاں۔',ota_title:'او ٹی اے پلیٹ فارمز',ota_desc:'بھارت کے بڑے آن لائن ٹریول پلیٹ فارمز۔',local_title:'مقامی ٹور آپریٹرز',local_desc:'علاقے کو اچھی طرح جاننے والے مقامی ماہرین۔'},
  or:{model_eyebrow:'ତିନି-ପ୍ରକାର ଟୁର୍ ଗଠନ',model_title:'ପ୍ରତ୍ୟେକ ଯାତ୍ରା ପାଇଁ ବୁକିଂର ତିନୋଟି ଉପାୟ',verified_title:'ଯାଞ୍ଚିତ ଅପରେଟର୍',verified_desc:'ପ୍ରତିଷ୍ଠିତ ଭାରତୀୟ ଟୁର୍ କମ୍ପାନୀ।',ota_title:'ଓଟିଏ ପ୍ଲାଟଫର୍ମ',ota_desc:'ଭାରତର ପ୍ରମୁଖ ଅନଲାଇନ୍ ଟ୍ରାଭେଲ୍ ପ୍ଲାଟଫର୍ମ।',local_title:'ସ୍ଥାନୀୟ ଟୁର୍ ଅପରେଟର୍',local_desc:'ଅଞ୍ଚଳକୁ ଭଲଭାବେ ଜାଣିଥିବା ସ୍ଥାନୀୟ ବିଶେଷଜ୍ଞ।'},
  sd:{model_eyebrow:'ٽن حصن وارو سفري ڍانچو',model_title:'هر سفر لاءِ بُڪنگ جا ٽي طريقا',verified_title:'تصديق ٿيل آپريٽر',verified_desc:'قائم ٿيل ڀارتي ٽوئر ڪمپنيون.',ota_title:'او ٽي اي پليٽ فارم',ota_desc:'ڀارت جا اهم آن لائن سفري پليٽ فارم.',local_title:'مقامي ٽوئر آپريٽر',local_desc:'علائقي کي چڱيءَ طرح ڄاڻندڙ مقامي ماهر.'}
};
function mt(key){ return (MODEL_I18N[currentLang] && MODEL_I18N[currentLang][key]) || MODEL_I18N.en[key] || key; }

let currentLang = 'en';
const ABOUT_I18N = {
  en:{about_eyebrow:'WHY GHOOMO',about_h:'India is too beautiful to see through a dozen browser tabs.',about_p1:'Ghoomo is built around a simple feeling: travel should be exciting, not confusing.',about_p2:'We help you discover a destination, understand the different ways to travel there, and compare your choices side-by-side before you decide. Whether you prefer an established tour company, an Indian online travel platform, or a trusted local specialist, Ghoomo puts the choice in your hands.',about_quote:'Less searching. More discovering. More memories.'},
  hi:{about_eyebrow:'घूमो क्यों',about_h:'भारत इतना सुंदर है कि इसे दर्जनों ब्राउज़र टैब के ज़रिए नहीं देखा जा सकता।',about_p1:'घूमो एक सरल भावना पर आधारित है: यात्रा रोमांचक होनी चाहिए, उलझन भरी नहीं।',about_p2:'हम आपको गंतव्य खोजने, वहाँ यात्रा करने के अलग-अलग तरीकों को समझने और निर्णय लेने से पहले विकल्पों की साथ-साथ तुलना करने में मदद करते हैं। चाहे आप किसी स्थापित टूर कंपनी, भारतीय ऑनलाइन ट्रैवल प्लेटफ़ॉर्म या भरोसेमंद स्थानीय विशेषज्ञ को पसंद करें, घूमो चुनाव आपके हाथ में रखता है।',about_quote:'कम खोजें। अधिक खोजें। अधिक यादें बनाएँ।'},
  bn:{about_eyebrow:'কেন ঘুমো',about_h:'ভারত এত সুন্দর যে এক ডজন ব্রাউজার ট্যাব খুলে তা দেখা উচিত নয়।',about_p1:'ঘুমো একটি সহজ অনুভূতির ভিত্তিতে তৈরি: ভ্রমণ আনন্দদায়ক হওয়া উচিত, বিভ্রান্তিকর নয়।',about_p2:'আমরা আপনাকে গন্তব্য খুঁজে পেতে, সেখানে যাওয়ার বিভিন্ন উপায় বুঝতে এবং সিদ্ধান্ত নেওয়ার আগে বিকল্পগুলির পাশাপাশি তুলনা করতে সাহায্য করি। আপনি প্রতিষ্ঠিত ট্যুর কোম্পানি, ভারতীয় অনলাইন ট্রাভেল প্ল্যাটফর্ম বা বিশ্বস্ত স্থানীয় বিশেষজ্ঞ পছন্দ করুন না কেন, পছন্দের ক্ষমতা আপনার হাতেই থাকে।',about_quote:'কম খোঁজাখুঁজি। বেশি আবিষ্কার। আরও স্মৃতি।'},
  ta:{about_eyebrow:'ஏன் GHOOMO',about_h:'ஒரு டஜன் உலாவி தாவல்களின் வழியாகப் பார்ப்பதற்குப் பதிலாக இந்தியாவை அழகாக அனுபவிக்கலாம்.',about_p1:'பயணம் குழப்பமாக அல்ல, உற்சாகமாக இருக்க வேண்டும் என்ற எளிய எண்ணத்தில் Ghoomo உருவாக்கப்பட்டுள்ளது.',about_p2:'ஒரு இடத்தை அறியவும், அங்கு செல்லும் பல்வேறு வழிகளைப் புரிந்துகொள்ளவும், முடிவு செய்வதற்கு முன் விருப்பங்களை அருகருகே ஒப்பிடவும் நாங்கள் உதவுகிறோம். நிறுவப்பட்ட சுற்றுலா நிறுவனமோ, இந்திய ஆன்லைன் பயண தளமோ அல்லது நம்பகமான உள்ளூர் நிபுணரோ—தேர்வு உங்கள் கைகளில் இருக்கும்.',about_quote:'குறைவான தேடல். அதிகமான கண்டுபிடிப்பு. அதிகமான நினைவுகள்.'},
  te:{about_eyebrow:'GHOOMO ఎందుకు',about_h:'భారతదేశం చాలా అందమైనది; దాన్ని డజన్ల కొద్దీ బ్రౌజర్ ట్యాబ్‌ల ద్వారా చూడాల్సిన అవసరం లేదు.',about_p1:'ప్రయాణం గందరగోళంగా కాకుండా ఉత్సాహంగా ఉండాలనే సరళమైన భావనతో Ghoomo రూపొందించబడింది.',about_p2:'గమ్యస్థానాన్ని కనుగొనడం, అక్కడికి వెళ్లే వివిధ మార్గాలను అర్థం చేసుకోవడం, నిర్ణయం తీసుకునే ముందు ఎంపికలను పక్కపక్కన పోల్చడం కోసం మేము సహాయం చేస్తాము. ప్రసిద్ధ టూర్ కంపెనీ అయినా, భారతీయ ఆన్‌లైన్ ట్రావెల్ ప్లాట్‌ఫారమ్ అయినా, నమ్మకమైన స్థానిక నిపుణుడైనా—ఎంపిక మీ చేతుల్లో ఉంటుంది.',about_quote:'తక్కువ వెతుకులాట. ఎక్కువ అన్వేషణ. మరిన్ని జ్ఞాపకాలు.'},
  mr:{about_eyebrow:'घूमो का',about_h:'भारत इतका सुंदर आहे की तो डझनभर ब्राउझर टॅबमधून पाहू नये.',about_p1:'प्रवास गोंधळात टाकणारा नव्हे, तर उत्साहवर्धक असावा या साध्या भावनेवर घूमो आधारित आहे.',about_p2:'गंतव्य शोधणे, तिथे जाण्याचे विविध मार्ग समजून घेणे आणि निर्णय घेण्यापूर्वी पर्यायांची शेजारी शेजारी तुलना करणे यासाठी आम्ही मदत करतो. प्रस्थापित टूर कंपनी, भारतीय ऑनलाइन ट्रॅव्हल प्लॅटफॉर्म किंवा विश्वासार्ह स्थानिक तज्ज्ञ—तुमची निवड तुमच्या हातात राहते.',about_quote:'कमी शोधाशोध. अधिक शोध. अधिक आठवणी.'},
  gu:{about_eyebrow:'GHOOMO શા માટે',about_h:'ભારત એટલું સુંદર છે કે તેને ડઝન જેટલા બ્રાઉઝર ટેબ દ્વારા જોવું યોગ્ય નથી.',about_p1:'મુસાફરી રોમાંચક હોવી જોઈએ, મૂંઝવણભરી નહીં—આ સરળ ભાવના પર Ghoomo બનાવવામાં આવ્યું છે.',about_p2:'અમે તમને સ્થળ શોધવામાં, ત્યાં જવાના વિવિધ રસ્તાઓ સમજવામાં અને નિર્ણય લેતા પહેલાં વિકલ્પોની સાથે-સાથે સરખામણી કરવામાં મદદ કરીએ છીએ. સ્થાપિત ટૂર કંપની, ભારતીય ઓનલાઈન ટ્રાવેલ પ્લેટફોર્મ અથવા વિશ્વસનીય સ્થાનિક નિષ્ણાત—પસંદગી તમારા હાથમાં રહે છે.',about_quote:'ઓછી શોધખોળ. વધુ શોધ. વધુ યાદો.'},
  kn:{about_eyebrow:'GHOOMO ಏಕೆ',about_h:'ಭಾರತವು ತುಂಬಾ ಸುಂದರವಾಗಿದೆ; ಅದನ್ನು ಹನ್ನೆರಡು ಬ್ರೌಸರ್ ಟ್ಯಾಬ್‌ಗಳ ಮೂಲಕ ನೋಡುವ ಅಗತ್ಯವಿಲ್ಲ.',about_p1:'ಪ್ರಯಾಣವು ಗೊಂದಲಕಾರಿಯಾಗದೆ ಉತ್ಸಾಹಭರಿತವಾಗಿರಬೇಕು ಎಂಬ ಸರಳ ಭಾವನೆಯ ಮೇಲೆ Ghoomo ನಿರ್ಮಿಸಲಾಗಿದೆ.',about_p2:'ಗಮ್ಯಸ್ಥಾನವನ್ನು ಕಂಡುಹಿಡಿಯಲು, ಅಲ್ಲಿಗೆ ಪ್ರಯಾಣಿಸುವ ವಿವಿಧ ಮಾರ್ಗಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ನಿರ್ಧಾರ ಮಾಡುವ ಮೊದಲು ಆಯ್ಕೆಗಳನ್ನು ಪಕ್ಕಪಕ್ಕದಲ್ಲಿ ಹೋಲಿಸಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ. ಸ್ಥಾಪಿತ ಪ್ರವಾಸ ಕಂಪನಿ, ಭಾರತೀಯ ಆನ್‌ಲೈನ್ ಟ್ರಾವೆಲ್ ವೇದಿಕೆ ಅಥವಾ ನಂಬಿಕೆಯ ಸ್ಥಳೀಯ ತಜ್ಞ—ಆಯ್ಕೆ ನಿಮ್ಮ ಕೈಯಲ್ಲಿದೆ.',about_quote:'ಕಡಿಮೆ ಹುಡುಕಾಟ. ಹೆಚ್ಚು ಅನ್ವೇಷಣೆ. ಹೆಚ್ಚು ನೆನಪುಗಳು.'},
  ml:{about_eyebrow:'എന്തുകൊണ്ട് GHOOMO',about_h:'ഒരു ഡസൻ ബ്രൗസർ ടാബുകളിലൂടെ കാണുന്നതിനേക്കാൾ മനോഹരമാണ് ഇന്ത്യയെ അനുഭവിക്കുന്നത്.',about_p1:'യാത്ര ആശയക്കുഴപ്പമല്ല, ആവേശകരമായിരിക്കണം എന്ന ലളിതമായ ആശയത്തിലാണ് Ghoomo നിർമ്മിച്ചിരിക്കുന്നത്.',about_p2:'ഒരു ലക്ഷ്യസ്ഥാനം കണ്ടെത്താനും അവിടേക്കുള്ള വിവിധ യാത്രാമാർഗങ്ങൾ മനസ്സിലാക്കാനും തീരുമാനിക്കുന്നതിന് മുമ്പ് നിങ്ങളുടെ തിരഞ്ഞെടുപ്പുകൾ ഒപ്പത്തിനൊപ്പം താരതമ്യം ചെയ്യാനും ഞങ്ങൾ സഹായിക്കുന്നു. സ്ഥാപിത ടൂർ കമ്പനിയെയോ ഇന്ത്യൻ ഓൺലൈൻ ട്രാവൽ പ്ലാറ്റ്‌ഫോമിനെയോ വിശ്വസനീയമായ പ്രാദേശിക വിദഗ്ധനെയോ നിങ്ങൾ തിരഞ്ഞെടുക്കട്ടെ—തിരഞ്ഞെടുപ്പ് നിങ്ങളുടെ കൈകളിലാണ്.',about_quote:'കുറഞ്ഞ തിരച്ചിൽ. കൂടുതൽ കണ്ടെത്തൽ. കൂടുതൽ ഓർമ്മകൾ.'},
  pa:{about_eyebrow:'GHOOMO ਕਿਉਂ',about_h:'ਭਾਰਤ ਇੰਨਾ ਸੁੰਦਰ ਹੈ ਕਿ ਇਸਨੂੰ ਦਰਜਨਾਂ ਬ੍ਰਾਊਜ਼ਰ ਟੈਬਾਂ ਰਾਹੀਂ ਦੇਖਣਾ ਠੀਕ ਨਹੀਂ।',about_p1:'Ghoomo ਇਸ ਸਧਾਰਣ ਵਿਚਾਰ ’ਤੇ ਬਣਾਇਆ ਗਿਆ ਹੈ ਕਿ ਯਾਤਰਾ ਰੋਮਾਂਚਕ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ, ਉਲਝਣ ਭਰੀ ਨਹੀਂ।',about_p2:'ਅਸੀਂ ਤੁਹਾਨੂੰ ਮੰਜ਼ਿਲ ਖੋਜਣ, ਉੱਥੇ ਜਾਣ ਦੇ ਵੱਖ-ਵੱਖ ਤਰੀਕੇ ਸਮਝਣ ਅਤੇ ਫੈਸਲਾ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਚੋਣਾਂ ਦੀ ਨਾਲ-ਨਾਲ ਤੁਲਨਾ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਾਂ। ਚਾਹੇ ਤੁਸੀਂ ਸਥਾਪਿਤ ਟੂਰ ਕੰਪਨੀ, ਭਾਰਤੀ ਆਨਲਾਈਨ ਟ੍ਰੈਵਲ ਪਲੇਟਫਾਰਮ ਜਾਂ ਭਰੋਸੇਯੋਗ ਸਥਾਨਕ ਮਾਹਿਰ ਨੂੰ ਚੁਣੋ—ਚੋਣ ਤੁਹਾਡੇ ਹੱਥ ਵਿੱਚ ਹੈ।',about_quote:'ਘੱਟ ਖੋਜ। ਵੱਧ ਖੋਜ। ਹੋਰ ਯਾਦਾਂ।'},
  or:{about_eyebrow:'GHOOMO କାହିଁକି',about_h:'ଭାରତ ଏତେ ସୁନ୍ଦର ଯେ ଏହାକୁ ଦଶଦଶଟି ବ୍ରାଉଜର୍ ଟ୍ୟାବ୍‌ରେ ଦେଖିବା ଉଚିତ୍ ନୁହେଁ।',about_p1:'ଭ୍ରମଣ ରୋମାଞ୍ଚକର ହେବା ଉଚିତ୍, ଦ୍ୱନ୍ଦ୍ୱପୂର୍ଣ୍ଣ ନୁହେଁ—ଏହି ସରଳ ଭାବନା ଉପରେ Ghoomo ଗଠିତ।',about_p2:'ଆମେ ଆପଣଙ୍କୁ ଗନ୍ତବ୍ୟ ଖୋଜିବା, ସେଠାକୁ ଯିବାର ବିଭିନ୍ନ ଉପାୟ ବୁଝିବା ଏବଂ ନିଷ୍ପତ୍ତି ପୂର୍ବରୁ ବିକଳ୍ପଗୁଡ଼ିକୁ ପାଖାପାଖି ତୁଳନା କରିବାରେ ସାହାଯ୍ୟ କରୁ।',about_quote:'କମ୍ ଖୋଜାଖୋଜି। ଅଧିକ ଆବିଷ୍କାର। ଅଧିକ ସ୍ମୃତି।'},
  as:{about_eyebrow:'GHOOMO কিয়',about_h:'ভাৰত ইমান ধুনীয়া যে ইয়াক ডজন ডজন ব্ৰাউজাৰ টেবৰ মাজেৰে চোৱা উচিত নহয়।',about_p1:'ভ্ৰমণ আনন্দদায়ক হ’ব লাগে, বিভ্ৰান্তিকৰ নহয়—এই সৰল অনুভূতিৰ ওপৰত Ghoomo নিৰ্মাণ কৰা হৈছে।',about_p2:'আমি আপোনাক গন্তব্য বিচাৰি উলিয়াবলৈ, তালৈ যোৱাৰ বিভিন্ন উপায় বুজিবলৈ আৰু সিদ্ধান্ত লোৱাৰ আগতে বিকল্পসমূহ তুলনা কৰিবলৈ সহায় কৰোঁ। প্ৰতিষ্ঠিত ট্যুৰ কোম্পানী, ভাৰতীয় অনলাইন ট্ৰেভেল প্লেটফৰ্ম বা বিশ্বাসযোগ্য স্থানীয় বিশেষজ্ঞ—পছন্দ আপোনাৰ হাতত থাকে।',about_quote:'কম বিচৰা। অধিক আৱিষ্কাৰ। অধিক স্মৃতি।'},
  ur:{about_eyebrow:'GHOOMO کیوں',about_h:'بھارت اتنا خوبصورت ہے کہ اسے درجنوں براؤزر ٹیبز کے ذریعے نہیں دیکھنا چاہیے۔',about_p1:'Ghoomo ایک سادہ احساس پر قائم ہے: سفر پُرجوش ہونا چاہیے، الجھن بھرا نہیں۔',about_p2:'ہم آپ کو منزل دریافت کرنے، وہاں جانے کے مختلف طریقوں کو سمجھنے اور فیصلہ کرنے سے پہلے اپنی ترجیحات کا ساتھ ساتھ موازنہ کرنے میں مدد دیتے ہیں۔ چاہے آپ کسی معروف ٹور کمپنی، بھارتی آن لائن ٹریول پلیٹ فارم یا قابلِ اعتماد مقامی ماہر کو ترجیح دیں، انتخاب آپ کے ہاتھ میں رہتا ہے۔',about_quote:'کم تلاش۔ زیادہ دریافت۔ زیادہ یادیں۔'},
  sd:{about_eyebrow:'GHOOMO ڇو',about_h:'ڀارت ايترو خوبصورت آهي، جو ان کي درجنين برائوزر ٽيبن وسيلي ڏسڻ مناسب ناهي.',about_p1:'Ghoomo هڪ سادي احساس تي ٻڌل آهي: سفر دلچسپ هجڻ گهرجي، مونجهاري وارو نه.',about_p2:'اسان توهان کي منزل ڳولڻ، اتي سفر ڪرڻ جا مختلف طريقا سمجهڻ ۽ فيصلو ڪرڻ کان اڳ پنهنجن اختيارن جو گڏيل مقابلو ڪرڻ ۾ مدد ڪريون ٿا. چاهي توهان ڪنهن قائم ٿيل ٽوئر ڪمپني، ڀارتي آن لائن ٽريول پليٽفارم يا ڀروسي لائق مقامي ماهر کي پسند ڪريو، چونڊ توهان جي هٿن ۾ رهي ٿي.',about_quote:'گهٽ ڳولا. وڌيڪ دريافت. وڌيڪ يادون.'}
};
function t(key) { return (ABOUT_I18N[currentLang] && ABOUT_I18N[currentLang][key]) || (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key; }

const EXTRA_ROW_LABELS = {
  en: { return_fare:'Return Airfare / Return Trainfare (SL/3AC/2AC)', gst:'GST', insurance:'Travel Insurance' },
  hi: { return_fare:'रिटर्न हवाई किराया / रिटर्न ट्रेन किराया (SL/3AC/2AC)', gst:'जीएसटी', insurance:'यात्रा बीमा' },
  bn: { return_fare:'রিটার্ন বিমানভাড়া / রিটার্ন ট্রেনভাড়া (SL/3AC/2AC)', gst:'জিএসটি', insurance:'ভ্রমণ বীমা' },
  ta: { return_fare:'திரும்பும் விமானக் கட்டணம் / ரயில் கட்டணம் (SL/3AC/2AC)', gst:'ஜிஎஸ்டி', insurance:'பயணக் காப்பீடு' },
  te: { return_fare:'తిరుగు విమాన ఛార్జీ / రైలు ఛార్జీ (SL/3AC/2AC)', gst:'జీఎస్టీ', insurance:'ప్రయాణ బీమా' },
  mr: { return_fare:'परतीचे विमानभाडे / परतीचे रेल्वे भाडे (SL/3AC/2AC)', gst:'जीएसटी', insurance:'प्रवास विमा' },
  gu: { return_fare:'પરત વિમાન ભાડું / પરત ટ્રેન ભાડું (SL/3AC/2AC)', gst:'જીએસટી', insurance:'મુસાફરી વીમો' },
  kn: { return_fare:'ಹಿಂತಿರುಗುವ ವಿಮಾನ ದರ / ರೈಲು ದರ (SL/3AC/2AC)', gst:'ಜಿಎಸ್‌ಟಿ', insurance:'ಪ್ರಯಾಣ ವಿಮೆ' },
  ml: { return_fare:'മടക്ക വിമാന നിരക്ക് / ട്രെയിൻ നിരക്ക് (SL/3AC/2AC)', gst:'ജിഎസ്ടി', insurance:'യാത്രാ ഇൻഷുറൻസ്' },
  pa: { return_fare:'ਵਾਪਸੀ ਹਵਾਈ ਕਿਰਾਇਆ / ਰੇਲ ਕਿਰਾਇਆ (SL/3AC/2AC)', gst:'ਜੀਐਸਟੀ', insurance:'ਯਾਤਰਾ ਬੀਮਾ' },
  or: { return_fare:'ଫେରନ୍ତା ବିମାନ ଭଡ଼ା / ଟ୍ରେନ୍ ଭଡ଼ା (SL/3AC/2AC)', gst:'ଜିଏସଟି', insurance:'ଯାତ୍ରା ବୀମା' },
  as: { return_fare:'উভতনি বিমান ভাড়া / ৰে’ল ভাড়া (SL/3AC/2AC)', gst:'জিএছটি', insurance:'ভ্ৰমণ বীমা' },
  ur: { return_fare:'واپسی ہوائی کرایہ / ٹرین کرایہ (SL/3AC/2AC)', gst:'جی ایس ٹی', insurance:'سفری بیمہ' },
  sd: { return_fare:'واپسي هوائي ڪرايو / ٽرين ڪرايو (SL/3AC/2AC)', gst:'جي ايس ٽي', insurance:'سفري انشورنس' }
};
function extraRowLabel(key) { return (EXTRA_ROW_LABELS[currentLang] && EXTRA_ROW_LABELS[currentLang][key]) || EXTRA_ROW_LABELS.en[key]; }

/* ============================================================
   STATE
   ============================================================ */
let currentRoute = { page: 'home', slug: null };
let selectedDepartureCity = 'Bengaluru';
let filters = { days: 'any', cost: 'any', rating: 'any', state: 'any', categories: new Set() };
let selectedCategory = 'verified';
let selectedStyleIdx = 0;
let compareSelection = new Set();
let compareRating = 'any';
let compareSelectionKey = '';

/* ============================================================
   ROUTER
   ============================================================ */
function navigate(page, slug) {
  currentRoute = { page, slug: slug || null };
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
  updateNavActive();
}

function updateNavActive() {
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
}

function scrollToFilters() {
  if (currentRoute.page !== 'home') { navigate('home'); setTimeout(scrollToFilters, 120); return; }
  const el = document.getElementById('filterPanel');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============================================================
   TOAST
   ============================================================ */
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

/* ============================================================
   LANGUAGE SWITCHER
   ============================================================ */
function buildLangMenu() {
  const menu = document.getElementById('langMenu');
  menu.innerHTML = LANGUAGES.map(l => `
    <div class="lang-option ${l.code === currentLang ? 'active' : ''}" onclick="selectLang('${l.code}')">
      <span>${l.label}</span>
      ${l.ready ? '' : '<span class="soon">soon</span>'}
    </div>
  `).join('');
}
function toggleLangMenu() {
  document.getElementById('langMenu').classList.toggle('open');
}
function selectLang(code) {
  const lang = LANGUAGES.find(l => l.code === code);
  document.getElementById('langMenu').classList.remove('open');
  if (!lang) return;
  currentLang = code;
  document.getElementById('langBtnLabel').textContent = lang.label.split(' ')[0];
  applyI18n();
  buildLangMenu();
  render();
  // Keep the single navigation selector in charge of both page translation and speech.
  const speechCodes = {en:'en-IN',hi:'hi-IN',mr:'mr-IN',gu:'gu-IN',bn:'bn-IN',ta:'ta-IN',te:'te-IN',kn:'kn-IN',ml:'ml-IN',sd:'sd-IN',ur:'ur-IN',as:'as-IN',pa:'pa-IN',or:'or-IN'};
  window.dispatchEvent(new CustomEvent('ghoomo-language-change',{detail:{pageCode:code,speechCode:speechCodes[code]||'en-IN',label:lang.label}}));
  if (window.applyGhoomoTranslation) window.applyGhoomoTranslation(code);
  const current = document.getElementById('ghoomo-language-current');
  if (current) current.textContent = 'Language: ' + lang.label.split(' ')[0];
}
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  const note = document.getElementById('langFooterNote');
  if (note) note.textContent = '';
}
document.addEventListener('click', (e) => {
  if (!e.target.closest('.lang-select-wrap')) {
    const m = document.getElementById('langMenu');
    if (m) m.classList.remove('open');
  }
});

/* ============================================================
   FILTER LOGIC
   ============================================================ */
function matchesFilters(dest) {
  if (filters.state !== 'any' && (dest.state || 'Other').split(' · ').indexOf(filters.state) === -1) return false;
  if (filters.days !== 'any') {
    const n = dest.nights;
    if (filters.days === 'short' && n > 4) return false;
    if (filters.days === 'medium' && (n < 5 || n > 7)) return false;
    if (filters.days === 'long' && n < 8) return false;
  }
  if (filters.cost !== 'any') {
    const p = dest.priceFrom;
    if (filters.cost === 'low' && p >= 20000) return false;
    if (filters.cost === 'mid' && (p < 20000 || p >= 40000)) return false;
    if (filters.cost === 'high' && p < 40000) return false;
  }
  if (filters.rating !== 'any') {
    const min = filters.rating === '45' ? 4.5 : 4.0;
    if (dest.rating < min) return false;
  }
  return true;
}

function toggleCategoryFilter(key, el) {
  if (filters.categories.has(key)) { filters.categories.delete(key); el.classList.remove('on'); }
  else { filters.categories.add(key); el.classList.add('on'); }
}

function applyFilters() {
  filters.state = document.getElementById('filterState')?.value || 'any';
  filters.days = document.getElementById('filterDays').value;
  filters.cost = document.getElementById('filterCost').value;
  filters.rating = document.getElementById('filterRating').value;
  renderDestGrid();
}

/* ============================================================
   RENDER: HOME PAGE
   ============================================================ */
function runHomeSearch(event) {
  if (event) event.preventDefault();
  const value = (document.getElementById('homeDestination')?.value || '').trim().toLowerCase();
  const match = DESTINATIONS.find(d => d.name.toLowerCase() === value || d.slug.toLowerCase() === value.replace(/\s+/g,'-'));
  if (match) { navigate('destination', match.slug); }
  else if (value) {
    const partial = DESTINATIONS.find(d => d.name.toLowerCase().includes(value) || value.includes(d.name.toLowerCase()));
    if (partial) navigate('destination', partial.slug);
    else alert('Please choose a destination from the list.');
  } else {
    document.getElementById('homeDestination')?.focus();
  }
  return false;
}

function renderHome() {
  return `
    <section class="visual-home-hero" aria-label="GHOOMO home">
      <form class="visual-search" id="homeSearchForm" onsubmit="return runHomeSearch(event)">
        <div class="visual-search-field">
          <span class="vs-icon">📍</span>
          <div style="min-width:0;flex:1;">
            <label for="homeDestination">${t('hero_search_ph')}</label>
            <input id="homeDestination" list="homeDestinationList" placeholder="e.g. Goa, Kerala, Rajasthan..." autocomplete="off">
            <datalist id="homeDestinationList">
              ${DESTINATIONS.map(d => `<option value="${d.name.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}"></option>`).join('')}
            </datalist>
          </div>
        </div>
        <div class="visual-search-field">
          <span class="vs-icon">📅</span>
          <div style="min-width:0;flex:1;">
            <label for="homeDate">Any dates</label>
            <input id="homeDate" type="date" aria-label="Any dates">
          </div>
        </div>
        <div class="visual-search-field">
          <span class="vs-icon">👥</span>
          <div style="min-width:0;flex:1;">
            <label for="homeTravellers">Travellers</label>
            <select id="homeTravellers" aria-label="Travellers">
              <option value="1">1 Traveller</option>
              <option value="2" selected>2 Adults</option>
              <option value="3">3 Travellers</option>
              <option value="4">4 Travellers</option>
              <option value="5">5 Travellers</option>
              <option value="6">6 Travellers</option>
              <option value="7">7 Travellers</option>
              <option value="8">8 Travellers</option>
              <option value="9">9 Travellers</option>
              <option value="10">10 Travellers</option>
            </select>
          </div>
        </div>
        <button class="vs-explore" type="submit">🔍 ${t('hero_explore')}</button>
      </form>
    </section>

    <div class="wrap">
      <div class="filter-panel" id="filterPanel">
        <div class="filter-grid">
          <div class="filter-field">
            <label>State / Union Territory</label>
            <select id="filterState">${['any', ...Array.from(new Set(DESTINATIONS.flatMap(d => (d.state || 'Other').split(' · ').map(st => canonicalIndiaState(st.trim()) || st.trim())))).sort((a,b)=>a.localeCompare(b))].map(st => `<option value="${st}">${st==='any'?'All states & UTs':st}</option>`).join('')}</select>
          </div>
          <div class="filter-field">
            <label>${t('filter_days')}</label>
            <select id="filterDays">
              <option value="any">${t('filter_any')}</option>
              <option value="short">Up to 4 nights</option>
              <option value="medium">5–7 nights</option>
              <option value="long">8+ nights</option>
            </select>
          </div>
          <div class="filter-field">
            <label>${t('filter_cost')}</label>
            <select id="filterCost">
              <option value="any">${t('filter_any')}</option>
              <option value="low">Under ₹20,000</option>
              <option value="mid">₹20,000 – ₹40,000</option>
              <option value="high">Above ₹40,000</option>
            </select>
          </div>
          <div class="filter-field">
            <label>${t('filter_rating')}</label>
            <select id="filterRating">
              <option value="any">${t('filter_any')}</option>
              <option value="40">4★ &amp; above</option>
              <option value="45">4.5★ &amp; above</option>
            </select>
          </div>
          <div class="filter-field">
            <label>${t('filter_category')}</label>
            <div class="chip-row">
              <span class="chip" onclick="toggleCategoryFilter('verified', this)">Verified Tour Operators</span>
              <span class="chip" onclick="toggleCategoryFilter('local', this)">Local Tour Operators</span>
              <span class="chip" onclick="toggleCategoryFilter('ota', this)">OTA Platforms</span>
            </div>
          </div>
        </div>
        <div class="filter-footer">
          <span class="filter-result-count" id="filterCount"></span>
          <button class="btn btn-primary btn-sm" onclick="applyFilters()">${t('filter_apply')}</button>
        </div>
      </div>
    </div>

    <section>
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow" data-i18n="section_popular_eyebrow">${t('section_popular_eyebrow')}</span>
          <h2 data-i18n="section_popular_h">${t('section_popular_h')}</h2>
          <p data-i18n="section_popular_sub">${t('section_popular_sub')}</p>
        </div>
        <div class="dest-grid" id="destGrid"></div>
      </div>
    </section>

    <section class="dark">
      <div class="wrap">
        <div class="section-head center">
          <span class="eyebrow on-dark">${t('why_eyebrow')}</span>
          <h2>${t('why_h')}</h2>
          <p>${t('why_sub')}</p>
        </div>
        <div class="step-grid">
          <div class="step-card"><div class="step-num">01</div><h3>${t('step1_t')}</h3><p>${t('step1_d')}</p></div>
          <div class="step-card"><div class="step-num">02</div><h3>${t('step2_t')}</h3><p>${t('step2_d')}</p></div>
          <div class="step-card"><div class="step-num">03</div><h3>${t('step3_t')}</h3><p>${t('step3_d')}</p></div>
        </div>
      </div>
    </section>
  `;
}
function renderDestGrid() {
  const grid = document.getElementById('destGrid');
  if (!grid) return;
  const filtered = DESTINATIONS.filter(matchesFilters);
  const countEl = document.getElementById('filterCount');
  if (countEl) countEl.textContent = `${filtered.length} ${t('filter_results')}`;

  grid.innerHTML = filtered.map(d => `
    <div class="dest-card" onclick="navigate('destination', '${d.slug}')">
      <div class="dest-img">
        <img data-destination-image="${d.slug}" src="${directDestinationImageUrl(d.slug)||img(d.imgKey, d.lock, 700, 500)}" alt="${d.name}" loading="lazy">
        <div class="dest-tags">${d.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
        <div class="dest-rating">★ ${d.rating}</div>
        <div class="dest-name-overlay"><h3>${d.name}</h3></div>
      </div>
      <div class="dest-body">
        <div class="dest-region">${d.region}</div>
        <div class="dest-desc">${d.desc}</div>
        <div class="dest-meta-row">
          <span>${d.days}</span>
          <span class="dest-price">₹${d.priceFrom.toLocaleString('en-IN')}<small> onwards</small></span>
        </div>
        <button class="btn btn-outline btn-block btn-sm">${t('compare_btn')} ${d.name} →</button>
      </div>
    </div>
  `).join('');
  resolveDestinationImages(grid);
}

/* ============================================================
   RENDER: DESTINATION PAGE
   ============================================================ */
function ensureCompareSelection(dest) {
  const key = `${dest.slug}:${selectedCategory}`;
  const candidates = buildComparisonRows(dest, selectedCategory);
  if (compareSelectionKey !== key) {
    compareSelectionKey = key;
    compareSelection = new Set(candidates.slice(0, 5).map(r => r.name));
    compareRating = 'any';
  }
}

function renderCompareControls(dest) {
  const el = document.getElementById('compareSidebar');
  if (!el) return;
  ensureCompareSelection(dest);
  const candidates = buildComparisonRows(dest, selectedCategory);
  el.innerHTML = `
    <h3>Compare your choices</h3>
    <p>Select a departure city to adjust indicative package prices.</p>
    <label for="departureCitySelect">Departure city</label><select id="departureCitySelect" onchange="setDepartureCity(this.value)">${departureOptionsHtml()}</select>
    <small style="display:block;color:var(--text-dim);margin:6px 0 12px;">Pilot estimate using broad regional distance bands; not live fares.</small>
    <p>Select up to <strong>5 operators</strong>. Use the rating filter to narrow the list.</p>
    <label for="compareRating">Minimum rating</label>
    <select id="compareRating" onchange="setCompareRating(this.value)">
      <option value="any" ${compareRating==='any'?'selected':''}>Any rating</option>
      <option value="4.0" ${compareRating==='4.0'?'selected':''}>4.0★ and above</option>
      <option value="4.5" ${compareRating==='4.5'?'selected':''}>4.5★ and above</option>
      <option value="4.7" ${compareRating==='4.7'?'selected':''}>4.7★ and above</option>
    </select>
    <label for="operatorSelect">Choose operator names (up to 5)</label>
    <select id="operatorSelect" multiple size="6" onchange="setCompareProvidersFromDropdown(this)">
      ${candidates.map(r => `<option value="${r.name.replace(/"/g, '&quot;')}" ${compareSelection.has(r.name)?'selected':''}>${r.name} · ★ ${r.rating}</option>`).join('')}
    </select>
    <small style="display:block;color:var(--text-dim);margin:8px 0 12px;">Hold Ctrl (Windows) or Command (Mac) to select multiple names. Maximum 5.</small>
    <label>Quick selection</label>
    <div class="provider-options">${candidates.map(r => {
      const disabled = !compareSelection.has(r.name) && compareSelection.size >= 5;
      const checked = compareSelection.has(r.name) ? 'checked' : '';
      const ratingOk = compareRating==='any' || Number(r.rating) >= Number(compareRating);
      return `<label class="provider-pick" title="Rating ${r.rating}"><input type="checkbox" ${checked} ${disabled?'disabled':''} onchange="toggleCompareProvider('${r.name.replace(/'/g, "\\'")}', this.checked)"><span>${r.name}<br><span style="color:var(--text-dim);">★ ${r.rating}</span>${ratingOk?'':' · below filter'}</span></label>`;
    }).join('')}</div>
    <div class="selection-count">${compareSelection.size}/5 selected</div>
  `;
}

function setCompareProvidersFromDropdown(select) {
  const selected = Array.from(select.selectedOptions).map(o => o.value);
  if (selected.length > 5) {
    showToast('Please select a maximum of 5 operators.');
    renderCompareControls(DESTINATIONS.find(d => d.slug === currentRoute.slug));
    return;
  }
  compareSelection = new Set(selected);
  const dest = DESTINATIONS.find(d => d.slug === currentRoute.slug);
  if (dest) renderCompareTable(dest);
  const count = document.querySelector('.selection-count');
  if (count) count.textContent = `${compareSelection.size}/5 selected`;
}

function setCompareRating(value) {
  compareRating = value;
  const dest = DESTINATIONS.find(d => d.slug === currentRoute.slug);
  if (dest) { renderCompareControls(dest); renderCompareTable(dest); }
}

function toggleCompareProvider(name, checked) {
  if (checked && compareSelection.size >= 5) {
    showToast('You can compare a maximum of 5 operators.');
    renderCompareControls(DESTINATIONS.find(d => d.slug === currentRoute.slug));
    return;
  }
  if (checked) compareSelection.add(name); else compareSelection.delete(name);
  const dest = DESTINATIONS.find(d => d.slug === currentRoute.slug);
  if (dest) { renderCompareControls(dest); renderCompareTable(dest); }
}

function renderDestination(slug) {
  const dest = DESTINATIONS.find(d => d.slug === slug);
  if (!dest) return `<div class="wrap" style="padding:80px 0;">Destination not found. <a onclick="navigate('home')" style="color:var(--terracotta);cursor:pointer;">${t('back_to_destinations')}</a></div>`;
  selectedStyleIdx = 0;

  const heroImg = directDestinationImageUrl(dest.slug) || img(dest.imgKey, dest.lock, 1800, 900);

  return `
    <div class="dest-hero" data-destination-image="${dest.slug}" style="background-image:url('${heroImg}')">
      <div class="dest-hero-content">
        <div class="dest-hero-tags">${dest.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
        <h1>${dest.name}</h1>
        <div class="sub">${dest.region} · ${dest.days} · ★ ${dest.rating}</div>
      </div>
    </div>

    <div class="wrap" style="padding-top:32px;">
      <a class="back-link" onclick="navigate('home')">← ${t('back_to_destinations')}</a>

      <div class="section-head">
        <h2>${t('trip_style_h')}</h2>
        <p>${t('trip_style_sub')}</p>
      </div>
      <div class="style-tabs" id="styleTabs"></div>

      <div class="section-head">
        <h3 style="font-size:16px; color:var(--text-dim); font-weight:700; text-transform:uppercase; letter-spacing:0.04em; font-family:'JetBrains Mono',monospace;">${t('itinerary_h')}</h3>
      </div>
      <div class="itin-scroll" style="margin-bottom:50px;">
        ${dest.itinerary.map((it, i) => `
          <div class="itin-card">
            <div class="d-num">DAY ${String(i+1).padStart(2,'0')}</div>
            <div class="d-title">${it.t}</div>
            <div class="d-desc">${it.d}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <section class="dark" style="padding:44px 0;">
      <div class="wrap" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:20px;">
        <div>
          <span class="eyebrow on-dark">${t('category_h')}</span>
          <p style="max-width:520px; margin-top:4px;">${t('category_sub')}</p>
        </div>
      </div>
    </section>

    <section class="alt" style="padding-top:40px;">
      <div class="wrap">
        <div class="cat-selector" id="catSelector"></div>
        <h2 style="margin-bottom:6px;">${t('compare_h')} ${dest.name} ${CATEGORY_META[selectedCategory].label}</h2>
        <p style="margin-bottom:22px;">${t('compare_sub')}</p>
        <div class="compare-layout">
          <aside class="compare-sidebar" id="compareSidebar"></aside>
          <div class="compare-main">
            <div class="compare-table-wrap">
              <table class="compare" id="compareTable"></table>
            </div>
            <section id="carbonComparison" class="carbon-comparison" aria-live="polite"></section>
          </div>
        </div>
        <div class="disclaimer-note" style="margin-top:20px;">ⓘ ${t('disclaimer')}</div>
      </div>
    </section>
  `;
}

function renderStyleTabs(dest) {
  const el = document.getElementById('styleTabs');
  if (!el) return;
  el.innerHTML = dest.tripStyles.map((s, i) => `
    <div class="style-tab ${i === selectedStyleIdx ? 'on' : ''}" onclick="selectStyle(${i})">
      <div class="t">${s.t}</div>
      <div class="d">${s.d}</div>
    </div>
  `).join('');
}
function selectStyle(i) {
  selectedStyleIdx = i;
  const dest = DESTINATIONS.find(d => d.slug === currentRoute.slug);
  renderStyleTabs(dest);
}

function renderCategorySelector(dest) {
  const el = document.getElementById('catSelector');
  if (!el) return;
  el.innerHTML = Object.keys(CATEGORY_META).map(key => {
    const m = CATEGORY_META[key];
    return `
      <div class="cat-card ${key === selectedCategory ? 'on' : ''}" onclick="selectCategory('${key}')">
        <div class="cat-icon">${m.icon}</div>
        <div>
          <div class="cat-title">${m.label}</div>
          <div class="cat-desc">${m.desc}</div>
        </div>
      </div>
    `;
  }).join('');
}
function selectCategory(key) {
  selectedCategory = key;
  compareSelectionKey = '';
  const dest = DESTINATIONS.find(d => d.slug === currentRoute.slug);
  renderCategorySelector(dest);
  renderCompareControls(dest);
  renderCompareTable(dest);
  const heading = document.querySelector('.alt h2');
  if (heading) heading.textContent = `${t('compare_h')} ${dest.name} ${CATEGORY_META[selectedCategory].label}`;
}

const CARBON_DEMO = {
 'Madhya Pradesh':{days:'4N/5D',km:700,railPrice:10100,flightPrice:13100,railKg:29,flightKg:140,railProvider:'IRCTC Tourism',flightProvider:'Thomas Cook India'},
 'Rajasthan':{days:'5N/6D',km:900,railPrice:11900,flightPrice:15400,railKg:37,flightKg:180,railProvider:'IRCTC Tourism',flightProvider:'Thomas Cook India'},
 'Kerala':{days:'5N/6D',km:1000,railPrice:14500,flightPrice:18200,railKg:41,flightKg:200,railProvider:'IRCTC Tourism',flightProvider:'Thomas Cook India'},
 'Goa':{days:'4N/5D',km:600,railPrice:9800,flightPrice:13700,railKg:25,flightKg:120,railProvider:'IRCTC Tourism',flightProvider:'Thomas Cook India'},
 'Golden Triangle':{days:'4N/5D',km:500,railPrice:10800,flightPrice:15500,railKg:21,flightKg:100,railProvider:'IRCTC Tourism',flightProvider:'SOTC Travel'},
 'UP Spiritual Circuit':{days:'4N/5D',km:750,railPrice:9400,flightPrice:12800,railKg:31,flightKg:150,railProvider:'IRCTC Tourism',flightProvider:'Thomas Cook India'},
 'Uttarakhand':{days:'5N/6D',km:500,railPrice:11200,flightPrice:14900,railKg:21,flightKg:100,railProvider:'IRCTC Tourism',flightProvider:'Thomas Cook India'},
 'Himachal Pradesh':{days:'5N/6D',km:700,railPrice:12900,flightPrice:16900,railKg:29,flightKg:140,railProvider:'IRCTC Tourism',flightProvider:'Thomas Cook India'},
 'Kashmir':{days:'5N/6D',km:1500,railPrice:15800,flightPrice:21900,railKg:62,flightKg:300,railProvider:'IRCTC Tourism',flightProvider:'Thomas Cook India'},
 'Andaman':{days:'5N/6D',km:0,railPrice:null,flightPrice:22400,railKg:null,flightKg:260,railProvider:'N/A',flightProvider:'Thomas Cook India'}
};
function renderCarbonComparison(dest){
 const host=document.getElementById('carbonComparison'); if(!host)return;
 const raw=CARBON_DEMO[dest.name], factor=departureFactor(dest), basePrice=dest.priceFrom||12999;
 const d=raw?{...raw,railPrice:raw.railPrice==null?null:Math.round(raw.railPrice*factor/100)*100,flightPrice:Math.round(raw.flightPrice*factor/100)*100,railKg:raw.railKg==null?null:Math.round(raw.railKg*factor),flightKg:Math.round(raw.flightKg*factor),km:raw.km}:{days:dest.days,km:Math.round(350+basePrice/30),railPrice:Math.round(basePrice*.72*factor/100)*100,flightPrice:Math.round(basePrice*1.12*factor/100)*100,railKg:Math.round((350+basePrice/30)*.035*factor),flightKg:Math.round((350+basePrice/30)*.15*factor),railProvider:'Indicative rail scenario',flightProvider:'Indicative flight scenario'};
 const money=v=>v==null?'N/A':'₹'+v.toLocaleString('en-IN');
 const saving=d.railKg==null||d.flightKg==null?null:d.flightKg-d.railKg;
 const pct=saving==null?null:Math.round(saving/d.flightKg*100);
 const railAvailable=d.railKg!=null&&d.railPrice!=null;
 const railPreferred=['Madhya Pradesh','Rajasthan','Kerala','Goa','Golden Triangle','UP Spiritual Circuit','Uttarakhand'].includes(dest.name);
 const bar=(label,value,max,cls)=>`<div class="gh-bar-row"><div><span>${label}</span><strong>${value} kg CO₂</strong></div><div class="gh-bar-track"><span class="${cls}" style="width:${Math.max(3,Math.round(value/max*100))}%"></span></div></div>`;
 const max=Math.max(d.flightKg,d.railKg||0,1);
 const voicePreference=['Madhya Pradesh','Rajasthan','Kerala','Goa','Golden Triangle'].includes(dest.name)?'Preferred narration: male voice where available':'Preferred narration: female voice where available';
 host.innerHTML=`
 <div class="carbon-head"><div><span class="eyebrow">TRAVEL IMPACT · PILOT ESTIMATES</span><h3>Rail vs flight: package cost & carbon footprint</h3><p>${dest.name} · ${d.days} · estimated journey distance ${d.km?d.km+' km':'not available for rail'}</p><label class="gh-field-label" for="carbonDepartureCity">Departure city</label><select id="carbonDepartureCity" class="gh-select" onchange="setDepartureCity(this.value)">${departureOptionsHtml()}</select></div><span class="carbon-pill">Indicative estimates · not live</span></div>
 <div class="gh-package-grid">
  <article class="carbon-option flight"><div class="gh-card-kicker">✈ FLIGHT PACKAGE</div><h4>${dest.name}</h4><div class="carbon-price">${money(d.flightPrice)}</div><p>${d.flightProvider} · demo example</p><dl><dt>Journey distance (demo)</dt><dd>${d.km?d.km+' km':'Not specified'}</dd><dt>Duration</dt><dd>${d.days}</dd><dt>Transport CO₂ / traveller, one-way</dt><dd>${d.flightKg} kg</dd></dl><span class="gh-evidence estimated">Estimated · illustrative</span></article>
  <article class="carbon-option rail"><div class="gh-card-kicker">🚆 RAIL PACKAGE ${railPreferred?'<span class="gh-rail-tag">RAIL PREFERRED</span>':''}</div><h4>${dest.name}</h4><div class="carbon-price">${money(d.railPrice)}</div><p>${railAvailable?d.railProvider+' · demo example':'Rail service / package not available'}</p><dl><dt>Journey distance (demo)</dt><dd>${railAvailable?d.km+' km':'N/A'}</dd><dt>Duration</dt><dd>${railAvailable?d.days:'N/A'}</dd><dt>Transport CO₂ / traveller, one-way</dt><dd>${d.railKg==null?'N/A':d.railKg+' kg'}</dd></dl><span class="gh-evidence ${railAvailable?'estimated':'unavailable'}">${railAvailable?'Estimated · illustrative':'Not available / not confirmed'}</span></article>
  <article class="gh-saving-card"><span class="eyebrow">YOUR POTENTIAL CARBON SAVING</span><div class="gh-saving-number">${saving==null?'N/A':saving+' kg'}</div><strong>${pct==null?'Rail comparison unavailable':pct+'% lower transport CO₂ with rail'}</strong><p>${saving==null?'A rail comparison cannot be calculated for this destination in this demo.':'Illustrative one-way transport emissions saved per traveller versus the flight option.'}</p></article>
 </div>
 <div class="gh-impact-grid"><section class="gh-impact-panel"><h4>Carbon impact</h4><p class="gh-muted">Transport emissions per traveller, one-way</p>${bar('Flight',d.flightKg,max,'gh-flight-bar')}${railAvailable?bar('Rail',d.railKg,max,'gh-rail-bar'):'<p class="gh-muted">Rail emissions: N/A — no rail option is represented for this destination.</p>'}<div class="gh-recommendation"><strong>${railAvailable?'Lower-carbon demo choice: Rail':'Available demo choice: Flight'}</strong><p>${railAvailable?`Rail is shown ${saving} kg CO₂ (${pct}%) lower than flight in this illustrative comparison.`:'No rail recommendation is made because rail price, availability and emissions are not available.'}</p></div></section>
 <section class="gh-impact-panel"><h4>Travel trade-off explorer</h4><p class="gh-muted">Choose what matters most; this changes the guidance, not live inventory.</p><label class="gh-field-label" for="gh-tradeoff">Priority</label><select id="gh-tradeoff" class="gh-select"><option value="balanced">Balanced choice</option><option value="budget">Lowest illustrative price</option><option value="carbon">Lowest transport CO₂</option><option value="comfort">Comfort and convenience</option><option value="time">Door-to-door time</option></select><div id="gh-tradeoff-result" class="gh-recommendation" aria-live="polite">Compare total price, transfer time, access needs and emissions before deciding.</div></section></div>
 <div class="gh-impact-grid gh-tools-grid"><section class="gh-impact-panel"><h4>Group carbon savings simulator</h4><p class="gh-muted">Estimate the group difference using the demo per-traveller, one-way values.</p><label class="gh-field-label" for="gh-travellers">Number of travellers</label><input id="gh-travellers" class="gh-select" type="number" min="1" max="100" value="4"><div id="gh-group-result" class="gh-recommendation" aria-live="polite">${saving==null?'Not available for this destination.':`For 4 travellers, rail could save ${saving*4} kg CO₂ in this illustrative one-way comparison.`}</div></section><section class="gh-impact-panel"><h4>Quick budget planner</h4><p class="gh-muted">Compare illustrative package totals; excludes extra expenses.</p><label class="gh-field-label" for="gh-budget">Total package budget (₹)</label><input id="gh-budget" class="gh-select" type="number" min="0" step="500" value="50000"><label class="gh-field-label" for="gh-budget-travellers">Travellers</label><input id="gh-budget-travellers" class="gh-select" type="number" min="1" max="100" value="2"><div id="gh-budget-result" class="gh-recommendation" aria-live="polite">Enter your budget to check the illustrative package total.</div></section></div>
 <section class="gh-impact-panel gh-preferences"><h4>Sustainable travel preferences</h4><p class="gh-muted">Select priorities to shape your checklist.</p><div class="gh-preference-list"><label><input type="checkbox" name="gh-preference" value="eco"> Eco Friendly</label><label><input type="checkbox" name="gh-preference" value="lowcarbon"> Low Carbon</label><label><input type="checkbox" name="gh-preference" value="rail" ${railPreferred?'checked':''}> Rail Preferred</label><label><input type="checkbox" name="gh-preference" value="sustainable"> Sustainable Tourism</label><label><input type="checkbox" name="gh-preference" value="lesswalking"> Less walking</label><label><input type="checkbox" name="gh-preference" value="fewtransfers"> Fewer transfers</label></div><div id="gh-preference-result" class="gh-recommendation" aria-live="polite">Select preferences to generate a practical travel checklist.</div><p class="gh-muted">${voicePreference}. Actual voice gender and language availability depend on the browser and installed voices.</p></section>
 <div class="gh-trust-row"><span class="gh-evidence demo">Demo data</span><span class="gh-evidence estimated">Emissions estimated</span><span class="gh-evidence unavailable">Live fares / bookings not connected</span></div>
 <p class="carbon-footnote">All package prices, distances and transport-emissions values shown here are illustrative prototype estimates adjusted by selected departure city and broad regional distance bands, not live operator quotes or independently verified footprints. CO₂ values cover transport only, per traveller, one-way. ${dest.name==='Andaman'?'Andaman has no train service; rail price, availability and emissions are N/A.':'Transport is standardised to Train + AC transfers for rail and Flight + AC transfers for air. Regional adjustments are pilot assumptions, not route-level fare calculations.'} Always confirm current price, route, accessibility, inclusions and availability with the provider.</p>`;
 const trade=host.querySelector('#gh-tradeoff'), tradeResult=host.querySelector('#gh-tradeoff-result');
 const updateTrade=()=>{if(!tradeResult)return;const v=trade?.value;let msg='Balanced choice: compare full package inclusions, door-to-door duration, cancellation terms, access needs and estimated transport CO₂.';if(v==='budget')msg=`Lowest illustrative price: ${money(railAvailable?Math.min(d.railPrice,d.flightPrice):d.flightPrice)} (${railAvailable?'rail':'flight'} demo option). Prices are not live quotes.`;if(v==='carbon')msg=railAvailable?`Lowest transport CO₂ in this demo: rail at ${d.railKg} kg, around ${pct}% lower than flight. Route-specific emissions may differ.`:'Rail emissions are unavailable here; compare verified route-specific data before choosing.';if(v==='comfort')msg='Comfort check: compare seating, luggage, meal inclusions, accessibility, overnight travel and transfers; this demo does not score comfort.';if(v==='time')msg='Time check: compare door-to-door time including airport / station transfers, check-in, waiting and local connections. No live schedules are connected.';tradeResult.innerHTML='<strong>Decision guidance</strong><p>'+msg+'</p>';};trade?.addEventListener('change',updateTrade);
 const travellers=host.querySelector('#gh-travellers'), groupResult=host.querySelector('#gh-group-result');
 const updateGroup=()=>{const n=Math.max(1,Math.min(100,Number(travellers?.value)||1));if(groupResult)groupResult.innerHTML=saving==null?'<strong>Group estimate unavailable</strong><p>There is no rail comparison for this destination in the demo.</p>':`<strong>${n} traveller${n===1?'':'s'} · ${saving*n} kg CO₂ potential saving</strong><p>Illustrative one-way transport difference only; actual emissions depend on route and service.</p>`;};travellers?.addEventListener('input',updateGroup);
 const budget=host.querySelector('#gh-budget'), budgetTravellers=host.querySelector('#gh-budget-travellers'), budgetResult=host.querySelector('#gh-budget-result');
 const updateBudget=()=>{const total=Math.max(0,Number(budget?.value)||0),n=Math.max(1,Math.min(100,Number(budgetTravellers?.value)||1)), railTotal=railAvailable?d.railPrice*n:null, flightTotal=d.flightPrice*n, available=railAvailable&&total>=railTotal?'rail':total>=flightTotal?'flight':null;let msg=available?`Your budget covers the illustrative ${available} package total of ${money(available==='rail'?railTotal:flightTotal)} for ${n} traveller${n===1?'':'s'}, before extras.`:`Budget shortfall: flight package demo total is ${money(flightTotal)} for ${n} traveller${n===1?'':'s'}${railAvailable?'; rail demo total is '+money(railTotal):''}.`;if(budgetResult)budgetResult.innerHTML=`<strong>${available?'Budget fit (demo only)':'Budget needs review'}</strong><p>${msg} Allow extra for transfers, meals, taxes and activities. Not a live quote.</p>`;};budget?.addEventListener('input',updateBudget);budgetTravellers?.addEventListener('input',updateBudget);
 const pref=host.querySelectorAll('input[name="gh-preference"]'), prefResult=host.querySelector('#gh-preference-result');
 const updatePrefs=()=>{const selected=[...pref].filter(x=>x.checked).map(x=>x.value);const tips=[];if(selected.includes('eco'))tips.push('Prefer locally owned stays, refillable water and low-waste activities.');if(selected.includes('lowcarbon'))tips.push('Compare transport CO₂ and consider rail or shared transfers where practical.');if(selected.includes('rail'))tips.push(railAvailable?'Check train availability and station transfers before booking.':'No rail option is shown for this destination.');if(selected.includes('sustainable'))tips.push('Look for responsible wildlife practices, local guides and respect for local culture.');if(selected.includes('lesswalking'))tips.push('Confirm walking distance, stairs, terrain and rest stops with the operator.');if(selected.includes('fewtransfers'))tips.push('Prefer direct connections and ask for the full transfer plan.');prefResult.innerHTML=selected.length?'<strong>Your travel checklist</strong><ul>'+tips.map(t=>'<li>'+t+'</li>').join('')+'</ul>':'Select preferences to generate a practical travel checklist.';};pref.forEach(x=>x.addEventListener('change',updatePrefs));
 updateTrade();updatePrefs();updateGroup();updateBudget();
}
function renderCompareTable(dest) {
  const el = document.getElementById('compareTable');
  if (!el) return;
  ensureCompareSelection(dest);
  const allRows = buildComparisonRows(dest, selectedCategory);
  const rows = allRows.filter(r => compareSelection.has(r.name) && (compareRating === 'any' || Number(r.rating) >= Number(compareRating)));
  const rowDefs = [
    {key:'price', label: t('row_price')},
    {key:'duration', label: t('row_duration')},
    {key:'hotel', label: t('row_hotel')},
    {key:'meals', label: t('row_meals')},
    {key:'transport', label: t('row_transport')},
    {key:'sightseeing', label: t('row_sightseeing')},
    {key:'cancellation', label: t('row_cancel')},
    {key:'returnFare', label: extraRowLabel('return_fare')},
    {key:'gst', label: extraRowLabel('gst')},
    {key:'insurance', label: extraRowLabel('insurance')},
    {key:'co2', label: t('row_co2')},
    {key:'rating', label: t('row_rating')},
  ];
  el.innerHTML = `
    <thead>
      <tr>
        <th>${t('compare_h')}</th>
        ${rows.map(r => {
          const meta = PROVIDER_META[r.name];
          const logo = meta ? `https://logo.clearbit.com/${meta.domain}` : '';
          const favicon = meta ? `https://www.google.com/s2/favicons?domain=${meta.domain}&sz=128` : '';
          return `
          <th>
            <div class="provider-cell">
              ${meta ? `
                <div class="provider-badge logo-wrap">
                  <img class="provider-logo" src="${logo}" alt="${r.name} logo"
                    onerror="this.onerror=null;this.src='${favicon}';">
                </div>` : `
                <div class="provider-badge" style="background:${r.color}">${r.initials}</div>
              `}
              <div class="provider-name" style="color:#fff;">${r.name}</div>
            </div>
          </th>`;
        }).join('')}
      </tr>
    </thead>
    <tbody>
      ${rowDefs.map(rd => `
        <tr>
          <td class="row-label">${rd.label}</td>
          ${rows.map(r => {
            let value = r[rd.key];
            if (rd.key === 'price') value = '₹' + r.price.toLocaleString('en-IN');
            if (rd.key === 'rating') value = '★ ' + r.rating;
            if (rd.key === 'co2') value = `<span class="co2-save">♻ ${co2Saved(dest.name)}</span>`;
            return `<td class="${rd.key === 'price' ? 'price-cell' : ''}">${value}</td>`;
          }).join('')}
        </tr>
      `).join('')}
      <tr>
        <td class="row-label">${t('row_view')}</td>
        ${rows.map(r => r.website
          ? `<td><a class="view-btn" href="${r.website}" target="_blank" rel="noopener noreferrer">View ↗</a></td>`
          : `<td><span class="partner-pending">Partner link pending</span></td>`
        ).join('')}
      </tr>
    </tbody>
  `;
  renderCarbonComparison(dest);
}

/* ============================================================
   RENDER: ABOUT PAGE
   ============================================================ */
function renderAbout() {
  return `
    <section class="about-hero">
      <div class="wrap" style="max-width:760px;">
        <span class="eyebrow">${t('about_eyebrow')}</span>
        <h1>${t('about_h')}</h1>
      </div>
    </section>
    <section style="padding-top:0;">
      <div class="wrap" style="display:grid; grid-template-columns:1fr 1fr; gap:50px; align-items:center;">
        <img src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=85" style="border-radius:18px; height:420px; width:100%; object-fit:cover; background:linear-gradient(135deg,#ead7b4,#c1602e);" alt="India heritage — Taj Mahal" loading="lazy">
        <div>
          <p style="margin-bottom:16px; font-size:15px;"><strong style="color:var(--navy);">Ghoomo</strong> ${t('about_p1')}</p>
          <p style="margin-bottom:20px; font-size:15px;">${t('about_p2')}</p>
          <div style="background:var(--sage); border-left:3px solid var(--gold); padding:16px 20px; border-radius:8px; font-weight:700; color:var(--navy);">
            "${t('about_quote')}"
          </div>
        </div>
      </div>
    </section>
    <section class="alt">
      <div class="wrap">
        <div class="section-head center">
          <span class="eyebrow">${mt('model_eyebrow')}</span>
          <h2>${mt('model_title')}</h2>
        </div>
        <div class="model-grid">
          <div class="model-card">
            <div class="icon">✓</div>
            <h3>${mt('verified_title')}</h3>
            <p style="margin-top:8px;">${mt('verified_desc')}</p>
          </div>
          <div class="model-card">
            <div class="icon">⌂</div>
            <h3>${mt('local_title')}</h3>
            <p style="margin-top:8px;">${mt('local_desc')}</p>
          </div>
          <div class="model-card">
            <div class="icon">◎</div>
            <h3>${mt('ota_title')}</h3>
            <p style="margin-top:8px;">${mt('ota_desc')}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="dark">
      <div class="wrap">
        <div class="section-head center">
          <span class="eyebrow on-dark">${t('why_eyebrow')}</span>
          <h2>${t('why_h')}</h2>
          <p>${t('why_sub')}</p>
        </div>
        <div class="step-grid">
          <div class="step-card"><div class="step-num">01</div><h3>${t('step1_t')}</h3><p>${t('step1_d')}</p></div>
          <div class="step-card"><div class="step-num">02</div><h3>${t('step2_t')}</h3><p>${t('step2_d')}</p></div>
          <div class="step-card"><div class="step-num">03</div><h3>${t('step3_t')}</h3><p>${t('step3_d')}</p></div>
        </div>
        <div style="text-align:center; margin-top:40px;">
          <button class="btn btn-primary" onclick="navigate('home')">${t('nav_destinations')} →</button>
        </div>
      </div>
    </section>
  `;
}

/* ============================================================
   ACCESSIBLE INDIA STATE EXPLORER
   ============================================================ */
const INDIA_STATES_UTS = [
'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal',
'Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli and Daman and Diu','Delhi','Jammu and Kashmir','Ladakh','Lakshadweep','Puducherry'
];
const INDIA_STATE_ALIASES = {'orissa':'Odisha','uttaranchal':'Uttarakhand','jammu & kashmir':'Jammu and Kashmir','jammu and kashmir':'Jammu and Kashmir','jammu & kashmir union territory':'Jammu and Kashmir','andaman':'Andaman and Nicobar Islands','andaman & nicobar islands':'Andaman and Nicobar Islands','andaman and nicobar island':'Andaman and Nicobar Islands','nct of delhi':'Delhi','dnhdd':'Dadra and Nagar Haveli and Daman and Diu','dadra & nagar haveli and daman & diu':'Dadra and Nagar Haveli and Daman and Diu','dnh':'Dadra and Nagar Haveli and Daman and Diu','daman and diu':'Dadra and Nagar Haveli and Daman and Diu','pondicherry':'Puducherry'};
let selectedIndiaInterest = 'all';
const INDIA_INTERESTS = [
 {id:'pilgrimage',label:'Pilgrimage',terms:['pilgrim','spiritual','temple','yatra','sacred','jyotirlinga','buddhist','golden temple','church','monastery']},
 {id:'heritage',label:'Heritage',terms:['heritage','history','fort','palace','monument','cave','architecture','colonial','ancient']},
 {id:'beaches',label:'Beaches & islands',terms:['beach','coast','coastal','island','lagoon','sea','shore','konkan']},
 {id:'hills',label:'Hill stations',terms:['hill','mountain','himalaya','valley','highland','tea garden','kumaon','nilgiri']},
 {id:'wildlife',label:'Wildlife & nature',terms:['wildlife','nature','forest','tiger','national park','sanctuary','waterfall','lake','river','bird','safari','eco']},
 {id:'culture',label:'Culture & food',terms:['culture','food','local life','tribal','village','festival','craft','cuisine','market','dance']}
];
function destinationMatchesInterest(d, interest) {
 if (!interest || interest === 'all') return true;
 const tags = new Set((d.tags || []).map(tag => String(tag).toLowerCase().trim()));
 // Interest filters use the itinerary's explicit catalogue tags, not substring
 // matches in descriptions. This keeps a passing mention of a beach/temple from
 // pulling an otherwise unrelated itinerary into the result set.
 const tagGroups = {
  pilgrimage: ['pilgrimage','spiritual','pilgrim','temple','religious','sacred'],
  heritage: ['heritage','history','fort','palace','monument','cave','architecture','historic'],
  beaches: ['beach','beaches','island','coast','coastal','lagoon','marine'],
  hills: ['hill station','hills','mountains','mountain','hill','highland'],
  wildlife: ['wildlife','nature','forest','birdlife','safari','eco'],
  culture: ['culture','food','tribal','festival','cuisine','local life','craft']
 };
 return (tagGroups[interest] || []).some(tag => tags.has(tag));
}
function canonicalIndiaState(raw) {
  const q=String(raw||'').toLowerCase().replace(/[^a-z\s&]/g,' ').replace(/\s+/g,' ').trim();
  if(INDIA_STATE_ALIASES[q]) return INDIA_STATE_ALIASES[q];
  return INDIA_STATES_UTS.find(n=>n.toLowerCase()===q) || INDIA_STATES_UTS.find(n=>q.includes(n.toLowerCase())) || null;
}
/* Short, original English introductions; other languages require validated translations. */
const INDIA_STATE_NARRATIONS_EN = {
  "Andaman and Nicobar Islands":"Welcome to the Andaman and Nicobar Islands, known for turquoise waters, coral reefs and tropical forests. Explore the history of Cellular Jail in Port Blair, relax on beautiful beaches and discover marine life. Respect protected island ecosystems and check local access rules before planning your journey.",
  "Andhra Pradesh":"Welcome to Andhra Pradesh, where coastal scenery meets historic temples and rich Telugu culture. Discover Tirupati, the beaches of Visakhapatnam and the landscapes of Araku Valley. Enjoy local cuisine and traditional crafts as you explore this diverse destination at a comfortable pace.",
  "Arunachal Pradesh":"Welcome to Arunachal Pradesh, a land of Himalayan valleys, monasteries and remarkable biodiversity. Explore Tawang, scenic mountain routes and vibrant local traditions. Travel conditions can change in the hills, so check permits, weather and road accessibility before setting out.",
  "Assam":"Welcome to Assam, famous for its tea gardens, the Brahmaputra River and rich wildlife. Discover Kaziranga National Park, historic Sivasagar and the cultural life of Majuli. Experience Assamese food, crafts and festivals while choosing responsible ways to enjoy nature.",
  "Bihar":"Welcome to Bihar, a state of extraordinary ancient learning and spiritual heritage. Visit Bodh Gaya, where the Buddha attained enlightenment, explore Nalanda's historic university ruins and discover Rajgir. Bihar offers meaningful journeys through history, pilgrimage and local culture.",
  "Chhattisgarh":"Welcome to Chhattisgarh, known for forest landscapes, waterfalls and distinctive cultural traditions. Explore Chitrakote Falls, historic temples and local handicrafts. Respect community traditions and check seasonal access before visiting remote natural areas.",
  "Goa":"Welcome to Goa, where beaches, historic churches and lively local traditions meet. Discover Old Goa's heritage, peaceful coastal villages and beautiful nature trails. Enjoy Goan cuisine and choose quieter, responsible experiences beyond the busiest beaches.",
  "Gujarat":"Welcome to Gujarat, a land of colourful traditions, historic cities and remarkable landscapes. Explore the white salt desert of the Rann of Kutch, the temples of Somnath and the heritage of Ahmedabad. Discover crafts, wildlife and welcoming local communities.",
  "Haryana":"Welcome to Haryana, where historic sites, rural traditions and green escapes offer varied experiences. Explore Kurukshetra's heritage, the gardens of Pinjore and the Morni Hills. Enjoy regional food and plan a relaxed journey suited to your interests.",
  "Himachal Pradesh":"Welcome to Himachal Pradesh, known for mountain scenery, charming hill towns and peaceful valleys. Discover Shimla, Dharamshala and the landscapes around Manali. Enjoy local culture and mountain views while checking weather, road conditions and accessibility.",
  "Jharkhand":"Welcome to Jharkhand, a state of forests, waterfalls and vibrant community traditions. Explore Ranchi's surroundings, Betla National Park and scenic natural attractions. Enjoy local culture respectfully and confirm travel conditions before visiting remote areas.",
  "Karnataka":"Welcome to Karnataka, where ancient monuments, green hills and modern cities come together. Explore Hampi's magnificent ruins, Mysuru's royal heritage and the coffee landscapes of Coorg. Discover traditional food, music and diverse travel experiences.",
  "Kerala":"Welcome to Kerala, famous for tranquil backwaters, green hills and rich cultural traditions. Explore Munnar's tea plantations, Fort Kochi's heritage and the waterways of Alappuzha. Enjoy local cuisine and nature while choosing comfortable, responsible travel experiences.",
  "Madhya Pradesh":"Welcome to Madhya Pradesh, the heart of India. Discover the magnificent temples of Khajuraho, the ancient Buddhist monuments of Sanchi and the wildlife of Kanha National Park. Experience beautiful forests, rich traditions, historic cities and delicious local food as you explore this remarkable state.",
  "Maharashtra":"Welcome to Maharashtra, a state of remarkable heritage, coastal scenery and vibrant cities. Discover the Ajanta and Ellora caves, the forts of the Sahyadris and the beautiful Konkan coast. Explore local food, culture and pilgrimage destinations at your own pace.",
  "Manipur":"Welcome to Manipur, known for its scenic valleys, Loktak Lake and rich artistic traditions. Explore the floating landscapes of Loktak, local markets and cultural heritage. Travel respectfully and check current access conditions before your visit.",
  "Meghalaya":"Welcome to Meghalaya, the abode of clouds, with green hills, waterfalls and living root bridges. Discover Shillong, Cherrapunji and local Khasi and Garo traditions. Some natural attractions involve steep paths, so check walking requirements when planning.",
  "Mizoram":"Welcome to Mizoram, a land of rolling hills, beautiful viewpoints and strong community traditions. Explore Aizawl, peaceful villages and scenic landscapes. Discover local food and crafts while checking permits and road conditions before travelling.",
  "Nagaland":"Welcome to Nagaland, celebrated for its hill landscapes, distinctive cultural traditions and lively festivals. Explore Kohima, historic sites and local crafts. Visit communities respectfully and check travel permits and seasonal conditions in advance.",
  "Odisha":"Welcome to Odisha, where temple heritage, beaches and forests create memorable journeys. Discover the Sun Temple at Konark, Jagannath Temple in Puri and the natural beauty of Chilika Lake. Experience Odia food, crafts and traditional arts.",
  "Punjab":"Welcome to Punjab, known for warm hospitality, vibrant culture and meaningful heritage. Visit the Golden Temple in Amritsar, explore historic sites and enjoy Punjabi food and music. Discover the region's traditions through respectful, unhurried travel.",
  "Rajasthan":"Welcome to Rajasthan, a land of majestic forts, colourful cities and desert landscapes. Discover Jaipur's palaces, Udaipur's lakes and the golden sands near Jaisalmer. Experience traditional crafts, music and regional cuisine while exploring its royal heritage.",
  "Sikkim":"Welcome to Sikkim, a Himalayan state known for monasteries, mountain views and beautiful valleys. Explore Gangtok, peaceful cultural sites and scenic nature destinations. Check permits, altitude and road conditions before planning mountain excursions.",
  "Tamil Nadu":"Welcome to Tamil Nadu, where grand temples, classical arts and coastal landscapes tell centuries of stories. Discover Madurai, the heritage of Thanjavur and the seaside charm of Mahabalipuram. Enjoy Tamil cuisine and explore at a comfortable pace.",
  "Telangana":"Welcome to Telangana, a state of historic forts, lively markets and rich Deccan culture. Explore Hyderabad's Charminar, Golconda Fort and beautiful lakes. Discover local crafts and the region's distinctive cuisine as you plan your journey.",
  "Tripura":"Welcome to Tripura, known for royal heritage, green landscapes and diverse cultural traditions. Discover Ujjayanta Palace, Neermahal and historic temple sites. Enjoy a relaxed exploration of the state's crafts, cuisine and natural beauty.",
  "Uttar Pradesh":"Welcome to Uttar Pradesh, a land of celebrated pilgrimage destinations and extraordinary heritage. Explore Varanasi, Ayodhya and the Taj Mahal in Agra. Discover traditional crafts, regional food and centuries of history along its sacred rivers.",
  "Uttarakhand":"Welcome to Uttarakhand, where Himalayan scenery meets sacred pilgrimage routes and peaceful hill towns. Discover Rishikesh, Nainital and the Char Dham region. Mountain travel can be demanding, so check accessibility, weather and seasonal road conditions.",
  "West Bengal":"Welcome to West Bengal, known for literature, arts, historic Kolkata and Himalayan landscapes. Discover Darjeeling's tea gardens, the Sundarbans and cultural landmarks across the state. Enjoy Bengali cuisine and varied journeys from hills to coast.",
  "Chandigarh":"Welcome to Chandigarh, a planned city celebrated for modern architecture and green public spaces. Explore the Rock Garden, Sukhna Lake and the city's beautiful gardens. Discover a relaxed urban experience with art, design and nearby nature.",
  "Dadra and Nagar Haveli and Daman and Diu":"Welcome to Dadra and Nagar Haveli and Daman and Diu, a union territory with coastal heritage, forests and distinctive local traditions. Explore Diu's forts and beaches, Daman's historic sites and the green landscapes around Silvassa.",
  "Delhi":"Welcome to Delhi, India's capital, where centuries of history meet vibrant modern life. Discover the Red Fort, Qutub Minar, India Gate and bustling markets. Explore museums, gardens and diverse cuisines while planning comfortable travel between attractions.",
  "Jammu and Kashmir":"Welcome to Jammu and Kashmir, known for mountain valleys, lakes and beautiful cultural traditions. Discover Srinagar's gardens and houseboats, the landscapes of Pahalgam and pilgrimage destinations around Jammu. Check seasonal travel and accessibility conditions before visiting.",
  "Ladakh":"Welcome to Ladakh, a high-altitude Himalayan region with dramatic landscapes and Buddhist monasteries. Explore Leh, peaceful villages and mountain valleys. Allow time to acclimatise, check permits and plan carefully for altitude and changing road conditions.",
  "Lakshadweep":"Welcome to Lakshadweep, a group of beautiful coral islands with lagoons and rich marine life. Discover peaceful beaches and responsible water-based experiences. Check visitor permits, transport arrangements and environmental restrictions before planning your island journey.",
  "Puducherry":"Welcome to Puducherry, known for its coastal promenade, heritage streets and peaceful atmosphere. Explore the French Quarter, local markets and nearby cultural destinations. Enjoy a relaxed visit with regional cuisine, architecture and seaside walks."
};
function narrateIndiaState(state) {
 const script=INDIA_STATE_NARRATIONS_EN[state];
 if(!script)return;
 const panel=document.getElementById('india-narration-text');
 if(panel)panel.textContent=script;
 const langSelect=document.getElementById('ghoomo-voice-language');
 const lang=langSelect?.value||'en-IN';
 // Do not falsely present English as speech in a selected non-English language.
 if(lang!=='en-IN' && lang!=='en'){
   const status=document.getElementById('india-map-status');
   if(status)status.textContent='State selected. Narration in the selected language is awaiting verified translations and a compatible voice.';
   return;
 }
 if(window.GhoomoVoiceSpeak)window.GhoomoVoiceSpeak(script);
}

function selectIndiaState(state) {
  const chosen=canonicalIndiaState(state);
  if(!chosen) return;
  currentRoute={page:'india-map',slug:chosen};
  render(); updateNavActive();
  const msg='Showing GHOOMO itineraries for '+chosen+'.';
  const status=document.getElementById('india-map-status'); if(status) status.textContent=msg;
  if(window.GhoomoTourismSelect)window.GhoomoTourismSelect(chosen);
  else narrateIndiaState(chosen);
}
function selectIndiaInterest(interest) { selectedIndiaInterest=interest||'all'; render(); updateNavActive(); const label=INDIA_INTERESTS.find(x=>x.id===selectedIndiaInterest)?.label||'all interests'; const msg='Travel interest selected: '+label+'. Choose a state to see matching itineraries.'; const status=document.getElementById('india-map-status'); if(status) status.textContent=msg; if(window.GhoomoVoiceSpeak) window.GhoomoVoiceSpeak(msg); }
function stateRegion(name) {
 const north=['Delhi','Haryana','Himachal Pradesh','Punjab','Rajasthan','Uttar Pradesh','Uttarakhand','Chandigarh','Jammu and Kashmir','Ladakh'];
 const south=['Andhra Pradesh','Karnataka','Kerala','Tamil Nadu','Telangana','Puducherry'];
 const east=['Bihar','Jharkhand','Odisha','West Bengal'];
 const northeast=['Arunachal Pradesh','Assam','Manipur','Meghalaya','Mizoram','Nagaland','Sikkim','Tripura'];
 const west=['Goa','Gujarat','Maharashtra','Dadra and Nagar Haveli and Daman and Diu'];
 if(north.includes(name)) return 'North'; if(south.includes(name)) return 'South'; if(east.includes(name)) return 'East'; if(northeast.includes(name)) return 'North-East'; if(west.includes(name)) return 'West'; if(name==='Andaman and Nicobar Islands'||name==='Lakshadweep') return 'Islands'; return 'Central';
}
function renderIndiaExplorer(state) {
 const selected=canonicalIndiaState(state||'');
 const stateMatches=selected?DESTINATIONS.filter(d=>canonicalIndiaState(d.state)===selected || canonicalIndiaState(d.name)===selected):(selectedIndiaInterest!=='all'?DESTINATIONS:[]);
 const seenSlugs=new Set();
 const matches=stateMatches.filter(d=>d.slug&&!seenSlugs.has(d.slug)&&seenSlugs.add(d.slug)&&destinationMatchesInterest(d,selectedIndiaInterest));
 const hasBrowseContext=Boolean(selected)||selectedIndiaInterest!=='all';
 const resultsTitle=selected?`Itineraries in ${selected}${selectedIndiaInterest!=='all'?' · '+(INDIA_INTERESTS.find(x=>x.id===selectedIndiaInterest)?.label||'Selected interest'):''}`:(selectedIndiaInterest!=='all'?'Trips for '+(INDIA_INTERESTS.find(x=>x.id===selectedIndiaInterest)?.label||'selected interest'):'Start exploring');
 const regions=['North','South','East','West','Central','North-East','Islands'];
 const photoCredits=Object.entries(DESTINATION_DIRECT_IMAGE_FILES).map(([slug,file])=>{const d=DESTINATIONS.find(item=>item.slug===slug);const href='https://commons.wikimedia.org/wiki/File:'+encodeURIComponent(file).replace(/%20/g,'_');return `<li><a href="${href}" target="_blank" rel="noopener noreferrer">${d?d.name:slug}</a><span>${file}</span></li>`;}).join('');
 return `<section class="india-explorer wrap" aria-labelledby="india-explorer-title">
  <div class="india-explorer-head"><p class="eyebrow">GHOOMO · EXPLORE INDIA</p><h1 id="india-explorer-title">Explore India your way</h1><p>Choose Option 1 to explore by travel interest, or Option 2 to explore by state or union territory. Both options work with the map, keyboard, touch and voice search.</p></div>
  <section class="india-explore-options" aria-label="Ways to explore India">
   <div class="india-option-card"><p class="india-option-kicker">OPTION 1</p><h2>Explore by travel interest</h2><p>Start with the kind of trip you want.</p><div class="india-interest-list">${INDIA_INTERESTS.map(item=>`<button type="button" class="india-interest-btn ${selectedIndiaInterest===item.id?'selected':''}" aria-pressed="${selectedIndiaInterest===item.id}" onclick="selectIndiaInterest('${item.id}')">${item.label}</button>`).join('')}<button type="button" class="india-interest-btn ${selectedIndiaInterest==='all'?'selected':''}" aria-pressed="${selectedIndiaInterest==='all'}" onclick="selectIndiaInterest('all')">All interests</button></div></div>
   <div class="india-option-card"><p class="india-option-kicker">OPTION 2</p><h2>Explore by state or union territory</h2><p>Choose a state from the map or searchable state list below.</p><button type="button" class="btn btn-outline btn-sm" onclick="document.getElementById('india-state-search')?.focus()">Find a state or UT ↓</button></div>
  </section>
  <div class="india-explorer-layout"><div class="india-map-panel"><div class="india-map-title"><h2>Interactive India map</h2><span>Tap a state or union territory</span></div><div id="india-svg-map" class="india-svg-map" role="group" aria-label="Interactive map of Indian states and union territories"><div class="map-loading">Loading state boundaries… If the map is unavailable, use the state list alongside it.</div></div><p class="map-attribution">Boundaries are a visual guide, not a legal or survey map. If online boundary data cannot load, use the interactive regional state guide.</p><details class="india-photo-credits"><summary>Photo sources &amp; licences</summary><p>Place-specific photos link to Wikimedia Commons file pages, where the photographer, source and licence are listed.</p><ul>${photoCredits}</ul></details></div>
  <div class="india-state-panel"><label for="india-state-search">Find a state or union territory</label><input id="india-state-search" type="search" placeholder="Type a state name…" autocomplete="off" aria-describedby="india-state-help"><p id="india-state-help" class="india-help">All 28 states and 8 union territories are listed below. Buttons work with touch, keyboard and screen readers.</p><div id="india-state-list" class="india-state-list">${regions.map(region=>{const list=INDIA_STATES_UTS.filter(n=>stateRegion(n)===region);return `<section class="india-state-group" aria-label="${region} India"><h3>${region}</h3><div>${list.map(n=>`<button type="button" class="india-state-btn ${selected===n?'selected':''}" data-state="${n}" onclick="selectIndiaState('${n.replace(/'/g,"\\'")}')">${n}</button>`).join('')}</div></section>`}).join('')}</div></div></div>
  <section id="india-state-results" class="india-state-results" aria-live="polite">${hasBrowseContext?`<h2>${resultsTitle}</h2>`:'<h2>Start exploring</h2><p>Select a state on the map or from the list, or choose a travel interest above to see matching itineraries.</p>'}${hasBrowseContext?(matches.length?`<p class="india-result-note">Showing ${matches.length} currently listed destination option${matches.length===1?'':'s'}${selected?' for '+selected:' across India'}${selectedIndiaInterest!=='all'?' matching '+(INDIA_INTERESTS.find(x=>x.id===selectedIndiaInterest)?.label||'the selected interest'):''}. Prices and itinerary details are illustrative demo values.</p><div class="india-result-grid">${matches.map(d=>`<article class="dest-card"><div class="dest-img"><img data-destination-image="${d.slug}" src="${directDestinationImageUrl(d.slug)||img(d.imgKey,d.lock,700,500)}" alt="${d.name} destination" loading="lazy"><div class="dest-tags">${d.tags.map(tag=>`<span>${tag}</span>`).join('')}</div><div class="dest-name-overlay"><h3>${d.name}</h3></div></div><div class="dest-body"><div class="dest-region">${d.region}</div><div class="dest-desc">${d.desc}</div><div class="dest-meta-row"><span>${d.days}</span><span class="dest-price">₹${d.priceFrom.toLocaleString('en-IN')}<small> onwards</small></span></div><button class="btn btn-outline btn-block btn-sm" onclick="navigate('destination','${d.slug}')">View itinerary and compare →</button></div></article>`).join('')}</div>`:`<p>${selected?'No listed trips in '+selected+' match this interest yet. Choose “All interests” to see every itinerary for this state.':'No currently listed destinations match this interest. Try another interest.'}</p>`):''}<p id="india-narration-text" class="india-narration-text" aria-live="off"></p><p id="india-map-status" class="india-map-status" role="status">${selected?'Selected '+selected+'.':'No state selected yet.'}</p></section>
 </section>`;
}
function renderIndiaSchematicMap(map) {
 if (!map) return;
 const groups = [
  ['North',['Jammu and Kashmir','Ladakh','Himachal Pradesh','Punjab','Chandigarh','Haryana','Delhi','Uttarakhand','Uttar Pradesh']],
  ['West & Central',['Rajasthan','Gujarat','Maharashtra','Goa','Madhya Pradesh','Chhattisgarh']],
  ['South',['Andhra Pradesh','Telangana','Karnataka','Kerala','Tamil Nadu','Puducherry']],
  ['East',['Bihar','Jharkhand','Odisha','West Bengal']],
  ['North-East',['Sikkim','Assam','Arunachal Pradesh','Nagaland','Manipur','Mizoram','Tripura','Meghalaya']],
  ['Islands & UTs',['Andaman and Nicobar Islands','Lakshadweep','Dadra and Nagar Haveli and Daman and Diu']]
 ];
 const selected=canonicalIndiaState(currentRoute.slug||'');
 map.innerHTML=`<div class="india-schematic-map" role="group" aria-label="Offline schematic guide to Indian regions and states"><div class="india-schematic-visual"><svg class="india-silhouette" viewBox="0 0 320 350" role="img" aria-label="Schematic silhouette of India, not to scale"><path d="M112 16 L132 28 L156 31 L168 48 L188 54 L196 73 L214 77 L231 91 L252 95 L248 107 L226 109 L212 123 L195 132 L191 151 L180 169 L176 191 L163 215 L151 237 L141 263 L130 293 L118 319 L107 300 L103 274 L88 249 L76 226 L66 203 L55 185 L53 165 L42 147 L32 129 L40 113 L55 102 L62 86 L75 72 L73 54 L88 44 L93 28 Z" fill="#dce9dc" stroke="#6e9279" stroke-width="3" stroke-linejoin="round"/><path d="M232 99 L260 94 L282 103 L273 113 L247 113 Z" fill="#dce9dc" stroke="#6e9279" stroke-width="2" stroke-linejoin="round"/><path d="M264 235l4 18m8 20 3 15" stroke="#6e9279" stroke-width="4" stroke-linecap="round"/><circle cx="143" cy="95" r="6" fill="#e87932"/><circle cx="105" cy="158" r="6" fill="#e87932"/><circle cx="128" cy="232" r="6" fill="#e87932"/><circle cx="214" cy="112" r="6" fill="#e87932"/><text x="171" y="338" font-size="11" fill="#5c7187" text-anchor="middle">Schematic · not to scale</text></svg><div class="india-schematic-instructions"><strong>Explore India by region</strong><span>This offline guide stays visible when the detailed boundary service cannot connect. Select a state or UT below; the itinerary list updates automatically.</span><span class="india-map-offline-pill"><span aria-hidden="true">●</span> Interactive state guide available</span></div></div>${groups.map(([region,names],i)=>`<section class="india-schematic-region region-${i}" aria-label="${region} India"><h3>${region}</h3><div>${names.map(name=>`<button type="button" class="india-map-chip ${selected===name?'selected':''}" onclick="selectIndiaState('${name.replace(/'/g,"\\'")}')">${name}</button>`).join('')}</div></section>`).join('')}</div>`;
}
function initIndiaExplorer() {
 const map=document.getElementById('india-svg-map'); if(!map)return;
 renderIndiaSchematicMap(map);
 const search=document.getElementById('india-state-search');
 search?.addEventListener('input',()=>{const q=search.value.toLowerCase().trim();document.querySelectorAll('.india-state-group').forEach(group=>{let any=false;group.querySelectorAll('[data-state]').forEach(btn=>{const show=btn.dataset.state.toLowerCase().includes(q);btn.hidden=!show;if(show)any=true;});group.hidden=!any;});});
 // Map is progressive enhancement: the state list remains available if boundary data is offline.
 const geoUrls=['https://raw.githubusercontent.com/datameet/maps/master/States/Admin2.geojson','https://raw.githubusercontent.com/iamaanahmad/GeoJson-of-Indian-States/main/indian-states.geojson'];
 const fetchMapData=async()=>{let lastError;for(const url of geoUrls){try{const response=await fetch(url);if(!response.ok)throw new Error('Map data unavailable');const data=await response.json();if(data&&Array.isArray(data.features)&&data.features.length>=28)return data;}catch(error){lastError=error;}}throw lastError||new Error('Map data unavailable');};
 fetchMapData().then(data=>{
  if(!map.isConnected)return;
  const features=(data.features||[]).filter(f=>f.geometry&&f.properties);
  const featureName=f=>f.properties.name||f.properties.NAME_1||f.properties.st_nm||f.properties.ST_NM||f.properties.state||f.properties.NAME;
  const recognized=features.filter(f=>canonicalIndiaState(featureName(f)||''));
  if(recognized.length<28)throw new Error('Incomplete state boundary data');
  const coords=[];const visit=c=>{if(typeof c[0]==='number'){if(Number.isFinite(c[0])&&Number.isFinite(c[1]))coords.push(c);}else c.forEach(visit)};
  recognized.forEach(f=>visit(f.geometry.coordinates));
  if(!coords.length)throw new Error('Invalid map coordinates');
  const xs=coords.map(c=>c[0]),ys=coords.map(c=>c[1]),minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys);
  const W=620,H=650,pad=18,scale=Math.min((W-pad*2)/(maxX-minX),(H-pad*2)/(maxY-minY));
  const project=([x,y])=>[pad+(x-minX)*scale,H-pad-(y-minY)*scale];
  const ringPath=ring=>ring.map((c,i)=>{const [x,y]=project(c);return `${i?'L':'M'}${x.toFixed(1)},${y.toFixed(1)}`}).join(' ')+'Z';
  const geomPath=g=>{const out=[];const polys=g.type==='Polygon'?[g.coordinates]:g.type==='MultiPolygon'?g.coordinates:[];polys.forEach(poly=>poly.forEach(ring=>out.push(ringPath(ring))));return out.join(' ')};
  const escapeText=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const labelledStates=new Set();
  const shapes=recognized.map(f=>{const canonical=canonicalIndiaState(featureName(f));const alreadyLabelled=labelledStates.has(canonical);labelledStates.add(canonical);
    const points=[];visitForLabel(f.geometry.coordinates,points);
    const avg=points.length?points.reduce((a,c)=>[a[0]+c[0],a[1]+c[1]],[0,0]).map(v=>v/points.length):[0,0];const [lx,ly]=project(avg);
    const label=escapeText(canonical);return `<path d="${geomPath(f.geometry)}" tabindex="0" role="button" aria-label="Select ${label}" data-map-state="${label}" class="india-map-shape ${canonical===canonicalIndiaState(currentRoute.slug||'')?'selected':''}"><title>${label}</title></path>${alreadyLabelled?'':`<text class="india-map-label" x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" aria-hidden="true">${escapeText(canonical.length>13?canonical.slice(0,11)+'…':canonical)}</text>`}`;
  }).join('');
  function visitForLabel(c,out){if(typeof c[0]==='number')out.push(c);else c.forEach(x=>visitForLabel(x,out));}
  map.innerHTML=`<div class="india-map-toolbar" aria-label="Map zoom controls"><button type="button" data-map-zoom="in" aria-label="Zoom in on India map">＋</button><button type="button" data-map-zoom="out" aria-label="Zoom out on India map">−</button><button type="button" data-map-zoom="reset" aria-label="Reset map zoom">Reset</button></div><div class="india-map-viewport"><svg viewBox="0 0 ${W} ${H}" class="india-boundary-svg" role="group" aria-label="Map of India. Select a state, or use the searchable state list."><g class="india-map-zoom-layer">${shapes}</g></svg></div><p class="india-map-help">Select a state to view itineraries. Use + and − to zoom. State list and keyboard controls remain available.</p>`;
  let zoom=1;
  const layer=map.querySelector('.india-map-zoom-layer');
  const applyZoom=()=>{layer.setAttribute('transform',`translate(${W/2} ${H/2}) scale(${zoom}) translate(${-W/2} ${-H/2})`);};
  map.querySelectorAll('[data-map-zoom]').forEach(btn=>btn.addEventListener('click',()=>{const action=btn.dataset.mapZoom;zoom=action==='reset'?1:Math.max(1,Math.min(3,zoom*(action==='in'?1.25:0.8)));applyZoom();}));
  if(window.GhoomoTourismDecorateMap)window.GhoomoTourismDecorateMap();
  map.querySelectorAll('[data-map-state]').forEach(path=>{
    path.addEventListener('click',()=>selectIndiaState(path.dataset.mapState));
    path.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();selectIndiaState(path.dataset.mapState);}});
    path.addEventListener('mouseenter',()=>path.classList.add('hovered'));
    path.addEventListener('mouseleave',()=>path.classList.remove('hovered'));
  });
 }).catch(()=>{if(map.isConnected)renderIndiaSchematicMap(map);});
}

/* ============================================================
   MAIN RENDER DISPATCH
   ============================================================ */
function render() {
  const app = document.getElementById('app');
  if (currentRoute.page === 'home') {
    app.innerHTML = renderHome();
    renderDestGrid();
  } else if (currentRoute.page === 'destination') {
    app.innerHTML = renderDestination(currentRoute.slug);
    const dest = DESTINATIONS.find(d => d.slug === currentRoute.slug);
    if (dest) {
      resolveDestinationImages(app);
      renderStyleTabs(dest);
      renderCategorySelector(dest);
      renderCompareControls(dest);
      renderCompareTable(dest);
    }
  } else if (currentRoute.page === 'india-map') {
    app.innerHTML = renderIndiaExplorer(currentRoute.slug);
    resolveDestinationImages(app);
    initIndiaExplorer();
    const chosen=canonicalIndiaState(currentRoute.slug||'');
    if(chosen){ const search=document.getElementById('india-state-search'); if(search) search.value=''; }
  } else if (currentRoute.page === 'about') {
    app.innerHTML = renderAbout();
  }
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  buildLangMenu();
  render();
});
