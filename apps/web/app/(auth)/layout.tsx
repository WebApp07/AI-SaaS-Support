import { ReactNode } from "react"
import { AuthLayout } from "@/modules/auth/ui/layouts/auth-layout"

const Layout = ({ children }: { children: ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>
}

export default Layout
