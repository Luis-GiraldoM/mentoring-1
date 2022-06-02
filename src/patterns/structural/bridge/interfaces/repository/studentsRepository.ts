import { Student } from '../entity/student'
export interface StudentsRepository {
  getById: (id: number) => Student | undefined
}
