<template>
  <option  >
    {{ city.name }}
  </option>
</template>


<script>
export default {
  props: {
    city: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  
};
</script>