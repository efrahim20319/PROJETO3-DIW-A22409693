import { Tecnologia } from "@/models/interfaces";
import Image from "next/image";
import { FunctionComponent } from "react";




const TecnologiaCard: FunctionComponent<Tecnologia> = ({ title, image, description, rating }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300 max-w-xs">
            <Image
                src={image}
                alt={title}
                className="w-24 h-24 mx-auto object-contain"
                width={3000}
                height={3000}
            />
            <h3 className="text-xl font-bold mt-4">{title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{description}</p>
            <p className="text-yellow-400 mt-3">⭐ {rating}</p>
        </div>
    );
}




export default TecnologiaCard;
