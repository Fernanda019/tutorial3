<template>
  <div>
    <h1>Edit Post</h1>

    <form @submit.prevent="update">
      <input v-model="title" />
      <textarea v-model="body"></textarea>

      <button type="submit">Actualizar</button>
    </form>
  </div>
</template>

<script>
import { getPost, updatePost } from "../services/PostService";

export default {
  name: "EditView",

  data() {
    return {
      title: "",
      body: "",
    };
  },

  async mounted() {
    const post = await getPost(this.$route.params.id);

    this.title = post.get("title");
    this.body = post.get("body");
  },

  methods: {
    async update() {
      await updatePost(this.$route.params.id, {
        title: this.title,
        body: this.body,
      });

      this.$router.push("/");
    },
  },
};
</script>