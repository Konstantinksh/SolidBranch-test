export interface IUsers {
  total: number
  data: IUser[]
}

export interface IUser {
  type: PersonTypes
  _id: string
  amount: string
  name: {
    first: string
    last: string
  }
  company: string
  email: string
  phone: string
  address: string
}

export type PersonTypes = 'income' | 'outcome' | 'loan' | 'investment';