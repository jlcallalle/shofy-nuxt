<template>
  <a v-for="item in social_data" :key="item.id" :href="item.link"  target="_blank">
    <i :class="item.icon"></i>
  </a>
</template>

<script setup lang="ts">
const social_data: {
  id: number;
  link: string;
  icon: string;
  title: string;
}[] = [
  {
    id: 1,
    link: "https://www.facebook.com/profile.php?id=100083229163817",
    icon: "fa-brands fa-facebook-f",
    title: "Facebook",
  },
  {
    id: 2,
    link: "https://www.instagram.com/boot_training_brazil.peru/",
    icon: "fa-brands fa-instagram",
    title: "Instagram",
  },
  {
    id: 3,
    link: "https://www.tiktok.com/@boottraining_peru",
    icon: "fa-brands fa-tiktok",
    title: "Tiktok",
  }
];
</script>