GHOOMO — COMPREHENSIVE GREEN TRAVEL DECISION-SUPPORT PWA
========================================================

This consolidated release combines the preserved GHOOMO destination/package interface, carbon comparison and sustainability tools, the Decision Lab, and the expanded multilingual assistant question library. The original destination layout, styling, artwork, navigation and core project scripts remain in the bundle.

FEATURES INCLUDED
-----------------
1. Existing GHOOMO destination discovery and package comparison interface, expanded to 154 destination entries (including the original destinations and 108 new state/UT itinerary entries).
2. New State / Union Territory filter lets travellers narrow destination cards by state/UT; multi-state circuits can appear under each relevant state. All newly added package prices/ratings are prototype examples, not live offers.
3. Rail-versus-flight demo comparisons for ten destination packages, including indicative price, distance, duration and transport-emissions data where available.
4. Illustrative absolute and percentage carbon-savings calculations, comparison bars and rail-preferred recommendations where the demo data supports a comparison.
5. Sustainable travel preferences such as Eco Friendly, Low Carbon, Rail Preferred, Sustainable Tourism, less walking and fewer transfers.
6. Travel Trade-off Explorer: budget, carbon priority, journey-time priority and comfort priority sliders; recommendations update according to demo assumptions.
7. Trust and Evidence Labels: verified from a source, estimated, illustrative demo data, and not available/not confirmed. These labels describe evidence status and must not be interpreted as claims of verification unless a source was actually checked.
8. Group Trip Carbon Challenge: compare individual and group totals, absolute savings and percentage reductions. Example: Golden Triangle demo rail 21 kg and flight 100 kg per traveller gives a hypothetical 79 kg difference; for 100 travellers this is 7,900 kg (7.9 tonnes). Arithmetic illustration only.
9. Inclusive Travel Planner: prompts for less walking, fewer stairs/step-free access, relaxed pacing and family-friendly activities. The tool does not independently verify accessibility.
10. Seasonal Trip Suggestions for a selected month. This is general guidance only, not a live forecast or disruption alert.
11. Multilingual voice companion with 14 language options: English, Hindi, Marathi, Gujarati, Bengali, Tamil, Telugu, Kannada, Malayalam, Sindhi, Urdu, Assamese, Punjabi and Odia. Speech recognition/voices depend on browser and device support. Controls include Speak, slower, normal speed, repeat and stop.
12. Expanded clickable question prompts and demo response logic for carbon savings, rail/flight comparisons, group impact, budget planning, package inclusions, destination-interest matching, sample itineraries, trade-offs, accessibility questions, evidence checks, responsible tourism, seasonal guidance, Andaman data limitations, scenic rail tourism and family/group sustainability.
13. Local experience guidance for regional food, heritage walks, community-led craft and locally owned services. These are general ideas, not verified business endorsements.
14. Andaman rail price and rail-emissions values remain unavailable/N/A rather than being invented or treated as zero.

SUGGESTED QUESTIONS TO TRY
--------------------------
- Which demo destination has the biggest rail carbon saving?
- Compare Golden Triangle rail and flight costs and emissions.
- What if 100 travellers choose rail for the Golden Triangle?
- Which destination is best for a low-carbon trip?
- Plan a five-day trip under ₹25,000.
- How should I compare package inclusions and cancellation terms?
- Suggest a destination for beaches, nature and local culture.
- Create a relaxed five-day sample itinerary.
- How do budget, carbon, time and comfort trade off?
- What should a traveller with less walking ask before booking?
- What should I ask about fewer stairs and step-free access?
- What should I check before trusting a package price or carbon figure?
- Suggest responsible local experiences in India.
- What are good general travel considerations for July or August?
- Why is rail data unavailable for Andaman?
- What are the scenic benefits of train tourism in India?
- How can I make a family or group trip more sustainable?
- Say “slower”, “repeat”, “normal speed”, “switch language” or “stop”.

RUN LOCALLY
-----------
1. Extract this ZIP.
2. Open a terminal in the GHOOMO_Preserved_Interface_PWA folder.
3. Run: python -m http.server 8000
4. Open http://localhost:8000 in Chrome or Edge.
5. Try the destination/package comparison, sustainability preferences, Decision Lab sliders, group simulator and month selector.
6. Open GHOOMO Assistant, click the suggested prompts, type questions, or test microphone access after granting browser permission.
7. Change the language selector and try the speech controls. Recognition and pronunciation quality vary by browser, OS, installed voices and language support.

IMPORTANT LIMITATIONS / HONEST DATA LABELS
------------------------------------------
- This is a prototype. It is not connected to live travel inventory, live fares, a booking API, live weather, operator verification, a live AI model or a live emissions API.
- All package prices and carbon figures in the demo are illustrative. Emissions are not audited scientific route footprints; actual values depend on route, occupancy, class, vehicle, transfers and methodology.
- Journey-time and comfort scores in the Decision Lab are demonstration assumptions, not verified schedules or service ratings.
- The assistant uses predefined browser-side response logic; it is not an unrestricted generative travel agent. Questions outside supported patterns may receive a general fallback.
- Do not present a local business, price, accessibility feature, schedule, or operator as verified without checking a reliable source. Confirm prices, cancellation terms, travel arrangements, weather and access needs with providers before booking.
- The 14 language choices are present, but not every device/browser has suitable speech recognition and text-to-speech voices for every language.

