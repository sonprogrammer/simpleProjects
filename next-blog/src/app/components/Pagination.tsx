'use client'

import usePagination from '@lucasmogari/react-pagination';
import React from 'react'
import PaginationLink from './categories/PaginationLink';

interface PaginationProps {
    page: number;
    totalItems: number;
    perPage: number;
}


export default function Pagination({
    page,
    totalItems,
    perPage
}: PaginationProps) {

    const { fromItem, toItem, getPageItem, totalPages } = usePagination({
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
        <div className='flex items-center justify-center gap-2 mt-4'>
            {[...array].map((_, i) => {
                const { page, disabled, current } = getPageItem(i)
                if (page === 'previous') {
                    return (<PaginationLink
                        page={prevPage}
                        disabled={disabled}
                        key={i}>{'<'}</PaginationLink>)
                }
                if (page === 'next') {
                    return (<PaginationLink
                        page={nextPage}
                        disabled={disabled}
                        key={i}>{'>'}</PaginationLink>)
                }
                if (page === 'gap') {
                    return (<PaginationLink key={i}>...</PaginationLink>)
                }

                return (<PaginationLink
                    active={current}
                    page={page}
                    key={i}>{page}</PaginationLink>)

            })}
        </div>
    )
}
