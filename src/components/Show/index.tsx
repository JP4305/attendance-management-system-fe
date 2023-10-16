import React from 'react'
import Button from '../Button/index'

const Show = () => {

    const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
        <main className='flex justify-between'>
            <div className='flex gap-2'>
                <p>Show</p>
                <select className='border-b flex text-center bg-transparent outline-none w-28'>
                    {numbers.map((number, index) => (
                        <option key={index} value={`option${number}`}>
                            {number}
                        </option>
                    ))}
                </select>
                <p>entries</p>
            </div>
            <div className='flex gap-2'>
                <p>Search:</p>
                <input type="text" className='border-b outline-none bg-transparent'/>
            </div>
        </main>
    )
}

export default Show