import React from 'react'
import style from './style.module.css'
import Image from '../../../node_modules/next/image'
import Account from '../../../public/images/admin.png'

const data = [
    {
        img: Account,
        name: 'Jay Parmar',
        post: 'CEO',
        date: 'October 15'
    },
    {
        img: Account,
        name: 'Jay Parmar',
        post: 'CEO',
        date: 'October 15'
    },
    {
        img: Account,
        name: 'Jay Parmar',
        post: 'CEO',
        date: 'October 15'
    },
    {
        img: Account,
        name: 'Jay Parmar',
        post: 'CEO',
        date: 'October 15'
    },
    {
        img: Account,
        name: 'Jay Parmar',
        post: 'CEO',
        date: 'October 15'
    }
]

const Birthdays = () => {
    return (
        <main className={style.list}>
            {data.map((people, index) => (
                <div key={index} className={style.item}>
                    <Image src={people.img} alt={'user image'}/>
                    <div>
                    <h2 className='text-2xl'>{people.name}</h2>
                    <p className='text-base text-slate-400'>{people.post}</p>
                    <p className='text-base text-blue-400'>{people.date}</p>
                    </div>
                </div>
            ))}
            
        </main>
    )
}

export default Birthdays