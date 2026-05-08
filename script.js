
const destinations = [
  {
    name:"Kyoto", country:"Japan", continent:"asia", emoji:"⛩️", bg:"#B8D8E8",
    desc:"Ancient temples, bamboo groves, and geisha districts — Japan's cultural heart.",
    tags:["culture","history"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$580",
    fullDesc:"Kyoto served as Japan's imperial capital for over 1,000 years, home to 17 UNESCO World Heritage Sites.",
    currency:"JPY ¥", language:"Japanese", bestTime:"Mar–May & Oct–Nov", climate:"Temperate",
    tickets:[{type:"Flight from Delhi",price:"~$580–900"},{type:"Bullet Train Tokyo–Kyoto",price:"~$100"},{type:"Temple Entry",price:"~$5–10"},{type:"Day Pass Bus",price:"~$6"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Shojin ryori (Buddhist cuisine). Many ramen shops offer veggie options."},{type:"Vegan",dot:"vegan",note:"Vegan-friendly restaurants growing fast. Try vegan kaiseki."},{type:"Non-Veg",dot:"non",note:"World-class sushi, wagyu beef, yakitori, tonkotsu ramen."}],
    attractions:["Fushimi Inari – thousands of torii gates","Arashiyama Bamboo Grove","Gion district – geisha quarters","Kinkaku-ji (Golden Pavilion)","Philosopher's Path"],
    localTips:"Visit temples before 8am. Use the day bus pass (¥600). Rent a bicycle for the northern district.",
    mapX:0.82, mapY:0.32
  },
  {
    name:"Rome", country:"Italy", continent:"europe", emoji:"🏛️", bg:"#F5D9C8",
    desc:"Two thousand years of history at every turn — the world's greatest outdoor museum.",
    tags:["history","culture","food"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$280",
    fullDesc:"Known as the Eternal City, Rome layers Roman Empire ruins, Renaissance masterpieces, Baroque fountains, and vibrant modern life.",
    currency:"EUR €", language:"Italian", bestTime:"Apr–May & Sep–Oct", climate:"Mediterranean",
    tickets:[{type:"Flight from Delhi",price:"~$280–520"},{type:"Colosseum + Forum",price:"~$20"},{type:"Vatican Museums",price:"~$22"},{type:"Metro Day Pass",price:"~$4"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Pasta, pizza, risotto, bruschetta — Italian cuisine is naturally vegetarian-friendly."},{type:"Vegan",dot:"vegan",note:"Many trattorias adapt dishes. Look for 'vegano' labels."},{type:"Non-Veg",dot:"non",note:"Carbonara, Roman lamb, seafood pasta, saltimbocca."}],
    attractions:["The Colosseum and Roman Forum","Vatican Museums & Sistine Chapel","Trevi Fountain","Pantheon (free entry)","Trastevere neighbourhood"],
    localTips:"Book Vatican and Colosseum tickets 2 weeks ahead. Walk everywhere. Drink from public nasoni fountains — safe and free.",
    mapX:0.51, mapY:0.3
  },
  {
    name:"Marrakech", country:"Morocco", continent:"africa", emoji:"🕌", bg:"#F5E6D0",
    desc:"Spice markets, vivid riads, and the iconic Djemaa el-Fna square — pure sensory magic.",
    tags:["culture","food","adventure"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$350",
    fullDesc:"Marrakech's ancient medina is a UNESCO World Heritage Site packed with labyrinthine souks, ornate palaces, and the famous Djemaa el-Fna square.",
    currency:"MAD", language:"Arabic, Berber, French", bestTime:"Mar–May & Oct–Nov", climate:"Semi-arid",
    tickets:[{type:"Flight from Delhi",price:"~$350–600"},{type:"Majorelle Garden",price:"~$7"},{type:"Bahia Palace",price:"~$3"},{type:"Saadian Tombs",price:"~$2"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Tagine, couscous with veg, harira soup — Moroccan cuisine is very veg-friendly."},{type:"Vegan",dot:"vegan",note:"Many traditional dishes are naturally vegan. Ask for 'sans viande'."},{type:"Non-Veg",dot:"non",note:"Lamb tagine, kefta, bastilla, mechoui (slow-roasted lamb)."}],
    attractions:["Djemaa el-Fna square at sunset","Majorelle Garden","Bahia Palace","Leather souk tanneries","Saadian Tombs"],
    localTips:"Bargain at 30–40% of asking price. Hire a guide for the medina. Dress modestly near mosques.",
    mapX:0.45, mapY:0.35
  },
  {
    name:"Bali", country:"Indonesia", continent:"asia", emoji:"🌺", bg:"#D4ECD4",
    desc:"Rice terraces, Hindu ceremonies, surf beaches — deeply spiritual and strikingly beautiful.",
    tags:["beach","culture","adventure"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$300",
    fullDesc:"Bali is unique among Indonesia's 17,000 islands for its Hindu culture, world-class surfing, lush trekking, and extraordinary cuisine.",
    currency:"IDR", language:"Balinese, Indonesian", bestTime:"Apr–Sep (dry)", climate:"Tropical",
    tickets:[{type:"Flight from Delhi",price:"~$300–500"},{type:"Tanah Lot Temple",price:"~$3"},{type:"Mount Batur Trek",price:"~$35"},{type:"Ubud Monkey Forest",price:"~$4"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Nasi goreng, gado-gado, tempeh, tofu dishes everywhere. Ubud has dozens of vegetarian restaurants."},{type:"Vegan",dot:"vegan",note:"Bali is one of Asia's best vegan destinations — acai bowls, raw food cafes."},{type:"Non-Veg",dot:"non",note:"Babi guling (roast pig), satay lilit, grilled fish at Jimbaran Bay."}],
    attractions:["Ubud rice terraces & Monkey Forest","Tanah Lot Temple at sunset","Mount Batur sunrise trek","Seminyak and Kuta Beach","Tirta Empul water temple"],
    localTips:"Rent a scooter. Carry a sarong for temples. Head to Amed or Sidemen for quieter Bali. Eat at warungs.",
    mapX:0.78, mapY:0.5
  },
  {
    name:"New York City", country:"USA", continent:"americas", emoji:"🗽", bg:"#C8D8E8",
    desc:"Energy, diversity, world-class culture — the city that never sleeps.",
    tags:["culture","food","adventure"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$650",
    fullDesc:"Across five boroughs you'll find 800 languages, 26,000 restaurants, the world's greatest museums, and unmatched energy.",
    currency:"USD $", language:"English", bestTime:"Apr–Jun & Sep–Nov", climate:"Humid continental",
    tickets:[{type:"Flight from Delhi",price:"~$650–1100"},{type:"MoMA / Met Museum",price:"~$25"},{type:"Statue of Liberty Ferry",price:"~$24"},{type:"Subway Day Pass",price:"~$9"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"NYC has thousands of vegetarian restaurants. Every cuisine imaginable without meat."},{type:"Vegan",dot:"vegan",note:"One of the world's best cities for vegans — dedicated vegan delis, bakeries, fine dining."},{type:"Non-Veg",dot:"non",note:"NYC pizza, hot dogs, pastrami, bagels with lox, Buffalo wings, steakhouses."}],
    attractions:["Central Park","The Metropolitan Museum of Art","Brooklyn Bridge walk","The High Line","Times Square & Broadway"],
    localTips:"Buy OMNY card for subway. Best Manhattan views are from Brooklyn. Staten Island Ferry is free.",
    mapX:0.22, mapY:0.3
  },
  {
    name:"Cape Town", country:"South Africa", continent:"africa", emoji:"🦁", bg:"#E8DDD0",
    desc:"Table Mountain, world-class wines, penguins — one of Earth's most dramatic coastlines.",
    tags:["adventure","culture","beach"], food:{veg:true,vegan:false,non:true}, ticketFrom:"$480",
    fullDesc:"Cape Town sits at the confluence of two oceans at the foot of Table Mountain, rich in history from indigenous Khoisan to the apartheid era.",
    currency:"ZAR", language:"Afrikaans, English, Xhosa", bestTime:"Nov–Mar", climate:"Mediterranean",
    tickets:[{type:"Flight from Delhi",price:"~$480–800"},{type:"Table Mountain Cable Car",price:"~$18"},{type:"Robben Island Tour",price:"~$20"},{type:"Boulders Beach Penguins",price:"~$6"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Cape Town has a growing vegetarian scene, especially in the V&A Waterfront."},{type:"Vegan",dot:"vegan",note:"Several dedicated vegan cafes in the City Bowl."},{type:"Non-Veg",dot:"non",note:"Braai (BBQ), boerewors, peri-peri chicken, fresh Cape seafood."}],
    attractions:["Table Mountain cable car or hike","Robben Island (Nelson Mandela's prison)","Boulders Beach penguin colony","Cape of Good Hope","V&A Waterfront"],
    localTips:"Rent a car for the Cape Peninsula. Book Robben Island in advance — it sells out.",
    mapX:0.52, mapY:0.65
  },
  {
    name:"Paris", country:"France", continent:"europe", emoji:"🗼", bg:"#E8E0F0",
    desc:"Art, romance, fashion, and the finest food — Paris is perpetually iconic.",
    tags:["culture","food","history"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$290",
    fullDesc:"The City of Light has captivated artists, philosophers, and romantics for centuries, from the Louvre to legendary café culture.",
    currency:"EUR €", language:"French", bestTime:"Apr–Jun & Sep–Oct", climate:"Oceanic",
    tickets:[{type:"Flight from Delhi",price:"~$290–550"},{type:"Louvre Museum",price:"~$20"},{type:"Eiffel Tower (summit)",price:"~$30"},{type:"Versailles Day Trip",price:"~$22"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Crêpes, ratatouille, quiche. Paris has excellent vegetarian restaurants."},{type:"Vegan",dot:"vegan",note:"Paris vegan scene has grown dramatically — dedicated vegan bistros in Le Marais."},{type:"Non-Veg",dot:"non",note:"Steak frites, croissant with ham, French onion soup, duck confit, escargot."}],
    attractions:["The Louvre (book weeks ahead)","Eiffel Tower at night","Musée d'Orsay – Impressionists","Montmartre & Sacré-Cœur","Versailles day trip"],
    localTips:"Paris Museum Pass offers great value. Learn a few French phrases. Metro is fast and cheap.",
    mapX:0.5, mapY:0.27
  },
  {
    name:"Machu Picchu", country:"Peru", continent:"americas", emoji:"🏔️", bg:"#D4E8D0",
    desc:"The Lost City of the Incas — impossibly perched in Andean cloud forest.",
    tags:["adventure","history","culture"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$750",
    fullDesc:"Built by the Inca Empire in the 15th century, Machu Picchu sits 2,430 metres above sea level amid dramatic mountain scenery.",
    currency:"PEN", language:"Spanish, Quechua", bestTime:"May–Sep (dry)", climate:"Sub-tropical highland",
    tickets:[{type:"Flight from Delhi",price:"~$750–1200"},{type:"Machu Picchu Entry",price:"~$30–55"},{type:"Train Cusco–Aguas Calientes",price:"~$70"},{type:"Huayna Picchu Climb",price:"~$15 extra"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Quinoa soup, causa, choclo corn, vegetable ceviche — strong vegetarian options."},{type:"Vegan",dot:"vegan",note:"Cusco and Lima have dedicated vegan restaurants. Traditional markets offer vegan staples."},{type:"Non-Veg",dot:"non",note:"Ceviche, lomo saltado, anticuchos, guinea pig (cuy)."}],
    attractions:["Citadel at sunrise","Inti Punku – Sun Gate hike","Huayna Picchu climb","Temple of the Sun","Intihuatana stone"],
    localTips:"Book entry months ahead — daily visitors are capped. Acclimatise in Cusco 2–3 days. Inca Trail permit: book 6+ months ahead.",
    mapX:0.24, mapY:0.53
  },
  {
    name:"Sydney", country:"Australia", continent:"oceania", emoji:"🦘", bg:"#DDEEF5",
    desc:"Iconic harbour, world-famous beaches, and a relaxed outdoor lifestyle.",
    tags:["beach","culture","adventure"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$450",
    fullDesc:"Draped around a vast harbour, Sydney's Opera House and Harbour Bridge are global icons, with 100+ beaches and coastal lifestyle.",
    currency:"AUD $", language:"English", bestTime:"Sep–Nov & Mar–May", climate:"Oceanic",
    tickets:[{type:"Flight from Delhi",price:"~$450–750"},{type:"Opera House Tour",price:"~$40"},{type:"Harbour Bridge Climb",price:"~$170"},{type:"Opal Card (7-day)",price:"~$45"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Sydney café culture is very vegetarian-friendly. Brunch spots offer huge veggie menus."},{type:"Vegan",dot:"vegan",note:"One of the world's top vegan cities — Newtown and Surry Hills have dozens of vegan spots."},{type:"Non-Veg",dot:"non",note:"Barramundi fish, meat pies, BBQ, kangaroo in some restaurants."}],
    attractions:["Sydney Opera House tour","Harbour Bridge climb","Bondi–Coogee coastal walk","Royal Botanic Garden","Blue Mountains day trip"],
    localTips:"Opal card for all transport. Bondi to Coogee walk is free and spectacular. Apply sunscreen — UV is intense.",
    mapX:0.85, mapY:0.65
  },
  {
    name:"Istanbul", country:"Turkey", continent:"europe", emoji:"🕍", bg:"#F0DDD0",
    desc:"Where East meets West — ancient bazaars, Ottoman mosques, and Byzantine splendour.",
    tags:["history","culture","food"], food:{veg:true,vegan:false,non:true}, ticketFrom:"$200",
    fullDesc:"Istanbul spans two continents. For nearly 1,700 years it served as capital of three empires — Roman, Byzantine, and Ottoman.",
    currency:"TRY", language:"Turkish", bestTime:"Apr–May & Sep–Oct", climate:"Oceanic/Semi-arid",
    tickets:[{type:"Flight from Delhi",price:"~$200–400"},{type:"Hagia Sophia",price:"Free"},{type:"Topkapı Palace",price:"~$18"},{type:"Grand Bazaar",price:"Free to enter"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Lentil soup, meze platters, gözleme, börek, falafel — excellent options."},{type:"Vegan",dot:"vegan",note:"Turkish breakfast and meze culture has many naturally vegan dishes."},{type:"Non-Veg",dot:"non",note:"Kebabs (doner, shish, adana), köfte, grilled fish by the Bosphorus."}],
    attractions:["Hagia Sophia","Topkapı Palace","Grand Bazaar","Blue Mosque","Bosphorus sunset cruise"],
    localTips:"Get Istanbulkart for transport. Take the ferry to the Asian side. Cover up in mosques.",
    mapX:0.56, mapY:0.3
  },
  {
    name:"Rajasthan", country:"India", continent:"asia", emoji:"🐪", bg:"#F5ECD0",
    desc:"Maharaja palaces, desert landscapes, and the richest cultural heritage in India.",
    tags:["culture","history","adventure"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$0",
    fullDesc:"Rajasthan — 'Land of Kings' — features spectacular palaces and fortresses across the Thar Desert.",
    currency:"INR ₹", language:"Hindi, Rajasthani", bestTime:"Oct–Mar", climate:"Semi-arid/Desert",
    tickets:[{type:"Internal Flight to Jaipur",price:"~$30–80"},{type:"Amber Fort",price:"~$8"},{type:"Mehrangarh Fort",price:"~$7"},{type:"Jaisalmer Camel Safari",price:"~$20–40"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Dal baati churma, gatte ki sabzi, ker sangri — Rajasthan is one of India's most vegetarian regions."},{type:"Vegan",dot:"vegan",note:"Most Rajasthani street food is naturally vegan. Avoid ghee-heavy dishes."},{type:"Non-Veg",dot:"non",note:"Laal maas (spicy mutton curry), chicken preparations, game meat."}],
    attractions:["Amber Fort, Jaipur","Mehrangarh Fort, Jodhpur","Jaisalmer Desert Camp & camel safari","City Palace, Udaipur","Ranthambore tiger safari"],
    localTips:"Book Oct–Feb accommodation early. Agree on auto prices first. Rajasthani thali is a must.",
    mapX:0.63, mapY:0.37
  },
  {
    name:"Santorini", country:"Greece", continent:"europe", emoji:"🏖️", bg:"#D0E8F5",
    desc:"Whitewashed villages on volcanic cliffs above a stunning caldera — the Mediterranean dream.",
    tags:["beach","culture","food"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$320",
    fullDesc:"Santorini is the remnant of a massive volcanic eruption 3,600 years ago, now topped with iconic blue-domed churches and fine Assyrtiko wines.",
    currency:"EUR €", language:"Greek", bestTime:"May–Jun & Sep–Oct", climate:"Mediterranean",
    tickets:[{type:"Flight from Delhi",price:"~$320–600"},{type:"Akrotiri Ruins",price:"~$15"},{type:"Wine Tasting Tour",price:"~$30"},{type:"Caldera Boat Tour",price:"~$35"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Greek salad, spanakopita, dolmades, fava dip — Greek cuisine is very veg-friendly."},{type:"Vegan",dot:"vegan",note:"Orthodox fasting traditions mean many Greek dishes are naturally vegan. Ask for 'nistisimo'."},{type:"Non-Veg",dot:"non",note:"Lamb chops, grilled octopus, moussaka, souvlaki."}],
    attractions:["Oia village and sunset viewpoint","Ancient Akrotiri ruins","Red Beach & White Beach","Wine tasting in Pyrgos","Caldera boat tours"],
    localTips:"Visit May or September. Hire an ATV for remote beaches. Arrive at Oia by 3pm for sunset. Try tomatokeftedes.",
    mapX:0.55, mapY:0.31
  },
  {
    name:"Maldives", country:"Maldives", continent:"asia", emoji:"🐠", bg:"#A8E6CF",
    desc:"Crystal-clear lagoons, overwater bungalows, and the world's finest coral reefs.",
    tags:["beach","nature"], food:{veg:true,vegan:false,non:true}, ticketFrom:"$400",
    fullDesc:"1,200 islands of white sand and turquoise water — the Maldives is the ultimate beach escape with the planet's richest marine life.",
    currency:"MVR", language:"Dhivehi", bestTime:"Nov–Apr (dry)", climate:"Tropical",
    tickets:[{type:"Flight from Delhi",price:"~$400–700"},{type:"Speedboat to Resort",price:"~$30–100"},{type:"Snorkeling/Diving Day Trip",price:"~$40–80"},{type:"Whale Shark Tour",price:"~$80"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Resort islands have excellent vegetarian menus. Local islands have limited veg options."},{type:"Vegan",dot:"vegan",note:"Major resorts accommodate vegans well. Request in advance on local islands."},{type:"Non-Veg",dot:"non",note:"Fresh tuna, lobster, octopus curry — seafood is king in the Maldives."}],
    attractions:["Snorkeling the house reef","Whale shark & manta ray spotting","Sunset dolphin cruise","Male city day trip","Sandbank picnics"],
    localTips:"Book resorts 3–6 months ahead. Local islands are far cheaper. Bring reef-safe sunscreen. Alcohol only on resort islands.",
    mapX:0.68, mapY:0.46
  },
  {
    name:"Barcelona", country:"Spain", continent:"europe", emoji:"🏟️", bg:"#FFE5B4",
    desc:"Gaudí's fantastical architecture, tapas bars, beaches, and fiery Catalan spirit.",
    tags:["culture","food","beach"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$270",
    fullDesc:"Barcelona blends medieval Gothic Quarter with Art Nouveau masterpieces by Gaudí, world-class food markets, and a city beach.",
    currency:"EUR €", language:"Catalan, Spanish", bestTime:"May–Jun & Sep–Oct", climate:"Mediterranean",
    tickets:[{type:"Flight from Delhi",price:"~$270–500"},{type:"Sagrada Família",price:"~$30"},{type:"Park Güell",price:"~$14"},{type:"Metro Day Pass",price:"~$12"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Pan amb tomàquet, escalivada, patatas bravas, veggie paella — adapts well."},{type:"Vegan",dot:"vegan",note:"Growing vegan scene in Eixample district. Many tapas bars can go vegan."},{type:"Non-Veg",dot:"non",note:"Jamón ibérico, seafood paella, anchovies, chorizo, patatas bravas."}],
    attractions:["Sagrada Família (book 4 weeks ahead)","Park Güell","La Boqueria market","Gothic Quarter","Casa Batlló"],
    localTips:"Book Gaudí sites well ahead — they sell out. Use T-casual metro card. Dinner in Spain is after 9pm.",
    mapX:0.49, mapY:0.29
  },
  {
    name:"Dubai", country:"UAE", continent:"middle-east", emoji:"🌆", bg:"#F5E6D0",
    desc:"Futuristic skyline, luxury malls, desert safaris, and world records at every turn.",
    tags:["culture","adventure","food"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$150",
    fullDesc:"Dubai transformed from fishing village to global megacity in 50 years — from the world's tallest building to gold souks.",
    currency:"AED", language:"Arabic, English", bestTime:"Nov–Mar", climate:"Desert",
    tickets:[{type:"Flight from Delhi",price:"~$150–350"},{type:"Burj Khalifa (At the Top)",price:"~$35"},{type:"Desert Safari",price:"~$60"},{type:"Dubai Frame",price:"~$14"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Excellent Indian vegetarian restaurants throughout Dubai. Shawarma, falafel, hummus widely available."},{type:"Vegan",dot:"vegan",note:"Strong vegan café scene. Many Lebanese and Mediterranean restaurants are vegan-friendly."},{type:"Non-Veg",dot:"non",note:"Shawarma, grilled meats, Arabic mezze, fresh seafood, Indian cuisines."}],
    attractions:["Burj Khalifa observation deck","Dubai Creek Gold & Spice Souks","Desert dune bashing safari","Palm Jumeirah & Atlantis","Old Dubai – Al Fahidi district"],
    localTips:"Visit Nov–Mar. Dress modestly in souks and mosques. Metro is cheap and efficient. Bargain in souks!",
    mapX:0.62, mapY:0.37
  },
  {
    name:"Bangkok", country:"Thailand", continent:"asia", emoji:"🛕", bg:"#FFD9B3",
    desc:"Ornate temples, chaotic street markets, world-class street food, and electrifying nightlife.",
    tags:["culture","food","adventure"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$250",
    fullDesc:"Bangkok's 10 million people and thousands of years of history create extraordinary contrasts — golden temples beside floating markets and neon-lit streets.",
    currency:"THB ฿", language:"Thai", bestTime:"Nov–Feb", climate:"Tropical",
    tickets:[{type:"Flight from Delhi",price:"~$250–450"},{type:"Grand Palace",price:"~$15"},{type:"Floating Market Tour",price:"~$20"},{type:"BTS SkyTrain Day Pass",price:"~$5"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"'Jay' (เจ) restaurants are 100% vegetarian — look for yellow flags. Pad thai, curry with tofu easily adapted."},{type:"Vegan",dot:"vegan",note:"Jay restaurants are vegan. Bangkok has an exploding vegan café scene."},{type:"Non-Veg",dot:"non",note:"Pad thai, green curry, papaya salad, mango sticky rice, khao man gai, tom yum."}],
    attractions:["Grand Palace & Wat Phra Kaew","Wat Pho – Reclining Buddha","Chatuchak Weekend Market","Chao Phraya river cruise","Khao San Road"],
    localTips:"Use BTS SkyTrain — traffic is brutal. Dress modestly at temples. Eat on the street for authentic food.",
    mapX:0.73, mapY:0.43
  },
  {
    name:"Cairo", country:"Egypt", continent:"africa", emoji:"🏺", bg:"#F5E6C8",
    desc:"The Great Pyramids, the Nile, and 5,000 years of civilization — raw and overwhelming history.",
    tags:["history","culture","adventure"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$280",
    fullDesc:"Cairo is home to the only surviving Wonder of the Ancient World. The city's energy, Islamic architecture, and proximity to Luxor make it unmissable.",
    currency:"EGP", language:"Arabic", bestTime:"Oct–Apr", climate:"Desert",
    tickets:[{type:"Flight from Delhi",price:"~$280–500"},{type:"Pyramids of Giza + Sphinx",price:"~$15"},{type:"Egyptian Museum",price:"~$10"},{type:"Felucca Nile Ride",price:"~$5"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Ful medames, koshari, ta'ameya (falafel), molokhia — Egyptian cuisine is very veg-friendly."},{type:"Vegan",dot:"vegan",note:"Koshari (rice, lentils, pasta) is a perfect vegan meal. Much street food is naturally vegan."},{type:"Non-Veg",dot:"non",note:"Kofta, kebabs, shawarma, grilled pigeon, fish along the Nile."}],
    attractions:["Pyramids of Giza & the Sphinx","Egyptian Museum (Tutankhamun)","Khan el-Khalili bazaar","Islamic Cairo & Al-Azhar Mosque","Luxor day trip"],
    localTips:"Hire a local guide for pyramids. Negotiate camel rides upfront. Drink bottled water only. Dress conservatively.",
    mapX:0.57, mapY:0.37
  },
  {
    name:"Lisbon", country:"Portugal", continent:"europe", emoji:"🎵", bg:"#FFC8A0",
    desc:"Fado music, tram rides, coastal views — Europe's sunniest capital at a fraction of the price.",
    tags:["culture","food","history"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$290",
    fullDesc:"Lisbon cascades down seven hills to the Tagus River with 300 days of sunshine, combining Moorish heritage and Age of Exploration history.",
    currency:"EUR €", language:"Portuguese", bestTime:"Mar–May & Sep–Oct", climate:"Mediterranean",
    tickets:[{type:"Flight from Delhi",price:"~$290–550"},{type:"Sintra Palace Day Trip",price:"~$30"},{type:"Belém Tower",price:"~$8"},{type:"Tram 28 Ticket",price:"~$4"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Caldo verde soup, piri piri vegetables, Pastéis de Belém (egg tarts). Growing plant-based scene."},{type:"Vegan",dot:"vegan",note:"Excellent vegan cafes especially in Mouraria and Bairro Alto."},{type:"Non-Veg",dot:"non",note:"Pastéis de bacalhau (salt cod), piri-piri chicken, grilled sardines, bifanas."}],
    attractions:["Belém Tower & Jerónimos Monastery","Alfama district & São Jorge Castle","Tram 28 ride","Sintra fairytale palaces","Pastéis de Belém bakery"],
    localTips:"Lisbon is very affordable by European standards. Hills are steep — wear comfy shoes. Tram 28 is an attraction itself.",
    mapX:0.46, mapY:0.3
  },
  {
    name:"Seoul", country:"South Korea", continent:"asia", emoji:"🏙️", bg:"#E8C8D8",
    desc:"K-pop culture, ancient palaces, cutting-edge technology, and incredible street food.",
    tags:["culture","food","adventure"], food:{veg:true,vegan:false,non:true}, ticketFrom:"$400",
    fullDesc:"Seoul balances 600-year-old royal palaces with hypermodern skyscrapers. Home to Samsung, BTS, and some of Asia's most exciting food.",
    currency:"KRW ₩", language:"Korean", bestTime:"Apr–May & Sep–Oct", climate:"Continental",
    tickets:[{type:"Flight from Delhi",price:"~$400–700"},{type:"Gyeongbokgung Palace",price:"~$4"},{type:"N Seoul Tower",price:"~$11"},{type:"T-money Subway Card",price:"~$3 + load"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Bibimbap (ask without meat), japchae, tteokbokki — many street foods can be made vegetarian."},{type:"Vegan",dot:"vegan",note:"Temple food (사찰음식) is naturally vegan. Growing vegan café scene in Insadong."},{type:"Non-Veg",dot:"non",note:"Korean BBQ (samgyeopsal, galbi), fried chicken, bibimbap with beef, dakgalbi."}],
    attractions:["Gyeongbokgung Palace in hanbok","Bukchon Hanok Village","N Seoul Tower & locks","Insadong cultural street","DMZ tour"],
    localTips:"Seoul is one of Asia's safest cities. Jimjilbang (24hr bathhouse ~$10) is an essential cultural experience.",
    mapX:0.81, mapY:0.3
  },
  {
    name:"Petra", country:"Jordan", continent:"middle-east", emoji:"🪆", bg:"#F5D8C0",
    desc:"The Rose City — a Nabataean city carved entirely into rose-red sandstone cliffs.",
    tags:["history","adventure","culture"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$350",
    fullDesc:"Hidden behind an enormous wall of rock, Petra was the capital of the Nabataean Kingdom over 2,000 years ago.",
    currency:"JOD", language:"Arabic", bestTime:"Mar–May & Sep–Nov", climate:"Desert",
    tickets:[{type:"Flight from Delhi",price:"~$350–600"},{type:"Petra 1-day Entry",price:"~$60"},{type:"Petra 2-day Entry",price:"~$75"},{type:"Wadi Rum Jeep Tour",price:"~$40"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Falafel, hummus, fattoush, mujaddara — excellent options."},{type:"Vegan",dot:"vegan",note:"Jordanian mezze is largely vegan — ful, hummus, mutabbal, tabouleh."},{type:"Non-Veg",dot:"non",note:"Mansaf (lamb in yogurt sauce), maqluba, grilled meats, zarb (Bedouin BBQ in Wadi Rum)."}],
    attractions:["The Siq canyon walk to The Treasury","The Monastery – 800 steps","Roman colonnaded street","Little Petra","Wadi Rum desert camp"],
    localTips:"Start walking by 7am before tour groups arrive. Combine with Wadi Rum overnight for magical experience.",
    mapX:0.59, mapY:0.36
  },
  {
    name:"Iceland", country:"Iceland", continent:"europe", emoji:"🌋", bg:"#C8E8F8",
    desc:"Northern Lights, geysers, waterfalls, volcanoes — nature's most dramatic show.",
    tags:["nature","adventure"], food:{veg:true,vegan:true,non:true}, ticketFrom:"$400",
    fullDesc:"Iceland sits on the Mid-Atlantic Ridge — a geologically hyperactive island of volcanoes, geysers, glaciers, and the midnight sun.",
    currency:"ISK", language:"Icelandic", bestTime:"Jun–Aug (midnight sun) or Sep–Feb (Northern Lights)", climate:"Subarctic",
    tickets:[{type:"Flight from Delhi",price:"~$400–750"},{type:"Blue Lagoon (book ahead!)",price:"~$60–100"},{type:"Northern Lights Tour",price:"~$60"},{type:"Ring Road Car Rental/day",price:"~$80"}],
    foodDetail:[{type:"Vegetarian",dot:"veg",note:"Skyr, rye bread, mushroom soup, Reykjavík cafes have strong vegetarian menus."},{type:"Vegan",dot:"vegan",note:"Reykjavík has dedicated vegan restaurants. Oat milk widely available."},{type:"Non-Veg",dot:"non",note:"Lamb soup, arctic char, langoustine, fermented shark (hákarl — for the brave)."}],
    attractions:["Golden Circle: Geysir, Gullfoss, Þingvellir","Blue Lagoon","Skógafoss & Seljalandsfoss waterfalls","Vatnajökull glacier walk","Westfjords whale watching"],
    localTips:"Book Blue Lagoon online — it sells out. Weather changes in minutes — pack layers. Midnight sun in June–July is disorienting; bring an eye mask.",
    mapX:0.43, mapY:0.18
  }
];


const currencies = {
  USD:{name:"US Dollar",symbol:"$",rate:1},
  EUR:{name:"Euro",symbol:"€",rate:.92},
  GBP:{name:"British Pound",symbol:"£",rate:.79},
  INR:{name:"Indian Rupee",symbol:"₹",rate:83.5},
  JPY:{name:"Japanese Yen",symbol:"¥",rate:149.5},
  AUD:{name:"Australian Dollar",symbol:"A$",rate:1.52},
  CAD:{name:"Canadian Dollar",symbol:"C$",rate:1.35},
  CHF:{name:"Swiss Franc",symbol:"Fr",rate:.88},
  CNY:{name:"Chinese Yuan",symbol:"¥",rate:7.2},
  SGD:{name:"Singapore Dollar",symbol:"S$",rate:1.34},
  THB:{name:"Thai Baht",symbol:"฿",rate:35.5},
  MYR:{name:"Malaysian Ringgit",symbol:"RM",rate:4.6},
  IDR:{name:"Indonesian Rupiah",symbol:"Rp",rate:15800},
  KRW:{name:"South Korean Won",symbol:"₩",rate:1330},
  AED:{name:"UAE Dirham",symbol:"د.إ",rate:3.67},
  TRY:{name:"Turkish Lira",symbol:"₺",rate:31},
  EGP:{name:"Egyptian Pound",symbol:"£",rate:47},
  ZAR:{name:"South African Rand",symbol:"R",rate:18.5},
  MAD:{name:"Moroccan Dirham",symbol:"MAD",rate:10},
  BRL:{name:"Brazilian Real",symbol:"R$",rate:5},
  MXN:{name:"Mexican Peso",symbol:"$",rate:17},
  JPY:{name:"Japanese Yen",symbol:"¥",rate:149.5},
  NZD:{name:"New Zealand Dollar",symbol:"NZ$",rate:1.62},
  HKD:{name:"Hong Kong Dollar",symbol:"HK$",rate:7.82},
  PKR:{name:"Pakistani Rupee",symbol:"₨",rate:278},
  BDT:{name:"Bangladeshi Taka",symbol:"৳",rate:110},
  NOK:{name:"Norwegian Krone",symbol:"kr",rate:10.5},
  SEK:{name:"Swedish Krona",symbol:"kr",rate:10.4},
  PLN:{name:"Polish Zloty",symbol:"zł",rate:4},
  CZK:{name:"Czech Koruna",symbol:"Kč",rate:23},
  MVR:{name:"Maldivian Rufiyaa",symbol:"Rf",rate:15.4},
  JOD:{name:"Jordanian Dinar",symbol:"JD",rate:.71},
  ISK:{name:"Icelandic Krona",symbol:"kr",rate:138},
  SAR:{name:"Saudi Riyal",symbol:"﷼",rate:3.75},
  QAR:{name:"Qatari Riyal",symbol:"﷼",rate:3.64},
  PEN:{name:"Peruvian Sol",symbol:"S/.",rate:3.7},
  ILS:{name:"Israeli Shekel",symbol:"₪",rate:3.7},
  LKR:{name:"Sri Lankan Rupee",symbol:"Rs",rate:310},
  NPR:{name:"Nepali Rupee",symbol:"₨",rate:133},
};


const languages = {
  en:{name:"🇬🇧 English"}, hi:{name:"🇮🇳 Hindi"}, es:{name:"🇪🇸 Spanish"},
  fr:{name:"🇫🇷 French"}, de:{name:"🇩🇪 German"}, it:{name:"🇮🇹 Italian"},
  pt:{name:"🇵🇹 Portuguese"}, ja:{name:"🇯🇵 Japanese"}, ko:{name:"🇰🇷 Korean"},
  zh:{name:"🇨🇳 Chinese (Mandarin)"}, ar:{name:"🇸🇦 Arabic"}, tr:{name:"🇹🇷 Turkish"},
  th:{name:"🇹🇭 Thai"}, id:{name:"🇮🇩 Indonesian"}, nl:{name:"🇳🇱 Dutch"},
  pl:{name:"🇵🇱 Polish"}, sv:{name:"🇸🇪 Swedish"}, el:{name:"🇬🇷 Greek"},
  cs:{name:"🇨🇿 Czech"}, ru:{name:"🇷🇺 Russian"}, he:{name:"🇮🇱 Hebrew"},
  vi:{name:"🇻🇳 Vietnamese"},
};

const phrases = {
  hello:{en:"Hello!",hi:"नमस्ते!",es:"¡Hola!",fr:"Bonjour!",de:"Hallo!",it:"Ciao!",pt:"Olá!",ja:"こんにちは",ko:"안녕하세요",zh:"你好",ar:"مرحبا",tr:"Merhaba!",th:"สวัสดีครับ",id:"Halo!",nl:"Hallo!",pl:"Cześć!",sv:"Hej!",el:"Γεια σας!",cs:"Ahoj!",ru:"Привет!",he:"שלום!",vi:"Xin chào!"},
  thankyou:{en:"Thank you",hi:"धन्यवाद",es:"Gracias",fr:"Merci",de:"Danke",it:"Grazie",pt:"Obrigado",ja:"ありがとう",ko:"감사합니다",zh:"谢谢",ar:"شكرا",tr:"Teşekkürler",th:"ขอบคุณ",id:"Terima kasih",nl:"Dank je",pl:"Dziękuję",sv:"Tack",el:"Ευχαριστώ",cs:"Děkuji",ru:"Спасибо",he:"תודה",vi:"Cảm ơn"},
  howmuch:{en:"How much does this cost?",hi:"यह कितने का है?",es:"¿Cuánto cuesta esto?",fr:"Combien ça coûte?",de:"Wie viel kostet das?",it:"Quanto costa?",pt:"Quanto custa?",ja:"これはいくらですか?",ko:"이거 얼마예요?",zh:"这个多少钱?",ar:"كم ثمن هذا؟",tr:"Bu ne kadar?",th:"ราคาเท่าไหร่",id:"Berapa harganya?",nl:"Hoeveel kost dit?",pl:"Ile to kosztuje?",sv:"Hur mycket kostar det?",el:"Πόσο κοστίζει;",cs:"Kolik to stojí?",ru:"Сколько это стоит?",he:"כמה זה עולה?",vi:"Cái này giá bao nhiêu?"},
  help:{en:"Please help me",hi:"कृपया मेरी सहायता करें",es:"Por favor ayúdame",fr:"Aidez-moi s'il vous plaît",de:"Bitte helfen Sie mir",it:"Aiutami per favore",pt:"Por favor me ajude",ja:"助けてください",ko:"도와주세요",zh:"请帮帮我",ar:"الرجاء مساعدتي",tr:"Lütfen yardım edin",th:"ช่วยฉันด้วย",id:"Tolong bantu saya",nl:"Help me alsjeblieft",pl:"Proszę pomóż mi",sv:"Hjälp mig",el:"Βοηθήστε με",cs:"Prosím pomozte mi",ru:"Помогите мне",he:"תעזור לי",vi:"Xin hãy giúp tôi"},
  vegetarian:{en:"I am vegetarian",hi:"मैं शाकाहारी हूं",es:"Soy vegetariano",fr:"Je suis végétarien",de:"Ich bin Vegetarier",it:"Sono vegetariano",pt:"Sou vegetariano",ja:"私はベジタリアンです",ko:"저는 채식주의자입니다",zh:"我是素食者",ar:"أنا نباتي",tr:"Vejetaryenim",th:"ฉันเป็นมังสวิรัติ",id:"Saya vegetarian",nl:"Ik ben vegetariër",pl:"Jestem wegetarianinem",sv:"Jag är vegetarian",el:"Είμαι χορτοφάγος",cs:"Jsem vegetarián",ru:"Я вегетарианец",he:"אני צמחוני",vi:"Tôi ăn chay"},
  where:{en:"Where is the toilet?",hi:"शौचालय कहाँ है?",es:"¿Dónde está el baño?",fr:"Où sont les toilettes?",de:"Wo ist die Toilette?",it:"Dov'è il bagno?",pt:"Onde fica o banheiro?",ja:"トイレはどこですか?",ko:"화장실이 어디예요?",zh:"洗手间在哪里?",ar:"أين الحمام؟",tr:"Tuvalet nerede?",th:"ห้องน้ำอยู่ที่ไหน",id:"Di mana toiletnya?",nl:"Waar is het toilet?",pl:"Gdzie jest toaleta?",sv:"Var är toaletten?",el:"Πού είναι η τουαλέτα;",cs:"Kde je záchod?",ru:"Где туалет?",he:"איפה השירותים?",vi:"Nhà vệ sinh ở đâu?"},
  water:{en:"Can I have water?",hi:"क्या मुझे पानी मिल सकता है?",es:"¿Me da agua?",fr:"De l'eau s'il vous plaît",de:"Wasser bitte",it:"Acqua per favore",pt:"Água por favor",ja:"水をください",ko:"물 주세요",zh:"请给我水",ar:"الماء من فضلك",tr:"Su lütfen",th:"ขอน้ำได้ไหม",id:"Minta air",nl:"Water graag",pl:"Poproszę wodę",sv:"Vatten tack",el:"Νερό παρακαλώ",cs:"Vodu prosím",ru:"Воду пожалуйста",he:"מים בבקשה",vi:"Cho tôi nước"},
};

const phraseLabels = {
  hello:"👋 Hello", thankyou:"🙏 Thank You", howmuch:"💰 How much?",
  help:"🆘 Help me", vegetarian:"🥗 I'm vegetarian",
  where:"🚽 Where is toilet?", water:"💧 Water please"
};


let currentFilter = 'all';
let currentFoodFilter = null;
let dartCount = 0;
let dartHighlight = null;
let plannerState = { destIdx: null, days: 5, hotel: 80, food: 30, activities: 200, foodPref: 'all', styles: ['culture','food'] };


function switchTool(panel, btn) {
  document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tool-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-' + panel).classList.add('active');
  btn.classList.add('active');
  if (panel === 'dart') initDartMap();
}


function initCurrency() {
  const selFrom = document.getElementById('cur-from');
  const selTo = document.getElementById('cur-to');
  Object.entries(currencies).forEach(([code, c]) => {
    const opt1 = `<option value="${code}" ${code==='USD'?'selected':''}>${c.symbol} ${code} – ${c.name}</option>`;
    const opt2 = `<option value="${code}" ${code==='INR'?'selected':''}>${c.symbol} ${code} – ${c.name}</option>`;
    selFrom.innerHTML += opt1;
    selTo.innerHTML += opt2;
  });
  convertCurrency();
}

function convertCurrency() {
  const amount = parseFloat(document.getElementById('cur-amount').value) || 0;
  const from = document.getElementById('cur-from').value;
  const to = document.getElementById('cur-to').value;
  const inUSD = amount / currencies[from].rate;
  const result = inUSD * currencies[to].rate;
  const sym = currencies[to].symbol;
  document.getElementById('cur-result').textContent = `${sym} ${result.toLocaleString('en', {maximumFractionDigits:2})}`;
  document.getElementById('cur-label').textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
  const qr = document.getElementById('quick-rates');
  qr.innerHTML = '';
  [1, 5, 10, 20, 50, 100, 200, 500, 1000].forEach(amt => {
    const r = ((amt / currencies[from].rate) * currencies[to].rate).toFixed(2);
    qr.innerHTML += `<div class="rate-chip"><div class="from">${amt} ${from}</div><div class="to">= ${sym}${r}</div></div>`;
  });
}

function swapCurrencies() {
  const f = document.getElementById('cur-from');
  const t = document.getElementById('cur-to');
  [f.value, t.value] = [t.value, f.value];
  convertCurrency();
}


function initTranslator() {
  const sel = document.getElementById('lang-to');
  Object.entries(languages).forEach(([code, l]) => {
    sel.innerHTML += `<option value="${code}" ${code==='ja'?'selected':''}>${l.name}</option>`;
  });
  const pp = document.getElementById('phrase-pills');
  Object.entries(phraseLabels).forEach(([key, label]) => {
    const btn = document.createElement('button');
    btn.className = 'phrase-pill';
    btn.textContent = label;
    btn.onclick = () => {
      document.getElementById('trans-input').value = phrases[key]['en'];
      doTranslate();
    };
    pp.appendChild(btn);
  });
}

function doTranslate() {
  const text = document.getElementById('trans-input').value.trim();
  const toLang = document.getElementById('lang-to').value;
  if (!text) { document.getElementById('trans-output').value = ''; return; }
  for (const [key, phraseMap] of Object.entries(phrases)) {
    if (phraseMap['en'].toLowerCase() === text.toLowerCase() && phraseMap[toLang]) {
      document.getElementById('trans-output').value = phraseMap[toLang];
      return;
    }
  }
  for (const [key, phraseMap] of Object.entries(phrases)) {
    if (phraseMap['en'].toLowerCase().includes(text.toLowerCase().slice(0, 8)) && phraseMap[toLang]) {
      document.getElementById('trans-output').value = phraseMap[toLang];
      return;
    }
  }
  document.getElementById('trans-output').value = `[Use the phrase buttons above, or type an exact phrase from the bank!]`;
}

function swapLangs() {
  const fi = document.getElementById('trans-input');
  const to = document.getElementById('trans-output');
  [fi.value, to.value] = [to.value, fi.value];
}


function filterPlannerDests() {
  const q = document.getElementById('pl-dest-input').value.toLowerCase();
  const dd = document.getElementById('pl-dest-dd');
  if (!q) { dd.style.display = 'none'; return; }
  const matches = destinations.filter(d =>
    d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q)
  );
  if (!matches.length) { dd.style.display = 'none'; return; }
  dd.style.display = 'block';
  dd.innerHTML = '';
  matches.slice(0, 8).forEach(d => {
    const idx = destinations.indexOf(d);
    const div = document.createElement('div');
    div.className = 'dest-option';
    div.innerHTML = `<span>${d.emoji} <strong>${d.name}</strong>, ${d.country}</span><span>${d.ticketFrom} ✈</span>`;
    div.onclick = () => selectPlannerDest(idx);
    dd.appendChild(div);
  });
}

function selectPlannerDest(idx) {
  plannerState.destIdx = idx;
  const d = destinations[idx];
  document.getElementById('pl-dest-input').value = `${d.name}, ${d.country}`;
  document.getElementById('pl-dest-dd').style.display = 'none';
  const sel = document.getElementById('pl-selected-dest');
  sel.style.display = 'block';
  document.getElementById('pl-sel-emoji').textContent = d.emoji;
  document.getElementById('pl-sel-name').textContent = d.name;
  document.getElementById('pl-sel-country').textContent = `${d.country} · ${d.ticketFrom} est. flight`;
}

function goStep(n) {
  document.querySelectorAll('.planner-page').forEach((p, i) => p.classList.toggle('active', i === n));
  document.querySelectorAll('.p-step').forEach((s, i) => {
    s.classList.toggle('active', i === n);
    s.classList.toggle('done', i < n);
  });
}

function nextStep(from) {
  if (from === 0 && plannerState.destIdx === null) { alert('Please select a destination first!'); return; }
  goStep(from + 1);
}

function selectDays(n, el) {
  document.querySelectorAll('.days-box').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
  plannerState.days = n;
}

function updateBudget(type) {
  if (type === 'hotel') { plannerState.hotel = +document.getElementById('hotel-range').value; document.getElementById('hotel-val').textContent = '$' + plannerState.hotel; }
  if (type === 'food') { plannerState.food = +document.getElementById('food-range').value; document.getElementById('food-val').textContent = '$' + plannerState.food; }
  if (type === 'act') { plannerState.activities = +document.getElementById('act-range').value; document.getElementById('act-val').textContent = '$' + plannerState.activities; }
}

function setFoodPref(pref, el) {
  document.querySelectorAll('[id^=ft-]').forEach(b => b.classList.remove('on'));
  el.classList.add('on');
  plannerState.foodPref = pref;
}

function toggleStyle(style, el) {
  el.classList.toggle('on');
  if (plannerState.styles.includes(style)) plannerState.styles = plannerState.styles.filter(s => s !== style);
  else plannerState.styles.push(style);
}

function buildItinerary() {
  goStep(3);
  const d = destinations[plannerState.destIdx];
  const days = plannerState.days;
  const hotelTotal = plannerState.hotel * days;
  const foodTotal = plannerState.food * days;
  const actTotal = plannerState.activities;
  const transportEst = days * 15;
  const grandTotal = hotelTotal + foodTotal + actTotal + transportEst;
  const hotelType = plannerState.hotel < 40 ? 'Budget Hostel/Guesthouse' : plannerState.hotel < 120 ? 'Mid-range Hotel' : plannerState.hotel < 250 ? '4-Star Hotel' : 'Luxury Resort';
  const foodLevel = plannerState.food < 15 ? 'Street food & markets' : plannerState.food < 40 ? 'Local restaurants & cafes' : plannerState.food < 80 ? 'Mix of restaurant tiers' : 'Fine dining experiences';
  const pref = plannerState.foodPref;
  const foodItems = {
    all:{breakfast:"Local café breakfast",lunch:"Market lunch (local cuisine)",dinner:"Restaurant dinner (regional specialties)"},
    veg:{breakfast:"Vegetarian café breakfast",lunch:"Vegetarian restaurant lunch",dinner:"Vegetarian fine dining / local veggie dishes"},
    vegan:{breakfast:"Vegan café / fresh smoothie bowl",lunch:"Vegan market stalls",dinner:"Vegan restaurant dinner"},
    halal:{breakfast:"Halal café breakfast",lunch:"Halal restaurant lunch",dinner:"Halal certified dinner"}
  };
  const fi = foodItems[pref] || foodItems.all;
  const allAttractions = [...d.attractions];
  const styles = plannerState.styles;

  let daysHtml = '';
  for (let day = 1; day <= days; day++) {
    const attr = allAttractions[(day - 1) % allAttractions.length];
    const afternoon = styles.includes('adventure') && day % 2 === 0 ? 'Adventure activity / outdoor experience' : styles.includes('food') ? 'Food tour / market visit' : 'Afternoon sightseeing';
    const evening = styles.includes('relaxation') ? 'Relaxing evening / rooftop bar' : styles.includes('culture') ? 'Cultural show / local performance' : 'Evening street exploration';
    const dayFood = day === 1 ? `Try ${d.name}'s most iconic dish` : day === days ? 'Farewell dinner at best-rated restaurant' : fi.dinner;
    daysHtml += `
    <div class="itin-day">
      <div class="itin-day-header" onclick="toggleDay(this)">
        <span><span class="day-badge">Day ${day}</span> ${getDayTitle(day, days, d.name)}</span>
        <span style="color:var(--clay);font-size:.85rem">~$${(plannerState.hotel + plannerState.food + plannerState.activities/days + 15).toFixed(0)}</span>
      </div>
      <div class="itin-day-body" style="display:none">
        <div class="itin-item"><span class="itin-time">7:00 AM</span><div class="itin-act"><strong>${fi.breakfast}</strong><span>${d.name} morning routine</span></div><span class="itin-cost">$${(plannerState.food*0.2).toFixed(0)}</span></div>
        <div class="itin-item"><span class="itin-time">9:00 AM</span><div class="itin-act"><strong>${attr}</strong><span>Top attraction — arrive early to avoid crowds</span></div><span class="itin-cost">$${(plannerState.activities/days/2).toFixed(0)}</span></div>
        <div class="itin-item"><span class="itin-time">1:00 PM</span><div class="itin-act"><strong>${fi.lunch}</strong><span>${pref==='veg'?'🥗 Vegetarian':pref==='vegan'?'🌱 Vegan':pref==='halal'?'☪️ Halal':'🍽️ Local'} option</span></div><span class="itin-cost">$${(plannerState.food*0.35).toFixed(0)}</span></div>
        <div class="itin-item"><span class="itin-time">3:00 PM</span><div class="itin-act"><strong>${afternoon}</strong><span>Afternoon exploration</span></div><span class="itin-cost">$${(plannerState.activities/days/3).toFixed(0)}</span></div>
        <div class="itin-item"><span class="itin-time">7:00 PM</span><div class="itin-act"><strong>${dayFood}</strong><span>${foodLevel}</span></div><span class="itin-cost">$${(plannerState.food*0.45).toFixed(0)}</span></div>
        <div class="itin-item"><span class="itin-time">9:00 PM</span><div class="itin-act"><strong>${evening}</strong><span>End of day</span></div><span class="itin-cost">—</span></div>
      </div>
    </div>`;
  }

  const hotelPct = Math.round(hotelTotal / grandTotal * 100);
  const foodPct = Math.round(foodTotal / grandTotal * 100);
  const actPct = Math.round(actTotal / grandTotal * 100);
  const transPct = Math.round(transportEst / grandTotal * 100);

  document.getElementById('itin-output').innerHTML = `
    <div class="itin-header">
      <h3>${d.emoji} ${days}-Day ${d.name} Itinerary</h3>
      <div class="itin-stats">
        <div class="itin-stat"><strong>${d.name}, ${d.country}</strong></div>
        <div class="itin-stat">🏨 <strong>${hotelType}</strong></div>
        <div class="itin-stat">🍽️ <strong>${foodLevel}</strong></div>
        <div class="itin-stat">${pref==='veg'?'🥗 Vegetarian':pref==='vegan'?'🌱 Vegan':pref==='halal'?'☪️ Halal':'🍽️ All food'}</div>
      </div>
    </div>
    ${daysHtml}
    <div class="budget-summary">
      <h4>💰 Budget Breakdown (${days} Days)</h4>
      <div class="budget-bars">
        <div class="budget-bar-row"><span class="bbar-label">Hotel</span><div class="bbar-track"><div class="bbar-fill hotel" style="width:${hotelPct}%"></div></div><span class="bbar-val">$${hotelTotal}</span></div>
        <div class="budget-bar-row"><span class="bbar-label">Food</span><div class="bbar-track"><div class="bbar-fill food" style="width:${foodPct}%"></div></div><span class="bbar-val">$${foodTotal}</span></div>
        <div class="budget-bar-row"><span class="bbar-label">Activities</span><div class="bbar-track"><div class="bbar-fill activity" style="width:${actPct}%"></div></div><span class="bbar-val">$${actTotal}</span></div>
        <div class="budget-bar-row"><span class="bbar-label">Transport</span><div class="bbar-track"><div class="bbar-fill transport" style="width:${transPct}%"></div></div><span class="bbar-val">~$${transportEst}</span></div>
      </div>
      <div class="total-cost">
        <div style="font-size:.82rem;opacity:.6;margin-bottom:.3rem">ESTIMATED TOTAL (excl. flights)</div>
        <div class="total-amount">$${grandTotal.toLocaleString()}</div>
        <div style="font-size:.75rem;opacity:.5;margin-top:.3rem">+ ${d.ticketFrom} estimated flight</div>
      </div>
    </div>`;

  document.querySelectorAll('.itin-day-body')[0].style.display = 'block';
}

function getDayTitle(day, total, dest) {
  if (day === 1) return `Arrival & ${dest} First Look`;
  if (day === total) return 'Final Day & Departure';
  if (day === 2) return 'Deep Dive into Culture';
  if (day === 3) return 'Hidden Gems & Local Life';
  return `Exploration Day ${day}`;
}

function toggleDay(header) {
  const body = header.nextElementSibling;
  body.style.display = body.style.display === 'none' ? 'block' : 'none';
}


function initDartMap() {
  const canvas = document.getElementById('worldCanvas');
  if (!canvas) return;
  drawWorldMap();
}

function drawWorldMap(highlight = null) {
  const canvas = document.getElementById('worldCanvas');
  const ctx = canvas.getContext('2d');
  const W = 700, H = 380;
  ctx.fillStyle = '#1D6B8C';
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(255,255,255,.08)';
  ctx.lineWidth = .5;
  for (let x = 0; x < W; x += 70) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
  for (let y = 0; y < H; y += 38) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

  const lands = [
    {x:470,y:60,w:90,h:75,c:'#2D5A3D'},{x:550,y:50,w:170,h:120,c:'#2D5A3D'},
    {x:480,y:145,w:95,h:140,c:'#C8714A'},{x:90,y:40,w:160,h:130,c:'#2D5A3D'},
    {x:160,y:195,w:100,h:140,c:'#E8A83E'},{x:590,y:230,w:100,h:75,c:'#E8A83E'},
    {x:220,y:20,w:60,h:45,c:'#4A7A5A'},{x:0,y:345,w:700,h:35,c:'#DDE8F0'},
    {x:455,y:62,w:22,h:28,c:'#2D5A3D'},{x:638,y:82,w:18,h:50,c:'#2D5A3D'},
    {x:598,y:200,w:80,h:28,c:'#2D5A3D'},{x:570,y:130,w:45,h:60,c:'#3A6A4A'},
    {x:527,y:115,w:55,h:45,c:'#B8945A'},{x:145,y:160,w:35,h:35,c:'#3A7A4A'},
    {x:655,y:285,w:18,h:40,c:'#2D5A3D'},{x:420,y:30,w:30,h:20,c:'#AAC8D8'},
    {x:625,y:155,w:20,h:40,c:'#2D5A3D'},{x:178,y:155,w:32,h:12,c:'#C08040'},
  ];

  lands.forEach(l => {
    const r = Math.min(l.w, l.h) * 0.35;
    ctx.beginPath();
    ctx.moveTo(l.x+r, l.y);
    ctx.lineTo(l.x+l.w-r, l.y);
    ctx.arcTo(l.x+l.w, l.y, l.x+l.w, l.y+r, r);
    ctx.lineTo(l.x+l.w, l.y+l.h-r);
    ctx.arcTo(l.x+l.w, l.y+l.h, l.x+l.w-r, l.y+l.h, r);
    ctx.lineTo(l.x+r, l.y+l.h);
    ctx.arcTo(l.x, l.y+l.h, l.x, l.y+l.h-r, r);
    ctx.lineTo(l.x, l.y+r);
    ctx.arcTo(l.x, l.y, l.x+r, l.y, r);
    ctx.closePath();
    ctx.fillStyle = l.c;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.15)';
    ctx.lineWidth = .5;
    ctx.stroke();
  });

  ctx.fillStyle = 'rgba(255,255,255,.3)';
  ctx.font = '9px sans-serif';
  ctx.textAlign = 'center';
  [{t:'Europe',x:515,y:100},{t:'Asia',x:640,y:105},{t:'Africa',x:527,y:210},{t:'N.America',x:170,y:100},{t:'S.America',x:210,y:265},{t:'Australia',x:640,y:268}]
    .forEach(l => ctx.fillText(l.t, l.x, l.y));

  destinations.forEach((d, i) => {
    const px = Math.round(d.mapX * W);
    const py = Math.round(d.mapY * H);
    ctx.beginPath();
    ctx.arc(px, py, highlight === i ? 8 : 5, 0, Math.PI*2);
    ctx.fillStyle = highlight === i ? '#E8A83E' : '#FDFAF4';
    ctx.fill();
    ctx.strokeStyle = highlight === i ? '#C8714A' : 'rgba(200,113,74,.5)';
    ctx.lineWidth = highlight === i ? 2.5 : 1.5;
    ctx.stroke();
    if (highlight === i) {
      ctx.beginPath();
      ctx.arc(px, py, 14, 0, Math.PI*2);
      ctx.strokeStyle = 'rgba(232,168,62,.5)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#E8A83E';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(d.name, px, py - 18);
    }
  });
}

function dartClickMap(e) {
  const canvas = document.getElementById('worldCanvas');
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const cx = (e.clientX - rect.left) * scaleX;
  const cy = (e.clientY - rect.top) * scaleY;
  let best = 0, bestDist = Infinity;
  destinations.forEach((d, i) => {
    const dist = Math.hypot(cx - d.mapX*700, cy - d.mapY*380);
    if (dist < bestDist) { bestDist = dist; best = i; }
  });
  showDartResult(best);
}

function throwDart() {
  dartCount++;
  document.getElementById('throw-count').textContent = 'Darts thrown: ' + dartCount;
  showDartResult(Math.floor(Math.random() * destinations.length));
}

function showDartResult(idx) {
  dartHighlight = idx;
  drawWorldMap(idx);
  const d = destinations[idx];
  const res = document.getElementById('dart-result');
  res.classList.add('show');
  document.getElementById('dart-emoji').textContent = d.emoji;
  document.getElementById('dart-dest-name').textContent = `${d.name}, ${d.country}`;
  document.getElementById('dart-dest-info').textContent = `${d.continent.charAt(0).toUpperCase()+d.continent.slice(1)} · Best time: ${d.bestTime} · Flights from ${d.ticketFrom}`;
}

function dartPlanTrip() {
  if (dartHighlight === null) return;
  plannerState.destIdx = dartHighlight;
  const d = destinations[dartHighlight];
  document.getElementById('pl-dest-input').value = `${d.name}, ${d.country}`;
  document.getElementById('pl-selected-dest').style.display = 'block';
  document.getElementById('pl-sel-emoji').textContent = d.emoji;
  document.getElementById('pl-sel-name').textContent = d.name;
  document.getElementById('pl-sel-country').textContent = d.country;
  document.querySelectorAll('.tool-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-planner').classList.add('active');
  document.querySelectorAll('.tool-tab')[2].classList.add('active');
  goStep(1);
  document.getElementById('tools').scrollIntoView({behavior:'smooth'});
}


function buildCards() {
  const grid = document.getElementById('dest-grid');
  const nr = document.getElementById('no-results');
  destinations.forEach((d, i) => {
    const card = document.createElement('div');
    card.className = 'dest-card visible';
    card.id = 'dcard-' + i;
    card.dataset.continent = d.continent;
    const tagsHtml = d.tags.map(t => `<span class="tag tag-${t}">${t}</span>`).join('');
    const foodDots = `<div class="food-dots">
      ${d.food.veg ? '<span class="food-dot veg" title="Vegetarian friendly"></span>' : ''}
      ${d.food.vegan ? '<span class="food-dot vegan" title="Vegan options"></span>' : ''}
      ${d.food.non ? '<span class="food-dot non" title="Non-veg cuisine"></span>' : ''}
    </div>`;
    const contLabel = d.continent === 'middle-east' ? 'Middle East' : d.continent.charAt(0).toUpperCase() + d.continent.slice(1);
    card.innerHTML = `
      <div class="dest-img-ph" style="background:${d.bg}">
        ${d.emoji}
        <span class="dest-continent-tag">${contLabel}</span>
        <span class="price-tag">✈ ${d.ticketFrom}</span>
      </div>
      <div class="dest-body">
        <p class="dest-country">${d.country}</p>
        <h3 class="dest-name">${d.name}</h3>
        <p class="dest-desc">${d.desc}</p>
        ${foodDots}
        <div class="dest-footer">
          <div class="dest-tags">${tagsHtml}</div>
          <button class="dest-btn" onclick="openModal(${i})">Explore →</button>
        </div>
      </div>`;
    grid.insertBefore(card, nr);
  });
}

function renderCards() {
  const s = document.getElementById('search-input').value.toLowerCase();
  let count = 0;
  destinations.forEach((d, i) => {
    const card = document.getElementById('dcard-' + i);
    if (!card) return;
    const mc = currentFilter === 'all' || d.continent === currentFilter;
    const ms = !s || (d.name + d.country + d.desc + d.tags.join(' ')).toLowerCase().includes(s);
    const mf = !currentFoodFilter ||
      (currentFoodFilter === 'veg' && d.food.veg) ||
      (currentFoodFilter === 'vegan' && d.food.vegan) ||
      (currentFoodFilter === 'non' && d.food.non);
    const show = mc && ms && mf;
    card.classList.toggle('visible', show);
    if (show) count++;
  });
  document.getElementById('no-results').classList.toggle('show', count === 0);
}

function openModal(i) {
  const d = destinations[i];
  document.getElementById('modal-header').style.background = d.bg;
  document.getElementById('modal-header').innerHTML = `<button class="modal-close" onclick="closeModal()">✕</button><span>${d.emoji}</span>`;
  document.getElementById('modal-country').textContent = d.country;
  document.getElementById('modal-title').textContent = d.name;
  document.getElementById('modal-desc').textContent = d.fullDesc;
  document.getElementById('modal-grid').innerHTML = `
    <div class="modal-info-card"><p class="mic-label">Currency</p><p class="mic-value">${d.currency}</p></div>
    <div class="modal-info-card"><p class="mic-label">Language</p><p class="mic-value">${d.language}</p></div>
    <div class="modal-info-card"><p class="mic-label">Best Time</p><p class="mic-value">${d.bestTime}</p></div>
    <div class="modal-info-card"><p class="mic-label">Climate</p><p class="mic-value">${d.climate}</p></div>`;
  document.getElementById('modal-tickets').innerHTML = d.tickets.map(t =>
    `<div class="ticket-row"><span class="ticket-type">${t.type}</span><span class="ticket-price">${t.price}</span></div>`
  ).join('');
  document.getElementById('modal-food').innerHTML = d.foodDetail.map(f =>
    `<div class="food-option"><span class="food-type-dot ${f.dot}"></span><div><strong>${f.type}</strong>: ${f.note}</div></div>`
  ).join('');
  document.getElementById('modal-attractions').innerHTML = d.attractions.map(a => `<li>${a}</li>`).join('');
  document.getElementById('modal-tips').textContent = d.localTips;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('modal-overlay')) {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }
}


window.addEventListener('scroll', () =>
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 40)
);

document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobile-menu').classList.toggle('open');
});

function closeMM() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobile-menu').classList.remove('open');
}

document.querySelectorAll('.filter-chip').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderCards();
  });
});

document.querySelectorAll('.food-chip').forEach(btn => {
  btn.addEventListener('click', () => {
    const same = btn.classList.contains('active');
    document.querySelectorAll('.food-chip').forEach(b => b.classList.remove('active'));
    if (!same) { btn.classList.add('active'); currentFoodFilter = btn.dataset.food; }
    else currentFoodFilter = null;
    renderCards();
  });
});

document.getElementById('search-input').addEventListener('input', renderCards);
document.getElementById('search-btn').addEventListener('click', renderCards);

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, { threshold: .1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

function handleSubscribe() {
  const inp = document.getElementById('email-input');
  if (inp.value && inp.value.includes('@')) {
    inp.value = '';
    document.getElementById('sub-msg').style.display = 'block';
  }
}


buildCards();
initCurrency();
initTranslator();