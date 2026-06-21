<template>
  <productos-area
    :list_style="list_style"
    :full_width="full_width"
    :shop_1600="shop_1600"
    :shop_right_side="shop_right_side"
    :shop_no_side="shop_no_side"
  />
</template>

<script setup lang="ts">
defineProps<{
  list_style?: boolean;
  full_width?: boolean;
  shop_1600?: boolean;
  shop_right_side?: boolean;
  shop_no_side?: boolean;
}>();
</script>
