import { Product, Collection, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const PRODUCTS: Product[] = [
  // --- CHAIRS ---
  {
    id: 'chair-01',
    name: 'Arm Box Style Wood Chair',
    price: 24,
    category: 'Chair',
    description: 'Ergonomic wooden chair with a unique boxy aesthetic perfect for modern study rooms.',
    features: ['Ergonomic Backrest', 'Stackable Design', 'Child Friendly Finish', 'Solid Oak'],
    imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'chair-02',
    name: 'Soft Lounge Velvet Chair',
    price: 120,
    category: 'Chair',
    description: 'Plush seating for your reading corner with gold-tipped legs.',
    features: ['Velvet Upholstery', 'High Density Foam', 'Gold Plated Legs', 'Lumbar Support'],
    imageUrl: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'chair-03',
    name: 'Minimalist Dining Chair',
    price: 85,
    category: 'Chair',
    description: 'Sleek silhouette that complements any dining table.',
    features: ['Matte Black Finish', 'Curved Back', 'Lightweight', 'Easy Clean'],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1669324449387-cabef8ec3a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEhvbWUlMjBkZWNvciUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'chair-04',
    name: 'Rattan Garden Chair',
    price: 150,
    category: 'Chair',
    description: 'Hand-woven rattan chair suitable for indoor and outdoor patios.',
    features: ['Natural Rattan', 'Weather Resistant', 'Handcrafted', 'Wide Seat'],
    imageUrl: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'chair-05',
    name: 'Industrial Metal Stool',
    price: 45,
    category: 'Chair',
    description: 'Rugged metal stool with a distressed finish for loft aesthetics.',
    features: ['Powder Coated Steel', 'Adjustable Height', 'Footrest', 'Rubber Feet'],
    imageUrl: 'https://images.unsplash.com/photo-1639235887769-45f097d6d2f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SG9tZSUyMGRlY29yJTIwZnVybml0dXJlfGVufDB8fDB8fHww?auto=format&fit=crop&q=80&w=800',
  },

  // --- TABLES ---
  {
    id: 'table-01',
    name: '4 Corner Standard Wood Table',
    price: 145,
    category: 'Table',
    description: 'Minimalist square table perfect for compact study spaces.',
    features: ['Solid Wood', 'Matte Finish', 'Easy Assembly', 'Scratch Resistant'],
    imageUrl: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&q=80&w=800', 
  },
  {
    id: 'table-02',
    name: 'Round Shape Coffee Table',
    price: 38,
    category: 'Table',
    description: 'A low profile coffee table with a warm oak finish.',
    features: ['Oak Veneer', 'Low Profile', 'Sturdy Base', 'Nesting Capability'],
    imageUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'table-03',
    name: '3 Corner Side Table',
    price: 43,
    category: 'Table',
    description: 'Triangular side table that fits perfectly in any nook.',
    features: ['Triangular Top', 'Solid Legs', 'Modern Look', 'Compact'],
    imageUrl: 'https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'table-04',
    name: 'Modern Marble Dining Table',
    price: 450,
    category: 'Table',
    description: 'Luxurious Carrara marble top with a sturdy geometric base.',
    features: ['Carrara Marble', 'Heat Resistant', 'Seals 6 People', 'Heavy Duty'],
    imageUrl: 'https://images.unsplash.com/photo-1688302740483-bea686d8a860?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SG9tZSUyMGRlY29yJTIwZnVybml0dXJlfGVufDB8fDB8fHww?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'table-05',
    name: 'Rustic Oak Work Desk',
    price: 299,
    category: 'Table',
    description: 'Spacious work desk with built-in cable management.',
    features: ['Reclaimed Oak', 'Cable Management', 'Dual Drawers', 'Wide Surface'],
    imageUrl: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'table-06',
    name: 'Glass Top Bedside Table',
    price: 95,
    category: 'Table',
    description: 'Contemporary glass and brass bedside table.',
    features: ['Tempered Glass', 'Brass Frame', 'Lower Shelf', 'Modern Art Deco'],
    imageUrl: 'https://images.unsplash.com/photo-1491926626787-62db157af940?auto=format&fit=crop&q=80&w=800',
  },

  // --- SOFAS ---
  {
    id: 'sofa-01',
    name: 'The Cloud Modular Sofa',
    price: 1200,
    category: 'Sofa',
    description: 'Deep seating modular sofa upholstered in performance fabric.',
    features: ['Modular Sections', 'Stain Resistant', 'Down Feather Fill', 'Low Profile'],
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'sofa-02',
    name: 'Mid-Century Loveseat',
    price: 650,
    category: 'Sofa',
    description: 'Compact two-seater with tapered wooden legs and tufted back.',
    features: ['Tufted Back', 'Walnut Legs', 'Teal Fabric', 'Compact Design'],
    imageUrl: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'sofa-03',
    name: 'Chesterfield Leather Sofa',
    price: 1800,
    category: 'Sofa',
    description: 'Classic rolled arms and deep button tufting in cognac leather.',
    features: ['Genuine Leather', 'Hand Tufted', 'Brass Nailheads', 'Kiln-Dried Frame'],
    imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'sofa-04',
    name: 'Scandi Daybed',
    price: 550,
    category: 'Sofa',
    description: 'Minimalist daybed that doubles as a guest sleeper.',
    features: ['Ash Wood Frame', 'Wool Blend Mattress', 'Bolster Pillow', 'Multifunctional'],
    imageUrl: 'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&q=80&w=800',
  },

  // --- LIGHTING ---
  {
    id: 'light-01',
    name: 'Arc Floor Lamp',
    price: 180,
    category: 'Lighting',
    description: 'Sweeping metal arc lamp with a marble base.',
    features: ['Marble Base', 'Adjustable Arc', 'Dimmer Switch', 'Warm LED'],
    imageUrl: 'https://images.unsplash.com/photo-1559638869-39e9ef6a6dc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEhvbWUlMjBkZWNvciUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'light-02',
    name: 'Ceramic Table Lamp',
    price: 65,
    category: 'Lighting',
    description: 'Textured ceramic base with a linen shade.',
    features: ['Hand-thrown Ceramic', 'Linen Shade', 'Soft Glow', 'Artisanal'],
    imageUrl: 'https://images.unsplash.com/photo-1731814378677-14eccd7415c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEhvbWUlMjBkZWNvciUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'light-03',
    name: 'Industrial Pendant Light',
    price: 45,
    category: 'Lighting',
    description: 'Matte black metal pendant for kitchen islands.',
    features: ['Matte Black', 'Edison Bulb Included', 'Adjustable Cord', 'Geometric'],
    imageUrl: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'light-04',
    name: 'Modern Chandelier',
    price: 320,
    category: 'Lighting',
    description: 'Statement piece with branching arms and glass globes.',
    features: ['Brass Finish', '6 Lights', 'Dimmable', 'Statement Piece'],
    imageUrl: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&q=80&w=800',
  },

  // --- DECOR ---
  {
    id: 'decor-01',
    name: 'Abstract Geometric Rug',
    price: 200,
    category: 'Decor',
    description: 'Hand-tufted wool rug with bold geometric shapes.',
    features: ['100% Wool', 'Hand Tufted', 'High Pile', 'Vibrant Colors'],
    imageUrl: 'https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'decor-02',
    name: 'Minimalist Wall Mirror',
    price: 110,
    category: 'Decor',
    description: 'Round mirror with a thin brass frame.',
    features: ['Brass Frame', 'distortion-free Glass', 'Easy Mount', '30-inch Diameter'],
    imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'decor-03',
    name: 'Ceramic Vase Set',
    price: 55,
    category: 'Decor',
    description: 'Set of 3 sculptural vases in earth tones.',
    features: ['Matte Glaze', 'Watertight', 'Sculptural Shapes', 'Set of 3'],
    imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'decor-04',
    name: 'Linen Throw Pillow',
    price: 35,
    category: 'Decor',
    description: 'Soft washed linen pillow cover with down insert.',
    features: ['Belgian Linen', 'Down Insert', 'Hidden Zipper', 'Machine Washable'],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1676968002945-c8f74e0e27d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SG9tZSUyMGRlY29yJTIwZnVybml0dXJlfGVufDB8fDB8fHww?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'decor-05',
    name: 'Potted Fiddle Leaf Fig',
    price: 85,
    category: 'Decor',
    description: 'Realistic artificial plant in a woven basket.',
    features: ['Lifelike Detail', 'No Maintenance', 'Woven Basket Included', '4 Feet Tall'],
    imageUrl: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'decor-06',
    name: 'Wooden Wall Clock',
    price: 60,
    category: 'Decor',
    description: 'Minimalist wooden clock with silent movement.',
    features: ['Solid Walnut', 'Silent Mechanism', 'Minimalist Face', 'Battery Operated'],
    imageUrl: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG9tZSUyMGRlY29yJTIwZnVybml0dXJlfGVufDB8fDB8fHww?auto=format&fit=crop&q=80&w=800',
  },
];

export const COLLECTIONS: Collection[] = [
  {
    id: 'tables',
    title: 'Table Collection',
    description: 'Surfaces for work and play.',
    image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'chairs',
    title: 'Chair Collection',
    description: 'Seating reimagined for comfort.',
    image: 'https://images.unsplash.com/photo-1503602642458-2321114458ed?auto=format&fit=crop&q=80&w=1200',
  },
];

export const REVIEWS = [
    {
        id: 1,
        name: "Brandon Geidt",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
        text: "EXCELLENT service and products, very competitive prices! Platform Section is such a great asset - her communication is amazing!",
        rating: 5,
        source: "Google"
    },
    {
        id: 2,
        name: "Corey Lubin",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
        text: "The Platform Club ordered a range of stock from this furniture. The furniture was the right fit for our venue, excellent quality.",
        rating: 5,
        source: "Google"
    },
    {
        id: 3,
        name: "Emerson Workman",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
        text: "Great service, great quality would recommend without hesitation. Thank you Team Furniture we will see you again.",
        rating: 5,
        source: "Google"
    }
]

export const SYSTEM_INSTRUCTION = `
You are the "Concierge", an AI design consultant for Fur.
`;