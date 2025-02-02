import { useState } from "react"
const Polos = ({selectedColor, setSelectedColor}) => {
  return (
    <>
      <div className="grid-cols-subgrid col-span-1 flex flex-col gap-4">
        <img className={ `hover:cursor-pointer rounded-2xl disabled:opacity-30 ${selectedColor == 'blue' && 'border-sky-200 border-2 hover:cursor-default'}` } width={100} src="./src/assets/blue_polo.webp" alt="blue polo" onClick={() => setSelectedColor('blue')} />
        <img className={ `hover:cursor-pointer rounded-2xl disabled:opacity-30 ${selectedColor == 'black' && 'border-sky-200 border-2 hover:cursor-default'}` } width={100} src="./src/assets/black_polo.webp" alt="black polo" onClick={() => setSelectedColor('black')} />
        <img className={ `hover:cursor-pointer rounded-2xl disabled:opacity-30 ${selectedColor == 'white' && 'border-sky-200 border-2 hover:cursor-default'}` } width={100} src="./src/assets/white_polo.webp" alt="white polo" onClick={() => setSelectedColor('white')} />
      </div>
      <div className="col-span-5">
        <img src={`./src/assets/${selectedColor}_polo.webp`} alt="blue polo" />
      </div>
    </>
  )
}

export default Polos
