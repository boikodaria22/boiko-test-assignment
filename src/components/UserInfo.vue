<template>
  <v-col :cols="defaultCols" :md="defaultMd" class="py-1 px-4 py-md-2">
    <div>
      <span class="label">{{ label }}:</span>
    </div>
    <div v-if="isLink && href">
      <a :href="href" target="_blank" rel="noopener noreferrer">{{ value }}</a>
    </div>
    <div v-else>
      <span>{{ value }}</span>
    </div>
  </v-col>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  value: string;
  isLink?: boolean;
  href?: string;
  cols?: number | string;
  md?: number | string;
}>();

// Default prop values
const defaultCols = props.cols ?? 12;
const defaultMd = props.md ?? 6;
</script>

<style scoped>
.label {
  font-size: 12px;
  font-weight: bold;
  color: black;
}

a {
  text-decoration: none;
  color: rgb(72, 169, 166);
}

a:hover {
  color: rgb(72, 169, 166, 0.3);
}

span {
  color: black;
}
</style>
