import { SelfSignUpddonViewModel } from "../../../../viewModels/selfSignUpddonViewModel";
import { SelfSignUpPlanViewModel } from "../../../../viewModels/selfSignUpPlanViewModel";


interface Props {
    plan: SelfSignUpPlanViewModel
    addOns: SelfSignUpddonViewModel[];
    onChangeStep: (stepNumber: number) => void;
}

const FinishingUp = ({ plan, addOns, onChangeStep }: Props) => {

    return (
        <div className='h-full'>
            <h2 className="text-4xl font-bold text-blue-900">
                Finishing up
            </h2>
            <p className="mt-2 mb-10 text-slate-400">Double-check everything looks OK before confirming.</p>
            <div className="w-full bg-slate-50 rounded-lg py-5 px-10">
                <div className="flex justify-between items-center w-full" key={plan.id}>
                    <div className="flex items-center">
                        <div className="flex flex-col items-start">
                            <h3 className="text-xl font-bold text-blue-900">{plan.title} (Monthly)</h3>
                            <p onClick={() => onChangeStep(2)} className="text-md font-bold text-indigo-500 underline cursor-pointer">Change</p>
                        </div>
                    </div>
                    <p className="font-bold text-Cyan-800">+${plan?.price}/mo</p>
                </div>

                <div className="w-full h-0.5 bg-slate-200 my-5" />

                <ul className="flex flex-col justify-between">
                    {addOns.map((addOn: SelfSignUpddonViewModel) => (
                        <li className="flex justify-between items-center w-full mb-5" key={addOn.id}>
                            <p className="text-l text-slate-400">{addOn.title}</p>
                            <p className="font-semibold text-Cyan-700">+${addOn?.price}/mo</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-between mt-10 px-10">
                <p className="text-l text-slate-400">Total (per month)</p>
                <p className="text-2xl font-bold text-indigo-600">+${plan.price + addOns.reduce((pre, cur) => pre + cur.price, 0)}/mo</p>
            </div>
        </div>
    )
}

export default FinishingUp