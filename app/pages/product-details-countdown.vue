<template>
  <div v-if="product">
      <!-- breadcrumb start -->
      <product-details-breadcrumb :product="product" />
      <!-- breadcrumb end -->

      <!-- product details area start -->
      <product-details-area :product="product" />
      <!-- product details area end -->

      <!-- related products start -->
      <product-related :product-id="product.id" :category="product.category.name" />
      <!-- related products end -->
  </div>
</template>

<script setup lang="ts">
import product_data from '@/data/shoes-data';
import { useProductStore } from '@/pinia/useProductStore';
useSeoMeta({ title: "Detalle de zapatilla" });

const product = product_data[0];
const productStore = useProductStore();
onMounted(() => {
  if(product){
    productStore.activeImg  = product.img;
  }
})
</script>
