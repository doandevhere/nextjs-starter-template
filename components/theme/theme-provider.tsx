'use client'

import { themeConfig } from '@/components/theme/theme-config'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import * as React from 'react'

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const isMultiTheme = themeConfig.allowMultiTheme
  const Provider = isMultiTheme ? NextThemesProvider : React.Fragment

  const getPropsByConfig = () => {
    if (isMultiTheme) {
      return {
        attribute: 'class',
        defaultTheme: 'dark',
        enableSystem: false,
        disableTransitionOnChange: true,
        ...props,
      }
    }

    return {}
  }

  return <Provider {...getPropsByConfig()}>{children}</Provider>
}
