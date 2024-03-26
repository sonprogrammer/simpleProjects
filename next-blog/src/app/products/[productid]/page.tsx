import getCurrentUser from '@/app/actions/getCurrentUser'
import getProductById from '@/app/actions/getProductById'
import EmptyState from '@/app/components/EmptyState'
import React from 'react'
import ProductClient from './ProductClient'


interface Params{
  productId?: string
}

export default async function ProductPage({ params } : {params: Params}) {
  console.log('params', params)

  const product = await getProductById(params)
  const currentUser = await getCurrentUser()

  console.log('Product', product)

  if(!product) {
    return(
      <EmptyState />
    )
  }

  return (
    <div>
      <ProductClient
        product={product}
        currentUser={currentUser}
       />
    </div>
  )
}
