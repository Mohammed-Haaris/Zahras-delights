/** @format */

const cakeProducts = [
  {
    id: 1,
    cakeName: "Double Chocolate Chip Muffins (12 pcs)",
    category: "Brownie/Cupcake",
    actualPrice:18,
    discountPrice: 15,
    currency: "$",
    description:
      "Crispy on the edges, chewy in the middle, and loaded with premium chocolate chips.",
    image: "/images/image_9.jpeg",
  },
  {
    id: 2,
    cakeName: "Brown Sugar Brownies (25 pcs)",
    category: "Brownie/Cupcake",
    actualPrice:25,
    discountPrice: 22,
    currency: "$",
    description:
      "Experience the rich, caramelized flavor of brown sugar in every bite. These brownies combine the comforting warmth of brown sugar with a delightfully fudgy texture for a truly decadent treat 🤎✨Each piece offers a perfect balance of sweetness and chocolatey goodness that melts in your mouth! Perfect for: Cozy evenings, dessert platters, or sharing with loved ones.",
    image: "/images/image_7.jpeg",
  },
  {
    id: 3,
    cakeName: "Signature Fudgy Brownies (25 pcs)",
    category: "Brownie/Cupcake",
    actualPrice:22,
    discountPrice: 18,
    currency: "$",
    description:
      "Treat yourself to rich, fudgy brownies made with premium dark chocolate. Each bite delivers a melt-in-your-mouth texture and deep chocolate flavor that’s simply irresistible. Perfect for satisfying your chocolate cravings or sharing with friends and family!",
    image: "/images/image_8.jpeg",
  },
  {
    id: 4,
    cakeName: "Banana Oat Muffins (12 pcs)",
    category: "Brownie/Cupcake",
    actualPrice:20,
    discountPrice: 15,
    currency: "$",
    description:
      "Healthy homemade Banana Oat Muffins Made especially for kids and diabetic-friendly too — no added sugar, just the natural sweetness of ripe bananas and dates.",
    image: "/images/image_11.jpeg",
  },
  {
    id: 5,
    cakeName: "Arabian Pudding",
    category: "Desserts",
    actualPrice:20,
    discountPrice: 15,
    currency: "$",
    description:
      "A traditional creamy bread pudding infused with cardamom and topped with nuts (Umm Ali).",
    image: "/images/image_1.jpeg",
  },
  {
    id: 6,
    cakeName: "Rose Milk",
    category: "Desserts",
    actualPrice:null,
    discountPrice: 3,
    currency: "$",
    description:
      "Indulge in Rose Milk Magic A dreamy, creamy rose milk drink designed to wow your guests! Delightful sago pearls, refreshing basil seeds, and delicate basil agar jelly swirl together 🍧✨ Perfect for: Weddings, bridal showers, baby showers, birthday parties, or any special celebration.",
    image: "/images/image_6.jpeg",
    bulkDiscount: {
      threshold: 5,
      discountedPrice: 2.5
    }

  },
  {
    id: 7,
    cakeName: "Nawabi Treats",
    category: "Desserts",
    actualPrice:18,
    discountPrice: 15,
    currency: "$",
    description:
      "Royal individual kunafa pieces with a crispy exterior and a rich, creamy filling.",
    image: "/images/image_4.jpeg",
  },
 
  {
    id: 9,
    cakeName: "Grand Celebration Kunafa",
    category: "Desserts",
    actualPrice:28,
    discountPrice:20,
    currency: "$",
    description:
      "A large, feast-sized traditional Kunafa pan, golden-brown and soaked in aromatic syrup.",
    image: "/images/image_3.jpeg",
  },
];

export default cakeProducts;
