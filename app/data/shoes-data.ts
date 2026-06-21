import { type IProduct } from "@/types/product-type";

export type ShoeCategory = "Training" | "Running" | "Casual";
export type ShoeGender = "Hombre" | "Mujer" | "Unisex";

export interface ShoeColor {
  name: string;
  code: string;
}

export interface ShoeSizeStock {
  size: string;
  stock: number;
}

export interface ShoeImage {
  color: string;
  src: string;
}

export interface ShoeProduct {
  id: string;
  sku: string;
  title: string;
  slug: string;
  brand: "Boot Training";
  category: ShoeCategory;
  gender: ShoeGender;
  price: number;
  previousPrice?: number;
  discount: number;
  quantity: number;
  colors: ShoeColor[];
  sizes: ShoeSizeStock[];
  images: ShoeImage[];
  featured: boolean;
  description: string;
  status: "in-stock" | "out-of-stock";
  tags: string[];
}

const defaultSizes: ShoeSizeStock[] = [
  { size: "38", stock: 4 },
  { size: "39", stock: 4 },
  { size: "40", stock: 4 },
  { size: "41", stock: 4 },
  { size: "42", stock: 4 },
  { size: "43", stock: 4 },
];

const placeholder = (model: string, color: string, bg: string, fg = "111827") =>
  `https://placehold.co/900x900/${bg}/${fg}.png?text=${model.replaceAll(" ", "+")}+${color}`;

export const shoes_data: ShoeProduct[] = [
  {
    id: "boot-b",
    sku: "BT-BOOT-B",
    title: "BOOT B",
    slug: "boot-b",
    brand: "Boot Training",
    category: "Training",
    gender: "Unisex",
    price: 320,
    previousPrice: 350,
    discount: 0,
    quantity: 40,
    colors: [
      { name: "Azul", code: "#1F5FAE" },
      { name: "Blanco", code: "#F7F4EF" },
      { name: "Rosa", code: "#F3A6B8" },
    ],
    sizes: [
      { size: "33", stock: 5 },
      { size: "34", stock: 5 },
      { size: "35", stock: 5 },
      { size: "36", stock: 5 },
      { size: "37", stock: 5 },
      { size: "38", stock: 5 },
      { size: "39", stock: 5 },
      { size: "40", stock: 5 },
    ],
    images: [
      { color: "Blanco", src: "/img/producto/modelob/modelob_blanco.png" },
      { color: "Azul", src: "/img/producto/modelob/modelob_azul.png" },
      { color: "Rosa", src: "/img/producto/modelob/modelob_rosado.png" },
    ],
    featured: true,
    description:
      "Zapatilla Boot Training Peru para entrenamientos funcionales, con soporte estable y diseno versatil para sesiones intensas.",
    status: "in-stock",
    tags: ["boot training", "training", "zapatillas", "boot b"],
  },
  {
    id: "boot-z",
    sku: "BT-BOOT-Z",
    title: "BOOT Z",
    slug: "boot-z",
    brand: "Boot Training",
    category: "Training",
    gender: "Unisex",
    price: 340,
    discount: 0,
    quantity: 24,
    colors: [
      { name: "Negro", code: "#111827" },
      { name: "Rojo", code: "#B91C1C" },
      { name: "Gris", code: "#9CA3AF" },
    ],
    sizes: defaultSizes,
    images: [
      { color: "Negro", src: placeholder("BOOT Z", "Negro", "111827", "FFFFFF") },
      { color: "Rojo", src: placeholder("BOOT Z", "Rojo", "B91C1C", "FFFFFF") },
      { color: "Gris", src: placeholder("BOOT Z", "Gris", "D1D5DB") },
    ],
    featured: true,
    description:
      "Modelo de entrenamiento con perfil firme, ideal para rutinas de fuerza, circuito y uso diario deportivo.",
    status: "in-stock",
    tags: ["boot training", "training", "zapatillas", "boot z"],
  },
  {
    id: "tennis",
    sku: "BT-TENNIS",
    title: "TENNIS",
    slug: "tennis",
    brand: "Boot Training",
    category: "Running",
    gender: "Unisex",
    price: 300,
    discount: 5,
    quantity: 24,
    colors: [
      { name: "Blanco", code: "#F9FAFB" },
      { name: "Verde", code: "#15803D" },
      { name: "Negro", code: "#111827" },
    ],
    sizes: defaultSizes,
    images: [
      { color: "Blanco", src: placeholder("TENNIS", "Blanco", "F9FAFB") },
      { color: "Verde", src: placeholder("TENNIS", "Verde", "15803D", "FFFFFF") },
      { color: "Negro", src: placeholder("TENNIS", "Negro", "111827", "FFFFFF") },
    ],
    featured: true,
    description:
      "Zapatilla ligera para trote, caminata activa y sesiones de cardio con comodidad durante todo el dia.",
    status: "in-stock",
    tags: ["boot training", "running", "zapatillas", "tennis"],
  },
  {
    id: "skull",
    sku: "BT-SKULL",
    title: "SKULL",
    slug: "skull",
    brand: "Boot Training",
    category: "Casual",
    gender: "Unisex",
    price: 330,
    discount: 0,
    quantity: 24,
    colors: [
      { name: "Negro", code: "#111827" },
      { name: "Blanco", code: "#F9FAFB" },
      { name: "Morado", code: "#6D28D9" },
    ],
    sizes: defaultSizes,
    images: [
      { color: "Negro", src: placeholder("SKULL", "Negro", "111827", "FFFFFF") },
      { color: "Blanco", src: placeholder("SKULL", "Blanco", "F9FAFB") },
      { color: "Morado", src: placeholder("SKULL", "Morado", "6D28D9", "FFFFFF") },
    ],
    featured: false,
    description:
      "Modelo urbano con caracter deportivo, pensado para combinar estilo casual con comodidad de entrenamiento.",
    status: "in-stock",
    tags: ["boot training", "casual", "zapatillas", "skull"],
  },
  {
    id: "iron",
    sku: "BT-IRON",
    title: "IRON",
    slug: "iron",
    brand: "Boot Training",
    category: "Training",
    gender: "Hombre",
    price: 360,
    discount: 10,
    quantity: 24,
    colors: [
      { name: "Grafito", code: "#374151" },
      { name: "Naranja", code: "#F97316" },
      { name: "Negro", code: "#111827" },
    ],
    sizes: defaultSizes,
    images: [
      { color: "Grafito", src: placeholder("IRON", "Grafito", "374151", "FFFFFF") },
      { color: "Naranja", src: placeholder("IRON", "Naranja", "F97316") },
      { color: "Negro", src: placeholder("IRON", "Negro", "111827", "FFFFFF") },
    ],
    featured: true,
    description:
      "Zapatilla robusta para entrenamiento de fuerza, estabilidad y soporte en movimientos explosivos.",
    status: "in-stock",
    tags: ["boot training", "training", "zapatillas", "iron"],
  },
  {
    id: "divas",
    sku: "BT-DIVAS",
    title: "DIVAS",
    slug: "divas",
    brand: "Boot Training",
    category: "Casual",
    gender: "Mujer",
    price: 315,
    discount: 0,
    quantity: 24,
    colors: [
      { name: "Rosa", code: "#F3A6B8" },
      { name: "Blanco", code: "#F9FAFB" },
      { name: "Dorado", code: "#D4AF37" },
    ],
    sizes: defaultSizes,
    images: [
      { color: "Rosa", src: placeholder("DIVAS", "Rosa", "F3A6B8") },
      { color: "Blanco", src: placeholder("DIVAS", "Blanco", "F9FAFB") },
      { color: "Dorado", src: placeholder("DIVAS", "Dorado", "D4AF37") },
    ],
    featured: false,
    description:
      "Zapatilla casual deportiva con look moderno, creada para acompanarte del entrenamiento al dia a dia.",
    status: "in-stock",
    tags: ["boot training", "casual", "zapatillas", "divas"],
  },
];

