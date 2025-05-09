<script>
   export let step;
</script>

<a href={step.href} target="_blank" class="p-2 sm:p-4 md:p-6 gap-4 rounded-lg border border-dashed border-red-500 text-center group cursor-pointer hover:border-red-100 duration-500">
   <div class="bg-gray-400 grid place-items-center px-3 text-3xl md:text-4xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-500">
      <i class={step.icon}></i>
   </div>

   <div class="flex flex-col">   
      <h3 class="font-medium text-2xl sm:text-3xl" >{step.name}</h3>
      <img src={step.src} class="object-center m-5" alt="">
   </div>

   <slot/>
   <div class="flex-1 flex justify-between gap-2 items-center">
      <div class="ml-auto cursor-pointer hover:text-red-800 duration-300 relative after:absolute after:top-0  after:right-full after:w-full after:h-full after:duration-300 hover:after:translate-x-full after:z-[-1] overflow-hidden after:bg-white">

         <p class="relative z-4">Learn more &rarr;</p>
      </div>
   </div>

</a>