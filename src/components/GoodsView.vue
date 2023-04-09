<template>
  <section class="goods" id="goods">
    <div class="container">
      <div class="reasons_main_title">ВСЕГДА В НАЛИЧИИ</div>
      <div class="row">
        <div class="row-sm-4" id="product-list">
          <!-- Product cards will be dynamically generated and inserted here -->
          <GoodItem
            v-for="(good, i) of products"
            v-bind:good="good"
            v-bind:index="i"
            v-bind:key="i"
            v-on:showPreview="showPreview"
            v-on:closePreview="closePreview"
          />
        </div>
      </div>
      <!-- Container for the product cards -->

      <!-- Overlay to display the preview image -->
      <div
        id="preview-overlay"
        class="modal"
        tabindex="-1"
        role="dialog"
        style="display: none"
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
    </div>
  </section>
</template>

<script>
import GoodItem from "@/components/GoodItem";
export default {
  props: ["products"],
  components: {
    GoodItem,
  },
  methods: {
    showPreview(id) {
      const previewImageSrc =
        this.products[id].images["0"].image.medium_square_crop;
      document
        .querySelector("#preview-image")
        .setAttribute("src", previewImageSrc);
      document.querySelector("#preview-overlay").style.display = "flex";
    },
    closePreview() {
      document.querySelector("#preview-overlay").style.display = "none";
    },
  },
};
</script>