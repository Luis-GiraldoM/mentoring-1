import { Enroll } from '../entity/enroll'

export interface EnrollService {
  enroll: (studentId: number, courseId: number) => Enroll
}
