import { Enroll } from '../entity/enroll'
import { CourseRepository } from '../repository/courseRepository'
import { EnrollRepository } from '../repository/enrollsRepository'
import { StudentsRepository } from '../repository/studentsRepository'
import { EnrollService } from './enrollService'

export class EnrollServiceImplementation implements EnrollService {
  constructor(
    private enrollRepository: EnrollRepository,
    private studentsRepository: StudentsRepository,
    private coursesRepository: CourseRepository
  ) {}

  enroll(studentId: number, courseId: number): Enroll {
    const student = this.studentsRepository.getById(studentId)

    if (!student) {
      throw new Error('No existe el estudiante')
    }

    const course = this.coursesRepository.getById(courseId)

    if (!course) {
      throw new Error('No existe el curso')
    }

    if (course.quota === 0) {
      throw new Error('No hay cupos disponibles')
    }

    return this.enrollRepository.enroll(student, course)
  }
}
