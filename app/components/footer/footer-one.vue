<template>
  <footer>
    <div :class="`tp-footer-area ${primary_style?'tp-footer-style-2 tp-footer-style-primary tp-footer-style-6':''} ${style_2 ?'tp-footer-style-2':style_3 ? 'tp-footer-style-2 tp-footer-style-3': ''}`" :data-bg-color="`${style_2?'footer-bg-white':style_3?'footer-bg-white':'footer-bg-grey'}`">
      <div class="tp-footer-top pt-95 pb-40">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-3 col-md-4 col-sm-6">
              <div class="tp-footer-widget footer-col-1 mb-50">
                <div class="tp-footer-widget-content">
                  <div class="tp-footer-logo">
                    <nuxt-link href="/">
                      <img src="/img/logo/logo_peru.jpeg" alt="Boot Training Peru" style="max-width: 170px;">
                    </nuxt-link>
                  </div>
                  <p class="tp-footer-desc">Boot Training Peru es una tienda especializada en zapatillas para entrenamiento, running y uso casual.
                  </p>
                  <div class="tp-footer-social">
                    <!-- social links -->
                    <footer-social-links/>
                    <!-- social links -->
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div class="tp-footer-widget footer-col-2 mb-50">
                <h4 class="tp-footer-widget-title">Tienda</h4>
                <div class="tp-footer-widget-content">
                  <ul>
                    <li><nuxt-link href="/">Inicio</nuxt-link></li>
                    <li><nuxt-link href="/productos">Productos</nuxt-link></li>
                    <li><nuxt-link href="/blog">Blog</nuxt-link></li>
                    <li><nuxt-link href="/contacto">Contacto</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="tp-footer-widget footer-col-3 mb-50">
                <h4 class="tp-footer-widget-title">Informacion</h4>
                <div class="tp-footer-widget-content">
                  <ul>
                    <li><a href="#">Envios a todo el Peru</a></li>
                    <li><a href="#">Cambios y devoluciones</a></li>
                    <li><a href="#">Guia de tallas</a></li>
                    <li><a href="#">Politicas de compra</a></li>
                    <li><nuxt-link href="/contacto">Atencion al cliente</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="tp-footer-widget footer-col-4 mb-50">
                <h4 class="tp-footer-widget-title">Contactanos</h4>
                <div class="tp-footer-widget-content">
                  <div class="tp-footer-talk mb-20">
                    <span>Atencion y consultas</span>
                    <h4><nuxt-link href="/contacto">Escribenos</nuxt-link></h4>
                  </div>
                  <!-- footer contact start -->
                  <footer-contact/>
                  <!-- footer contact end -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- bottom area start -->
      <footer-bottom-area/>
      <!-- bottom area end -->
  </div>
</footer>
</template>

<script setup lang="ts">
defineProps<{ primary_style?: boolean; style_2?: boolean;style_3?: boolean; }>();
</script>
