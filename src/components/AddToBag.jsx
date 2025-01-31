const AddToBag = () => {

  return (
    <div className="grid grid-cols-11 gap-8 m-32">
      <div className="grid-cols-subgrid col-span-1 flex flex-col gap-4">
        <img className="rounded-2xl disabled:opacity-30" width={100} src="./src/assets/blue_polo.webp" alt="blue polo" />
        <img className="rounded-2xl disabled:opacity-30" width={100} src="./src/assets/black_polo.webp" alt="black polo" />
        <img className="rounded-2xl disabled:opacity-30" width={100} src="./src/assets/white_polo.webp" alt="white polo" />
      </div>
      <div className="col-span-5">
        <img src="./src/assets/blue_polo.webp" alt="blue polo" />
      </div>
      <div className="col-span-5">
        <h1 className="text-blue-300 font-bold font-mono">POLO RALPH</h1>
        <h2 className="text-4xl font-bold font-sans">Custom Fit Polo Bear Oxford Shirt</h2>
        <p className="mt-4 font-sans text-gray-500">Blue polo with a classic cut. Made of smooth and soft cotton.</p>
        <p className="font-bold text-4xl mt-8">$99.00 <span className="text-xl bg-blue-200 text-blue-700 font-mono p-2 align-middle rounded-lg ml-4">-25%</span></p>
        <p className="line-through mt-2 mb-8 text-gray-300">$132.00</p>
        <h3 className="font-bold font-mono">CHOOSE SIZE</h3>
        <div className="flex gap-8 m-4">
          <button className="p-4 font-bold">S</button>
          <button className="p-4 bg-black font-bold text-white">M</button>
          <button className="p-4 font-bold">L</button>
          <button className="p-4 font-bold">XL</button>
          <button className="p-4 font-bold">XXL</button>
        </div>
        <button className="font-serif text-lg text-center w-[100%] font-bold bg-blue-600 text-white">
          ADD TO BAG
        </button>
      </div>
    </div>
  )

}

export default AddToBag
