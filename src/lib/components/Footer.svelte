<script>
  import { navLinks } from "$lib/nav.store";
</script>

<footer class="lg:px-28 px-10 bg-[#231F20D4] backdrop-blur-lg">

  <div class="lg:pb-12 pb-4 lg:pt-20 flex lg:flex-row flex-col justify-around gap-10">

    <div class="flex flex-col items-center lg:gap-6 text-center">

      <img src="/favicon.png" alt="" class="scale-75 lg:scale-100" />
      <div class="flex flex-col items-center font-semibold">
        <p class="lg:text-3xl text-[#FFFFFFCC]">Care and fun Childcare Centre</p>
        <p class="lg:text-2xl text-[#FFFFFFA6]">
          31883 Mayne Ave, Abbotsford, BC V2T 4W9
        </p>

      </div>
    </div>

    <div
      class="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:grid-rows-3 lg:gap-14 text-[#FFFFFFA6] font-semibold lg:text-xl"
    >
      <a href="/">Home</a>
      <a href="/program">Program</a>

      {#each $navLinks as item}
        <a href={item.link}>{item.title}</a>
      {/each}
    </div>
  </div>

  <div
    class="w-full text-[#FFFFFF80] text-sm flex flex-row justify-center items-center border-t border-black py-8"
  >
    Copyright © 2024 - 2028 {import.meta.env.VITE_COMPANY_NAME}. All rights
    reserved.
  </div>

</footer>
