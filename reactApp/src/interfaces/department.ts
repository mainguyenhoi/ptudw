
export interface Department {
    uuid: string,
    name: string,
    slugName: string,
    isActivated: boolean,
    description: string,
    createdAt: Date
}


export interface ListDepartmentData {
    count: number,
    departments: Department[]
}


export interface DepartmentData {
    count: number,
    department: Department
}

