<template>
  <div>
    <navigation />

    <transition tag="section" name="fade" mode="out-in" appear>
      <main class="container m-auto pt-8 px-8">
        <slot />
      </main>
    </transition>

    <site-footer />
  </div>
</template>

<script>
import Navigation from "./partials/Navigation.vue";
import SiteFooter from "./partials/SiteFooter.vue";

export default {
  components: { Navigation, SiteFooter }
};
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>