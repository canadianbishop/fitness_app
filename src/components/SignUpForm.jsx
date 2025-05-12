
import { useState } from "react";
import { useNavigate } from "react-router";

const SignUpForm = () => {

  const navigate = useNavigate()

  const[user, setUser] = useState({
    fullname: '',
    username: '',
    password: ''
  })

const handleSubmit = (e)=>{
  e.preventDefault();
  // check if the input fields is not empty
 const fullname = user.fullname.length > 0 
 const username = user.username.length > 0
 const password = user.password. length > 0

if(fullname && username && password){
  // save to local storage
  window.localStorage.setItem('userDets', JSON.stringify(user))
  navigate('login')
}
 
}

  const getInput = (e)=>{
      setUser(prev=> ({...prev, [e.target.name]: e.target.value}))
  }


  return (
    <div className="container mx-auto pt-18 px-4 sm:px-6 md:px-8 lg:px-10  ">
      <h1 className="text-center  text-slate-400 text-[30px] sm:text-4xl font-bold capitalize mb-6">modern task manager</h1>
        <h2 className="mb-4 text-center text-[1rem] sm:text-[20px] font-bold text-blue-500">SIGNUP PAGE</h2>
        <form  onSubmit={handleSubmit} className="flex flex-col w-[100%]
         sm:w-[80%] md:w-[70%] lg:w-[60%] gap-6 mx-auto   ">

            <div className="flex flex-col w-[90%]  gap-1 mx-auto  sm:w-[80%] md:w-[77%]">
              <label className="font-medium text-lg" htmlFor="fullname">Fullname</label>
              <input className=" outline  px-4 py-2  focus:border-2 focus:border-blue-400 focus:outline-none "
               type="text" name="fullname" id="fullname" placeholder="John Joe" onChange={getInput} value={user.fullname}/>
            </div>


            <div className="flex flex-col w-[90%]  gap-1 mx-auto  sm:w-[80%] md:w-[77%]"> 
              <label className="font-medium text-lg"  htmlFor="username">Username</label>
              <input className="outline  px-4 py-2  focus:border-2 focus:border-blue-400 focus:outline-none " 
              type="text" name="username" id="username" placeholder="john123" onChange={getInput} value={user.username} />
            </div>
            <div className="flex flex-col w-[90%]  gap-1 mx-auto  sm:w-[80%] md:w-[77%]">
              <label className="font-medium text-lg" htmlFor="password">Password</label>
              <input className="outline  px-4 py-2  focus:border-2 focus:border-blue-400 focus:outline-none "
               type="password" name="password" id="" placeholder="enter password" onChange={getInput} value={user.password} />
            </div>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-full w-fit mx-auto text-[20px]">submit</button>
      </form>
    </div>
  );
};

export default SignUpForm
