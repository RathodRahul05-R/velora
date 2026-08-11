import { Meal, Plan, Review, FAQItem } from "./types";

export const MEALS_DATA: Meal[] = [
  // --- HIGH PROTEIN ---
  {
    id: "power-bowl",
    name: "Power Bowl",
    calories: 450,
    protein: 35,
    badge: "High Protein",
    ingredients: ["Grilled Chicken", "Quinoa", "Avocado", "Kale", "Cherry Tomatoes"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.9,
    price: 299
  },
  {
    id: "lean-turkey-feast",
    name: "Lean Turkey Feast",
    calories: 420,
    protein: 38,
    badge: "High Protein",
    ingredients: ["Ground Turkey Breast", "Brown Jasmine Rice", "Steamed Spinach", "Roasted Broccoli", "Cranberry Glaze"],
    image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    price: 329
  },
  {
    id: "bison-fit-box",
    name: "Bison Fit Box",
    calories: 490,
    protein: 42,
    badge: "High Protein",
    ingredients: ["Lean Grilled Bison", "Organic Quinoa", "Grilled Asparagus Spears", "Sautéed Portobello Mushrooms"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.9,
    price: 399
  },
  {
    id: "pulled-chicken-fuel",
    name: "Pulled Chicken Fuel",
    calories: 460,
    protein: 36,
    badge: "High Protein",
    ingredients: ["Shredded Chicken Breast", "Sweet Potato Mash", "Spiced Black Beans", "Fresh Cilantro Dressing", "Salsa Verde"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    price: 299
  },

  // --- VEGETARIAN ---
  {
    id: "mediterranean-delight",
    name: "Mediterranean Delight",
    calories: 320,
    protein: 28,
    badge: "Vegetarian",
    ingredients: ["Falafel", "Hummus", "Greek Salad", "Pita", "Tzatziki"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515003844-10981543158b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    price: 269
  },
  {
    id: "caprese-pasta-bento",
    name: "Caprese Pasta Bento",
    calories: 410,
    protein: 22,
    badge: "Vegetarian",
    ingredients: ["Organic Penne Pasta", "Buffalo Mozzarella", "Cherry Tomatoes", "Basil Pesto Sauce", "Pine Nuts"],
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1621996346565-e3bb64d84f23?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.6,
    price: 279
  },
  {
    id: "spiced-paneer-tikka",
    name: "Spiced Paneer Tikka",
    calories: 390,
    protein: 26,
    badge: "Vegetarian",
    ingredients: ["Grilled Tandoori Paneer", "Fragrant Basmati Pilaf", "Sautéed Red & Yellow Peppers", "Rich Onion Gravy"],
    image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515003844-10981543158b?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.9,
    price: 299
  },
  {
    id: "butternut-mac-greens",
    name: "Butternut Mac & Greens",
    calories: 360,
    protein: 20,
    badge: "Vegetarian",
    ingredients: ["Macro Elbows", "Creamy Butternut Cheese Sauce", "Roasted Cauliflower Florets", "Steamed Broccoli"],
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515003844-10981543158b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    price: 289
  },

  // --- OMEGA-3 RICH ---
  {
    id: "asian-fusion",
    name: "Asian Fusion",
    calories: 480,
    protein: 32,
    badge: "Omega-3 Rich",
    ingredients: ["Teriyaki Salmon", "Brown Rice", "Edamame", "Pickled Veggies"],
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1496116276385-d3497a7a7816?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.9,
    price: 349
  },
  {
    id: "lemon-herb-trout",
    name: "Lemon-Herb Trout",
    calories: 430,
    protein: 30,
    badge: "Omega-3 Rich",
    ingredients: ["Steelhead Trout, Grilled", "Steamed Asparagus", "Wild Rice Blend", "Toasted Almond Flakes", "Fresh Lemon slice"],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1496116276385-d3497a7a7816?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    price: 349
  },
  {
    id: "walnut-crusted-halibut",
    name: "Walnut Crusted Halibut",
    calories: 460,
    protein: 34,
    badge: "Omega-3 Rich",
    ingredients: ["Wild-Caught Halibut", "Crushed Walnut Topping", "Sautéed Fresh Garlic Kale", "Herb Roasted Beetroots"],
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    price: 399
  },
  {
    id: "mackerel-poke-bento",
    name: "Mackerel Poke Bento",
    calories: 490,
    protein: 29,
    badge: "Omega-3 Rich",
    ingredients: ["Pickled Mackerel Slices", "Organically Sourced Quinoa", "Shaved Radish", "Shredded Seaweed Greens", "Avocado Oil Splash"],
    image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1496116276385-d3497a7a7816?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    price: 299
  },

  // --- VEGAN ---
  {
    id: "green-goddess",
    name: "Green Goddess",
    calories: 380,
    protein: 18,
    badge: "Vegan",
    ingredients: ["Mixed Greens", "Chickpeas", "Cucumber", "Tahini Dressing"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    price: 249
  },
  {
    id: "tofu-buddha-bowl",
    name: "Tofu Buddha Bowl",
    calories: 390,
    protein: 22,
    badge: "Vegan",
    ingredients: ["Crispy Sesame Baked Tofu", "Organic Brown Rice", "Shredded Sweet Carrots", "Edamame Kernels", "Spiced Peanut Sauce"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    price: 279
  },
  {
    id: "smoky-tempeh-bbq",
    name: "Smoky Tempeh BBQ",
    calories: 410,
    protein: 24,
    badge: "Vegan",
    ingredients: ["Hickory Smoked Tempeh strips", "Roasted Sweet Potato Slices", "Vinegar Coleslaw", "Charred Sweet Corn"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.9,
    price: 299
  },
  {
    id: "lentil-shepherds-bento",
    name: "Lentil Shepherd's Bento",
    calories: 350,
    protein: 21,
    badge: "Vegan",
    ingredients: ["Tender French Green Lentils", "Fluffy Cauli-Mash Topping", "Sweet Peas", "Carrot Cubes", "Rich Rosemary Gravy"],
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    price: 269
  },

  // --- KETO FRIENDLY ---
  {
    id: "protein-power",
    name: "Protein Power",
    calories: 550,
    protein: 45,
    badge: "Keto Friendly",
    ingredients: ["Premium Ribeye Steak", "Avocado Slices", "Garlic Butter Cauliflower Mash", "Asparagus Spears"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.9,
    price: 369
  },
  {
    id: "bacon-butter-steak",
    name: "Bacon Butter Steak",
    calories: 580,
    protein: 44,
    badge: "Keto Friendly",
    ingredients: ["Grilled Ribeye Medallions", "House Garlic-Herb Butter", "Smoked Bacon Strips", "Steamed Asparagus", "Sharp Cheddar"],
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.9,
    price: 379
  },
  {
    id: "garlic-butter-butterfish",
    name: "Garlic Butter Butterfish",
    calories: 510,
    protein: 38,
    badge: "Keto Friendly",
    ingredients: ["Grilled Whitefish Fillet", "Rich Ghee Glaze", "Creamy Cauli-Mash", "Wilted Garlic Baby Spinach"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    price: 369
  },
  {
    id: "keto-egg-bites-feast",
    name: "Keto Egg Bites Feast",
    calories: 460,
    protein: 28,
    badge: "Keto Friendly",
    ingredients: ["Three Fluffy Egg Muffins", "Spicy Pork Chorizo", "Half Fresh Avocado", "Crispy Toasted Pecans"],
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    price: 279
  },

  // --- LOW CARB ---
  {
    id: "tropical-paradise",
    name: "Tropical Paradise",
    calories: 420,
    protein: 25,
    badge: "Low Carb",
    ingredients: ["Grilled Jumbo Shrimp", "Fresh Mango Cucumber Salsa", "Riced Cauliflower Coconut-style", "Lime Wedges"],
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515003844-10981543158b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    price: 299
  },
  {
    id: "turkey-lettuce-wraps",
    name: "Turkey Lettuce Wraps",
    calories: 310,
    protein: 29,
    badge: "Low Carb",
    ingredients: ["Spiced Lean Turkey breast simmer", "Chilled Butter Crisp Lettuce Cups", "Sliced Water Chestnuts", "Low-Sodium Ginger Soy sauce"],
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1626700051175-6518c4793f0f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    price: 279
  },
  {
    id: "zucchini-noodles-chicken",
    name: "Zucchini Noodles Chicken",
    calories: 290,
    protein: 31,
    badge: "Low Carb",
    ingredients: ["Spiralized Zucchini Noodles", "Herb Garlic Grilled Chicken Strips", "Basil Almond Pesto", "Lightly Toasted Pine Seeds"],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515003844-10981543158b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.9,
    price: 299
  },
  {
    id: "herb-roasted-pork-loin",
    name: "Herb Roasted Pork Loin",
    calories: 350,
    protein: 34,
    badge: "Low Carb",
    ingredients: ["Roasted Herb Pork Tenderloin", "Oven Baked Cauliflower Florets", "Warmed Buttered Cabbage Shavings", "Virgin Olive Oil glaze"],
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515003844-10981543158b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    price: 329
  }
];

export const PLANS_DATA: Record<"Daily" | "Weekly" | "Monthly", Plan[]> = {
  Daily: [
    {
      id: "starter-daily",
      name: "Starter",
      price: 299,
      mealsIncluded: 1,
      features: ["Choose any bento meal", "Free delivery on orders ₹999+", "Cancel anytime", "Mobile app access"]
    },
    {
      id: "premium-daily",
      name: "Premium",
      price: 499,
      mealsIncluded: 2,
      isPopular: true,
      features: ["All Starter features", "Priority morning delivery", "Free healthy smoothies", "Nutrition consultation", "Custom meal plans"]
    },
    {
      id: "family-daily",
      name: "Family",
      price: 899,
      mealsIncluded: 4,
      features: ["All Premium features", "Family size portions", "Kid-friendly options included", "Weekend festive specials", "Dedicated customer support"]
    }
  ],
  Weekly: [
    {
      id: "starter-weekly",
      name: "Starter",
      price: 1999,
      mealsIncluded: 7,
      features: ["Choose any bento meal", "Free delivery on orders ₹1499+", "Cancel anytime", "Mobile app access"]
    },
    {
      id: "premium-weekly",
      name: "Premium",
      price: 2999,
      mealsIncluded: 14,
      isPopular: true,
      features: ["All Starter features", "Priority morning delivery", "Free healthy smoothies", "Nutrition consultation", "Custom meal plans"]
    },
    {
      id: "family-weekly",
      name: "Family",
      price: 4999,
      mealsIncluded: 28,
      features: ["All Premium features", "Family size portions", "Kid-friendly options included", "Weekend festive specials", "Dedicated customer support"]
    }
  ],
  Monthly: [
    {
      id: "starter-monthly",
      name: "Starter",
      price: 7499,
      mealsIncluded: 30,
      features: ["Choose any bento meal", "Free delivery & priority shipping", "Cancel anytime", "Mobile app access"]
    },
    {
      id: "premium-monthly",
      name: "Premium",
      price: 11999,
      mealsIncluded: 60,
      isPopular: true,
      features: ["All Starter features", "Priority morning delivery", "Free healthy smoothies", "Nutrition consultation", "Custom meal plans"]
    },
    {
      id: "family-monthly",
      name: "Family",
      price: 19999,
      mealsIncluded: 120,
      features: ["All Premium features", "Family size portions", "Kid-friendly options included", "Weekend festive specials", "Dedicated customer support"]
    }
  ]
};

export const REVIEWS_DATA: Review[] = [
  {
    id: "review-1",
    text: "\"VELORA has been a game-changer for my health journey. The meals are delicious, perfectly portioned, and I've lost 15 pounds in 3 months!\"",
    author: "Sarah Johnson",
    role: "Busy Professional",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "review-2",
    text: "\"As someone who tracks macros religiously, VELORA makes meal prep effortless. The nutrition info is accurate and the taste is incredible.\"",
    author: "Michael Chen",
    role: "Fitness Enthusiast",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "review-3",
    text: "\"Finally, healthy meals my whole family enjoys! The kid-friendly options are a lifesaver. No more stressful dinner planning.\"",
    author: "Emily Rodriguez",
    role: "Working Mom",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does delivery work?",
    answer: "We deliver your fresh bento boxes every morning between 5:00 AM and 8:00 AM in insulated cooler bags to preserve absolute freshness. You can add specific delivery instructions (e.g., leave at the front desk, ring doorbell, etc.) during checkout."
  },
  {
    id: "faq-2",
    question: "Can I customize my meals?",
    answer: "Absolutely! You can choose your menu items week-to-week via our dashboard or app. We offer complete customizability where you can swap sides, protein sources, or select allergy filters (gluten-free, dairy-free, nut-free, etc.)."
  },
  {
    id: "faq-3",
    question: "What if I'm not home for delivery?",
    answer: "No worries! Our bento boxes are shipped in reusable, premium double-insulated cooler bags with ice packs that keep your food perfectly cold for up to 6 hours. You can return the bag during your next delivery."
  },
  {
    id: "faq-4",
    question: "Are the ingredients organic?",
    answer: "Yes, 100% of our products use fresh, premium, USDA-certified organic ingredients. We strictly partner with sustainable, GMO-free local farms to ensure that you eat meals free from synthetic chemical pesticides or hormones."
  },
  {
    id: "faq-5",
    question: "Can I cancel anytime?",
    answer: "Yes, indeed! There are no long-term commitments or binding contracts. You can pause, skip a day/week, modify, or cancel your subscription at any time with just a single tap directly through our mobile app or web panel."
  }
];
