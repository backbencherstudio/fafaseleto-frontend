import EmailIcon from "@/components/icons/EmailIcon";
import { RightArrowIcon } from "@/components/icons/RightArrowIcon";
import { CustomButton } from "@/components/reuseable/CustomButton";
import { StepLayout } from "@/components/reuseable/StepLayout";

type EmailStepProps = {
    defaultValue: string;
    onNext: (email: string) => void;
    currentStep: number;
    nextStep: () => void;
}

const emailInputCls = 'flex w-full h-[51px] items-center gap-2.5 self-stretch border  border-[color:var(--neutral-200,#E5E5E5)]  focus:border-[color:var(--3,#10B981)] [background:rgba(255,255,255,0.06)] focus:shadow-[0_0_4px_0_rgba(16,185,129,0.50)] px-5 py-4 rounded-lg border-solid ring-0 focus:ring-0 outline-0'

const EmailStep = ({ defaultValue, onNext, currentStep, nextStep }: EmailStepProps) => {
    return (
        <StepLayout
            currentStep={currentStep}
            title="Commençons par votre email"
            subTitle="Nous vous enverrons votre analyse complète"
            icon={<EmailIcon />}
        >
            <input
                className={emailInputCls}
                type="email"
                value={defaultValue}
                onChange={(e) => onNext(e.target.value)}
                required
            />

            <CustomButton className="mt-4 w-full gap-2.5" onClick={nextStep}>Continue <RightArrowIcon /></CustomButton>
        </StepLayout>
    )
}

export default EmailStep
