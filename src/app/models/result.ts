import { Semester } from "./semester"
export class ResultData {
  student_id!: number

  average_gpa!: number
  results: Result[]=[]
level_id!: number
semester_id!: number
}
export class Result {
  result_id!: number
  mark!: number
  student!: Student
  level!: Level
  semester!: Semester
  module_name!: string
  credits!: number
  gpa!:number
}
export interface MyResult {
  results_id: number
  student_id: number
  mark: string
  module_name: string
  credits: string
  level_id: number
  semester_id: number
  gpa: string
  student: Student
  level: Level
}

export interface Student {
  student_id: number
  first_name: string
  last_name: string
  date: any
  sex: string
  user_id: number
  programme_id: string
  phone_number: number
  dob: string
}

export interface Level {
  level_id: number
  level: string
}
