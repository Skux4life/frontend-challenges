const ShirtSizeButton = ({size, selected, selectHandler}) => {
  return (
    <>
      <button onClick={() => selectHandler(size)} className={`p-4 font-bold ${selected && 'bg-black text-white'}`}>{size}</button>
    </>
  )
}

export default ShirtSizeButton
