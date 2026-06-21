<template>
  <div class="tp-product-details-wrapper has-sticky">
    <div class="tp-product-details-category">
      <span>Boot Training Peru / {{product.parent}}</span>
    </div>
    <h3 class="tp-product-details-title">{{product.title}}</h3>

    <!-- inventory details -->
    <div class="tp-product-details-inventory d-flex align-items-center mb-10">
      <div class="tp-product-details-stock mb-10">
          <span>{{product.status}}</span>
      </div>
      <div class="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
          <div class="tp-product-details-rating">
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
          </div>
          <div class="tp-product-details-reviews">
            <span>({{product.reviews?.length}} resenas)</span>
          </div>
      </div>
    </div>
    <p>{{ textMore ? product.description : `${product.description.substring(0, 100)}...` }} <span @click="textMore = !textMore">{{textMore ? 'See less' : 'See more'}}</span></p>

    <!-- price -->
    <div class="tp-product-details-price-wrapper mb-20">
      <div v-if="product.discount > 0">
          <span class="tp-product-details-price old-price">{{ formatPrice(product.price,false) }}</span>
          <span class="tp-product-details-price new-price">
            {{formatPrice((Number(product.price) - (Number(product.price) * Number(product.discount)) / 100))}}
          </span>
        </div>
      <span v-else class="tp-product-details-price old-price">{{ formatPrice(product.price) }}</span>
    </div>

    <!-- variations -->
    <div v-if="hasColorData" class="tp-product-details-variation">
    <div class="tp-product-details-variation-item">
      <h4 class="tp-product-details-variation-title">Color:</h4>
      <div class="tp-product-details-variation-list">
        <button
          v-for="(item, i) in product.imageURLs"
          :key="i"
          @click="productStore.handleImageActive(item.img)"
          type="button"
          :class="['color', 'tp-color-variation-btn', item.img === productStore.activeImg ? 'active' : '']"
          style="margin-right:5px"
        >
          <span :data-bg-color="item.color?.clrCode" :style="`background-color:${item.color?.clrCode}`"></span>
          <span v-if="item.color && item.color.name" class="tp-color-variation-tootltip">
            {{ item.color.name }}
          </span>
        </button>
      </div>
    </div>
  </div>

  <!-- product countdown start -->
  <div v-if="product.offerDate?.endDate">
    <product-details-countdown :product="product"/>
  </div>
  <!-- product countdown end -->

    <!-- actions -->
    <div class="tp-product-details-action-wrapper">
      <h3 class="tp-product-details-action-title">Cantidad</h3>
      <div class="tp-product-details-action-item-wrapper d-flex align-items-center">
          <div class="tp-product-details-quantity">
            <div class="tp-product-quantity mb-15 mr-15">
                <span class="tp-cart-minus" @click="cartStore.decrement">
                  <svg-minus/>                                                            
                </span>
                <input class="tp-cart-input" type="text" :value="cartStore.orderQuantity" disabled>
                <span class="tp-cart-plus" @click="cartStore.increment">
                  <svg-plus-sm/>
                </span>
            </div>
          </div>
          <div class="tp-product-details-add-to-cart mb-15 w-100">
            <button @click="cartStore.addCartProduct(product)" class="tp-product-details-add-to-cart-btn w-100">Agregar al carrito</button>
          </div>
      </div>
      <nuxt-link :href="`/producto/${product.slug || product.id}`" class="tp-product-details-buy-now-btn w-100 text-center">Comprar ahora</nuxt-link>
    </div>
    <div class="tp-product-details-action-sm">
      <button @click="compareStore.add_compare_product(product)" type="button" class="tp-product-details-action-sm-btn">
          <svg-compare-3/>
          Comparar
      </button>
      <button  @click="wishlistStore.add_wishlist_product(product)" type="button" class="tp-product-details-action-sm-btn">
          <svg-wishlist-3/>
          Favoritos
      </button>
      <button type="button" class="tp-product-details-action-sm-btn">
          <svg-ask-question/>
          Hacer una pregunta
      </button>
    </div>

    <div v-if="isShowBottom">
      <div class="tp-product-details-query">
      <div class="tp-product-details-query-item d-flex align-items-center">
          <span>SKU:  </span>
          <p>{{product.sku}}</p>
      </div>
      <div class="tp-product-details-query-item d-flex align-items-center">
          <span>Categoria:  </span>
          <p>{{product.parent}}</p>
      </div>
      <div class="tp-product-details-query-item d-flex align-items-center">
          <span>Marca: </span>
          <p>Boot Training Peru</p>
      </div>
    </div>
    <div class="tp-product-details-social">
      <span>Compartir: </span>
      <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
      <a href="#"><i class="fa-brands fa-twitter"></i></a>
      <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
      <a href="#"><i class="fa-brands fa-vimeo-v"></i></a>
    </div>
    <div class="tp-product-details-msg mb-15">
      <ul>
          <li>Zapatillas Boot Training Peru</li>
          <li>Stock disponible por talla</li>
      </ul>
    </div>
    <div class="tp-product-details-payment d-flex align-items-center flex-wrap justify-content-between">
      <p>Guaranteed safe <br> & secure checkout</p>
      <img src="/img/product/icons/payment-option.png" alt="">
    </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/pinia/useProductStore';
import { type IProduct } from '@/types/product-type';
import { useCartStore } from "@/pinia/useCartStore";
import { useCompareStore } from "@/pinia/useCompareStore";
import { useWishlistStore } from "@/pinia/useWishlistStore";

// store
const compareStore = useCompareStore();
const wishlistStore = useWishlistStore();
const productStore = useProductStore();
const cartStore = useCartStore();
// props
const props = withDefaults(defineProps<{product:IProduct;isShowBottom?:boolean}>(), {
  isShowBottom:true,
})
let textMore = ref<boolean>(false)

const hasColorData = computed(() =>
  props.product.imageURLs.some(item => item?.color && item?.color?.name)
);

</script>
