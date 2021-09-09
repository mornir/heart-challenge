<template>
  <div class="flex row flex-center">
    <button @click="signInWithDiscord">Login with Discord</button>
  </div>
</template>

<script>
import { supabase } from "../supabase"

export default {
  name: "Auth",
  data() {
    return {
      user: null,
      session: null,
    }
  },
  methods: {
    signInWithDiscord() {
      supabase.auth.signIn({
        provider: "discord",
      })
    },
  },
  created() {
    supabase.auth.onAuthStateChange(async (event, session) => {
      this.user = session?.user ?? null
    })
  },
}
</script>
