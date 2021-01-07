<template>
  <div class="bg-background-400 text-white">
    <div class="container mx-auto">
     <div class="flex">
      <div class="w-1/3">
        <div class="text-xl  px-4 py-2 border-l-4 border-bordercolor-200 mt-16 bg-background-600 mx-4">About PressRoom</div>
        <p class="text-sm mt-5 mx-4">
          গত ১০ দিনে ভারতজুড়ে লাখ লাখ পাখির মৃত্যু হয়েছে। অনেক এলাকায় হাঁস-মুরগী, কাক ও অতিথি পাখির মরদেহে বার্ড ফ্লু শনাক্তের পর ছড়িয়ে পড়েছে আতঙ্ক।
        </p>
        <br>
        <div class="mx-4">
          <ul class="flex justify-between">
            <li v-for="n in 2" :key="n">
              <h2 class="text-base font-semibold">PressRoom Ltd.</h2>
              <p>33 Farlane Street</p>
              <p>25-100 Keilor East,</p>
              <p>Australia</p>
            </li>
          </ul>
        </div>


        <div class="text-xl px-4 py-2 border-l-4 border-bordercolor-200 mt-16 bg-background-600 mx-4">Get In Touch With Us</div>
        <div class="mt-5">
          <ul class="flex justify-between mx-4">
            <li v-for="n in 7" :key="n" class="text-2xl px-2"><a href=""><i class="fab fa-facebook-square"></i></a></li>
          </ul>
        </div>
      </div >
      <div class="w-1/3">
        <div class="text-xl  px-4 py-2 border-l-4 border-bordercolor-200 mt-16 bg-background-600 mx-4">
          Get In Touch With Us
        </div>
          <ul class="">
            <li class="mt-10 px-4 flex items-center sm:block" v-for="n in 3" :key="n">
              <a href="" class="w-32 h-20">
                <img src="http://quanticalabs.com/Pressroom/Template/images/samples/510x187/image_12.jpg" class="w-full img_hover_effect h-full object-cover object-center" alt="dsfvd">
              </a>
              <div class="ml-2">
                <h5 class="py-2">
                  <a href="" class="text-sm sm:text-base mr-4 hover:text-red-700">
                    নির্বাচন কমিশনের পদত্যাগ দাবিতে বামজোটের বিক্ষোভ
                  </a>
                </h5>
                <ul class="flex py-2">
                  <li class="px-2 bg-red-700 text-white text-xs uppercase text-semibold"><a href="">WORLD</a></li>
                  <li class="px-2 border text-gray-600 text-xs">10:11 PM, Feb 02</li>
                </ul>
              </div>
            </li>
          </ul>
      </div >
      <div class="w-1/3">
        <div class="text-xl  px-4 py-2 border-l-4 border-bordercolor-200 mt-16 bg-background-600 mx-4">Get In Touch With Us</div>
        <ul class="">
          <li class="px-4 mt-10">
            <a href="" class="relative">
              <img src="http://quanticalabs.com/Pressroom/Template/images/samples/330x242/image_01.jpg" alt=""
              class="w-full img_hover_effect transition ease-in-out duration-1000">
            </a>
            <div class="flex justify-between py-4 ">
              <h2>
                <a href="" class="text-base mr-4 hover:text-red-700">
                  সাঈদীর বিরুদ্ধে ১০ বছর সাঈদীর বিরুদ্ধে ১০ বছর পর বাদীর সাক্ষ্যগ্রহণ
                </a>
              </h2>
              <div class="w-20 mt-0 relative items-center">
                <a href="" title="12 comments">
                <span class="z-50 absolute right-0 mr-2 mt-1 font-semibold text-white">12</span>
                <span class="absolute right-0 z-40">
                  <svg class="w-10 inline-block text-background-600 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                  </svg>
                </span>
                </a>
              </div>
            </div>
            <ul class="flex py-2">
              <li class="px-1 bg-red-700 text-white text-xs uppercase text-semibold"><a href="">WORLD</a></li>
              <li class="px-1 border text-gray-600 text-xs">10:11 PM, Feb 02</li>
            </ul>
          </li>
        </ul>
      </div>
     </div>
    </div>
  </div>
</template>
