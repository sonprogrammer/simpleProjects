import Image from "next/image";
import getProducts, { ProductsParams } from "../actions/getProducts";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";

interface HomeProps{
  searchParams: ProductsParams
}

export default async function Home({searchParams}: HomeProps) {

  const products = await getProducts(searchParams)

  console.log(products)
  
  return (
   <Container>
    {/* category */}

    <EmptyState />
    {/* {
      products?.data.length === 0 
      ?
      <EmptyState />
      :
      <>
      <div>
        hi
      </div>
      </>
    } */}
   </Container>
  );
}
