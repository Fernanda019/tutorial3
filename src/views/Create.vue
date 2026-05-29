<template>
  <div>
    <h1>Create Post</h1>

    <form @submit.prevent="save">
      <input v-model="title" placeholder="Title" />
      <textarea v-model="body" placeholder="Body"></textarea>

      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import { createPost } from "../services/PostService";

export default {
  name: "CreateView",

  data() {
    return {
      title: "",
      body: "",
    };
  },

  methods: {
    async save() {
      await createPost({
        title: this.title,
        body: this.body,
      });

      this.$router.push("/");
    },
  },
};
</script>