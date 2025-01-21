export default function Login(){
    return(
        <>
        <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-yellow-500">Join Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">"Alone we can do so little; together we can do so much." Join now....</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Password</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto font-bold text-yellow-500 bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">Join</button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-black-500">NSBfitness@email.com</a>
          <p class="leading-normal my-5">
            
          </p>
         
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}