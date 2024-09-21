import Image from "next/image";
import { useState } from "react";
import cube from '../public/cube.png'
import settings from '../public/settings.png'
import steps from '../public/steps.png'
import cloud from '../public/cloud.png'
import Settings from "./settings";
import TitleCard from "./titlecard";
import { formName } from "./settings";
import WelcomeScreenOutput from "./welcomscreenoutput";
import WelcomeScreenSettings from "./welcomescreensettings";

export default function Dashboard() {

    const [titleCards, setTitleCards] = useState([]);
    const [title, setTitle] = useState('Email');
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isWelcomeCardOpen, setIsWelcomeCardOpen] = useState(false);
    const [isEndCardOpen, setIsEndCardOpen] = useState(false);
    const [isEmailCardOpen, setIsEmailCardOpen] = useState(false);

    function handleAddField() {  //to add a new email field
        setTitleCards([...titleCards, { id: titleCards.length, title }]);
    }

    const handleDeleteCard = (id) => {  //to remove an email field
        setTitleCards(titleCards.filter((card) => card.id !== id));
    };

    const handleSettings = () => {  //to open and close settings panel
        setIsSettingsOpen(!isSettingsOpen);
    }

    const handleWelcomeCardClick = () => { //to open and close Welcome screen
        setIsWelcomeCardOpen(!isWelcomeCardOpen);
    }

    const handleEndCardClick = () => { //to open and close End screen
        setIsEndCardOpen(!isEndCardOpen);
    }

    const handleEmailCardClick = () => { //to open and close Email screens
        setIsEmailCardOpen(!isEmailCardOpen);
    }

    if (isSettingsOpen) {
        return (
            <div>
                <Settings onClose={handleSettings} />
            </div>
        )
    }

    if (isWelcomeCardOpen) {
        return (
            <div>
                <WelcomeScreenSettings onClose={handleWelcomeCardClick} />
            </div>
        )
    }

    // if (isEndCardOpen) {
    //     return (
    //         <div>
    //             <WelcomeScreenSettings onClose={handleWelcomeCardClick} />
    //         </div>
    //     )
    // }

    return (
        <>
            <div className="flex">
                <div className="flex-col w-fit h-[563px] overflow-y-auto m-5">
                    <div className="flex items-center justify-between w-72">
                        <div className="flex items-center">
                            <Image src={cube} alt="cube" className="w-3" />
                            <p className="text-gray-500 text-[12px] font-sans font-medium ml-1">Dashboard {`>`} {formName}</p>
                        </div>

                        <div className="hover:bg-gray-200 w-7 flex justify-center rounded transition duration-500 hover:cursor-pointer" onClick={handleSettings} >
                            <Image src={settings} alt="settings" className="w-4 py-[4px]" />
                        </div>
                    </div>

                    <div className="bg-gray-50 w-72 h-8 mt-4 rounded font-sans flex justify-between text-sm  p-[3px] transition-all duration-300">
                        <button className="text-black bg-white rounded w-full">
                            Content
                        </button>
                        <button className="text-gray-400 ml-1 rounded w-full hover:bg-gray-100 hover:text-black transition-all duration-300">
                            Design
                        </button>
                        <button className="text-gray-400 ml-1 rounded w-full hover:bg-gray-100 hover:text-black  transition-all duration-300">
                            Share
                        </button>
                        <button className="text-gray-400 ml-1 rounded w-full hover:bg-gray-100 hover:text-black transition-all duration-300">
                            Replies
                        </button>
                    </div>

                    <div className="flex items-center mt-8">
                        <Image src={steps} alt="steps" className="w-3 rotate-180 rounded-sm " />
                        <p className="ml-1 text-black text-sm font-semibold font-sans">Steps</p>
                    </div>
                    <p className="text-gray-400 text-xs font-sans mb-3 mt-1">The steps users will take to complete the form</p>

                    <TitleCard title="Welcome Screen" icon="hexagon" onCardClick={handleWelcomeCardClick} />

                    {titleCards.map((card, index) => (
                        <div key={card.id}>
                            <TitleCard title={card.title} icon="dots" onDelete={() => handleDeleteCard(card.id)} onCardClick={() => handleEmailCardClick(card)} /> {/*onCardClick*/}
                        </div>
                    ))}

                    <div className="border border-gray-200 w-fit rounded-lg p-2 mt-3 hover:bg-gray-200 transition duration-500 hover:cursor-pointer" onClick={handleAddField}>
                        <p className="text-black text-xs font-sans font-semibold">+ Add Field</p>
                    </div>

                    <hr className="bg-gray-200 w-64 h-[2px] my-8" />

                    <TitleCard title="End Screen" icon="hexagon" onCardClick={handleEndCardClick} />

                    <div className='w-72 flex justify-between items-center gap-6 mt-6 font-sans text-xs font-semibold'>
                        <button className='w-full py-2 rounded-lg bg-black hover:bg-gray-500 transition-all duration-500 flex items-center'>
                            <Image src={cloud} className="w-3 h-3 mx-3" />
                            Save {`&`} Publish
                        </button>
                        <button className='w-full py-2 rounded-lg text-red-600 hover:bg-red-100 transition-all duration-500'>
                            Discard
                        </button>
                    </div>
                </div>
            </div>
            {/* <WelcomeScreenOutput /> */}
        </>
    )
};