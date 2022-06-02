import { Course } from '../entity/course'
import { Enroll } from '../entity/enroll'
import { Student } from '../entity/student'

export interface EnrollRepository {
  enroll: (student: Student, course: Course) => Enroll
}
