import { useEffect, useState } from "react";
import { FaLinkedinIn, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { MdLockOutline } from "react-icons/md";
import { useToast } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';
import axios from "axios"


export default function Signup() {
    const router = useRouter();

  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState("");

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [password, setPassword] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    const payload = {
      firstName,
      lastName,
      email,
      password,
    };
  };

  const Signup = (e) => {
    e.preventDefault();

    const payload = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log(payload);

    axios.post("https://sapphire-bull-robe.cyclic.app/users/signup",payload)
      .then((res)=>console.log(res))
   
      .catch((er) => console.log(er));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-4/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">Comapany</span> logo
            </div>
            <div className="py-10">
              <h1 className="text-3xl font-bold text-green-500 mb-2">
                Sign in to Account
              </h1>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>

              {/* soz`cial section */}
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <ImFacebook className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-gray-400 my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="LastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="passsword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <button
                  onClick={Signup}
                  className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* Sign in section */}
          <div className="w-2/5 bg-green-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friends</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
