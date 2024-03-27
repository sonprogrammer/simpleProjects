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