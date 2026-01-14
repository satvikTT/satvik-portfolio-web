import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Satvik Bhagat | Cyber Security Enthusiast',
  description: 'Portfolio of Satvik Bhagat - Passionate student specializing in Cyber Security, Digital Forensics, and Computer Science fundamentals.',
  keywords: ['Cyber Security', 'Digital Forensics', 'Portfolio', 'Satvik Bhagat', 'Security Researcher'],
  authors: [{ name: 'Satvik Bhagat' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Satvik Bhagat | Cyber Security Enthusiast',
    description: 'Portfolio showcasing cybersecurity projects and expertise',
    siteName: 'Satvik Bhagat Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Satvik Bhagat | Cyber Security Enthusiast',
    description: 'Portfolio showcasing cybersecurity projects and expertise',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
