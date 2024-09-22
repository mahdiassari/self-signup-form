import { useState } from 'react'

import Sidebar from './sidebar'
import SelfSignUpBody from './body'

import { StepViewModel } from '../../viewModels/stepViewModel'

interface Props { }

const steps: StepViewModel[] = [
    { id: "step1", stepNumber: 1, title: "Your Info" },
    { id: "step2", stepNumber: 2, title: "Select Plan" },
    { id: "step3", stepNumber: 3, title: "Add-Ons" },
    { id: "step4", stepNumber: 4, title: "Summary" },
]

const SelfSignUp = ({ }: Props) => {

    const [activeStep, setActiveStep] = useState<number>(1)

    const onChangeStepSidebar = (stepNumber: number) => {
        if (stepNumber <= activeStep) setActiveStep(stepNumber)
    }

    const onChangeStep = (stepNumber: number) => {
        setActiveStep(stepNumber)
    }

    return (
        <div className='w-full h-full flex p-14'>
            <Sidebar steps={steps} activeStep={activeStep} onChangeStep={onChangeStepSidebar} />
            <SelfSignUpBody activeStep={activeStep} onChangeStep={onChangeStep} />
        </div>
    )
}

export default SelfSignUp