import { useState } from "react"
import ShirtSizeButton from "./shirt-size-button"
import Polos from "./Polos"

const AddToBag = () => {
  const [size, setSize] = useState('')
  const [color, setColor] = useState('blue')
  return (
    <div className="grid grid-cols-11 gap-8 m-32">
      <Polos selectedColor={color} setSelectedColor={setColor} />
      <div className="col-span-5">
        <h1 className="text-blue-300 font-bold font-mono">POLO RALPH</h1>
        <h2 className="text-4xl font-bold font-sans">Custom Fit Polo Bear Oxford Shirt</h2>
        <p className="mt-4 font-sans text-gray-500">Blue polo with a classic cut. Made of smooth and soft cotton.</p>
        <p className="font-bold text-4xl mt-8">$99.00 <span className="text-xl bg-blue-200 text-blue-700 font-mono p-2 align-middle rounded-lg ml-4">-25%</span></p>
        <p className="line-through mt-2 mb-8 text-gray-300">$132.00</p>
        <h3 className="font-bold font-mono">CHOOSE SIZE</h3>
        <div className="flex gap-8 m-4">
          <ShirtSizeButton size='XS' selected={size === 'XS'} selectHandler={setSize} />
          <ShirtSizeButton size='S' selected={size === 'S'} selectHandler={setSize} />
          <ShirtSizeButton size='M' selected={size === 'M'} selectHandler={setSize} />
          <ShirtSizeButton size='L' selected={size === 'L'} selectHandler={setSize} />
          <ShirtSizeButton size='XL' selected={size === 'XL'} selectHandler={setSize} />
          <ShirtSizeButton size='XXL' selected={size === 'XXL'} selectHandler={setSize} />
        </div>
        <button onClick={() => alert(`Added ${color} size ${size} shirt to bag`)} className="font-serif text-lg text-center w-[100%] font-bold bg-blue-600 text-white py-2 rounded-lg">
          ADD TO BAG
        </button>
      </div>
    </div>
  )

}

export default AddToBag
