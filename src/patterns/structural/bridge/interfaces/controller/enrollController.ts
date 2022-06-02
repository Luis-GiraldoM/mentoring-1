import { EnrollService } from '../service/enrollService'

interface EnrollStudentBody {
  studentId: number
  courseId: number
}

export class EnrollController {
  constructor(private enrollService: EnrollService) {}

  //POST
  enrollStudent({ studentId, courseId }: EnrollStudentBody) {
    if (!studentId || !courseId) {
      throw new Error('El id del estudiante y del curso es obligatorio.') //400 Bad Request
    }

    return this.enrollService.enroll(studentId, courseId) //201 Created
  }
}
