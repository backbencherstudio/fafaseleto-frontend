import { CvFileIcon } from "@/components/icons/CvFileIcon";
import { StepLayout } from "@/components/reuseable/StepLayout";
import { FileUploadIcon } from "@/components/icons/FileUploadIcon";
import { CustomButton } from "@/components/reuseable/CustomButton";
import { RightArrowIcon } from "@/components/icons/RightArrowIcon";

type FileStepProps = {
    defaultValue: string;
    onNext: (file: string) => void;
        currentStep: number;
    nextStep: () => void;
}
const FileStep = ({ defaultValue, onNext, currentStep, nextStep }: FileStepProps) => {
    return (
        <StepLayout
            icon={<CvFileIcon />}
            currentStep={currentStep}
            title="Téléchargez votre CV"
        >
            <input
                type="file"
                accept=".pdf"
                id="cv-file"
                value={defaultValue}
                onChange={(e) => onNext(e.target.value)}

                className="hidden"
            />
            <label htmlFor="cv-file" className="max-w-[498px] md:h-[164px] h-[120px] border-[#D1D5DC] [background:#FFF] rounded-[10px] border-[1.5px] border-dashed block flex flex-col items-center justify-center gap-[13px]">
                <FileUploadIcon />
                <div>
                    <p className="text-[#0D1B2A] text-center [font-family:Inter] text-sm font-bold leading-[normal] capitalize">Cliquez pour télécharger</p>
                    <p className="text-[#99A1AF] text-center [font-family:Inter] text-sm font-medium leading-[normal] capitalize">ou glissez-déposez votre fichier</p>
                </div>
            </label>

            <div className="mt-3  flex items-center gap-2 justify-between">
                <p className="text-[#6A7282] text-xs font-normal leading-[normal] capitalize">Supported formats: PDF</p>
                <p className="text-[#6A7282] text-xs font-normal leading-[normal] capitalize">Maximum Size: 5 MB</p>
            </div>

            <CustomButton className="mt-4 w-full gap-2.5" onClick={nextStep}>Continue <RightArrowIcon /></CustomButton>

        </StepLayout>
    )
}

export default FileStep;