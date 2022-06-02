import { StudentsDB } from '../model/studentData'
import { StudentsRepository } from './studentsRepository'

export class SQLStudentsRepository implements StudentsRepository {
  getById(id: number) {
    return StudentsDB.find((student) => student.id === id)
  }
}