RELEASE CHECKS
--------------
Archive structure, required files and JavaScript syntax should be checked after changes. A successful syntax check is not the same as a complete interactive browser test. Run through the steps above on desktop and mobile before presenting this as a fully tested release.

SINGLE LANGUAGE SELECTOR UPDATE
- Use the single 🌐 language selector in the top navigation. The separate language dropdown was removed from the voice dock; the assistant and page use the same selected language.
- Selecting a language also requests whole-page translation through Google Translate, including page text and newly rendered content where the translation service supports it. This requires an internet connection and the external translation service; translation quality/availability varies by language and content.
- Browser-native speech and speech recognition use the selected language code. Available voices and recognition support depend on the browser, operating system and microphone permissions.
- This remains a prototype: please test every supported language in the target browser/device before production deployment.

UI refinement: Removed redundant per-card “Listen” buttons from itinerary and provider/category cards. The central GHOOMO voice assistant and page speech controls remain available.


INDIA ITINERARY CATALOGUE EXPANSION (16 Oct 2026)
- Added 3 curated itinerary entries for each of the 28 states and 8 union territories (108 new entries).
- Existing destinations retained; state explorer uses each entry’s state field.
- New entries have day-by-day outlines, illustrative demo prices, category tags and individual Wikipedia page-thumbnail lookups.
- Online image thumbnails require internet; article thumbnails must be visually checked before a production launch.
- Itinerary durations, access, permits, opening dates and prices are indicative. Seasonal/high-altitude/pilgrimage routes require official checks before travel.
- This is a prototype catalogue; verify routes, accessibility, imagery and price assumptions before presenting as verified travel advice.


INDIA EXPLORER QUALITY FIX (16 Oct 2026)
- Added visible Option 1: Explore by travel interest, with functional interest filters across India; Option 2: Explore by state or union territory remains available.
- Normalized Jammu & Kashmir / Jammu and Kashmir state labels and destination matching so the legacy Kashmir entry is grouped with the Jammu and Kashmir itineraries rather than treated as a second state.
- The state list remains a single canonical list of 28 states and 8 union territories. The map now draws each state/UT name label once even when the boundary source contains multiple polygon parts.
- Fixed a malformed state-selection button handler.
- Added a second map-boundary source as a fallback if the first GeoJSON URL is unavailable. Map boundaries still require internet access; this environment could not run a live browser/network test.
- Changed duplicate thumbnail page lookups to distinct landmark pages and changed the Madhya Pradesh landing image lookup to Bhedaghat Marble Rocks; MP fallback image keywords now distinguish Khajuraho, Kanha, Ujjain–Omkareshwar and Bhedaghat.
- JavaScript syntax was checked after this patch. Please verify map loading and actual thumbnail relevance in a browser with internet access; different Wikipedia pages can still use similar or unsuitable thumbnails.

India Explorer follow-up fixes (16 October 2026)
- The Explorer applies destination-image resolution to its result cards (previously, those cards kept the generic fallback image).
- Destination thumbnail lookups remain keyed by itinerary slug and point to destination/landmark-specific Wikipedia pages, including the Ayodhya Ram Mandir itinerary, Nalanda, Similipal, Rann of Kutch, Ajanta/Ellora, Konkan coast destinations, Morni Hills, Bangaram Island, and Silvassa/Daman.
- Travel-interest filtering now relies on explicit itinerary tags rather than incidental keyword matches in long descriptions. A trip can appear in multiple interests when its catalogue tags genuinely match both.
- The state dropdown normalizes old spelling variants to the canonical state/UT names.
- The state list is compacted to avoid large blank vertical gaps caused by inherited section styles.
- The interactive regional state guide renders immediately as an offline-capable fallback while boundary GeoJSON is requested. If boundary data cannot load, this guide remains selectable; it is clearly a schematic guide, not a geographic boundary map.
- Live image thumbnails and detailed state boundaries still require internet connectivity. Image titles are curated but each resulting thumbnail has not been visually checked in this offline build environment.


PHOTO AND MAP REVIEW UPDATE (2026-10-16)
- Replaced the misleading fallback photos for Madhya Pradesh, Ajanta/Ellora, Konkan highlights, Jammu & Kashmir, Ladakh, Punjab, and Chandigarh with destination-specific Wikimedia Commons FilePath photographs.
- The changed photo cards point directly to the selected Commons file instead of relying on Wikipedia's page-image API. Photo credits/licensing can be checked through each file's Commons page; this project does not bundle those remote image files. An internet connection is still required to load the photographs.
- If an image cannot load, the card shows a destination-labelled GHOOMO placeholder instead of a photograph of an unrelated place.
- The offline India locator now shows a self-contained schematic India silhouette and interactive regional/state buttons immediately. Remote GeoJSON may replace it with detailed clickable boundaries if that data service is reachable. The schematic is not a geographic boundary map.
