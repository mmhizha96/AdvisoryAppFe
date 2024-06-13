export interface MessageResponse {
    message: string
    data: IMessage
  }
  
  export interface IMessage {
    message: string
    date_sent: string
    sender_id: string
    receiver_id: string
    message_id: number
  }
  