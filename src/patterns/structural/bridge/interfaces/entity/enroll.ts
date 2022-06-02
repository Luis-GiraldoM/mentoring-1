import { Course } from '../entity/course'
import { Student } from '../entity/student'

export interface Enroll {
  student: Student
  course: Course
}
