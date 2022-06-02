import { Course } from '../entity/course'
import { Enroll } from '../entity/enroll'
import { Student } from '../entity/student'
import { enrollsDB } from '../model/enrollData'
import { EnrollRepository } from './enrollsRepository'

export class SQLEnrollRepository implements EnrollRepository {
  enroll(student: Student, course: Course): Enroll {
    enrollsDB.push({ studentId: student.id, courseId: course.id })

    return { student, course }
  }
}
