<template>
  <div class="main">
    <HeaderView
      v-bind:citys="citys"
      v-bind:coords="coords"
      v-bind:choisen_city="choisen_city"
      v-bind:phone="phone"
      v-on:chooseCity="chooseCity"
      @updateCoords="onUpdateCoords"
      @updateCity="onUpdateCity"
    />
    <BannerView />
    <PlusesView />
    <LoaderView v-if="load_goods" />
    <GoodsView v-else-if="products.length" v-bind:products="products" />
    <p v-else>No products!</p>

    <ReasonsView />
    <VideoView />
    <FormView />
    <PartnersView />
    <LoaderView v-if="loading" />
    <OtzList v-else-if="feedbacks.length" v-bind:feedbacks="feedbacks" />
    <p v-else>No feedbacks!</p>
    <MapView v-bind:coords="coords" />
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView";
import BannerView from "@/components/BannerView";
import PlusesView from "@/components/PlusesView";
import GoodsView from "@/components/GoodsView";
import ReasonsView from "@/components/ReasonsView";
import VideoView from "@/components/VideoView";
import FormView from "@/components/FormView";
import PartnersView from "@/components/PartnersView";
import OtzList from "@/components/OtzList";
import MapView from "@/components/MapView";
import FooterView from "@/components/FooterView";
import LoaderView from "@/components/LoaderView";

export default {
  name: "app",
  data() {
    return {
      feedbacks: [],
      loading: true,
      products: [],
      load_goods: true,
      coords: [59.204057, 39.840256],
      citys: [],
      choisen_city: "Москва",
      phone: "8-985-344-76-46",
    };
  },

  mounted() {
    this.getFeedbacks();
    this.getGoods();
    this.getCitys();
  },

  methods: {
    getFeedbacks() {
      fetch("http://91.206.92.155:8001/feedback/")
        .then((response) => response.json())
        .then((json) => {
          setTimeout(() => {
            console.log("223213213213");

            this.feedbacks = json.results;
            this.loading = false;
          }, 200);
        });
    },
    getGoods() {
      fetch("http://91.206.92.155:8001/products/")
        .then((response) => response.json())
        .then((json) => {
          setTimeout(() => {
            this.products = json.results;
            this.load_goods = false;
          }, 200);
        });
    },
    getCitys() {
      fetch("http://91.206.92.155:8001/city/")
        .then((response) => response.json())
        .then((json) => {
          this.citys = json.results;
        });
    },
    chooseCity(name) {
      console.log(name);
      this.choisen_city = name;
      if (name === "Вологда") {
        this.coords = [59.204057, 39.840256];
      }
      if (name === "Москва") {
        this.coords = [68.204057, 45.840256];
      }
      if (name === "Санкт-Петербург") {
        this.coords = [39.204057, 29.840256];
      }
    },
    onUpdateCoords(newCoords) {
      this.coords = newCoords;
    },
    onUpdateCity(name) {
      if (name === "Вологда") {
        this.phone = "+8-921-333-12-12";
      }
      if (name === "Москва") {
        this.phone = "+8-985-344-76-46";
      }
      this.choisen_city = name;
      if (name === "Санкт-Петербург") {
        this.phone = "+84943245648";
        this.choisen_city = "Санкт-Петербу";
      }
    },
  },
  components: {
    HeaderView,
    BannerView,
    PlusesView,
    GoodsView,
    ReasonsView,
    VideoView,
    FormView,
    PartnersView,
    OtzList,
    MapView,
    FooterView,
    LoaderView,
  },
};
</script>