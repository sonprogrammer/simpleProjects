import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/helpers/prismadb'

export async function GET(
    request: Request
) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return NextResponse.error()
    }

    const users = await prisma.user.findMany({
        include: {
            conversations: {
                include: {
                    messages: {
                        include: {
                            sender: true,
                            receiver: true
                        },
                        orderBy: {
                            createdAt: 'asc'
                        }
                    },
                    users: true
                }
            }
        }
    })
    return NextResponse.json(users)
}


export async function POST(
    request: Request
){
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return NextResponse.error()
    }
    const body = await request.json()

    const conversation = await prisma.conversation.findFirst({
        where:{
            AND:[
                {
                    users: {
                        some:{
                            id: body.senderId
                        }
                    }
                },
                {
                    users:{
                        some:{
                            id:body.receiverId
                        }
                    }
                }
            ]
        }
    })
    if(conversation){
        try {
            const message = await prisma.message.create({
                data:{
                    text: body.text,
                    image: body.image,
                    senderId: body.senderId,
                    receiverId: body.receiverId,
                    conversationId: conversation.id
                }
            })

            return NextResponse.json(message)
        } catch (error) {
            return NextResponse.json(error)
        }
    }else{
        const newConversation = await prisma.conversation.create({
            data:{
                senderId: body.senderId,
                receiverId: body.receiverId,
                users:{
                    connect:[
                        {
                            id: body.senderId,
                        },
                        {
                            id: body.receiverId,
                        }
                    ]
                }
            }
        })
        try {
            const message = await prisma.message.create({
                data:{
                    text: body.text,
                    image: body.image,
                    senderId: body.senderId,
                    receiverId: body.receiverId,
                    conversationId: newConversation.id
                }
            })

            return NextResponse.json(message)
        } catch (error) {
            return NextResponse.json(error)
        }
    }
}

