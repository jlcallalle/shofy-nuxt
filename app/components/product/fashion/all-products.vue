<template>
  <section class="tp-product-area pb-90 pt-90">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-title-wrapper-2 text-center mb-35">
            <!-- <span class="tp-section-title-pre-2">
              All Product Shop
              <svg-section-line-2 />
            </span> -->
            <h3 class="tp-section-title-2">Nuestros Productos</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="row">
            <div
              v-for="item in allProducts"
              :key="item.id"
              class="col-xl-3 col-lg-4 col-md-6 col-sm-6"
            >
              <product-fashion-product-item :item="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import product_data from "@/data/shoes-data";

const fashion_prd = product_data.filter((p) => p.productType === "fashion");
const allProducts = fashion_prd;
</script>
