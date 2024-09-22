import { SelfSignUpddonViewModel } from "../../../../viewModels/selfSignUpddonViewModel";


interface Props {
    addOns: SelfSignUpddonViewModel[];
    onSelectAddOn: (addOns: SelfSignUpddonViewModel) => void;
}

const PickAddOns = ({ addOns, onSelectAddOn }: Props) => {

    return (
        <div className='h-full'>
            <h2 className="text-4xl font-bold text-blue-900">
                Pick add-ons
            </h2>
            <p className="mt-2 mb-10 text-slate-400">Add-ons help enhance gaming experience.</p>
            <ul className="flex flex-col justify-between gap-8">
                {addOns.map((addOn: SelfSignUpddonViewModel) => (
                    <li onClick={() => { onSelectAddOn(addOn) }} className={`flex justify-between items-center w-full h-24 border border-gray-300 rounded-lg p-6 cursor-pointer hover:border-purple-400 ${addOn.selected && "bg-violet-100"}`} key={addOn.id}>
                        <div className="flex items-center">
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                checked={addOn.selected}
                                onChange={(event) => {
                                    event.stopPropagation()
                                    onSelectAddOn(addOn)
                                }}
                                className="w-5 h-5 accent-indigo-500 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
                            />
                            <div className="flex flex-col items-start pl-5">
                                <h3 className="text-xl font-bold text-blue-900">{addOn.title}</h3>
                                <p className="text-l text-slate-400">{addOn.description}</p>
                            </div>
                        </div>
                        <p className="font-bold text-indigo-500">+${addOn?.price}/mo</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PickAddOns