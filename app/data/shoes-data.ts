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

const allSizes: ShoeSizeStock[] = [
  { size: "34", stock: 5 },
  { size: "35", stock: 5 },
  { size: "36", stock: 5 },
  { size: "37", stock: 5 },
  { size: "38", stock: 5 },
  { size: "39", stock: 5 },
  { size: "40", stock: 5 },
];

const allColors: ShoeColor[] = [
  { name: "Blanco", code: "#F7F4EF" },
  { name: "Azul", code: "#1F5FAE" },
  { name: "Rosa", code: "#F3A6B8" },
  { name: "Negro", code: "#111827" },
  { name: "Marron", code: "#8B5A2B" },
  { name: "Chocolate", code: "#4E2A1E" },
];

/* const placeholder = (model: string, color: string, bg: string, fg = "111827") =>
  `https://placehold.co/900x900/${bg}/${fg}.png?text=${model.replaceAll(" ", "+")}+${color}`; */

const placeholder = (model: string, color: string, bg: string, fg = "111827") =>
  `https://placehold.co/900x900/${bg}/${fg}.png?text=${model.replaceAll(" ", "+")}`;

const placeholderImages = (model: string, colors: ShoeColor[]): ShoeImage[] =>
  colors.map((color) => ({
    color: color.name,
    src: placeholder(
      model,
      color.name,
      color.code.replace("#", ""),
      color.name === "Blanco" || color.name === "Rosa" ? "111827" : "FFFFFF"
    ),
  }));

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
      { name: "Blanco", code: "#F7F4EF" },
      { name: "Azul", code: "#1F5FAE" },
      { name: "Rosa", code: "#F3A6B8" },
    ],
    sizes: allSizes,
    images: [
      { color: "Blanco", src: "/img/producto/tenis-bootb-blanco.png" },
      { color: "Azul", src: "/img/producto/tenis-bootb_azul.png" },
      { color: "Rosa", src: "/img/producto/tenis-bootb_rosado.png" },
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
    price: 300,
    discount: 0,
    quantity: 40,
    colors: [
      { name: "Blanco", code: "#F7F4EF" },
      { name: "Nude", code: "#D8B69A" },
      { name: "Negro", code: "#111827" },
    ],
    sizes: allSizes,
    images: [
      { color: "Blanco", src: "/img/producto/tenis-bootz-blanco.png" },
      { color: "Nude", src: "/img/producto/tenis-bootz-nude.png" },
      { color: "Negro", src: "/img/producto/tenis-bootz-negro.png" },
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
    price: 250,
    discount: 0,
    quantity: 40,
    colors: [
      { name: "Nude", code: "#6F4E37" },
      { name: "Blanco", code: "#F7F4EF" },
      { name: "Negro", code: "#111827" },
    ],
    sizes: allSizes,
    images: [
      { color: "Nude", src: "/img/producto/tenis-cafe.png" },
      { color: "Blanco", src: "/img/producto/tenis-blanco.png" },
      { color: "Negro", src: "/img/producto/tenis-negro.png" },
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
    price: 300,
    discount: 0,
    quantity: 40,
    colors: [
      { name: "Negro", code: "#111827" },
      { name: "Blanco", code: "#F7F4EF" },
      { name: "Blanco/Negro", code: "#D1D5DB" },
    ],
    sizes: allSizes,
    images: [
      { color: "Negro", src: "/img/producto/tenis-skull-negro.png" },
      { color: "Blanco", src: "/img/producto/tenis-skull-blanco.png" },
      { color: "Blanco/Negro", src: "/img/producto/tenis-skull-blanco-negro.png" },
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
    price: 300,
    discount: 0,
    quantity: 40,
    colors: [
      { name: "Blanco", code: "#F7F4EF" },
      { name: "Color", code: "#D9A441" },
    ],
    sizes: allSizes,
    images: placeholderImages("IRON", [
      { name: "Blanco", code: "#F7F4EF" },
      { name: "Color", code: "#D9A441" },
    ]),
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
    price: 300,
    discount: 0,
    quantity: 40,
    colors: [
      { name: "Rosa", code: "#F3A6B8" },
      { name: "Marron", code: "#8B5A2B" },
      { name: "Chocolate", code: "#4E2A1E" },
    ],
    sizes: allSizes,
    images: placeholderImages("DIVAS", [
      { name: "Rosa", code: "#F3A6B8" },
      { name: "Marron", code: "#8B5A2B" },
      { name: "Chocolate", code: "#4E2A1E" },
    ]),
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
