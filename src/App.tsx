import { DndContext, DragEndEvent } from '@dnd-kit/core';
import SpawnList from './components/SpawnList';
import Draggable from './components/Draggable';
import { useState } from 'react';
import { nanoid } from "nanoid"
import { Item } from './types';
import {
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';

const compounds: Item[] = [
  {
    name: "Hydrogen",
    symbol: "H",
    pos: {
      dropped: true,
      x: 0,
      y: 0
    }
  },
  {
    name: "Oxygen",
    symbol: "O",
    pos: {
      dropped: true,
      x: 0,
      y: 0
    }
  }
]

function App() {
  const starting = compounds.slice()
  starting.forEach((compound) => compound.id = nanoid(11))
  const [items, setItems] = useState<Item[]>(starting)

  function handleDragEnd(event: DragEndEvent) {
    const item = items.find((x) => x.id === event.active.id);

    // Drop to SpawnList
    if (event.over && event.over.id === 'spawndropper') {
      item!.pos.dropped = true
    } else {
      item!.pos.dropped = false
    }

    // Update coords
    item!.pos.x += event.delta.x;
    item!.pos.y += event.delta.y;

    // Update item
    const _items = items.map((x) => {
      if (x.id === item!.id) return item;
      return x;
    });

    // console.log(JSON.stringify(_items, null, 4))

    // compounds.forEach((compound) => {
    //   const dropped = _items.filter((item) => item?.pos.dropped)
    //   if (!dropped.some((item) => compound.name === item!.name)) {
    //     const _compound = compound
    //     _compound.id = nanoid(11)
    //     _compound.pos.dropped = true
    //     console.log(_compound)
    //     _items.push(_compound)
    //   }
    // })

    // console.log(_items)

    setItems(_items)
  }

  return (
    <div className="w-screen h-screen bg-neutral-900 text-white">
      <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
        <div className="Sidebar fixed top-0 left-0 z-0 w-64 h-screen bg-neutral-800 flex flex-col p-5 gap-5">
          <p className="Title text-3xl font-semibold text-white"> Items </p>
          <div className='relative h-full w-full'>
            <div className="UnlockedOverlay absolute flex flex-col justify-center items-center gap-5 h-full w-full">
              <div className="flex flex-col gap-5 items-center justify-center border-2 border-neutral-700/20 rounded-lg h-full w-full">
                {
                  // get dropped items and map it out 
                  items.filter((item) => { return item.pos.dropped }).map((item) => (
                    <div className="py-3 px-6 border-2 border-neutral-200 rounded-xl font-semibold backdrop-blur-xl select-none">
                      {`${item.symbol} ${item.name}`}
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="UnlockedItems absolute flex flex-col justify-center items-center gap-5 h-full w-full">
              <SpawnList>
                {
                  // get dropped items and map it out 
                  items.filter((item) => { return item.pos.dropped }).map((item) => (
                    <Draggable item={item} />
                  ))
                }
              </SpawnList>
            </div>
          </div>
        </div>
        <div className='Playground flex items-center justify-center ml-64 p-5'>
          {
            // get !dropped items and map it out 
            items.filter((item) => { return !item.pos.dropped }).map((item) => (
              <Draggable item={item} />
            ))
          }
        </div>
      </DndContext>
    </div >
  )
}

export default App
