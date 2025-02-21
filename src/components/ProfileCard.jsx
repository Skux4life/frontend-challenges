import faceBookSvg from "../../public/facebook.svg";
import xSvg from "../../public/x.svg";
import linkedInSvg from "../../public/linkedin.svg";
import instagramSvg from "../../public/ig.svg";
import githubSvg from "../../public/github.svg";
import moBro from "../assets/mo-bro.png";

function ProfileCard() {
  return (
    <div className="bg-white shadow-gray-100 shadow-lg rounded-3xl my-auto mt-32 text-center text-black mx-auto w-[400px]">
      <div className="bg-gradient-to-br from-red-500 rounded-t-3xl">
        <img
          className="inline rounded-full my-4 shadow-xl shadow-white"
          width={150}
          src={moBro.src}
          alt="mugshot"
        />
      </div>
      <h1 className="mt-4 text-3xl font-serif">Mo Salah</h1>
      <h2 className="mb-4 text-gray-300 font-sans">@mo_salah</h2>
      <div className="flex justify-evenly">
        <img height={30} width={30} src={faceBookSvg.src} alt="facebook-icon" />
        <img height={30} width={30} src={xSvg.src} alt="x-icon" />
        <img height={30} width={30} src={linkedInSvg.src} alt="linkedIn-icon" />
        <img
          height={30}
          width={30}
          src={instagramSvg.src}
          alt="instagram-icon"
        />
        <img height={30} width={30} src={githubSvg.src} alt="github-icon" />
      </div>
      <p className="p-8 font-mono leading-tight">
        Crafter of beautiful moments for all to enjoy, generous supplier of
        assists, leading goal scorer, and has captured the hearts of the Kop.
      </p>
      <div className="flex justify-evenly p-8 font-serif">
        <button className="bg-black border-gray-500 border-2 text-white py-2 w-32 rounded-full hover:font-bold">
          Follow
        </button>
        <button className="bg-gray-50 border-2 border-gray-100 py-2 text-gray-500 w-32 rounded-full hover:font-bold">
          Message
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
