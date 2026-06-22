<template>
  <div class="tp-header-top-menu d-flex align-items-center justify-content-end">
    <div class="tp-header-top-menu-item tp-header-lang">
      <span @click="handleActive('lang')" class="tp-header-lang-toggle" id="tp-header-lang-toggle">Español</span>
      <ul :class="`${isActive === 'lang' ? 'tp-lang-list-open' : ''}`">
        <li>
          <a href="#">Español</a>
        </li>
        <li>
          <a href="#">Ruso</a>
        </li>
        <li>
          <a href="#">Portugués</a>
        </li>
      </ul>
    </div>
    <div class="tp-header-top-menu-item tp-header-currency">
      <span @click="handleActive('currency')" class="tp-header-currency-toggle" id="tp-header-currency-toggle">PEN</span>
      <ul :class="`${isActive === 'currency' ? 'tp-currency-list-open' : ''}`">
        <li>
          <a href="#">EUR</a>
        </li>
        <li>
          <a href="#">CHF</a>
        </li>
        <li>
          <a href="#">GBP</a>
        </li>
        <li>
          <a href="#">KWD</a>
        </li>
      </ul>
    </div>
    <div class="tp-header-top-menu-item tp-header-setting">
      <span @click="handleActive('setting')" class="tp-header-setting-toggle" id="tp-header-setting-toggle">Cuenta</span>
      <ul :class="`${isActive === 'setting' ? 'tp-setting-list-open' : ''}`">
        <li>
          <nuxt-link href="/profile">Mi perfil</nuxt-link>
        </li>
        <li>
          <nuxt-link href="/wishlist">Favoritos</nuxt-link>
        </li>
        <li>
          <nuxt-link href="/cart">Carrito</nuxt-link>
        </li>
        <li>
          <nuxt-link href="/login">Cerrar sesión</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
let isActive = ref<string>('')
  // handle active
  const handleActive = (type:string) => {
    if(type === isActive.value){
      isActive.value = ''
    }
    else {
      isActive.value = type
    }
  }
</script>
