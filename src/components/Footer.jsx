export default function Footer() {
    return (
        <>
        <footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src="logo.jpg"height={250} width={150}  />
      
        <span class="ml-3 font-bold text-xl">NSB FITNESS</span>
      </a>
    
    </div>
    <div class="flex-grow flex flex-wrap md:pr-20 -mb-20 md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-10">
        <h2 class="title-font font-bold text-black text-xl tracking-widest text-sm mb-3">SITE MAP</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="font-bold mt-5 text-yellow-500 hover:text-black">About Us</a>
          </li>
          <li>
            <a class="font-bold mp-10 text-yellow-500 hover:text-black">Membership</a>
          </li>
          <li>
            <a class="font-bold mp-10 text-yellow-500 hover:text-black">Classes</a>
          </li>
          <li>
            <a class="font-bold mp-10 text-yellow-500 hover:text-black">Offer </a>
          </li>
          <li>
            <a class="font-bold mp-10 text-yellow-500 hover:text-black">Policy </a>
          </li>
        </nav>
      </div>
     
       

      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       <img src="facebook.png" height={150} width={70} />
        <span class="ml-3 text-xl">      </span>
      </a>
      
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src="insta.jpeg"height={150} width={70} />
          
        <span class="ml-3 text-xl"></span>
      </a>
    </div>
  </div>
  <div class="bg-yellow-500">
    <div class="container mx-auto py-4 px-10 flex flex-wrap flex-col sm:flex-row">
      <p class="text-black text-sm text-center sm:text-center">© 2024 NSB FINTESS —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@Term And Conditons</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          
        </a>
      </span>
    </div>
  </div>
</footer>
        </>
    )
}