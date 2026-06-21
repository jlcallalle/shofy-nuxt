<template>
  <section class="tp-feature-area tp-feature-border-2 pb-80">
    <div class="container">
      <div class="tp-feature-inner-2">
        <div class="row align-items-center">
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="tp-feature-item-2 d-flex align-items-start">
              <div class="tp-feature-icon-2 mr-10">
                <span>
                  <svg-delivery/>
                </span>
              </div>
              <div class="tp-feature-content-2">
                <h3 class="tp-feature-title-2">Envios a todo el Peru</h3>
                <p>Para todos nuestros modelos</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="tp-feature-item-2 d-flex align-items-start">
              <div class="tp-feature-icon-2 mr-10">
                <span>
                  <svg-refund/>
                </span>
              </div>
              <div class="tp-feature-content-2">
                <h3 class="tp-feature-title-2">Cambios y devoluciones</h3>
                <p>Compra con tranquilidad</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="tp-feature-item-2 d-flex align-items-start">
              <div class="tp-feature-icon-2 mr-10">
                <span>
                  <svg-discount/>
                </span>
              </div>
              <div class="tp-feature-content-2">
                <h3 class="tp-feature-title-2">Promociones especiales</h3>
                <p>En compras mayores a {{formatPrice(140)}}</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="tp-feature-item-2 d-flex align-items-start">
              <div class="tp-feature-icon-2 mr-10">
                <span>
                  <svg-support/>
              </span>
            </div>
            <div class="tp-feature-content-2">
              <h3 class="tp-feature-title-2">Atencion 24/7</h3>
              <p>Contactanos las 24 horas del dia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
