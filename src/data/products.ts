
import { Product } from "@/types/product";

export const products: Product[] = [
  // Superbikes
  {
    id: "sb-001",
    name: "Ducati Panigale V4",
    description: "The Ducati Panigale V4 is the most powerful production Ducati ever created. It offers pure racing technology for an adrenaline-filled riding experience.",
    price: 2598000, // ₹25,98,000
    category: "superbike",
    brand: "Ducati",
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1170&auto=format&fit=crop",
    available: true,
    featured: true,
    engineSize: "1103cc",
    horsepower: 215,
    topSpeed: 299,
    acceleration: "2.8s",
    weight: 195,
    fuelType: "Petrol",
    colors: ["Racing Red", "Dark Stealth", "Winter Test Livery"]
  },
  {
    id: "sb-002",
    name: "BMW S1000RR",
    description: "The BMW S1000RR is a sport bike initially made by BMW Motorrad to compete in the 2009 Superbike World Championship. Now evolved into an exemplary street bike.",
    price: 1989000, // ₹19,89,000
    category: "superbike",
    brand: "BMW",
    imageUrl: "https://images.unsplash.com/photo-1637829612950-8c15f53afa3e?q=80&w=3024&auto=format&fit=crop",
    available: true,
    featured: true,
    engineSize: "999cc",
    horsepower: 207,
    topSpeed: 299,
    acceleration: "2.9s",
    weight: 197,
    fuelType: "Petrol",
    colors: ["Racing Red", "Light White/Racing Blue/Racing Red", "Black Storm Metallic"]
  },
  {
    id: "sb-003",
    name: "Kawasaki Ninja ZX-10R",
    description: "The Kawasaki Ninja ZX-10R is a motorcycle in the Ninja sport bike series from the Japanese manufacturer Kawasaki, the successor to the Ninja ZX-9R.",
    price: 1549000, // ₹15,49,000
    category: "superbike",
    brand: "Kawasaki",
    imageUrl: "https://images.unsplash.com/photo-1580310728519-1af582f834d8?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "998cc",
    horsepower: 203,
    topSpeed: 299,
    acceleration: "2.9s",
    weight: 201,
    fuelType: "Petrol",
    colors: ["Lime Green", "Black", "KRT Edition"]
  },
  {
    id: "sb-004",
    name: "Honda CBR1000RR-R Fireblade SP",
    description: "The Honda CBR1000RR-R Fireblade SP, designed with MotoGP technology, offers the ultimate riding experience for track enthusiasts.",
    price: 2350000, // ₹23,50,000
    category: "superbike",
    brand: "Honda",
    imageUrl: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=1035&auto=format&fit=crop",
    available: true,
    engineSize: "1000cc",
    horsepower: 214,
    topSpeed: 299,
    acceleration: "2.8s",
    weight: 201,
    fuelType: "Petrol",
    colors: ["Grand Prix Red", "Matte Pearl Morion Black"]
  },
  {
    id: "sb-005",
    name: "Yamaha YZF-R1M",
    description: "The Yamaha YZF-R1M is a limited-production, track-focused version of the R1 that offers the closest thing to a MotoGP experience for regular riders.",
    price: 2099000, // ₹20,99,000
    category: "superbike",
    brand: "Yamaha",
    imageUrl: "https://images.unsplash.com/photo-1597745994767-0b2a50b222b5?q=80&w=1175&auto=format&fit=crop",
    available: true,
    engineSize: "998cc",
    horsepower: 200,
    topSpeed: 299,
    acceleration: "2.9s",
    weight: 202,
    fuelType: "Petrol",
    colors: ["Carbon Fiber/Liquid Metal"]
  },
  {
    id: "sb-006",
    name: "Ducati Streetfighter V4 S",
    description: "The Streetfighter V4 S represents the ultimate in Ducati's naked sport bike design, integrating the tech from Panigale with stripped-down aggressive styling.",
    price: 2299000, // ₹22,99,000
    category: "superbike",
    brand: "Ducati",
    imageUrl: "https://images.unsplash.com/photo-1635073908681-b4476dd545a4?q=80&w=1228&auto=format&fit=crop",
    available: true,
    engineSize: "1103cc",
    horsepower: 208,
    topSpeed: 285,
    acceleration: "2.9s",
    weight: 199,
    fuelType: "Petrol",
    colors: ["Ducati Red", "Dark Stealth"]
  },
  {
    id: "sb-007",
    name: "BMW M 1000 RR",
    description: "The BMW M 1000 RR is the first M model from BMW Motorrad, built specifically for maximum race track performance and the highest motorsport requirements.",
    price: 4250000, // ₹42,50,000
    category: "superbike",
    brand: "BMW",
    imageUrl: "https://images.unsplash.com/photo-1604407132788-3a3a415a1e94?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "999cc",
    horsepower: 212,
    topSpeed: 306,
    acceleration: "2.7s",
    weight: 192,
    fuelType: "Petrol",
    colors: ["Light White", "Racing Blue Metallic", "Black Storm Metallic"]
  },
  {
    id: "sb-008",
    name: "Kawasaki Ninja H2R",
    description: "The Kawasaki Ninja H2R is a track-only, supercharged superbike with unmatched power. It's the world's most powerful production motorcycle.",
    price: 7799000, // ₹77,99,000
    category: "superbike",
    brand: "Kawasaki",
    imageUrl: "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=1170&auto=format&fit=crop",
    available: true,
    featured: true,
    engineSize: "998cc",
    horsepower: 310,
    topSpeed: 400,
    acceleration: "2.5s",
    weight: 216,
    fuelType: "Petrol",
    colors: ["Mirror Coated Black/Carbon"]
  },
  {
    id: "sb-009",
    name: "Yamaha YZF-R7",
    description: "The Yamaha YZF-R7 combines high performance with everyday functionality, making track-ready technology accessible to a broader range of riders.",
    price: 1199000, // ₹11,99,000
    category: "superbike",
    brand: "Yamaha",
    imageUrl: "https://images.unsplash.com/photo-1683101018619-bcc387347bb5?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "689cc",
    horsepower: 73,
    topSpeed: 240,
    acceleration: "3.4s",
    weight: 188,
    fuelType: "Petrol",
    colors: ["Team Yamaha Blue", "Performance Black"]
  },
  {
    id: "sb-010",
    name: "Honda CB650R",
    description: "The Honda CB650R is a mid-range naked bike that offers a balance of sporty performance and everyday rideability with distinctive retro styling.",
    price: 899000, // ₹8,99,000
    category: "superbike",
    brand: "Honda",
    imageUrl: "https://images.unsplash.com/photo-1559271632-d145e74429b1?q=80&w=987&auto=format&fit=crop",
    available: true,
    engineSize: "649cc",
    horsepower: 94,
    topSpeed: 225,
    acceleration: "3.5s",
    weight: 202,
    fuelType: "Petrol",
    colors: ["Candy Chromosphere Red", "Matt Gunpowder Black Metallic", "Pearl Smoky Gray"]
  },
  // Additional Superbikes
  {
    id: "sb-011",
    name: "Ducati Monster SP",
    description: "The Ducati Monster SP features upgraded Öhlins suspension and premium racing components for enhanced performance on the road and track.",
    price: 1799000, // ₹17,99,000
    category: "superbike",
    brand: "Ducati",
    imageUrl: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1168&auto=format&fit=crop",
    available: true,
    engineSize: "937cc",
    horsepower: 111,
    topSpeed: 250,
    acceleration: "3.2s",
    weight: 186,
    fuelType: "Petrol",
    colors: ["Red/Black", "Red/White"]
  },
  {
    id: "sb-012",
    name: "BMW K 1600 GTL",
    description: "The ultimate luxury touring bike with a smooth 6-cylinder engine, advanced technology, and unmatched comfort for long-distance rides.",
    price: 2999000, // ₹29,99,000
    category: "luxury-car",
    brand: "BMW",
    imageUrl: "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "1649cc",
    horsepower: 160,
    topSpeed: 250,
    acceleration: "3.2s",
    weight: 348,
    fuelType: "Petrol",
    colors: ["Black Storm Metallic", "Option 719 Mineral White Metallic"]
  },
  // Supercars
  {
    id: "sc-001",
    name: "Lamborghini Aventador SVJ",
    description: "The Lamborghini Aventador SVJ represents the pinnacle of Lamborghini's naturally aspirated V12 engine tradition, with extensive aerodynamic improvements.",
    price: 85000000, // ₹8,50,00,000
    category: "supercar",
    brand: "Lamborghini",
    imageUrl: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1287&auto=format&fit=crop",
    available: true,
    featured: true,
    engineSize: "6498cc",
    horsepower: 770,
    topSpeed: 350,
    acceleration: "2.8s",
    weight: 1525,
    fuelType: "Petrol",
    colors: ["Verde Alceo", "Rosso Mars", "Blu Cepheus", "Giallo Orion"]
  },
  {
    id: "sc-002",
    name: "Ferrari SF90 Stradale",
    description: "The Ferrari SF90 Stradale is the most powerful Ferrari road car ever, a hybrid featuring a twin-turbocharged V8 engine and three electric motors.",
    price: 75000000, // ₹7,50,00,000
    category: "supercar",
    brand: "Ferrari",
    imageUrl: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1170&auto=format&fit=crop",
    available: true,
    featured: true,
    engineSize: "3990cc",
    horsepower: 986,
    topSpeed: 340,
    acceleration: "2.5s",
    weight: 1570,
    fuelType: "Hybrid",
    colors: ["Rosso Corsa", "Giallo Modena", "Blu Corsa", "Nero"]
  },
  {
    id: "sc-003",
    name: "Bugatti Chiron Super Sport",
    description: "The Bugatti Chiron Super Sport represents the ultimate in automotive engineering, designed for extreme speeds with unmatched luxury.",
    price: 300000000, // ₹30,00,00,000
    category: "supercar",
    brand: "Bugatti",
    imageUrl: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?q=80&w=1170&auto=format&fit=crop",
    available: true,
    featured: true,
    engineSize: "7993cc",
    horsepower: 1578,
    topSpeed: 440,
    acceleration: "2.3s",
    weight: 1995,
    fuelType: "Petrol",
    colors: ["French Racing Blue", "Black Carbon", "Atlantic Blue"]
  },
  {
    id: "sc-004",
    name: "Porsche 911 GT2 RS",
    description: "The Porsche 911 GT2 RS is the most powerful production 911 ever built, featuring track-focused performance with everyday usability.",
    price: 37500000, // ₹3,75,00,000
    category: "supercar",
    brand: "Porsche",
    imageUrl: "https://images.unsplash.com/photo-1611651338412-8403fa6e3599?q=80&w=1171&auto=format&fit=crop",
    available: true,
    engineSize: "3800cc",
    horsepower: 700,
    topSpeed: 340,
    acceleration: "2.7s",
    weight: 1470,
    fuelType: "Petrol",
    colors: ["GT Silver Metallic", "Guards Red", "White", "Black"]
  },
  {
    id: "sc-005",
    name: "McLaren 765LT",
    description: "The McLaren 765LT is the most powerful LT model ever, focusing on aerodynamic excellence and weight reduction for track performance.",
    price: 59000000, // ₹5,90,00,000
    category: "supercar",
    brand: "McLaren",
    imageUrl: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "3994cc",
    horsepower: 755,
    topSpeed: 330,
    acceleration: "2.7s",
    weight: 1339,
    fuelType: "Petrol",
    colors: ["Papaya Spark", "Burton Blue", "McLaren Orange", "Onyx Black"]
  },
  {
    id: "sc-006",
    name: "Ferrari 296 GTB",
    description: "The Ferrari 296 GTB defines fun to drive with its innovative plug-in hybrid system and a brand new V6 turbo engine layout.",
    price: 55000000, // ₹5,50,00,000
    category: "supercar",
    brand: "Ferrari",
    imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "2992cc",
    horsepower: 819,
    topSpeed: 330,
    acceleration: "2.9s",
    weight: 1470,
    fuelType: "Hybrid",
    colors: ["Rosso Imola", "Giallo Modena", "Blu Corsa", "Bianco Avus"]
  },
  {
    id: "sc-007",
    name: "Lamborghini Huracan STO",
    description: "The Lamborghini Huracan STO is a street-legal super sports car concept inspired by the racing heritage of Lamborghini Squadra Corse.",
    price: 49000000, // ₹4,90,00,000
    category: "supercar",
    brand: "Lamborghini",
    imageUrl: "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "5204cc",
    horsepower: 640,
    topSpeed: 310,
    acceleration: "3.0s",
    weight: 1339,
    fuelType: "Petrol",
    colors: ["Blu Laufey", "Arancio California", "Verde Citrea"]
  },
  {
    id: "sc-008",
    name: "Porsche Taycan Turbo S",
    description: "The Porsche Taycan Turbo S is an all-electric sports car that combines Porsche performance with zero emissions and futuristic design.",
    price: 23500000, // ₹2,35,00,000
    category: "supercar",
    brand: "Porsche",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "Electric",
    horsepower: 750,
    topSpeed: 260,
    acceleration: "2.8s",
    weight: 2370,
    fuelType: "Electric",
    colors: ["Frozen Blue Metallic", "Carmine Red", "Chalk", "Volcano Grey Metallic"]
  },
  {
    id: "sc-009",
    name: "McLaren Artura",
    description: "The McLaren Artura is a high-performance hybrid supercar that combines a twin-turbocharged V6 engine with an electric motor for exceptional performance.",
    price: 39500000, // ₹3,95,00,000
    category: "supercar",
    brand: "McLaren",
    imageUrl: "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?q=80&w=1195&auto=format&fit=crop",
    available: true,
    engineSize: "2993cc",
    horsepower: 671,
    topSpeed: 330,
    acceleration: "3.0s",
    weight: 1498,
    fuelType: "Hybrid",
    colors: ["Ember Orange", "Flux Green", "Volcano Yellow", "McLaren Orange"]
  },
  {
    id: "sc-010",
    name: "Bugatti Veyron",
    description: "The legendary Bugatti Veyron revolutionized automotive engineering when it launched as the world's fastest production car. A milestone in automotive history.",
    price: 120000000, // ₹12,00,00,000
    category: "supercar",
    brand: "Bugatti",
    imageUrl: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=1164&auto=format&fit=crop",
    available: true,
    engineSize: "7993cc",
    horsepower: 1001,
    topSpeed: 408,
    acceleration: "2.5s",
    weight: 1888,
    fuelType: "Petrol",
    colors: ["Black/Red", "Blue/Light Blue", "Black/White"]
  },
  // Additional Supercars
  {
    id: "sc-011",
    name: "Ferrari LaFerrari Aperta",
    description: "The ultimate expression of Ferrari's hybrid technology, with open-top driving pleasure and race-inspired performance.",
    price: 220000000, // ₹22,00,00,000
    category: "supercar",
    brand: "Ferrari",
    imageUrl: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1074&auto=format&fit=crop",
    available: true,
    engineSize: "6262cc",
    horsepower: 950,
    topSpeed: 350,
    acceleration: "2.8s",
    weight: 1495,
    fuelType: "Hybrid",
    colors: ["Rosso Corsa", "Nero DS", "Bianco Italia"]
  },
  {
    id: "sc-012",
    name: "Lamborghini Sián FKP 37",
    description: "Lamborghini's first hybrid supercar combines V12 power with a supercapacitor-based hybrid system in a limited-edition masterpiece.",
    price: 280000000, // ₹28,00,00,000
    category: "supercar",
    brand: "Lamborghini",
    imageUrl: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=1228&auto=format&fit=crop",
    available: true,
    engineSize: "6498cc",
    horsepower: 819,
    topSpeed: 350,
    acceleration: "2.8s",
    weight: 1645,
    fuelType: "Hybrid",
    colors: ["Verde Gea", "Oro Electrum"]
  },
  // Luxury Cars
  {
    id: "lc-001",
    name: "Rolls-Royce Phantom",
    description: "The Rolls-Royce Phantom is the pinnacle of luxury motoring, featuring handcrafted materials and ultimate comfort with a whisper-quiet V12 engine.",
    price: 95000000, // ₹9,50,00,000
    category: "luxury-car",
    brand: "Rolls-Royce",
    imageUrl: "https://images.unsplash.com/photo-1631295387526-d9156650d2a3?q=80&w=1257&auto=format&fit=crop",
    available: true,
    featured: true,
    engineSize: "6749cc",
    horsepower: 563,
    topSpeed: 250,
    acceleration: "5.3s",
    weight: 2560,
    fuelType: "Petrol",
    colors: ["Arctic White", "Diamond Black", "Salamanca Blue", "Twilight Purple"]
  },
  {
    id: "lc-002",
    name: "Bentley Continental GT",
    description: "The Bentley Continental GT represents the perfect blend of performance and luxury, handcrafted with the finest materials available.",
    price: 40000000, // ₹4,00,00,000
    category: "luxury-car",
    brand: "Bentley",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "5998cc",
    horsepower: 626,
    topSpeed: 333,
    acceleration: "3.7s",
    weight: 2244,
    fuelType: "Petrol",
    colors: ["St. James Red", "Bentley Racing Green", "Glacier White", "Onyx"]
  },
  {
    id: "lc-003",
    name: "Mercedes-Maybach S-Class",
    description: "The Mercedes-Maybach S-Class is the ultimate luxury sedan, featuring Executive seats, champagne flutes, and advanced driver assistance systems.",
    price: 31000000, // ₹3,10,00,000
    category: "luxury-car",
    brand: "Mercedes-Benz",
    imageUrl: "https://images.unsplash.com/photo-1549925245-f20a7c00ad32?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "5980cc",
    horsepower: 612,
    topSpeed: 250,
    acceleration: "4.5s",
    weight: 2350,
    fuelType: "Petrol",
    colors: ["Obsidian Black", "Anthracite Blue", "Diamond White", "Selenite Grey"]
  },
  {
    id: "lc-004",
    name: "Bentley Flying Spur",
    description: "The Bentley Flying Spur combines sports sedan agility with handcrafted luxury to create the ultimate high-performance luxury sedan.",
    price: 35000000, // ₹3,50,00,000
    category: "luxury-car",
    brand: "Bentley",
    imageUrl: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1220&auto=format&fit=crop",
    available: true,
    engineSize: "5950cc",
    horsepower: 626,
    topSpeed: 333,
    acceleration: "3.8s",
    weight: 2437,
    fuelType: "Petrol",
    colors: ["Meteor", "Extreme Silver", "Dark Sapphire", "Cricket Ball"]
  },
  {
    id: "lc-005",
    name: "Rolls-Royce Ghost",
    description: "The Rolls-Royce Ghost is designed around the concept of 'Post Opulence' - a less ostentatious take on luxury while maintaining uncompromising quality.",
    price: 69000000, // ₹6,90,00,000
    category: "luxury-car",
    brand: "Rolls-Royce",
    imageUrl: "https://images.unsplash.com/photo-1621248804497-6608c7a16468?q=80&w=1074&auto=format&fit=crop",
    available: true,
    featured: true,
    engineSize: "6750cc",
    horsepower: 563,
    topSpeed: 250,
    acceleration: "4.8s",
    weight: 2490,
    fuelType: "Petrol",
    colors: ["English White", "Black Diamond", "Tempest Grey", "Burnout Grey"]
  },
  {
    id: "lc-006",
    name: "Aston Martin DB11",
    description: "The Aston Martin DB11 combines breathtaking performance, distinctive design, and unmatched luxury for an iconic grand touring experience.",
    price: 37500000, // ₹3,75,00,000
    category: "luxury-car",
    brand: "Aston Martin",
    imageUrl: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1125&auto=format&fit=crop",
    available: true,
    engineSize: "5204cc",
    horsepower: 630,
    topSpeed: 322,
    acceleration: "3.7s",
    weight: 1870,
    fuelType: "Petrol",
    colors: ["Skyfall Silver", "Magnetic Silver", "Frosted Glass Blue", "Cinnabar Orange"]
  },
  {
    id: "lc-007",
    name: "Jaguar F-Type R",
    description: "The Jaguar F-Type R is the quintessential British sports car with unmistakable design, powerful performance, and luxurious finishes.",
    price: 23000000, // ₹2,30,00,000
    category: "luxury-car",
    brand: "Jaguar",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "5000cc",
    horsepower: 575,
    topSpeed: 300,
    acceleration: "3.5s",
    weight: 1743,
    fuelType: "Petrol",
    colors: ["Caldera Red", "British Racing Green", "Ultra Blue", "Yulong White"]
  },
  {
    id: "lc-008",
    name: "Mercedes-Benz S-Class",
    description: "The Mercedes-Benz S-Class is the technological tour de force of the automotive industry, combining luxury, safety, and innovation.",
    price: 16000000, // ₹1,60,00,000
    category: "luxury-car",
    brand: "Mercedes-Benz",
    imageUrl: "https://images.unsplash.com/photo-1501066927591-314112b5888e?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "2999cc",
    horsepower: 362,
    topSpeed: 250,
    acceleration: "4.9s",
    weight: 2065,
    fuelType: "Petrol",
    colors: ["Obsidian Black", "Emerald Green", "Diamond White", "Selenite Grey"]
  },
  {
    id: "lc-009",
    name: "Bentley Bentayga",
    description: "The Bentley Bentayga combines unmatched luxury with impressive performance and genuine off-road capability in the world's first ultra-luxury SUV.",
    price: 45000000, // ₹4,50,00,000
    category: "luxury-car",
    brand: "Bentley",
    imageUrl: "https://images.unsplash.com/photo-1610902188765-f8e5fff2a5aa?q=80&w=1140&auto=format&fit=crop",
    available: true,
    engineSize: "3996cc",
    horsepower: 542,
    topSpeed: 290,
    acceleration: "4.4s",
    weight: 2440,
    fuelType: "Petrol",
    colors: ["Alpine Green", "Glacier White", "Dark Cashmere", "Orange Flame"]
  },
  {
    id: "lc-010",
    name: "Rolls-Royce Cullinan",
    description: "The Rolls-Royce Cullinan is the first all-terrain SUV from Rolls-Royce, making luxury off-road travel a refined experience.",
    price: 69500000, // ₹6,95,00,000
    category: "luxury-car",
    brand: "Rolls-Royce",
    imageUrl: "https://images.unsplash.com/photo-1619551734325-81aaf323686c?q=80&w=1175&auto=format&fit=crop",
    available: true,
    engineSize: "6749cc",
    horsepower: 563,
    topSpeed: 250,
    acceleration: "5.2s",
    weight: 2660,
    fuelType: "Petrol",
    colors: ["Magma Red", "Burnout Grey", "Arctic White", "Salamanca Blue"]
  },
  {
    id: "lc-011",
    name: "Aston Martin DBS Superleggera",
    description: "The Aston Martin DBS Superleggera represents the ultimate in grand touring with its perfect blend of GT and supercar attributes.",
    price: 52000000, // ₹5,20,00,000
    category: "luxury-car",
    brand: "Aston Martin",
    imageUrl: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1125&auto=format&fit=crop",
    available: true,
    engineSize: "5204cc",
    horsepower: 715,
    topSpeed: 340,
    acceleration: "3.4s",
    weight: 1693,
    fuelType: "Petrol",
    colors: ["Hyper Red", "Xenon Grey", "Lightning Silver", "Onyx Black"]
  },
  {
    id: "lc-012",
    name: "Mercedes-AMG G 63",
    description: "The Mercedes-AMG G 63 combines off-road capability with luxury and sports car performance in an iconic, handcrafted package.",
    price: 25000000, // ₹2,50,00,000
    category: "luxury-car",
    brand: "Mercedes-Benz",
    imageUrl: "https://images.unsplash.com/photo-1560009320-c01920eef9f8?q=80&w=1228&auto=format&fit=crop",
    available: true,
    engineSize: "3982cc",
    horsepower: 577,
    topSpeed: 220,
    acceleration: "4.5s",
    weight: 2485,
    fuelType: "Petrol",
    colors: ["Brilliant Blue", "Designo Night Black Magno", "Jupiter Red", "Polar White"]
  },
  // Classic Cars
  {
    id: "cc-001",
    name: "Jaguar E-Type",
    description: "The Jaguar E-Type, described by Enzo Ferrari as 'the most beautiful car ever made', combines stunning design with exhilarating performance.",
    price: 75000000, // ₹7,50,00,000
    category: "classic",
    brand: "Jaguar",
    imageUrl: "https://images.unsplash.com/photo-1523676060187-f55189a71f5e?q=80&w=1171&auto=format&fit=crop",
    available: true,
    engineSize: "4235cc",
    horsepower: 265,
    topSpeed: 241,
    acceleration: "6.4s",
    weight: 1315,
    fuelType: "Petrol",
    colors: ["British Racing Green", "Carmen Red", "Old English White"]
  },
  {
    id: "cc-002",
    name: "Mercedes-Benz 300SL Gullwing",
    description: "The iconic Mercedes-Benz 300SL with its distinctive gullwing doors is a motorsport legend transformed into one of history's most desirable road cars.",
    price: 160000000, // ₹16,00,00,000
    category: "classic",
    brand: "Mercedes-Benz",
    imageUrl: "https://images.unsplash.com/photo-1567724786563-901a63ddba5c?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "2996cc",
    horsepower: 215,
    topSpeed: 260,
    acceleration: "8.8s",
    weight: 1295,
    fuelType: "Petrol",
    colors: ["Silver", "Red", "Black", "White"]
  },
  {
    id: "cc-003",
    name: "Aston Martin DB5",
    description: "The Aston Martin DB5, famous for its James Bond connection, represents the epitome of British grand touring elegance from the 1960s.",
    price: 130000000, // ₹13,00,00,000
    category: "classic",
    brand: "Aston Martin",
    imageUrl: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=1279&auto=format&fit=crop",
    available: true,
    engineSize: "3995cc",
    horsepower: 282,
    topSpeed: 233,
    acceleration: "8.1s",
    weight: 1502,
    fuelType: "Petrol",
    colors: ["Silver Birch", "Dark Blue", "British Racing Green", "Black"]
  },
  {
    id: "cc-004",
    name: "Ferrari 250 GTO",
    description: "The Ferrari 250 GTO is one of the world's most sought-after collector cars, combining race car performance with artistic Italian styling.",
    price: 1300000000, // ₹130,00,00,000
    category: "classic",
    brand: "Ferrari",
    imageUrl: "https://images.unsplash.com/photo-1513036191774-b2badb8fcb76?q=80&w=1170&auto=format&fit=crop",
    available: true,
    featured: true,
    engineSize: "2953cc",
    horsepower: 300,
    topSpeed: 280,
    acceleration: "6.1s",
    weight: 880,
    fuelType: "Petrol",
    colors: ["Rosso Corsa", "Blue", "Silver"]
  },
  {
    id: "cc-005",
    name: "Porsche 356",
    description: "The Porsche 356, the company's first production automobile, established Porsche's motorsport legacy with its lightweight construction and nimble handling.",
    price: 70000000, // ₹7,00,00,000
    category: "classic",
    brand: "Porsche",
    imageUrl: "https://images.unsplash.com/photo-1621613141533-5f47246b714e?q=80&w=1287&auto=format&fit=crop",
    available: true,
    engineSize: "1582cc",
    horsepower: 90,
    topSpeed: 175,
    acceleration: "10.5s",
    weight: 935,
    fuelType: "Petrol",
    colors: ["Ivory", "Silver", "Ruby Red", "Aquamarine Blue"]
  },
  
  // Adding 19 new products
  
  // New Superbikes
  {
    id: "sb-013",
    name: "Triumph Speed Triple 1200 RS",
    description: "The most powerful and technologically advanced Speed Triple ever, with a distinctive triple-cylinder engine and track-ready handling.",
    price: 1899000, // ₹18,99,000
    category: "superbike",
    brand: "Triumph",
    imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "1160cc",
    horsepower: 180,
    topSpeed: 275,
    acceleration: "3.1s",
    weight: 198,
    fuelType: "Petrol",
    colors: ["Matt Silver Ice", "Sapphire Black", "Matt Carbon Black"],
    yearOfManufacture: 2023
  },
  {
    id: "sb-014",
    name: "Honda CBR1100XX Super Blackbird",
    description: "A legendary sport tourer that once held the title of world's fastest production motorcycle, combining high-speed capability with comfort.",
    price: 1799000, // ₹17,99,000
    category: "superbike",
    brand: "Honda",
    imageUrl: "https://images.unsplash.com/photo-1525160354320-d8e92641c563?q=80&w=1974&auto=format&fit=crop",
    available: true,
    engineSize: "1137cc",
    horsepower: 164,
    topSpeed: 290,
    acceleration: "3.0s",
    weight: 223,
    fuelType: "Petrol",
    colors: ["Pearl Black", "Candy Red", "Metallic Silver"],
    yearOfManufacture: 2022,
    limitedEdition: true
  },
  {
    id: "sb-015",
    name: "Ducati Diavel 1260 S",
    description: "The ultimate power cruiser, blending Italian superbike performance with bold, muscular styling and exceptional handling.",
    price: 2099000, // ₹20,99,000
    category: "superbike",
    brand: "Ducati",
    imageUrl: "https://images.unsplash.com/photo-1591637333085-9757e4f3d365?q=80&w=1171&auto=format&fit=crop",
    available: true,
    featured: true,
    engineSize: "1262cc",
    horsepower: 159,
    topSpeed: 270,
    acceleration: "3.2s",
    weight: 218,
    fuelType: "Petrol",
    colors: ["Ducati Red", "Total Black", "Thrilling Black and Dark Stealth"],
    yearOfManufacture: 2023
  },
  
  // New Supercars
  {
    id: "sc-013",
    name: "Koenigsegg Jesko Absolut",
    description: "The fastest Koenigsegg ever made, designed to break the 300 mph barrier with revolutionary aerodynamics and a 1600hp twin-turbo V8.",
    price: 320000000, // ₹32,00,00,000
    category: "hypercar",
    brand: "Koenigsegg",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop",
    available: true,
    featured: true,
    engineSize: "5065cc",
    horsepower: 1600,
    topSpeed: 500,
    acceleration: "2.5s",
    weight: 1320,
    fuelType: "E85/Petrol",
    colors: ["Tang Orange Pearl", "Raw Carbon", "Swedish Blue"],
    yearOfManufacture: 2023,
    limitedEdition: true
  },
  {
    id: "sc-014",
    name: "Pagani Huayra BC Roadster",
    description: "An engineering masterpiece limited to just 40 units worldwide, representing the pinnacle of Italian artistry and precision engineering.",
    price: 350000000, // ₹35,00,00,000
    category: "hypercar",
    brand: "Pagani",
    imageUrl: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "5980cc",
    horsepower: 802,
    topSpeed: 380,
    acceleration: "2.8s",
    weight: 1250,
    fuelType: "Petrol",
    colors: ["Blu Tricolore", "Exposed Carbon Fiber", "Custom Client Specifications"],
    yearOfManufacture: 2023,
    limitedEdition: true
  },
  {
    id: "sc-015",
    name: "Rimac Nevera",
    description: "The all-electric hypercar that rewrites the rulebook with four electric motors delivering a combined 1914 horsepower and unprecedented acceleration.",
    price: 250000000, // ₹25,00,00,000
    category: "electric-supercar",
    brand: "Rimac",
    imageUrl: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1064&auto=format&fit=crop",
    available: true,
    engineSize: "Electric",
    horsepower: 1914,
    topSpeed: 412,
    acceleration: "1.85s",
    weight: 2150,
    fuelType: "Electric",
    colors: ["Stellar Black", "Galactic White", "Adriatic Blue"],
    yearOfManufacture: 2024
  },
  {
    id: "sc-016",
    name: "McLaren Speedtail",
    description: "McLaren's ultimate road-going machine with a three-seat layout inspired by the legendary F1, and a hybrid powertrain producing 1036 horsepower.",
    price: 280000000, // ₹28,00,00,000
    category: "hypercar",
    brand: "McLaren",
    imageUrl: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=1931&auto=format&fit=crop",
    available: true,
    engineSize: "4000cc Hybrid",
    horsepower: 1036,
    topSpeed: 403,
    acceleration: "2.9s",
    weight: 1430,
    fuelType: "Hybrid",
    colors: ["Vision Satin Silver", "Heritage Gloss Dark Green", "Bespoke MSO Options"],
    yearOfManufacture: 2023,
    limitedEdition: true
  },
  {
    id: "sc-017",
    name: "Ferrari SF90 Spider",
    description: "Ferrari's first plug-in hybrid convertible supercar combines a twin-turbo V8 with three electric motors for open-top thrills with green credentials.",
    price: 85000000, // ₹8,50,00,000
    category: "supercar",
    brand: "Ferrari",
    imageUrl: "https://images.unsplash.com/photo-1617654112368-307b0c8deb36?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "3990cc Hybrid",
    horsepower: 986,
    topSpeed: 340,
    acceleration: "2.5s",
    weight: 1670,
    fuelType: "Hybrid",
    colors: ["Rosso Corsa", "Giallo Modena", "Blu Corsa", "Argento Nürburgring"],
    yearOfManufacture: 2023
  },
  {
    id: "sc-018",
    name: "Tesla Roadster",
    description: "The next-generation Tesla Roadster promises to be the quickest car in the world, with unprecedented acceleration, range, and performance.",
    price: 45000000, // ₹4,50,00,000
    category: "electric-supercar",
    brand: "Tesla",
    imageUrl: "https://images.unsplash.com/photo-1611740801993-01dc1ba7996c?q=80&w=1170&auto=format&fit=crop",
    available: false, // Coming soon
    engineSize: "Electric",
    horsepower: 1100, // Estimated
    topSpeed: 400, // Estimated
    acceleration: "1.9s",
    weight: 2000, // Estimated
    fuelType: "Electric",
    colors: ["Red Multi-Coat", "Midnight Silver Metallic", "Pearl White Multi-Coat"],
    yearOfManufacture: 2025 // Future release
  },
  {
    id: "sc-019",
    name: "Lotus Evija",
    description: "Britain's first all-electric hypercar, the Lotus Evija delivers nearly 2000 horsepower with revolutionary aerodynamics and stunning design.",
    price: 210000000, // ₹21,00,00,000
    category: "electric-supercar",
    brand: "Lotus",
    imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "Electric",
    horsepower: 1973,
    topSpeed: 320,
    acceleration: "2.8s",
    weight: 1680,
    fuelType: "Electric",
    colors: ["Solaris Yellow", "Carbon Black", "Hethel Blue"],
    yearOfManufacture: 2023,
    limitedEdition: true
  },
  
  // New Luxury Cars
  {
    id: "lc-013",
    name: "Rolls-Royce Boat Tail",
    description: "The most exclusive Rolls-Royce of modern times, a coachbuilt masterpiece inspired by luxury yachts with a rear deck that opens to reveal bespoke champagne coolers.",
    price: 2800000000, // ₹280,00,00,000
    category: "luxury-car",
    brand: "Rolls-Royce",
    imageUrl: "https://images.unsplash.com/photo-1489686995744-f47e35e122f5?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "6750cc",
    horsepower: 563,
    topSpeed: 250,
    acceleration: "5.0s",
    weight: 2700,
    fuelType: "Petrol",
    colors: ["Custom Blue", "Bespoke Client Specification"],
    yearOfManufacture: 2023,
    limitedEdition: true
  },
  {
    id: "lc-014",
    name: "Mercedes-Maybach GLS 600",
    description: "The first SUV from Mercedes-Maybach combines the height of automotive luxury with the versatility of an SUV, featuring individual rear seats and champagne flutes.",
    price: 45000000, // ₹4,50,00,000
    category: "luxury-suv",
    brand: "Mercedes-Benz",
    imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=983&auto=format&fit=crop",
    available: true,
    engineSize: "3982cc",
    horsepower: 550,
    topSpeed: 250,
    acceleration: "4.9s",
    weight: 2785,
    fuelType: "Petrol",
    colors: ["Obsidian Black", "Emerald Green", "Diamond White", "Selenite Grey"],
    yearOfManufacture: 2023
  },
  {
    id: "lc-015",
    name: "Bentley Bacalar",
    description: "A limited edition open-top grand tourer from Bentley's Mulliner division, featuring ethically sourced materials and completely bespoke specifications.",
    price: 190000000, // ₹19,00,00,000
    category: "luxury-car",
    brand: "Bentley",
    imageUrl: "https://images.unsplash.com/photo-1629447236130-24d082d558f0?q=80&w=1074&auto=format&fit=crop",
    available: true,
    engineSize: "6000cc",
    horsepower: 650,
    topSpeed: 320,
    acceleration: "3.5s",
    weight: 2200,
    fuelType: "Petrol",
    colors: ["Bespoke Client Specification"],
    yearOfManufacture: 2023,
    limitedEdition: true
  },
  {
    id: "lc-016",
    name: "Aston Martin Valkyrie",
    description: "A revolutionary hypercar born from the collaboration between Aston Martin and Red Bull Racing, designed to deliver Formula 1 performance on the road.",
    price: 380000000, // ₹38,00,00,000
    category: "hypercar",
    brand: "Aston Martin",
    imageUrl: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1125&auto=format&fit=crop",
    available: true,
    engineSize: "6500cc",
    horsepower: 1155,
    topSpeed: 402,
    acceleration: "2.5s",
    weight: 1030,
    fuelType: "Petrol",
    colors: ["Aston Martin Racing Green", "Lunar White", "Valkyrie Silver"],
    yearOfManufacture: 2023,
    limitedEdition: true
  },
  
  // Classic Vintage Supercars
  {
    id: "cc-006",
    name: "Lamborghini Miura P400SV",
    description: "Often regarded as the world's first supercar, the Miura's stunning design and mid-engine layout revolutionized high-performance automobiles.",
    price: 450000000, // ₹45,00,00,000
    category: "vintage-supercar",
    brand: "Lamborghini",
    imageUrl: "https://images.unsplash.com/photo-1577515979923-ac49650d9a5d?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "3929cc",
    horsepower: 385,
    topSpeed: 290,
    acceleration: "6.5s",
    weight: 1293,
    fuelType: "Petrol",
    colors: ["Arancio Miura", "Giallo Miura", "Verde Miura"],
    yearOfManufacture: 1971,
    limitedEdition: true
  },
  {
    id: "cc-007",
    name: "Ferrari F40",
    description: "Created to celebrate Ferrari's 40th anniversary, the F40 was the fastest and most expensive Ferrari ever built at its launch in 1987.",
    price: 520000000, // ₹52,00,00,000
    category: "vintage-supercar",
    brand: "Ferrari",
    imageUrl: "https://images.unsplash.com/photo-1514136649217-b627b4b9cfb2?q=80&w=1074&auto=format&fit=crop",
    available: true,
    engineSize: "2936cc",
    horsepower: 478,
    topSpeed: 324,
    acceleration: "3.8s",
    weight: 1100,
    fuelType: "Petrol",
    colors: ["Rosso Corsa"],
    yearOfManufacture: 1989,
    limitedEdition: true
  },
  {
    id: "cc-008",
    name: "Porsche 959",
    description: "A technological tour de force that pioneered many innovations now commonplace in performance cars, including all-wheel drive and adjustable suspension.",
    price: 350000000, // ₹35,00,00,000
    category: "vintage-supercar",
    brand: "Porsche",
    imageUrl: "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?q=80&w=1287&auto=format&fit=crop",
    available: true,
    engineSize: "2849cc",
    horsepower: 444,
    topSpeed: 339,
    acceleration: "3.7s",
    weight: 1450,
    fuelType: "Petrol",
    colors: ["Guards Red", "Silver Metallic", "White"],
    yearOfManufacture: 1986,
    limitedEdition: true
  },
  {
    id: "cc-009",
    name: "McLaren F1",
    description: "The legendary supercar that redefined performance, featuring a central driving position, gold-lined engine bay, and record-setting top speed that stood for years.",
    price: 1800000000, // ₹180,00,00,000
    category: "vintage-supercar",
    brand: "McLaren",
    imageUrl: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1170&auto=format&fit=crop",
    available: true,
    featured: true,
    engineSize: "6064cc",
    horsepower: 618,
    topSpeed: 386,
    acceleration: "3.2s",
    weight: 1138,
    fuelType: "Petrol",
    colors: ["Papaya Orange", "British Racing Green", "Silver"],
    yearOfManufacture: 1995,
    limitedEdition: true
  },
  {
    id: "cc-010",
    name: "Jaguar XKSS",
    description: "Based on the D-Type racing car, the XKSS was converted for road use and is one of the most valuable and desirable classic cars ever made. Only 16 were originally produced.",
    price: 1650000000, // ₹165,00,00,000
    category: "classic",
    brand: "Jaguar",
    imageUrl: "https://images.unsplash.com/photo-1585339236417-1e4634a09b0f?q=80&w=1170&auto=format&fit=crop",
    available: true,
    engineSize: "3442cc",
    horsepower: 262,
    topSpeed: 230,
    acceleration: "5.2s",
    weight: 975,
    fuelType: "Petrol",
    colors: ["British Racing Green", "Ecurie Ecosse Blue"],
    yearOfManufacture: 1957,
    limitedEdition: true
  }
];

// Helper function to get products by category
export function getProductsByCategory(category: string) {
  return products.filter(product => product.category === category);
}

// Helper function to get products by brand
export function getProductsByBrand(brand: string) {
  return products.filter(product => product.brand === brand);
}

// Helper function to get featured products
export function getFeaturedProducts() {
  return products.filter(product => product.featured);
}

// Helper function to get a product by ID
export function getProductById(id: string) {
  return products.find(product => product.id === id);
}

// Helper function to format price in Indian Rupees
export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
}
