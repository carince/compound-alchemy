import SpawnList from './components/SpawnList';
import { items } from './utils/combinations';

function App() {
    return (
        <div className="w-screen h-screen relative flex flex-row bg-neutral-900 text-white overflow-hidden">
            <div className="Sidebar w-32 md:w-64 h-screen bg-neutral-800 flex flex-col p-5 gap-5">
                <div>
                    <div className="flex items-center">
                        <img src="/logo.png" alt="Logo" className="hidden w-16 h-16 md:inline-block mr-2" />
                        <div className="flex flex-col">
                            <span className="text-md md:text-2xl leading-6 font-bold text-white">Compound</span>
                            <span className="text-md md:text-2xl leading-6 font-bold text-[#4b77d1]">Alchemy</span>
                        </div>
                    </div>
                </div>
                <SpawnList startingElements={items.slice(0, 4)} />
            </div>
        </div >
    )
}

export default App
