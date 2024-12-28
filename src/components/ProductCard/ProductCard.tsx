import { FunctionComponent } from "react";
import { Product } from "@/models/interfaces"
import Image from "next/image";


const ProductCard: FunctionComponent<Product> = ({ description, image, price, title }) => {
    return (
        <div>
            <h1 className="flex p-1 justify-center font-bold text-xl">{title}</h1>
            <p><Image className="w-full h-full" src={image} alt="" width={3000} height={3000}/></p>
            <span className="flex p-1 justify-center font-bold">{price}€</span>
            <p className="text-justify bg-slate-400 p-2">
                {description}
            </p>
        </div>);
}

export default ProductCard;