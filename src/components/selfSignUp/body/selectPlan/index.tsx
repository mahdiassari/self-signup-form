import { SelfSignUpPlanViewModel } from "../../../../viewModels/selfSignUpPlanViewModel"


interface Props {
    plans: SelfSignUpPlanViewModel[];
    activePlan: SelfSignUpPlanViewModel;
    onSelectPlan: (plan: SelfSignUpPlanViewModel) => void;
}

const SelectPlan = ({ plans, activePlan, onSelectPlan }: Props) => {


    return (
        <div className='h-full'>
            <h2 className="text-4xl font-bold text-blue-900">
                Select your plan
            </h2>
            <p className="mt-2 mb-10 text-slate-400">You have the option of monthly or yearly billing.</p>
            <div className="flex justify-between gap-8">
                {plans.map((plan: SelfSignUpPlanViewModel) => (
                    <div onClick={() => onSelectPlan(plan)} className={`flex flex-col justify-between w-full h-52 border border-gray-300 rounded-lg p-6 cursor-pointer hover:border-purple-400 ${plan.id === activePlan.id && "bg-violet-100"}`} key={plan.id}>
                        <div className={`w-12 h-12 border-2 border-slate-100 rounded-full bg-slate-100 ${plan.backgroundcolor}`} />
                        <div className="flex flex-col w-full">
                            <div className="font-semibold text-bold text-lg text-blue-900">{plan?.title}</div>
                            <div className="text-bold text-sm text-slate-400">{`$${plan?.price}/mo`}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectPlan