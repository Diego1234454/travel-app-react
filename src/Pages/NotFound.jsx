import React from 'react'
import {CornerDownLeft} from "lucide-react";
import {Link} from "react-router";

const NotFound = () => {
    return (
        <div className="flex flex-col gap-4 h-screen overflow-hidden bg-black text-white text-5xl items-center justify-center">
            <h1 className="w-full text-center">ERROR 404: NOT FOUND</h1>
            <Link to="/" className="flex gap-2 ">Go Back <CornerDownLeft size={38}/></Link>
        </div>
    )
}
export default NotFound
