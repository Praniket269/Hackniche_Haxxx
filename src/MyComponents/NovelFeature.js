import React from 'react'
import image1 from './dep.jpeg'
import image2 from './vc1.jpeg'

export default function NovelFeature() {
  return (
    <div>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
        <img src={image2}  class="object-cover object-center h-full w-full" />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Contact Family</h2>
        <p class="leading-relaxed text-base px-20">Contact your friends and family from any part of the country</p>
        <div className= "d-flex">
            <button class="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded">Emergency Contact</button>
            <button class="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded">Contact Friends</button>
        </div>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img src={image1}  class="object-cover object-center h-full w-full" />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Join the Community</h2>
        <p class="leading-relaxed text-base">Join the common community to connect with other servicemen</p>
        {/* <button type="button" class="btn btn-primary">Emergency Contact</button> */}
        <button class="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded">Join the Community</button>
        {/* <button type="button" class="btn btn-success">Join the Community</button> */}
      </div>
    </div>
  </div>
</section>

    </div>
  )
}