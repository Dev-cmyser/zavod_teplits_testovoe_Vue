<template>
  <section class="map" id="map">
    <div class="container">
      <div class="map_main">
        <div class="reasons_main_title">мы на карте</div>
      </div>
    </div>
    <yandex-map class="map_yan" :coordinates="coords" :zoom="zoom" :settings="settings">
      <YandexMarker :coordinates="coords" :marker-id="123">
      
    </YandexMarker>
    </yandex-map>
  </section>
</template>

<script>
// import { defineComponent } from "vue";
import { yandexMap, YandexMarker } from "vue-yandex-maps";

export default ({
  props: ['coords'],
  components: {
    yandexMap,
    YandexMarker,
  },
  data() {
    return {
      zoom: 12,
      settings: {
        apiKey: "d76ea29f-f43f-471d-8124-45cf33f4afcf",
        lang: "ru_RU",
        coordorder: "latlong",
        enterprise: false,
        version: "2.1",
      },
    };
  },
});
</script>
