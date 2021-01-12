<template>
  <!-- <header class="bg-white">
    <div class="bg-background-400">
      <div class="container mx-auto">
        <div class="flex justify-between text-white">
          <div class="w-2/3">
            <table class="w-full h-full">
              <tbody>
                <tr class="flex h-full">
                  <td class="border-r border-l border-gray-600 px-2 my-1">শিরোনাম</td>
                  <td class="px-2 my-1">
                    <marquee direction=left onmouseout="this.start()"  onmouseover="this.stop()" scrolldelay="1" scrollamount="4">
                      <span v-for="n in 5" :key="n.id">
                        <a href="#">&#9679;&nbsp;করোনাকালে যেভাবে স্বাস্থ্যবিধি মেনে নতুন বছরকে স্বাগতম জানাবেন</a>&nbsp;&nbsp;&nbsp;
                      </span>
                    </marquee>
                  </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div>
              <ul class="flex">
                <li v-for="n in 4" :key="n" class="px-2 text-xl text-gray-600 hover:text-gray-400 my-1">
                  <a href=""><i class="fab fa-facebook-square"></i></a>
                </li>
                <li class="px-2 my-1">
                  <input type="search" placeholder="Search here.." class="bg-background-400 px-1 border border-gray-600 rounded-md focus:border-gray-900">
                </li>
                <li class="px-2 border-r border-l border-gray-600">
                  <a href="">
                    <svg class="w-6 text-sm font-semibold text-gray-600 hover:text-gray-400 my-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>


    <div class="container mx-auto">
      <div class="text-center py-4">
        <h1 class="text-6xl font-bold text-red-700 leading-tight">Pressroom</h1>
        <h2 class="text-xl text-gray-700">News and Magazine Template</h2>
      </div>
    </div>


      <div class="border border-gray-400 overflow-hidden leading-8">
        <div class="container mx-auto">
          <div class="row">
            <div class="my-2 lg:hidden" @click.prevent="menu()">
              <a href="">
              <svg class="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              </a>
            </div>
            <nav class="hidden lg:flex justify-between">
              <div>
                <ul class="lg:flex justify-between py-3 items-center">
                  <li class="whitespace-no-wrap px-2 "  @mouseover="isOpen = true" @mouseleave="isOpen = false" v-for="n in 8" :key="n.id">
                      <a href="#" class="text-base tracking-wider text-customcolor-500">All Section</a>
                      <svg class="w-4 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"      stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                      <div class="absolute top-0 z-50 margint_from_top" v-show="isOpen">
                        <div class="bg-white shadow-md border border-gray-400">
                            <ul class="font-semibold py-3 uppercase tracking-widest text-customcolor-100">
                              <li class="hover:border-b-2 hover:border-red-700 px-2 text-xs " v-for="n in 8" :key="n.id">
                                <a href="/category">Newspaper new</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                  </li>
                </ul>
              </div>
            </nav>

            <nav class="hidden" id="increase_height">
              <div>
                <ul class="lg:flex justify-between py-3 items-center">
                  <li class="whitespace-no-wrap px-2 bg-white borde-b border-t border-gray-600"  @mouseover="isOpen = true" @mouseleave="isOpen = false" v-for="n in 8" :key="n.id">
                      <a href="#" class="text-base tracking-wider text-customcolor-500">All Section</a>
                      <svg class="w-4 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"      stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                      <div v-show="isOpen">
                        <div class="">
                            <ul>
                              <li class="bg-white border-b border-gray-600 pl-20" v-for="n in 8" :key="n.id">
                                <a href="/category">Newspaper new</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
  </header> -->
  <fragment>
    <header class="shadow-md fixed w-full top-0 z-50">
      <div class="header_background h-24 shadow-md border-b">
        <div class="row container mx-auto">
          <div class="flex">
            <div class="px-2 h-full w-28">
              <div class="pt-2">
                <a href=""><img src="https://www.ntvbd.com/sites/all/themes/sloth/logo.png" alt="" class="w-full"></a>
              </div>
            </div>
            <div class="px-4 w-full">
              <div class="pt-2" align="right">
                <div class="">
                  <ul class="flex justify-end">
                    <li class="text-white text-3xl ml-2 leading-none">
                      <a href="#"><i class="fas fa-tv bg-red-700"></i></a>
                    </li>
                    <li class="text-white ml-2 relative hidden lg:block">
                      <div class="mx-1 flex items-center">
                        <input type="search" placeholder="Search..." class="w-full h-8 border-2 bg-background-700 border-bordercolor-300 rounded-md text-bordercolor-300 px-2 focus:outline-none focus:shadow-lg">
                        <svg class="w-6 inline-block absolute right-0 p-1 text-bordercolor-300 font-bold mr-2 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </li>
                    <li class="text-white text-3xl ml-2 leading-none">
                      <a href="#" @click.prevent="show_hide_large_screen_menu()">
                        <svg class="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="pt-4">
                <div class="pl-4 pt-1">
                  <div class="mt-2">
                    <ul class="flex gap-4">

                      <li class="text-base font-semibold text-customcolor-700">
                        <a href="">
                          <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </a>
                      </li>
                      <li class="text-base font-semibold text-customcolor-700"><a href="">বাংলাদেশ</a></li>
                      <li class="text-base font-semibold text-customcolor-700"><a href="">বিশ্ব</a></li>
                      <li class="text-base font-semibold text-customcolor-700"><a href="">বিনোদন</a></li>
                      <li class="text-base font-semibold text-customcolor-700"><a href="">ছবি</a></li>
                      <li class="text-base font-semibold text-customcolor-700"><a href="">ভিডিও</a></li>
                      <li class="text-base font-semibold text-customcolor-700"><a href="">নাটক</a></li>
                      <li class="text-base font-semibold text-customcolor-700"><a href="">সিনেমা</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="relative mt-24">
      <aside class="transition duration-500 ease-in-out lg:hidden w-full bg-black fixed z-50 bg-opacity-75  margin_left h-full overflow-scroll" id="aside_nav">
        <div class="row transition duration-500 ease-in-out">
          <div class="bg-background-900 w-1/3">
            <div class="bg-customcolor-200 p-2 flex items-center">
              <div class="relative w-full">
                <input type="search" placeholder="Search..." class="w-full h-8 border-2 bg-background-900 border-bordercolor-300 rounded-sm text-bordercolor-300 px-2 focus:outline-none focus:shadow-lg">
                <svg class="w-6 inline-block absolute right-0 p-1 text-white font-bold mr-1 my-1 cursor-pointer rounded-r-sm bg-customcolor-200 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              &nbsp;<i class="far fa-times-circle text-3xl bg-red-700 rounded-full text-white"></i>
            </div>
            <ul class="py-2 bg-scroll">
              <li class="py-2" v-for="n in 10" :key="n"><a href="" class="px-4 w-full"> এনটিভি ইউরোপ</a></li>
              <hr>
              <li class="py-2">
                <ul class="flex gap-4 px-4 justify-center">
                  <li><a href=""><img src="@/assets/images/facebook.png" class="w-6" alt=""></a></li>
                  <li><a href=""><img src="@/assets/images/instagram.png" class="w-6" alt=""></a></li>
                  <li><a href=""><img src="@/assets/images/twitter.png" class="w-6" alt=""></a></li>
                  <li><a href=""><img src="@/assets/images/facebook.png" class="w-6" alt=""></a></li>
                  <li><a href=""><img src="@/assets/images/instagram.png" class="w-6" alt=""></a></li>
                  <li><a href=""><img src="@/assets/images/twitter.png" class="w-6" alt=""></a></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>

      </aside>

      <nav class="transition duration-500 ease-in-out hidden lg:block bg-background-800" v-if="large_screen_menu">
        <div class="row container mx-auto">
          <div class="pt-10">
            <ul class="flex flex-wrap">
              <li v-for="n in 24" :key="n" class="w-2/12 p-2 text-lg font-bold"><a href="">বাংলাদেশ</a></li>
            </ul>
          </div>
        </div>
        <br><br>
        <div class="bg-background-400 py-2">
          <div class="row container mx-auto">
            <div class="flex">
              <div class="px-2 w-8/12">
                <ul class="py-1 flex gap-6">
                  <li class="" v-for="n in 6" :key="n">
                    <a href="" class="text-customcolor-600 flex items-center text-base">
                      <svg class="w-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>&nbsp;ভিডিও
                    </a>
                  </li>
                </ul>
              </div>
              <div class="px-2 w-4/12">
                <ul class="py-1 flex justify-end gap-6">
                  <li class="" v-for="n in 6" :key="n">
                    <a href="" class="text-customcolor-600 flex items-center text-base">
                      <svg class="w-6 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </fragment>
</template>
<script>

export default {
   data() {
    return {
      isOpen: false,
      large_screen_menu: false,
    }
  },
  methods:{
    menu(){
      var increase_height=document.getElementById('increase_height');
      if(increase_height.classList.contains('hidden')){
        increase_height.classList.remove('hidden')
      }else{
        increase_height.classList.add('hidden')
      }
      console.log(increase_height)
    },
    show_hide_large_screen_menu(){
      console.log('ok')
      if(this.large_screen_menu==false){
        this.large_screen_menu=true
      }else{
        this.large_screen_menu=false
      }
      var increase_height=document.getElementById('aside_nav');
      if(increase_height.classList.contains('margin_left')){
        increase_height.classList.remove('margin_left')
      }else{
        increase_height.classList.add('margin_left')
      }
      // console.log(increase_height)
    }
  }
}
</script>
