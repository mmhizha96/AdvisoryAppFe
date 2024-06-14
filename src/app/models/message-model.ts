import { IMessage } from "../Interfaces/imessage"

export class MessageModel implements IMessage{
    message!: string
    date_sent!: string
    sender_id!: string
    receiver_id!: string
    message_id!: number
    
}
