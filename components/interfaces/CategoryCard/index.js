import Image from "next/image";
import CategoryCardPlaceholder from "../../../assets/logo/CategoryCardPlaceholder.svg";
import { BsCheckCircleFill } from "react-icons/bs";
export default function CategoryCard({ data, setSelectedCategory }) {
    function handleClick() {
        setSelectedCategory(data.id);
    }
    return (
        <div
            className="flex flex-col items-center bg-[#e69d96] cursor-pointer "
            style={{
                position: "relative",
                boxShadow: "0px 2px 8px #babfd8",
                width: "200px",
                height: "200px",
            }}
            onClick={handleClick}
        >
            <div>
                <img
                    src={data.img}
                    style={{
                        width: "200px",
                        height: "148px",
                    }}
                />
            </div>
            <div className="bg-[#f2f2f2]">
                <div
                    className="text-center py-3 text-xl font-medium text-[#2f3551] "
                    style={{
                        width: "200px",
                        height: "52px",
                    }}
                >
                    {data.name}
                </div>
            </div>
        </div>
    );
}
