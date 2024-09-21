import hexagon from '../public/hexagon.png'
import dots from '../public/dots.png'
import cross from '../public/cross.png'
import Image from 'next/image'

export default function TitleCard(props) {

    const icon = props.icon == "hexagon" ? hexagon : dots;

    return (
        <>
            <div className="flex items-center w-64 h-10 mt-2 p-2 rounded-md bg-gray-50 hover:bg-gray-100" >
                <div className='w-3'>
                    <Image src={icon} alt="icon" className="w-3 h-3 opacity-60 " />
                </div>

                <div className='w-full h-full hover:cursor-pointer' onClick={props.onCardClick} >
                    <p className='text-black text-sm ml-16 font-sans'>{props.title}</p>
                </div>

                {props.title !== "Welcome Screen" && props.title !== "End Screen" ?
                    <Image src={cross} className="w-3 h-3 hover:cursor-pointer" alt="cross" onClick={props.onDelete} />
                    :
                    <></>
                }
            </div>
        </>
    )
};
