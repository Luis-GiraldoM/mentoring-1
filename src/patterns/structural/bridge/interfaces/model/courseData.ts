export interface CourseData {
  id: number
  name: string
  modality: string
  quota: number
}

export const coursesDB: CourseData[] = [
  { id: 1, name: 'Patrones', modality: 'presencial', quota: 6 },
  { id: 2, name: 'Patrones', modality: 'virtual', quota: 3 },
  { id: 3, name: 'Desarrollo web', modality: 'presencial', quota: 9 },
]
