import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-white">

            <div className="mx-auto w-full max-w-lg bg-white rounded-2xl p-10 border border-pink-100 shadow-md">

                <div className="mb-4 flex justify-center">
                    <span className="inline-block w-full max-w-[110px]">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2 className="text-center text-2xl font-bold text-gray-800">
                    Sign up to create account
                </h2>

                <p className="mt-2 text-center text-base text-gray-500">
                    Already have an account?{' '}
                    <Link
                        to="/login"
                        className="font-medium text-pink-500 hover:text-pink-600 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

                {error && (
                    <p className="text-red-500 mt-6 text-center">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit(create)} className="mt-8">
                    <div className="space-y-5">

                        <Input
                            label="Full Name"
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />

                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Enter valid email"
                                }
                            })}
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />

                        <Button
                            type="submit"
                            className="w-full"
                        >
                            Create Account
                        </Button>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signup