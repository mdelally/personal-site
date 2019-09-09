<template>
  <div class="border-b-2 border-gray-400 pb-4 mb-16">
    <p class="text-gray-200 uppercase font-black" v-html="post.date" />
    <h2 class="text-3xl text-gray-0" v-html="post.title" />
    <p class="mt-8 mb-16 text-xl" v-html="post.description" />
    <div class="flex justify-end items-center my-4">
      <div class="text-sm text-gray-400 uppercase mr-4">
        <strong>{{ post.timeToRead }} min read</strong> &nbsp;
      </div>
      <g-link
        :to="post.path"
        class="text-sm btn px-8 py-4 no-underline bg-transparent border-2 border-brand-500 hover:bg-brand-500 hover:text-black"
      >Read More...</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style>
</style>