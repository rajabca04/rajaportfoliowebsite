import React from 'react'
import Logo from "../logo2.jpg";
function Navbar() {
  return (
    <>
         <nav class="bg-black border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-10 w-10" src={Logo} alt="logo" />
              </div>
              <div class=" md:float-right">
                <div class="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#3"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#3"
                    class="text-gray-300 hover:bg-gray-700 hover:cursor-pointer hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                  <a
                    href="#3"
                    class="text-gray-300 hover:bg-gray-700 hover:cursor-pointer hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Buy me a coffee ☕️
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar