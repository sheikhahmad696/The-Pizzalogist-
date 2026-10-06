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
  logoUploaded: "/images/logo.jpg",
  logoLocal: "/images/logo.jpg",

  // Ahmad Mustafa (Founder & Owner in Suit at Podium)
  founderPodiumUploaded: "https://scontent.fbhv2-1.fna.fbcdn.net/v/t39.30808-6/472748757_2634859470236891_6832446002228186797_n.jpg?stp=dst-jpg_tt6&cstp=mx1864x1864&ctp=s1864x1864&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHR-qSv3omZkKcRsAf9GzSngF4u5JoXcLOAXi7kmhdws_ITCOMuf9kb5FC3TWBMvUe7uF4vRiMui_CdFMBjZfY7&_nc_ohc=JSXFjx7rkrsQ7kNvwGl4mID&_nc_oc=Adp7uEtYM3GZlIPn00Ka55d9NXshkldRilfNQvzr_iERLoqGwTF3zjVHpK0GJgbMX-YcoD_cg6DiO-XIIuKcAafX&_nc_zt=23&_nc_ht=scontent.fbhv2-1.fna&_nc_gid=rw9360W2e5SbpXStBIigcg&_nc_ss=7b2a8&oh=00_AQNebUx_7Yr-lt5d_51tTDyuDrKXp5e6Rqid3ThaZ4YC5w&oe=6ACA8AFA",
  founderPodiumLocal: "https://scontent.fbhv2-1.fna.fbcdn.net/v/t39.30808-6/472748757_2634859470236891_6832446002228186797_n.jpg?stp=dst-jpg_tt6&cstp=mx1864x1864&ctp=s1864x1864&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHR-qSv3omZkKcRsAf9GzSngF4u5JoXcLOAXi7kmhdws_ITCOMuf9kb5FC3TWBMvUe7uF4vRiMui_CdFMBjZfY7&_nc_ohc=JSXFjx7rkrsQ7kNvwGl4mID&_nc_oc=Adp7uEtYM3GZlIPn00Ka55d9NXshkldRilfNQvzr_iERLoqGwTF3zjVHpK0GJgbMX-YcoD_cg6DiO-XIIuKcAafX&_nc_zt=23&_nc_ht=scontent.fbhv2-1.fna&_nc_gid=rw9360W2e5SbpXStBIigcg&_nc_ss=7b2a8&oh=00_AQNebUx_7Yr-lt5d_51tTDyuDrKXp5e6Rqid3ThaZ4YC5w&oe=6ACA8AFA",

  // Ahmad Mustafa (Casual / Team)
  founderTeamUploaded: "https://scontent.fbhv2-1.fna.fbcdn.net/v/t39.30808-6/527390868_2826520257737477_5354180255479458312_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1366&ctp=s2048x1366&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHUcHj4n5g5Eea1TFVrSEqbYuRlSWrCKOli5GVJasIo6WkiKEMZKWT9YqWsPEBxypleAa-fB1rz2EI226dRuGKc&_nc_ohc=lHQJ4-cNwtEQ7kNvwHcjVPh&_nc_oc=AdrJtHU8xN6jbs73Kpy_711Zk4dlIJTmYyPyDLzWl8bWSEEna4WM4ahEVEsEJ2XZTQr3P37JBiCi7acMppzkc42O&_nc_zt=23&_nc_ht=scontent.fbhv2-1.fna&_nc_gid=I1z1XOpbrmP8-WPNRRp2_Q&_nc_ss=7b2a8&oh=00_AQOCGXUl2hmF94b_h-fhLnN2_W8nHH7YglRUjdoLp9D8NA&oe=6ACAA89D",
  founderTeamLocal: "https://scontent.fbhv2-1.fna.fbcdn.net/v/t39.30808-6/527390868_2826520257737477_5354180255479458312_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1366&ctp=s2048x1366&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHUcHj4n5g5Eea1TFVrSEqbYuRlSWrCKOli5GVJasIo6WkiKEMZKWT9YqWsPEBxypleAa-fB1rz2EI226dRuGKc&_nc_ohc=lHQJ4-cNwtEQ7kNvwHcjVPh&_nc_oc=AdrJtHU8xN6jbs73Kpy_711Zk4dlIJTmYyPyDLzWl8bWSEEna4WM4ahEVEsEJ2XZTQr3P37JBiCi7acMppzkc42O&_nc_zt=23&_nc_ht=scontent.fbhv2-1.fna&_nc_gid=I1z1XOpbrmP8-WPNRRp2_Q&_nc_ss=7b2a8&oh=00_AQOCGXUl2hmF94b_h-fhLnN2_W8nHH7YglRUjdoLp9D8NA&oe=6ACAA89D",
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
    image: "/images/pizza_tikka.jpg",
  },
  {
    id: "cheese-obsession",
    title: "Cheese Obsession",
    category: "Signature",
    badge: "Cheese Pull Champion",
    description:
      "A lavish multi-layer cascade of golden mozzarella, aged provolone blend, roasted garlic herb butter, and blistering sourdough crust.",
    image: "/images/pizza_cheese.jpg",
  },
  {
    id: "premium-pan-pizza",
    title: "Premium Pan Pizza",
    category: "Classic Pan",
    badge: "Chef's Recommendation",
    description:
      "Crisp golden skillet crust, rich slow-simmered spiced marinara sauce, beef pepperoni cuts, and generous double cheese melt.",
    image: "/images/pizza_pan.jpg",
  },
  {
    id: "bahawalpuri-fire",
    title: "Bahawalpuri Fire Supreme",
    category: "Local Roots",
    badge: "Proud Local Special",
    description:
      "Specially crafted for Bahawalpur's heat lovers — fiery chicken chunks, jalapeño rings, chili flakes, and our secret creamy garlic dip.",
    image: "/images/hero_pizza.jpg",
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
