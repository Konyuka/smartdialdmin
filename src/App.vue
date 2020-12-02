<template>
  <div id="app">

    <div class="h-screen flex overflow-hidden bg-white page-wrapper">

      <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
      <div class="md:hidden" v-show="toggle">
        <div class="fixed inset-0 flex z-40">
          
          <div class="fixed inset-0">
            <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
          
          <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div class="absolute top-0 right-0 -mr-12 pt-2">
              <button  @click="toggle = false" class="navbar ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span class="sr-only">Close sidebar</span>
                <!-- Heroicon name: x -->
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div class="flex-shrink-0 flex items-center px-4">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow">
              </div>
              <nav class="mt-5 flex-1 px-2 bg-white space-y-1">

                <a href="#" class="group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100">
                  <svg  class="mr-3 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <router-link to="/table"> 
                  REPORTS
                  </router-link>
                </a>

                <a @click="isOpen = !isOpen" href="#" class="relative group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-50 hover:text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: home -->
                  <svg class="mr-3 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                  USERS
                  <svg v-if="!isOpen" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-if="isOpen" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
                <div v-if="isOpen" class="left-12 py-1 bg-gray-100 rounded-lg shadow-xl">
                  <router-link to="/table">
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show User</a>           
                  </router-link>
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add User</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Copy User</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Search User</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">User Stats</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Users Status</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Timesheet</a>           
                </div>
                
                <a @click="isOpen2 = !isOpen2" href="#" class="group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: users -->
                  <svg class="mr-3 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  CAMPAIGNS
                  <svg v-if="!isOpen2" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-if="isOpen2" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
                <div v-if="isOpen2" class="left-12 py-1 bg-gray-100 rounded-lg shadow-xl">
                  <router-link to="/table">
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show User</a>           
                  </router-link>
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Capaign Main</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Statuses</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">HotKeys</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Lead Recycle</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Auto-Alt Dial</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">List Mix</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Pause Codes</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Presets</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">AC-CID</a>           
                </div>

                <a @click="isOpen3 = !isOpen3" href="#" class="group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: folder -->
                  <svg class="mr-3 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  LISTS
                  <svg v-if="!isOpen3" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-if="isOpen3" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
                <div v-if="isOpen3" class="left-12 py-1 bg-gray-100 rounded-lg shadow-xl">
                  <router-link to="/table">
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show Lists</a>           
                  </router-link>
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add List</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Search Lead</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add Lead</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">DNC Numbers</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Load New Leads</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Clear Leads</a>           
                </div>

                <a @click="isOpen4 = !isOpen4" href="#" class="group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: home -->
                  <svg class="mr-3 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  SCRIPTS
                  <svg v-if="!isOpen4" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-if="isOpen4" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
                <div v-if="isOpen4" class="left-12 py-1 bg-gray-100 rounded-lg shadow-xl">
                  <router-link to="/table">
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show Scripts</a>           
                  </router-link>
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add Script</a>                    
                </div>

                <a @click="isOpen5 = !isOpen5" href="#" class="group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: home -->
                  <svg class="mr-3 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                  </svg>
                  INBOUND
                  <svg v-if="!isOpen5" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-if="isOpen5" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
                <div v-if="isOpen5" class="left-12 py-1 bg-gray-100 rounded-lg shadow-xl">
                  <router-link to="/table">
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show In-Groups</a>           
                  </router-link>
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add In-Groups</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Copy In-Groups</a>  
                  <hr class="mt-2 mb-2">         
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show Chat Groups</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add Chat Group</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Copy Chat Group</a> 
                  <hr class="mt-2 mb-2">          
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show DID's</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add DID</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Copy DID</a>   
                  <hr class="mt-2 mb-2">         
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show Call Menu</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add Call Menu</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Copy Call Menu</a>
                  <hr class="mt-2 mb-2">   
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Filter Phone Groups</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add Filter Phone Groups</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Filter Phone Groups Numbers</a>           
                </div>

                <a @click="isOpen6 = !isOpen6" href="#" class="group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: home -->
                  <svg class="mr-3 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  GROUPS
                  <svg v-if="!isOpen6" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-if="isOpen6" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
                <div v-if="isOpen6" class="left-12 py-1 bg-gray-100 rounded-lg shadow-xl">
                  <router-link to="/table">
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show User Groups</a>           
                  </router-link>
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add User Groups</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Search Lead</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Group Hourly Report</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Bulk Group Change</a>                   
                </div>

                <a @click="isOpen7 = !isOpen7" href="#" class="group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: home -->
                  <svg class="mr-3 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  ADMIN
                  <svg v-if="!isOpen7" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-if="isOpen7" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
                <div v-if="isOpen7" class="left-12 py-1 bg-gray-100 rounded-lg shadow-xl">
                  <router-link to="/table">
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Call Times</a>           
                  </router-link>
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Shifts</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Phones</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Templates</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Carriers</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Servers</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Conferences</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">System Settings</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Screen Labels</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Screen Colors</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">System Statuses</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Status Groups</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">CID Groups</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Voicemail</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Audio Store</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Music On Hold</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">VM Message Groups</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Settings Container</a>           
                </div>

              </nav>
            </div>

            <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" class="flex-shrink-0 group block">
                <div class="flex items-center">
                  <div>
                    <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="ml-3">
                    <p class="text-base font-medium text-gray-700 group-hover:text-gray-900">
                      Tom Cook
                    </p>
                    <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>

          </div>
          
          <div class="flex-shrink-0 w-14">
            <!-- Force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </div>

      <!-- Static sidebar for desktop -->
      <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <div class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">

              <!-- Logo -->
              <div class="flex items-center flex-shrink-0 px-4">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow">
              </div>
              <!-- Navigation -->
              <nav class="mt-5 flex-1 px-2 bg-white space-y-1">

                <a href="#" class="group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100">
                  <svg  class="mr-3 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <router-link to="/table"> 
                  REPORTS
                  </router-link>
                </a>

                <a @click="isOpen = !isOpen" href="#" class="relative group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-50 hover:text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: home -->
                  <svg class="mr-3 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                  USERS
                  <svg v-if="!isOpen" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-if="isOpen" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
                <div v-if="isOpen" class="left-12 py-1 bg-gray-100 rounded-lg shadow-xl">
                  <router-link to="/table">
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show User</a>           
                  </router-link>
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add User</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Copy User</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">User Stats</a>                     
                </div>
                
                <a @click="isOpen2 = !isOpen2" href="#" class="group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: users -->
                  <svg class="mr-3 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  CAMPAIGNS
                  <svg v-if="!isOpen2" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-if="isOpen2" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
                <div v-if="isOpen2" class="left-12 py-1 bg-gray-100 rounded-lg shadow-xl">
                  <router-link to="/table">
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show User</a>           
                  </router-link>
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Capaign Main</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Statuses</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">HotKeys</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Lead Recycle</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Auto-Alt Dial</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">List Mix</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Pause Codes</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Presets</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">AC-CID</a>           
                </div>

                <a @click="isOpen3 = !isOpen3" href="#" class="group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: folder -->
                  <svg class="mr-3 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  LISTS
                  <svg v-if="!isOpen3" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-if="isOpen3" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
                <div v-if="isOpen3" class="left-12 py-1 bg-gray-100 rounded-lg shadow-xl">
                  <router-link to="/table">
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show Lists</a>           
                  </router-link>
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add List</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Search Lead</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add Lead</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">DNC Numbers</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Load New Leads</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Clear Leads</a>           
                </div>

                <a @click="isOpen4 = !isOpen4" href="#" class="group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: home -->
                  <svg class="mr-3 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  SCRIPTS
                  <svg v-if="!isOpen4" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-if="isOpen4" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
                <div v-if="isOpen4" class="left-12 py-1 bg-gray-100 rounded-lg shadow-xl">
                  <router-link to="/table">
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show Scripts</a>           
                  </router-link>
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add Script</a>                    
                </div>

                <a @click="isOpen5 = !isOpen5" href="#" class="group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: home -->
                  <svg class="mr-3 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                  </svg>
                  INBOUND
                  <svg v-if="!isOpen5" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-if="isOpen5" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
                <div v-if="isOpen5" class="left-12 py-1 bg-gray-100 rounded-lg shadow-xl">
                  <router-link to="/table">
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show In-Groups</a>           
                  </router-link>
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add In-Groups</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Copy In-Groups</a>  
                  <hr class="mt-2 mb-2">         
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show Chat Groups</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add Chat Group</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Copy Chat Group</a> 
                  <hr class="mt-2 mb-2">          
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show DID's</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add DID</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Copy DID</a>   
                  <hr class="mt-2 mb-2">         
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show Call Menu</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add Call Menu</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Copy Call Menu</a>
                  <hr class="mt-2 mb-2">   
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Filter Phone Groups</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add Filter Phone Groups</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Filter Phone Groups Numbers</a>           
                </div>

                <a @click="isOpen6 = !isOpen6" href="#" class="group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: home -->
                  <svg class="mr-3 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  GROUPS
                  <svg v-if="!isOpen6" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-if="isOpen6" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
                <div v-if="isOpen6" class="left-12 py-1 bg-gray-100 rounded-lg shadow-xl">
                  <router-link to="/table">
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Show User Groups</a>           
                  </router-link>
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Add User Groups</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Search Lead</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Group Hourly Report</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Bulk Group Change</a>                   
                </div>

                <a @click="isOpen7 = !isOpen7" href="#" class="group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100">
                  <!-- Heroicon name: home -->
                  <svg class="mr-3 h-6 w-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  ADMIN
                  <svg v-if="!isOpen7" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <svg v-if="isOpen7" class="ml-1 h-3 w-3 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
                <div v-if="isOpen7" class="left-12 py-1 bg-gray-100 rounded-lg shadow-xl">
                  <router-link to="/table">
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Call Times</a>           
                  </router-link>
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Shifts</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Phones</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Templates</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Carriers</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Servers</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Conferences</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">System Settings</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Screen Labels</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Screen Colors</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">System Statuses</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Status Groups</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">CID Groups</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Voicemail</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Audio Store</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Music On Hold</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">VM Message Groups</a>           
                  <a href="#" class="block px-14 py-2 text-gray-800 text-xs font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-white">Settings Container</a>           
                </div>

              </nav>

            </div>
            <!-- Sidebar Footer -->
            <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" class="flex-shrink-0 w-full group block">
                <div class="flex items-center">
                  <div>
                    <img class="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      Michael Saiba
                    </p>
                    <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
            
          </div>
        </div>
      </div>

      <!-- Where Router View Comes in -->
      <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button @click='toggle = !toggle'  class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open sidebar</span>
            <!-- Heroicon name: menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <main id="main-content" class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
          <div class="py-6">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <!-- <h1 class="text-2xl font-semibold text-gray-900">Bread Crumbs Here</h1> -->
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <!-- Replace with your content -->
              <div class="py-4" id="main-content">
                <router-view class="main container"/>
                <!-- <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div> -->
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </main>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  
  data() {
    return{
      toggle: false,
      isOpen: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      isOpen5: false,
      isOpen6: false,
      isOpen7: false,
    }
  },
  methods:{  
      
  }     
}
</script>

<style scoped>

</style>
