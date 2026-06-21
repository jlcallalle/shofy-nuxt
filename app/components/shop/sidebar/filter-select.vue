<template>
    <div class="tp-shop-top-select text-md-end">
      <ui-nice-select
        :options="[
          { value: 'default-sorting', text: 'Orden predeterminado' },
          { value: 'low-to-high', text: 'Menor precio' },
          { value: 'high-to-low', text: 'Mayor precio' },
          { value: 'new-added', text: 'Nuevos modelos' },
          { value: 'on-sale', text: 'En oferta' },
        ]"
        name="Ordenar"
        :default-current="0"
        @onChange="handleSelect"
      />
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['handleSelectFilter'])
const handleSelect = (e: { value: string; text: string }) => {
  emit('handleSelectFilter', e);
};
</script>
