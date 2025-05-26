import React from 'react'

export default function SubTItles({title}) {
  return (
    <div  className="text-3xl m-10 font-stretch-semi-expanded font-bold text-blue-600 uppercase border-3 border-blue-800 w-50 rounded-2xl flex justify-center hover:bg-black hover:text-amber-50 hover:border-amber-50  transition duration-300">{title}</div>
  )
}
