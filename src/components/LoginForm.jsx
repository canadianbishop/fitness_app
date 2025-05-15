import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

const LoginForm = () => {
  const [userDets, setUserDets] = useState({
    username: '',
    password: '',
  });

  console.log(userDets)


  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  // getting the user input and saving it to state
  const getInput = (e) => {
    setUserDets((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   const {username,password} = userDets

    if(!username.trim() || !password.trim()) return;

    login(userDets);

    navigate('/home');
  };

  return (
    <div className="container mx-auto pt-18 px-4 sm:px-6 md:px-8 lg:px-10 ">
      <h1 className="text-center  text-slate-400 text-[30px] sm:text-4xl font-bold capitalize mb-6">
        modern task manager
      </h1>
      <h2 className="mb-4 text-center text-[1rem] sm:text-[20px] font-bold text-blue-500">
        sign in to your account
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[100%]
         sm:w-[80%] md:w-[70%] lg:w-[60%] gap-2 mx-auto  "
      >
        <div className=" flex flex-col w-[90%]  gap-2 mx-auto  sm:w-[80%] md:w-[77%] py-3 ">
          <label className="font-medium text-lg" htmlFor="username">
            Username
          </label>
          <input
            className=" outline  px-4 py-2  focus:border-2 focus:border-blue-400 focus:outline-none "
            type="text"
            name="username"
            id="username"
            placeholder="John Joe"
            onChange={getInput}
          />
        </div>

        <div className="flex flex-col w-[90%]  gap-2 mx-auto  sm:w-[80%] md:w-[77%] py-3">
          <label className="font-medium text-lg" htmlFor="password">
            Password
          </label>
          <input
            className=" outline  px-4 py-2  focus:border-2 focus:border-blue-400 focus:outline-none "
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            onChange={getInput}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 py-2 p-6 text-lg font-semibold text-white rounded-full mx-auto w-fit"
        >
          Login
        </button>
        {/* 
        <p className="w-fit mx-auto text-sm">
          {' '}
          don't have an acoount yet ?{' '}
          <a className="underline text-blue-500">signUp here</a>
        </p> */}
      </form>
    </div>
  );
};

export default LoginForm;
