<template>
  <div class="main">
    <header class="header">
      <div class="container">
        <div class="header__container">
          <div class="header__content">
            <a href="#" class="header__logo">
              <img src="./img/logo.svg" alt="STANDART manufacture" />
            </a>

            <nav class="header-navbar">
              <a href="#goods" class="header-navbar__link">Каталог</a>
              <a href="#form" class="header-navbar__link">Расчет стоимости</a>
              <a href="#partners" class="header-navbar__link">Партнеры</a>
              <a href="#otz" class="header-navbar__link">Отзывы</a>
            </nav>
          </div>

          <div class="header__content">
            <div class="header-media">
              <div class="header-media__title">
                <img src="./img/icons/map-marker.svg" alt="#" />
                <span>{{ choisen_city }}</span>
              </div>

              <a
                v-on:click="showPreview"
                href="##"
                class="header-media__link header-media__link--nostroce"
                >Все города</a
              >
              <div id="modal" class="close-modal-btn" style="display: none">
                <select id="choices" @change="chooseCity($event)">
                  <option disabled selected>
                    -- select a city and check map --
                  </option>
                  <OptionView
                    v-for="(city, i) of citys"
                    v-bind:city="city"
                    v-bind:index="i"
                    v-bind:key="i"
                  />
                </select>
                <button v-on:click="closePreview" id="close-modal-btn">
                  Close
                </button>
              </div>
            </div>

            <div class="header-media">
              <div class="header-media__title">
                <img src="./img/icons/phone.svg" alt="#" />
                <a :href="phone">{{ phone }}</a>
              </div>

              <a
                :href="phone"
                class="header-media__link header-media__link--stroce"
                >Заказать звонок</a
              >
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import OptionView from "@/components/OptionView";
export default {
  props: {
    citys: Array,
    choisen_city: String,
    coords: Array,
    phone: String
  },
  components: {
    OptionView,
  },
  methods: {
    showPreview() {
      document.querySelector("#modal").style.display = "flex";
    },
    closePreview() {
      document.querySelector("#modal").style.display = "none";
    },
    chooseCity(event) {
      console.log(event.target.value);
      const name = event.target.value;
      this.$emit("updateCity", name);
      if (name === "Вологда") {
        this.$emit("updateCoords", [59.204057, 39.840256]);
      }
      if (name === "Москва") {
        this.$emit("updateCoords", [55.7504461, 37.6174943]);
      }
      if (name === "Санкт-Петербург") {
        this.$emit("updateCoords", [59.9342573496607, 30.299001419254488]);
      }
    },
  },
};
</script>

<style scoped>
.close-modal-btn {
  z-index: 999999999999999999999999999999999999 !important;
}
</style>
