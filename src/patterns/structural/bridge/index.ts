import { EnrollController } from './interfaces/controller/enrollController'
import { CourseRepository } from './interfaces/repository/courseRepository'
import { EnrollRepository } from './interfaces/repository/enrollsRepository'
import { SQLCourseRepository } from './interfaces/repository/sqlCourseRepository'
import { SQLEnrollRepository } from './interfaces/repository/sqlEnrollRepository'
import { SQLStudentsRepository } from './interfaces/repository/sqlStudentsRepository'
import { StudentsRepository } from './interfaces/repository/studentsRepository'
import { EnrollService } from './interfaces/service/enrollService'
import { EnrollServiceImplementation } from './interfaces/service/EnrollServiceImplementation'

const courseRepository: CourseRepository = new SQLCourseRepository()
const studentRepository: StudentsRepository = new SQLStudentsRepository()
const enrollRepository: EnrollRepository = new SQLEnrollRepository()

const enrollService: EnrollService = new EnrollServiceImplementation(
  enrollRepository,
  studentRepository,
  courseRepository
)

const enrollController = new EnrollController(enrollService)

// Single Responsability
// Liskov Sustitution
// Dependency Injection
// Single Responsability
// Open/Closed

export const runBridgePattern = () => {
  console.log('Se intenta matricula', enrollController.enrollStudent({ studentId: 1, courseId: 1 }))

  console.log('Se intenta matricula', enrollController.enrollStudent({ studentId: 2, courseId: 1 }))

  try {
    console.log('Se intenta matricula', enrollController.enrollStudent({ studentId: 3, courseId: 1 }))
  } catch (error) {
    console.error(error)
  }

  try {
    console.log('Se intenta matricula', enrollController.enrollStudent({ studentId: 1, courseId: 4 }))
  } catch (error) {
    console.error(error)
  }

  try {
    console.log('Se intenta matricula', enrollController.enrollStudent({ studentId: undefined as any, courseId: 1 }))
  } catch (error) {
    console.error(error)
  }

  try {
    console.log('Se intenta matricula', enrollController.enrollStudent({ studentId: 2, courseId: undefined as any }))
  } catch (error) {
    console.error(error)
  }
}
