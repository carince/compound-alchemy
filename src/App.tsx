import { useRef } from 'react';
import SpawnList from './components/SpawnList';
import { items } from './utils/combinations';

function App() {
    const sidebarRef = useRef<HTMLDivElement>(null);

    return (
        <div className="absolute w-full h-full flex flex-row bg-neutral-900 text-white overflow-hidden">
            <div ref={sidebarRef} className="Sidebar w-36 md:w-64 h-full bg-neutral-800 flex flex-col p-5 gap-5">
                <div>
                    <div className="flex justify-center items-center">
                        <img src="/logo.png" alt="Logo" className="w-16 h-16 inline-block md:mr-2" />
                        <div className="hidden md:flex flex-col">
                            <span className="text-md md:text-2xl leading-6 font-bold text-white">Compound</span>
                            <span className="text-md md:text-2xl leading-6 font-bold text-[#4b77d1]">Alchemy</span>
                        </div>
                    </div>
                </div>
                <SpawnList startingElements={items.slice(0, 4)} sidebarRef={sidebarRef} />
            </div>
            <div className='flex p-2'>
                <div className="flex md:hidden flex-col mt-auto select-none">
                    <span className="text-2xl leading-6 font-bold text-white/25">Compound</span>
                    <span className="text-2xl leading-6 font-bold text-[#4b77d1]/25">Alchemy</span>
                </div>
            </div>
        </div >
    )
}

export default App
