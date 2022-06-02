import { Enroll } from '../entities/enroll'

export interface EnrollRepository {
  enroll: (studentId: number, courseId: number) => Enroll
}
