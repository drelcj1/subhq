import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Services - SubHQ",
  description: "Explore our comprehensive digital services for Nigerian users - airtime, data, bills, and more.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
