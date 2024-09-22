interface Props { }

const Thanks = ({ }: Props) => {
    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <h2 className="text-4xl font-bold text-blue-900">
                Thank you!
            </h2>
            <p className="mt-6 mb-10 px-16 text-slate-400 text-center">Thanks for confirming your subscription! We hope you have fun using our platform.If you ever need support, please feel free to email us at support@loregaming.com.</p>
        </div>
    )
}

export default Thanks