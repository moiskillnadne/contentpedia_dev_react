export interface Record {
  day: string
  night: string
}

export interface HistoryItem {
  record: Record
  date: Date
}

export type RecordHistoryType = 'electricityHistory' | 'waterHistory' | 'gasHistory'

export type AccountType = 'electricityAccount' | 'gasAccount'

export type UserItemModel = {
  id: string
  username: string
  avatarUrl: string
  address: string
  electricityAccount: string
  gasAccount: string
  electricityHistory: HistoryItem[]
  waterHistory: HistoryItem[]
  gasHistory: HistoryItem[]
}

export interface UserModel {
  id: string
  email: string
  users: UserItemModel[]
}
