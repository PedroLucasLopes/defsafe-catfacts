<template>
  <div class="bg-mid-beige customGrid">
    <div class="mt-24 ml-28 flex-col customResponsiveText">
      <h2 class="uppercase font-extrabold text-4xl text-dark-purple mb-24">
        Cat Fact:
      </h2>
      <transition
        name="fade"
        @before-enter="beforeEnter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @after-leave="afterLeave"
      >
        <p
          class="text-mid-purple text-3xl pr-20 mb-24"
          v-if="catfacts"
          :key="catfacts"
        >
          {{ catfacts }}
        </p>
      </transition>
      <button
        class="bg-mid-purple w-80 h-14 transition-colors duration-300 ease-in-out hover:bg-dark-purple text-light-beige text-lg font-bold uppercase py-2 px-4 border border-mid-purple rounded-lg customShadow flex justify-center gap-3 pt-3"
        @click="fetchCatFact()"
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
import { ref, onMounted, watch } from "vue";

const catfacts = ref(null);
const showCatFact = ref(false);

const fetchCatFact = async () => {
  try {
    const response = await $fetch("/api/catfacts", { method: "get" });
    catfacts.value = response.catfact;
    showCatFact.value = true;
  } catch (error) {
    console.error("Erro ao buscar dados da API", error);
  }
};

onMounted(() => {
  fetchCatFact();
});

// Watcher para iniciar a animação quando a frase muda
watch(
  () => catfacts.value,
  () => {
    showCatFact.value = false;
  }
);

// Métodos para controle da animação de fade
const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.maxHeight = "0";
};

const afterEnter = (el) => {
  el.style.transition = "opacity 0.5s, max-height 0.5s";
  el.style.opacity = 1;
  el.style.maxHeight = el.scrollHeight + "px";
};

const beforeLeave = (el) => {
  el.style.transition = "opacity 0.5s, max-height 0.5s";
  el.style.opacity = 0;
  el.style.maxHeight = "0";
};

const afterLeave = (el) => {
  el.style.transition = "";
  el.style.maxHeight = "";
};

// Toggle para reiniciar a transição
const toggleCatFact = () => {
  showCatFact.value = false;
  fetchCatFact();
};
</script>
