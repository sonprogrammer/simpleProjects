'use client'
import Button from '@/app/components/Button'
import Container from '@/app/components/Container'
import ProductHead from '@/app/components/products/ProductHead'
import ProductInfo from '@/app/components/products/ProductInfo'
import { Product, User } from '@prisma/client'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ProductClientProps {
    product: Product & { user: User }
    currentUser?: User | null
}

export default function ProductClient({ product, currentUser }: ProductClientProps) {

    const KakaoMap = dynamic(() => import('../../components/KakaoMap'), {
        ssr: false
    })

    const router = useRouter()

    return (
        <Container>
            <div
                className='max-w-screen-lg mx-auto'
            >
                <div className='flex flex-col gap-6'>
                    <ProductHead 
                        title={product.title}
                        imageSrc={product.imageSrc}
                        id={product.id}
                        currentUser={currentUser}
                    />
                    <div className='grid grid-cols-1 mt-6 md:grid-cols-2 md:gap-10'>
                        <ProductInfo />
                        <div>
                            <KakaoMap detailPage 
                                      latitude={product.latitude} 
                                      longitude={product.longitude} />
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                <Button label='이 유저와 채팅하기'
                        onClick={()=>router.push('/chat')}
                />
                </div>
            </div>
        </Container>
    )
}
