<script>
   let links = [
      {name: 'Events', link: '#events'},
      {name: 'About Us', link: '#about'},
      {name: 'Contact Us', link: '#contact'},
   ]

</script>

<header class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-solid '}>
<!-- <header class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-solid ' + (y > 0 ? "py-4 bg-gray-900 border-b-pink-900": " py-6 bg-transparent border-transparent")}> -->

   <h1 class="font-medium" >
      NZ <b class="font-bold roboto text-red-500">Marketing</b>
   </h1>
   <div class="sm:flex ml-auto pr-6 items-center gap-4 hidden">
      {#each links as link, index}
         <a href={link.link} class="duration-500 hover:text-red-500" >
            <p>{link.name}</p>
         </a>
      {/each}
   </div>

   <a href="https://marketing.org.nz/company-membership" target="_blank" class="redShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-red-900">
      <div class="absolute top-0 right-full w-full h-full bg-red-500 opacity-25 group-hover:translate-x-full z-0 duration-400">
      </div>
      <h4 class="relative z-9">Become a Member</h4>
   </a>

</header>