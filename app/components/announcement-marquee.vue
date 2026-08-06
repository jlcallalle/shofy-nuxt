<template>
  <div class="announcement-marquee" role="status" aria-label="Promocion">
    <div class="announcement-marquee__content">
      <span class="announcement-marquee__item">TODO EL MES DE AGOSTO, DELIVERY GRATIS 🚚</span>
    </div>
    <div class="announcement-marquee__content" aria-hidden="true">
      <span class="announcement-marquee__item">TODO EL MES DE AGOSTO, DELIVERY GRATIS 🚚</span>
    </div>
  </div>
</template>

<style scoped>
.announcement-marquee {
  --announcement-marquee-gap: 20px;
  --announcement-marquee-direction: normal;
  --announcement-marquee-speed: 10s;

  display: flex;
  gap: var(--announcement-marquee-gap);
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  background-color: #000;
  color: #fff;
}

.announcement-marquee__content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-shrink: 0;
  gap: var(--announcement-marquee-gap);
  min-width: 100%;
  white-space: nowrap;
  animation: var(--announcement-marquee-speed) linear infinite var(--announcement-marquee-direction) running announcement-marquee;
}

.announcement-marquee__item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
}

@keyframes announcement-marquee {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(calc(-100% - var(--announcement-marquee-gap)), 0, 0);
  }
}

@media (max-width: 575px) {
  .announcement-marquee__item {
    min-height: 34px;
    font-size: 13px;
  }
}
</style>
