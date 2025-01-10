import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import "react-toastify/dist/ReactToastify.css"

import type { Metadata } from 'next'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BH Vídeo Produções',
  description: 'Filmagem e edição de Vídeo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider>
        <Header />
        {children}
        <Footer />
        </ThemeProvider>
        </body>
    </html>
  )
}
