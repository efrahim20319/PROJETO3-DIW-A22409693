/* models/interface.ts */

export interface Municipality {
    id: string;
    district_name: string;
    name: string;
}

export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category?: string,
    image: string,
    rating?: {
        rate: number,
        count: number
    }
}

export interface Tecnologia {
    title: string,
    image: string,
    description: string,
    rating: number
}