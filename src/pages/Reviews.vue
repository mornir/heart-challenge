<template>
  <div>
    <h1>Reviews</h1>
    <h2>User: {{ user }}</h2>
  </div>
</template>

<script>
import { mapState } from "pinia"
import { store } from "../store"
import { supabase } from "../supabase"
export default {
  name: "Reviews",
  computed: {
    // gives access to this.counter inside the component
    // same as reading from store.counter
    ...mapState(store, ["user"]),
  },
  created() {
    const user = supabase.auth.user()
    const session = supabase.auth.session()
    console.log(session)
    console.log("hello")
  },
  beforeRouteEnter() {
    if (supabase.auth.user()) {
      return true
    } else {
      return "/"
    }
  },
}
</script>
