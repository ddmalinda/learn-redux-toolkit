import React from 'react'


export default function Background({children}) {
  return (
     <div className="min-h-screen flex justify-around top  bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
          <div className="mx-auto min-h-full items-center w-4xl mt-5 rounded-2xl bg-amber-50">
        {children}
        </div>
        </div>
  )
}
