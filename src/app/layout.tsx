import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StyleStreet - Your style in your street',
  description: 'StyleStreet - ECommerce de exemplo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <menu className="flex justify-between">
          <Image
            alt="StyleStreet - Logo"
            src="/images/logo.png"
            width={70}
            height={70}
          />
          <div className="flex">
            <div className="group/one flex justify-center hover:border-b-4 border-slate-700">
              <a href="#" className="p-5">
                LANÇAMENTO
              </a>
              <div className="fixed left-0 top-16 mt-2 w-screen hidden group-hover/one:block bg-slate-400 p-4"></div>
            </div>
            <div className="group/one flex justify-center hover:border-b-4 border-slate-700">
              <a href="#" className="p-5">
                CALÇADOS
              </a>
              <div className="fixed left-0 top-16 mt-2 w-screen hidden group-hover/one:block bg-slate-400 p-4"></div>
            </div>
            <div className="group/one flex justify-center hover:border-b-4 border-slate-700">
              <a href="#" className="p-5">
                MASCULINO
              </a>
              <div className="fixed left-0 top-16 mt-2 w-screen hidden group-hover/one:block bg-slate-400 p-4"></div>
            </div>
            <div className="group/one flex justify-center hover:border-b-4 border-slate-700">
              <a href="#" className="p-5">
                FEMININO
              </a>
              <div className="fixed left-0 top-16 mt-2 w-screen hidden group-hover/one:block bg-slate-400 p-4"></div>
            </div>
            <div className="group/one flex justify-center hover:border-b-4 border-slate-700">
              <a href="#" className="p-5">
                INFANTIL
              </a>
              <div className="fixed left-0 top-16 mt-2 w-screen hidden group-hover/one:block bg-slate-400 p-4"></div>
            </div>
            <div className="group/one flex justify-center hover:border-b-4 border-slate-700">
              <a href="#" className="p-5">
                COMBO
              </a>
              <div className="fixed left-0 top-16 mt-2 w-screen hidden group-hover/one:block bg-slate-400 p-4"></div>
            </div>
            <div>
              <input
                type="text"
                className="px-2 py-1 border-slate-400 border-1 m-4 rounded-lg bg-zinc-200 w-80 placeholder:ml-3"
                placeholder="Buscar"
              />
            </div>
          </div>
        </menu>
        {children}
      </body>
    </html>
  )
}
