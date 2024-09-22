import { FieldErrors, UseFormRegister } from "react-hook-form";
import { PersonalInfoFormViewModel } from "../../../../viewModels/personalInfoFormViewModel";

interface Props {
    register: UseFormRegister<PersonalInfoFormViewModel>;
    errors: FieldErrors<PersonalInfoFormViewModel>
}

const PersonalInfo = ({ register, errors }: Props) => {
    return (
        <div className='h-full'>
            <h2 className="text-4xl font-bold text-blue-900">
                Personal info
            </h2>
            <p className="mt-2 mb-6 text-slate-400">Please provide your name, email address and phone number.</p>
            <div className="flex flex-col h-full">
                <div className="mb-6">
                    <div className="flex justify-between items-center">
                        <label className="block mb-2 font-medium text-blue-800">Name</label>
                        {errors.Name?.message && <p className="text-sm text-red-600">{errors.Name?.message}</p>}
                    </div>
                    <input {...register("Name")} type="text" id="name" className={`border ${errors.Name?.message ? "border-red-500" : "border-gray-300"} outline-blue-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3`} placeholder="Mahdi" />
                </div>
                <div className="mb-6">
                    <div className="flex justify-between items-center">
                        <label className="block mb-2 font-medium text-blue-800">Email address</label>
                        {errors.EmailAddress?.message && <p className="text-sm text-red-600">{errors.EmailAddress?.message}</p>}
                    </div>
                    <input {...register("EmailAddress")} type="email" id="email" className={`border ${errors.EmailAddress?.message ? "border-red-500" : "border-gray-300"} text-blue-800 outline-blue-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3`} placeholder="mahdiassariii@gmail.com" />
                </div>
                <div className="mb-6">
                    <div className="flex justify-between items-center">
                        <label className="block mb-2 font-medium text-blue-800">Phone number</label>
                        {errors.PhoneNumber?.message && <p className="text-sm text-red-600">{errors.PhoneNumber?.message}</p>}
                    </div>
                    <input {...register("PhoneNumber")} type="tel" id="phone" className={`border ${errors.PhoneNumber?.message ? "border-red-500" : "border-gray-300"} text-blue-800 outline-blue-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3`} placeholder="09126930348" />
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo