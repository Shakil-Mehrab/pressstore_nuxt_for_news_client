<template>
  <header>
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
            <!-- mobile menu  -->
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
  </header>
</template>
<script>

export default {
   data() {
    return {
      isOpen: false,
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
    }
  }
}
</script>
