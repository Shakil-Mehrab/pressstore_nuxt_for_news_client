<template>
  <fragment>

    <div class="bg-white mt-24">
       <div class="container mx-auto">
        <div class="row sm:flex w-full">
            <div class="w-full sm:w-8/12">

              <!-- latest post  -->
              <section>
                <div class="div_heading mt-5 xs:mx-4">Latest Posts</div>
                <div>
                  <ul class="flex flex-wrap">
                    <li v-for="n in 3" :key="n" class="mt-5 xs:w-1/2 xs:px-4">
                      <a href="" class="relative">
                        <img src="http://quanticalabs.com/Pressroom/Template/images/samples/330x242/image_01.jpg" alt=""
                        class="w-full img_hover_effect transition ease-in-out duration-1000">
                      </a>
                      <div class="px-2 xs:px-0">
                        <div class="flex justify-between py-4 ">
                          <h2>
                            <a href="" class="text-lg md:text-xl mr-4 hover:text-red-700">
                              সাঈদীর বিরুদ্ধে ১০ বছর সাঈদীর বিরুদ্ধে ১০ বছর পর বাদীর সাক্ষ্যগ্রহণ
                            </a>
                          </h2>
                          <div class="w-20 mt-0 relative items-center">
                            <a href="" title="12 comments">
                            <span class="z-40 absolute right-0 mr-2 mt-1 font-semibold text-customcolor-300">12</span>
                            <span class="absolute right-0 z-30">
                              <svg class="w-10 inline-block text-background-100 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                              </svg>
                            </span>
                            </a>
                          </div>
                        </div>
                        <ul class="flex py-2">
                          <li class="p-2 bg-red-700 text-white text-xs md:text-sm uppercase text-semibold"><a href="">WORLD</a></li>
                          <li class="p-2 border text-gray-600 text-xs md:text-sm">10:11 PM, Feb 02</li>
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
                    <li class="mt-5 xs:w-1/2 xs:px-4">
                      <a href="" class="relative">
                        <img src="http://quanticalabs.com/Pressroom/Template/images/samples/330x242/image_01.jpg" alt=""
                        class="w-full img_hover_effect transition ease-in-out duration-1000">
                        <span class="absolute top-0 w-10 h-10 bg-black text-white bg-opacity-75 text-center p-2">
                          <i class="fas fa-play"></i>
                        </span>
                      </a>
                      <div class="px-2 xs:px-0">
                        <div class="flex justify-between py-4 ">
                          <h2>
                            <a href="" class="text-lg md:text-xl mr-4 hover:text-red-700">
                              সাঈদীর বিরুদ্ধে ১০ বছর সাঈদীর বিরুদ্ধে ১০ বছর পর বাদীর সাক্ষ্যগ্রহণ
                            </a>
                          </h2>
                          <div class="w-20 mt-0 relative items-center">
                            <a href="" title="12 comments">
                            <span class="z-40 absolute right-0 mr-2 mt-1 font-semibold text-customcolor-300">12</span>
                            <span class="absolute right-0 z-30">
                              <svg class="w-10 inline-block text-background-100 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                              </svg>
                            </span>
                            </a>
                          </div>
                        </div>
                        <ul class="flex py-2">
                          <li class="p-2 bg-red-700 text-white text-xs md:text-sm uppercase text-semibold"><a href="">WORLD</a></li>
                          <li class="p-2 border text-gray-600 text-xs md:text-sm">10:11 PM, Feb 02</li>
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
                </div>
              </section>
              <!-- post carousel  -->
              <section>
                <div class="div_heading mt-16 xs:mx-4">Post Carousel</div>
                <div class="px-4 mt-5">
                  <client-only>
                    <carousel
                      class="home-slider"
                      :per-page="3"
                      :autoplay="true"
                      :autoplayTimeout="5000"
                      :loop="true"
                      :navigationEnabled="true"
                    >
                      <slide v-for="n in 10" :key="n.id">
                        <div class="mx-1">
                          <img
                            class="img-responsive"
                            src="https://picsum.photos/600/300"
                            alt="Awesome Image" style="min-width:200px"
                          />
                          <div>
                            <h1 class="text-xs sm:text-sm font-semibold my-2">High Altitudes May Aid Weight Control</h1>
                            <ul class="flex py-2">
                              <li class="px-2 bg-red-700 text-white text-xs uppercase text-semibold"><a href="">WORLD</a></li>
                              <li class="px-2 border text-gray-600 text-xs">10:11 PM, Feb 02</li>
                            </ul>
                          </div>
                        </div>
                      </slide>
                    </carousel>
                  </client-only>
                </div>
              </section>
              <!-- latest health -->
              <section>
                <div class="div_heading mt-16 xs:mx-4">Latest From Health</div>
                <ul class="xs:flex flex-wrap">
                  <li class="mt-5 xs:w-1/2 xs:px-4">
                      <a href="" class="relative">
                        <img src="http://quanticalabs.com/Pressroom/Template/images/samples/330x242/image_01.jpg" alt=""
                        class="w-full img_hover_effect transition ease-in-out duration-1000">
                      </a>
                      <div class="px-2 xs:px-0">
                        <div class="flex justify-between py-4 ">
                          <h2>
                            <a href="" class="text-lg md:text-xl mr-4 hover:text-red-700">
                              সাঈদীর বিরুদ্ধে ১০ বছর সাঈদীর বিরুদ্ধে ১০ বছর পর বাদীর সাক্ষ্যগ্রহণ
                            </a>
                          </h2>
                          <div class="w-20 mt-0 relative items-center">
                            <a href="" title="12 comments">
                            <span class="z-40 absolute right-0 mr-2 mt-1 font-semibold text-customcolor-300">12</span>
                            <span class="absolute right-0 z-30">
                              <svg class="w-10 inline-block text-background-100 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                              </svg>
                            </span>
                            </a>
                          </div>
                        </div>
                        <ul class="flex py-2">
                          <li class="p-2 bg-red-700 text-white text-xs md:text-sm uppercase text-semibold"><a href="">WORLD</a></li>
                          <li class="p-2 border text-gray-600 text-xs md:text-sm">10:11 PM, Feb 02</li>
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
                  <li class="xs:px-4 mt-5 xs:w-1/2">
                    <ul>
                      <li class="flex mb-5" v-for="n in 5" :key="n">
                        <a href="" class="relative w-1/3 xs:w-1/2">
                          <img src="http://quanticalabs.com/Pressroom/Template/images/samples/330x242/image_01.jpg" alt=""
                          class="w-full img_hover_effect">
                          <span class="absolute top-0 bg-black text-white bg-opacity-75 text-center w-6 h-6 lg:w-10 lg:h-10 lg:p-2">
                            <i class="fas fa-play"></i>
                          </span>
                        </a>
                        <div class="ml-2 w-1/2">
                          <h2 class="leading-1">
                            <a href="" class="text-sm xs:text-xs md:text-sm mr-4 hover:text-red-700">
                              সাঈদীর বিরুদ্ধে ১ বছর পর বাদীর সাক্ষ্যগ্রহণ
                            </a>
                          </h2>
                          <div class="hidden lg:block">
                            <ul class="flex py-2">
                              <li class="px-1 bg-red-700 text-white text-xs uppercase text-semibold"><a href="">WORLD</a></li>
                              <li class="px-1 border text-gray-600 text-xs">10:11 PM, Feb 02</li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="text-sm uppercase font-semibold p-2 border text-center hover:bg-red-700 hover:text-white">
                        <a href="">More from Health</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>
              <!-- top posts  -->
              <section>
                <div class="div_heading mt-16 xs:mx-4">Top Posts</div>
                <div class="text-base py-2 border-b mx-4">
                  <a href="" class="text-sm xs:text-base whitespace-no-wrap mr-2 xs:mr-4 py-2" :class="{'border-b-2 border-red-700':most_recent}" @click.prevent="activeMostRecent()">Most Recent</a>
                  <a href="" class="text-sm xs:text-base whitespace-no-wrap mr-2 xs:mx-4 py-2" :class="{'border-b-2 border-red-700':most_read}" @click.prevent="activeMostRead()">Most Read</a>
                  <a href="" class="text-sm xs:text-base whitespace-no-wrap mr-2 xs:mx-4 py-2" :class="{'border-b-2 border-red-700':most_commented}" @click.prevent="activeMostCommented()">Most Commented</a>
                </div>
                <div class="mx-4 mt-5" v-if="most_recent">
                  <client-only>
                    <carousel
                      class="home-slider"
                      :per-page="3"
                      :autoplay="true"
                      :autoplayTimeout="5000"
                      :loop="true"
                      :navigationEnabled="true"
                    >
                      <slide v-for="n in 10" :key="n.id">
                        <div class="mx-1">
                          <img
                            class="img-responsive"
                            src="https://picsum.photos/600/300"
                            alt="Awesome Image" style="min-width:200px"
                          />
                          <div>
                            <h1 class="text-xs sm:text-sm font-semibold my-2">High Altitudes May Aid Weight Control</h1>
                            <ul class="flex py-2">
                              <li class="px-2 bg-red-700 text-white text-xs uppercase text-semibold"><a href="">WORLD</a></li>
                              <li class="px-2 border text-gray-600 text-xs">10:11 PM, Feb 02</li>
                            </ul>
                          </div>
                        </div>
                      </slide>
                    </carousel>
                  </client-only>
                </div>

                <ul class="flex flex-wrap" v-if="most_read">
                  <li v-for="n in 3" :key="n" class="mt-5 md:w-1/2 lg:w-1/3 xs:px-4">
                      <a href="" class="relative">
                        <img src="http://quanticalabs.com/Pressroom/Template/images/samples/330x242/image_01.jpg" alt=""
                        class="w-full img_hover_effect transition ease-in-out duration-1000">
                      </a>
                      <div class="px-2 xs:px-0">
                        <div class="flex justify-between py-4 ">
                          <h2>
                            <a href="" class="text-lg md:text-xl mr-4 hover:text-red-700">
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
                          <li class="p-2 bg-red-700 text-white text-xs md:text-sm uppercase text-semibold"><a href="">WORLD</a></li>
                          <li class="p-2 border text-gray-600 text-xs md:text-sm">10:11 PM, Feb 02</li>
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

                 <ul class="flex flex-wrap" v-if="most_commented">
                  <li v-for="n in 3" :key="n" class="mt-5 md:w-1/2 lg:w-1/3 xs:px-4">
                      <a href="" class="relative">
                        <img src="http://quanticalabs.com/Pressroom/Template/images/samples/330x242/image_01.jpg" alt=""
                        class="w-full img_hover_effect transition ease-in-out duration-1000">
                      </a>
                      <div class="px-2 xs:px-0">
                        <div class="flex justify-between py-4 ">
                          <h2>
                            <a href="" class="text-lg md:text-xl mr-4 hover:text-red-700">
                              সাঈদীর বিরুদ্ধে ১০ বছর সাঈদীর বিরুদ্ধে ১০ বছর পর বাদীর সাক্ষ্যগ্রহণ
                            </a>
                          </h2>
                          <div class="w-20 mt-0 relative items-center">
                            <a href="" title="12 comments">
                            <span class="z-40 absolute right-0 mr-2 mt-1 font-semibold text-customcolor-300">12</span>
                            <span class="absolute right-0 z-30">
                              <svg class="w-10 inline-block text-background-100 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                              </svg>
                            </span>
                            </a>
                          </div>
                        </div>
                        <ul class="flex py-2">
                          <li class="p-2 bg-red-700 text-white text-xs md:text-sm uppercase text-semibold"><a href="">WORLD</a></li>
                          <li class="p-2 border text-gray-600 text-xs md:text-sm">10:11 PM, Feb 02</li>
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
              </section>
              <!-- category -->
              <section>
                <div class="xs:flex">
                  <ul class="xs:w-1/2" v-for="n in 2" :key="n">
                    <div class="div_heading mt-16 xs:mx-4">Sports</div>
                    <li class="mt-5 xs:px-4">
                      <a href="" class="relative">
                        <img src="http://quanticalabs.com/Pressroom/Template/images/samples/330x242/image_01.jpg" alt=""
                        class="w-full img_hover_effect transition ease-in-out duration-1000">
                      </a>
                      <div class="px-2 xs:px-0">
                        <div class="flex justify-between py-4 ">
                          <h2>
                            <a href="" class="text-lg md:text-xl mr-4 hover:text-red-700">
                              সাঈদীর বিরুদ্ধে ১০ বছর সাঈদীর বিরুদ্ধে ১০ বছর পর বাদীর সাক্ষ্যগ্রহণ
                            </a>
                          </h2>
                          <div class="w-20 mt-0 relative items-center">
                            <a href="" title="12 comments">
                            <span class="z-40 absolute right-0 mr-2 mt-1 font-semibold text-customcolor-300">12</span>
                            <span class="absolute right-0 z-30">
                              <svg class="w-10 inline-block text-background-100 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                              </svg>
                            </span>
                            </a>
                          </div>
                        </div>
                        <ul class="flex py-2">
                          <li class="p-2 bg-red-700 text-white text-xs md:text-sm uppercase text-semibold"><a href="">WORLD</a></li>
                          <li class="p-2 border text-gray-600 text-xs md:text-sm">10:11 PM, Feb 02</li>
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
                    <li class="mt-5 xs:px-4">
                      <ul>
                        <li class="flex mb-5" v-for="n in 2" :key="n">
                          <a href="" class="relative w-1/3 xs:w-1/2">
                            <img src="http://quanticalabs.com/Pressroom/Template/images/samples/330x242/image_01.jpg" alt=""
                            class="w-full img_hover_effect">
                            <span class="absolute top-0 bg-black text-white bg-opacity-75 text-center w-6 h-6 lg:w-10 lg:h-10 lg:p-2">
                              <i class="fas fa-play"></i>
                            </span>
                          </a>
                          <div class="ml-2 w-1/2">
                            <h2 class="leading-1">
                              <a href="" class="text-sm xs:text-xs md:text-base mr-4 hover:text-red-700">
                                সাঈদীর বিরুদ্ধে ১ বছর পর বাদীর সাক্ষ্যগ্রহণ
                              </a>
                            </h2>
                            <div class="hidden lg:block">
                              <ul class="flex py-2">
                                <li class="px-1 bg-red-700 text-white text-xs uppercase text-semibold"><a href="">WORLD</a></li>
                                <li class="px-1 border text-gray-600 text-xs">10:11 PM, Feb 02</li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li class="text-sm uppercase font-semibold p-2 border text-center hover:bg-red-700 hover:text-white">
                          <a href="">More from Sports</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            <div class="w-full sm:w-4/12 pb-5">
              <!-- recomemded  -->
              <div>
              <div class="div_heading mt-5 xs:mx-4">Recommended</div>
                <ul>
                  <li class="flex my-5 xs:mx-4" v-for="n in 2" :key="n">
                    <a href="" class="relative w-1/3 sm:w-1/2 md:w-1/3">
                      <img src="http://quanticalabs.com/Pressroom/Template/images/samples/330x242/image_01.jpg" alt=""
                      class="w-full img_hover_effect">
                      <span class="absolute top-0 bg-black text-white bg-opacity-75 text-center w-6 h-6 lg:w-10 lg:h-10 lg:p-2">
                        <i class="fas fa-play"></i>
                      </span>
                    </a>
                    <div class="ml-2 w-1/2">
                      <h2 class="leading-1">
                        <a href="" class="text-sm xs:text-xs md:text-base mr-4 hover:text-red-700">
                          সাঈদীর বিরুদ্ধে ১ বছর পর বাদীর সাক্ষ্যগ্রহণ
                        </a>
                      </h2>
                      <div class="hidden lg:block">
                        <ul class="flex py-2">
                          <li class="px-1 bg-red-700 text-white text-xs uppercase text-semibold"><a href="">WORLD</a></li>
                          <li class="px-1 border text-gray-600 text-xs">10:11 PM, Feb 02</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- most read and commented  -->
              <div class="mt-16">
                <div class="mt-5 xs:mx-4 flex justify-between cursor-pointer">
                  <span class="text-sm py-2 w-1/2 hover:bg-red-700 hover:text-white text-center border" :class="{
                    'bg-red-700 text-white':rightSideMostRead}" @click.prevent="activeRightSideMostRead()">
                    Most Read
                  </span>
                  <span class="text-sm py-2 w-1/2 hover:bg-red-700 hover:text-white text-center border whitespace-no-wrap" :class="{
                    'bg-red-700 text-white':rightSideMostCommented}" @click.prevent="activeRightSideMostCommented()">
                     Commented
                  </span>
                </div>
                  <ul v-if="rightSideMostRead">
                    <li class="mt-8 xs:px-4 flex items-center sm:block" v-for="n in 3" :key="n">
                      <a href="" class="w-32 h-20">
                        <img src="http://quanticalabs.com/Pressroom/Template/images/samples/510x187/image_12.jpg" class="w-full img_hover_effect h-full object-cover object-center" alt="dsfvd">
                      </a>
                      <div class="ml-2">
                        <h5 class="py-2">
                          <a href="" class="text-sm mr-4 hover:text-red-700">
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
                    <li class="mt-8 xs:px-4 flex items-center sm:block" v-for="n in 3" :key="n">
                      <a href="" class="w-32 h-20">
                        <img src="http://quanticalabs.com/Pressroom/Template/images/samples/510x187/image_12.jpg" class="w-full img_hover_effect h-full object-cover object-center" alt="dsfvd">
                      </a>
                      <div class="ml-2">
                        <h5 class="py-2">
                          <a href="" class="text-sm mr-4 hover:text-red-700">
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
              <!-- top authors  -->
              <div class="pb-10">
                <div class="div_heading mt-16 xs:mx-4">Top Authors</div>
                <div class="">
                  <ul class="lg:flex flex-wrap">
                    <li class="flex sm:block my-5 p-4 items-center lg:w-1/2" v-for="n in 4" :key="n">
                      <a href="" class="w-1/3 sm:full">
                        <img src="http://quanticalabs.com/Pressroom/Template/images/samples/510x187/image_12.jpg" class="w-full img_hover_effect h-full object-cover object-center" alt="dsfvd">
                      </a>
                      <div class="ml-2">
                        <h5 class="py-2">
                          <a href="" class="text-sm  mr-4 hover:text-red-700">
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
                <div class="div_heading mt-16 xs:mx-4">Science</div>
                <div class="">
                  <ul>
                    <li class="mt-8 xs:px-4 flex items-center sm:block" v-for="n in 3" :key="n">
                      <a href="" class="w-32 h-20">
                        <img src="http://quanticalabs.com/Pressroom/Template/images/samples/510x187/image_12.jpg" class="w-full img_hover_effect h-full object-cover object-center" alt="dsfvd">
                      </a>
                      <div class="ml-2">
                        <h5 class="py-2">
                          <a href="" class="text-sm mr-4 hover:text-red-700">
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
            </div>

        </div>
      </div>
    </div>

  </fragment>
