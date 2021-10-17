import {Department} from "./department";

export interface Report {
    uuid: string,
    name: string,
    url: string,
    isActivated: boolean,
    description: string,
    createdAt: Date
    departments: Partial<Department>[]
}