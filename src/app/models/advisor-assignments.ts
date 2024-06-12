import { Advisor } from "../Model/advisor"
import { Student } from "../Model/student"

export class AdvisorAssignments {

  assignment_id!:number
    student_id!:number
    advisor_id!:number
    date_assigned!: string
    status!: string
    student!:Student
    advisor!:Advisor
}
