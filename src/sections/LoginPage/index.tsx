'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import AdminImage from '../../../public/images/admin.png';
import StudentImage from '../../../public/images/student.png';
import CompLogo from '../../../public/images/complogo.png';
import style from './style.module.css';
import LoginForm from '@/components/LoginForm/index';

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
  const [activeUser, setActiveUser] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = (user) => {
    setActiveUser(user);
    setShowLoginForm(true);
  };

  return (
    <main className="m-10">
      <div className="grid justify-center">
        <Image src={CompLogo} alt={'Company Logo'} width={150} height={100} className={style.logo} />
      </div>
      <div className={style.parent}>
        <div className={style.cont}>
          {logIn.map(({ img, title }, index) => (
            <div
              key={index}
              className={style.btn}
              onClick={() => toggleLoginForm(title)}
            >
              <Image src={img} alt="User Image" className={style.imgshd} />
              <a href="#" className="text-center text-[#3490dc">
                {title}
              </a>
              <hr className="mx-4" />
              {showLoginForm && activeUser === title && (
                <div className={style.formContainer}>
                  <div className={style.form}>
                    <LoginForm />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default LoginPage;