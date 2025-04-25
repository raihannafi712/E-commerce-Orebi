import React, { useState } from "react";
import Container from './../components/Container';
import { Link, useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPage = () => {

    const auth = getAuth();
    let [email , setEmail] = useState("");
    let [password , setPassword] = useState("");
    let navigate = useNavigate();                   /* To navigate to login page */
    let [error , setError] = useState();


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
            setError("Please set a new password!");
            
        }else {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate("/login")
            // console.log("done");         /* to check */
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log("oops");
            });
        }
    }
  return (
    <section>
        <Container>
            <div className="pt-[20px]">
                <h3 className="font-dm text-[39px] font-bold ">Sign up</h3>
                <div className="flex text-[12px] font-normal font-dm text-[#767676] items-center mt-2 ">
                    <Link to="/" className="hover:text-black hover:underline">Home</Link>
                    <p> <FaAngleRight /></p>
                    <Link to="/signup" className="hover:text-black hover:underline">Sign up</Link>
                </div>
            </div>   
            <div>
                <div>
                    <h3 className="font-dm font-bold text-[28px] text-black py-[42px] ">Your Personal Details</h3>
                </div>
                <div className="flex pb-[80px] ">
                    <div className="w-[20%] ">
                        <div className="">
                            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">First Name</h3>
                            <input type="text" placeholder="First Name"
                            className="border-b-2 "             
                            />
                        </div>
                        <div className="">
                            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Email Address</h3>
                            <input onChange={handleEmail} type="email" id="email" placeholder="company@domain.com"
                            className="border-b-2 "             
                            />
                        </div>
                    </div>
                    <div className="w-[50%] ">
                        <div className="">
                            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Last Name</h3>
                            <input type="text" placeholder="Last Name"
                            className="border-b-2 "             
                            />
                        </div>
                        <div className="">
                            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Telephone</h3>
                            <input type="text" placeholder="Your phone number"
                            className="border-b-2 "             
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-dm font-bold text-[28px] text-black py-[20px] ">New Customer</h3>
                </div>
                <div className="flex pb-[90px] ">
                    <div className="w-[20%] ">
                        <div className="">
                            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Address 1</h3>
                            <input type="text" placeholder="4279 Zboncak Port Suite 6212"
                            className="border-b-2 "             
                            />
                        </div>
                        <div className="">
                            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">City</h3>
                            <input type="text" placeholder="Your city"
                            className="border-b-2 "             
                            />
                        </div>
                        <div className="">
                            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Division</h3>
                            <select name="cate" id="cate" className="w-[70%] border-black border-[1px] duration-300 ease-in-out ">
                                <option value="valOne" className="text-center ">Dhaka</option>
                                <option value="valOne" className="text-center ">Dhaka</option>
                                <option value="valOne" className="text-center ">Dhaka</option>
                                <option value="valOne" className="text-center ">Dhaka</option>
                                <option value="valOne" className="text-center ">Dhaka</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-[50%] ">
                        <div className="">
                            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Address 2</h3>
                            <input type="text" placeholder="—"
                            className="border-b-2 "             
                            />
                        </div>
                        <div className="">
                            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Post Code</h3>
                            <input type="text" placeholder="05228"
                            className="border-b-2 "             
                            />
                        </div>
                        <div className="">
                            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">District</h3>
                            <select name="cate" id="cate" className="w-[20%] border-black border-[1px] duration-300 ease-in-out ">
                                <option value="valOne" className="text-center ">Dhaka</option>
                                <option value="valOne" className="text-center ">Dhaka</option>
                                <option value="valOne" className="text-center ">Dhaka</option>
                                <option value="valOne" className="text-center ">Dhaka</option>
                                <option value="valOne" className="text-center ">Dhaka</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-dm font-bold text-[28px] text-black py-[20px] ">Your Password</h3>
                </div>
                <div className="flex pb-[70px] ">
                    <div className="w-[20%] ">
                        <div className="">
                            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Password</h3>
                            <input type="password" onChange={handlePassword} id="password" placeholder="Password"
                            className="border-b-2 "             
                            />
                        </div>
                    </div> 
                    <div className="w-[50%] ">
                        <div className="">
                            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Repeat Password</h3>
                            <input type="text" placeholder="Repeat password"
                            className="border-b-2 "             
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 font-dm text-black"/>
                        <label for="default-checkbox" className="ms-2 font-dm font-normal text-[14px] text-[#767676]  ">I have read and agree to the Privacy Policy</label>
                    </div>
                    <div class="flex items-center">
                        <label for="default-checkbox" className="font-dm font-normal text-[14px] text-[#767676]  ">Subscribe Newsletter</label>
                        <div class="flex items-center">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="ms-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="default-radio-1" class="ms-2 font-dm font-normal text-[14px] text-[#767676]">No</label>
                        </div>
                        <div class="flex items-center">
                            <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="ms-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="default-radio-2" class="ms-2 font-dm font-normal text-[14px] text-[#767676]">Yes</label>
                        </div>
                    </div>
                </div>
                <div className="py-[70px] flex gap-x-[20px] items-center ">
                    <a onClick={handleSubmit} className="font-dm lg:text-[14px] text-[12px] font-bold text-center text-[#262626]  py-[8px] lg:py-[15px] px-[47px]  cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:bg-[#2B2B2B] border-[1px] border-gray-300 mr-6 ">
                     Sign up
                    </a>
                    <h3 className="font-dm font-medium text-red-500 ">
                        {error}
                    </h3>
                </div>
                <div className="flex items-center pb-[20px] ">
                    <h3 className="font-dm lg:text-[14px] text-[12px] font-medium text-black">Already a member?</h3>
                    <Link to="/login">
                        <h3 className="ms-2 font-dm lg:text-[14px] text-[12px] font-medium text-black hover:underline hover:font-bold ">Log in</h3>
                    </Link>
                </div>
            </div>
        </Container>
    </section>
  )
};

export default SignUpPage;
