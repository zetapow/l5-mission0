<script>
   import Step from "./Step.svelte";

   let steps =[
      {name: 'Workshops', icon: 'fa-solid fa-dumbbell', src: 'img1.webp'},
      {name: 'Community', icon: 'fa-solid fa-people-group',src: 'img2.webp'},
      {name: 'Services', icon: 'fa-solid fa-toolbox', src: 'img3.webp'},
   ]

</script>

<main class="flex flex-col flex-1 p-4" >
   <section id="hero" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 sm:py-15">
      <div class="flex flex-col lg:justify-center text-center lg:text-left gap-5 md:gap-7 lg:gap-9" >
         <h2 class="font-bold text-3xl sm:text-4xl lg:text-5xl">Helping marketers be <span class="roboto text-red-600">brilliant</span></h2>

         <p class="text-base sm:text-lg md:text-xl">We help members develop, connect and have a voice. With a member base of over 7,500 businesses and marketing professionals, we connect and engage with over 10,000 people every week</p>

         <div class="flex items-center gap-2 w-full max-w-md mx-auto lg:mx-0">

            <div class= "flex-1 bg-white text-black rounded-full py-2 px-4"><input placeholder="Search the website"/></div>
            <a href="https://marketing.org.nz/contact-us" target="_blank" class="redShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl relative overflow-hidden px-4 py-2 group rounded-full bg-white text-red-600">
               <div class="absolute top-0 right-full w-full h-full bg-red-500 opacity-25 group-hover:translate-x-full z-0 duration-400">
               </div>
               <h4 class="relative z-9">&rarr; Search  &larr;</h4>
            </a>
         </div>

         
         <div class="relative shadow-2xl grid place-items-center">
            <img src="/blog-image.webp" class="object-cover z-[2] max-h-[50vh]" alt="">
         </div>

      </div>
   </section>

   <section id="events" class="py-15 lg:py-25 flex flex-col gap-20">

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
         <Step step={steps[0]}>
            <p>
               Our workshops are developed locally for New Zealand marketers and are taught by specialist practitioners, meeting the highest standards for marketing professionals
            </p>

         </Step>
         <Step step={steps[1]}>
            <p>
               Every day, the Marketing Association team interacts with people and businesses across the country, across sectors and marketing specialisations, and at different career levels
            </p>

         </Step>
         <Step step={steps[2]}>
            <p>
               We have a wide range of directories and services for businesses and consumers, including the advice line for member organisations
            </p>

         </Step>
      </div>
      <div class="flex flex-col gap-3 text-center" >
         <h5 class="text-lg sm:text-xl md:text-2xl">
            Events
         </h5>

         <h3 class="font-bold text-2xl sm:text-3xl md:text-4xl">Upcoming Events</h3>

         

      </div>
      <a href="https://marketing.org.nz/up-coming-events" target="_blank" class="mx-auto px-3 py-1 rounded-md border border-solid border-white flex items-center gap-3 -mb-5 sm:-mb-0 -mt-10 hover:border-red-600 duration-300">
            <i class="fa-regular fa-calendar-days" style="color: #fff"></i>
            <p>Marketing Events</p>
      </a>

      

   </section>

   <section id="about" class="py-10 pt-10 lg:pt-15 lg:py-15 flex flex-col gap-10 sm:gap-14 md:gap-18 relative">
      <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-3/4 before:h-1 before:bg-red-500 after:absolute after:bottom-0 after:right-0 after:w-3/4 after:h-1 after:bg-red-500 py-6">
      
         <h5 class="text-md sm:text-lg md:text-2xl">
            We help marketers be <span class="text-red-500">brilliant</span>
         </h5>
         <h3 class="text-3xl sm:text-4xl md:text-5xl">
            A bit about us
         </h3>
         <p class="mx-auto text-md sm:text-lg md:text-xl">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
         </p>

      </div>

   </section>
</main>
