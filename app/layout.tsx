import { FC, PropsWithChildren } from 'react'
import { roboto } from './ui/fonts'
import "./ui/globals.css"

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="es">
      <body className={`${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout