import Image from "next/image";
import img1 from "../../../assets/Home/hiw1.svg";
import img2 from "../../../assets/Home/hiw2.svg";
import img3 from "../../../assets/Home/hiw3.svg";

export default function HIW() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10 mt-32">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <div className="text-4xl font-semibold">How it works!</div>
        <div className="font-normal text-xl">In 3 Easy Steps</div>
      </div>
      <div className="flex flex-row gap-x-28">
        <div className="flex flex-col gap-y-6 items-center">
          <Image src={img1} />

          <div className="font-normal text-lg text-center ml-10">
            If lost something, upload the details of the item that you have lost
            !
          </div>
        </div>
        <div className="flex flex-col gap-y-6 items-center">
          <Image src={img2} />
          <div className="font-normal text-lg text-center ml-10 ">
            If found Something, upload the details of the item that you have
            just found !
          </div>
        </div>
        <div className="flex flex-col gap-y-6 items-center">
          <Image src={img3} />
          <div className="font-normal text-lg text-center ml-10">
            If you see your lost item in the found list or vice-versa then
            connect with them.
          </div>
        </div>
      </div>
    </div>
  );
}
