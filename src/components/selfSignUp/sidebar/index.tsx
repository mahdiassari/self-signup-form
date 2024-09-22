import { StepViewModel } from "../../../viewModels/stepViewModel";

interface Props {
    steps: StepViewModel[];
    activeStep: number;
    onChangeStep: (step: number) => void
}


const Sidebar = ({ steps, activeStep, onChangeStep }: Props) => {
    return (
        <div className='flex flex-col w-1/4 h-full bg-indigo-600 rounded-xl px-10'>
            {steps.map((step) => {
                return (
                    <div onClick={() => onChangeStep(step.stepNumber)} className='flex w-full mt-14 cursor-pointer' key={step.id}>
                        <div className={`flex justify-center items-center w-12 h-10 border-2 border-slate-100 rounded-full font-semibold text-bold ${step.stepNumber === activeStep ? "text-black bg-slate-100" : "text-white"}`}>
                            {step.stepNumber}
                        </div>
                        <div className='flex-col w-full pl-5'>
                            <div className='text-slate-400 text-sm'>{`STEP ${step.stepNumber}`}</div>
                            <h2 className='text-white font-semibold'>{step.title.toUpperCase()}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Sidebar