</template>

<script>
export default {
  data(){
    return{
      most_recent:true,
      most_read:false,
      most_commented:false,
      rightSideMostRead:true,
      rightSideMostCommented:false,
      name:'',
      color:'',
      url:'',
      date:'',
    }
  },
  methods:{
    activeMostRecent(){
      this.most_recent = true
      this.most_read = false
      this.most_commented = false
    },
    activeMostRead(){
      this.most_recent = false
      this.most_read = true
      this.most_commented = false
    },
    activeMostCommented(){
      this.most_recent = false
      this.most_read = false
      this.most_commented = true
    },
    activeRightSideMostRead(){
      this.rightSideMostRead = true
      this.rightSideMostCommented = false
    },
    activeRightSideMostCommented(){
      this.rightSideMostRead = false
      this.rightSideMostCommented = true
    },
    submit(){
      console.log(this.name)
      console.log(this.color)
      console.log(this.url)
      console.log(this.date)

      console.log('ok')
    }
  }
}
</script>


<style>
.home-slider{
  position: relative;
}
.home-slider .VueCarousel-navigation-button {
  color: white;
  display: flex;
  justify-content: center;
  justify-items: center;
}
.home-slider .VueCarousel-navigation-prev {
  left: 25px;
  background: black;
  opacity: 75%;
  margin-left: 10px;
  opacity: 0;
}
.home-slider .VueCarousel-navigation-next {
  right: 25px;
  background: black;
  opacity: 75%;
  margin-right: 10px;
  opacity: 0;
}
.VueCarousel-pagination{
  display: none;
}
.home-slider .VueCarousel-navigation-prev:hover {
  background: red;
}
.home-slider .VueCarousel-navigation-next:hover {
  background: red;
}
.home-slider:hover .VueCarousel-navigation-prev {
  opacity: 100;
}
.home-slider:hover .VueCarousel-navigation-next {
  opacity: 100;
}
</style>
