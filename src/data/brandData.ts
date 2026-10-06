export interface Branch {
  id: string;
  number: string;
  name: string;
  phoneDisplay: string;
  phoneRaw: string;
  address: string;
  whatsappMessage: string;
}

export interface MenuItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  image: string;
}

export const BRAND_ASSETS = {
  // Official Cartoon Chef Logo
  logoUploaded: "25dd5bc0-6a45-4b7d-a03e-485c8af13b32.png",
  logoLocal: "/src/assets/images/pizzalogist_chef_mascot_logo_1791274455818.jpg",

  // Ahmad Mustafa (Founder & Owner in Suit at Podium)
  founderPodiumUploaded: "048fe40a-f715-4f75-b705-c267de7bdf62.png",
  founderPodiumLocal: "/src/assets/images/owner_ahmad_mustafa_suit_1791274471316.jpg",

  // Ahmad Mustafa (Casual / Team)
  founderTeamUploaded: "8ec8fb6b-76bd-4d09-8204-1605ce806cc2.png",
  founderTeamLocal: "/src/assets/images/owner_ahmad_lifestyle_team_1791274487582.jpg",
};

export const BRAND_INFO = {
  name: "The Pizzalogist",
  tagline: "The Pizza Specialist",
  positioning: "Proud Bahawalpuri Brand ❤️",
  location: "Bahawalpur, Pakistan",
  founder: "Ahmad Mustafa",
  founderTitle: "Founder & Owner",
  email: "am627838@gmail.com",
  mainWhatsAppNumber: "+92 306 2102317",
  whatsappUrl: "https://wa.me/923062102317",
  facebookUrl: "https://www.facebook.com/ChefAhmadMustafa/",
  instagramUrl: "https://www.instagram.com/pizzalogist_/",
};

export const BRANCHES: Branch[] = [
  {
    id: "model-town-a",
    number: "01",
    name: "Model Town A Branch",
    phoneDisplay: "0301 8618888",
    phoneRaw: "+923018618888",
    address: "Model Town A, Bahawalpur",
    whatsappMessage: "Hi The Pizzalogist! I would like to place an order for Model Town A Branch.",
  },
  {
    id: "commercial-area",
    number: "02",
    name: "Commercial Area Branch",
    phoneDisplay: "0321 0001464",
    phoneRaw: "+923210001464",
    address: "Commercial Area, Bahawalpur",
    whatsappMessage: "Hi The Pizzalogist! I would like to place an order for Commercial Area Branch.",
  },
  {
    id: "dewan-wali-pulli",
    number: "03",
    name: "Dewan Wali Pulli Branch",
    phoneDisplay: "0306 2102317",
    phoneRaw: "+923062102317",
    address: "Dewan Wali Pulli, Bahawalpur",
    whatsappMessage: "Hi The Pizzalogist! I would like to place an order for Dewan Wali Pulli Branch.",
  },
];

export const SIGNATURE_ITEMS: MenuItem[] = [
  {
    id: "extreme-tikka",
    title: "Extreme Tikka",
    category: "Signature Fusion",
    badge: "House Favourite",
    description:
      "Charcoal-smoked spiced chicken tikka chunks, charred red onions, crisp green bell peppers, and bubbling mozzarella on hand-tossed dough.",
    image: "/src/assets/images/pizza_extreme_tikka_1791273253043.jpg",
  },
  {
    id: "cheese-obsession",
    title: "Cheese Obsession",
    category: "Signature",
    badge: "Cheese Pull Champion",
    description:
      "A lavish multi-layer cascade of golden mozzarella, aged provolone blend, roasted garlic herb butter, and blistering sourdough crust.",
    image: "/src/assets/images/pizza_cheese_obsession_1791273266642.jpg",
  },
  {
    id: "premium-pan-pizza",
    title: "Premium Pan Pizza",
    category: "Classic Pan",
    badge: "Chef's Recommendation",
    description:
      "Crisp golden skillet crust, rich slow-simmered spiced marinara sauce, beef pepperoni cuts, and generous double cheese melt.",
    image: "/src/assets/images/pizza_premium_pan_1791273282313.jpg",
  },
  {
    id: "bahawalpuri-fire",
    title: "Bahawalpuri Fire Supreme",
    category: "Local Roots",
    badge: "Proud Local Special",
    description:
      "Specially crafted for Bahawalpur's heat lovers — fiery chicken chunks, jalapeño rings, chili flakes, and our secret creamy garlic dip.",
    image: "/src/assets/images/hero_cinematic_pizza_1791273235156.jpg",
  },
];

export const FOUNDER_INFO = {
  name: "Ahmad Mustafa",
  role: "Founder & Owner",
  brand: "The Pizzalogist",
  image: BRAND_ASSETS.founderPodiumLocal,
  imageUploaded: BRAND_ASSETS.founderPodiumUploaded,
  teamImage: BRAND_ASSETS.founderTeamLocal,
  teamImageUploaded: BRAND_ASSETS.founderTeamUploaded,
  quote: "Good pizza doesn't need an introduction. It needs another slice.",
  bio: "Founded in Bahawalpur by Ahmad Mustafa, The Pizzalogist was built out of an uncompromising obsession: to elevate local pizza to world-class culinary standards without losing our authentic Pakistani heart and fire.",
};
