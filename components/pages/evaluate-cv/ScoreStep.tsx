import { RightArrowIcon } from "@/components/icons/RightArrowIcon";
import { CustomButton } from "@/components/reuseable/CustomButton";
import { StepLayout } from "@/components/reuseable/StepLayout";
import { SoftCircleArc } from "./CircularProgressBadge";
import { HandCursorIcon } from "@/components/icons/HandCursorIcon";
import { StarIcon } from "@/components/icons/StarIcon";

export default   function ScoreStep({ currentStep, nextStep }: { currentStep: number, nextStep: () => void }) {


    // comes from backend after
    const CvScore = 45;

    const ImprovePoints = [
        {
            icon: <HandCursorIcon />,
            info: "Utilisez des verbes d'action",
            subInfo: "Commencez vos phrases par des verbes d'action impactants"
        },
        {
            icon: <HandCursorIcon />,
            info: "Ajoutez des métriques",
            subInfo: "Quantifiez vos réalisations avec des chiffres concrets"
        },
        {
            icon: <HandCursorIcon />,
            info: "Optimisez la mise en page",
            subInfo: "Améliorez la structure visuelle pour plus d'impact"
        }
    ]


    return (
        <StepLayout
            currentStep={currentStep}
            title="Votre score CV"
            subTitle="Votre CV peut gagner significativement en impact."
            customDiv={<ScoreShow score={CvScore} />}
        >
            <div>
                <p className="text-[#0D1B2A] text-base font-bold leading-[normal] capitalize mb-3.5">Principaux points à optimiser :</p>
                <div className="flex flex-col gap-[15px]">
                    {ImprovePoints.map((point, index) => (
                        <ImprovePoint key={index} icon={point.icon} info={point.info} subInfo={point.subInfo} />
                    ))}
                </div>

            </div>



            <CustomButton className="mt-4 w-full gap-2.5" onClick={nextStep}>Générer un CV optimisé <RightArrowIcon /></CustomButton>
        </StepLayout>
    )
}


const ScoreShow = ({ score }: { score: number }) => {
    return (
        <div className="w-full  flex items-center justify-center ">
            <SoftCircleArc value={score} max={100} />
        </div>
    )
}

const ImprovePoint = ({ icon, info, subInfo }: { icon: React.ReactNode, info: string, subInfo: string }) => {
    return (
        <div className="flex gap-[15px] border-l-[color:var(--3,#10B981)] [background:#FFF] shadow-[0_4px_24.9px_0_rgba(0,0,0,0.05)] px-2.5 py-3.5 rounded-[0_10px_10px_0] border-l-2 border-solid">
            {/* icon */}
            <div>
                {icon}
            </div>
            <div className=" flex flex-col gap-[15px]">
                <p className="self-stretch text-[color:var(--1,#0D1B2A)] [font-family:Inter] text-sm font-bold leading-[normal] capitalize">{info}</p>

                <p className="self-stretch text-[color:var(--gray-400,#99A1AF)] [font-family:Inter] text-sm font-medium leading-[normal] capitalize">{subInfo}</p>
            </div>
        </div>
    )
} 