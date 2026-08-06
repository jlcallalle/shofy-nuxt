<template>
  <div>
    <announcement-marquee />
    <header-two :style_2="true" />
    <main>
      <slot />
    </main>
    <footer-one :primary_style="true" />
    <back-to-top />
    <whatsapp-float />
    <!-- <modal-product /> -->
  </div>
</template>

<script setup lang="ts"></script>
