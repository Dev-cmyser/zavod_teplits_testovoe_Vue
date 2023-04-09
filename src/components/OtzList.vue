<template>
  <section class="otz" id="otz">
    <div class="container">
      <div class="otz_main">
        <div class="reasons_main_title">отзывы наших клиентов</div>
        <div class="margin" style="margin-top: 80px">
          <div class="row">
            <div class="row-sm-4" id="feedback-list">
              <!-- feedback	 cards will be dynamically generated and inserted here -->
              <FeedbackItem
                v-for="(feedback, i) of feedbacks"
                v-bind:feedback="feedback"
                v-bind:index="i"
                v-bind:key="i"
              />
            </div>
          </div>
        </div>
        <!-- <div class="otz_main_items">
          <FeedbackItem
            v-for="(feedback, i) in feedbacks"
            v-bind:feedback="feedback"
            v-bind:index="i"
            v-bind:key="i"
          />
        </div> -->
      </div>
    </div>
  </section>
</template>


<script>
import FeedbackItem from "@/components/FeedbackItem";
export default {
  props: ['feedbacks'],
  components: {
    FeedbackItem,
  },
};
</script>