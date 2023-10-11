import Image from 'next/image';
import React from 'react';
import AdminImage from '../../../public/images/admin.png';
import StudentImage from '../../../public/images/student.png';
import style from './style.module.css'

const logIn = [
  {
    img: AdminImage,
    title: 'Admin',
  },
  {
    img: StudentImage,
    title: 'Student',
  },
];

const LoginPage = () => {
  return (
    <div className={style.parent}>
      <div className={style.cont}>
        {logIn.map(({ img, title }, index) => (
          <div key={index} className={style.btn}>
            <Image src={img} alt='User Image' className={style.imgshd}/>
            <a href="#" className="text-center text-[#3490dc]">
              {title}
            </a>
            <hr className='mx-4'/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;

