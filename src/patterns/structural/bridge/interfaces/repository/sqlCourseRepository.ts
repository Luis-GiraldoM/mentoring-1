import { Course } from '../entity/course'
import { CourseData, coursesDB } from '../model/courseData'
import { CourseRepository } from './courseRepository'

export class SQLCourseRepository implements CourseRepository {
  getAll(): Course[] {
    return coursesDB.map((course) => ({ ...course }))
  }

  getById(id: number): Course {
    const courseData: CourseData = coursesDB.find((course) => course.id === id)

    return { ...courseData }
  }
}
