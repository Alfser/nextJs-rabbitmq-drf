'use server';

import { PrismaClient } from '@prisma/client'
import { PersonInputs } from './types';

const prismaClient = new PrismaClient()

export async function createPersonService(data: PersonInputs){
    
    const user = await prismaClient.user.create({
        data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            adress: {
                createMany: {
                    data: [
                        {
                            street: data.adress1.street,
                            number: data.adress1.number
                        },
                        {
                            street: data.adress2.street,
                            number: data.adress2.number
                        }
                    ]
                }
            }
        }
    })
}
