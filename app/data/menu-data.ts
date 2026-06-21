import { type IMenuItem, type IMobileType } from "@/types/menu-d-type";

export const menu_data: IMenuItem[] = [
  {
    id: 1,
    link: "/",
    title: "Inicio",
  },
  {
    id: 2,
    link: "/productos",
    title: "Productos",
  },
  {
    id: 3,
    link: "/blog",
    title: "Blog",
  },
  {
    id: 4,
    link: "/contacto",
    title: "Contacto",
  },
];

export const mobile_menu: IMobileType[] = [
  {
    id: 1,
    single_link: true,
    title: "Inicio",
    link: "/",
  },
  {
    id: 2,
    single_link: true,
    title: "Productos",
    link: "/productos",
  },
  {
    id: 3,
    single_link: true,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 4,
    single_link: true,
    title: "Contacto",
    link: "/contacto",
  },
];
