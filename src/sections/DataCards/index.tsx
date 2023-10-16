import DataCard from '@/components/DataCard/index';
import LoginForm from '@/components/LoginForm/index';
import React from 'react'
import style from './style.module.css'
import Link from '../../../node_modules/next/link';
import Joining from '@/components/Joining/index';
import Birthdays from '@/components/Birthdays/index';
import Holidays from '@/components/Holidays/index';
import AltStripes from '@/components/AltStripes/index';

const data = [
    {
        title: 'New Joining',
        contentComponent: Joining,

    },
    {
        title: 'Upcoming Birthdays',
        contentComponent: Birthdays,
    },
    {
        title: 'Upcoming Holidays',
        contentComponent: Holidays,
    },
    // {
        //     title: '',
        //     contentComponent: ,
        // },
        // {
        //     title: 'Personal Details',
        //     contentComponent: AltStripes,
        // },
]

const DataCards = () => {
    return (
        <div className={style.container}>
            {data.map((item, index) => (
                <DataCard key={index} item={item} />
            ))}
        </div>
    )
}

export default DataCards;