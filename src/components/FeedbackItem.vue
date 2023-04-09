<template>
  <div class="otz_main_items_item">
    <img :src="feedback.photo" alt="" class="otz_main_items_item_img" />
    <div class="otz_main_items_item_title">{{ feedback.name }}</div>
    <div class="otz_main_items_item_text">
      {{ feedback.message }}
    </div>
  </div>
</template>
  
  <script>
export default {
    
  props: {
    feedback: {
      type: Object,
      required: true,
    },
    index: Number,
  },
};

</script>