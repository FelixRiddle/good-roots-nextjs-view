'use client';

import Link from "next/link";

import { ExpressAuthentication, UserData } from "good-roots-ts-api";

/**
 * Login page
 * 
 */
export default async function LoginPage() {
    
    /**
     * Login user
     * 
     * @param userData 
     */
    async function loginUser(userData: UserData) {
        const authServer = new ExpressAuthentication();
        const authApi = authServer.authApi(userData);
        await authApi.loginUser();
    }
    
    /**
     * Submit login form
     */
    async function loginSubmit(event: MouseEvent) {
        event.preventDefault();
        
        const emailId = "email";
        const passwordId = "password";
        
        const emailElement = document.getElementById(emailId) as HTMLInputElement;
        if(!emailElement) {
            throw Error("Email element couldn't be found!");
        }
        
        const passwordElement = document.getElementById(passwordId) as HTMLInputElement;
        if(!passwordElement) {
            throw Error("Couldn't find password element");
        }
        
        const userData = {
            email: emailElement.value,
            password: passwordElement.value,
        };
        
        loginUser(userData)
            .then((res) => {
                console.log(`User logged in`);
                console.log(`Response: `, res);
            })
            .catch((err) => {
                console.log(`An error has ocurred!`);
                console.error(err);
            });
    }
        
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-bold text-center text-gray-700">Logo</h1>
                <form className="mt-6" id="authForm">
                    {/* Email */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    {/* Password */}
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <Link
                        href="/forget"
                        className="text-xs text-blue-600 hover:underline"
                    >
                        Forget Password?
                    </Link>
                    <div className="mt-2">
                        <button
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            id="authFormSubmit"
                            // I have to put any otherwise it shows an error
                            // However it doesn't change the fact that it works
                            onClick={(e: any) => loginSubmit(e)}
                        >
                            Login
                        </button>
                    </div>
                </form>
                
                <p className="mt-4 text-sm text-center text-gray-700">
                    Don't have an account?{" "}
                    <Link
                        href="/signup"
                        className="font-medium text-blue-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
