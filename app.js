/**
 * TripAdvisor Portal Interactive Engine — Himachal Tourism
 * Curated & Managed by Aman Thakur
 * Direct Hotline: +91 6230135697
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DATA REPOSITORIES (Himachal Destinations, Resorts, Snow Treks, Mountain Dining, Reviews)
  // =========================================================================

  const DESTINATIONS_DATA = [
    {
      id: 'dest-manali',
      title: 'Manali & Solang Valley',
      region: 'Kullu District (6,726 ft)',
      tag: '#1 Destination in Himachal',
      rating: 4.9,
      reviewCount: 12450,
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=80',
      bestTime: 'Oct - Feb (Snow) | Mar - Jun (Pleasant)',
      highlights: ['Atal Tunnel & Sissu Drive', 'Solang Valley Skiing & Paragliding', 'Rohtang Snow Pass', 'Old Manali Cafes', 'Beas River Rafting'],
      description: 'Cradled in the Pir Panjal and Dhauladhar ranges, Manali is Himachal’s adventure capital. From snowy high passes to cedar-scented trails and riverside dining, it offers the ultimate Himalayan holiday.',
      topStays: 'Snow Valley Resorts, Solang Ski Chalet, Span Resort & Spa',
      startingPrice: 'Packages from ₹8,999'
    },
    {
      id: 'dest-shimla',
      title: 'Shimla & Kufri',
      region: 'Shimla District (7,238 ft)',
      tag: 'Queen of Hills',
      rating: 4.8,
      reviewCount: 9820,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80',
      bestTime: 'Year-Round | Dec - Jan for Snowfall',
      highlights: ['UNESCO Kalka-Shimla Toy Train', 'The Ridge & Christ Church', 'Jakhoo Ropeway to Hanuman Statue', 'Kufri Snow Fun & Yak Rides', 'Mall Road Stroll'],
      description: 'The storied summer capital of British India with stately neo-Gothic colonial architecture, sprawling pedestrian Mall Road, and panoramic cedar ridge viewpoints.',
      topStays: 'Wildflower Hall An Oberoi Resort, The Oberoi Cecil',
      startingPrice: 'Packages from ₹7,499'
    },
    {
      id: 'dest-dharamshala',
      title: 'Dharamshala & McLeodGanj',
      region: 'Kangra Valley (6,831 ft)',
      tag: 'Little Lhasa & Spiritual Hub',
      rating: 4.9,
      reviewCount: 8150,
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&auto=format&fit=crop&q=80',
      bestTime: 'Mar - Jun & Sep - Dec',
      highlights: ['Tsuglagkhang (Dalai Lama Temple)', 'Triund Mountain Ridge Trek', 'Bhagsu Waterfall & Shiva Cafe', 'Illiterati Books Cafe', 'Norbulingka Tibetan Institute'],
      description: 'Perched in the forested shadow of the dramatic Dhauladhar snow wall. Home to the Tibetan government-in-exile, peaceful monasteries, and famous ridge treks.',
      topStays: 'Hyatt Regency Dharamshala, Fortune Park Moksha',
      startingPrice: 'Packages from ₹6,999'
    },
    {
      id: 'dest-spiti',
      title: 'Spiti Valley & Kaza',
      region: 'Lahaul & Spiti District (12,500 ft)',
      tag: 'Middle Land Trans-Himalaya',
      rating: 5.0,
      reviewCount: 5240,
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&auto=format&fit=crop&q=80',
      bestTime: 'Jun - Sep (Summer Roads) | Jan - Feb (White Spiti Safari)',
      highlights: ['Key Gompa 1000-Year Monastery', 'Chandra Taal Sacred Moon Lake', 'Highest Post Office in Hikkim', 'Langza Marine Fossil Village', 'Kunzum Pass Crossing'],
      description: 'A breathtaking high-altitude cold mountain desert characterized by stark lunar canyons, ancient Buddhist monasteries, star-studded dark skies, and pristine glacial lakes.',
      topStays: 'Grand Spiti Desert Camp, Chandratal Luxury Tents, Langza Homestays',
      startingPrice: 'Packages from ₹14,999'
    },
    {
      id: 'dest-jibhi',
      title: 'Jibhi & Tirthan Valley',
      region: 'Banjar Valley, Kullu (5,250 ft)',
      tag: 'UNESCO Eco-Paradise',
      rating: 4.9,
      reviewCount: 4320,
      image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&auto=format&fit=crop&q=80',
      bestTime: 'Mar - Jun & Sep - Nov',
      highlights: ['Serolsar Lake Ancient Forest Trek', '10,800 ft Jalori Pass', 'Great Himalayan National Park (UNESCO)', 'Chehni Kothi 1500-yr Watchtower', 'Wild Trout Angling'],
      description: 'Unspoiled paradise of babbling rivers, dense pine woods, and artisanal wood-and-mud homestays. The gateway to the UNESCO World Heritage Great Himalayan National Park.',
      topStays: 'The Mudhouse Experiential Homestay, The Himalayan Cedar Chalet',
      startingPrice: 'Packages from ₹5,800'
    },
    {
      id: 'dest-kasol',
      title: 'Kasol & Parvati Valley',
      region: 'Kullu District (5,180 ft)',
      tag: 'Riverside Woods & Hot Springs',
      rating: 4.8,
      reviewCount: 7120,
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=80',
      bestTime: 'Apr - Jun & Oct - Nov',
      highlights: ['Kheerganga Natural Thermal Springs', 'Tosh & Chalal Village Trails', 'Manikaran Sahib Gurudwara Springs', 'German Bakeries & Israeli Food', 'Parvati River Camping'],
      description: 'Flanked by towering pine forests and the roaring glacial waters of the Parvati River. Famous for thermal sulfur springs, backpacking trails, and cozy mountain bakeries.',
      topStays: 'Riverside Deodar Wood Homestay, Parvati River Camps',
      startingPrice: 'Packages from ₹4,999'
    },
    {
      id: 'dest-dalhousie',
      title: 'Dalhousie & Khajjiar',
      region: 'Chamba District (6,460 ft)',
      tag: 'Mini Switzerland of India',
      rating: 4.8,
      reviewCount: 5680,
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop&q=80',
      bestTime: 'Mar - Jun (Spring) & Dec - Feb (Snow)',
      highlights: ['Khajjiar Saucer Meadow & Pine Lake', 'Kalatop Wildlife Sanctuary', 'Dainkund Singing Hill Peak', 'Subhash Baoli & Satdhara Falls', 'Colonial Churches'],
      description: 'Spanning five scenic hills in the Dhauladhar ranges, Dalhousie exudes quiet colonial serenity, while neighboring Khajjiar offers lush emerald meadows dubbed Mini Switzerland.',
      topStays: 'Grand View Heritage Hotel, Kalatop Forest Cedar Chalet',
      startingPrice: 'Packages from ₹5,999'
    },
    {
      id: 'dest-kinnaur',
      title: 'Kinnaur & Sangla Valley',
      region: 'Kinnaur District (8,900 ft)',
      tag: 'Land of Fairytales & Apples',
      rating: 4.9,
      reviewCount: 3410,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80',
      bestTime: 'May - Oct (Apple Harvest Season)',
      highlights: ['Chitkul (Last Village of India)', 'Baspa Glacial Riverbank', 'Kalpa Sunrise over Kinner Kailash', 'Kamru Fort & Ancient Wood Art', 'Golden Delicious Apple Orchards'],
      description: 'Bordering Tibet, Kinnaur is famed for crisp golden apple orchards, vertical deodar gorges, slate-roofed wooden temples, and sacred views of Mount Kinner Kailash.',
      topStays: 'Chitkul Baspa Riverside Homestay, Kalpa Apple Cottages',
      startingPrice: 'Packages from ₹11,999'
    },
    {
      id: 'dest-bir',
      title: 'Bir Billing & Barot Valley',
      region: 'Kangra & Mandi Districts (7,800 ft)',
      tag: 'World Paragliding Capital',
      rating: 5.0,
      reviewCount: 4620,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
      bestTime: 'Oct - Nov & Mar - Jun',
      highlights: ['Tandem Paragliding from Billing (8,000 ft)', 'Chokling Tibetan Monastery', 'Barot Valley Trout River Stream', 'Kangra Toy Train Halt', 'Tea Garden Walks'],
      description: 'Recognized globally as the world’s second highest paragliding takeoff site. Experience the rush of thermals above snow peaks, followed by serene Tibetan monastic gardens.',
      topStays: 'Barot Valley Trout Stream Homestay, Bir Glamping Domes',
      startingPrice: 'Packages from ₹4,500'
    },
    {
      id: 'dest-shangarh',
      title: 'Shangarh & Sainj Valley',
      region: 'Kullu District, GHNP Buffer Zone (6,900 ft)',
      tag: 'Unexplored Mythological Meadow',
      rating: 4.9,
      reviewCount: 2180,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
      bestTime: 'Mar - Jun (Spring) & Oct - Nov (Clear Skies)',
      highlights: ['Shangarh Alpine Meadow (Pandava Ground)', '1000-Yr Shangchul Mahadev Pagoda Temple', 'Barshangarh Hidden Waterfall', 'Great Himalayan National Park Gateway', 'Lapas Forest Birdwatching'],
      description: 'A tranquil hidden valley in the UNESCO GHNP buffer zone, free from commercial chaos. Celebrated for its sprawling velvet green meadow believed to have been prepared by the Pandavas and preserved under sacred deity laws.',
      topStays: 'Shangarh Pine Meadow Homestay, Sainj Riverfront Wooden Chalet',
      startingPrice: 'Packages from ₹5,499'
    },
    {
      id: 'dest-pangi',
      title: 'Pangi Valley & Sach Pass',
      region: 'Chamba & Lahaul Trans-Himalaya (8,000 - 14,500 ft)',
      tag: 'Himachal’s Most Remote Frontier',
      rating: 5.0,
      reviewCount: 1420,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80',
      bestTime: 'Late Jun - Oct (Sach Pass Open)',
      highlights: ['Sach Pass (14,500 ft) Cliff-Edge 4x4 Trail', 'Killar Mountain Gorge Settlement', 'Chenab Deep Canyon Rapids', 'Mindhal Mata Ancient Temple', 'Dharwas & Sural Wild Hamlets'],
      description: 'One of the most thrilling and unexplored mountain valleys in the Himalayas. Sandwiched between the Pir Panjal and Zanskar ranges, Pangi preserves raw tribal customs, dramatic hanging cliffs, and pristine glacial beauty.',
      topStays: 'Killar Alpine Forest PWD Guesthouse, Pangi Tribal Homestay',
      startingPrice: 'Packages from ₹16,500'
    },
    {
      id: 'dest-chanshal',
      title: 'Chanshal Pass & Pabbar Valley',
      region: 'Rohru, Shimla District (12,300 ft)',
      tag: 'Untamed Meadows & Trout Streams',
      rating: 4.9,
      reviewCount: 1890,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80',
      bestTime: 'May - Jun & Sep - Nov',
      highlights: ['Chanshal Peak (12,300 ft) Rolling Meadows', 'Pabbar River Wild Brown Trout Fishing', 'Larot Pine Base Camp', 'Dodra Kwar Remote Twin Villages', 'Hatu Peak & Apple Country'],
      description: 'An untouched treasure of the upper Shimla district. Chanshal Pass features expansive highland slopes perfect for backcountry trails, while Pabbar Valley is celebrated for its crystal trout streams and terraced orchards.',
      topStays: 'The Chanshal Larot Camp, Pabbar Valley Riverside Retreat',
      startingPrice: 'Packages from ₹7,999'
    },
    {
      id: 'dest-miyar',
      title: 'Miyar Valley & Lahaul Hidden Circuit',
      region: 'Udaipur, Lahaul (9,800 - 13,500 ft)',
      tag: 'Himachal Valley of Flowers',
      rating: 5.0,
      reviewCount: 1150,
      image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&auto=format&fit=crop&q=80',
      bestTime: 'Jun - Sep (Full Alpine Bloom)',
      highlights: ['Miyar River Glacial Meanders', 'Menthosa High Peak Views', 'Tingrit & Khanjar Traditional Villages', 'Trilokinath & Mrikula Devi Ancient Temples', 'Endless Wildflower Meadows'],
      description: 'Known as the "Valley of Flowers of Himachal Pradesh", Miyar Valley stretches nearly 100 km of blooming alpine grasslands, pristine glacial streams, and dramatic granite spires loved by global mountaineers.',
      topStays: 'Udaipur Apple Orchard Homestay, Tingrit Village Camp',
      startingPrice: 'Packages from ₹13,800'
    }
  ];
  
  const HOTELS_DATA = [
    // 5-Star Luxury Resorts
    {
      id: 'hotel-1',
      type: 'hotel',
      category: 'luxury',
      title: 'Wildflower Hall, An Oberoi Resort',
      location: 'Chharabra, Shimla, Himachal Pradesh (8,250 ft)',
      rating: 5.0,
      reviewCount: 2680,
      price: 28500,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80',
      tag: 'Top Hill Sanctuary',
      amenities: ['Heated Outdoor Whirlpool', 'Cedar Forest Views', 'Gourmet Dining', 'Heritage Suites', 'The Oberoi Spa'],
      description: 'Former colonial residence of Lord Kitchener at 8,250 feet above sea level. Featuring an open-air heated whirlpool with breathtaking views across snowy Shivalik and Pir Panjal ranges.'
    },
    {
      id: 'hotel-2',
      type: 'hotel',
      category: 'luxury',
      title: 'The Oberoi Cecil, Heritage Luxury',
      location: 'Chaura Maidan, Shimla, Himachal Pradesh',
      rating: 4.9,
      reviewCount: 3420,
      price: 16500,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
      tag: 'Colonial Heritage',
      amenities: ['Indoor Heated Pool', 'Cedar Suites', 'The Oberoi Spa', 'Atrium Lounge', 'Fine Dining'],
      description: 'Grand heritage sanctuary in Shimla with classic colonial charm, crackling fireplaces, and magnificent vistas of the cedar valleys.'
    },
    {
      id: 'hotel-3',
      type: 'hotel',
      category: 'luxury',
      title: 'Span Resort & Spa',
      location: 'Kullu-Manali Highway, Baragarh, HP',
      rating: 4.9,
      reviewCount: 2890,
      price: 14200,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80',
      tag: 'Beas Riverfront 5-Star',
      amenities: ['Private River Lawn', 'Helipad Access', 'Heated Riverview Pool', 'Trout Fishing', 'L’occitane Spa'],
      description: 'Iconic 5-star riverside resort set in 12 acres of deodar woodlands along the Beas river, halfway between Kullu and Manali.'
    },
    {
      id: 'hotel-4',
      type: 'hotel',
      category: 'luxury',
      title: 'Hyatt Regency Dharamshala Resort',
      location: 'Dharamkot, McLeodGanj, Kangra Valley, HP',
      rating: 4.8,
      reviewCount: 1940,
      price: 13500,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
      tag: 'Spiritual Sanctuary',
      amenities: ['Dhauladhar Range Views', 'Heated Indoor Pool', 'Tibetan Herbal Spa', 'Cedar Forest Trail'],
      description: 'Set amidst deodar cedar canopies in the foothills of the Dhauladhar mountains, just minutes from the Dalai Lama Temple Complex and the Bhagsu waterfall.'
    },
    {
      id: 'hotel-5',
      type: 'hotel',
      category: 'luxury',
      title: 'Fortune Park Moksha',
      location: 'Strawberry Hills, McLeodGanj, HP',
      rating: 4.8,
      reviewCount: 1640,
      price: 8900,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80',
      tag: 'Valley View Luxury',
      amenities: ['Dhauladhar Valley Balcony', 'Rooftop Heated Lounge', 'Himalayan Spa', 'Kids Zone'],
      description: 'Perched in Strawberry Hills with sweeping panoramic views of the Kangra Valley and snow peaks.'
    },
    {
      id: 'hotel-6',
      type: 'hotel',
      category: 'luxury',
      title: 'Grand View Heritage Hotel',
      location: 'Near Mall Road, Dalhousie, HP',
      rating: 4.8,
      reviewCount: 2150,
      price: 6500,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=80',
      tag: 'Colonial Heritage',
      amenities: ['Piramal Pir Panjal Views', 'Imperial Billiards Room', 'The Coffee Shop', 'Pine Forest Lawns'],
      description: '120-year-old heritage property in Dalhousie offering breathtaking vistas of snow-dusted Pir Panjal ranges.'
    },

    // Authentic Himachali Homestays
    {
      id: 'hotel-7',
      type: 'hotel',
      category: 'homestay',
      title: 'The Mudhouse Experiential Homestay',
      location: 'Jibhi, Banjar Valley, Himachal Pradesh',
      rating: 4.9,
      reviewCount: 1820,
      price: 3200,
      image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&auto=format&fit=crop&q=80',
      tag: 'Artisanal Mud Cottage',
      amenities: ['Handcrafted Clay & Wood', 'Babbling Stream Sound', 'Organic Home Cooked Food', 'Bonfire & Stargazing'],
      description: 'Built using traditional Himachali mud, stone, and pine. Located directly beside a sparkling mountain stream in offbeat Jibhi.'
    },
    {
      id: 'hotel-8',
      type: 'hotel',
      category: 'homestay',
      title: 'Traditional Kathkuni Apple Orchard Homestay',
      location: 'Naggar, Kullu Valley, Himachal Pradesh',
      rating: 4.9,
      reviewCount: 1540,
      price: 2800,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80',
      tag: 'UNESCO Style Kathkuni',
      amenities: ['Indigenous Interlocking Timber & Stone', 'Apple Orchard Walk', 'Traditional Siddu Cooking', 'Valley View Attic'],
      description: 'Stay in a genuine 100-year-old Kathkuni architectural home surrounded by blooming apple orchards with valley views.'
    },
    {
      id: 'hotel-9',
      type: 'hotel',
      category: 'homestay',
      title: 'Spiti Heritage Mud Homestay',
      location: 'Langza & Kibber, Spiti Valley, HP (14,200 ft)',
      rating: 4.9,
      reviewCount: 1150,
      price: 2200,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
      tag: 'High-Altitude Village',
      amenities: ['Authentic Bukhari Heaters', 'Fossil Village Walks', 'Spitian Barley & Butter Tea', 'Unmatched Milky Way View'],
      description: 'Live with local warm Spitian families beneath the shadow of the giant Buddha statue and snow-crested Chau Chau Kang Nilda peak.'
    },
    {
      id: 'hotel-10',
      type: 'hotel',
      category: 'homestay',
      title: 'Chitkul Baspa Riverside Homestay',
      location: 'Chitkul, Kinnaur, HP (Last Indian Village)',
      rating: 4.8,
      reviewCount: 980,
      price: 2500,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80',
      tag: 'Last Village of India',
      amenities: ['Baspa Glacial Riverbank', 'Wooden Kinnauri Balcony', 'Local Rajma Chawal', 'Border Outpost Views'],
      description: 'Nestled in the very last inhabited village on the Indo-Tibetan border. Wooden rooms facing turquoise Baspa river and snow glaciers.'
    },
    {
      id: 'hotel-11',
      type: 'hotel',
      category: 'homestay',
      title: 'Riverside Deodar Wood Homestay',
      location: 'Kasol, Parvati Valley, Himachal Pradesh',
      rating: 4.8,
      reviewCount: 1740,
      price: 2400,
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=80',
      tag: 'Parvati Riverbank',
      amenities: ['Deodar Pine Cladding', 'River Garden Hammocks', 'Israeli & Pahadi Food', 'Tosh Trek Base'],
      description: 'Rustic pine wood homestay right along the rushing turquoise Parvati river. Close to Chalal suspension bridge and natural hot springs.'
    },
    {
      id: 'hotel-12',
      type: 'hotel',
      category: 'homestay',
      title: 'Barot Valley Trout Stream Homestay',
      location: 'Barot Valley, Mandi, Himachal Pradesh',
      rating: 4.8,
      reviewCount: 890,
      price: 1900,
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80',
      tag: 'Angler’s Secret Gem',
      amenities: ['Angling & Trout Fishing', 'Uhl River Trail', 'Terraced Green Farms', 'Bonfire Nights'],
      description: 'Tucked away in the serene valley of the Uhl river. Peaceful mountain homestay famed for freshly prepared Himalayan trout.'
    },

    // Mountain Chalets & Cottages
    {
      id: 'hotel-13',
      type: 'hotel',
      category: 'chalet',
      title: 'Snow Valley Resorts & Spa Manali',
      location: 'Log Huts Area, Manali, Himachal Pradesh',
      rating: 4.9,
      reviewCount: 4850,
      price: 4299,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
      tag: 'Himachal Bestseller',
      amenities: ['Snow Peak Views', 'Breakfast Included', 'Bonfire & Live Music', 'Central Heating', 'Private Balcony'],
      description: 'Surrounded by pine woodlands with uninterrupted views of snow-clad Himalayan peaks. A favorite mountain stay curated by Aman Thakur with complimentary hot spring visits and bonfire evenings.'
    },
    {
      id: 'hotel-14',
      type: 'hotel',
      category: 'chalet',
      title: 'The Solang Mountain Ski Resort & Chalet',
      location: 'Solang Valley, Manali (Adjacent to Atal Tunnel)',
      rating: 4.9,
      reviewCount: 3120,
      price: 7499,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80',
      tag: 'Direct Ski Access',
      amenities: ['Ski-in Ski-out', 'Beas Riverfront', 'Glass Igloo Dining', 'Adventure Desk', 'Warm Fireplace'],
      description: 'Nestled on the banks of the Beas River with direct access to Solang ski slopes and the world-famous Atal Tunnel route into Lahaul valley.'
    },
    {
      id: 'hotel-15',
      type: 'hotel',
      category: 'chalet',
      title: 'The Himalayan Cedar Stream Chalet',
      location: 'Tirthan Valley, Great Himalayan National Park, HP',
      rating: 4.9,
      reviewCount: 1420,
      price: 4800,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=80',
      tag: 'Offbeat Eco-Chalet',
      amenities: ['Trout Riverfront', 'Wooden Alpine Architecture', 'Organic Kitchen', 'Jalori Pass Treks'],
      description: 'Hand-carved wooden chalet beside a crystal-clear Himalayan trout stream. Peaceful, serene, and far away from crowded tourist centers.'
    },
    {
      id: 'hotel-16',
      type: 'hotel',
      category: 'chalet',
      title: 'Kalatop Forest Cedar Chalet',
      location: 'Kalatop Wildlife Sanctuary, Dalhousie, HP',
      rating: 4.8,
      reviewCount: 1280,
      price: 5400,
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80',
      tag: 'Deep Pine Sanctuary',
      amenities: ['Inside Nature Reserve', 'Stunning Pir Panjal Views', 'Pine Scented Rooms', 'Bird Watching Trails'],
      description: 'Located deep inside the protected deodar and oak forests of Kalatop sanctuary, offering absolute silence and pristine Himalayan air.'
    },

    // Glamping & High-Altitude Camps
    {
      id: 'hotel-17',
      type: 'hotel',
      category: 'camps',
      title: 'The Grand Spiti Desert Camp & Stargazing Domes',
      location: 'Kaza, Spiti Valley, Himachal Pradesh (12,000 ft)',
      rating: 4.8,
      reviewCount: 980,
      price: 6200,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
      tag: 'Stargazing Domes',
      amenities: ['Stargazing Telescope', 'Heated Insulated Domes', 'Local Spitian Meals', '4x4 Support'],
      description: 'Spectacular mountain camp in the cold trans-Himalayan desert. Experience dark skies, ancient Buddhist monasteries, and fossil villages with Aman’s guide.'
    },
    {
      id: 'hotel-18',
      type: 'hotel',
      category: 'camps',
      title: 'Chandratal High Glacial Lake Luxury Camps',
      location: 'Chandratal Lake, Spiti, HP (14,100 ft)',
      rating: 4.9,
      reviewCount: 1340,
      price: 4500,
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&auto=format&fit=crop&q=80',
      tag: 'Moon Lake Camp',
      amenities: ['Crescent Lake Trail', 'All-Weather Insulated Tents', 'Hot Buffet Meals', 'Oxygen Backup Available'],
      description: 'Camp near the mystical Moon Lake at 14,100 feet. Crystal-clear emerald water mirroring the snow-clad peaks of the Chandra Bhaga range.'
    },
    {
      id: 'hotel-19',
      type: 'hotel',
      category: 'camps',
      title: 'Triund Peak Starlight Camp',
      location: 'Triund Ridge, Dharamshala, HP (9,350 ft)',
      rating: 4.9,
      reviewCount: 2950,
      price: 1800,
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&auto=format&fit=crop&q=80',
      tag: 'Moon Peak Views',
      amenities: ['High Mountain Ridge', 'Sunset & Sunrise Views', 'Hot Tea & Dinner Included', 'Alpine Tents'],
      description: 'Camp on the grassy ridge of Triund with the mighty Dhauladhar snow wall towering directly in front and the glittering Kangra lights below.'
    },

    // Budget-Friendly Homestays (Under ₹1,200)
    {
      id: 'hotel-20',
      type: 'hotel',
      category: 'homestay',
      title: 'Dharamkot Pine Valley Budget Homestay',
      location: 'Upper Dharamkot, McLeodGanj, HP',
      rating: 4.8,
      reviewCount: 1280,
      price: 750,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=80',
      tag: 'Budget Mountain View',
      amenities: ['Fast WiFi for Nomads', 'Warm Mountain Quilt', 'Rooftop Cafe Access', 'Triund Trek Base'],
      description: 'Clean, bright, budget-friendly wooden rooms surrounded by cedar pines in backpacker favorite Dharamkot. High-speed WiFi and friendly local Himachali hosts.'
    },
    {
      id: 'hotel-21',
      type: 'hotel',
      category: 'homestay',
      title: 'Old Manali Backpacker Wood Cottage',
      location: 'Club House Road, Old Manali, HP',
      rating: 4.8,
      reviewCount: 2450,
      price: 699,
      image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&auto=format&fit=crop&q=80',
      tag: 'Backpacker Bestseller',
      amenities: ['Apple Orchard Garden', 'Hot Showers 24/7', 'Cozy Bonfire Pit', 'Steps from Cafes'],
      description: 'Charming traditional cedar wood homestay nestled in apple orchards of Old Manali. Unbeatable value with hot water, guitar evenings, and mountain views.'
    },
    {
      id: 'hotel-22',
      type: 'hotel',
      category: 'homestay',
      title: 'Jibhi Riverbank Budget Wooden Stay',
      location: 'Near Mini Thailand, Jibhi, Banjar Valley, HP',
      rating: 4.9,
      reviewCount: 1140,
      price: 850,
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80',
      tag: 'Riverside Budget Stay',
      amenities: ['Balcony Facing Stream', 'Home Cooked Dal Chawal', 'Campfire Under Stars', 'Luggage Lockers'],
      description: 'Affordable, authentic wooden stay located right beside the gushing crystal stream in Jibhi. Great for solo travelers, artists, and budget wanderers.'
    },
    {
      id: 'hotel-23',
      type: 'hotel',
      category: 'homestay',
      title: 'Kasol Chalal Riverside Forest Stay',
      location: 'Chalal Village, Kasol, Parvati Valley, HP',
      rating: 4.8,
      reviewCount: 2180,
      price: 799,
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=80',
      tag: 'Budget Forest Retreat',
      amenities: ['Parvati River Trail', 'Pine Forest Hammocks', 'Israeli & Indian Food', 'Bonfire Nights'],
      description: 'Cross the iconic Parvati suspension bridge into peaceful Chalal village. Quiet, budget-friendly pine rooms with river sounds and starry Himalayan skies.'
    },
    {
      id: 'hotel-24',
      type: 'hotel',
      category: 'homestay',
      title: 'Kalpa Kinner View Budget Apple Homestay',
      location: 'Kalpa Village, Kinnaur, HP (9,700 ft)',
      rating: 4.9,
      reviewCount: 890,
      price: 999,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80',
      tag: 'Kinner Kailash View',
      amenities: ['Direct Sacred Peak View', 'Organic Apple Juice', 'Warm Bukharis', 'Local Kinnauri Family Host'],
      description: 'Watch the golden sunrise hit the sacred 20,000-foot Kinner Kailash peak straight from your bedroom window at an incredibly affordable price.'
    },

    // Budget-Friendly Hotels & Mountain Inns (Under ₹1,500)
    {
      id: 'hotel-25',
      type: 'hotel',
      category: 'budget',
      title: 'Shimla Tara Devi Hillside Budget Inn',
      location: 'Near Tara Devi Station, Shimla, HP',
      rating: 4.7,
      reviewCount: 1780,
      price: 1199,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
      tag: 'Budget Hillside Hotel',
      amenities: ['Valley Facing Windows', '24/7 Room Service', 'Toy Train Stop Proximity', 'Attached Clean Bathrooms'],
      description: 'Comfortable and pocket-friendly mountain hotel overlooking Shimla pine slopes. Perfect for families and couples looking for quiet views without luxury hotel prices.'
    },
    {
      id: 'hotel-26',
      type: 'hotel',
      category: 'budget',
      title: 'Spiti Kaza Travelers Nest & Budget Lodge',
      location: 'Kaza Main Market, Spiti Valley, HP (12,000 ft)',
      rating: 4.8,
      reviewCount: 1320,
      price: 950,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
      tag: 'High Altitude Budget Lodge',
      amenities: ['Warm Solar Heated Water', 'Spitian Kitchen', 'Bike Parking', 'Acclimatization Help'],
      description: 'Budget haven in the trans-Himalayan desert of Kaza. Offers clean insulated rooms, hot food, and route guidance by Aman Thakur for exploring Key and Kibber.'
    },
    {
      id: 'hotel-27',
      type: 'hotel',
      category: 'budget',
      title: 'Dalhousie Panchpula Budget Pine Lodge',
      location: 'Panchpula Road, Dalhousie, HP',
      rating: 4.7,
      reviewCount: 1420,
      price: 1299,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80',
      tag: 'Value Family Stay',
      amenities: ['Panchpula Stream Walk', 'Pine Forest Balcony', 'Free In-Room WiFi', 'Restaurant On-Site'],
      description: 'Affordable mountain lodge set amongst deodars near Dalhousie scenic Panchpula waterfalls. Great food, peaceful location, and wallet-friendly rates.'
    },
    {
      id: 'hotel-28',
      type: 'hotel',
      category: 'budget',
      title: 'Bir Billing Paragliders Eco-Budget Lodge',
      location: 'Tibetan Colony, Bir, Kangra, HP',
      rating: 4.9,
      reviewCount: 1640,
      price: 899,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80',
      tag: 'Flier & Nomad Hub',
      amenities: ['Tandem Flight Desk', 'Co-Working Area', 'Bicycle Rental', 'Organic Garden Cafe'],
      description: 'Vibrant budget lodge in Bir Tibetan Colony. Popular with paragliders and remote workers for high-speed fiber internet and friendly community vibe.'
    },
    {
      id: 'hotel-29',
      type: 'hotel',
      category: 'budget',
      title: 'Naggar Apple Grove Budget Alpine Cottage',
      location: 'Near Naggar Castle, Kullu Valley, HP',
      rating: 4.8,
      reviewCount: 1520,
      price: 1099,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
      tag: 'Budget Heritage View',
      amenities: ['Snow Peak Terrace', 'Apple Orchard Stroll', 'Pahadi Breakfast Option', 'Private Balcony'],
      description: 'Affordable alpine rooms with wooden interiors overlooking the snow-crested peaks of Kullu valley, walking distance from historic Naggar Castle.'
    }
  ];

  const ATTRACTIONS_DATA = [
    // High Alpine Treks
    {
      id: 'att-1',
      type: 'attraction',
      category: 'treks',
      title: 'Hampta Pass & Chandratal Lake Alpine Trek',
      location: 'Manali to Spiti Valley Crossover, HP (14,100 ft)',
      rating: 5.0,
      reviewCount: 3840,
      price: 9999,
      priceLabel: '₹9,999 (5D / 4N)',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80',
      tag: 'Legendary Crossover Trek',
      amenities: ['Certified Mountaineering Guide', 'Alpine Tents & Crampons', 'All Meals & Mules Support', 'Chandratal Lake Visit'],
      description: 'One of the most dramatic treks in the Himalayas. Cross from the verdant green pine valleys of Kullu to the stark, majestic lunar landscapes of Spiti across Hampta Pass.'
    },
    {
      id: 'att-2',
      type: 'attraction',
      category: 'treks',
      title: 'Triund Mountain Ridge & Snowline Trek',
      location: 'McLeodGanj, Dharamshala, HP (9,350 ft)',
      rating: 4.9,
      reviewCount: 5120,
      price: 1800,
      priceLabel: '₹1,800 per trekker',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&auto=format&fit=crop&q=80',
      tag: 'Scenic Mountain Ridge',
      amenities: ['Local Gaddi Himalayan Guide', 'Dome Tents & Warm Bags', 'Hot Pahadi Meals', 'Dhauladhar Closeups'],
      description: 'The crown jewel of Dharamshala. A scenic 9-km trek through rhododendron and oak forests opening up to majestic views of Moon Peak and Kangra Valley.'
    },
    {
      id: 'att-3',
      type: 'attraction',
      category: 'treks',
      title: 'Kheerganga Thermal Hot Springs & Parvati Trek',
      location: 'Kasol to Barshaini, Parvati Valley, HP (9,700 ft)',
      rating: 4.9,
      reviewCount: 4680,
      price: 2400,
      priceLabel: '₹2,400 per trekker',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=80',
      tag: 'Natural Hot Springs',
      amenities: ['Natural Geothermal Pool Bath', 'Rudranag Waterfall Stop', 'Alpine Ridge Camps', 'Bonfire Evening'],
      description: 'Trek through pine forests and roaring waterfalls in Parvati Valley to reach natural sulfur hot spring pools with panoramic views of snow mountains.'
    },
    {
      id: 'att-4',
      type: 'attraction',
      category: 'treks',
      title: 'Bhrigu Lake Alpine Glacial Meadow Trek',
      location: 'Gulaba, Manali, HP (14,100 ft)',
      rating: 4.9,
      reviewCount: 2190,
      price: 5500,
      priceLabel: '₹5,500 (3D / 2N)',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
      tag: 'Sacred High Meadow',
      amenities: ['High Alpine Grasslands', 'Sacred Frozen Lake', 'Camp at Rola Kholi', 'Solang Valley Views'],
      description: 'Walk through endless velvety alpine meadows (Thach) to the sacred, color-changing glacial lake where Maharishi Bhrigu meditated.'
    },
    {
      id: 'att-5',
      type: 'attraction',
      category: 'treks',
      title: 'Serolsar Lake & Jalori Pass Ancient Pine Trek',
      location: 'Jibhi & Shoja, Banjar Valley, HP',
      rating: 4.8,
      reviewCount: 1920,
      price: 1400,
      priceLabel: '₹1,400 per trekker',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80',
      tag: 'Enchanted Forest Trail',
      amenities: ['10,800 ft Jalori Pass Start', 'Buddhi Nagin Temple Walk', 'Dense Deodar Canopy', 'Picnic Lunch Included'],
      description: 'A gentle, mystical 5-km forest walk from Jalori Pass to the pristine hidden waters of Serolsar Lake, revered for its sacred temple and clear water.'
    },
    {
      id: 'att-6',
      type: 'attraction',
      category: 'treks',
      title: 'Pin Parvati Pass High-Altitude Wilderness Expedition',
      location: 'Parvati Valley to Spiti, HP (17,450 ft)',
      rating: 5.0,
      reviewCount: 780,
      price: 26500,
      priceLabel: '₹26,500 (10 Days)',
      image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&auto=format&fit=crop&q=80',
      tag: 'Elite Himalayan Expedition',
      amenities: ['Ice Axe & Technical Gear', 'Glacier Crossing Guide', 'High Altitude Porters', 'Satellite Emergency Backup'],
      description: 'The ultimate trek for experienced adventurers. Cross crevassed glaciers, raging torrents, and the legendary 17,450-foot pass between green Parvati and dry Spiti.'
    },
    {
      id: 'att-7',
      type: 'attraction',
      category: 'treks',
      title: 'Great Himalayan National Park (GHNP) Biodiversity Trek',
      location: 'Tirthan Valley, Himachal Pradesh (UNESCO Site)',
      rating: 4.9,
      reviewCount: 1450,
      price: 6800,
      priceLabel: '₹6,800 (4D / 3N)',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80',
      tag: 'UNESCO World Heritage',
      amenities: ['Wildlife Dept Forest Permit', 'Eco-Trek Himalayan Guide', 'Western Tragopan Spotting', 'Trout River Camps'],
      description: 'Explore an undisturbed biodiversity hotspot home to rare snow leopards, Himalayan brown bears, and the elusive Western Tragopan bird.'
    },

    // Snow Safaris & Winter Adventures
    {
      id: 'att-8',
      type: 'attraction',
      category: 'snow',
      title: 'Solang Valley & Rohtang Snow Adventure Safari',
      location: 'Solang & Rohtang Pass, Manali, HP',
      rating: 4.9,
      reviewCount: 8450,
      price: 3499,
      priceLabel: '₹3,499 per vehicle',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=80',
      tag: 'Himachal #1 Adventure',
      amenities: ['Rohtang Permit Included', 'Snow Scooter', 'Skiing Lessons', 'Tandem Paragliding', 'Private 4x4 Cab'],
      description: 'Exhilarating snow adventures with certified instructors. Includes official NGT permits, cold-weather safety gear, and Solang ropeway access.'
    },
    {
      id: 'att-9',
      type: 'attraction',
      category: 'snow',
      title: 'Atal Tunnel & Sissu Glacial Waterfall Snow 4x4 Tour',
      location: 'Atal Tunnel & Sissu, Lahaul & Spiti, HP',
      rating: 4.9,
      reviewCount: 6200,
      price: 2800,
      priceLabel: '₹2,800 per vehicle',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
      tag: 'Engineering Marvel',
      amenities: ['World’s Longest Highway Tunnel', 'Frozen Sissu Waterfall', 'Lahauli Yak Ride', '4x4 All-Weather Vehicle'],
      description: 'Drive through the 9.02-km marvel of Atal Tunnel under Rohtang Pass to arrive in the breathtaking snow-covered valley of Sissu in Lahaul.'
    },
    {
      id: 'att-10',
      type: 'attraction',
      category: 'snow',
      title: 'Kufri Snow Adventure Park & Himalayan Yak Safari',
      location: 'Kufri, Shimla, Himachal Pradesh',
      rating: 4.7,
      reviewCount: 4920,
      price: 1100,
      priceLabel: '₹1,100 per person',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80',
      tag: 'Snow Fun for Families',
      amenities: ['Tobogganing & Snow Tubing', 'Mahasu Peak Trail', 'Himalayan Nature Park', 'Go-Karting on Ice'],
      description: 'Shimla’s favorite winter playground at 8,600 feet. Experience tobogganing, snow rides, and scenic viewpoints over the central Himalayas.'
    },

    // Aerial & River Sports
    {
      id: 'att-11',
      type: 'attraction',
      category: 'aerial',
      title: 'Bir Billing World Cup Paragliding Tandem Flight',
      location: 'Bir Billing, Kangra, Himachal Pradesh',
      rating: 5.0,
      reviewCount: 4200,
      price: 2999,
      priceLabel: '₹2,999 per flight',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
      tag: 'World Paragliding Hub',
      amenities: ['GoPro 4K Video Included', 'Certified Master Pilot', '30-Min High Thermals', 'Landing Support'],
      description: 'Take off from 8,000 feet in Billing and soar like an eagle with 360-degree panoramic vistas of snow peaks and tea garden valleys.'
    },
    {
      id: 'att-12',
      type: 'attraction',
      category: 'aerial',
      title: 'Beas River White Water Rafting Grade III Rapids',
      location: 'Kullu Valley, Himachal Pradesh',
      rating: 4.8,
      reviewCount: 4920,
      price: 1200,
      priceLabel: '₹1,200 per rafter',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80',
      tag: 'Glacial River Rapids',
      amenities: ['14 KM River Run', 'Life Jackets & Helmets', 'Cliff Jumping', 'Action Photo Package'],
      description: 'Tackle the thrilling Grade II and III rapids of the glacial Beas river under the guidance of licensed national rafting champions.'
    },

    // Heritage & Cultural Landmarks
    {
      id: 'att-13',
      type: 'attraction',
      category: 'heritage',
      title: 'Kalka-Shimla Toy Train Heritage VistaDome Journey',
      location: 'Kalka to Shimla Mountain Railway, HP',
      rating: 4.9,
      reviewCount: 5800,
      price: 1200,
      priceLabel: '₹1,200 per ticket',
      image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800&auto=format&fit=crop&q=80',
      tag: 'UNESCO World Heritage',
      amenities: ['Reserved VistaDome Coach', '102 Mountain Tunnels', 'Scenic Pine Hills', 'Heritage Commentary'],
      description: 'Chug through the lush pine and oak hills on the iconic 1903 narrow-gauge mountain railway. One of India’s most scenic engineering marvels.'
    },
    {
      id: 'att-14',
      type: 'attraction',
      category: 'heritage',
      title: 'Key Monastery & Tabo 1000-Year Heritage Circuit',
      location: 'Spiti Valley, Himachal Pradesh',
      rating: 4.9,
      reviewCount: 2310,
      price: 4800,
      priceLabel: '₹4,800 per tour',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&auto=format&fit=crop&q=80',
      tag: 'Ajanta of the Himalayas',
      amenities: ['Tabo Murals Guide', 'Key Gompa Meditation', 'Ancient Scripture Library', 'Monk High-Altitude Tea'],
      description: 'A soul-stirring spiritual journey to the 1,000-year-old Key Gompa and Tabo Monastery, famous for ancient Buddhist frescoes.'
    },
    {
      id: 'att-15',
      type: 'attraction',
      category: 'heritage',
      title: 'Khajjiar Meadow & Kalatop Cedar Forest Trail',
      location: 'Dalhousie & Khajjiar, Himachal Pradesh',
      rating: 4.8,
      reviewCount: 3100,
      price: 1400,
      priceLabel: '₹1,400 per group',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop&q=80',
      tag: 'Mini Switzerland',
      amenities: ['Horse Riding in Meadows', 'Pine Lake Walk', 'Ancient Khajji Nag Temple'],
      description: 'A saucer-shaped green plateau surrounded by dense deodar forests, officially certified as India’s Mini Switzerland.'
    },
    {
      id: 'att-16',
      type: 'attraction',
      category: 'heritage',
      title: 'Naggar Castle Heritage Tour & Roerich Art Gallery',
      location: 'Naggar, Kullu Valley, Himachal Pradesh',
      rating: 4.8,
      reviewCount: 2450,
      price: 850,
      priceLabel: '₹850 per person',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
      tag: 'Himalayan Royalty',
      amenities: ['15th Century Castle Entry', 'Nicholas Roerich Paintings', 'Beas Valley Balcony', 'Ancient Wood Carvings'],
      description: 'Explore the 15th-century wood-and-stone fortress of the Kullu Rajas and the legendary Russian master painter Nicholas Roerich’s Himalayan estate.'
    },

    // Unexplored Treks & Hidden High-Altitude Gems
    {
      id: 'att-17',
      type: 'attraction',
      category: 'unexplored',
      title: 'Kareri Lake High Glacial Lake Trek',
      location: 'Kareri Village, Dharamshala, HP (9,650 ft)',
      rating: 4.9,
      reviewCount: 1680,
      price: 2999,
      priceLabel: '₹2,999 (3D / 2N)',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
      tag: 'Hidden Glacial Lake',
      amenities: ['Glacial Nyund Stream Trail', 'Shiva Cliff Temple Camp', 'Alpine Ridge Tents', 'Gaddi Guide & Meals'],
      description: 'A secluded glacial lake tucked in the Dhauladhar range fed by melting snow. The trail weaves through dense pine forests, babbling mountain streams, and boulder fields with dramatic mountain reflections.'
    },
    {
      id: 'att-18',
      type: 'attraction',
      category: 'unexplored',
      title: 'Beas Kund Glacial Basin & Source Trek',
      location: 'Solang Valley, Manali, HP (12,770 ft)',
      rating: 4.9,
      reviewCount: 2240,
      price: 3800,
      priceLabel: '₹3,800 (3D / 2N)',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80',
      tag: 'Sacred Glacial Basin',
      amenities: ['Bakkhartach Glacier Camp', 'Hanuman Tibba & Ladakhi Views', 'Certified Manali Guide', 'Trek Permits & Tents'],
      description: 'Hike to the legendary birth place of the river Beas, where sage Vyas meditated. An amphitheater surrounded by snow giants like Hanuman Tibba, Friendship Peak, and Ladakhi Peak.'
    },
    {
      id: 'att-19',
      type: 'attraction',
      category: 'unexplored',
      title: 'Buran Ghati High Mountain Crossover Trek',
      location: 'Janglik to Barua, Shimla / Kinnaur, HP (15,000 ft)',
      rating: 5.0,
      reviewCount: 1120,
      price: 14500,
      priceLabel: '₹14,500 (7D / 6N)',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80',
      tag: 'Unexplored Snow Wall Rappel',
      amenities: ['Technical Snow Wall Rappel', 'Chandranahan Glacial Lakes', 'Dayara Thach Alpine Meadows', 'Kinnaur Exit at Barua'],
      description: 'The grandest crossover trek in Himachal. From the medieval heritage village of Janglik, through fairy-tale pine forests and sweeping Dayara meadows, culminating in a steep 400-ft snow wall rappel at 15,000 feet.'
    },
    {
      id: 'att-20',
      type: 'attraction',
      category: 'unexplored',
      title: 'Prashar Lake & Sacred Floating Island Trek',
      location: 'Mandi District, Himachal Pradesh (8,960 ft)',
      rating: 4.8,
      reviewCount: 3150,
      price: 1999,
      priceLabel: '₹1,999 (2D / 1N)',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80',
      tag: 'Mystical Floating Island',
      amenities: ['13th-Century Pagoda Temple', 'Floating Reed Island Mystery', '180° Snow Panorama', 'Camp Under Starry Sky'],
      description: 'Visit the mystical deep blue circular lake holding a floating reed island that continuously changes its position. Adjacent stands a 13th-century pagoda temple built without mortar by King Bansen.'
    },
    {
      id: 'att-21',
      type: 'attraction',
      category: 'unexplored',
      title: 'Deo Tibba Base Camp Glacier & Chota Chandratal Trek',
      location: 'Jagatsukh, Manali, HP (14,800 ft)',
      rating: 4.9,
      reviewCount: 980,
      price: 11800,
      priceLabel: '₹11,800 (6D / 5N)',
      image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&auto=format&fit=crop&q=80',
      tag: 'Hidden Glacier Expedition',
      amenities: ['Chota Chandratal Emerald Lake', 'Mount Deo Tibba (6,001m) Col', 'Khamerwa & Tentu Pass Views', 'Mountaineer Expeditions Gear'],
      description: 'An offbeat high-altitude trail starting from ancient Jagatsukh village. Walk past oak forests and vast moraines to reach the turquoise waters of Chota Chandratal under Mount Deo Tibba.'
    },
    {
      id: 'att-22',
      type: 'attraction',
      category: 'unexplored',
      title: 'Shangarh Alpine Meadow & Lapas Fairy Forest Trail',
      location: 'Sainj Valley, GHNP Buffer Zone, HP (6,900 ft)',
      rating: 4.9,
      reviewCount: 1420,
      price: 2200,
      priceLabel: '₹2,200 (2D / 1N)',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
      tag: 'Unexplored Pandava Meadow',
      amenities: ['Shangchul Mahadev Temple Tour', 'Barshangarh Waterfall Walk', 'Ancient Deodar Forest Walk', 'Traditional Himachali Lunch'],
      description: 'Discover Himachal’s most tranquil grassland meadow hidden in Sainj Valley. Legend holds the Pandavas cleared the meadow while local gods enforce peaceful serenity. Pure unfiltered mountain bliss.'
    },
    {
      id: 'att-23',
      type: 'attraction',
      category: 'unexplored',
      title: 'Sach Pass & Pangi Valley Extreme 4x4 Expedition',
      location: 'Chamba to Killar, Pangi Valley, HP (14,500 ft)',
      rating: 5.0,
      reviewCount: 890,
      price: 18500,
      priceLabel: '₹18,500 (6D / 5N)',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
      tag: 'India’s Most Offbeat Pass',
      amenities: ['Modified 4x4 Snow Vehicle', 'Extreme Cliff Roads Driving', 'Tribal Pangi Homestays', 'Chenab River Canyon Crossing'],
      description: 'Cross the formidable 14,500-foot Sach Pass into the remote, road-locked Pangi Valley. Towering snow walls, gushing waterfalls plunging over the road, and an unforgettable journey into untamed tribal Himachal.'
    },
    {
      id: 'att-24',
      type: 'attraction',
      category: 'unexplored',
      title: 'Chanshal Pass Meadows & Dodra Kwar Remote Trail',
      location: 'Rohru, Shimla District, HP (12,300 ft)',
      rating: 4.9,
      reviewCount: 1210,
      price: 6500,
      priceLabel: '₹6,500 (3D / 2N)',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80',
      tag: 'Offbeat Highland Ridge',
      amenities: ['Chanshal Peak Highland Walk', 'Dodra & Kwar Village Exploration', 'Trout Stream Angling', 'Larot Deodar Camp Stay'],
      description: 'Explore the highest peak of Shimla district. Sweep across untouched alpine slopes overlooking snow-crested Uttarakhand peaks, then descend to the secluded, traditional woodcraft villages of Dodra and Kwar.'
    },
    {
      id: 'att-25',
      type: 'attraction',
      category: 'unexplored',
      title: 'Grahan & Rasol Secret Village Forest Trek',
      location: 'Parvati Valley, HP (7,700 ft)',
      rating: 4.9,
      reviewCount: 1530,
      price: 2100,
      priceLabel: '₹2,100 (2D / 1N)',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=80',
      tag: 'Secret Roadless Village',
      amenities: ['Dense Rhododendron Canopy Trail', 'Traditional Honey-Stone Houses', 'No Mobile Signal Serenity', 'Local Village Homestay'],
      description: 'Leave the crowds of Kasol behind and hike up the peaceful Grahan Nallah to a secluded 500-year-old village where roads and cell signals cannot reach. Experience authentic Himachali village hospitality.'
    },
    {
      id: 'att-26',
      type: 'attraction',
      category: 'unexplored',
      title: 'Miyar Valley Flower Valley & Glacier Trek',
      location: 'Udaipur, Lahaul, HP (13,000 ft)',
      rating: 5.0,
      reviewCount: 760,
      price: 15200,
      priceLabel: '₹15,200 (7D / 6N)',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80',
      tag: 'Himachal Valley of Flowers',
      amenities: ['Takdung Glacier Terminal', 'Emerald Glacial Tarns', 'Endless Wild Iris Fields', 'Menthosa Mountain Base'],
      description: 'Trek through miles of carpeted wildflowers, crystal-clear glacial streams, and dramatic granite cliffs in Lahaul’s hidden Miyar Valley. Often hailed as Himachal’s best kept trekking secret.'
    },
    {
      id: 'att-27',
      type: 'attraction',
      category: 'unexplored',
      title: 'Rupin Pass High-Altitude Crossover Trek',
      location: 'Dhaula to Sangla (Kinnaur), HP (15,250 ft)',
      rating: 5.0,
      reviewCount: 1380,
      price: 15500,
      priceLabel: '₹15,500 (8D / 7N)',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
      tag: 'Legendary 3-Tier Waterfall Pass',
      amenities: ['Rupin Three-Stage Waterfall', 'Snow Bridge Crossings', 'Sangla Valley Apple Country Exit', 'Full Mountaineering Support'],
      description: 'A classic high-altitude crossover trek featuring changing landscapes every hour: deep gorges, hanging villages, snow bridges, a mammoth three-stage frozen waterfall, and a descent into the fairytale Sangla Valley.'
    },
    {
      id: 'att-28',
      type: 'attraction',
      category: 'unexplored',
      title: 'Barot Valley Uhl River Hidden Trout Trail',
      location: 'Mandi & Kangra Border, HP (6,000 ft)',
      rating: 4.8,
      reviewCount: 1740,
      price: 1800,
      priceLabel: '₹1,800 (2D / 1N)',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80',
      tag: 'Hidden Trout Sanctuary',
      amenities: ['Uhl Glacial River Walking', 'Angling License & Rod Included', 'Haulage Trolley Heritage', 'Cedar Forest Riverside Camping'],
      description: 'Cradled in the Chhota Bhangal valley, Barot is an unspoiled river hamlet famed for wild trout fishing, British-era hydel tramways, and serene riverside forest trails.'
    }
  ];

  const RESTAURANTS_DATA = [
    // Traditional Dham & Siddu
    {
      id: 'rest-1',
      type: 'restaurant',
      category: 'traditional',
      title: 'Himachali Rasoi Traditional Dham',
      location: 'Mall Road, Middle Bazaar, Shimla, HP',
      rating: 4.8,
      reviewCount: 3200,
      price: 600,
      priceLabel: '₹600 for two',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=80',
      tag: 'Authentic Kangri Dham',
      amenities: ['Traditional Siddu with Ghee', 'Sepu Vadi', 'Madra with Curd & Raisins', 'Floor Seating'],
      description: 'Dedicated entirely to preserving traditional Himachali celebratory feasts (Dham). Savor steamy stuffed Siddu with pure cow ghee.'
    },
    {
      id: 'rest-2',
      type: 'restaurant',
      category: 'traditional',
      title: 'Tibet Kitchen Authentic McLeodGanj',
      location: 'Jogiwara Road, McLeodGanj, Dharamshala, HP',
      rating: 4.9,
      reviewCount: 4600,
      price: 750,
      priceLabel: '₹750 for two',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
      tag: 'Tibetan Specialty',
      amenities: ['Steamed Tingmo & Momos', 'Hot Thukpa Bowls', 'Butter Tea', 'Monastery Views'],
      description: 'Renowned three-story Tibetan restaurant known for authentic steaming noodle soups, pork momos, and traditional Tibetan herbal teas.'
    },
    {
      id: 'rest-3',
      type: 'restaurant',
      category: 'traditional',
      title: 'The Taste of Spiti Organic Kitchen',
      location: 'Kaza Market, Spiti Valley, HP (12,000 ft)',
      rating: 4.8,
      reviewCount: 1320,
      price: 650,
      priceLabel: '₹650 for two',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
      tag: 'Spitian Eco-Cafe',
      amenities: ['Wild Sea Buckthorn Tea', 'Spitian Barley Tsampa', 'Warm Yak Cheese Pasta', 'Solar Heated Dining'],
      description: 'Promoting native organic Spiti agriculture. Sip hot sea buckthorn tea and enjoy wholesome Tibetan and Spitian dishes made with local barley and dry curd.'
    },

    // Riverside & Trout
    {
      id: 'rest-4',
      type: 'restaurant',
      category: 'riverside',
      title: "Johnson's Cafe & Trout Bar",
      location: 'Circuit House Road, Old Manali, HP',
      rating: 4.9,
      reviewCount: 4890,
      price: 1400,
      priceLabel: '₹1,400 for two',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80',
      tag: 'Legendary Trout Kitchen',
      amenities: ['Woodfired Fresh River Trout', 'Almond Butter Sauce', 'Apple Orchard Seating', 'Cozy Fireplace'],
      description: 'The culinary crown jewel of Manali. World-famous for fresh Himalayan river trout served in a warm alpine setting overlooking snowy peaks.'
    },
    {
      id: 'rest-5',
      type: 'restaurant',
      category: 'riverside',
      title: 'Cafe 1947 Beas Riverside Lounge',
      location: 'Old Manali (Beside River Beas), HP',
      rating: 4.8,
      reviewCount: 3950,
      price: 1200,
      priceLabel: '₹1,200 for two',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80',
      tag: 'Riverside Music Cafe',
      amenities: ['River Water Terrace', 'Woodfire Pizzas', 'Live Acoustic Music', 'Hot Mountain Coffees'],
      description: 'Listen to the roaring glacial river while enjoying artisanal pizzas, pastas, and local herbal infusions right over the water.'
    },
    {
      id: 'rest-6',
      type: 'restaurant',
      category: 'riverside',
      title: 'The Himalayan Trout House Kitchen',
      location: 'Gushaini, Tirthan Valley, HP',
      rating: 4.9,
      reviewCount: 1680,
      price: 1100,
      priceLabel: '₹1,100 for two',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80',
      tag: 'Farm-to-Table Trout',
      amenities: ['Wood Smoked Brown Trout', 'Organic Herb Salad', 'River Deck Tables', 'Fresh Apple Juice'],
      description: 'Riverside farm kitchen serving catch-of-the-day trout harvested straight from glacial Himalayan streams and grilled with fresh garden rosemary.'
    },

    // Mountain Bakeries & Cafes
    {
      id: 'rest-7',
      type: 'restaurant',
      category: 'bakery',
      title: 'Illiterati Books & Coffee',
      location: 'Jogiwara Road, McLeodGanj, HP',
      rating: 4.9,
      reviewCount: 3870,
      price: 900,
      priceLabel: '₹900 for two',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
      tag: 'Book Cafe & Valley View',
      amenities: ['Thousands of Rare Books', 'Fresh Brewed Cappuccino', 'Homemade Ravioli', 'Balcony Over Kangra Valley'],
      description: 'Iconic mountain book cafe where travelers read, write, and gaze at breathtaking sunsets over Kangra valley while sipping artisanal coffee.'
    },
    {
      id: 'rest-8',
      type: 'restaurant',
      category: 'bakery',
      title: 'Moon Dance Cafe & German Bakery',
      location: 'Main Market, Kasol, Parvati Valley, HP',
      rating: 4.8,
      reviewCount: 4210,
      price: 800,
      priceLabel: '₹800 for two',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=80',
      tag: 'Famous German Bakery',
      amenities: ['Fresh Baked Apple Crumble', 'Shakshuka & Hummus', 'Nutella Croissants', 'Garden Dining'],
      description: 'The vibrant heart of Kasol. Legendary for early morning cinnamon rolls, hot fresh coffee, and hearty Israeli and continental breakfasts.'
    }
  ];

  let REVIEWS_DATA = [
    {
      id: 'rev-1',
      target: 'Manali & Rohtang Snow Circuit',
      title: 'Unbelievable Himachal winter snow tour arranged by Aman Thakur!',
      body: 'Aman planned our complete 6-day Himachal family holiday. We had zero waiting time at the Atal Tunnel, our driver was courteous and an expert on snow roads, and our mountain resort in Manali had stunning balcony views of the peaks. Aman was checking on us daily.',
      author: 'Vikram & Neha Malhotra',
      location: 'New Delhi',
      tripType: 'Family',
      rating: 5,
      date: '2 days ago'
    },
    {
      id: 'rev-2',
      target: 'Wildflower Hall Shimla & Kufri',
      title: 'Heated outdoor pool looking at snowy Himalayas is magical',
      body: 'Booked our honeymoon through Aman Thakur’s desk. He arranged our Toy Train reserved seats and negotiated a complimentary spa credit at Wildflower Hall. Best vacation ever!',
      author: 'Sunil & Riya Mehta',
      location: 'Mumbai',
      tripType: 'Couples',
      rating: 5,
      date: '1 week ago'
    },
    {
      id: 'rev-3',
      target: 'Bir Billing Paragliding & Dharamshala',
      title: 'Flying over Kangra Valley with 4K GoPro video',
      body: 'Aman Thakur connected us with the top tandem pilot in Billing. The flight was smooth, safe, and exhilarating. Afterwards we enjoyed delicious momos in McLeodGanj. Truly memorable.',
      author: 'Rohan Deshmukh',
      location: 'Pune',
      tripType: 'Friends',
      rating: 5,
      date: '2 weeks ago'
    },
    {
      id: 'rev-4',
      target: 'Spiti Valley 4x4 Off-road Expedition',
      title: 'Chandra Taal Lake and Key Monastery was mind-blowing',
      body: 'Called Aman directly at 6230135697. He prepared an altitude-acclimatized itinerary for Spiti Valley with experienced 4x4 drivers and warm camps. Outstanding service and fair prices.',
      author: 'Ananya Sen',
      location: 'Kolkata',
      tripType: 'Solo',
      rating: 5,
      date: '3 weeks ago'
    }
  ];

  // =========================================================================
  // 2. STATE MANAGEMENT (Wishlist, Modals, Filters)
  // =========================================================================
  
  // Safe Storage wrapper for robust browser compatibility (Safari Private Browsing / strict cookies)
  const safeStorage = {
    get: function(key) {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          return window.localStorage.getItem(key);
        }
      } catch (e) {
        console.warn('Storage read restricted:', e);
      }
      return null;
    },
    set: function(key, val) {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.setItem(key, val);
        }
      } catch (e) {
        console.warn('Storage write restricted:', e);
      }
    }
  };

  let savedWishlist = [];
  try {
    const rawWishlist = safeStorage.get('aman_travel_wishlist');
    savedWishlist = rawWishlist ? JSON.parse(rawWishlist) : [];
  } catch (e) {
    savedWishlist = [];
  }
  let currentReviewRating = 5;

  // =========================================================================
  // 3. HELPER FUNCTIONS: Render Ratings, Badges, Prices
  // =========================================================================

  function renderBubbleRating(rating) {
    let bubblesHtml = '';
    const fullBubbles = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullBubbles) {
        bubblesHtml += '<span class="bubble full"></span>';
      } else if (i === fullBubbles + 1 && hasHalf) {
        bubblesHtml += '<span class="bubble half"></span>';
      } else {
        bubblesHtml += '<span class="bubble"></span>';
      }
    }
    return `<div class="bubble-rating" title="${rating} of 5 bubbles">${bubblesHtml}</div>`;
  }

  function formatRupees(amount) {
    return '₹' + amount.toLocaleString('en-IN');
  }

  function updateWishlistBadge() {
    const badge = document.getElementById('wishlistCount');
    if (badge) {
      badge.textContent = savedWishlist.length;
    }
  }

  function isWishlisted(id) {
    return savedWishlist.some(item => item.id === id);
  }

  function toggleWishlist(item) {
    const idx = savedWishlist.findIndex(x => x.id === item.id);
    if (idx > -1) {
      savedWishlist.splice(idx, 1);
      showToast(`Removed "${item.title}" from saved trips.`);
    } else {
      savedWishlist.push(item);
      showToast(`Added "${item.title}" to saved trips!`);
    }
    safeStorage.set('aman_travel_wishlist', JSON.stringify(savedWishlist));
    updateWishlistBadge();
    renderAllCards();
    renderWishlistDrawer();
  }

  // =========================================================================
  // 4. CARD RENDERING ENGINE
  // =========================================================================

  function createCardHTML(item) {
    const savedClass = isWishlisted(item.id) ? 'saved' : '';
    const priceDisplay = item.priceLabel ? item.priceLabel : `${formatRupees(item.price)} <span class="price-sub">/ night</span>`;
    const tagDisplay = item.tag ? `<span class="deal-badge">${item.tag}</span>` : '';

    const amenitiesHtml = item.amenities ? item.amenities.slice(0, 3).map(a => `<span class="amenity-chip">${a}</span>`).join('') : '';

    return `
      <article class="travel-card" data-id="${item.id}">
        <div class="card-media">
          <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80';">
          ${tagDisplay}
          <button class="heart-btn ${savedClass}" data-id="${item.id}" aria-label="Save to Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
        <div class="card-body">
          <div class="rating-row">
            ${renderBubbleRating(item.rating)}
            <span class="review-count">${item.reviewCount.toLocaleString('en-IN')} reviews</span>
          </div>
          <h3 class="card-title">${item.title}</h3>
          <div class="card-location">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${item.location}</span>
          </div>
          <div class="card-amenities">${amenitiesHtml}</div>
          <div class="card-footer">
            <div class="price-box">
              <span class="price-sub">Starting from</span>
              <div class="price-val">${priceDisplay}</div>
            </div>
            <span class="btn-card-action">Details &rarr;</span>
          </div>
        </div>
      </article>
    `;
  }

  function renderHotels(filter = 'all', searchQuery = '') {
    const container = document.getElementById('hotelsGrid');
    if (!container) return;

    let filtered = HOTELS_DATA;
    if (filter === 'budget') {
      filtered = filtered.filter(h => h.category === 'budget' || h.price <= 1500 || h.tag.toLowerCase().includes('budget') || h.tag.toLowerCase().includes('backpacker'));
    } else if (filter !== 'all') {
      filtered = filtered.filter(h => h.category === filter);
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(h => h.title.toLowerCase().includes(q) || h.location.toLowerCase().includes(q));
    }

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748B;">No hotels found matching your search. Contact Aman Thakur at 6230135697 for custom stays.</div>`;
      return;
    }

    container.innerHTML = filtered.map(createCardHTML).join('');
    attachCardListeners(container, HOTELS_DATA);
  }

  function renderAttractions(filter = 'all', searchQuery = '') {
    const container = document.getElementById('attractionsGrid');
    if (!container) return;

    let filtered = ATTRACTIONS_DATA;
    if (filter === 'unexplored') {
      filtered = filtered.filter(a => a.category === 'unexplored' || (a.tag && /unexplored|hidden|offbeat|secret|sacred/i.test(a.tag)));
    } else if (filter === 'treks') {
      filtered = filtered.filter(a => a.category === 'treks' || a.category === 'unexplored');
    } else if (filter !== 'all') {
      filtered = filtered.filter(a => a.category === filter);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(a => 
        a.title.toLowerCase().includes(q) || 
        a.location.toLowerCase().includes(q) ||
        (a.tag && a.tag.toLowerCase().includes(q)) ||
        (a.description && a.description.toLowerCase().includes(q))
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748B;">No activities found. Contact Aman Thakur at 6230135697 for custom Himachal tour plans.</div>`;
      return;
    }

    container.innerHTML = filtered.map(createCardHTML).join('');
    attachCardListeners(container, ATTRACTIONS_DATA);
  }

  function renderRestaurants(filter = 'all', searchQuery = '') {
    const container = document.getElementById('restaurantsGrid');
    if (!container) return;

    let filtered = RESTAURANTS_DATA;
    if (filter !== 'all') {
      filtered = filtered.filter(r => r.category === filter);
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(r => r.title.toLowerCase().includes(q) || r.location.toLowerCase().includes(q));
    }

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748B;">No dining places found matching your search. Contact Aman Thakur for local food recommendations.</div>`;
      return;
    }

    container.innerHTML = filtered.map(createCardHTML).join('');
    attachCardListeners(container, RESTAURANTS_DATA);
  }

  function renderReviews() {
    const container = document.getElementById('reviewsFeed');
    if (!container) return;

    container.innerHTML = REVIEWS_DATA.map(r => `
      <div class="review-card">
        <div class="review-header">
          <div class="reviewer-avatar">${r.author.charAt(0)}</div>
          <div>
            <div class="reviewer-name">${r.author}</div>
            <div class="reviewer-meta">${r.location} &bull; ${r.tripType} Trip</div>
          </div>
        </div>
        <div class="review-item-name">Review for: ${r.target}</div>
        <div class="rating-row">
          ${renderBubbleRating(r.rating)}
          <span class="review-count">Verified Review</span>
        </div>
        <h4 class="review-title">"${r.title}"</h4>
        <p class="review-body">${r.body}</p>
        <div class="review-footer">
          <span>Posted ${r.date}</span>
          <span>Verified via Aman Thakur Travel Hub</span>
        </div>
      </div>
    `).join('');
  }

  function renderDestinations(searchQuery = '') {
    const container = document.getElementById('destinationsGrid');
    if (!container) return;

    let filtered = DESTINATIONS_DATA;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(d => d.title.toLowerCase().includes(q) || d.region.toLowerCase().includes(q) || d.description.toLowerCase().includes(q));
    }

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748B;">No destinations found matching your search. Contact Aman Thakur at 6230135697 for custom itineraries.</div>`;
      return;
    }

    container.innerHTML = filtered.map(d => `
      <article class="destination-card-rich">
        <div class="dest-media">
          <img src="${d.image}" alt="${d.title}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80';">
          <span class="dest-badge">${d.tag}</span>
          <span class="dest-region-chip">${d.region}</span>
        </div>
        <div class="dest-body">
          <div class="rating-row">
            ${renderBubbleRating(d.rating)}
            <span class="review-count">${d.reviewCount.toLocaleString('en-IN')} reviews</span>
          </div>
          <h3 class="dest-title">${d.title}</h3>
          <p class="dest-desc">${d.description}</p>
          
          <div class="dest-info-pill">
            <span>🗓️ <strong>Best Season:</strong> ${d.bestTime}</span>
          </div>

          <div class="dest-highlights-box">
            <h4>🌟 Must-Do Experiences:</h4>
            <ul>
              ${d.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>

          <div class="dest-footer-row">
            <div class="dest-price-box">
              <span class="price-sub">Top Stays: ${d.topStays}</span>
              <strong class="price-val">${d.startingPrice}</strong>
            </div>
            <a href="https://wa.me/916230135697?text=Hi%20Aman,%20I%20want%20to%20plan%20a%20holiday%20to%20${encodeURIComponent(d.title)}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 10px 18px; font-size: 0.88rem;">
              Plan Trip with Aman &rarr;
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  function renderHomestays(filter = 'all', searchQuery = '') {
    const container = document.getElementById('homestaysGrid');
    if (!container) return;

    let filtered = HOTELS_DATA.filter(h => h.category === 'homestay' || (h.category === 'budget' && h.title.toLowerCase().includes('homestay')));
    if (filter === 'budget') {
      filtered = filtered.filter(h => h.price <= 1200 || h.tag.toLowerCase().includes('budget') || h.tag.toLowerCase().includes('backpacker'));
    } else if (filter === 'mudhouse') {
      filtered = filtered.filter(h => h.tag.includes('Mud') || h.title.includes('Mud'));
    } else if (filter === 'kathkuni') {
      filtered = filtered.filter(h => h.tag.includes('Kathkuni') || h.title.includes('Kathkuni'));
    } else if (filter === 'riverside') {
      filtered = filtered.filter(h => h.tag.includes('River') || h.title.includes('River') || h.title.includes('Stream'));
    } else if (filter === 'village') {
      filtered = filtered.filter(h => h.tag.includes('Village') || h.location.includes('Chitkul') || h.location.includes('Langza') || h.location.includes('Kalpa'));
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(h => h.title.toLowerCase().includes(q) || h.location.toLowerCase().includes(q));
    }

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748B;">No homestays found matching your search. Contact Aman Thakur at 6230135697 for authentic local village stays.</div>`;
      return;
    }

    container.innerHTML = filtered.map(createCardHTML).join('');
    attachCardListeners(container, HOTELS_DATA);
  }

  function renderTreks(filter = 'all', searchQuery = '') {
    const container = document.getElementById('treksGrid');
    if (!container) return;

    let filtered = ATTRACTIONS_DATA;
    if (filter === 'unexplored') {
      filtered = filtered.filter(a => a.category === 'unexplored' || (a.tag && /unexplored|hidden|offbeat|secret|sacred/i.test(a.tag)));
    } else if (filter === 'treks') {
      filtered = filtered.filter(a => a.category === 'treks' || a.category === 'unexplored');
    } else if (filter !== 'all') {
      filtered = filtered.filter(a => a.category === filter);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(a => 
        a.title.toLowerCase().includes(q) || 
        a.location.toLowerCase().includes(q) ||
        (a.tag && a.tag.toLowerCase().includes(q)) ||
        (a.description && a.description.toLowerCase().includes(q))
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748B;">No treks found matching your search. Contact Aman Thakur at 6230135697 for custom alpine routes.</div>`;
      return;
    }

    container.innerHTML = filtered.map(createCardHTML).join('');
    attachCardListeners(container, ATTRACTIONS_DATA);
  }

  function renderAllCards() {
    renderDestinations();
    renderHotels();
    renderHomestays();
    renderTreks();
    renderAttractions();
    renderRestaurants();
    renderReviews();
  }

  function attachCardListeners(container, dataList) {
    // Heart buttons
    container.querySelectorAll('.heart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const item = dataList.find(x => x.id === id);
        if (item) toggleWishlist(item);
      });
    });

    // Card click opens modal
    container.querySelectorAll('.travel-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const item = dataList.find(x => x.id === id);
        if (item) openDetailModal(item);
      });
    });
  }

  // =========================================================================
  // 5. ITEM DETAIL MODAL
  // =========================================================================

  const detailModal = document.getElementById('itemDetailModal');
  const modalContent = document.getElementById('modalDetailContent');
  const closeDetailBtn = document.getElementById('closeDetailModalBtn');

  function openDetailModal(item) {
    if (!detailModal || !modalContent) return;

    const priceLabel = item.priceLabel ? item.priceLabel : `${formatRupees(item.price)} <small style="font-size:0.9rem; color:#64748B;">/ night</small>`;
    const amenitiesList = item.amenities ? item.amenities.map(a => `<span class="modal-amenity-item">✓ ${a}</span>`).join('') : '';

    modalContent.innerHTML = `
      <div class="modal-gallery-hero">
        <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80';">
      </div>
      <div class="modal-title-row">
        <div>
          <h2 class="modal-item-title" id="modalItemTitle">${item.title}</h2>
          <div class="modal-item-location">📍 ${item.location}</div>
          <div class="rating-row" style="margin-top: 8px;">
            ${renderBubbleRating(item.rating)}
            <span class="review-count"><strong>${item.rating}/5</strong> &bull; (${item.reviewCount.toLocaleString('en-IN')} authentic reviews)</span>
          </div>
        </div>
        <div class="modal-price-tag">${priceLabel}</div>
      </div>

      <div class="modal-desc-box">
        <p>${item.description}</p>
      </div>

      <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 10px;">Amenities &amp; Features</h4>
      <div class="modal-amenities-list">
        ${amenitiesList}
      </div>

      <div class="modal-booking-cta">
        <div class="cta-aman-info">
          <h4>Reserve or Inquire with Aman Thakur</h4>
          <p>Get exclusive desk rates, complimentary breakfast, or customized transport directly for your Himachal trip.</p>
        </div>
        <div class="modal-action-btns">
          <a href="tel:6230135697" class="btn-primary">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Aman: 6230135697
          </a>
          <a href="https://wa.me/916230135697?text=Hi%20Aman,%20I%20am%20interested%20in%20booking%20${encodeURIComponent(item.title)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-large" style="padding: 10px 18px; font-size: 0.9rem;">
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    `;

    detailModal.hidden = false;
    setTimeout(() => detailModal.classList.add('show'), 10);
    document.body.style.overflow = 'hidden';
  }

  function closeDetailModal() {
    if (!detailModal) return;
    detailModal.classList.remove('show');
    setTimeout(() => {
      detailModal.hidden = true;
      document.body.style.overflow = '';
    }, 200);
  }

  if (closeDetailBtn) closeDetailBtn.addEventListener('click', closeDetailModal);
  if (detailModal) {
    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) closeDetailModal();
    });
  }

  // =========================================================================
  // 6. WRITE A REVIEW MODAL & SUBMISSION
  // =========================================================================

  const writeReviewModal = document.getElementById('writeReviewModal');
  const openReviewBtn = document.getElementById('openReviewBtn');
  const openReviewBtn2 = document.getElementById('openReviewBtn2');
  const closeReviewModalBtn = document.getElementById('closeReviewModalBtn');
  const writeReviewForm = document.getElementById('writeReviewForm');
  const bubblePicker = document.getElementById('bubblePicker');
  const pickerRatingDesc = document.getElementById('pickerRatingDesc');

  const ratingDescriptions = {
    1: 'Terrible (1/5)',
    2: 'Poor (2/5)',
    3: 'Average (3/5)',
    4: 'Very Good (4/5)',
    5: 'Excellent (5/5)'
  };

  function openWriteReviewModal(targetPlace = '') {
    if (!writeReviewModal) return;
    if (targetPlace) {
      document.getElementById('reviewTargetName').value = targetPlace;
    }
    writeReviewModal.hidden = false;
    setTimeout(() => writeReviewModal.classList.add('show'), 10);
    document.body.style.overflow = 'hidden';
  }

  function closeWriteReviewModal() {
    if (!writeReviewModal) return;
    writeReviewModal.classList.remove('show');
    setTimeout(() => {
      writeReviewModal.hidden = true;
      document.body.style.overflow = '';
    }, 200);
  }

  if (openReviewBtn) openReviewBtn.addEventListener('click', () => openWriteReviewModal());
  if (openReviewBtn2) openReviewBtn2.addEventListener('click', () => openWriteReviewModal());
  if (closeReviewModalBtn) closeReviewModalBtn.addEventListener('click', closeWriteReviewModal);
  if (writeReviewModal) {
    writeReviewModal.addEventListener('click', (e) => {
      if (e.target === writeReviewModal) closeWriteReviewModal();
    });
  }

  // Bubble Picker Interaction
  if (bubblePicker) {
    const bubbles = bubblePicker.querySelectorAll('.picker-bubble');
    bubbles.forEach(b => {
      b.addEventListener('mouseenter', () => {
        const val = parseInt(b.dataset.val, 10);
        bubbles.forEach((el, idx) => {
          if (idx < val) el.classList.add('hovered');
          else el.classList.remove('hovered');
        });
      });

      b.addEventListener('mouseleave', () => {
        bubbles.forEach(el => el.classList.remove('hovered'));
      });

      b.addEventListener('click', () => {
        currentReviewRating = parseInt(b.dataset.val, 10);
        bubbles.forEach((el, idx) => {
          if (idx < currentReviewRating) el.classList.add('active');
          else el.classList.remove('active');
        });
        pickerRatingDesc.textContent = ratingDescriptions[currentReviewRating];
      });
    });
  }

  // Write Review Form Submission
  if (writeReviewForm) {
    writeReviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const target = document.getElementById('reviewTargetName').value.trim();
      const title = document.getElementById('reviewTitle').value.trim();
      const body = document.getElementById('reviewBody').value.trim();
      const author = document.getElementById('reviewerName').value.trim();
      const location = document.getElementById('reviewerLocation').value.trim() || 'Verified Traveler';
      const tripType = writeReviewForm.querySelector('input[name="trip_type"]:checked')?.value || 'Family';

      if (!target || !title || !body || !author) {
        alert('Please fill out all required fields marked with *.');
        return;
      }

      const newReview = {
        id: 'rev-' + Date.now(),
        target,
        title,
        body,
        author,
        location,
        tripType,
        rating: currentReviewRating,
        date: 'Just now'
      };

      REVIEWS_DATA.unshift(newReview);
      renderReviews();
      closeWriteReviewModal();
      writeReviewForm.reset();
      showToast(`Thank you, ${author}! Your review for "${target}" has been published.`);
      
      // Scroll to reviews section
      const revSection = document.getElementById('reviews-section');
      if (revSection) {
        revSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // =========================================================================
  // 7. SAVED WISHLIST DRAWER
  // =========================================================================

  const wishlistDrawer = document.getElementById('wishlistDrawer');
  const wishlistHeaderBtn = document.getElementById('wishlistHeaderBtn');
  const closeWishlistBtn = document.getElementById('closeWishlistBtn');
  const wishlistContainer = document.getElementById('wishlistItemsContainer');

  function openWishlistDrawer() {
    if (!wishlistDrawer) return;
    renderWishlistDrawer();
    wishlistDrawer.hidden = false;
    setTimeout(() => wishlistDrawer.classList.add('show'), 10);
    document.body.style.overflow = 'hidden';
  }

  function closeWishlistDrawer() {
    if (!wishlistDrawer) return;
    wishlistDrawer.classList.remove('show');
    setTimeout(() => {
      wishlistDrawer.hidden = true;
      document.body.style.overflow = '';
    }, 200);
  }

  function renderWishlistDrawer() {
    if (!wishlistContainer) return;
    if (savedWishlist.length === 0) {
      wishlistContainer.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: #64748B;">
          <p style="font-size: 2rem; margin-bottom: 8px;">❤️</p>
          <p style="font-weight: 700; color: #0F172A;">No saved trips yet</p>
          <p style="font-size: 0.85rem; margin-top: 4px;">Click the heart icon on any hotel or tour to save it for consultation with Aman Thakur.</p>
        </div>
      `;
      return;
    }

    wishlistContainer.innerHTML = savedWishlist.map(item => `
      <div class="wishlist-item-card">
        <img src="${item.image}" alt="${item.title}" class="wishlist-img" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80';">
        <div class="wishlist-details">
          <h4>${item.title}</h4>
          <span class="w-price">${item.priceLabel || formatRupees(item.price)}</span>
        </div>
        <button class="btn-remove-wishlist" data-id="${item.id}" title="Remove">&times;</button>
      </div>
    `).join('');

    wishlistContainer.querySelectorAll('.btn-remove-wishlist').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const itm = savedWishlist.find(x => x.id === id);
        if (itm) toggleWishlist(itm);
      });
    });
  }

  if (wishlistHeaderBtn) wishlistHeaderBtn.addEventListener('click', openWishlistDrawer);
  if (closeWishlistBtn) closeWishlistBtn.addEventListener('click', closeWishlistDrawer);
  if (wishlistDrawer) {
    wishlistDrawer.addEventListener('click', (e) => {
      if (e.target === wishlistDrawer) closeWishlistDrawer();
    });
  }

  // =========================================================================
  // 8. SEARCH ENGINE & AUTOCOMPLETE
  // =========================================================================

  const destInput = document.getElementById('destinationInput');
  const suggestionsBox = document.getElementById('suggestionsBox');
  const searchForm = document.getElementById('mainSearchForm');
  const submitSearchBtn = document.getElementById('submitSearchBtn');
  const categoryTabs = document.querySelectorAll('.hero-tab-btn');

  // Autocomplete show/hide
  if (destInput && suggestionsBox) {
    destInput.addEventListener('focus', () => {
      suggestionsBox.classList.add('show');
    });

    document.addEventListener('click', (e) => {
      if (!destInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.classList.remove('show');
      }
    });

    suggestionsBox.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        destInput.value = item.dataset.val;
        suggestionsBox.classList.remove('show');
        executeSearch();
      });
    });
  }

  // Hero Tab Switching
  let activeCategory = 'all';
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.category;

      if (activeCategory === 'himachal') {
        const himSec = document.getElementById('himachal-spotlight');
        if (himSec) himSec.scrollIntoView({ behavior: 'smooth' });
      } else if (activeCategory === 'hotels') {
        const hSec = document.getElementById('hotels');
        if (hSec) hSec.scrollIntoView({ behavior: 'smooth' });
      } else if (activeCategory === 'attractions') {
        const aSec = document.getElementById('attractions');
        if (aSec) aSec.scrollIntoView({ behavior: 'smooth' });
      } else if (activeCategory === 'restaurants') {
        const rSec = document.getElementById('restaurants');
        if (rSec) rSec.scrollIntoView({ behavior: 'smooth' });
      } else {
        executeSearch();
      }
    });
  });

  // Trending Search Pills
  document.querySelectorAll('.pill-btn').forEach(pill => {
    pill.addEventListener('click', () => {
      if (destInput) {
        destInput.value = pill.dataset.search;
        executeSearch();
      }
    });
  });

  function executeSearch() {
    const q = destInput ? destInput.value.trim() : '';
    renderDestinations(q);
    renderHotels('all', q);
    renderHomestays('all', q);
    renderTreks('all', q);
    renderAttractions('all', q);
    renderRestaurants('all', q);

    if (q) {
      showToast(`Showing results for "${q}" across Himachal Pradesh.`);
      const resultsTarget = document.getElementById('hotels') || document.getElementById('destinationsGrid') || document.getElementById('homestaysGrid') || document.getElementById('treksGrid');
      if (resultsTarget) resultsTarget.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (searchForm) searchForm.addEventListener('submit', executeSearch);
  if (submitSearchBtn) submitSearchBtn.addEventListener('click', executeSearch);

  // Filter Pills inside Hotel Section
  const hotelPills = document.querySelectorAll('#hotelFilterBar .filter-pill');
  hotelPills.forEach(pill => {
    pill.addEventListener('click', () => {
      hotelPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderHotels(pill.dataset.filter, destInput ? destInput.value : '');
    });
  });

  // Filter Pills inside Homestays Section
  const homestayPills = document.querySelectorAll('#homestayFilterBar .filter-pill');
  homestayPills.forEach(pill => {
    pill.addEventListener('click', () => {
      homestayPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderHomestays(pill.dataset.filter, destInput ? destInput.value : '');
    });
  });

  // Filter Pills inside Treks Section
  const trekPills = document.querySelectorAll('#trekFilterBar .filter-pill');
  trekPills.forEach(pill => {
    pill.addEventListener('click', () => {
      trekPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderTreks(pill.dataset.filter, destInput ? destInput.value : '');
    });
  });

  // Filter Pills inside Attraction Section
  const attractionPills = document.querySelectorAll('#attractionFilterBar .filter-pill');
  attractionPills.forEach(pill => {
    pill.addEventListener('click', () => {
      attractionPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderAttractions(pill.dataset.filter, destInput ? destInput.value : '');
    });
  });

  // Filter Pills inside Restaurant Section
  const restaurantPills = document.querySelectorAll('#restaurantFilterBar .filter-pill');
  restaurantPills.forEach(pill => {
    pill.addEventListener('click', () => {
      restaurantPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderRestaurants(pill.dataset.filter, destInput ? destInput.value : '');
    });
  });

  // =========================================================================
  // 9. GUEST & ROOM COUNTERS POPOVER
  // =========================================================================

  const guestsToggleField = document.getElementById('guestsToggleField');
  const guestPopover = document.getElementById('guestPopover');
  const guestsDisplayText = document.getElementById('guestsDisplayText');
  const applyGuestsBtn = document.getElementById('applyGuestsBtn');

  let adults = 2;
  let children = 0;
  let rooms = 1;

  if (guestsToggleField && guestPopover) {
    guestsToggleField.addEventListener('click', (e) => {
      if (e.target.closest('.guest-popover')) return;
      guestPopover.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!guestsToggleField.contains(e.target)) {
        guestPopover.classList.remove('show');
      }
    });

    // Adult buttons
    document.getElementById('incAdults')?.addEventListener('click', () => {
      adults++;
      updateGuestCount();
    });
    document.getElementById('decAdults')?.addEventListener('click', () => {
      if (adults > 1) { adults--; updateGuestCount(); }
    });

    // Child buttons
    document.getElementById('incChildren')?.addEventListener('click', () => {
      children++;
      updateGuestCount();
    });
    document.getElementById('decChildren')?.addEventListener('click', () => {
      if (children > 0) { children--; updateGuestCount(); }
    });

    // Room buttons
    document.getElementById('incRooms')?.addEventListener('click', () => {
      rooms++;
      updateGuestCount();
    });
    document.getElementById('decRooms')?.addEventListener('click', () => {
      if (rooms > 1) { rooms--; updateGuestCount(); }
    });

    if (applyGuestsBtn) {
      applyGuestsBtn.addEventListener('click', () => {
        guestPopover.classList.remove('show');
      });
    }
  }

  function updateGuestCount() {
    document.getElementById('adultCount').textContent = adults;
    document.getElementById('childCount').textContent = children;
    document.getElementById('roomCount').textContent = rooms;

    const totalGuests = adults + children;
    guestsDisplayText.textContent = `${totalGuests} Guest${totalGuests > 1 ? 's' : ''}, ${rooms} Room${rooms > 1 ? 's' : ''}`;
  }

  // =========================================================================
  // 10. AMAN THAKUR INQUIRY & CONTACT FORM
  // =========================================================================

  const inquiryForm = document.getElementById('inquiryForm');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('userName');
      const phoneInput = document.getElementById('userPhone');
      const destSelect = document.getElementById('tripDestination');
      const emailInput = document.getElementById('userEmail');
      const dateInput = document.getElementById('travelMonth');
      const msgInput = document.getElementById('userMessage');

      const nameError = document.getElementById('nameError');
      const phoneError = document.getElementById('phoneError');
      const destError = document.getElementById('destError');

      let valid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameError.classList.add('show');
        valid = false;
      } else {
        nameError.classList.remove('show');
      }

      // Validate Phone (at least 10 digits)
      const phoneDigits = phoneInput.value.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        phoneError.classList.add('show');
        valid = false;
      } else {
        phoneError.classList.remove('show');
      }

      // Validate Destination
      if (!destSelect.value) {
        destError.classList.add('show');
        valid = false;
      } else {
        destError.classList.remove('show');
      }

      if (!valid) return;

      const userName = nameInput.value.trim();
      const userPhone = phoneInput.value.trim();
      const chosenDest = destSelect.value;
      const travelDate = dateInput ? dateInput.value : '';
      const refId = 'HT-' + Math.floor(100000 + Math.random() * 900000);

      try {
        sessionStorage.setItem('chalo_himachal_lead', JSON.stringify({
          name: userName,
          phone: userPhone,
          dest: chosenDest,
          date: travelDate || 'Upcoming Season',
          travelers: 'Family / Group',
          type: 'Direct Inquiry',
          ref: refId
        }));
      } catch (err) {}

      showToast(`Thank you, ${userName}! Aman Thakur received your request for "${chosenDest}". Redirecting...`);

      const queryParams = new URLSearchParams({
        name: userName,
        phone: userPhone,
        dest: chosenDest,
        date: travelDate || 'Upcoming Season',
        ref: refId
      }).toString();

      setTimeout(() => {
        inquiryForm.reset();
        window.location.href = `thank-you.html?${queryParams}`;
      }, 700);
    });
  }

  // =========================================================================
  // 11. MOBILE DRAWER & NAVIGATION
  // =========================================================================

  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
    });

    if (drawerClose) {
      drawerClose.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    }

    mobileDrawer.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // =========================================================================
  // 12. FLOATING TOAST NOTIFICATIONS
  // =========================================================================

  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="#0E4D3C" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 4000);
  }

  // Set default dates for search
  const checkinInput = document.getElementById('checkinDate');
  const checkoutInput = document.getElementById('checkoutDate');
  if (checkinInput && checkoutInput) {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 4);

    checkinInput.value = today.toISOString().split('T')[0];
    checkoutInput.value = nextWeek.toISOString().split('T')[0];
  }

  // Initial render
  renderAllCards();
  updateWishlistBadge();

});
