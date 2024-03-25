'use client'

import Button from '@/app/components/Button'
import Container from '@/app/components/Container'
import Heading from '@/app/components/Heading'
import ImageUpload from '@/app/components/ImageUpload'
import Input from '@/app/components/Input'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

export default function ProductUploadPage() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      description: '',
      category: '',
      latitude: 33.5563,
      longtitude: 126.79581,
      imageSrc: '',
      price: 1,
    },
  })

  const imageSrc = watch('imageSrc')
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {}


  const setCustomValue = (id: string, value: any) =>{
    setValue(id, value)
  }
  
  return (
    <Container>
      <div
        className='
            max-w-screen-lg
            mx-auto
        '>
        <form
          className='
                flex
                flex-col
                gap-8
            '
          onSubmit={handleSubmit(onSubmit)}>
          <Heading title='Product Upload' subtitle='upload your product' />
          <ImageUpload 
            onChange={(value) => setCustomValue('imageSrc', value)}
            value={imageSrc}
          />

          <Input
            id='title'
            label='Title'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id='description'
            label='Description'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id='price'
            label='Price'
            formatPrice
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />

          <div
            className='
            grid
            grid-cols-1
            md:grid-cols-2
            gap-3
            max-h-[50vh]
            overflow-y-auto
            '></div>
          <hr />

          <Button label='상품 생성하기' />
        </form>
      </div>
    </Container>
  )
}
