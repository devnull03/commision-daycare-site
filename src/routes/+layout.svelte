<script>
  import Rainbow from "$lib/Rainbow.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import { fade, fly } from "svelte/transition";
  import "../app.css";
  import { onMount } from "svelte";
  import { page, navigating } from "$app/stores";

  let scrollY = 0;
  let load = false;
  let firstLoad = true;

  $: if ($navigating) {
    load = false;
  } else {
    if (!firstLoad) load = true;
  }

  onMount(() => {
    firstLoad = false;
    load = true;
  });
</script>

<svelte:head>
  <title>{import.meta.env.VITE_COMPANY_NAME}</title>
</svelte:head>

<svelte:window bind:scrollY />

<Header />

{#key load}
  <main
    class="h-full mt-20 relative overflow-clip"
    in:fly={{ y: 600, duration: 800 }}
  >
    <div class="absolute bottom-[10vh] right-[7vw]">
      <Rainbow scale={0.4} />
    </div>

    <div class="absolute top-[15vh] -right-[30vw]">
      <Rainbow />
    </div>

    <div class="absolute top-[120vh] -left-[7vw]">
      <Rainbow scale={0.3} />
    </div>

    <div class="absolute top-[150vh] -right-[7vw]">
      <Rainbow scale={0.26} />
    </div>

    <slot />

    <Footer />
  </main>
{/key}

{#if scrollY !== 0}
  <button
    transition:fade
    class="fixed right-6 bottom-6 z-[999] rounded-full object-cover bg-slate-100 py-0.5 group hover:-translate-y-1 transition-all duration-500"
    on:click={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    <span
      class="fa fa-angle-left rotate-90 py-4 px-5 group-hover:scale-110 transition-all duration-500"
    ></span>
  </button>
{/if}
