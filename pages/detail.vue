<template>
  <div class="bg-white">
    <div class="container mx-auto">
      <div class="xs:px-4">
        <client-only>
          <carousel
            class="home-slider"
            :per-page="3"
            :autoplay="true"
            :autoplayTimeout="5000"
            :loop="true"
            :navigationEnabled="true"
          >
            <slide v-for="n in 5" :key="n.id">
              <div class="mx-1">
                <img
                  class="img-responsive"
                  src="http://quanticalabs.com/Pressroom/Template/images/slider/image_01.jpg"
                  :alt="n" style="min-width:200px"
                />

                <div class="p-4">
                  <ul class="flex py-2">
                    <li class="px-2 border text-gray-600 text-xs">10:11 PM, Feb 02</li>
                  </ul>
                  <h1 class="text-base">High Altitudes May Aid Weight Control</h1>
                  <br>
                  <p class="text-sm hidden sm:block">
                    Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.
                  </p>
                </div>
              </div>
            </slide>
          </carousel>
        </client-only>
      </div>
      <div class="sm:flex mt-16">
        <div class="sm:w-8/12">
          <section class="xs:mx-4">
            <h1 class="text-xl sm:text-2xl md:text-5xl font-semibold leading-tight px-4 xs:px-0">Built on Brotherhood, Club Lives Up to Name</h1>
            <br>
            <hr>
            <div class="my-4 px-4 xs:px-0">
              <ul class="flex flex-wrap">
                <li class="pr-4 py-2"><a href=""><i class="fas fa-list"></i> In Health</a></li>
                <li class="pr-4 py-2"><a href=""><i class="fas fa-table"></i> 8:25 PM, Feb 23</a></li>
                <li class="pr-4 py-2"><a href=""><i class="fas fa-user"></i> By Anna Shubina</a></li>
                <li class="pr-4 py-2"><a href=""><i class="fas fa-eye"></i> 6 254 Views</a></li>
                <li class="pr-4 py-2"><a href=""><i class="fas fa-comment-alt-dots"></i> 6 Comments</a></li>
              </ul>
            </div>
            <div>
              <img src="http://quanticalabs.com/Pressroom/Template/images/samples/690x450/image_10.jpg" alt="" class="w-full">
              <span class="text-xs px-4 xs:px-0">Britons are never more comfortable than when</span>
            </div>
            <div class="mt-8 flex px-4 xs:px-0">
              <div class="w-3/12">
                <img src="http://quanticalabs.com/Pressroom/Template/images/samples/690x450/image_10.jpg" alt="" class="w-full">
                <h4 class="text-sm whitespace-no-wrap">Anna Shubina</h4>
                <p class="text-center text-sm my-2">EDITOR</p>
                <p class="text-center p-1 border-2 border-red-700 text-sm">PROFILE</p>
              </div>
              <div class="px-4 w-9/12 mx-2">
                  <p class="text-sm tracking-wider">
                    Politicians have looked weak in the face of such natural disaster, with many facing criticism from local residents for doing little more than turning up as flood tourists at the site of disasters.<br>
                    Britons are normally never more comfortable than when talking about the weather, but recent extreme weather events have began to test that theory. Since December, the United Kingdom has faced a relentless assault from some of the worst winter weather on record. It began with the worst storm and tidal surges in 60 years hitting the North Sea coastline, floods that ruined Christmas for thousands across Surrey and Dorset and in January, the most exceptional period of rainfall since 1766. The deluge has transformed swathes of southern England into cold, dark lakes, destroying homes and businesses, and in some cases taking lives.<br>

                    Politicians have looked weak in the face of such natural disaster, with many facing criticism from local residents for doing little more than turning up as “flood tourists” at the site of disasters, incapable of helping those in crisis and only there for a photo opportunity. The Environment Agency, the body responsible for combating floods and managing rivers, has also been blamed for failing to curb the disasters. But there’s an ever larger debate over the role of climate change in the current floods and storms, and it has been unremittingly hostile.
                  </p>
              </div>
            </div>
            <br>
            <div class="border-b border-t py-4 px-4 xs:px-0">
              <span class="text-xl font-semibold">Share :</span>
              <a href="" class="text-gray-600 mx-4"><i class="fab fa-facebook-f"></i></a>
              <a href="" class="text-gray-600 mx-4"><i class="fab fa-facebook-f"></i></a>
              <a href="" class="text-gray-600 mx-4"><i class="fab fa-facebook-f"></i></a>
              <a href="" class="text-gray-600 mx-4"><i class="fab fa-facebook-f"></i></a>
              <a href="" class="text-gray-600 mx-4"><i class="fab fa-facebook-f"></i></a>
            </div>
          </section>
            <!-- post carousel  -->
            <section>
              <div class="div_heading mt-16">Post Carousel</div>
              <div class="mt-10">
                <client-only>
                  <carousel
                    class="home-slider"
                    :per-page="3"
                    :autoplay="true"
                    :autoplayTimeout="5000"
                    :loop="true"
                    :navigationEnabled="true"
                  >
                    <slide v-for="n in 5" :key="n.id">
                      <div class="mx-1">
                        <img
                          class="img-responsive"
                          src="https://picsum.photos/600/300"
                          alt="Awesome Image" style="min-width:200px"
                        />
                        <div>
                          <h1>High Altitudes May Aid Weight Control</h1>
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
            <section class="">
              <div class="div_heading mt-16">Post Carousel</div>
              <div class="mt-10 px-4 xs:px-0">
                <span>Your email address will not be published. Required fields are marked with *</span><br>
                <div class="flex mb-4">
                  <input type="text" placeholder="Your name" class="mr-4 border p-2 rounded-sm w-full">
                  <input type="text" placeholder="Your name" class="mr-4 border p-2 rounded-sm w-full">
                  <input type="text" placeholder="Your name" class="border p-2 rounded-sm w-full">
                </div>
                <textarea name="body" id="" rows="10" placeholder="Type Your Comment" class="border w-full p-2"></textarea>
                <div class="text-right mt-4">
                  <input type="submit" value="Post a Comment" class="border-2 border-red-700 hover:bg-red-700 hover:text-white p-2">
                </div>
              </div>
            </section>
            <section >
              <div class="div_heading mt-16">Comments</div>
              <div class="mt-5 px-4 xs:px-0">
                <ul>
                  <li class=" mb-4" v-for="n in 2" :key="n">
                    <div class="flex">
                      <img src="http://quanticalabs.com/Pressroom/Template/images/samples/690x450/image_10.jpg" alt="" class="w-20 h-20 object-cover object-center rounded-full p-2">
                      <div class="ml-4">
                        <a href="" class="text-xl font-semibold">Kevin Nomad</a>
                        <p>
                          Donec ipsum diam, pretium mollis dapibus risus. Nullam tindun pulvinar at interdum eget, suscipit eget felis. Pellentesque est faucibus tincidunt risus id interdum primis orci cubilla gravida id interdum eget.
                        </p>
                      </div>
                    </div>

                      <ul class="ml-20 mt-5">
                        <li class="flex mb-4" v-for="n in 2" :key="n">
                          <img src="http://quanticalabs.com/Pressroom/Template/images/samples/690x450/image_10.jpg" alt="" class="w-20 h-20 object-cover object-center rounded-full p-2">
                          <div class="ml-4">
                            <a href="" class="text-xl font-semibold">Kevin Nomad</a>
                            <p>
                              Donec ipsum diam, pretium mollis dapibus risus. Nullam tindun pulvinar at interdum eget, suscipit eget felis. Pellentesque est faucibus tincidunt risus id interdum primis orci cubilla gravida id interdum eget.
                            </p>
                          </div>


                        </li>
                      </ul>
                  </li>
                </ul>
              </div>
            </section>
        </div>
        <div class="w-full sm:w-4/12 pb-5">
            <!-- Featured Video  -->
            <div class="">
              <div class="div_heading mt-5">Featured Videos</div>
              <div class="px-4 mt-10 relative">
                <client-only>
                  <carousel
                    class="home-slider"
                    :per-page="1"
                    :autoplay="true"
                    :autoplayTimeout="5000"
                    :loop="true"
                    :navigationEnabled="true"
                  >
                    <slide v-for="n in 5" :key="n.id">
                      <div class="mx-1">
                        <img
                          class="img-responsive"
                          src="https://picsum.photos/600/300"
                          alt="Awesome Image"
                        />
                        <div>
                          <h1>High Altitudes May Aid Weight Control</h1>
                          <ul class="flex py-2">
                            <li class="px-2 bg-red-700 text-white text-xs uppercase text-semibold"><a href="">WORLD</a></li>
                            <li class="px-2 border text-gray-600 text-xs">10:11 PM, Feb 02</li>
                          </ul>
                        </div>
                      </div>
                      <div class="absolute top-0 bg-black opacity-75 py-2 px-3 ml-1 text-white">
                        <i class="fas fa-play"></i>
                      </div>
                    </slide>
                  </carousel>
                </client-only>
              </div>
            </div>
            <!-- most read and commented  -->
            <div class="mt-16">
              <div class="mt-5 xs:mx-4 flex justify-between cursor-pointer">
                <spaan class="text-sm py-2 w-1/2 hover:bg-red-700 hover:text-white text-center border" :class="{
                  'bg-red-700 text-white':rightSideMostRead}" @click.prevent="activeRightSideMostRead()">
                  Most Read
                </spaan>
                <spaan class="text-sm py-2 w-1/2 hover:bg-red-700 hover:text-white text-center border whitespace-no-wrap" :class="{
                  'bg-red-700 text-white':rightSideMostCommented}" @click.prevent="activeRightSideMostCommented()">
                    Commented
                </spaan>
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
            <!-- tag  -->
            <div class="mt-10">
              <div class="div_heading mt-16 xs:mx-4">Categories</div>
              <div class="px-4">
                <ul class="flex flex-wrap">
                  <li class="mt-2 flex items-center w-1/2 border p-2 text-center" v-for="n in 8" :key="n">
                      world
                  </li>
                </ul>
              </div>
            </div>
            <!-- tag  -->
            <div class="mt-10">
              <div class="div_heading mt-16 xs:mx-4">Tags</div>
              <div class="px-4">
                <ul class="flex flex-wrap">
                  <li class="mt-2 flex items-center w-1/2 border p-2 text-center" v-for="n in 8" :key="n">
                      world
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
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
/* .home-slider .VueCarousel-slide-active{
  width:1280px
} */
</style>
