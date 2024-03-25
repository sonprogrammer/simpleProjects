import Image from "next/image";
import getProducts, { ProductsParams } from "../actions/getProducts";

interface HomeProps{
  searchParams: ProductsParams
}

export default async function Home({searchParams}: HomeProps) {

  const products = await getProducts(searchParams)

  console.log(products)
  
  return (
   <main>
    anyone can see
   </main>
  );
}
