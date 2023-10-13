'use client'
import Image from 'next/image';
import React from 'react';
import AdminImage from '../../../public/images/admin.png';
import StudentImage from '../../../public/images/student.png';
import CompLogo from '../../../public/images/complogo.png';
import style from './style.module.css';
import Cards from '@/components/Cards/index';

const cardDataArray = [
    {
      title: 'Admin',
      image: AdminImage,
    },
    {
      title: 'Student',
      image: StudentImage,
    },
  ];

const LoginPage = () => {
  return (
    <main className={style.parent}>
      <div>
        <Image src={CompLogo} alt={'Company Logo'} width={150} height={100} className={style.logo} />
      </div>
      <div className={style.cont}>
      {cardDataArray.map((cardData, index) => (
        <Cards key={index} cardData={cardData} />
      ))}
      </div>
    </main>
  );
};

export default LoginPage;