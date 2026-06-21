<template>
  <footer>
    <div class="tp-footer-area tp-footer-style-2 tp-footer-style-3 tp-footer-style-4"  style="background-color: #F5F5F5;" data-bg-color="#F5F5F5">
      <div class="tp-footer-top pt-95 pb-40">
          <div class="container">
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div class="tp-footer-widget footer-col-4-1 mb-50">
                      <div class="tp-footer-logo">
                        <nuxt-link href="/">
                            <img src="/img/logo/logo_peru.jpeg" alt="Boot Training Peru" style="max-width: 170px;">
                        </nuxt-link>
                      </div>
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
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div class="tp-footer-widget footer-col-4-2 mb-50">
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
                <div class="col-xl-3 col-lg-2 col-md-4 col-sm-5">
                  <div class="tp-footer-widget footer-col-4-3 mb-50">
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
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-7">
                  <div class="tp-footer-widget footer-col-4-4 mb-50">
                      <h4 class="tp-footer-widget-title">Novedades</h4>
                      <div class="tp-footer-widget-content">
                        <div class="tp-footer-subscribe">
                            <p>Recibe lanzamientos, promociones y novedades de Boot Training Peru.</p>
                            <div class="tp-footer-subscribe-form mb-30">
                              <form action="#">
                                  <div class="tp-footer-subscribe-input">
                                    <input type="email" placeholder="Ingresa tu correo">
                                    <button type="submit">Suscribirme</button>
                                  </div>
                              </form>
                            </div>
                            <div class="tp-footer-social-4 tp-footer-social">
                              <h4 class="tp-footer-social-title-4">Siguenos</h4>
                               <!-- social links -->
                               <footer-social-links/>
                               <!-- social links -->
                            </div>
                        </div>
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

</script>
