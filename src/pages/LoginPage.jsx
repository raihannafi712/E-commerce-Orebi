import React, { useState } from "react";
import Container from './../components/Container';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { TiTick } from "react-icons/ti";


const LoginPage = () => {

  const auth = getAuth();
  let [email , setEmail] = useState("");
  let [password , setPassword] = useState("");
  let [error , setError] = useState();
  let [complete , setComplete] = useState();
  

  let handleEmail = (e) => {
    setEmail(e.target.value);
  }

  let handlePassword = (e) =>{
    setPassword(e.target.value);
  }

  let handleSubmit = () => {
    if (email == "") {
        setError("Please enter your Email!");     

    } else if (password == "") {
        setError("Please enter your password!");
        
    }else {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setComplete(complete);
        setError("Successfully logged in!");      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError("Wrong password!");
        
      });
    }
  }

  return (
    <section>
      <Container>
        <div className="pt-[20px]">
          <h3 className="font-dm text-[39px] font-bold ">Log in</h3>
          <div className="flex text-[12px] font-normal font-dm text-[#767676] items-center mt-2 ">
            <Link to="/" className="hover:text-black hover:underline">Home</Link>
            <p> <FaAngleRight /></p>
            <Link to="/signup" className="hover:text-black hover:underline">Log In</Link>
          </div>
        </div>   
        <div className="py-[50px]">
          <div className="w-[30%] mx-auto ">
              <form class="max-w-sm mx-auto">
                <div class="mb-5">
                  <label for="email" className="block mb-2 text-[18px] font-dm font-bold text-black ">Your Email</label>
                  <input onChange={handleEmail} type="email" id="email" className="bg-white  text-black text-sm border-black border-[1px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com"  />
                </div>
                <div class="mb-5">
                  <label for="password"  className="block mb-2 text-[18px] font-dm font-bold text-black ">Your password</label>
                  <input type="password" onChange={handlePassword} id="password" className="bg-white  text-black text-sm border-black border-[1px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div class="flex items-start mb-5">
                  <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                  </div>
                  <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <div className="flex gap-x-[20px] items-center ">
                  <a onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
                    Log in
                  </a>
                  <h3 className="font-dm font-medium text-red-700 ">
                      {error}
                  </h3>
                </div>
              </form>
          </div>
          {/* {!complete 
            ?
            <>
              <div className="flex justify-center gap-x-[10px] items-center ">
                <div className="text-[20px] text-white p-[10px] bg-black rounded-[100%] ">
                  <TiTick />
                </div>
                <h3 className="font-dm font-bold text-[20px]  ">
                  Successfully logged in!
                </h3>
              </div>
            </>
            :
            <div className="w-[30%] mx-auto ">
              <form class="max-w-sm mx-auto">
                <div class="mb-5">
                  <label for="email" className="block mb-2 text-[18px] font-dm font-bold text-black ">Your Email</label>
                  <input onChange={handleEmail} type="email" id="email" className="bg-white  text-black text-sm border-black border-[1px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com"  />
                </div>
                <div class="mb-5">
                  <label for="password"  className="block mb-2 text-[18px] font-dm font-bold text-black ">Your password</label>
                  <input type="password" onChange={handlePassword} id="password" className="bg-white  text-black text-sm border-black border-[1px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div class="flex items-start mb-5">
                  <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                  </div>
                  <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <div className="flex gap-x-[20px] items-center ">
                  <a onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
                    Log in
                  </a>
                  <h3 className="font-dm font-medium text-red-500 ">
                      {error}
                  </h3>
                </div>
              </form>
            </div>
          } */}
        </div>
      </Container>
    </section>
  )
};

export default LoginPage;
