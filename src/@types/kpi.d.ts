export interface IKpiProps {
  value: number
  icon: { id: string; viewBox: string }
  type: string
  createdAt: string | undefined
  isLoading: boolean
}
