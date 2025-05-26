import React from 'react'
import { Link } from 'react-router-dom'

export default function BackButton({path,name}) {
    return (
        <div className="flex justify-end-safe mt-5 mr-5">
            <Link className="px-8 py-1 border-2 border-solid border-black  rounded-[6px] transition duration-400 text-black hover:bg-black hover:text-white "
                to={path}>{name}</Link>
        </div>
    )
}
