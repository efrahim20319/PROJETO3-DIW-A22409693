import { FunctionComponent } from "react";
import { Product } from "@/models/interfaces"
import Image from "next/image";


interface ProductCardType extends Product {
    setCart: React.Dispatch<React.SetStateAction<Product[]>>,
    product: Product
}

const ProductCard: FunctionComponent<ProductCardType> = ({ description, image, price, title,  setCart, product }) => {
    return (
        <div className="bg-slate-200 rounded-md p-3 flex flex-col shadow-lg">
            <h1 className="flex p-1 justify-center font-bold text-xl">{title}</h1>
            <p><Image className="w-full h-full" src={image} alt="" width={3000} height={3000} /></p>
            <span className="flex p-1 justify-center font-bold">{price}€</span>
            <p className="text-justify bg-slate-400 p-2">
                {description}
            </p>
            <button className="bg-gray-700 text-white p-2" onClick={() => {setCart((prevCart) => [...prevCart, product])
            }}>Adicionar ao Carrinho</button>
        </div>);
}

export default ProductCard;