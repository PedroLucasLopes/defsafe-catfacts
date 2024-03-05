<template>
  <div class="bg-mid-beige customGrid">
    <div class="mt-24 ml-28 flex-col customResponsiveText">
      <h2 class="uppercase font-extrabold text-4xl text-dark-purple mb-24">
        Cat Fact:
      </h2>
      <p
        class="text-mid-purple text-3xl pr-20 mb-24"
        v-if="catfacts?.catfact"
        :key="index"
      >
        {{ catfacts?.catfact }}
      </p>
      <button
        class="bg-mid-purple w-80 h-14 transition-colors duration-300 ease-in-out hover:bg-dark-purple text-light-beige text-lg font-bold uppercase py-2 px-4 border border-mid-purple rounded-lg customShadow flex justify-center gap-3 pt-3"
        @click="this.$router.go()"
      >
        <IconRefresh />
        Get a Random Cat Fact
      </button>
    </div>
    <div class="catsGrid mt-7">
      <div>
        <img
          class="rounded-xl customImageBigPicture"
          src="https://placekitten.com/g/700/700"
          alt="Cat"
        />
      </div>
      <div>
        <img
          class="rounded-xl mb-12 customImageMidPicture"
          src="https://placekitten.com/g/250/300"
          alt="Cat"
        />
        <img
          class="rounded-xl customImageLittlePicture"
          src="https://placekitten.com/g/250/350"
          alt="Cat"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: catfacts } = await useAsyncData("catfacts", () => {
  return $fetch("/api/catfacts", { method: "get" });
});
</script>
