<template>
  <div class="good-card">
    <img
      :src="good.images['0'].image.medium_square_crop"
      alt="${good.name}"
      :data-preview-src="good.images['0'].image.medium_square_crop"
      v-on:click="$emit('showPreview', index)"
    />
    <div class="goods_main_items_item_title">
      {{ good.name }}
    </div>
    <div class="goods_main_items_item_row">
      <div class="goods_main_items_item_row_rub">{{ good.price }} руб/комп</div>
      <div class="goods_main_items_item_row_count">
        <div class="goods_main_items_item_row_count_num">{{ good.count }}</div>
        комп.
      </div>
    </div>
    <div class="goods_main_items_item_btn">
      <div class="goods_main_items_item_btn_b">Заказать</div>
    </div>
  </div>
  <!-- Overlay to display the preview image -->
  <div
    id="preview-overlay"
    class="modal"
    tabindex="-1"
    role="dialog"
    style="display: none"
    v-on:click="$emit('closePreview')"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            id="close-preview-button"
            aria-label="Close"
            v-on:click="$emit('closePreview')"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <img id="preview-image" src="" alt="Preview" />
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
export default {
  props: {
    good: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  
};
</script>