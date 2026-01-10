import { StepLayout } from "@/components/reuseable/StepLayout";
import { StarIcon } from "@/components/icons/StarIcon";
import { CloudCog } from "lucide-react";
import Link from "next/link";

type PlanType = {
    planName: string;
    price: number;
    info: string;
    color: string;
}
   const plans: PlanType[] = [
        {
            planName: "Starter",
            price: 4.90,
            info: "Un CV structuré, prêt à l’envoi",
            color: "#E7E7E7"
        },
        {
            planName: "Premium",
            price: 24.90,
            info: "CV et lettres de motivation illimités",
            color: "#10B981"
        },
        {
            planName: "Ultimate",
            price: 149.0,
            info: "Relecture et optimisation par un expert",
            color: "#FFB900"
        }
    ]

export default function ChoosePlanStep({ currentStep }: { currentStep: number }) {


  
 
    return (
        <StepLayout
            currentStep={currentStep}
            title="Choisissez votre plan"
            subTitle="Optimisez votre CV avec nos experts"
            icon={<StarIcon />}
        >

            <div className="space-y-[23px]">
                {
                    plans.map((plan, index) => (
                        <PriceCard key={index} plan={plan} />
                    ))
                }
            </div>
        </StepLayout>
    )
}


const PriceCard = ({ plan }: { plan: PlanType }) => {

    const borderColor = plan.color;
    const backgroundColor = plan.planName === "Premium" ? "rgba(16,185,129,0.05)" : "#FFF";

    const style = {
        borderColor,
        backgroundColor
    }
    return <Link href={`/evaluate-cv/payment?plan=${plan.planName}`} className="px-2.5 py-4.5 flex justify-between items-center border-[2px] px-2.5 py-[18px] rounded-[10px] border-solid relative max-w-[498px] hover:cursor-pointer hover:shadow-[0px_0px_20px_0px_rgba(16,185,129,0.15)] hover:scale-[1.005] transition-all duration-300" style={style} >
        <div className="flex flex-col gap-[15px]">
            <p className="self-stretch text-[#0D1B2A] text-base font-medium leading-[normal] capitalize">{plan?.planName}</p>
            <p className="self-stretch text-[#99A1AF] text-sm font-medium leading-[normal] capitalize">{plan?.info}</p>
        </div>
        <p className="text-[#0D1B2A] text-lg font-bold leading-[normal] capitalize"> &euro; {plan?.price}</p>


        {
            plan.planName === "Premium" && (
                <div className="flex justify-center items-center gap-[3.941px] absolute [background:#10B981] px-[11.824px] py-[9px] rounded-[31.532px] left-1/2 -translate-x-1/2 -top-4 z-10 text-[#FAFAFA] text-center text-[11.036px] font-bold leading-[normal]">Recommandé</div>
            )
        }
    </Link>
}