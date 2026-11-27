
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@base-ui/react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

const Products = () => {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    
      const response = await axios.get(
        'https://fakestoreapi.com/products'
      )
      setProducts(response.data)
    
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <h1 className="text-6xl pl-96 ml-76 ">Products</h1>

      <div className="grid grid-cols-2">

        {products.map((product) => (
          <Card key={product.id}>

            <CardHeader>
              <CardTitle>
                <h3 className="text-lg">
                  {product.title}
                </h3>
              </CardTitle>
            </CardHeader>

            <CardContent>

              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain mb-4"
              />

              <p>Price: ${product.price}</p>

              <Button>
                <Link to={`/productDetails/${product.id}`}>
                  View Details
                </Link>
              </Button>

            </CardContent>

          </Card>
        ))}

      </div>
    </div>
  )
}

export default Products
