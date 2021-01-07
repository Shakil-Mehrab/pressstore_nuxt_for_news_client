<template>
  <div class="container mx-auto">
    <div class="flex">
     <div class="w-8/12">
        <ul class="">
          <li v-for="n in 6" :key="n" class="px-4 mt-10 flex">
            <div class="w-1/2">
              <a href="" class="relative">
                <img src="http://quanticalabs.com/Pressroom/Template/images/samples/330x242/image_01.jpg" alt=""
                class="w-full img_hover_effect transition ease-in-out duration-1000">
              </a>
            </div>
            <div class="justify-between py-4 w-1/2 ml-4">
             <div class="flex justify-between">
                <h2>
                <a href="" class="text-xl mr-4 hover:text-red-700">
                  সাঈদীর বিরুদ্ধে ১০ বছর সাঈদীর বিরুদ্ধে ১০ বছর পর বাদীর সাক্ষ্যগ্রহণ
                </a>
              </h2>
              <div class="w-20 mt-0 relative items-center">
                <a href="" title="12 comments">
                <span class="z-50 absolute right-0 mr-2 mt-1 font-semibold text-customcolor-300">12</span>
                <span class="absolute right-0 z-40">
                  <svg class="w-10 inline-block text-background-100 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                  </svg>
                </span>
                </a>
              </div>
             </div>
              <ul class="flex py-2">
                <li class="p-2 bg-red-700 text-white text-sm uppercase text-semibold"><a href="">WORLD</a></li>
                <li class="p-2 border text-gray-600 text-sm">10:11 PM, Feb 02</li>
              </ul>
              <p class="py-2 mb-4 text-sm text-gray-600">
                যুদ্ধাপরাধী দেলাওয়ার হোসাইন সাঈদীর বিরুদ্ধে আয়কর ফাঁকির মামলায় ১০ বছর পর বাদী মাছুমা খাতুনের সাক্ষ্য নিয়েছে আদালত।
              </p>
              <a href="" class=" hover:bg-red-700 py-1 mt-6">
                <svg class="w-6 inline-block bg-red-700 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="uppercase text-sm font-semibold hover:text-white p-2">Read More</span>
              </a>
            </div>

          </li>
        </ul>
        <div class="mt-5">
          <ul class="flex items-center">
            <li class="py-1 px-2 border bg-white">
              <a href="">
                <svg class="w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </a>
            </li>
            <li class="py-1 px-2 border bg-white" v-for="n in 10" :key="n"><a href="">{{n}}</a></li>
            <li class="py-1 px-2 border bg-white">
              <a href="">
                <svg class="w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
     </div>
     <div class="w-full sm:w-4/12 pb-5">
          <!-- recomemded  -->
          <div class="" v-for="n in 2" :key="n">
            <div class="div_heading mt-16">Recent Post</div>
            <div class="">
              <ul>
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
            </div>
          </div>
          <!-- most read and commented  -->
          <div class>
            <div class="mt-16 mx-4 flex justify-between cursor-pointer">
              <spaan class="py-2 px-2 w-1/2 hover:bg-red-700 hover:text-white text-center border" :class="{
                'bg-red-700 text-white':rightSideMostRead}" @click.prevent="activeRightSideMostRead()">
                Most Read
              </spaan>
              <spaan class="py-2 px-2 w-1/2 hover:bg-red-700 hover:text-white text-center border" :class="{
                'bg-red-700 text-white':rightSideMostCommented}" @click.prevent="activeRightSideMostCommented()">
                Most Commented
              </spaan>
            </div>

            <div class="">
              <ul v-if="rightSideMostRead">
                <li class="mt-8 px-4 flex items-center sm:block" v-for="n in 3" :key="n">
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
              <ul v-if="rightSideMostCommented">
                <li class="mt-8 px-4 flex items-center sm:block" v-for="n in 3" :key="n">
                  <a href="" class="w-32 h-20">
                    <img src="http://quanticalabs.com/Pressroom/Template/images/samples/510x187/image_12.jpg" class="w-full img_hover_effect h-full object-cover object-center" alt="dsfvd">
                  </a>
                  <div class="ml-2">
                    <h5 class="py-2">
                      <a href="" class="text-sm sm:text-base mr-4 hover:text-red-700">
                        নির্বাচন কমিশনের পদত্যাগ দাবিতে বামজোটের বিক্ষোভ c
                      </a>
                    </h5>
                    <ul class="flex py-2">
                      <li class="px-2 bg-red-700 text-white text-xs uppercase text-semibold"><a href="">WORLD</a></li>
                      <li class="px-2 border text-gray-600 text-xs">10:11 PM, Feb 02</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- top authors  -->
           <div class="pb-10">
            <div class="div_heading mt-16">Top Authors</div>
            <div class="">
              <ul class="sm:flex flex-wrap justify-start">
                <li class="mt-8 px-4 flex items-center sm:block lg:w-1/2" v-for="n in 4" :key="n">
                  <a href="w-1/2 sm:full" class="">
                    <img src="http://quanticalabs.com/Pressroom/Template/images/samples/510x187/image_12.jpg" class="w-full img_hover_effect h-full object-cover object-center" alt="dsfvd">
                  </a>
                  <div class="ml-2">
                    <h5 class="py-2">
                      <a href="" class="text-sm sm:text-base mr-4 hover:text-red-700">
                        নির্বাচন কমিশনের
                      </a>
                    </h5>
                    <ul class="flex py-2">
                      <li class="px-2 border text-gray-600 text-xs">Editor</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
            <!-- science -->
           <div class="mt-10">
            <div class="div_heading mt-16">Science</div>
            <div class="">
              <ul>
                <li class="mt-8 px-4 flex items-center sm:block" v-for="n in 3" :key="n">
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
                <li class="text-sm uppercase font-semibold p-2 border text-center hover:bg-red-700 hover:text-white mx-4">
                    <a href="">More from headth</a>
                  </li>
              </ul>
            </div>

          </div>
        </div>
    </div>

    <br><br>
  </div>
</template>
