'use client'
// // LoginPage.js
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// const LoginPage = () => {
//   const {push} = useRouter();

//   const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
//     try {
//       setSubmitting(true);

//       // Make a POST request to the login API
//       const response = await axios.post('http://localhost:3000/api/auth/login', values);

//       // Log the token and other data
//       console.log('Token:', response.data.token);
//       console.log('User ID:', response.data.userId);
//       console.log('Role:', response.data.role);

//       // Redirect based on user role
//       if (response.data.role === 'admin') {
//        push('/admin'); // Redirect to the admin page
//       } else {
//         // Redirect to another page (replace with your desired route)
//         push('/dashboard');
//       }
//     } catch (error) {
//       console.error('Login failed', error);

//       if (error.response) {
//         console.error('API Error Response:', error.response.data);
//       }

//       // Set an error message for the password field
//       setFieldError('password', 'Invalid username or password');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <Formik initialValues={{ username: '', password: '' }} onSubmit={handleSubmit}>
//         <Form className="bg-white p-8 rounded shadow-md max-w-md">
//           <h2 className="text-2xl font-bold mb-6">Login</h2>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//               Username
//             </label>
//             <Field
//               type="text"
//               name="username"
//               placeholder="Username"
//               className="w-full px-3 py-2 border rounded shadow appearance-none"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <Field
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="w-full px-3 py-2 border rounded shadow appearance-none"
//             />
//             <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Sign In
//             </button>
//           </div>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default LoginPage;



import { Formik, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useRouter } from 'next/navigation';
import jwt from "jsonwebtoken"; // Update the import statement
import { useEffect } from "react";

const LoginPage = () => {
  const {push} = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // If a token is found, redirect the user to the home page
      push("/");
    }
  }, []);
  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          identifier: values.email,
          password: values.password,
        }
      );
      console.log('Login successful:', response.data);
      // Handle redirection or other logic here
    } catch (error) {
      console.error('Login failed:', error);
      if (error.response) {
        console.error('API Error Response:', error.response.data);
      }
      setFieldError("password", "Invalid username or password");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
        {({ isSubmitting, handleSubmit }) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={isSubmitting}
              >
                Sign In
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
