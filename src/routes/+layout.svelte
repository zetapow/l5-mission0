<script>
   let {children} = $props();
   import "../app.css"
   import Header from "../components/Header.svelte";
   import Footer from "../components/Footer.svelte"


function returnTop(){
   document.body.scrollIntoView()
}


</script>

<div class="relative flex flex-col max-w-[1000px] mx-auto w-full text-sm sm:text-base min-h-screen">
   <div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[90]"}>
      <button aria-label="Up Arrow" onclick={returnTop} class="ml-auto rounded-full bg-red-900 text-white px-3 sm:px-4 hover:bg-red-300 cursor-pointer">
         <i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i>
      </button>
   </div>

   <Header />
   {@render children()}
   <Footer/>
</div>
<!-- {@render children()} -->

