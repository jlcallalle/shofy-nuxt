<template>
  <div>
      <!-- breadcrumb start -->
      <breadcrumb-1 title="Productos" subtitle="Productos" />
      <!-- breadcrumb end -->

      <!-- productos area start -->
      <productos-area
        :hide-categories="true"
        :hide-status="true"
        :hide-offer-filter="true"
      />
      <!-- productos area end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Productos" });
</script>
