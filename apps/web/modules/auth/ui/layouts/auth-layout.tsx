import { ReactNode } from "react"

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      {children}
    </div>
  )
}
