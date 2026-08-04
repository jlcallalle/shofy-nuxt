<template>
  <div>
    <nuxt-layout name="layout-two">
      <!-- hero banner start -->
      <hero-banner-two />
      <!-- hero banner end -->

      <!-- category area start -->
      <categories-fashion/>
      <!-- category area end -->

      <!-- popular product items start -->
      <product-fashion-popular-items/>
      <!-- popular product items end -->

      <!-- blog start -->
      <blog-fashion-items/>
      <!-- blog end -->

      <!-- feature area start -->
      <feature-two/>
      <!-- feature area end -->

      <!-- instagram area start -->
      <instagram-area-2/>
      <!-- instagram area end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
useSeoMeta({ title: "Home two" });
</script>
