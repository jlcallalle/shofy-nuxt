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
          <div class="tp-product-tab-2 tp-tab mb-50 text-center">
            <nav>
              <div
                class="nav nav-tabs justify-content-center"
                id="nav-tab"
                role="tablist"
              >
                <button
                  v-for="(tab, i) in tabs"
                  :key="i"
                  :class="`nav-link ${activeTab === tab ? 'active' : ''}`"
                  @click="handleActiveTab(tab)"
                >
                  {{ tab }}
                  <span class="tp-product-tab-tooltip">{{
                    tab === "Todos"
                      ? allProducts.length
                      : allProducts.filter(
                          (p) =>
                            p.category.name.toLowerCase() === tab.toLowerCase()
                        ).length
                  }}</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="row">
            <div
              v-for="item in filteredProducts"
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
import { ref, computed } from "vue";
// tabs
const tabs: string[] = ["Todos", "Training", "Running", "Casual"];
const activeTab = ref<string>(tabs[0]);
const fashion_prd = product_data.filter((p) => p.productType === "fashion");
const allProducts = fashion_prd;
// handleActiveTab
const handleActiveTab = (tab: string) => {
  activeTab.value = tab;
};
const filteredProducts = computed(() => {
  if (activeTab.value === "Todos") {
    return allProducts;
  } else if (activeTab.value === "Training") {
    return allProducts.filter((p) => p.category.name === "Training");
  } else if (activeTab.value === "Running") {
    return allProducts.filter((p) => p.category.name === "Running");
  } else if (activeTab.value === "Casual") {
    return allProducts.filter((p) => p.category.name === "Casual");
  } else {
    return allProducts;
  }
});
</script>
