/* app/municipalities/page.tsx */

'use client'
import React from 'react';
import { Product } from '@/models/interfaces';
import useSWR from 'swr';
import ProductCard from '@/components/ProductCard/ProductCard';

export default function Municipalities() {

    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data: produtos, error, isLoading } = useSWR<Product[], Error>('/api/products', fetcher);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!produtos) return <div>No data available</div>;

    return <>
        {produtos.map((municipality, index) => (
            <ProductCard
                key={index}
                price={municipality.price}
                title={municipality.title}
                image={municipality.image}
                description={municipality.description}
            />
        ))}
    </>
}