const toLegacyProduct = (shoe: ShoeProduct): IProduct => {
  const legacyPrice = shoe.previousPrice ?? shoe.price;
  const legacyDiscount = shoe.previousPrice
    ? ((shoe.previousPrice - shoe.price) / shoe.previousPrice) * 100
    : shoe.discount;

  return {
  id: shoe.id,
  sku: shoe.sku,
  img: shoe.images[0]?.src ?? "",
  title: shoe.title,
  slug: shoe.slug,
  unit: "1 par",
  imageURLs: shoe.images.map((image) => {
    const color = shoe.colors.find((item) => item.name === image.color);
    return {
      color: color
        ? {
            name: color.name,
            clrCode: color.code,
          }
        : undefined,
      img: image.src,
    };
  }),
  parent: shoe.category,
  children: shoe.gender,
  price: legacyPrice,
  discount: legacyDiscount,
  quantity: shoe.quantity,
  brand: {
    name: shoe.brand,
  },
  category: {
    name: shoe.category,
  },
  status: shoe.status,
  reviews: [],
  productType: "fashion",
  description: shoe.description,
  additionalInformation: [
    {
      key: "Marca",
      value: `${shoe.brand} Peru`,
    },
    {
      key: "Categoria",
      value: shoe.category,
    },
    {
      key: "Genero",
      value: shoe.gender,
    },
    {
      key: "Colores",
      value: shoe.colors.map((color) => color.name).join(", "),
    },
    {
      key: "Precio actual",
      value: `${shoe.price}`,
    },
    ...(shoe.previousPrice
      ? [
          {
            key: "Precio anterior",
            value: `${shoe.previousPrice}`,
          },
        ]
      : []),
    {
      key: "Stock por talla",
      value: shoe.sizes.map((item) => `${item.size}: ${item.stock}`).join(", "),
    },
  ],
  featured: shoe.featured,
  sellCount: shoe.featured ? 8 : 3,
  tags: shoe.tags,
  sizes: shoe.sizes.map((item) => item.size),
  };
};

const product_data: IProduct[] = shoes_data.map(toLegacyProduct);

export default product_data;
