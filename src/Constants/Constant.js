export const DUMMY_FOOD_LIST = [
  {
    id: "1",
    title: "Chicken Biriyani",
    description:
      "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together.",
    amount: 275,
  },
  {
    id: "2",
    title: "Mutton Biriyani",
    description:
      "Long-grained rice (like basmati) flavored with fragrant spices such as saffron and layered with lamb, chicken, fish, or vegetables and a thick gravy.",
    amount: 325,
  },
  {
    id: "3",
    title: "Kadai Paneer",
    description:
      "Kadai paneer is the combination of paneer, onion and colorfull bell peppers coated with spicy tomato sauce, aromatic spices and herbs.",
    amount: 250,
  },
];

export const DUMMY_ORDERS_LIST = [
  {
    id: "ord1",
    name: "Saranraj",
    foodDetails: [
      {
        id: "1",
        Title: "Chicken Burger",
        Quantity: 1,
        Amount: 220,
      },
      {
        id: "2",
        Title: "Butter Naan",
        Quantity: 2,
        Amount: 130,
      },
      {
        id: "3",
        Title: "Chettinaadu Chicken",
        Quantity: 1,
        Amount: 220,
      },
    ],
    status: "Ordered",
    time: "03:45 PM",
    total: 700,
  },
  {
    id: "ord2",
    name: "Sneha",
    foodDetails: [
      {
        id: "1",
        Title: "Chicken Grill",
        Quantity: 1,
        Amount: 250,
      },
      {
        id: "2",
        Title: "French Fries",
        Quantity: 5,
        Amount: 75,
      },
    ],
    status: "Delivered",
    time: "01:05 PM",
    total: 400,
  },
  {
    id: "ord3",
    name: "Sai Rama Krishnan",
    foodDetails: [
      {
        id: "1",
        Title: "Veg Pulao",
        Quantity: 1,
        Amount: 170,
      },
      {
        id: "2",
        Title: "Veg Pizza",
        Quantity: 1,
        Amount: 130,
      },
    ],
    status: "Ordered",
    time: "02:50 PM",
    total: 430,
  },
];
