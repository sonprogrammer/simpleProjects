import React from 'react'
import { IconType } from 'react-icons'

interface CategoryInputProps{
    icon: IconType,
    label: string,
    selected: boolean,
    path: string,
    onClick: (value: string) => void
}

export default function CategoryInput({
    icon: Icon,
    label,
    selected,
    onClick,
    path
}: CategoryInputProps) {
  return (
    <div
        onClick={()=> onClick(path)}
        className={`
            rounded-xl
            border-2
            p-4
            flex
            flex-col
            hover:border-orange-500
            gap-3
            transition
            cursor-pointer
            ${selected ? 'border-orange-500' : 'border-neutral-200'}
        `}
    >
      <Icon size={30} />
      <div className='font-semibold'>
        {label}
      </div>
    </div>
  )
}
