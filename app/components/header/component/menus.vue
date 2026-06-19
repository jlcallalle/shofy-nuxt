<template>
  <ul>
    <li v-for="item in menuItems" :key="item.link">
      <nuxt-link :href="item.link">{{ item.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
const menuItems = [
  { title: "Inicio", link: "/" },
  { title: "Productos", link: "/shop" },
  { title: "Blog", link: "/blog" },
  { title: "Contacto", link: "/contacto" },
];
</script>
