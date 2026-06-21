import type { ICategory } from "@/types/category-type";
import { shoes_data } from "@/data/shoes-data";

const productsByCategory = (category: string) =>
  shoes_data
    .filter((product) => product.category === category)
    .map((product) => product.id);

const category_data: ICategory[] = [
  {
    id: "boot-training-category-training",
    img: "https://placehold.co/600x420/111827/FFFFFF.png?text=Training",
    parent: "Training",
    children: ["Hombre", "Mujer", "Unisex"],
    productType: "fashion",
    products: productsByCategory("Training"),
    status: "Show",
  },
  {
    id: "boot-training-category-running",
    img: "https://placehold.co/600x420/1F5FAE/FFFFFF.png?text=Running",
    parent: "Running",
    children: ["Hombre", "Mujer", "Unisex"],
    productType: "fashion",
    products: productsByCategory("Running"),
    status: "Show",
  },
  {
    id: "boot-training-category-casual",
    img: "https://placehold.co/600x420/F3A6B8/111827.png?text=Casual",
    parent: "Casual",
    children: ["Hombre", "Mujer", "Unisex"],
    productType: "fashion",
    products: productsByCategory("Casual"),
    status: "Show",
  },
];

export default category_data;
