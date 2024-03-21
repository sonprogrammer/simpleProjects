import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export { default } from 'next-auth/middleware'

export async function middleware(req: NextRequest){
    const session = await getToken({req, secret : process.env.JWT_SECRET}) 
    console.log('session',session) //session 정보가 나옴(유저정보가 나옴)

    console.log('req.nextUrl.pathname',req.nextUrl.pathname) // user이나옴

    const pathname = req.nextUrl.pathname

    //로그인된 유저만 접근가능
    if(pathname.startsWith('/user/') && !session){
        console.log('req.url', req.url);
        return NextResponse.redirect(new URL('/auth/login', req.url));
    } 

    //어드민 유저만 접근 가능
    if(pathname.startsWith('/admin') && (session?.role != 'admin')){
        return NextResponse.redirect(new URL('/', req.url))
    }

    //로그인된 유저는 로그인, 회원가입 페이지에 접근 x
    if(pathname.startsWith('/auth') && session){
        return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()
}



export const config = {matcher : ['/admin/:path*', '/user']} //로그인된사람만 접근가능