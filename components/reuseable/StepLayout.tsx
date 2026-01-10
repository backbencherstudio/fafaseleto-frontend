import React from "react";


type StepLayoutProps = {
    icon?: React.ReactNode;
    customDiv?: React.ReactNode;
    currentStep?: number;
    title: string;
    subTitle?: string;
    children: React.ReactNode;
    totalSteps?: number;
    className?: string; // For the outer wrapper if needed
};

export const StepLayout = ({
    icon,
    customDiv,
    currentStep,
    title,
    subTitle,
    children,
    totalSteps = 4,
    className = "",
}: StepLayoutProps) => {
    return (
        <div className={`flex w-full max-w-[498px] flex-col items-center gap-11 ${className}`}>
            {/* icon */}
            {
                icon ? (
                    <div className="flex w-[66px] h-[66px] items-center justify-center gap-2.5 bg-[#10B981]/10 rounded-full">
                        {icon}
                    </div>
                ) : <div className="">
                    {customDiv}
                </div>
            }

            {/* details */}
            <div className="w-full">
                <div className="text-center mb-15">
                    <p className="text-neutral-500 font-[Inter] text-base font-normal tracking-[-0.5px] text-center">
                        Étape {currentStep}/{totalSteps}
                    </p>
                    <h3 className="text-black font-[Inter] md:text-3xl text-xl font-semibold mt-1 text-center">
                        {title}
                    </h3>
                    {
                        subTitle && (
                            <p className="text-[#737373]  text-center  md:text-lg text-sm font-normal leading-[26px] opacity-90">
                                {subTitle}
                            </p>
                        )
                    }
                </div>

                {/* children (inputs + buttons) */}
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
    );
};


