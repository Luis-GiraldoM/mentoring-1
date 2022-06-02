import { Student } from '../entity/student'
import { StudentsDB } from '../model/studentData'
import { StudentsRepository } from './studentsRepository'

export class SQLStudentsRepository implements StudentsRepository {
  getById(id: number): Student | undefined {
    const studentData = StudentsDB.find((student) => student.id === id)

    return studentData ? { ...studentData } : undefined
  }
}
