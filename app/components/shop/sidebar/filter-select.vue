<template>
    <div class="tp-shop-top-select text-md-end">
      <ui-nice-select
        :options="options"
        name="Ordenar"
        :default-current="0"
        @onChange="handleSelect"
      />
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    hideOffer?: boolean;
  }>(),
  {
    hideOffer: false,
  }
);

const emit = defineEmits(['handleSelectFilter'])
const options = computed(() => {
  const items = [
    { value: 'default-sorting', text: 'Orden predeterminado' },
    { value: 'low-to-high', text: 'Menor precio' },
    { value: 'high-to-low', text: 'Mayor precio' },
    { value: 'new-added', text: 'Nuevos modelos' },
    { value: 'on-sale', text: 'En oferta' },
  ];

  return props.hideOffer
    ? items.filter((item) => item.value !== 'on-sale')
    : items;
});

const handleSelect = (e: { value: string; text: string }) => {
  emit('handleSelectFilter', e);
};
</script>
