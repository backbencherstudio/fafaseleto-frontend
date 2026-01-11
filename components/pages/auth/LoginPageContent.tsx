"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButton } from '@/components/reuseable/CustomButton'
import Link from 'next/link'
import { EyeIcon, EyeOffIcon } from 'lucide-react'


const inputCls = "max-w-[446px] h-[44px] md:h-[50px] [background:#F5F5F5] rounded-lg border border-[#D4D4D4] border-solid p-4 focus:outline-none focus:border-[#10B981] placeholder:text-[#A1A1A1] [font-family:Inter] text-[14px] md:text-[16px] font-normal leading-[normal] tracking-[-0.28px] w-full"
const labelCls = "text-[#0D1B2A] text-[16px] font-semibold leading-[normal] tracking-[-0.64px] mb-[7px] block"

const LoginPageContent = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [rememberMe, setRememberMe] = React.useState(false);


    return (
        <section className='flex items-center justify-center min-h-screen px-4 md:px-0'>

            <div className='w-full max-w-[606px]  border border-[#E5E5E5] [background:#FFF] p-6 md:px-20 md:py-10 rounded-[15px] border-solid'>
                {/* title and subtitle */}
                <div className='mb-5 md:mb-10 text-center '>
                    <h2 className='text-[#0D1B2A] text-[24px] md:text-[32px] font-bold leading-[normal] tracking-[-1.28px]'>Welcome to Postulae</h2>
                    <p className="w-[247px] text-[color:var(--neutral-600,#525252)] text-center [font-family:Inter] text-base font-normal leading-6 max-w-[247px] text-center mx-auto ">Log in to access your CVs and generated files</p>
                </div>
                {/* google login */}
                <div className=''>
                    <button className='flex w-full justify-center items-center gap-2.5 flex-[1_0_0] border border-[#D4D4D4] p-4 rounded-[14px] border-solid  cursor-pointer hover:border-[#10B981] hover:text-[#10B981] transition-all duration-300 '>
                        <Image src="/google.svg" alt="google" width={24} height={24} />
                        <p className='text-[#0D1B2A] text-[14px] md:text-[16px] font-bold leading-[normal] tracking-[-0.64px]'>Sign In with Google</p>
                    </button>
                </div>

                {/* line */}

                <div className='flex items-center gap-1 self-stretch my-[25px]'>
                    <div className='w-full max-w-[212px] h-px [background:#E5E5E5] border-solid'></div>
                    <p className="text-[#737373] text-[16px] font-normal leading-[normal] tracking-[-0.64px]">or</p>
                    <div className='w-full max-w-[212px] h-px [background:#E5E5E5] border-solid'></div>
                </div>

                {/* email login */}
                <div>
                    <form>
                        {/* input filed */}
                        <div className=' space-y-5'>
                            <div>
                                <label className={labelCls} htmlFor="email">Email</label>
                                <input className={inputCls} type="text" id='email' placeholder='Enter your Email' />
                            </div>
                            <div>
                                <label className={labelCls} htmlFor="password">Password</label>
                                <div className='relative'>
                                    <input className={inputCls} type={showPassword ? "text" : "password"} id='password' placeholder='Enter your Password' />

                                    {/* Eye Icon */}
                                    {
                                        <div className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#737373]' onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <EyeIcon className='w-[22px] h-[22px]' /> : <EyeOffIcon className='w-[22px] h-[22px]' />}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        {/* remember me */}
                        <div className='mt-2.5'>
                            <div className='flex items-center justify-between gap-1.5'>
                                <div className="flex items-center gap-2">

                                    <CheckboxComponent checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                                    <label
                                        htmlFor="remember"
                                        className="text-[#525252] text-sm font-medium leading-5 cursor-pointer select-none"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                <Link href="/auth/forgot-password" className='text-[#525252] text-right text-sm font-medium leading-5 underline underline-offset-[3px] decoration-solid decoration-auto'>Forgot Password?</Link>
                            </div>


                        </div>
                        {/* login button */}
                        <CustomButton className='w-full mt-[15px] md:mt-[27px]'>Log In</CustomButton>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default LoginPageContent;


// ===================== Checkbox Componennt ===========================

const CheckboxComponent = ({ checked, onChange }: { checked: boolean, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (

        <div className="relative flex items-center">
            <input
                type="checkbox"
                id="remember"
                checked={checked}
                onChange={onChange}
                className="peer appearance-none w-[16px] h-[16px] rounded border border-[#D4D4D4] border-solid checked:bg-[#2CB67D] checked:border-[#2CB67D] transition-all duration-200 cursor-pointer"
            />

            <svg
                className="absolute w-[10px] h-[10px] text-white pointer-events-none hidden peer-checked:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>


    );
};
