import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { TbPhotoPlus } from 'react-icons/tb'
import React from 'react'

interface ImageUploadProps {
  onChange: (value: string) => void
  value: string
}

export default function ImageUpload({ onChange, value }: ImageUploadProps) {
  const handleUpload = (result: any) => {
    onChange(result.info.secure_url)
  }

  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET

  return (
    <CldUploadWidget
      onUploadAdded={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
      }}>
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className='relative flex flex-col items-center justify-center gap-4 p-20 transition border-2 border-dashed cusor-pointer hover:opacity-70 border-neutral-300 text-neutral-300'>
            <TbPhotoPlus size={50} /> 
            {value && (
              <div className='absolute inset-0 w-full h-full'>
                <Image fill style={{ objectFit: 'cover' }} src={value} alt='' />
              </div>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  )
}
