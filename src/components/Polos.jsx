import bluePolo from "../assets/blue_polo.webp";
import blackPolo from "../assets/black_polo.webp";
import whitePolo from "../assets/white_polo.webp";

const Polos = ({ selectedColor, setSelectedColor }) => {
  return (
    <>
      <div className="grid-cols-subgrid col-span-1 flex flex-col gap-4">
        <img
          className={`hover:cursor-pointer rounded-2xl disabled:opacity-30 ${selectedColor == "blue" && "border-sky-200 border-2 hover:cursor-default"}`}
          width={100}
          src={bluePolo.src}
          alt="blue polo"
          onClick={() => setSelectedColor("blue")}
        />
        <img
          className={`hover:cursor-pointer rounded-2xl disabled:opacity-30 ${selectedColor == "black" && "border-sky-200 border-2 hover:cursor-default"}`}
          width={100}
          src={blackPolo.src}
          alt="black polo"
          onClick={() => setSelectedColor("black")}
        />
        <img
          className={`hover:cursor-pointer rounded-2xl disabled:opacity-30 ${selectedColor == "white" && "border-sky-200 border-2 hover:cursor-default"}`}
          width={100}
          src={whitePolo.src}
          alt="white polo"
          onClick={() => setSelectedColor("white")}
        />
      </div>
      <div className="col-span-5">
        {selectedColor == "blue" ? (
          <img src={bluePolo.src} alt="blue polo" />
        ) : selectedColor == "black" ? (
          <img src={blackPolo.src} alt="black polo" />
        ) : (
          <img src={whitePolo.src} alt="white polo" />
        )}
      </div>
    </>
  );
};

export default Polos;
