<script lang="ts">
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Program",
      href: "/program",
    },
    //     {
    //       name: "Contact",
    //       href: "/contact",
    //     },
  ];
</script>

<nav class="">
  <div
    class="top-0 bg-white shadow-md fixed h-24 w-full z-50 flex flex-row justify-between items-center px-6"
  >
    <a href="/" class="object-contain h-fit flex flex-col items-center lg:text-2xl font-light">
      <img src="/header_logo.png" class="h-14" alt="" />
      Care and Fun
    </a>

    <div class="flex flex-row justify-evenly gap-4 lg:gap-8 items-center">
      <!-- nav links -->
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-black text-opacity-65 text-lg font-bold hover:text-opacity-80 transition-colors duration-300 ease-in-out"
        >
          {link.name}
        </a>
      {/each}
      <a
        href="/contact"
        class="text-[#E4D4D4] p-1 px-3 bg-[#0E0E0ECC] rounded font-bold transition-colors duration-300 ease-in-out"
      >
        Contact
      </a>
    </div>
  </div>
</nav>
