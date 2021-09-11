<template>
  <div class="flex gap-x-4">
    <button
      @click="signInWithDiscord"
      class="px-4 py-2 font-medium text-white rounded-sm bg-primary"
    >
      Sign In with Discord
    </button>
    <button @click="logout" class="px-4 py-2 border">Log out</button>
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
    logout() {
      supabase.auth.signOut()
    },
  },
  created() {
    supabase.auth.onAuthStateChange(async (event, session) => {
      this.user = session?.user ?? null
    })
  },
}
</script>
