import { COPInRevenue } from "./CompanyRevenue";

export const SalesOfProducts = [
  {
    year: 2022,
    data: {
      product: [
        "Laptop",
        "Smartphone",
        "TV",
        "Headphones",
        "Tablet",
        "Camera",
        "FitnessTracker",
      ],
      qty: [2150, 1800, 2500, 1900, 2300, 2050, 2200],
    },
  },
  {
    year: 2023,
    data: {
      product: [
        "Laptop",
        "Smartphone",
        "TV",
        "Headphones",
        "Tablet",
        "Camera",
        "FitnessTracker",
      ],
      qty: [1900, 2400, 2200, 2100, 2450, 2250, 2350],
    },
  },
  {
    year: 2024,
    data: {
      product: [
        "Laptop",
        "Smartphone",
        "TV",
        "Headphones",
        "Tablet",
        "Camera",
        "FitnessTracker",
      ],
      qty: [2350, 2000, 2600, 2150, 2250, 2400, 2100],
    },
  },
];

const findStarProductOfYear = () => {
  return SalesOfProducts.map((el, yearIndex) => {
    let finalProdRevenue = { year: el.year, product: "", revenue: 0 };
    el.data.product.map((prod, prodIndex) => {
      let currentProdRevenue =
        el.data.qty[prodIndex] * COPInRevenue[yearIndex].data.price[prodIndex];
      if (currentProdRevenue > finalProdRevenue.revenue) {
        finalProdRevenue = {
          ...finalProdRevenue,
          product: prod,
          revenue: currentProdRevenue,
        };
      }
    });
    return finalProdRevenue;
  });
};

export const StarProductOfYear = findStarProductOfYear();
