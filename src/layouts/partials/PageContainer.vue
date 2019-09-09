<template>
  <div class="flex flex-col md:flex-row">
    <div class="mr-8 mb-8 w-full md:w-1/4 md:text-right">
      <h1 class="text-4xl text-brand-500">{{ title }}</h1>
    </div>

    <section class="content text-xl md:text-2xl">
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: "page-container",
  props: ["title"]
};
</script>