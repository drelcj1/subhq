"use client"

import type React from "react"

import { useEffect, useState, useCallback } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Loader2 } from "lucide-react"

/**
 * ThemeToggle Component
 *
 * A comprehensive theme toggle component that switches between light and dark modes
 * based on the user's system preference. Provides accessibility features and error handling.
 *
 * Features:
 * - Respects system preference on initial load
 * - Single button toggle (no dropdown)
 * - Accessible with ARIA attributes
 * - Error handling with console logging
 * - Smooth transitions and visual feedback
 * - Responsive design
 */

interface ThemeToggleProps {
  /** Additional CSS classes for styling */
  className?: string
  /** Size variant for the button */
  size?: "default" | "sm" | "lg" | "icon"
  /** Variant style for the button */
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export function ThemeToggle({ className = "", size = "icon", variant = "ghost" }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isToggling, setIsToggling] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Handle component mounting to prevent hydration mismatch
  useEffect(() => {
    try {
      setMounted(true)

      // Log initial theme state for debugging
      console.log("Theme Toggle initialized:", {
        theme,
        resolvedTheme,
        systemTheme,
        userAgent: typeof window !== "undefined" ? window.navigator.userAgent : "SSR",
      })
    } catch (err) {
      const errorMessage = `Failed to initialize theme toggle: ${err instanceof Error ? err.message : "Unknown error"}`
      setError(errorMessage)
      console.error(errorMessage, err)
    }
  }, [theme, resolvedTheme, systemTheme])

  // Clear error when theme changes successfully
  useEffect(() => {
    if (mounted && !isToggling) {
      setError(null)
    }
  }, [theme, mounted, isToggling])

  /**
   * Determines the current effective theme
   * Handles system theme detection and fallbacks
   */
  const getCurrentTheme = useCallback((): "light" | "dark" => {
    try {
      // If we have a resolved theme, use it
      if (resolvedTheme === "light" || resolvedTheme === "dark") {
        return resolvedTheme
      }

      // Fallback to system theme detection
      if (typeof window !== "undefined") {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        return mediaQuery.matches ? "dark" : "light"
      }

      // Final fallback to light theme
      return "light"
    } catch (err) {
      console.warn("Failed to determine current theme, defaulting to light:", err)
      return "light"
    }
  }, [resolvedTheme])

  /**
   * Handles theme toggle with error handling and loading state
   */
  const handleToggle = useCallback(async () => {
    if (isToggling) return // Prevent multiple rapid clicks

    try {
      setIsToggling(true)
      setError(null)

      const currentTheme = getCurrentTheme()
      const newTheme = currentTheme === "dark" ? "light" : "dark"

      console.log("Toggling theme:", {
        from: currentTheme,
        to: newTheme,
        previousTheme: theme,
      })

      // Set the new theme
      setTheme(newTheme)

      // Verify the theme was set correctly after a brief delay
      setTimeout(() => {
        const verifyTheme = getCurrentTheme()
        if (verifyTheme !== newTheme) {
          console.warn("Theme verification failed:", {
            expected: newTheme,
            actual: verifyTheme,
          })
        }
      }, 100)
    } catch (err) {
      const errorMessage = `Failed to toggle theme: ${err instanceof Error ? err.message : "Unknown error"}`
      setError(errorMessage)
      console.error(errorMessage, err)
    } finally {
      // Reset loading state after animation completes
      setTimeout(() => setIsToggling(false), 200)
    }
  }, [getCurrentTheme, setTheme, theme, isToggling])

  /**
   * Keyboard event handler for accessibility
   */
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        handleToggle()
      }
    },
    [handleToggle],
  )

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <Button variant={variant} size={size} className={className} disabled aria-label="Loading theme toggle">
        <Loader2 className="h-[1.2rem] w-[1.2rem] animate-spin" />
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    )
  }

  const currentTheme = getCurrentTheme()
  const isDark = currentTheme === "dark"

  return (
    <Button
      variant={variant}
      size={size}
      className={`${className} relative transition-all duration-200 hover:scale-105 active:scale-95`}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      disabled={isToggling}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      role="switch"
      aria-checked={isDark}
      title={`Currently in ${currentTheme} mode. Click to switch to ${isDark ? "light" : "dark"} mode.`}
    >
      {/* Loading state */}
      {isToggling && <Loader2 className="absolute h-[1.2rem] w-[1.2rem] animate-spin" />}

      {/* Sun icon for light mode */}
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        } ${isToggling ? "opacity-0" : ""}`}
        aria-hidden="true"
      />

      {/* Moon icon for dark mode */}
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        } ${isToggling ? "opacity-0" : ""}`}
        aria-hidden="true"
      />

      {/* Screen reader text */}
      <span className="sr-only">
        {isToggling ? "Switching theme..." : `Switch to ${isDark ? "light" : "dark"} mode`}
      </span>

      {/* Error indicator (visible to screen readers) */}
      {error && (
        <span className="sr-only" role="alert">
          Error: {error}
        </span>
      )}
    </Button>
  )
}

/**
 * Hook for accessing theme toggle functionality in other components
 */
export function useThemeToggle() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getCurrentTheme = useCallback((): "light" | "dark" => {
    if (!mounted) return "light"

    if (resolvedTheme === "light" || resolvedTheme === "dark") {
      return resolvedTheme
    }

    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }

    return "light"
  }, [resolvedTheme, mounted])

  const toggleTheme = useCallback(() => {
    const currentTheme = getCurrentTheme()
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }, [getCurrentTheme, setTheme])

  return {
    currentTheme: getCurrentTheme(),
    toggleTheme,
    mounted,
    theme,
    resolvedTheme,
    systemTheme,
  }
}
