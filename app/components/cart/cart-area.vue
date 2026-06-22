<template>
  <section class="tp-cart-area pb-120">
    <div class="container">
      <div v-if="cartStore.cart_products.length === 0" className='text-center pt-50'>
        <h3>No hay productos en el carrito</h3>
        <nuxt-link href="/productos" className="tp-cart-checkout-btn mt-20">Continuar comprando</nuxt-link>
      </div>
      <div v-else class="row">
        <div class="col-xl-9 col-lg-8">
            <div class="tp-cart-list mb-25 mr-30">
              <table>
                  <thead>
                    <tr>
                      <th colspan="2" class="tp-cart-header-product">Producto</th>
                      <th class="tp-cart-header-price">Precio</th>
                      <th class="tp-cart-header-quantity">Cantidad</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- cart item start -->
                    <cart-item v-for="item in cartStore.cart_products" :key="item.id" :item="item" />
                    <!-- cart item end -->
                  </tbody>
                </table>
            </div>
            <div class="tp-cart-bottom mr-30">
              <div class="row align-items-end">
                  <div class="col-xl-6 col-md-8">
                    <div class="tp-cart-coupon">
                        <form @submit.prevent="handleCouponSubmit">
                          <div class="tp-cart-coupon-input-box">
                              <label>Código de cupón:</label>
                              <div class="tp-cart-coupon-input d-flex align-items-center">
                                <input type="text" placeholder="Ingresa el código de cupón" v-model="couponCode">
                                <button type="submit">Aplicar</button>
                              </div>
                          </div>
                        </form>
                    </div>
                  </div>
                  <div class="col-xl-6 col-md-4">
                    <div class="tp-cart-update text-md-end">
                        <button @click="cartStore.clear_cart()" type="button" class="tp-cart-update-btn">Vaciar carrito</button>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="tp-cart-checkout-wrapper">
              <div class="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                  <span class="tp-cart-checkout-top-title">Subtotal</span>
                  <span class="tp-cart-checkout-top-price">
                    {{formatPrice(cartStore.totalPriceQuantity.total)}}
                  </span>
              </div>
              <div class="tp-cart-checkout-shipping">
                  <h4 class="tp-cart-checkout-shipping-title">Envío</h4>
                  <div class="tp-cart-checkout-shipping-option-wrapper">
                    <div class="tp-cart-checkout-shipping-option">
                        <input id="flat_rate" type="radio" name="shipping">
                        <label @click="handleShippingCost(20)" for="flat_rate">Tarifa fija: <span>{{ formatPrice(20) }}</span></label>
                    </div>
                    <div class="tp-cart-checkout-shipping-option">
                        <input id="local_pickup" type="radio" name="shipping">
                        <label @click="handleShippingCost(25)" for="local_pickup">Recojo en tienda: <span> {{ formatPrice(25) }}</span></label>
                    </div>
                    <div class="tp-cart-checkout-shipping-option">
                        <input id="free_shipping" type="radio" name="shipping">
                        <label @click="handleShippingCost('free')" for="free_shipping">Envío gratis</label>
                    </div>
                  </div>
              </div>
              <div class="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                  <span>Total</span>
                  <span>{{formatPrice(cartStore.totalPriceQuantity.total + shipCost)}}</span>
              </div>
              <div class="tp-cart-checkout-proceed">
                  <nuxt-link href="/checkout" class="tp-cart-checkout-btn w-100">Finalizar compra</nuxt-link>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCartStore } from "@/pinia/useCartStore";
const cartStore = useCartStore();
let shipCost = ref<number>(0);
let couponCode = ref<string>('');

// handleCouponSubmit
const handleCouponSubmit = () => {
  console.log(couponCode.value)
}

// handle shipping cost 
const handleShippingCost = (value:number | string) => {
    if(value === 'free'){
      shipCost.value = 0;
    }
    else {
      shipCost.value = value as number;
    }
}
</script>
