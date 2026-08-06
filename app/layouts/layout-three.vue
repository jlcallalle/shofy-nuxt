<template>
  <div>
    <announcement-marquee/>
    <header-three/>
    <main>
      <slot/>
    </main>
   <footer-one :style_3="true"/> 
   <back-to-top/>
   <whatsapp-float/>
   <!-- <modal-product /> -->
  </div>
</template>

