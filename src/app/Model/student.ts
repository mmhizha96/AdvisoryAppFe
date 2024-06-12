import { Programme } from "./programme"

export class Student {
  programme_id!:number
  first_name!:string
  last_name!:string
  sex!:string
  dob!:string
  phone_number!:string
  user_id!:number
  registration_number!:string
  programme!:Programme
}
