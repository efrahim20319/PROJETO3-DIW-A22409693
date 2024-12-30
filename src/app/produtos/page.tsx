/* app/municipalities/page.tsx */

'use client'
import React, { useEffect, useState } from 'react';
import { Product } from '@/models/interfaces';
import useSWR from 'swr';
import ProductCard from '@/components/ProductCard/ProductCard';

export default function Municipalities() {

    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data: produtos, error, isLoading } = useSWR<Product[], Error>('/api/products', fetcher);
    const [search, setSearch] = useState("");
    const [filterdProducts, setFilterdProducts] = useState(produtos);
    const [cart, setCart] = useState<Product[]>([]);


    const buy = () => {
        fetch("/api/deisishop/buy", {
            method: "POST",
            body: JSON.stringify({
                products: cart.map(product => product.id),
                name: "",
                student: false,
                coupon: ""
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            })
            .then(() => {
                setCart([]);
                alert("Compra feita com sucesso")
            })
            .catch(() => {
                console.log("Erro ao comprar");
                alert("Erro ao comprar")

            })
    }

    useEffect(() => {
        setFilterdProducts(produtos)
        const newFilterProducts = produtos?.filter(produto => produto.title.toLowerCase().includes(search.toLowerCase()))
        setFilterdProducts(newFilterProducts);
        return () => {

        };
    }, [search, produtos]);

    useEffect(() => {
        if (cart.length > 0) {
            console.log(cart);
            localStorage.setItem("cart", JSON.stringify(cart))
        }
        return () => {

        };
    }, [cart]);

    useEffect(() => {
        const cartLS = localStorage.getItem("cart")
        if (cartLS) {
            setCart(JSON.parse(cartLS))
        }
    }, []);





    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!produtos) return <div>No data available</div>;

    return <>
        <div className='mb-2'>
            <h2 className='font-bold text-xl'>Pesquisar produto</h2>
            <input className='rounded-md p-2' value={search} onChange={e => {
                setSearch(e.target.value)
            }} type="search" placeholder='Pesquisar' name="inputSearch" id="inputSearch" />
            <button onClick={() => { buy() }} className='mt-2 p-2 bg-slate-800 rounded-md text-white font-bold'>Comprar</button>
        </div>
        <div className='flex flex-col gap-4'>
            {filterdProducts?.map((produto, index) => (
                <ProductCard
                    setCart={setCart}
                    id={produto.id}
                    key={index}
                    price={produto.price}
                    title={produto.title}
                    image={produto.image}
                    description={produto.description}
                    product={produto}
                />
            ))}
        </div>
    </>
}
