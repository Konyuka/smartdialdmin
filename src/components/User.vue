<template>

<section>
   
<div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
        <option>My Account</option>
        <option>Company</option>
        <option selected>Team Members</option>
        <option>Billing</option>
      </select>
    </div>
    
    <div class="hidden sm:block">

      <div class="border-b border-gray-200">
        <nav class="-mb-px flex" aria-label="Tabs">
          <a  v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-500 bg-white': openTab !== 1, 'text-indigo-600 bg-gray-200': openTab === 1}" class="uppercase w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-xs hover:text-gray-700 hover:border-indigo-600">
            User Record Information
          </a>
          <a  v-on:click="toggleTabs(2)" v-bind:class="{'text-gray-500 bg-white': openTab !== 2, 'text-indigo-600 bg-gray-200': openTab === 2}" class="uppercase w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-xs hover:text-gray-700 hover:border-indigo-600">
            Admin Interface Options
          </a>
          <a v-on:click="toggleTabs(3)" v-bind:class="{'text-gray-500 bg-white': openTab !== 3, 'text-indigo-600 bg-gray-200': openTab === 3}" class="uppercase w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-xs hover:text-gray-700 hover:border-indigo-600">
            Agent Reports Options
          </a>
          <a v-on:click="toggleTabs(4)" v-bind:class="{'text-gray-500 bg-white': openTab !== 4, 'text-indigo-600 bg-gray-200': openTab === 4}" class="uppercase w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-xs hover:text-gray-700 hover:border-indigo-600">
            User Campaign Options
          </a>
          <a v-on:click="toggleTabs(5)" v-bind:class="{'text-gray-500 bg-white': openTab !== 5, 'text-indigo-600 bg-gray-200': openTab === 5}" class="uppercase w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-xs hover:text-gray-700 hover:border-indigo-600">
            Inbound Groups Options
          </a>
          <a v-on:click="toggleTabs(6)" v-bind:class="{'text-gray-500 bg-white': openTab !== 6, 'text-indigo-600 bg-gray-200': openTab === 6}" class="uppercase w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-xs hover:text-gray-700 hover:border-indigo-600">
            Admin Reports Options 
          </a>
          <a v-on:click="toggleTabs(7)" v-bind:class="{'text-gray-500 bg-white': openTab !== 7, 'text-indigo-600 bg-gray-200': openTab === 7}" class="uppercase w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-xs hover:text-gray-700 hover:border-indigo-600">
            API & Other Admin Options
          </a>
        </nav>
      </div>

      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 mt-4 shadow-lg rounded"> 

      <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
  
        <form class="space-y-8 divide-y divide-gray-200 px-10 pb-10 ">
          <div class="space-y-8 divide-y divide-gray-200">
            <div class="pt-8">
              <div>
                <h3 class="text-lg leading-6 font-medium text-indigo-600">
                  User Admin Interface Options
                </h3>
              </div>
              <hr class="mt-3">
              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    User Number
                  </label>
                  <div class="mt-1">
                    <input type="text" id="city" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div class="mt-1">
                    <input type="text" id="city" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div class="mt-1">
                    <input type="text" id="city" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    Phone Login
                  </label>
                  <div class="mt-1">
                    <input type="text" id="city" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    Phone Password
                  </label>
                  <div class="mt-1">
                    <input type="text" id="city" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    Voice ID
                  </label>
                  <div class="mt-1">
                    <input type="text" id="city" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div class="mt-1">
                    <input type="text" id="city" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    User Code
                  </label>
                  <div class="mt-1">
                    <input type="text" id="city" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>
                <div class="sm:col-span-1">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    Main Territory 
                  </label>
                  <div class="mt-1">
                    <input type="text" id="city" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>
                <div class="sm:col-span-1">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    User Nick Name 
                  </label>
                  <div class="mt-1">
                    <input type="text" id="city" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-gray-700">
                    User Group
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>Tcamp</option>
                      <option>DCamp</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="country" class="block text-sm font-medium text-gray-700">
                    User Level 
                  </label>
                  <div class="mt-1">
                    <select id="country" class="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-sm font-medium text-gray-700">
                    Active
                  </label>
                  <div class="mt-2">
                    <select id="country" class="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  
                </div>
                
                <div class="sm:col-span-3">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    Last Login Information
                  </label>
                  <div class="mt-1">
                    <input disabled type="text" id="city" placeholder="2020-12-01 08:33:54 - 0 - 172.16.10.13" class="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="country" class="block text-sm font-medium text-gray-700">
                    Force Change Password
                  </label>
                  <div class="mt-1">
                    <select id="country" class="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="pt-5">
            <div class="flex justify-end">
              <button type="button" class="inline-flex items-center px-2 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                Cancel 
                <svg class="ml-1 h-6 w-6 text-white-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
              </button>
              <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                Save
                <svg class="ml-1 h-6 w-6 text-white-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </form>        

      </div>

      <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
        <form class="space-y-8 divide-y divide-gray-200 px-10 pb-10 ">
          <div class="space-y-8 divide-y divide-gray-200">
            <div class="pt-8">
              <div>
                <h3 class="text-lg leading-6 font-medium text-indigo-600">
                  User Admin Interface Options
                </h3>
              </div>
              <hr class="mt-3">
              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              
                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    View Reports
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Alter Agent Interface
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Users
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Change Campaigns
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Delete Users
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Users Groups
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Delete User Groups
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Lists
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Delete Lists
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Load Leads
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Leads
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Export Delete Leads
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Download Lists
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Export Reports
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Delete From DNC Lists
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Campaigns 
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Campaigns Details 
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Delete Campaigns 
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify In-Groups
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Delete In-Groups
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify DID's
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Delete DID's
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Edit Custom Dialplans
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Remote Agents
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Delete Remote Agents
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Scripts
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Delete Scripts
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Filters
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Delete Filters
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    AGC Admin Access
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    AGC Delete Phones
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Call Times
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Delete Call Times
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Servers
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Shifts
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Phones
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Carriers
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Labels
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Colors 
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Statuses
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Voicemail
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Audio Store
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Music On Hold
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify TTS
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify Contacts
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    CallCard Access
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Add TimeClock Log 
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Modify TimeClock Log 
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Delete TimeClock Log 
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Manager Shift Enforcement Override
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Manager Pause Code Approval
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="pt-5">
            <div class="flex justify-end">
              <button type="button" class="inline-flex items-center px-2 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                Cancel 
                <svg class="ml-1 h-6 w-6 text-white-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
              </button>
              <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                Save
                <svg class="ml-1 h-6 w-6 text-white-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
        <form class="space-y-8 divide-y divide-gray-200 px-10 pb-10 ">
          <div class="space-y-8 divide-y divide-gray-200">
            <div class="pt-8">
              <div>
                <h3 class="text-lg leading-6 font-medium text-indigo-600">
                  User Agent Interface Options
                </h3>
              </div>
              <hr class="mt-3">
              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              
                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Agent Choose Ingroups
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Agent Choose Blended
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Hot Keys Active 
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Scheduled Callbacks
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Agent-Only Callbacks 
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Agent Call Manual
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Agent Call Chat
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Agent Recording 
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Agent Transfers
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Closers Default Blended
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Allow Alerts
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Max Inbound Filtering
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                
                <div class="sm:col-span-2">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Next-Dial Callbacks Override
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Not Active</option>
                      <option>Enabled</option>
                      <option>Disabled</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Agent Recording Override
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Disabled</option>
                      <option>Never</option>
                      <option>OnDemand</option>
                      <option>All Calls</option>
                      <option>All Force</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Agent Lead Search Override
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Not Active</option>
                      <option>Enabled</option>
                      <option>Disabled</option>
                      <option>Live Call Inbound</option>
                      <option>Live Call Inbound Manual</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Agent Alter Customer Data Override
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Not Active</option>
                      <option>Allow Alter</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Agent Alter Customer Phone Override
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Not Active</option>
                      <option>Allow Alter</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Lead Filter
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>None</option>
                      <option>Drop 72 Hour</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Present Contact Search 
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>None</option>
                      <option>Drop 72 Hour</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Agent Shift Enforcement Override
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Disabled</option>
                      <option>Off</option>
                      <option>Start</option>
                      <option>All</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Agent Call Log View Override
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Disabled</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Campaign Hide Call Log Override
                  </label>
                  <div class="mt-1">
                    <select id="country" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Disabled</option>
                      <option>Yes</option>
                      <option>No</option>
                      <option>Show 1</option>
                      <option>Show 2</option>
                      <option>Show 3</option>
                      <option>Show 4</option>
                      <option>Show 5</option>
                      <option>Show 6</option>
                      <option>Show 7</option>
                      <option>Show 8</option>
                      <option>Show 9</option>
                      <option>Show 10</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    Alert Enabled
                  </label>
                  <div class="mt-1">
                    <input disabled type="text" id="city" placeholder="0" class="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>

                 <div class="sm:col-span-1">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    Max Inbound Calls
                  </label>
                  <div class="mt-1">
                    <input disabled type="text" id="city" placeholder="0" class="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    Wrap Seconds Override
                  </label>
                  <div class="mt-1">
                    <input disabled type="text" id="city" placeholder="-1" class="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    Agent Ready Max Logout Override
                  </label>
                  <div class="mt-1">
                    <input disabled type="text" id="city" placeholder="-1" class="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    Maximum Manual Dial Hopper Calls
                  </label>
                  <div class="mt-1">
                    <input disabled type="text" id="city" placeholder="0" class="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    Maximum Manual Dial Hopper Calls Per Hour
                  </label>
                  <div class="mt-1">
                    <input disabled type="text" id="city" placeholder="0" class="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Filter Statuses
                  </label>
                  <div class="mt-1">
                    <select id="country" multiple class="form-multiselect h-40 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>A</option>
                      <option>AA</option>
                      <option>AB</option>
                      <option>ADC</option>
                      <option>ADCT</option>
                      <option>AFAX</option>
                      <option>AFTHRS</option>
                      <option>AL</option>
                      <option>AM</option>
                      <option>B</option>
                      <option>CB</option>
                      <option>CBHOLD</option>
                      <option>DAIR</option>
                      <option>DC</option>
                      <option>DEC</option>
                      <option>DNC</option>
                      <option>DNCC</option>
                      <option>DNCL</option>
                      <option>DROP</option>
                      <option>ERI</option>
                      <option>IVRXFR</option>
                      <option>LRERR</option>
                      <option>LSMERG</option>
                      <option>MAXCALL</option>
                      <option>MLINAT</option>
                      <option>N</option>
                      <option>NA</option>
                      <option>NAQUE</option>
                      <option>NEW</option>
                      <option>NI</option>
                      <option>NP</option>
                      <option>PDROP</option>
                      <option>PM</option>
                      <option>PU</option>
                      <option>QCFAIL</option>
                      <option>QVMAIL</option>
                      <option>RQXFER</option>
                      <option>SALE</option>
                      <option>SVYCLM</option>
                      <option>SVYEXT</option>
                      <option>SVYHU</option>
                      <option>SVYREC</option>
                      <option>SVYVM</option>
                      <option>TIMEOT</option>
                      <option>XDROP</option>
                      <option>XFER</option>
                    </select>
                  </div>
                </div>
              
                <div class="sm:col-span-3">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Filter In-Groups
                  </label>
                  <div class="mt-1">
                    <select id="country" multiple class="form-multiselect h-40 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Agent Direct</option>
                      <option>Agent Direct Chat</option>
                      <option>Care</option>
                      <option>Finance</option>
                      <option>Reception</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-1">
                  <label for="city" class="block text-sm font-medium text-gray-700">
                    Filter Minimum (s)
                  </label>
                  <div class="mt-1">
                    <input type="text" id="city" placeholder="-1" class="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="pt-5">
            <div class="flex justify-end">
              <button type="button" class="inline-flex items-center px-2 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                Cancel 
                <svg class="ml-1 h-6 w-6 text-white-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
              </button>
              <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                Save
                <svg class="ml-1 h-6 w-6 text-white-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
        <form class="space-y-8 divide-y divide-gray-200 px-10 pb-10 ">

          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"> 

            <fieldset  class="sm:col-span-3 pr-20">
              <legend class="block text-lg font-medium text-gray-700 text-center pb-2">Demo Campaign</legend>
              <hr class="pt-2">
              <div class="mt-1 bg-white rounded-md shadow-sm -space-y-px">
                
                <div class="flex -space-x-px">
                  
                    <label for="country" class="sr-only">Rank</label>
                    <div class="w-1/2 flex-1 min-w-0">
                    <legend class="block text-sm font-medium text-gray-700">Rank</legend>
                    <select id="country" name="country" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                      <option>1</option>
                      <option>0</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    </div>
                    
                    <div class="w-1/2 flex-1 min-w-0">
                    <legend class="block text-sm font-medium text-gray-700">Grade</legend>
                    <select id="country" name="country" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    </div>

                    <div>
                    <label for="card-number" class="sr-only">Calls</label>
                    <legend class="block text-sm font-medium text-gray-700">Calls</legend>
                    <input disabled placeholder="20" type="text" name="card-number" id="card-number" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                    </div>

                </div>

              </div>
            </fieldset>

            <fieldset  class="sm:col-span-3 pr-20">
              <legend class="block text-lg font-medium text-gray-700 text-center pb-2">Test Campaign</legend>
              <hr class="pt-2">
              <div class="mt-1 bg-white rounded-md shadow-sm -space-y-px">
                
                <div class="flex -space-x-px">
                  
                    <label for="country" class="sr-only">Rank</label>
                    <div class="w-1/2 flex-1 min-w-0">
                    <legend class="block text-sm font-medium text-gray-700">Rank</legend>
                    <select id="country" name="country" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                      <option>1</option>
                      <option>0</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    </div>
                    
                    <div class="w-1/2 flex-1 min-w-0">
                    <legend class="block text-sm font-medium text-gray-700">Grade</legend>
                    <select id="country" name="country" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    </div>

                    <div>
                    <label for="card-number" class="sr-only">Calls</label>
                    <legend class="block text-sm font-medium text-gray-700">Calls</legend>
                    <input disabled placeholder="56" type="text" name="card-number" id="card-number" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                    </div>

                </div>

              </div>
            </fieldset>

          </div>

          <div class="pt-5">
            <div class="flex justify-end">
              <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Cancel
              </button>
              <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
          </div>

        </form>
      </div>

      <div v-bind:class="{'hidden': openTab !== 5, 'block': openTab === 5}">
        <form class="space-y-8 divide-y divide-gray-200 px-10 pb-10 ">

          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"> 

            <fieldset  class="sm:col-span-3 pr-20">
              <div class="flex">
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600" checked><span class="ml-2 text-gray-700"></span>
              </label>
              <legend class="block text-lg font-medium text-gray-700 text-center pb-2">Agent Direct</legend>
              </div>
              <hr class="pt-2">
              <div class="mt-1 bg-white rounded-md shadow-sm -space-y-px">
                
                <div class="flex -space-x-px">
                  
                    <label for="country" class="sr-only">Rank</label>
                    <div class="w-1/2 flex-1 min-w-0">
                    <legend class="block text-sm font-medium text-gray-700">Rank</legend>
                    <select id="country" name="country" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                      <option>1</option>
                      <option>0</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    </div>
                    
                    <div class="w-1/2 flex-1 min-w-0">
                    <legend class="block text-sm font-medium text-gray-700">Grade</legend>
                    <select id="country" name="country" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    </div>

                    <div>
                    <label for="card-number" class="sr-only">Calls</label>
                    <legend class="block text-sm font-medium text-gray-700">Calls</legend>
                    <input disabled placeholder="20" type="text" name="card-number" id="card-number" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                    </div>

                </div>

              </div>
            </fieldset>

            <fieldset  class="sm:col-span-3 pr-20">
              <div class="flex">
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600" checked><span class="ml-2 text-gray-700"></span>
              </label>
              <legend class="block text-lg font-medium text-gray-700 text-center pb-2">Agent Direct Chat</legend>
              </div>
              <hr class="pt-2">
              <div class="mt-1 bg-white rounded-md shadow-sm -space-y-px">
                
                <div class="flex -space-x-px">
                  
                    <label for="country" class="sr-only">Rank</label>
                    <div class="w-1/2 flex-1 min-w-0">
                    <legend class="block text-sm font-medium text-gray-700">Rank</legend>
                    <select id="country" name="country" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                      <option>1</option>
                      <option>0</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    </div>
                    
                    <div class="w-1/2 flex-1 min-w-0">
                    <legend class="block text-sm font-medium text-gray-700">Grade</legend>
                    <select id="country" name="country" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    </div>

                    <div>
                    <label for="card-number" class="sr-only">Calls</label>
                    <legend class="block text-sm font-medium text-gray-700">Calls</legend>
                    <input disabled placeholder="20" type="text" name="card-number" id="card-number" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                    </div>

                </div>

              </div>
            </fieldset>

            <fieldset  class="sm:col-span-3 pr-20">
              <div class="flex">
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600" checked><span class="ml-2 text-gray-700"></span>
              </label>
              <legend class="block text-lg font-medium text-gray-700 text-center pb-2">Care</legend>
              </div>
              <hr class="pt-2">
              <div class="mt-1 bg-white rounded-md shadow-sm -space-y-px">
                
                <div class="flex -space-x-px">
                  
                    <label for="country" class="sr-only">Rank</label>
                    <div class="w-1/2 flex-1 min-w-0">
                    <legend class="block text-sm font-medium text-gray-700">Rank</legend>
                    <select id="country" name="country" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                      <option>1</option>
                      <option>0</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    </div>
                    
                    <div class="w-1/2 flex-1 min-w-0">
                    <legend class="block text-sm font-medium text-gray-700">Grade</legend>
                    <select id="country" name="country" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    </div>

                    <div>
                    <label for="card-number" class="sr-only">Calls</label>
                    <legend class="block text-sm font-medium text-gray-700">Calls</legend>
                    <input disabled placeholder="20" type="text" name="card-number" id="card-number" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                    </div>

                </div>

              </div>
            </fieldset>

            <fieldset  class="sm:col-span-3 pr-20">
              <div class="flex">
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600" checked><span class="ml-2 text-gray-700"></span>
              </label>
              <legend class="block text-lg font-medium text-gray-700 text-center pb-2">Finance</legend>
              </div>
              <hr class="pt-2">
              <div class="mt-1 bg-white rounded-md shadow-sm -space-y-px">
                
                <div class="flex -space-x-px">
                  
                    <label for="country" class="sr-only">Rank</label>
                    <div class="w-1/2 flex-1 min-w-0">
                    <legend class="block text-sm font-medium text-gray-700">Rank</legend>
                    <select id="country" name="country" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                      <option>1</option>
                      <option>0</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    </div>
                    
                    <div class="w-1/2 flex-1 min-w-0">
                    <legend class="block text-sm font-medium text-gray-700">Grade</legend>
                    <select id="country" name="country" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    </div>

                    <div>
                    <label for="card-number" class="sr-only">Calls</label>
                    <legend class="block text-sm font-medium text-gray-700">Calls</legend>
                    <input disabled placeholder="20" type="text" name="card-number" id="card-number" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                    </div>

                </div>

              </div>
            </fieldset>

          </div>

          <div class="pt-5">
            <div class="flex justify-end">
              <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Cancel
              </button>
              <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
          </div>
          
        </form>
      </div>

      <div v-bind:class="{'hidden': openTab !== 6, 'block': openTab === 6}">
        <form class="space-y-8 divide-y divide-gray-200 px-10 pb-10 ">
          <div class="space-y-8 divide-y divide-gray-200">
            <div class="pt-8">
              <div>
                <h3 class="text-lg leading-6 font-medium text-indigo-600">
                  Admin Reports Options
                </h3>
              </div>
              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
               

                <div class="sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-gray-700">
                    Realtime Block User Information
                  </label>
                  <div class="mt-1">
                    <select id="country" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-gray-700">
                    Admin Hide Lead Data
                  </label>
                  <div class="mt-1">
                    <select id="country" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-gray-700">
                    Admin Hide Phone Data
                  </label>
                  <div class="mt-1">
                    <select id="country" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-gray-700">
                    Search Lead Ignore Group Restrictions
                  </label>
                  <div class="mt-1">
                    <select id="country" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="pt-5">
            <div class="flex justify-end">
              <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Cancel
              </button>
              <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>

      <div v-bind:class="{'hidden': openTab !== 7, 'block': openTab === 7}">
        <form class="space-y-8 divide-y divide-gray-200 px-10 pb-10 ">
          <div class="space-y-8 divide-y divide-gray-200">

            <div class="pt-8">
              <div>
                <h3 class="text-lg leading-6 font-medium text-indigo-600">
                  Level 9 Admin Options
                </h3>
              </div>
              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
               
                <div class="sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-gray-700">
                    Modify Same User Level
                  </label>
                  <div class="mt-1">
                    <select id="country" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-gray-700">
                    Alter Admin Interface Options
                  </label>
                  <div class="mt-1">
                    <select id="country" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

              </div>
            </div>

            <div class="pt-8">
              <div>
                <h3 class="text-lg leading-6 font-medium text-indigo-600">
                  API User Options
                </h3>
              </div>
              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
               
                <div class="sm:col-span-2">
                  <label for="country" class="block text-sm font-medium text-gray-700">
                    Agent API Access
                  </label>
                  <div class="mt-1">
                    <select id="country" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="country" class="block text-sm font-medium text-gray-700">
                    API List Restrict 
                  </label>
                  <div class="mt-1">
                    <select id="country" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="country" class="block text-sm font-medium text-gray-700">
                    Disable Screen Options (API Only User)
                  </label>
                  <div class="mt-1">
                    <select id="country" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-4">
                  <label for="country" class="block text-xs font-medium text-gray-700">
                    Filter In-Groups
                  </label>
                  <div class="mt-1">
                    <select id="country" multiple class="form-multiselect h-40 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md">
                      <option>Add Group Aliases</option>
                      <option>Add Lead</option>
                      <option>Add List</option>
                      <option>Add Phone</option>
                      <option>Add Phone Alias</option>
                      <option>Add User</option>
                      <option>Agent Ingroup Info</option>
                      <option>Agent Stats Export</option>
                      <option>Agent Status</option>
                      <option>Audio Playback</option>
                      <option>Blind Monitor</option>
                      <option>Call Agent</option>
                      <option>Call Id Info</option>
                      <option>Change Ingroups</option>
                      <option>Check Phone Number</option>
                      <option>DID Log Export</option>
                      <option>External Add Lead</option>
                      <option>External Dial</option>
                      <option>External Hangup</option>
                      <option>External Pause</option>
                    </select>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div class="pt-5">
            <div class="flex justify-end">
              <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Cancel
              </button>
              <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>

      </div>


    </div>



</section>

</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      openTab: 1,
      isOn: false,
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    },
  }
  
}
</script>

