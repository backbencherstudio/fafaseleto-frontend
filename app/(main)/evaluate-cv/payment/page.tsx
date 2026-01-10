"use client"

import CardIcon from "@/components/icons/CardIcon"
import { PaymentRadioGroup } from "@/components/pages/evaluate-cv/PaymentRadioGroup";
import { CustomButton } from "@/components/reuseable/CustomButton";
import { StepLayout } from "@/components/reuseable/StepLayout"
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const inputClass = " w-full h-[45px] md:h-[55px] rounded-md border border-neutral-200 bg-white px-4 text-sm focus:outline-none focus:border-[#2CB67D]   "

const labelClass = "block mb-2 text-neutral-600 text-base font-semibold"

const PaymentPage = () => {

    const [val, setVal] = useState("credit");

    const router = useRouter()
    const searchParams = useSearchParams();
    const plan = searchParams.get("plan") ?? "";
    const handlePlanSelect = () => {
        // router.push(`/evaluate-cv/payment?plan=${val}`)
        router.replace(`/evaluate-cv/payment/success?plan=${encodeURIComponent(plan)}`);

    }


    return (
        <section className=" min-h-[calc(100vh-300px)] flex flex-col items-center justify-center px-4">

            <StepLayout
                // currentStep={1}
                title="Détails de paiement"
                icon={<CardIcon />}
                className="max-w-[525px]"
            >
                <PaymentRadioGroup
                    name="payment"
                    value={val}
                    onChange={setVal}
                    options={[
                        { value: "credit", label: "Carte de crédit" },
                        { value: "debit", label: "Carte de débit" },
                        { value: "paypal", label: "PayPal" },
                    ]}
                />

                <div className=" mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-[18px]">
                        {/* Nom du titulaire */}
                        <div>
                            <label className={labelClass}>
                                Nom du titulaire
                            </label>
                            <input
                                type="text"
                                placeholder="Saisissez ici"
                                className={inputClass}
                            />
                        </div>

                        {/* Numéro de carte */}
                        <div>
                            <label className={labelClass}>
                                Numéro de carte de crédit
                            </label>
                            <input
                                type="text"
                                placeholder="Saisissez ici"
                                className={inputClass}
                            />
                        </div>

                        {/* Expiration */}
                        <div>
                            <label className={labelClass}>
                                Expiration
                            </label>
                            <input
                                type="text"
                                placeholder="MM/AA"
                                className={inputClass}
                            />
                        </div>

                        {/* CVV */}
                        <div>
                            <label className={labelClass}>
                                CVV
                            </label>
                            <input
                                type="text"
                                placeholder="Saisissez ici"
                                className={inputClass}
                            />
                        </div>
                    </div>

                    <CustomButton onClick={handlePlanSelect} className="mt-8.25 w-full gap-2.5" >Payer maintenant</CustomButton>


                </div>
            </StepLayout>


        </section>
    )
}

export default PaymentPage