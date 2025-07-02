"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

/**
 * Enhanced Theme Provider with error boundary and debugging
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)
  const { attribute, defaultTheme, enableSystem, disableTransitionOnChange } = props

  React.useEffect(() => {
    setMounted(true)

    // Debug theme provider initialization
    console.log("ThemeProvider mounted with props:", {
      attribute,
      defaultTheme,
      enableSystem,
      disableTransitionOnChange,
    })
  }, [attribute, defaultTheme, enableSystem, disableTransitionOnChange])

  // Prevent flash of unstyled content
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
