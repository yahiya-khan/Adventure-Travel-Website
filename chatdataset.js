const countryData = {
    countries: {
      "Afghanistan": {
        "cities": {
          "Kabul": { "attractions": ["Babur Gardens", "Kabul Museum", "Shah-Do Shamshira Mosque"] },
          "Herat": { "attractions": ["Herat Citadel", "Friday Mosque", "Musalla Complex"] }
        }
      },
      "Albania": {
        "cities": {
          "Tirana": { "attractions": ["Skanderbeg Square", "Et'hem Bey Mosque", "Dajti Mountain"] },
          "Saranda": { "attractions": ["Butrint National Park", "Lëkurësi Castle", "Mirror Beach"] }
        }
      },
      "Algeria": {
        "cities": {
          "Algiers": { "attractions": ["Casbah of Algiers", "Notre-Dame d'Afrique", "Maqam Echahid"] },
          "Oran": { "attractions": ["Santa Cruz Fort", "Bey’s Palace", "Ahmed Zabana Museum"] }
        }
      },
      "Andorra": {
        "cities": {
          "Andorra la Vella": { "attractions": ["Casa de la Vall", "Sant Esteve Church", "Caldea Spa"] },
          "Escaldes-Engordany": { "attractions": ["Madriu-Perafita-Claror Valley", "Perfume Museum", "Engolasters Lake"] }
        }
      },
      "Angola": {
        "cities": {
          "Luanda": { "attractions": ["Fortaleza de São Miguel", "Musseque Kapari Beach", "Iron Palace"] },
          "Huambo": { "attractions": ["Huambo Cathedral", "Cuito River", "Mount Moco"] }
        }
      },
      "Antigua and Barbuda": {
        "cities": {
          "St. John's": { "attractions": ["Nelson's Dockyard", "St. John's Cathedral", "Museum of Antigua"] },
          "Codrington": { "attractions": ["Barbuda Pink Sand Beach", "Frigate Bird Sanctuary", "Highland House"] }
        }
      },
      "Argentina": {
        "cities": {
          "Buenos Aires": { "attractions": ["Plaza de Mayo", "Teatro Colón", "Recoleta Cemetery"] },
          "Córdoba": { "attractions": ["Jesuit Block", "Sarmiento Park", "La Cañada"] }
        }
      },
      "Armenia": {
        "cities": {
          "Yerevan": { "attractions": ["Republic Square", "Matenadaran", "Cascade Complex"] },
          "Gyumri": { "attractions": ["Sev Berd Fortress", "Mother Armenia", "Old Town"] }
        }
      },
      "Australia": {
        "cities": {
          "Sydney": { "attractions": ["Sydney Opera House", "Bondi Beach", "Harbour Bridge"] },
          "Melbourne": { "attractions": ["Royal Botanic Gardens", "Federation Square", "Great Ocean Road"] }
        }
      },
      "Austria": {
        "cities": {
          "Vienna": { "attractions": ["Schönbrunn Palace", "St. Stephen’s Cathedral", "Belvedere Palace"] },
          "Salzburg": { "attractions": ["Hohensalzburg Fortress", "Mirabell Palace", "Mozart’s Birthplace"] }
        }
      },
      "Azerbaijan": {
        "cities": {
          "Baku": { "attractions": ["Old City", "Flame Towers", "Baku Boulevard"] },
          "Ganja": { "attractions": ["Ganja Fortress", "Shah Abbas Mosque", "Nizami Mausoleum"] }
        }
      },
      "Bahamas": {
        "cities": {
          "Nassau": { "attractions": ["Cable Beach", "Atlantis Resort", "Queen’s Staircase"] },
          "Freeport": { "attractions": ["Lucayan National Park", "Garden of the Morning", "Peterson Cay"] }
        }
      },
      "Bahrain": {
        "cities": {
          "Manama": { "attractions": ["Bahrain Fort", "Al Fateh Grand Mosque", "Bab Al Bahrain"] },
          "Muharraq": { "attractions": ["Sheikh Isa Bin Ali House", "Arad Fort", "Pearling Path"] }
        }
      },
      "Bangladesh": {
        "cities": {
          "Dhaka": { "attractions": ["Lalbagh Fort", "Ahsan Manzil", "National Parliament House"] },
          "Chittagong": { "attractions": ["Patenga Beach", "Foy’s Lake", "Shrine of Bayazid Bostami"] }
        }
      },
      "Barbados": {
        "cities": {
          "Bridgetown": { "attractions": ["Parliament Buildings", "Garrison Savannah", "Carlisle Bay"] },
          "Speightstown": { "attractions": ["St. Peter’s Church", "Arlington House Museum", "Mullins Beach"] }
        }
      },
      "Belarus": {
        "cities": {
          "Minsk": { "attractions": ["Independence Square", "National Library", "Holy Spirit Cathedral"] },
          "Brest": { "attractions": ["Brest Fortress", "Belovezhskaya Pushcha", "St. Simeon Cathedral"] }
        }
      },
      "Belgium": {
        "cities": {
          "Brussels": { "attractions": ["Grand Place", "Atomium", "Manneken Pis"] },
          "Bruges": { "attractions": ["Belfry of Bruges", "Minnewater Lake", "Rozenhoedkaai"] }
        }
      },
      "Belize": {
        "cities": {
          "Belize City": { "attractions": ["St. John’s Cathedral", "Museum of Belize", "Swing Bridge"] },
          "San Ignacio": { "attractions": ["Xunantunich", "Cahal Pech", "Green Iguana Project"] }
        }
      },
      "Benin": {
        "cities": {
          "Porto-Novo": { "attractions": ["Royal Palace", "Ethnographic Museum", "Da Silva Museum"] },
          "Ouidah": { "attractions": ["Door of No Return", "Python Temple", "Sacred Forest"] }
        }
      },
      "Bhutan": {
        "cities": {
          "Thimphu": { "attractions": ["Tashichho Dzong", "Buddha Dordenma", "National Memorial Chorten"] },
          "Paro": { "attractions": ["Paro Taktsang", "Rinpung Dzong", "National Museum"] }
        }
      },
      "Bolivia": {
        "cities": {
          "La Paz": { "attractions": ["Witches’ Market", "Mi Teleférico", "Valley of the Moon"] },
          "Sucre": { "attractions": ["Casa de la Libertad", "Dinosaur Footprints", "San Felipe Neri"] }
        }
      },
      "Bosnia and Herzegovina": {
        "cities": {
          "Sarajevo": { "attractions": ["Baščaršija", "Latin Bridge", "Tunnel of Hope"] },
          "Mostar": { "attractions": ["Stari Most", "Old Bazaar", "Kravica Waterfall"] }
        }
      },
      "Botswana": {
        "cities": {
          "Gaborone": { "attractions": ["National Museum", "Kgale Hill", "Three Chiefs Monument"] },
          "Maun": { "attractions": ["Okavango Delta", "Tsodilo Hills", "Nhabe Museum"] }
        }
      },
      "Brazil": {
        "cities": {
          "Rio de Janeiro": { "attractions": ["Christ the Redeemer", "Copacabana Beach", "Sugarloaf Mountain"] },
          "São Paulo": { "attractions": ["Ibirapuera Park", "São Paulo Cathedral", "Avenida Paulista"] }
        }
      },
      "Brunei": {
        "cities": {
          "Bandar Seri Begawan": { "attractions": ["Sultan Omar Ali Mosque", "Kampong Ayer", "Royal Regalia Museum"] },
          "Kuala Belait": { "attractions": ["Silver Jubilee Park", "Billionth Barrel Monument", "Belait Beach"] }
        }
      },
      "Bulgaria": {
        "cities": {
          "Sofia": { "attractions": ["Alexander Nevsky Cathedral", "Vitosha Mountain", "Boyana Church"] },
          "Plovdiv": { "attractions": ["Old Town", "Roman Theatre", "Kapana District"] }
        }
      },
      "Burkina Faso": {
        "cities": {
          "Ouagadougou": { "attractions": ["Grand Mosque", "National Museum", "Bangr Weogo Park"] },
          "Bobo-Dioulasso": { "attractions": ["Grande Mosquée", "Kibidwé Market", "Mare aux Hippopotames"] }
        }
      },
      "Burundi": {
        "cities": {
          "Gitega": { "attractions": ["Gitega National Museum", "Kibira National Park", "Royal Drummers"] },
          "Bujumbura": { "attractions": ["Rusizi National Park", "Saga Beach", "Livingstone-Stanley Monument"] }
        }
      },
      "Cabo Verde": {
        "cities": {
          "Praia": { "attractions": ["Sucupira Market", "Praia Cathedral", "Plateau"] },
          "Mindelo": { "attractions": ["Torre de Belém", "Mindelo Cultural Centre", "Baía das Gatas"] }
        }
      },
      "Cambodia": {
        "cities": {
          "Phnom Penh": { "attractions": ["Royal Palace", "Tuol Sleng Museum", "Wat Phnom"] },
          "Siem Reap": { "attractions": ["Angkor Wat", "Pub Street", "Phnom Bakheng"] }
        }
      },
      "Cameroon": {
        "cities": {
          "Yaoundé": { "attractions": ["National Museum", "Mefou National Park", "Reunification Monument"] },
          "Douala": { "attractions": ["La Nouvelle Liberté", "Douala Cathedral", "Maritime Museum"] }
        }
      },
      "Canada": {
        "cities": {
          "Toronto": { "attractions": ["CN Tower", "Royal Ontario Museum", "Distillery District"] },
          "Vancouver": { "attractions": ["Stanley Park", "Capilano Suspension Bridge", "Granville Island"] }
        }
      },
      "Central African Republic": {
        "cities": {
          "Bangui": { "attractions": ["Bangui Cathedral", "Boganda Museum", "Ubangi River"] },
          "Bimbo": { "attractions": ["Boali Falls", "Manovo-Gounda St. Floris", "Local Markets"] }
        }
      },
      "Chad": {
        "cities": {
          "N'Djamena": { "attractions": ["Grand Mosque", "National Museum", "Chad Cultural Centre"] },
          "Moundou": { "attractions": ["Lake Léré", "Moundou Market", "Sao Statues"] }
        }
      },
      "Chile": {
        "cities": {
          "Santiago": { "attractions": ["Plaza de Armas", "Cerro San Cristóbal", "La Moneda Palace"] },
          "Valparaíso": { "attractions": ["Cerro Concepción", "Ascensor Artillería", "La Sebastiana"] }
        }
      },
      "China": {
        "cities": {
          "Beijing": { "attractions": ["Great Wall", "Forbidden City", "Tiananmen Square"] },
          "Shanghai": { "attractions": ["The Bund", "Yu Garden", "Shanghai Tower"] }
        }
      },
      "Colombia": {
        "cities": {
          "Bogotá": { "attractions": ["Plaza Bolívar", "Gold Museum", "Monserrate"] },
          "Cartagena": { "attractions": ["Walled City", "Castillo San Felipe", "Rosario Islands"] }
        }
      },
      "Comoros": {
        "cities": {
          "Moroni": { "attractions": ["Old Friday Mosque", "Medina", "Mount Karthala"] },
          "Mutsamudu": { "attractions": ["Citadel", "Ujumbé Palace", "Anjouan Beaches"] }
        }
      },
      "Congo": {
        "cities": {
          "Brazzaville": { "attractions": ["Basilique Sainte-Anne", "Poto-Poto Market", "Congo River"] },
          "Pointe-Noire": { "attractions": ["Côte Sauvage", "Diosso Gorge", "Conkouati-Douli Park"] }
        }
      },
      "Costa Rica": {
        "cities": {
          "San José": { "attractions": ["National Theatre", "Jade Museum", "Metropolitan Cathedral"] },
          "Liberia": { "attractions": ["Rincón de la Vieja", "Santa Rosa National Park", "Africa Mía"] }
        }
      },
      "Croatia": {
        "cities": {
          "Dubrovnik": { "attractions": ["Old Town Walls", "Lokrum Island", "Stradun"] },
          "Zagreb": { "attractions": ["Upper Town", "St. Mark’s Church", "Museum of Broken Relationships"] }
        }
      },
      "Cuba": {
        "cities": {
          "Havana": { "attractions": ["Old Havana", "Malecón", "Castillo de la Real Fuerza"] },
          "Trinidad": { "attractions": ["Plaza Mayor", "Valle de los Ingenios", "Museo Romántico"] }
        }
      },
      "Cyprus": {
        "cities": {
          "Nicosia": { "attractions": ["Ledra Street", "Selimiye Mosque", "Cyprus Museum"] },
          "Limassol": { "attractions": ["Limassol Castle", "Kourion", "Promenade"] }
        }
      },
      "Czechia": {
        "cities": {
          "Prague": { "attractions": ["Charles Bridge", "Prague Castle", "Old Town Square"] },
          "Brno": { "attractions": ["Špilberk Castle", "Cathedral of St. Peter", "Villa Tugendhat"] }
        }
      },
      "Denmark": {
        "cities": {
          "Copenhagen": { "attractions": ["Nyhavn", "Tivoli Gardens", "Little Mermaid"] },
          "Aarhus": { "attractions": ["Aros Museum", "Den Gamle By", "Moesgaard Museum"] }
        }
      },
      "Djibouti": {
        "cities": {
          "Djibouti City": { "attractions": ["Hamoudi Mosque", "Central Market", "Lake Assal"] },
          "Tadjoura": { "attractions": ["Tadjoura Port", "Day Forest", "White Sands Beach"] }
        }
      },
      "Dominica": {
        "cities": {
          "Roseau": { "attractions": ["Botanical Gardens", "Morne Trois Pitons", "Dominica Museum"] },
          "Portsmouth": { "attractions": ["Cabrits National Park", "Indian River", "Fort Shirley"] }
        }
      },
      "Dominican Republic": {
        "cities": {
          "Santo Domingo": { "attractions": ["Colonial Zone", "Alcázar de Colón", "Catedral Primada"] },
          "Punta Cana": { "attractions": ["Saona Island", "Bávaro Beach", "Indigenous Eyes Park"] }
        }
      },
      "Ecuador": {
        "cities": {
          "Quito": { "attractions": ["Old Town", "Mitad del Mundo", "Basílica del Voto"] },
          "Guayaquil": { "attractions": ["Malecón 2000", "Las Peñas", "Parque Seminario"] }
        }
      },
      "Egypt": {
        "cities": {
          "Cairo": { "attractions": ["Pyramids of Giza", "Egyptian Museum", "Khan el-Khalili"] },
          "Luxor": { "attractions": ["Karnak Temple", "Valley of the Kings", "Luxor Temple"] }
        }
      },
      "El Salvador": {
        "cities": {
          "San Salvador": { "attractions": ["National Palace", "Metropolitan Cathedral", "El Boquerón"] },
          "Santa Ana": { "attractions": ["Santa Ana Volcano", "Cathedral of Santa Ana", "Lake Coatepeque"] }
        }
      },
      "Equatorial Guinea": {
        "cities": {
          "Malabo": { "attractions": ["Malabo Cathedral", "Pico Basile", "Equatorial Guinea Cultural Centre"] },
          "Bata": { "attractions": ["Bata Cathedral", "Paseo Marítimo", "Monte Alen National Park"] }
        }
      },
      "Eritrea": {
        "cities": {
          "Asmara": { "attractions": ["Fiat Tagliero", "St. Mary’s Cathedral", "Opera House"] },
          "Massawa": { "attractions": ["Old Town", "Massawa Island", "Imperial Palace"] }
        }
      },
      "Estonia": {
        "cities": {
          "Tallinn": { "attractions": ["Old Town", "Alexander Nevsky Cathedral", "Toompea Castle"] },
          "Tartu": { "attractions": ["Tartu University", "St. John’s Church", "AHHAA Science Centre"] }
        }
      },
      "Eswatini": {
        "cities": {
          "Mbabane": { "attractions": ["Swazi Market", "Sibebe Rock", "National Museum"] },
          "Lobamba": { "attractions": ["King Sobhuza II Memorial", "Mantenga Cultural Village", "Mlilwane Wildlife"] }
        }
      },
      "Ethiopia": {
        "cities": {
          "Addis Ababa": { "attractions": ["National Museum", "Holy Trinity Cathedral", "Entoto Hill"] },
          "Lalibela": { "attractions": ["Rock-Hewn Churches", "Bet Giyorgis", "Asheton Maryam"] }
        }
      },
      "Fiji": {
        "cities": {
          "Suva": { "attractions": ["Fiji Museum", "Colo-i-Suva Forest", "Albert Park"] },
          "Nadi": { "attractions": ["Sri Siva Subramaniya Temple", "Garden of the Sleeping Giant", "Sabeto Hot Springs"] }
        }
      },
      "Finland": {
        "cities": {
          "Helsinki": { "attractions": ["Suomenlinna", "Helsinki Cathedral", "Temppeliaukio Church"] },
          "Rovaniemi": { "attractions": ["Santa Claus Village", "Arktikum", "Northern Lights"] }
        }
      },
      "France": {
        "cities": {
          "Paris": { "attractions": ["Eiffel Tower", "Louvre Museum", "Notre-Dame"] },
          "Nice": { "attractions": ["Promenade des Anglais", "Castle Hill", "Marc Chagall Museum"] }
        }
      },
      "Gabon": {
        "cities": {
          "Libreville": { "attractions": ["Pointe Denis", "National Museum", "St. Michael’s Church"] },
          "Port-Gentil": { "attractions": ["Cap Lopez", "Sogara Beach", "St. Louis Church"] }
        }
      },
      "Gambia": {
        "cities": {
          "Banjul": { "attractions": ["Arch 22", "National Museum", "Albert Market"] },
          "Serekunda": { "attractions": ["Kachikally Crocodile Pool", "Bijilo Forest Park", "Craft Market"] }
        }
      },
      "Georgia": {
        "cities": {
          "Tbilisi": { "attractions": ["Narikala Fortress", "Old Town", "Sulfur Baths"] },
          "Batumi": { "attractions": ["Batumi Boulevard", "Botanical Garden", "Ali and Nino Statue"] }
        }
      },
      "Germany": {
        "cities": {
          "Berlin": { "attractions": ["Brandenburg Gate", "Reichstag", "Museum Island"] },
          "Munich": { "attractions": ["Marienplatz", "Nymphenburg Palace", "Oktoberfest"] }
        }
      },
      "Ghana": {
        "cities": {
          "Accra": { "attractions": ["Kwame Nkrumah Mausoleum", "James Town Lighthouse", "Labadi Beach"] },
          "Kumasi": { "attractions": ["Manhyia Palace", "Kejetia Market", "Lake Bosomtwe"] }
        }
      },
      "Greece": {
        "cities": {
          "Athens": { "attractions": ["Acropolis", "Parthenon", "Plaka"] },
          "Santorini": { "attractions": ["Oia Sunset", "Fira", "Red Beach"] }
        }
      },
      "Grenada": {
        "cities": {
          "St. George's": { "attractions": ["Fort George", "Grand Anse Beach", "Carenage"] },
          "Gouyave": { "attractions": ["Nutmeg Processing Station", "Dougaldston Estate", "Fisherman’s Birthday"] }
        }
      },
      "Guatemala": {
        "cities": {
          "Guatemala City": { "attractions": ["National Palace", "Metropolitan Cathedral", "Relief Map"] },
          "Antigua": { "attractions": ["Santa Catalina Arch", "La Merced Church", "Volcán Pacaya"] }
        }
      },
      "Guinea": {
        "cities": {
          "Conakry": { "attractions": ["Grand Mosque", "National Museum", "Îles de Los"] },
          "Labé": { "attractions": ["Fouta Djallon", "Mount Loura", "Labé Market"] }
        }
      },
      "Guinea-Bissau": {
        "cities": {
          "Bissau": { "attractions": ["Fortaleza d’Amura", "Presidential Palace", "Pidjiguiti Memorial"] },
          "Bafatá": { "attractions": ["Bafatá Market", "Geba River", "Old Colonial Buildings"] }
        }
      },
      "Guyana": {
        "cities": {
          "Georgetown": { "attractions": ["St. George’s Cathedral", "Demerara Harbour Bridge", "Botanical Gardens"] },
          "Linden": { "attractions": ["Blue Lakes", "Gluck Island", "Linden Museum"] }
        }
      },
      "Haiti": {
        "cities": {
          "Port-au-Prince": { "attractions": ["National Museum", "Iron Market", "Cathedral of Our Lady"] },
          "Cap-Haïtien": { "attractions": ["Citadelle Laferrière", "Sans-Souci Palace", "Labadee Beach"] }
        }
      },
      "Holy See": {
        "cities": {
          "Vatican City": { "attractions": ["St. Peter’s Basilica", "Sistine Chapel", "Vatican Museums"] }
        }
      },
      "Honduras": {
        "cities": {
          "Tegucigalpa": { "attractions": ["National Gallery", "Basilica of Suyapa", "Parque La Leona"] },
          "Roatán": { "attractions": ["West Bay Beach", "Gumbalimba Park", "Carambola Gardens"] }
        }
      },
      "Hungary": {
        "cities": {
          "Budapest": { "attractions": ["Buda Castle", "Parliament Building", "Széchenyi Thermal Bath"] },
          "Debrecen": { "attractions": ["Great Reformed Church", "Déri Museum", "Nagytemplom"] }
        }
      },
      "Iceland": {
        "cities": {
          "Reykjavik": { "attractions": ["Hallgrimskirkja", "Harpa Concert Hall", "Blue Lagoon"] },
          "Akureyri": { "attractions": ["Akureyrarkirkja", "Botanical Garden", "Godafoss Waterfall"] }
        }
      },
      "India": {
        "cities": {
          "Delhi": { "attractions": ["Red Fort", "India Gate", "Qutub Minar"] },
          "Mumbai": { "attractions": ["Gateway of India", "Marine Drive", "Elephanta Caves"] }
        }
      },
      "Indonesia": {
        "cities": {
          "Jakarta": { "attractions": ["National Monument", "Istiqlal Mosque", "Old Town"] },
          "Bali": { "attractions": ["Uluwatu Temple", "Tanah Lot", "Ubud Monkey Forest"] }
        }
      },
      "Iran": {
        "cities": {
          "Tehran": { "attractions": ["Grand Bazaar", "Golestan Palace", "Milad Tower"] },
          "Isfahan": { "attractions": ["Naqsh-e Jahan Square", "Sheikh Lotfollah Mosque", "Si-o-se Pol Bridge"] }
        }
      },
      "Iraq": {
        "cities": {
          "Baghdad": { "attractions": ["Al-Mustansiriya School", "Baghdad Tower", "National Museum"] },
          "Erbil": { "attractions": ["Erbil Citadel", "Qaysari Bazaar", "Jalil Khayat Mosque"] }
        }
      },
      "Ireland": {
        "cities": {
          "Dublin": { "attractions": ["Trinity College", "Guinness Storehouse", "Dublin Castle"] },
          "Galway": { "attractions": ["Eyre Square", "Latin Quarter", "Cliffs of Moher"] }
        }
      },
      "Israel": {
        "cities": {
          "Jerusalem": { "attractions": ["Western Wall", "Dome of the Rock", "Old City"] },
          "Tel Aviv": { "attractions": ["Jaffa Old City", "Rabin Square", "Tel Aviv Beach"] }
        }
      },
      "Italy": {
        "cities": {
          "Rome": { "attractions": ["Colosseum", "Roman Forum", "Pantheon"] },
          "Venice": { "attractions": ["St. Mark’s Basilica", "Grand Canal", "Doge’s Palace"] }
        }
      },
      "Jamaica": {
        "cities": {
          "Kingston": { "attractions": ["Bob Marley Museum", "Devon House", "National Gallery"] },
          "Montego Bay": { "attractions": ["Doctor’s Cave Beach", "Rose Hall Great House", "Rasta Road"] }
        }
      },
      "Japan": {
        "cities": {
          "Tokyo": { "attractions": ["Tokyo Tower", "Senso-ji Temple", "Shibuya Crossing"] },
          "Kyoto": { "attractions": ["Kinkaku-ji", "Fushimi Inari Shrine", "Arashiyama Bamboo Grove"] }
        }
      },
      "Jordan": {
        "cities": {
          "Amman": { "attractions": ["Roman Theatre", "Citadel", "Rainbow Street"] },
          "Petra": { "attractions": ["The Treasury", "Monastery", "Siq"] }
        }
      },
      "Kazakhstan": {
        "cities": {
          "Astana": { "attractions": ["Bayterek Tower", "Hazrat Sultan Mosque", "Palace of Peace"] },
          "Almaty": { "attractions": ["Kok-Tobe Hill", "Zenkov Cathedral", "Medeu Skating Rink"] }
        }
      },
      "Kenya": {
        "cities": {
          "Nairobi": { "attractions": ["Nairobi National Park", "David Sheldrick Trust", "Giraffe Centre"] },
          "Mombasa": { "attractions": ["Fort Jesus", "Old Town", "Diani Beach"] }
        }
      },
      "Kiribati": {
        "cities": {
          "Tarawa": { "attractions": ["Parliament Building", "World War II Relics", "Betio Beach"] },
          "Kiritimati": { "attractions": ["Christmas Island Lagoon", "Bird Watching", "Fishing Spots"] }
        }
      },
      "Kuwait": {
        "cities": {
          "Kuwait City": { "attractions": ["Kuwait Towers", "Grand Mosque", "Souq Al-Mubarakiya"] },
          "Hawalli": { "attractions": ["Scientific Center", "Shaab Park", "Mirror House"] }
        }
      },
      "Kyrgyzstan": {
        "cities": {
          "Bishkek": { "attractions": ["Ala-Too Square", "Osh Bazaar", "State History Museum"] },
          "Osh": { "attractions": ["Sulaiman-Too Mountain", "Osh Bazaar", "Rabat Abdulla Khan Mosque"] }
        }
      },
      "Laos": {
        "cities": {
          "Vientiane": { "attractions": ["Pha That Luang", "Patuxai", "Wat Si Saket"] },
          "Luang Prabang": { "attractions": ["Mount Phousi", "Kuang Si Falls", "Royal Palace"] }
        }
      },
      "Latvia": {
        "cities": {
          "Riga": { "attractions": ["Old Town", "House of the Blackheads", "Riga Cathedral"] },
          "Jūrmala": { "attractions": ["Jūrmala Beach", "Dzintari Forest Park", "Kemeri National Park"] }
        }
      },
      "Lebanon": {
        "cities": {
          "Beirut": { "attractions": ["Pigeon Rocks", "National Museum", "Mohammad Al-Amin Mosque"] },
          "Byblos": { "attractions": ["Byblos Castle", "Old Souk", "Byblos Port"] }
        }
      },
      "Lesotho": {
        "cities": {
          "Maseru": { "attractions": ["Maseru Mall", "Thaba Bosiu", "Royal Palace"] },
          "Teyateyaneng": { "attractions": ["Maluti Mountains", "Craft Markets", "Liphofung Caves"] }
        }
      },
      "Liberia": {
        "cities": {
          "Monrovia": { "attractions": ["Centennial Pavilion", "Liberia National Museum", "Providence Island"] },
          "Buchanan": { "attractions": ["Buchanan Beach", "Port of Buchanan", "Local Markets"] }
        }
      },
      "Libya": {
        "cities": {
          "Tripoli": { "attractions": ["Red Castle", "Martyrs’ Square", "Arch of Marcus Aurelius"] },
          "Benghazi": { "attractions": ["Old City", "Benghazi Zoo", "Jebel Akhdar"] }
        }
      },
      "Liechtenstein": {
        "cities": {
          "Vaduz": { "attractions": ["Vaduz Castle", "Liechtenstein National Museum", "Cathedral of St. Florin"] },
          "Schaan": { "attractions": ["Schaan Church", "Dux Mountain", "Liechtenstein Art Museum"] }
        }
      },
      "Lithuania": {
        "cities": {
          "Vilnius": { "attractions": ["Gediminas Tower", "Cathedral Square", "Užupis District"] },
          "Kaunas": { "attractions": ["Kaunas Castle", "Ninth Fort", "Liberty Avenue"] }
        }
      },
      "Luxembourg": {
        "cities": {
          "Luxembourg City": { "attractions": ["Bock Casemates", "Grand Ducal Palace", "Notre-Dame Cathedral"] },
          "Esch-sur-Alzette": { "attractions": ["Blast Furnace", "Rockhal", "Gaalgebierg Park"] }
        }
      },
      "Madagascar": {
        "cities": {
          "Antananarivo": { "attractions": ["Rova of Antananarivo", "Ambohimanga", "Lemurs’ Park"] },
          "Toamasina": { "attractions": ["Port of Toamasina", "Ivoloina Park", "Bazary Be"] }
        }
      },
      "Malawi": {
        "cities": {
          "Lilongwe": { "attractions": ["Lilongwe Wildlife Centre", "Old Town Market", "Nature Sanctuary"] },
          "Blantyre": { "attractions": ["St. Michael’s Church", "Mandala House", "Mount Mulanje"] }
        }
      },
      "Malaysia": {
        "cities": {
          "Kuala Lumpur": { "attractions": ["Petronas Towers", "Batu Caves", "Merdeka Square"] },
          "Penang": { "attractions": ["George Town", "Kek Lok Si Temple", "Penang Hill"] }
        }
      },
      "Maldives": {
        "cities": {
          "Malé": { "attractions": ["Old Friday Mosque", "Fish Market", "Hulhumalé Beach"] },
          "Addu City": { "attractions": ["Maradhoo Island", "Gan WWII Base", "Eedhigali Kilhi"] }
        }
      },
      "Mali": {
        "cities": {
          "Bamako": { "attractions": ["National Museum", "Grand Mosque", "Bamako Zoo"] },
          "Timbuktu": { "attractions": ["Djinguereber Mosque", "Sankore Madrasah", "Ahmed Baba Centre"] }
        }
      },
      "Malta": {
        "cities": {
          "Valletta": { "attractions": ["St. John’s Co-Cathedral", "Upper Barrakka Gardens", "Grand Harbour"] },
          "Mdina": { "attractions": ["Mdina Gate", "St. Paul’s Cathedral", "Bastion Square"] }
        }
      },
      "Marshall Islands": {
        "cities": {
          "Majuro": { "attractions": ["Alele Museum", "Laura Beach", "Majuro Bridge"] },
          "Ebeye": { "attractions": ["Ebeye Beach", "WWII Relics", "Local Markets"] }
        }
      },
      "Mauritania": {
        "cities": {
          "Nouakchott": { "attractions": ["National Museum", "Friday Mosque", "Port de Pêche"] },
          "Chinguetti": { "attractions": ["Chinguetti Mosque", "Ancient Libraries", "Sahara Dunes"] }
        }
      },
      "Mauritius": {
        "cities": {
          "Port Louis": { "attractions": ["Aapravasi Ghat", "Caudan Waterfront", "Fort Adelaide"] },
          "Grand Baie": { "attractions": ["Grand Baie Beach", "Pereybere", "La Cuvette"] }
        }
      },
      "Mexico": {
        "cities": {
          "Mexico City": { "attractions": ["Zócalo", "Chapultepec Castle", "Teotihuacan Pyramids"] },
          "Cancún": { "attractions": ["Chichen Itza", "Playa Delfines", "Isla Mujeres"] }
        }
      },
      "Micronesia": {
        "cities": {
          "Kolonia": { "attractions": ["Nan Madol", "Kepirohi Waterfall", "Pohnpei Botanical Garden"] },
          "Weno": { "attractions": ["Chuuk Lagoon", "Japanese Lighthouse", "Blue Lagoon Resort"] }
        }
      },
      "Moldova": {
        "cities": {
          "Chișinău": { "attractions": ["Stephen the Great Monument", "Nativity Cathedral", "Central Park"] },
          "Tiraspol": { "attractions": ["Suvorov Square", "House of Soviets", "Kvint Distillery"] }
        }
      },
      "Monaco": {
        "cities": {
          "Monaco-Ville": { "attractions": ["Prince’s Palace", "Oceanographic Museum", "Monaco Cathedral"] },
          "Monte Carlo": { "attractions": ["Casino de Monte-Carlo", "Grand Prix Circuit", "Larvotto Beach"] }
        }
      },
      "Mongolia": {
        "cities": {
          "Ulaanbaatar": { "attractions": ["Gandan Monastery", "Sukhbaatar Square", "Bogd Khan Palace"] },
          "Erdenet": { "attractions": ["Erdenet Mining Museum", "Bulgan Mountain", "Local Markets"] }
        }
      },
      "Montenegro": {
        "cities": {
          "Podgorica": { "attractions": ["Millennium Bridge", "Cathedral of the Resurrection", "Old Town"] },
          "Kotor": { "attractions": ["Kotor Old Town", "St. Tryphon Cathedral", "Bay of Kotor"] }
        }
      },
      "Morocco": {
        "cities": {
          "Marrakech": { "attractions": ["Jemaa el-Fnaa", "Bahia Palace", "Majorelle Garden"] },
          "Fes": { "attractions": ["Medina of Fes", "Al-Qarawiyyin Mosque", "Chouara Tannery"] }
        }
      },
      "Mozambique": {
        "cities": {
          "Maputo": { "attractions": ["Maputo Central Market", "Fortress of Maputo", "Tunduru Gardens"] },
          "Beira": { "attractions": ["Beira Cathedral", "Macuti Lighthouse", "Gorongosa National Park"] }
        }
      },
      "Myanmar": {
        "cities": {
          "Yangon": { "attractions": ["Shwedagon Pagoda", "Sule Pagoda", "Bogyoke Market"] },
          "Mandalay": { "attractions": ["Mandalay Hill", "U Bein Bridge", "Mahamuni Pagoda"] }
        }
      },
      "Namibia": {
        "cities": {
          "Windhoek": { "attractions": ["Christuskirche", "Independence Museum", "Daan Viljoen Park"] },
          "Swakopmund": { "attractions": ["Swakopmund Jetty", "Dune 7", "National Marine Aquarium"] }
        }
      },
      "Nauru": {
        "cities": {
          "Yaren": { "attractions": ["Parliament House", "Buada Lagoon", "Moqua Well"] },
          "Aiwo": { "attractions": ["Command Ridge", "Phosphate Loading Cantilever", "Aiwo Harbour"] }
        }
      },
      "Nepal": {
        "cities": {
          "Kathmandu": { "attractions": ["Swayambhunath", "Durbar Square", "Pashupatinath Temple"] },
          "Pokhara": { "attractions": ["Phewa Lake", "Davis Falls", "Peace Pagoda"] }
        }
      },
      "Netherlands": {
        "cities": {
          "Amsterdam": { "attractions": ["Rijksmuseum", "Anne Frank House", "Vondelpark"] },
          "Rotterdam": { "attractions": ["Erasmus Bridge", "Cube Houses", "Euromast"] }
        }
      },
      "New Zealand": {
        "cities": {
          "Auckland": { "attractions": ["Sky Tower", "Waiheke Island", "Auckland War Memorial"] },
          "Queenstown": { "attractions": ["Lake Wakatipu", "The Remarkables", "Fergburger"] }
        }
      },
      "Nicaragua": {
        "cities": {
          "Managua": { "attractions": ["Old Cathedral", "Loma de Tiscapa", "Puerto Salvador Allende"] },
          "Granada": { "attractions": ["Granada Cathedral", "Las Isletas", "Mombacho Volcano"] }
        }
      },
      "Niger": {
        "cities": {
          "Niamey": { "attractions": ["Grand Mosque", "National Museum", "W National Park"] },
          "Zinder": { "attractions": ["Sultan’s Palace", "Old Town", "Birni Quarter"] }
        }
      },
      "Nigeria": {
        "cities": {
          "Lagos": { "attractions": ["Lekki Conservation Centre", "Nike Art Gallery", "Freedom Park"] },
          "Abuja": { "attractions": ["Aso Rock", "National Mosque", "Millennium Park"] }
        }
      },
      "North Korea": {
        "cities": {
          "Pyongyang": { "attractions": ["Juche Tower", "Kim Il-sung Square", "Arch of Triumph"] },
          "Kaesong": { "attractions": ["Koryo Museum", "Nam Gate", "Panmunjom"] }
        }
      },
      "North Macedonia": {
        "cities": {
          "Skopje": { "attractions": ["Stone Bridge", "Old Bazaar", "Macedonia Square"] },
          "Ohrid": { "attractions": ["Lake Ohrid", "Church of St. John", "Samuel’s Fortress"] }
        }
      },
      "Norway": {
        "cities": {
          "Oslo": { "attractions": ["Vigeland Sculpture Park", "Opera House", "Munch Museum"] },
          "Bergen": { "attractions": ["Bryggen", "Fløyen Mountain", "Fish Market"] }
        }
      },
      "Oman": {
        "cities": {
          "Muscat": { "attractions": ["Sultan Qaboos Mosque", "Mutrah Souq", "Royal Opera House"] },
          "Salalah": { "attractions": ["Al Baleed Archaeological Park", "Wadi Darbat", "Frankincense Tree"] }
        }
      },
      "Pakistan": {
        "cities": {
          "Lahore": { "attractions": ["Lahore Fort", "Badshahi Mosque", "Shalimar Gardens"] },
          "Karachi": { "attractions": ["Quaid’s Mausoleum", "Clifton Beach", "Mohatta Palace"] }
        }
      },
      "Palau": {
        "cities": {
          "Koror": { "attractions": ["Jellyfish Lake", "Belau National Museum", "Rock Islands"] },
          "Melekeok": { "attractions": ["Capitol Building", "Ngardmau Waterfall", "Babeldaob Beaches"] }
        }
      },
      "Palestine": {
        "cities": {
          "Jerusalem": { "attractions": ["Al-Aqsa Mosque", "Church of the Holy Sepulchre", "Mount of Olives"] },
          "Bethlehem": { "attractions": ["Church of the Nativity", "Manger Square", "Shepherds’ Field"] }
        }
      },
      "Panama": {
        "cities": {
          "Panama City": { "attractions": ["Panama Canal", "Casco Viejo", "Biomuseo"] },
          "Bocas del Toro": { "attractions": ["Starfish Beach", "Red Frog Beach", "Bastimentos Island"] }
        }
      },
      "Papua New Guinea": {
        "cities": {
          "Port Moresby": { "attractions": ["National Museum", "Parliament House", "Port Moresby Nature Park"] },
          "Lae": { "attractions": ["Rainforest Habitat", "Botanic Gardens", "Mount Lunaman"] }
        }
      },
      "Paraguay": {
        "cities": {
          "Asunción": { "attractions": ["Palacio de los López", "Panteón Nacional", "Casa de la Independencia"] },
          "Ciudad del Este": { "attractions": ["Itaipu Dam", "Monday Falls", "Friendship Bridge"] }
        }
      },
      "Peru": {
        "cities": {
          "Lima": { "attractions": ["Plaza Mayor", "Larco Museum", "Miraflores Boardwalk"] },
          "Cusco": { "attractions": ["Machu Picchu", "Sacsayhuamán", "Qorikancha"] }
        }
      },
      "Philippines": {
        "cities": {
          "Manila": { "attractions": ["Rizal Park", "Intramuros", "Manila Cathedral"] },
          "Cebu": { "attractions": ["Magellan’s Cross", "Basilica del Santo Niño", "Kawasan Falls"] }
        }
      },
      "Poland": {
        "cities": {
          "Warsaw": { "attractions": ["Old Town", "Royal Castle", "Palace of Culture"] },
          "Kraków": { "attractions": ["Wawel Castle", "Main Market Square", "Kazimierz District"] }
        }
      },
      "Portugal": {
        "cities": {
          "Lisbon": { "attractions": ["Belém Tower", "Jerónimos Monastery", "Alfama District"] },
          "Porto": { "attractions": ["Ribeira District", "Clérigos Tower", "Livraria Lello"] }
        }
      },
      "Qatar": {
        "cities": {
          "Doha": { "attractions": ["Souq Waqif", "Museum of Islamic Art", "The Pearl"] },
          "Al Wakrah": { "attractions": ["Al Wakrah Souq", "Heritage Village", "Mangrove Beach"] }
        }
      },
      "Romania": {
        "cities": {
          "Bucharest": { "attractions": ["Palace of Parliament", "Old Town", "Herăstrău Park"] },
          "Brașov": { "attractions": ["Bran Castle", "Black Church", "Mount Tâmpa"] }
        }
      },
      "Russia": {
        "cities": {
          "Moscow": { "attractions": ["Red Square", "Kremlin", "Bolshoi Theatre"] },
          "Saint Petersburg": { "attractions": ["Hermitage Museum", "Peterhof Palace", "Church of the Savior"] }
        }
      },
      "Rwanda": {
        "cities": {
          "Kigali": { "attractions": ["Genocide Memorial", "Kimironko Market", "Inema Arts"] },
          "Gisenyi": { "attractions": ["Lake Kivu", "Rubavu Beach", "Hot Springs"] }
        }
      },
      "Saint Kitts and Nevis": {
        "cities": {
          "Basseterre": { "attractions": ["Brimstone Hill Fortress", "Independence Square", "St. George’s Church"] },
          "Charlestown": { "attractions": ["Pinney’s Beach", "Nevis Peak", "Alexander Hamilton House"] }
        }
      },
      "Saint Lucia": {
        "cities": {
          "Castries": { "attractions": ["Derek Walcott Square", "Castries Market", "Pigeon Island"] },
          "Soufrière": { "attractions": ["Sulphur Springs", "Pitons", "Diamond Falls"] }
        }
      },
      "Saint Vincent and the Grenadines": {
        "cities": {
          "Kingstown": { "attractions": ["Botanical Gardens", "Fort Charlotte", "St. George’s Cathedral"] },
          "Bequia": { "attractions": ["Princess Margaret Beach", "Old Hegg Turtle Sanctuary", "Port Elizabeth"] }
        }
      },
      "Samoa": {
        "cities": {
          "Apia": { "attractions": ["Robert Louis Stevenson Museum", "Palolo Deep Marine Reserve", "Immaculate Conception Cathedral"] },
          "Salelologa": { "attractions": ["Afu Aau Falls", "Saleaula Lava Fields", "Savai’i Beaches"] }
        }
      },
      "San Marino": {
        "cities": {
          "San Marino City": { "attractions": ["Three Towers", "Basilica di San Marino", "Piazza della Libertà"] },
          "Borgo Maggiore": { "attractions": ["Cable Car", "Mercato", "Mount Titano Views"] }
        }
      },
      "Sao Tome and Principe": {
        "cities": {
          "São Tomé": { "attractions": ["São Sebastião Fort", "Pico Cão Grande", "Praia das Conchas"] },
          "Santo António": { "attractions": ["Rolás Islet", "Príncipe Beaches", "Plantation Houses"] }
        }
      },
      "Saudi Arabia": {
        "cities": {
          "Riyadh": { "attractions": ["Al Rajhi Grand Mosque", "Kingdom Centre Tower", "National Museum"] },
          "Jeddah": { "attractions": ["Al-Balad", "Floating Mosque", "Jeddah Corniche"] }
        }
      },
      "Senegal": {
        "cities": {
          "Dakar": { "attractions": ["Gorée Island", "African Renaissance Monument", "Dakar Grand Mosque"] },
          "Saint-Louis": { "attractions": ["Faidherbe Bridge", "Old Town", "Langue de Barbarie"] }
        }
      },
      "Serbia": {
        "cities": {
          "Belgrade": { "attractions": ["Kalemegdan Fortress", "Skadarlija", "St. Sava Temple"] },
          "Novi Sad": { "attractions": ["Petrovaradin Fortress", "Danube Park", "Liberty Square"] }
        }
      },
      "Seychelles": {
        "cities": {
          "Victoria": { "attractions": ["Clock Tower", "Botanical Gardens", "Seychelles National Museum"] },
          "Beau Vallon": { "attractions": ["Beau Vallon Beach", "Diving Spots", "Local Markets"] }
        }
      },
      "Sierra Leone": {
        "cities": {
          "Freetown": { "attractions": ["Cotton Tree", "National Museum", "Lumley Beach"] },
          "Bo": { "attractions": ["Bo Government House", "Clock Tower", "Local Markets"] }
        }
      },
      "Singapore": {
        "cities": {
          "Singapore": { "attractions": ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"] }
        }
      },
      "Slovakia": {
        "cities": {
          "Bratislava": { "attractions": ["Bratislava Castle", "Old Town", "St. Martin’s Cathedral"] },
          "Košice": { "attractions": ["St. Elisabeth Cathedral", "Hlavná Street", "East Slovak Museum"] }
        }
      },
      "Slovenia": {
        "cities": {
          "Ljubljana": { "attractions": ["Ljubljana Castle", "Triple Bridge", "Lake Bled"] },
          "Maribor": { "attractions": ["Old Vine House", "Maribor Cathedral", "Drava River"] }
        }
      },
      "Solomon Islands": {
        "cities": {
          "Honiara": { "attractions": ["National Museum", "Central Market", "Point Cruz"] },
          "Gizo": { "attractions": ["Kennedy Island", "Gizo Market", "Diving Spots"] }
        }
      },
      "Somalia": {
        "cities": {
          "Mogadishu": { "attractions": ["Lido Beach", "Bakara Market", "Mogadishu Cathedral Ruins"] },
          "Hargeisa": { "attractions": ["Laas Geel", "Hargeisa War Memorial", "Central Market"] }
        }
      },
      "South Africa": {
        "cities": {
          "Cape Town": { "attractions": ["Table Mountain", "Robben Island", "V&A Waterfront"] },
          "Johannesburg": { "attractions": ["Apartheid Museum", "Soweto", "Gold Reef City"] }
        }
      },
      "South Korea": {
        "cities": {
          "Seoul": { "attractions": ["Gyeongbokgung Palace", "N Seoul Tower", "Myeongdong"] },
          "Busan": { "attractions": ["Haeundae Beach", "Gamcheon Village", "Jagalchi Market"] }
        }
      },
      "South Sudan": {
        "cities": {
          "Juba": { "attractions": ["Juba Bridge", "John Garang Mausoleum", "St. Theresa Cathedral"] },
          "Wau": { "attractions": ["Wau Cathedral", "Local Markets", "Jur River"] }
        }
      },
      "Spain": {
        "cities": {
          "Madrid": { "attractions": ["Prado Museum", "Royal Palace", "Retiro Park"] },
          "Barcelona": { "attractions": ["Sagrada Família", "Park Güell", "La Rambla"] }
        }
      },
      "Sri Lanka": {
        "cities": {
          "Colombo": { "attractions": ["Gangaramaya Temple", "Galle Face Green", "National Museum"] },
          "Kandy": { "attractions": ["Temple of the Tooth", "Kandy Lake", "Botanical Gardens"] }
        }
      },
      "Sudan": {
        "cities": {
          "Khartoum": { "attractions": ["National Museum", "Nile Confluence", "Tuti Island"] },
          "Omdurman": { "attractions": ["Mahdi’s Tomb", "Souq Omdurman", "Khalifa House"] }
        }
      },
      "Suriname": {
        "cities": {
          "Paramaribo": { "attractions": ["Saint Peter and Paul Cathedral", "Fort Zeelandia", "Waterfront"] },
          "Nieuw Nickerie": { "attractions": ["Bigi Pan", "Nickerie River", "Local Markets"] }
        }
      },
      "Sweden": {
        "cities": {
          "Stockholm": { "attractions": ["Vasa Museum", "Gamla Stan", "Skansen"] },
          "Gothenburg": { "attractions": ["Liseberg", "Universeum", "Haga District"] }
        }
      },
      "Switzerland": {
        "cities": {
          "Zurich": { "attractions": ["Lake Zurich", "Grossmünster", "Bahnhofstrasse"] },
          "Geneva": { "attractions": ["Jet d’Eau", "St. Pierre Cathedral", "UN Building"] }
        }
      },
      "Syria": {
        "cities": {
          "Damascus": { "attractions": ["Umayyad Mosque", "Old City", "Souq Al-Hamidiyeh"] },
          "Aleppo": { "attractions": ["Citadel of Aleppo", "Great Mosque", "Al-Madina Souq"] }
        }
      },
      "Tajikistan": {
        "cities": {
          "Dushanbe": { "attractions": ["National Museum", "Rudaki Park", "Ismoili Somoni Statue"] },
          "Khujand": { "attractions": ["Panjshanbe Bazaar", "Sheikh Muslihiddin Mosque", "Syr Darya River"] }
        }
      },
      "Tanzania": {
        "cities": {
          "Dar es Salaam": { "attractions": ["National Museum", "Kariakoo Market", "Coco Beach"] },
          "Zanzibar": { "attractions": ["Stone Town", "Prison Island", "Jozani Forest"] }
        }
      },
      "Thailand": {
        "cities": {
          "Bangkok": { "attractions": ["Grand Palace", "Wat Arun", "Chatuchak Market"] },
          "Chiang Mai": { "attractions": ["Doi Suthep", "Old City Temples", "Night Bazaar"] }
        }
      },
      "Timor-Leste": {
        "cities": {
          "Dili": { "attractions": ["Cristo Rei Statue", "Tais Market", "Santa Cruz Cemetery"] },
          "Baucau": { "attractions": ["Old Town", "Baucau Beach", "Wataboo Waterfall"] }
        }
      },
      "Togo": {
        "cities": {
          "Lomé": { "attractions": ["Grand Marché", "Fetish Market", "Lomé Cathedral"] },
          "Kpalimé": { "attractions": ["Mount Kloto", "Kpalimé Waterfalls", "Craft Village"] }
        }
      },
      "Tonga": {
        "cities": {
          "Nukuʻalofa": { "attractions": ["Royal Palace", "Talamahu Market", "Ha’amonga ‘a Maui"] },
          "Neiafu": { "attractions": ["Vava’u Harbour", "Ene’io Botanical Garden", "Mount Talau"] }
        }
      },
      "Trinidad and Tobago": {
        "cities": {
          "Port of Spain": { "attractions": ["Queen’s Park Savannah", "National Museum", "Magnificent Seven"] },
          "San Fernando": { "attractions": ["San Fernando Hill", "Waterfront", "Naparima Bowl"] }
        }
      },
      "Tunisia": {
        "cities": {
          "Tunis": { "attractions": ["Medina of Tunis", "Bardo Museum", "Zitouna Mosque"] },
          "Sousse": { "attractions": ["Ribat of Sousse", "Medina", "Port El Kantaoui"] }
        }
      },
      "Turkey": {
        "cities": {
          "Istanbul": { "attractions": ["Hagia Sophia", "Topkapi Palace", "Blue Mosque"] },
          "Antalya": { "attractions": ["Old Town", "Düden Waterfalls", "Hadrian’s Gate"] }
        }
      },
      "Turkmenistan": {
        "cities": {
          "Ashgabat": { "attractions": ["Neutrality Monument", "Turkmen Carpet Museum", "Independence Park"] },
          "Turkmenbashi": { "attractions": ["Caspian Sea Port", "Awaza Beach", "Oguzkhan Palace"] }
        }
      },
      "Tuvalu": {
        "cities": {
          "Funafuti": { "attractions": ["Funafuti Lagoon", "Conservation Area", "Philatelic Bureau"] },
          "Vaiaku": { "attractions": ["Government House", "Vaiaku Lagi Hotel", "Local Beaches"] }
        }
      },
      "Uganda": {
        "cities": {
          "Kampala": { "attractions": ["Kasubi Tombs", "Uganda Museum", "Namugongo Shrine"] },
          "Entebbe": { "attractions": ["Botanical Gardens", "Lake Victoria", "Uganda Wildlife Centre"] }
        }
      },
      "Ukraine": {
        "cities": {
          "Kyiv": { "attractions": ["Saint Sophia’s Cathedral", "Kyiv Pechersk Lavra", "Maidan Nezalezhnosti"] },
          "Lviv": { "attractions": ["Rynok Square", "Lviv Opera House", "High Castle"] }
        }
      },
      "United Arab Emirates": {
        "cities": {
          "Dubai": { "attractions": ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah"] },
          "Abu Dhabi": { "attractions": ["Sheikh Zayed Mosque", "Louvre Abu Dhabi", "Emirates Palace"] }
        }
      },
      "United Kingdom": {
        "cities": {
          "London": { "attractions": ["Big Ben", "Tower of London", "British Museum"] },
          "Edinburgh": { "attractions": ["Edinburgh Castle", "Royal Mile", "Arthur’s Seat"] }
        }
      },
      "United States": {
        "cities": {
          "New York": { "attractions": ["Statue of Liberty", "Times Square", "Central Park"] },
          "Los Angeles": { "attractions": ["Hollywood Sign", "Griffith Observatory", "Santa Monica Pier"] }
        }
      },
      "Uruguay": {
        "cities": {
          "Montevideo": { "attractions": ["Plaza Independencia", "Rambla", "Ciudad Vieja"] },
          "Punta del Este": { "attractions": ["Casapueblo", "La Mano", "Punta Ballena"] }
        }
      },
      "Uzbekistan": {
        "cities": {
          "Tashkent": { "attractions": ["Chorsu Bazaar", "Amir Timur Museum", "Hazrat Imam Complex"] },
          "Samarkand": { "attractions": ["Registan Square", "Shah-i-Zinda", "Gur-e-Amir"] }
        }
      },
      "Vanuatu": {
        "cities": {
          "Port Vila": { "attractions": ["Mele Cascades", "National Museum", "Iririki Island"] },
          "Luganville": { "attractions": ["Million Dollar Point", "Santo Blue Hole", "SS President Coolidge"] }
        }
      },
      "Venezuela": {
        "cities": {
          "Caracas": { "attractions": ["Bolívar Square", "National Pantheon", "Ávila Mountain"] },
          "Maracaibo": { "attractions": ["Basilica of Our Lady", "Lake Maracaibo", "Botanical Garden"] }
        }
      },
      "Vietnam": {
        "cities": {
          "Hanoi": { "attractions": ["Hoan Kiem Lake", "Old Quarter", "Ho Chi Minh Mausoleum"] },
          "Ho Chi Minh City": { "attractions": ["Notre-Dame Basilica", "Cu Chi Tunnels", "Ben Thanh Market"] }
        }
      },
      "Yemen": {
        "cities": {
          "Sana’a": { "attractions": ["Old City", "Great Mosque", "Dar al-Hajar"] },
          "Aden": { "attractions": ["Sira Fortress", "Crater District", "Aden Tanks"] }
        }
      },
      "Zambia": {
        "cities": {
          "Lusaka": { "attractions": ["Lusaka National Museum", "Kabwata Cultural Village", "Munda Wanga"] },
          "Livingstone": { "attractions": ["Victoria Falls", "Mosi-oa-Tunya Park", "Livingstone Museum"] }
        }
      },
      "Zimbabwe": {
        "cities": {
          "Harare": { "attractions": ["National Gallery", "Harare Gardens", "Mbare Musika"] },
          "Bulawayo": { "attractions": ["Matobo National Park", "Natural History Museum", "Khami Ruins"] }
        }
      }
    }
  }
