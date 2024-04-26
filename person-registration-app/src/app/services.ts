'use server';

import { PrismaClient } from '@prisma/client'
import { PersonInputs } from './types';
import { RabbitMQClient } from '../../rabbitmq/client';

const prismaClient = new PrismaClient()

async function sendToBroker(data: PersonInputs) {
    const rabbitClient = new RabbitMQClient<PersonInputs>();
    await rabbitClient.sendToQueue(RabbitMQClient.BADGE_QUEUE, data)
}

export async function createPersonService(data: PersonInputs){
    
    try{
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
        data['id'] = user['id'] 
        await sendToBroker(data)
    }
    catch(err){
        console.error(err)
    }
}
