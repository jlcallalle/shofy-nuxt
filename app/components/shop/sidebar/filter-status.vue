<template>
  <div class="tp-shop-widget-content">
    <div class="tp-shop-widget-checkbox">
      <ul class="filter-items filter-checkbox">
        <li v-for="(s, i) in status" :key="i" class="filter-item checkbox">
          <input :id="s.value" type="checkbox" name="status" />
          <label @click="handleStatus(s.value)" :for="s.value" :class="`${route.query?.status === s.value ? 'active': ''}`">
            {{ s.label }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const status = ref([
  { label: "En oferta", value: "on-sale" },
  { label: "En stock", value: "in-stock" },
]);

function handleStatus(status: string) {
  router.push({
    query: {
      ...router.currentRoute.value.query,
      status: router.currentRoute.value.query.status
        ? router.currentRoute.value.query.status.includes(status)
          ? (router.currentRoute.value.query.status as string)
            .split(",")
            .filter((item: string) => item !== status)
            .join(",")
          : status
        : status
    }
  });
}
</script>
