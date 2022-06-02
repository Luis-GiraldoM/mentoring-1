import { Course } from '../entity/course'

export interface CourseRepository {
  getAll: () => Course[]
  getById: (id: number) => Course | undefined
}
