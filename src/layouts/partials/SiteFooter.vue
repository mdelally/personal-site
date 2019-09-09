<template>
  <footer class="container m-auto mt-32 mb-8 text-center text-gray-400 border-t-2 border-gray-400">
    <p
      class="mt-8 p-4 font-bold"
    >Copyright&copy;{{ new Date().getFullYear() }} Michael DeLally, All Rights Reserved.</p>
    <p class="italic">
      Built with
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="w-4 h-4 inline-block fill-current"
      >
        <path
          d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"
        />
      </svg> using
      <a href="https://gridsome.org">Gridsome</a> and
      <a href="https://tailwindcss.com">TailwindCSS</a>.
    </p>
  </footer>
</template>

<script>
export default {
  name: "site-footer"
};
</script>