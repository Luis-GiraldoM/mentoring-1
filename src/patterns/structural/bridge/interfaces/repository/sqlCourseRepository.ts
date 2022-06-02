import { Course } from '../entity/course'
import { coursesDB } from '../model/courseData'
import { CourseRepository } from './courseRepository'

export class SQLCourseRepository implements CourseRepository {
  getAll(): Course[] {
    return coursesDB.map((course) => ({ ...course }))
  }

  getById(id: number): Course | undefined {
    const courseData = coursesDB.find((course) => course.id === id)

    return courseData ? { ...courseData } : undefined
  }
}
