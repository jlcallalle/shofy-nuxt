<template>
  <div>
    <announcement-marquee/>
    <header-two/>
    <main>
      <slot/>
    </main>
   <footer-one :style_2="true"/> 
   <back-to-top/>
   <whatsapp-float/>
   <!-- <modal-product /> -->
  </div>
</template>

