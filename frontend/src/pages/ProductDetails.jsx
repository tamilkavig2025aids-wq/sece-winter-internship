import React from 'react'
import {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card } from '@/components/ui/card'


const ProductDetails = () => {
    const {id} = useParams()

    const [product, setProduct] = useState({})
    const getProduct = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data)
        console.log(response.data);
        
    }
    useEffect(() => {
        getProduct()
    }, [])

  return (
    <div>
        <h1 className="text-6xl ">ProductDetails</h1>
        <Card className='flex flex-col gap-6'>
            <img src={product.image} alt={product.title} className="w-full h-70 object-contain"/>
            <h1 className="text-4xl font-extrabold">{product.title}</h1>

            <h2>Price: ${product.price}</h2>
            <p>{product.description}</p>
              


        </Card>
    </div>
  )
}

export default ProductDetails
