import './globals.css'

export const metadata = {
  title: 'Manisha Raparthi · Portfolio',
  description: 'Software Developer — React, Spring Boot, AWS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
