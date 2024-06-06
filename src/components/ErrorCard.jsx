import React from 'react'

export default function ErrorCard({textError}) {
  return (
    <div class=" ml-6 mr-6 items-center border-2 border-[rgba(35,30,41,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#131313] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
  <div>
    <h1 class="text-[2em] font-medium mb-4 text-yellow-100">Warning !</h1>
    <p class="text-[1em] ">
      {textError}
    </p>
  </div>
</div>

  )
}
