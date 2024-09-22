import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';

import PersonalInfo from './personalInfo'
import SelectPlan from './selectPlan'
import PickAddOns from './pickAddOns';
import FinishingUp from './finishingUp';
import Thanks from './thanks';
import { selfSignUpFormSchema } from '../../../schemas/selfSignUpFormSchema';

import { PersonalInfoFormViewModel } from '../../../viewModels/personalInfoFormViewModel'
import { SelfSignUpPlanViewModel } from '../../../viewModels/selfSignUpPlanViewModel';
import { SelfSignUpddonViewModel } from '../../../viewModels/selfSignUpddonViewModel';

interface Props {
    activeStep: number;
    onChangeStep: (stepNumber: number) => void;
}

const plans: SelfSignUpPlanViewModel[] = [
    { id: "plan1", title: "Arcade", price: 9, backgroundcolor: "bg-orange-400" },
    { id: "plan2", title: "Advanced", price: 12, backgroundcolor: "bg-red-400" },
    { id: "plan3", title: "Pro", price: 15, backgroundcolor: "bg-indigo-400" },
]

const addOns: SelfSignUpddonViewModel[] = [
    { id: "addOn1", title: "Online service", description: "Access to multiplayer games", price: 1, selected: true, },
    { id: "addOn2", title: "Larger storage", description: "Extra 1TB of cloud save", price: 2, selected: false, },
    { id: "addOn3", title: "Customizable profile", description: "Custome theme on your profile", price: 2, selected: false, },
]

const SelfSignUpBody = ({ activeStep, onChangeStep }: Props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<PersonalInfoFormViewModel>({ resolver: zodResolver(selfSignUpFormSchema) });

    const [state, setState] = useState<{ activePlan: SelfSignUpPlanViewModel; addOns: SelfSignUpddonViewModel[] }>({
        activePlan: plans[0],
        addOns
    })

    const onSelectPlan = (plan: SelfSignUpPlanViewModel) => {
        setState({ ...state, activePlan: plan })
    }

    const onSelectAddOn = (addOn: SelfSignUpddonViewModel) => {
        let newList = state.addOns
        let record = newList.findIndex((each) => each.id === addOn.id);
        newList[record] = { ...addOn, selected: !addOn.selected };

        setState({ ...state, addOns: newList })
    }


    const handleStep = () => {
        switch (activeStep) {
            case 1:
                return <PersonalInfo register={register} errors={errors} />;
            case 2:
                return <SelectPlan plans={plans} activePlan={state.activePlan} onSelectPlan={onSelectPlan} />;
            case 3:
                return <PickAddOns addOns={state.addOns} onSelectAddOn={onSelectAddOn} />;
            case 4:
                return <FinishingUp plan={state.activePlan} addOns={state.addOns.filter((item) => item.selected === true)} onChangeStep={onChangeStep} />;
            case 5:
                return <Thanks />;
            default:
                return <PersonalInfo register={register} errors={errors} />;
        }
    }

    const onNextHandler = () => {
        onChangeStep(activeStep + 1)
    }

    const onBackHandler = () => {
        onChangeStep(activeStep - 1)
    }

    const onResetHandler = () => {
        setState({
            activePlan: plans[0],
            addOns
        })
        reset()
        onChangeStep(1)
    }

    return (
        <form onSubmit={handleSubmit(onNextHandler)} className='flex flex-col justify-center w-3/4 h-full py-12 px-36'>
            {handleStep()}
            {activeStep !== 5 &&
                <div className='flex flex-row-reverse justify-between w-full'>
                    <button
                        type="submit"
                        className="inline-block rounded bg-blue-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-900 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    >
                        {activeStep !== 4 ? "Next Step" : "Confirm"}
                    </button>
                    {activeStep !== 1 &&
                        <button
                            type="button"
                            onClick={onBackHandler}
                            className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out"
                        >
                            Go Back
                        </button>
                    }
                </div>
            }
            {activeStep === 5 &&
                <button
                    type="button"
                    onClick={onResetHandler}
                    className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out"
                >
                    Reset
                </button>
            }
        </form>
    )
}

export default SelfSignUpBody