import { CiStar } from "react-icons/ci";

const Recipe = () => {
  return (
    <div className="bg-black p-8 xl:mx-48">
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src="../assets/Coconut-Iced-Coffee-1584.jpg"
            alt="Coconut-Iced-Coffee"
          />
          <div className="p-8 absolute bottom-20 font-mono text-white bg-black">
            <h2>Coconut Iced Coffee</h2>
          </div>
        </div>
        <div className="pr-4 pl-4 md:pl-0">
          <div className="md:-ml-48 relative z-10 bg-white mt-12 p-4">
            <div className="flex gap-1 mb-1">
              <CiStar color="gold" />
              <CiStar color="gold" />
              <CiStar color="gold" />
              <CiStar color="gray" />
              <CiStar color="gray" />
              <p className="text-xs text-gray-300">(123)</p>
            </div>
            <h1 className="text-3xl font-bold font-mono">
              Coconut Iced Coffee
            </h1>
          </div>
          <div>
            <ul className="flex gap-4 text-sm">
              <li>TOTAL TIME</li>
              <li>LEVEL</li>
              <li>BUDGET</li>
            </ul>
          </div>
          <p className="my-8 text-sm italic leading-relaxed">
            Coconut Iced Coffee is easy to make and stores well in the fridge.
            Make a large batch and save yourself a few trips to the coffee shop.
          </p>
          <h3 className="uppercase font-bold my-4">Ingredients</h3>
          <ul className="text-sm list-disc space-y-1 px-4">
            <li>3 tablespoons espresso coffee powder</li>
            <li>1 cup water</li>
            <li>1 cup coconut milk</li>
            <li>Condensed milk</li>
            <li>Ice</li>
          </ul>
          <h3 className="uppercase font-bold my-4">Instructions</h3>
          <ol className="text-sm list-decimal space-y-1 px-4">
            <li>Boil the water and let it sit for 1-2 minutes.</li>
            <li>Put the coffee grounds into a cafetiere and pour in water.</li>
            <li>
              Let the coffee steep for 5 minutes then slowly press down the
              plunger on your cafetiere.
            </li>
            <li>
              Pour the coffee into a jug, allow to cool then chill for several
              hours
            </li>
            <li>
              Whisk in the coconut milk and condensed milk and serve over plenty
              of ice
            </li>
          </ol>
          <h4 className="mt-4 text-gray-400 text-xs uppercase font-bold">
            Note
          </h4>
          <p className="text-xs text-gray-700 italic">
            This coffee can be stored in the fridge for up to 5 days. Shake or
            stir again before serving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
