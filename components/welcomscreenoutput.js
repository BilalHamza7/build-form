
export default function WelcomeScreenOutput(props) {
    return (
        <>
            <div className="bg-white m-5 h-screen rounded-lg shadow-lg p-3 text-black border border-black my">
                <input type="text" value={props.title} className="w-96" />
                <input type="text" value={props.description} className="w-96" />
                <button>
                    {props.buttonText}
                </button>
            </div>      
        </>
    )
};
