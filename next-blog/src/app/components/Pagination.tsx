'use client'

import usePagination from '@lucasmogari/react-pagination';
import React from 'react'

interface PaginationProps{
    page: number;
    totalItems: number;
    perPage: number;
}


export default function Pagination({
    page,
    totalItems,
    perPage
}: PaginationProps) {

    const { fromItem, toItem, getPageItem, totalPages} = usePagination({
        totalItems: totalItems,
        page: page,
        itemsPerPage: perPage,
        maxPageItems: 3
    })

    const firstPage = 1;

    const nextPage = Math.min(page + 1, totalPages)
    const prevPage = Math.max(page - 1, firstPage)
    const array = new Array(totalPages + 2)
    
  return (
    <div>
      {[...array].map((_, i) => {
        const {page, disabled, current } = getPageItem(i)  
        if(page === 'previous'){
            return (<span key={i}>{'<'}</span>)
        }
        if(page === 'next'){
            return (<span key={i}>{'>'}</span>)
        }
        if(page === 'gap'){
            return (<span key={i}>...</span>)
        }
        
        return (<span key={i}>{page}</span>)
        
      })}
    </div>
  )
}
