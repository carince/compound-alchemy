import SpawnList from './components/SpawnList';
import { Item } from './types';

const starterElements: Item[] = [
    {
        key: 0,
        name: "Hydrogen",
        symbol: "H"
    },
    {
        key: 1,
        name: "Oxygen",
        symbol: "O"
    }
]

function App() {
    return (
        <div className="w-screen h-screen relative flex flex-row bg-neutral-900 text-white overflow-hidden">
            <div className="Sidebar w-64 h-screen bg-neutral-800 flex flex-col p-5 gap-5">
                <div>
                    {/* <img src="/path/to/logo.png" alt="Logo" className="w-12 h-12 inline-block mr-2" /> */}
                    <div className="flex items-center">
                        <img src="/logo.png" alt="Logo" className="w-16 h-16 inline-block mr-2" />
                        <div className="flex flex-col">
                            <span className="text-2xl leading-6 font-bold text-white">Compound</span>
                            <span className="text-2xl leading-6 font-bold text-[#4b77d1]">Alchemy</span>
                        </div>
                    </div>
                </div>
                <SpawnList startingElements={starterElements} />
            </div>
        </div >
    )
}

export default App
