<script lang="ts">
  import { goto } from "$app/navigation";
  import { navLinks } from "$lib/nav.store";
</script>

<main class="flex flex-col lg:gap-24 gap-16 py-16 h-full">
  <div
    class="bg-[#D9D9D952] backdrop-blur-[30px] flex lg:flex-row flex-col items-center justify-between mx-8 lg:px-16 lg:mx-16 py-10 lg:py-0 rounded-xl shadow-2xl"
  >
    <div
      class="flex flex-col font-montserrat text-center items-center w-[80%] lg:w-[60%] justify-center gap-10 font-semibold"
    >
      <p class="text-[#000000A1] text-5xl lg:text-8xl">
        Your little star is our <span class="text-black"> Future.</span>
      </p>
      <p class="text-[#1E1E1E80] text-lg lg:text-2xl">
        Unleash the real capabilities of your younger version and let them fly
        in the skies you regret not exploring.
      </p>
      <div class="rainbow-gradient rounded-lg w-fit">
        <button
          class="rounded-lg p-2 px-4 font-bold text-lg lg:text-2xl bg-white border border-black text-[#000000D1] -translate-y-1 translate-x-1 hover:-translate-y-2 hover:translate-x-2 transition-all duration-500 ease-in-out"
          on:click={() => {
            goto("/program");
          }}>Know More</button
        >
      </div>
    </div>

    <div class="lg:flex hidden items-center justify-center py-16">
      <img src="/kid_playing.png" class="" alt="" />
    </div>
  </div>

  <div
    class="bg-[#D9D9D952] backdrop-blur-[30px] flex lg:flex-row flex-col-reverse justify-evenly lg:px-16 p-10 mx-8 lg:mx-48 rounded-xl shadow-2xl"
  >
    <div class="lg:w-1/2 flex items-center lg:justify-normal justify-center lg:py-16 pt-4 lg:pt-16">
      <img src="/kid1.png" alt="" class="h-28 lg:h-auto" />
    </div>

    <div
      class="flex flex-col lg:w-1/2 text-center lg:text-right justify-center gap-4 lg:gap-10 font-semibold"
    >
      <p class="text-[#000000C9] text-4xl font-bold">Play-Based Learning</p>
      <p class="text-[#1E1E1E80] text-lg lg:text-3xl">
        Emphasize play as a fundamental learning tool, offering diverse
        activities for creativity and skill development.
      </p>
    </div>
  </div>

  <div
    class="bg-[#D9D9D952] backdrop-blur-[30px] flex lg:flex-row flex-col justify-evenly lg:px-16 p-10 mx-8 lg:mx-48 rounded-xl shadow-2xl"
  >
    <div
      class="flex flex-col lg:w-1/2 text-center lg:text-left justify-center gap-4 lg:gap-10 font-semibold"
    >
      <p class="text-[#000000C9] text-4xl font-bold">Holistic Approach</p>
      <p class="text-[#1E1E1E80] text-lg lg:text-3xl">
        Address aspects like healthy lifestyle, awareness, respect, self-help
        skills, and continuous improvement.
      </p>
    </div>

    <div class="lg:w-1/2 flex items-center lg:justify-end justify-center lg:py-16 pt-4 lg:pt-16">
      <img src="/kid2.png" class="h-28 lg:h-auto" alt="" />
    </div>
  </div>

  <div
    class="bg-[#D9D9D952] backdrop-blur-[30px] flex flex-col justify-between gap-6 lg:p-16 p-6 lg:mx-16 mx-10 rounded-xl shadow-2xl font-semibold lg:text-3xl text-lg"
  >
    <p class="text-[#000000B2]">More</p>

    <div class="flex flex-wrap gap-2 lg:gap-6 text-[#000000C9]">
      {#each $navLinks as item}
        <div class="rainbow-gradient rounded-3xl">
          <a href={item.link}>
            <button
              class="bg-[#D9D9D9] lg:text-3xl rounded-3xl lg:py-2 lg:px-6 p-2 px-4 hover:-translate-y-2 hover:translate-x-2 transition-all duration-500 ease-in-out"
            >
              {item.title}
            </button>
          </a>
        </div>
      {/each}
    </div>
  </div>
</main>
