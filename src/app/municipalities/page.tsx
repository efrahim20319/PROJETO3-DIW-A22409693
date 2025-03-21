/* app/municipalities/page.tsx */ 

'use client'
import React from 'react';
import MunicipalityCard from '@/components/MunicipalityCard/MunicipalityCard';
import { Municipality } from '@/models/interfaces';
import useSWR from 'swr';

export default function Municipalities() {

    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data: municipalities, error, isLoading } = useSWR<Municipality[], Error>('/api/municipalities', fetcher);
    
    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!municipalities) return <div>No data available</div>;

    return <>
        {municipalities.map((municipality) => (
            <MunicipalityCard 
                key={municipality.id} 
                id={municipality.id}
                name={municipality.name}
                district_name={municipality.district_name}
            />
        ))}
    </>
}
