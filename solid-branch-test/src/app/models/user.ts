export interface IUser {
  type: string
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