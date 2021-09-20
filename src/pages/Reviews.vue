<template>
  <div class="p-8">
    <h1 class="text-5xl font-bold text-center">My Daily Reviews</h1>
    <!--     <h2>User: {{ user.user_metadata.full_name }}</h2> -->

    <button
      @click="addReview"
      class="flex items-center px-4 pt-3 pb-2 mx-auto mt-20 text-lg font-medium rounded-sm bg-primary gap-x-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
        />
        <path
          fill-rule="evenodd"
          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
          clip-rule="evenodd"
        />
      </svg>
      Add Review
    </button>

    <ul class="flex flex-col items-center mt-16">
      <li v-for="review in reviews" :key="review.id">
        <span class="text-xl">{{ review.date }}: {{ review.rating }}</span>
        <button class="px-4 py-2 ml-2 bg-primary" @click="edit(review.id)">
          EDIT
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { supabase } from '../supabase'
export default {
  name: 'Reviews',
  data() {
    return {
      user: {},
      reviews: [],
      isTodayReviewed: false,
    }
  },
  created() {
    this.user = supabase.auth.user()
    this.fetchReviews()
  },
  beforeRouteEnter() {
    if (supabase.auth.user()) {
      return true
    } else {
      return '/'
    }
  },

  methods: {
    async edit(id) {
      console.log(id)
      const newRating = prompt('Enter new rating')
      const { data, error } = await supabase
        .from('reviews')
        .update({ rating: newRating })
        .match({ id })

      this.fetchReviews()
    },
    async fetchReviews() {
      const { data, error, status } = await supabase.from('reviews').select()
      this.reviews = data
    },
    async addReview() {
      const { count } = await supabase
        .from('reviews')
        .select('date', { count: 'exact', head: true })
        .filter('created_by', 'eq', this.user.id)

      if (!count) {
        await supabase
          .from('reviews')
          .insert([{ rating: 8, date: new Date(), created_by: this.user.id }])
      } else {
        const { data, error } = await supabase
          .from('reviews')
          .update([{ rating: 6 }])
          .match({ date: '2021-09-19' })

        if (!error) {
          console.log(data)
        } else {
          console.log(error)
        }
      }
      this.fetchReviews()
    },
  },
}
</script>
