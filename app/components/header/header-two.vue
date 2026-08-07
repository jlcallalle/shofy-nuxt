<template>
  <header>
    <div :class="`tp-header-area tp-header-style-${style_2 ? 'primary' : 'darkRed'} tp-header-height`">

      <!-- header bottom start -->
      <div id="header-sticky" :class="`tp-header-bottom-2 tp-header-sticky ${isSticky ? 'header-sticky' : ''}`">
        <div class="container">
          <div class="tp-mega-menu-wrapper p-relative">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-5 col-md-5 col-sm-4 col-6">
                <div class="logo">
                  <nuxt-link href="/">
                    <img src="/img/logo/logo_peru.jpeg" width="150" height="50" alt="logo">
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xl-5 d-none d-xl-block">
                <div class="main-menu menu-style-2">
                  <nav class="tp-main-menu-content">
                    <!-- menus start -->
                    <header-component-menus />
                    <!-- menus end -->
                  </nav>
                </div>
              </div>
              <div class="col-xl-5 col-lg-7 col-md-7 col-sm-8 col-6">
                <div class="tp-header-bottom-right d-flex align-items-center justify-content-end pl-30">
                  <div class="tp-header-search-2 d-none d-sm-block">
                    <form @submit.prevent="handleSubmit">
                      <input type="text" placeholder="Buscar Productos" v-model="searchText">
                      <button type="submit">
                        <svg-search />
                      </button>
                    </form>
                  </div>
                  <div class="tp-header-action d-flex align-items-center ml-30">
                    <div class="tp-header-action-item tp-header-hamburger d-xl-none">
                      <button
                        @click="utilsStore.handleOpenMobileMenu()"
                        type="button"
                        class="tp-offcanvas-open-btn"
                        aria-label="Abrir menu"
                      >
                        <svg-menu-icon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <offcanvas-mobile-sidebar/>
</template>

<script setup lang="ts">
import { useUtilityStore } from '@/pinia/useUtilityStore';

const router = useRouter();
const {isSticky} = useSticky();

const utilsStore = useUtilityStore();

defineProps<{style_2?:boolean}>()

let searchText = ref<string>('');

// handleSubmit
const handleSubmit = () => {
  if(!searchText.value){
    return
  }
  else {
    router.push(`/search?searchText=${searchText.value}`)
  }
}
</script>
