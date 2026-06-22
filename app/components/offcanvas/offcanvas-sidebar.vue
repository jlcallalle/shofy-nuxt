<template>
  <div>
    <div
      :class="`tp-filter-offcanvas-area ${store.openFilterOffcanvas ? 'offcanvas-opened' : ''}`"
    >
      <div class="tp-filter-offcanvas-wrapper">
        <div class="tp-filter-offcanvas-close">
          <button
            @click="store.handleOpenFilterOffcanvas()"
            type="button"
            class="tp-filter-offcanvas-close-btn filter-close-btn"
          >
            <i class="fa-solid fa-xmark"></i>
            Cerrar
          </button>
        </div>
        <div class="tp-shop-sidebar">
          <!-- filter -->
          <div class="tp-shop-widget mb-35">
            <h3 class="tp-shop-widget-title no-border">Filtro de precio</h3>

            <shop-sidebar-price-filter />
          </div>
          <!-- status -->
          <div class="tp-shop-widget mb-50">
            <h3 class="tp-shop-widget-title">Estado del producto</h3>

            <shop-sidebar-filter-status />
          </div>
          <!-- categories -->
          <div class="tp-shop-widget mb-50">
            <h3 class="tp-shop-widget-title">Categorías</h3>

            <shop-sidebar-filter-categories />
          </div>

          <!-- product rating -->
          <div class="tp-shop-widget mb-50">
            <h3 class="tp-shop-widget-title">Productos mejor valorados</h3>
            <shop-sidebar-top-product />
          </div>
          <!-- brand -->
          <div class="tp-shop-widget mb-50">
            <h3 class="tp-shop-widget-title">Marcas populares</h3>
            <!-- filter brand start -->
            <shop-sidebar-filter-brand />
            <!-- filter brand end -->
          </div>

          <!-- reset filter start -->
          <shop-sidebar-reset-filter />
          <!-- reset filter end -->
        </div>
      </div>
    </div>
    <div
      @click="store.handleOpenFilterOffcanvas()"
      :class="`body-overlay ${store.openFilterOffcanvas ? 'opened' : ''}`"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "@/pinia/useProductStore";
import { useProductFilterStore } from "@/pinia/useProductFilterStore";
const store = useProductStore();
const filterStore = useProductFilterStore();
const router = useRouter();
const route = useRoute();

const handleFilterReset = () => {
  filterStore.handleResetFilter();
  store.handleOpenFilterOffcanvas()
  router.push("/shop-filter-offcanvas");
};

watch(
  () => route.query || route.path,
  (newStatus) => {
    store.openFilterOffcanvas = false
  }
);
</script>
