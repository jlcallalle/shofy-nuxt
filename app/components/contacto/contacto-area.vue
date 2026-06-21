<template>
    <!-- breadcrumb area start -->
    <section class="breadcrumb__area include-bg text-center pt-95 pb-50">
      <div class="container">
          <div class="row">
            <div class="col-xxl-12">
                <div class="breadcrumb__content p-relative z-index-1">
                  <h3 class="breadcrumb__title">Contacto</h3>
                  <div class="breadcrumb__list">
                      <span><nuxt-link href="/">Inicio</nuxt-link></span>
                      <span>Contacto</span>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  <!-- breadcrumb area end -->

  <!-- contact area start -->
  <section class="tp-contact-area pb-100">
    <div class="container">
        <div class="tp-contact-inner">
          <div class="row">
              <div class="col-xl-9 col-lg-8">
                <div class="tp-contact-wrapper">
                    <h3 class="tp-contact-title">Enviar mensaje</h3>

                    <div class="tp-contact-form">
                      <!-- form start -->
                      <forms-contact-form/>
                      <!-- form end -->
                      <p class="ajax-response"></p>
                    </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4">
                <div class="tp-contact-info-wrapper">
                    <div class="tp-contact-info-item">
                      <div class="tp-contact-info-icon">
                          <span>
                            <img src="/img/contact/contact-icon-1.png" alt="">
                          </span>
                      </div>
                      <div class="tp-contact-info-content">
                          <p data-info="mail"><a href="mailto:contacto@boottrainingperu.com">contacto@boottrainingperu.com</a></p>
                          <p data-info="phone"><a href="tel:947724459">+51 947724459</a></p>
                      </div>
                    </div>
                    <div class="tp-contact-info-item">
                      <div class="tp-contact-info-icon">
                          <span>
                            <img src="/img/contact/contact-icon-2.png" alt="">
                          </span>
                      </div>
                      <div class="tp-contact-info-content">
                          <p>
                            <a href="https://www.google.com/maps/search/?api=1&query=San+Borja,+Lima,+Peru" target="_blank">
                                Calle 27 s/n San Borja. <br> Lima, Perú
                            </a>
                          </p>
                      </div>
                    </div>
                    <div class="tp-contact-info-item">
                      <div class="tp-contact-info-icon">
                          <span>
                            <img src="/img/contact/contact-icon-3.png" alt="">
                          </span>
                      </div>
                      <div class="tp-contact-info-content">
                          <div class="tp-contact-social-wrapper mt-5">
                            <h4 class="tp-contact-social-title">Encuentranos en redes sociales</h4>

                            <div class="tp-contact-social-icon">
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </section>
    <!-- contact area end -->

  <!-- map area start -->
  <section class="tp-map-area pb-120">
    <div class="container">
        <div class="row">
          <div class="col-xl-12">
              <div class="tp-map-wrapper">
                <div class="tp-map-hotspot">
                    <span class="tp-hotspot tp-pulse-border">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="6" cy="6" r="6" fill="#821F40"/>
                      </svg>
                    </span>
                </div>
                <div class="tp-map-iframe">
                    <iframe src="https://www.google.com/maps?q=-12.0976,-77.0063&z=16&output=embed"></iframe>
                </div>
              </div>
          </div>
        </div>
    </div>
  </section>
  <!-- map area end -->
</template>

<script setup lang="ts">

</script>
