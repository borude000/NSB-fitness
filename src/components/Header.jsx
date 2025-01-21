export default function Header() {
    return (
        <>
 <header class="text-greay-500 body-font">
   
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-black mb-4 md:mb-0">
    <img src="logo.jpg" height="200" width="130" />
      <span class="ml-3 font-bold text-2xl">NSB FITNESS</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href="/" class="mr-5 text-yellow-500 font-bold hover:text-black">Home</a>
      <a href="/social"class="mr-5 hover:text-black  font-bold text-yellow-500">Social</a>
      <a href="/login" class="mr-5 hover:text-black font-bold text-yellow-500">Login</a>
      <a href="/aboutus" class="mr-5 text-yellow-500 font-bold hover:text-black ">About Us</a>
    </nav>
    <a href="/resister" class="inline-flex items-center font-bold text-yellow-500 bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0">Register
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
  
</header>
        </>
    )
} 