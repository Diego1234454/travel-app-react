import React, {useState} from 'react'
import {Link} from "react-router";
import {Eye, EyeOff} from "lucide-react";


const Register = () => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="flex flex-col gap-4 h-full overflow-hidden bg-gray-100">
            <Link to="/" className="text-black text-2xl px-8 pt-4 font-bold">Viva CDMX</Link>
            <div className="flex flex-col  items-center justify-center h-screen ">
                <div className="flex flex-col bg-white space-y-8 p-8 w-fit rounded-xl">
                    <div className="space-y-2">
                        <h1 className="text-black/90 text-5xl xl:text-6xl">Register</h1>
                        <span className="text-black/80 text-xl xl:text-2xl">Already have an account? <Link to="/Login" className="text-blue-400 text-sm xl:text-xl undeline">Log in</Link> </span>

                    </div>
                    <form className="space-y-4">
                        <div className="flex flex-col space-y-2">
                            <span className="text-black/80 text-2xl xl:text-3xl">Username</span>
                            <input className="text-black text-md xl:text-xl border rounded-md p-2" type="text" placeholder="name" name="name" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <span className="text-black/80 text-2xl xl:text-3xl">Email</span>
                            <input className="text-black text-md xl:text-xl border rounded-md p-2" type="text" placeholder="Email" name="email" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="flex justify-between">
                                <span className="text-black/80 text-2xl xl:text-3xl">Password</span>
                                <div className="text-blue-500/90 hover:cursor-pointer flex gap-1" onClick={() => setIsVisible(!isVisible)}>{isVisible ? <EyeOff/>  : <Eye/>} {isVisible ? "Hide" : "Show"} </div>
                            </div>
                            <input className="text-black text-md border rounded-md p-2 xl:text-xl" type={isVisible ? "name" : "password"} placeholder="Password" name="password" required/>
                        </div>
                        <button className="text-white/95 hover:cursor-pointer bg-blue-500/65 w-fit font-semibold text-md xl:text-xl py-2 px-4 rounded-full">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register
