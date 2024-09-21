
import Image from 'next/image'
import settings from '../public/settings.png'
import cross from '../public/cross.png'
import { useEffect, useState } from 'react'

export let formName = "formName"

export default function WelcomeScreenSettings(props) {

    const [name, setName] = useState('');

    return (
        <>
            <div className='flex justify-between items-center w-72'>
                <div className='flex items-center gap-1'>
                    <Image src={settings} className="w-5" />
                    <p className='text-black'>Settings</p>
                </div>
                <div className='border border-gray-200 p-1 rounded-lg hover:bg-gray-200 transition duration-500' onClick={props.onClose}>
                    <Image src={cross} className="w-6" />
                </div>
            </div>


            <div className='mt-4'>
                <label className='text-black font-sans font-semibold'>
                    Title
                </label>
                <br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-72 h-10 mt-1 border focus:border-1 focus:border-black outline-none border-gray-200 rounded-md text-black p-2' />
            </div>
            <div className='mt-4'>
                <label className='text-black font-sans font-semibold'>
                    Description
                </label>
                <br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-72 h-10 mt-1 border focus:border-1 focus:border-black outline-none border-gray-200 rounded-md text-black p-2' />
            </div>
            <div className='mt-4'>
                <label className='text-black font-sans font-semibold'>
                    Button Text
                </label>
                <br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-72 h-10 mt-1 border focus:border-1 focus:border-black outline-none border-gray-200 rounded-md text-black p-2' />
            </div>


            <div className='w-72 flex justify-between items-center gap-6 mt-6 font-sans text-sm font-semibold'>
                <button onClick={props.onClose} className='w-full py-2 rounded-lg bg-black hover:bg-gray-500 transition-all duration-500'>
                    Save
                </button>
                <button className='w-full py-2 rounded-lg text-red-600 hover:bg-red-100 transition-all duration-500'>
                    Discard
                </button>
            </div>
        </>
    )
}