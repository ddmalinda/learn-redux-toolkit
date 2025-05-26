import React from 'react'

export default function TaskTable({ tasks }) {
    return (
        <div className="mx-auto max-w-max items-center mt-5 ">
            <table className={'min-w-full border border-gray-300 rounded-t-lg overflow-hidden table-fixed'}>
                <thead>
                    <tr className={'mx-auto bg-gradient-to-tr from-indigo-600 to-purple-500 text-white font-extralight '}>
                        <th className={'py-3 px-15 min-w-xl text-2xl'}>Task</th>
                        <th className={'py-3 px-15 text-2xl'}>Status</th>

                    </tr>
                </thead>
                <tbody className='bg-amber-50'>
                    {tasks.map((val) => (
                        <tr key={val.id}>
                            <td className="py-2 px-4 text-xl break-words max-w-2xs">{val.title}</td>
                            <td className="text-center">
                                <p className={`${val.completed ? 'bg-green-600' : 'bg-black'}
                                         m-1 w-35 py-2  rounded-[6px] relative group transition duration-200 text-white active:bg-amber-50 active:text-black`}
                                >
                                    {val.completed ? 'completed' : 'Not completed'}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}
