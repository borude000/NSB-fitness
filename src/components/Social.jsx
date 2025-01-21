export default function socialpage(){
    return(
        <>
       <section class="text-gray-600 body-font">
  <div class="container text-justify px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-bold title-font mb-4 text-yellow-500">SOCIAL</h1>
      <p class="lg:w-2/3  text-justify mx-auto leading-relaxed text-base">
In the dynamic world of fitness and wellness, where a healthy lifestyle is celebrated, a gym website plays a pivotal role in fostering a strong and engaged community. </p>
    </div>
    <div class="flex flex-wrap -m-4  ">
      <a href="/engagingcontent" class="p-4 lg:w-1/4 md:w-1/2  ">
        <div class="h-full flex flex-col items-center text-center border-yellow-500 hover:border-black border-4 ">
          <img src="engaging.jpg" height={1200} width={800} />
          <div class="w-full">
            <h2 class="title-font font-bold text-lg text-black">Engaging Content</h2>
            <h3 class="text-gray-500 mb-3"></h3>
            <p class=" text-justify mb-4 ml-2 mr-2">The heart of any successful social strategy lies in compelling content.</p>
            <span class="inline-flex">
              
              
            </span>
          </div>
        </div>
      </a>

      <a href="/comunitybuilding" class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center border-yellow-500 hover:border-black border-4">
          <img src="community.jpeg" />
          <div class="w-full">
            <h2 class="title-font font-bold text-lg text-black">Community Building</h2>
            <h3 class="text-gray-500 mb-3"></h3>
            <p class="mb-4 ml-2 mr-2">A gym is not just a physical space; it's a community of like-minded individuals striving towards common health and fitness goals.</p>
            <span class="inline-flex">
              
            </span>
          </div>
        </div>
      </a>

      <a href="/interactivechallenges" class="p-4 lg:w-1/4 md:w-1/2">
        <div href="/interactivechallenges" class="h-full flex flex-col items-center text-center border-yellow-500 hover:border-black border-4">
          <img src="challenges.jpg" height={500} width={300} />
          <div class="w-full">
            <h2 class="title-font font-bold text-lg text-black">Interactive Challenges and Contests</h2>
            <h3 class="text-gray-500 mb-3"></h3>
            <p class="mb-4 ml-2 mr-2">Harnessing the power of social media for interactive challenges and contests can create a buzz around the gym.</p>
            <span class="inline-flex">
            
            </span>
          </div>
        </div>
      </a>
      <a href="/educationalresources" class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center border-yellow-500 hover:border-black border-4">
          <img src="education.jpeg"/>
          <div class="w-full">
            <h2 class="title-font font-bold text-lg text-black">Educational Resources</h2>
            <h3 class="text-gray-500 mb-3"> </h3>
            <p class="mb-4 ml-2 mr-2">Positioning the gym as a reliable source of fitness education is crucial for social success.</p>
            <span class="inline-flex">
              
            </span>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>
        </>
    )
}