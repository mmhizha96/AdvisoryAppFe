import { Advisor } from "./advisor"
import { Student } from "./student"

export class User {
  id!: number
  name!:string
  email!:string
  password!:string
  role_id!:number
  student= new Student()
  advisor= new Advisor()
password_confirmation!: string

}
