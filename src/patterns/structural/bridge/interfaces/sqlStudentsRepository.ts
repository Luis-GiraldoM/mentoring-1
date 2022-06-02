import { Enroll } from './entities/enroll'
import { coursesDB } from './models/courseData'
import { enrollsDB } from './models/enrollData'
import { StudentsDB } from './models/studentData'
import { StudentsRepository } from './studentsRepository'

export class SQLStudentsRepository implements StudentsRepository {
  getById(id: number) {
    return StudentsDB.find((student) => student.id === id)
  }

  enroll(studentId: number, courseId: number): Enroll {
    enrollsDB.push({ studentId, courseId })

    const student = this.getById(studentId)
    const course = coursesDB.find((course) => course.id == courseId)

    const enroll: Enroll = { student, course }

    return enroll
  }
}
