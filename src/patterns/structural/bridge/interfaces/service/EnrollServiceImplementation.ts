import { Enroll } from '../entity/enroll'
import { EnrollService } from './enrollService'

export class EnrollServiceImplementation implements EnrollService {
  constructor() {}

  enroll(studentId: number, courseId: number): Enroll {
    return null
  }
}
