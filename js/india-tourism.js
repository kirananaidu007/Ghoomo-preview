/* GHOOMO Tourism India preview: English/Hindi, accessible landmark card, image licensing. */
(() => {
 const LANDMARKS={"Andaman and Nicobar Islands":["Radhanagar Beach","🏝️"],"Andhra Pradesh":["Tirupati Temple","🛕"],"Arunachal Pradesh":["Tawang Monastery","🏯"],"Assam":["Kaziranga National Park","🦏"],"Bihar":["Mahabodhi Temple","🛕"],"Chhattisgarh":["Chitrakote Falls","🏞️"],"Goa":["Basilica of Bom Jesus","⛪"],"Gujarat":["Rann of Kutch","🏜️"],"Haryana":["Pinjore Gardens","🌳"],"Himachal Pradesh":["Shimla","🏔️"],"Jharkhand":["Hundru Falls","🏞️"],"Karnataka":["Hampi","🏛️"],"Kerala":["Alappuzha Backwaters","🛶"],"Madhya Pradesh":["Khajuraho Temples","🛕"],"Maharashtra":["Ajanta Caves","🏛️"],"Manipur":["Loktak Lake","🪷"],"Meghalaya":["Living Root Bridge","🌿"],"Mizoram":["Aizawl Hills","⛰️"],"Nagaland":["Kohima","⛰️"],"Odisha":["Konark Sun Temple","☀️"],"Punjab":["Golden Temple","🛕"],"Rajasthan":["Hawa Mahal","🏰"],"Sikkim":["Rumtek Monastery","🏯"],"Tamil Nadu":["Meenakshi Temple","🛕"],"Telangana":["Charminar","🏛️"],"Tripura":["Neermahal","🏰"],"Uttar Pradesh":["Taj Mahal","🕌"],"Uttarakhand":["Rishikesh","🏞️"],"West Bengal":["Darjeeling Tea Gardens","🍃"],"Chandigarh":["Rock Garden","🪨"],"Dadra and Nagar Haveli and Daman and Diu":["Diu Fort","🏰"],"Delhi":["Qutub Minar","🏛️"],"Jammu and Kashmir":["Gulmarg","🏔️"],"Ladakh":["Thiksey Monastery","🏯"],"Lakshadweep":["Agatti Lagoon","🏝️"],"Puducherry":["Promenade Beach","🌊"]};
 const HINDI={"Andaman and Nicobar Islands":"अंडमान और निकोबार द्वीप समूह में आपका स्वागत है। यहाँ नीला समुद्र, सुंदर समुद्र तट और हरे-भरे जंगल आपका इंतज़ार कर रहे हैं। पोर्ट ब्लेयर का सेल्युलर जेल इतिहास से परिचित कराता है। यात्रा से पहले द्वीपों के नियम और परिवहन की जानकारी अवश्य लें।","Andhra Pradesh":"आंध्र प्रदेश में आपका स्वागत है। तिरुपति के प्रसिद्ध मंदिर, विशाखापत्तनम के समुद्र तट और अराकू घाटी की हरियाली यहाँ के प्रमुख आकर्षण हैं। तेलुगु संस्कृति, स्थानीय भोजन और हस्तशिल्प इस यात्रा को खास बनाते हैं।","Arunachal Pradesh":"अरुणाचल प्रदेश में आपका स्वागत है। हिमालय की सुंदर घाटियाँ, तवांग मठ और शांत पहाड़ी गाँव यहाँ की पहचान हैं। यहाँ की संस्कृति और प्रकृति अद्भुत हैं। यात्रा से पहले मौसम, सड़क और परमिट की जानकारी जाँच लें।","Assam":"असम में आपका स्वागत है। चाय के बागान, ब्रह्मपुत्र नदी और काज़ीरंगा राष्ट्रीय उद्यान यहाँ की पहचान हैं। माजुली की संस्कृति और शिवसागर का इतिहास भी देखने योग्य है। प्रकृति का आनंद जिम्मेदारी से लें।","Bihar":"बिहार में आपका स्वागत है। बोधगया का महाबोधि मंदिर, प्राचीन नालंदा विश्वविद्यालय और राजगीर का इतिहास यहाँ की विशेषता हैं। यह प्रदेश ज्ञान, अध्यात्म और सांस्कृतिक विरासत से भरपूर है।","Chhattisgarh":"छत्तीसगढ़ में आपका स्वागत है। चित्रकोट जलप्रपात, घने जंगल और पारंपरिक कला यहाँ की पहचान हैं। स्थानीय संस्कृति को समझें और प्राकृतिक स्थलों की यात्रा से पहले मौसम तथा पहुँच की जानकारी लें।","Goa":"गोवा में आपका स्वागत है। सुनहरे समुद्र तट, पुराने चर्च और खूबसूरत गाँव यहाँ के आकर्षण हैं। स्थानीय भोजन, संगीत और शांत तटीय इलाकों का आनंद लें। प्रकृति और स्थानीय जीवन का सम्मान करते हुए यात्रा करें।","Gujarat":"गुजरात में आपका स्वागत है। कच्छ का सफेद रण, सोमनाथ मंदिर और अहमदाबाद की ऐतिहासिक विरासत यहाँ देखने योग्य हैं। रंग-बिरंगे हस्तशिल्प, उत्सव और स्थानीय भोजन आपकी यात्रा को यादगार बनाते हैं।","Haryana":"हरियाणा में आपका स्वागत है। कुरुक्षेत्र की ऐतिहासिक भूमि, पिंजौर गार्डन और मोरनी की पहाड़ियाँ यहाँ के आकर्षण हैं। स्थानीय संस्कृति और स्वादिष्ट भोजन के साथ आरामदायक यात्रा का आनंद लें।","Himachal Pradesh":"हिमाचल प्रदेश में आपका स्वागत है। शिमला, धर्मशाला और मनाली की पहाड़ियाँ सुंदर नज़ारे प्रस्तुत करती हैं। यहाँ की संस्कृति और शांत घाटियाँ मन मोह लेती हैं। यात्रा से पहले मौसम और सड़क की स्थिति जाँचें।","Jharkhand":"झारखंड में आपका स्वागत है। रांची के आसपास के झरने, बेतला राष्ट्रीय उद्यान और हरे-भरे जंगल यहाँ की पहचान हैं। स्थानीय संस्कृति का सम्मान करें और दूरस्थ स्थलों के लिए यात्रा की जानकारी पहले लें।","Karnataka":"कर्नाटक में आपका स्वागत है। हम्पी के प्राचीन स्मारक, मैसूर का राजमहल और कूर्ग के कॉफी बागान यहाँ की पहचान हैं। इतिहास, प्रकृति और स्वादिष्ट स्थानीय भोजन का आनंद लें।","Kerala":"केरल में आपका स्वागत है। अलप्पुझा के शांत बैकवॉटर और हाउसबोट, मुन्नार के चाय बागान और कोच्चि की ऐतिहासिक गलियाँ यहाँ के आकर्षण हैं। हरियाली, संस्कृति और स्थानीय भोजन के साथ यादगार यात्रा का आनंद लें।","Madhya Pradesh":"मध्य प्रदेश में आपका स्वागत है। खजुराहो के भव्य मंदिर, साँची के बौद्ध स्मारक और कान्हा के जंगल यहाँ की विशेषता हैं। इतिहास, वन्यजीवन और स्थानीय संस्कृति से भरपूर इस प्रदेश को भारत का हृदय कहा जाता है।","Maharashtra":"महाराष्ट्र में आपका स्वागत है। अजंता और एलोरा की गुफाएँ, सह्याद्रि के किले और कोंकण के समुद्र तट यहाँ के आकर्षण हैं। मुंबई से लेकर ऐतिहासिक तीर्थस्थलों तक विविध अनुभव आपका इंतज़ार करते हैं।","Manipur":"मणिपुर में आपका स्वागत है। लोकटक झील, खूबसूरत घाटियाँ और समृद्ध कला परंपराएँ यहाँ की पहचान हैं। स्थानीय बाजार और संस्कृति को जानें। यात्रा से पहले वर्तमान परिस्थितियों और पहुँच की जानकारी जाँचें।","Meghalaya":"मेघालय में आपका स्वागत है। शिलांग की पहाड़ियाँ, खूबसूरत झरने और जीवित जड़ों से बने पुल यहाँ के आकर्षण हैं। कुछ प्राकृतिक स्थलों तक पहुँचने में अधिक पैदल चलना पड़ सकता है, इसलिए पहले जानकारी लें।","Mizoram":"मिजोरम में आपका स्वागत है। आइज़ोल की पहाड़ियाँ, शांत गाँव और सुंदर प्राकृतिक दृश्य यहाँ की पहचान हैं। स्थानीय भोजन और हस्तशिल्प का आनंद लें। यात्रा से पहले परमिट और सड़क की जानकारी जाँचें।","Nagaland":"नागालैंड में आपका स्वागत है। कोहिमा, खूबसूरत पहाड़ियाँ और विविध सांस्कृतिक उत्सव यहाँ के आकर्षण हैं। स्थानीय परंपराओं का सम्मान करें और यात्रा से पहले परमिट तथा मौसम की जानकारी लें।","Odisha":"ओडिशा में आपका स्वागत है। कोणार्क का सूर्य मंदिर, पुरी का जगन्नाथ मंदिर और चिलिका झील यहाँ के प्रमुख आकर्षण हैं। ओडिशी कला, हस्तशिल्प और स्थानीय भोजन इस यात्रा को खास बनाते हैं।","Punjab":"पंजाब में आपका स्वागत है। अमृतसर का स्वर्ण मंदिर, ऐतिहासिक स्थल और जीवंत पंजाबी संस्कृति यहाँ की पहचान हैं। स्वादिष्ट भोजन, संगीत और गर्मजोशी भरा आतिथ्य आपकी यात्रा को यादगार बनाते हैं।","Rajasthan":"राजस्थान में आपका स्वागत है। जयपुर का हवा महल, उदयपुर की झीलें और जैसलमेर का रेगिस्तान यहाँ के आकर्षण हैं। भव्य किले, रंगीन बाजार और लोक संगीत आपको समृद्ध इतिहास से परिचित कराते हैं।","Sikkim":"सिक्किम में आपका स्वागत है। गंगटोक, सुंदर बौद्ध मठ और हिमालय के मनमोहक दृश्य यहाँ की पहचान हैं। पहाड़ी यात्रा से पहले मौसम, ऊँचाई और आवश्यक परमिट की जानकारी अवश्य लें।","Tamil Nadu":"तमिलनाडु में आपका स्वागत है। मदुरै का मीनाक्षी मंदिर, तंजावुर की विरासत और महाबलीपुरम के प्राचीन स्मारक यहाँ के आकर्षण हैं। शास्त्रीय कला, समुद्र तट और तमिल भोजन का आनंद लें।","Telangana":"तेलंगाना में आपका स्वागत है। हैदराबाद का चारमीनार, गोलकुंडा किला और ऐतिहासिक बाजार यहाँ की पहचान हैं। दक्कन की संस्कृति, हस्तशिल्प और स्वादिष्ट भोजन आपकी यात्रा को विशेष बनाते हैं।","Tripura":"त्रिपुरा में आपका स्वागत है। उज्जयंत महल, नीरमहल और हरियाली से भरे प्राकृतिक स्थल यहाँ के आकर्षण हैं। स्थानीय कला, भोजन और सांस्कृतिक विरासत के साथ शांत यात्रा का आनंद लें।","Uttar Pradesh":"उत्तर प्रदेश में आपका स्वागत है। आगरा का ताजमहल, वाराणसी के घाट और अयोध्या के धार्मिक स्थल यहाँ के प्रमुख आकर्षण हैं। इतिहास, आस्था, हस्तशिल्प और विविध स्थानीय भोजन का अनुभव करें।","Uttarakhand":"उत्तराखंड में आपका स्वागत है। ऋषिकेश, नैनीताल और हिमालय की पवित्र चारधाम यात्रा यहाँ की पहचान हैं। पहाड़ों के सुंदर दृश्य मन मोह लेते हैं। मौसम, सड़क और पहुँच की जानकारी लेकर यात्रा करें।","West Bengal":"पश्चिम बंगाल में आपका स्वागत है। दार्जिलिंग के चाय बागान, कोलकाता की सांस्कृतिक विरासत और सुंदरबन यहाँ के आकर्षण हैं। कला, साहित्य और बंगाली भोजन से भरपूर इस प्रदेश को जानें।","Chandigarh":"चंडीगढ़ में आपका स्वागत है। रॉक गार्डन, सुखना झील और हरे-भरे उद्यान इस नियोजित शहर की पहचान हैं। आधुनिक वास्तुकला, कला और आरामदायक शहर भ्रमण का आनंद लें।","Dadra and Nagar Haveli and Daman and Diu":"दादरा और नगर हवेली तथा दमन और दीव में आपका स्वागत है। दीव का किला, समुद्र तट, दमन की ऐतिहासिक इमारतें और सिलवासा की हरियाली यहाँ के आकर्षण हैं।","Delhi":"दिल्ली में आपका स्वागत है। लाल किला, कुतुब मीनार, इंडिया गेट और पुराने बाजार यहाँ के आकर्षण हैं। इतिहास, संग्रहालय, उद्यान और विभिन्न प्रकार के भोजन के साथ भारत की राजधानी को जानें।","Jammu and Kashmir":"जम्मू और कश्मीर में आपका स्वागत है। गुलमर्ग की बर्फीली पहाड़ियाँ, श्रीनगर की डल झील और पहलगाम की सुंदर घाटियाँ यहाँ की पहचान हैं। मौसम और यात्रा की वर्तमान परिस्थितियाँ जाँचकर आराम से घूमिए।","Ladakh":"लद्दाख में आपका स्वागत है। लेह, थिकसे मठ और हिमालय के ऊँचे पहाड़ी दृश्य यहाँ के आकर्षण हैं। ऊँचाई के अनुकूल होने के लिए समय दें और परमिट, मौसम तथा सड़क की जानकारी जाँचें।","Lakshadweep":"लक्षद्वीप में आपका स्वागत है। साफ नीले लैगून, मूँगे की चट्टानें और शांत समुद्र तट यहाँ की पहचान हैं। द्वीपों की यात्रा से पहले परमिट और परिवहन की जानकारी लें तथा समुद्री पर्यावरण की रक्षा करें।","Puducherry":"पुडुचेरी में आपका स्वागत है। समुद्र किनारे की सुंदर सैरगाह, ऐतिहासिक फ्रेंच क्वार्टर और शांत गलियाँ यहाँ की पहचान हैं। स्थानीय भोजन, बाजार और सांस्कृतिक विरासत के साथ आरामदायक यात्रा का आनंद लें।"};
 const cache=new Map();
 let selectionToken=0;
 const escapeHtml=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
 const language=()=>{
   const v=document.getElementById('ghoomo-voice-language')?.value||window.__ghoomoSelectedLanguage||'en';
   return /^hi(?:-|$)/i.test(v)?'hi':'en';
 };
 const label=(en,hi)=>language()==='hi'?hi:en;
 function findPanel(){return document.querySelector('.india-map-panel');}
 function createCard(){
   const panel=findPanel();if(!panel)return null;
   let card=panel.querySelector('#ghoomo-tourism-card');
   if(card)return card;
   card=document.createElement('section');card.id='ghoomo-tourism-card';card.className='ghoomo-tourism-card';card.setAttribute('aria-label','Featured state attraction');
   panel.insertBefore(card,panel.querySelector('.map-attribution'));
   return card;
 }
 async function loadCommonsPhoto(landmark){
   if(cache.has(landmark))return cache.get(landmark);
   const endpoint='https://commons.wikimedia.org/w/api.php?'+new URLSearchParams({action:'query',generator:'search',gsrsearch:'filetype:bitmap '+landmark+' India',gsrnamespace:'6',gsrlimit:'8',prop:'imageinfo',iiprop:'url|extmetadata',iiurlwidth:'720',format:'json',origin:'*'});
   try{
     const response=await fetch(endpoint);if(!response.ok)throw Error('Photo lookup failed');
     const result=await response.json();
     const pages=Object.values(result.query?.pages||{});
     const acceptable=pages.map(p=>({title:p.title,info:p.imageinfo?.[0]})).find(p=>p.info?.thumburl&&/\.(jpe?g|png|webp)$/i.test(p.title)&&/CC BY|public domain|CC0/i.test(p.info.extmetadata?.LicenseShortName?.value||''));
     const photo=acceptable?{src:acceptable.info.thumburl,description:acceptable.info.descriptionurl,license:acceptable.info.extmetadata?.LicenseShortName?.value||'See Wikimedia Commons',artist:acceptable.info.extmetadata?.Artist?.value||''}:null;
     cache.set(landmark,photo);return photo;
   }catch{return null;}
 }
 let currentState=null;
 async function show(state,{speak=true}={}){
   if(!LANDMARKS[state])return;
   currentState=state;
   const token=++selectionToken;
   const [place,symbol]=LANDMARKS[state],hindi=language()==='hi';
   const text=hindi?HINDI[state]:(typeof INDIA_STATE_NARRATIONS_EN!=='undefined'?INDIA_STATE_NARRATIONS_EN[state]:'');
   const card=createCard();if(!card)return;
   card.innerHTML=`<div class="ghoomo-tourism-card-head"><span>${label('FEATURED TOURISM LANDMARK','प्रमुख पर्यटन स्थल')}</span><button type="button" data-tourism-close aria-label="Close landmark preview">×</button></div><div class="ghoomo-tourism-photo" role="img" aria-label="${escapeHtml(place)}"><span aria-hidden="true">${symbol}</span></div><h3>${escapeHtml(state)}</h3><p class="ghoomo-tourism-place">${escapeHtml(place)}</p><p class="ghoomo-tourism-narration" lang="${hindi?'hi':'en'}">${escapeHtml(text)}</p><div class="ghoomo-tourism-actions"><button type="button" data-tourism-repeat>${label('↻ Repeat narration','↻ फिर सुनें')}</button><button type="button" data-tourism-stop>${label('■ Stop','■ रोकें')}</button></div><small class="ghoomo-tourism-credit">${label('Searching for a reusable attraction photograph…','पर्यटन स्थल की तस्वीर खोजी जा रही है…')}</small>`;
   card.querySelector('[data-tourism-close]').onclick=()=>{card.remove();window.speechSynthesis?.cancel();};
   card.querySelector('[data-tourism-stop]').onclick=()=>window.speechSynthesis?.cancel();
   card.querySelector('[data-tourism-repeat]').onclick=()=>speakNarration(text,hindi);
   if(speak)speakNarration(text,hindi);
   const photo=await loadCommonsPhoto(place);
   if(token!==selectionToken||!card.isConnected)return;
   const holder=card.querySelector('.ghoomo-tourism-photo');
   const credit=card.querySelector('.ghoomo-tourism-credit');
   if(photo){
     holder.innerHTML=`<img src="${escapeHtml(photo.src)}" alt="${escapeHtml(place)}" loading="lazy">`;
     credit.innerHTML=`<a href="${escapeHtml(photo.description)}" target="_blank" rel="noopener noreferrer">Wikimedia Commons · ${escapeHtml(photo.license)}</a>`;
   }else credit.textContent=label('Landmark illustration shown; a verified reusable photo is unavailable.','अभी प्रतीक दिखाया गया है; प्रमाणित तस्वीर उपलब्ध नहीं है।');
 }
 function speakNarration(text,hindi){
   if(!text)return;
   // Browser speech is deliberately language-specific; never substitute English for Hindi.
   if(!('speechSynthesis'in window))return;
   const voices=speechSynthesis.getVoices();
   const target=hindi?'hi':'en';
   const matching=voices.find(v=>v.lang?.toLowerCase().startsWith(target));
   if(!matching)return;
   speechSynthesis.cancel();
   const utterance=new SpeechSynthesisUtterance(text);
   utterance.lang=hindi?'hi-IN':'en-IN';utterance.voice=matching;utterance.rate=0.9;
   // A hard stop prevents unusually slow devices from exceeding 30 seconds.
   const start=Date.now();let timer=null;
   utterance.onstart=()=>{timer=setInterval(()=>{if(Date.now()-start>=29500){speechSynthesis.cancel();clearInterval(timer);}},300);};
   utterance.onend=()=>{if(timer)clearInterval(timer);};
   utterance.onerror=()=>{if(timer)clearInterval(timer);};
   speechSynthesis.speak(utterance);
 }
 window.GhoomoTourismDecorateMap=()=>{
   const svg=document.querySelector('#india-svg-map .india-boundary-svg');
   if(!svg||svg.dataset.tourismDecorated)return;
   svg.dataset.tourismDecorated='true';
   const layer=svg.querySelector('.india-map-zoom-layer');if(!layer)return;
   const ns='http://www.w3.org/2000/svg';
   layer.querySelectorAll('[data-map-state]').forEach(path=>{
     const state=path.getAttribute('data-map-state');
     const item=LANDMARKS[state];if(!item)return;
     try{
       const box=path.getBBox();
       if(box.width<13||box.height<13)return; // Tiny states remain available in the searchable list.
       const marker=document.createElementNS(ns,'text');
       marker.setAttribute('x',String(box.x+box.width/2));
       marker.setAttribute('y',String(box.y+box.height/2));
       marker.setAttribute('text-anchor','middle');
       marker.setAttribute('dominant-baseline','central');
       marker.setAttribute('class','india-tourism-mini-marker');
       marker.setAttribute('aria-hidden','true');
       marker.textContent=item[1];
       layer.appendChild(marker);
     }catch{}
   });
 };
 window.GhoomoTourismSelect=state=>show(state);
 window.GhoomoTourismRefreshLanguage=()=>{if(currentState&&document.querySelector('#ghoomo-tourism-card'))show(currentState,{speak:false});};
 window.addEventListener('ghoomo-language-change',window.GhoomoTourismRefreshLanguage);
})();