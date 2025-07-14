import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/components/AuthProvider'
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FisikaKu',
  description: 'Fisika interaktif untuk semua',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              // unstyled: true,
              style
              : {
                background: '#0B0E1E',
                color: '#FFFFFF',
                borderColor: '#1E293B',
              },
              classNames: {
                error: '!bg-red-500 text-white',
                success: '!bg-green-500 text-white',
              }
            }}
          />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

