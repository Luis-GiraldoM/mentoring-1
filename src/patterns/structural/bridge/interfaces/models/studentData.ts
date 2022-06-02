export interface StudentData {
  id: number
  name: string
  identification: string
}

export const StudentsDB: StudentData[] = [
  { id: 1, name: 'Luis', identification: '123' },
  { id: 2, name: 'Santiago', identification: '453' },
]
