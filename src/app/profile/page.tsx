"use client";
import Link from "next/link";
import axios from "axios";
import React, {useState} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";


export default function ProfilePage() {

    const router = useRouter();

    const logout = async () => {
        try {
            axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
            
        } catch (error:unknown) {
            toast.error((error as Error).message)
        }
    }
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile page</p>
            <button
            onClick={logout}
            className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Logout</button>
        </div>
    )
}