import './scss/style.scss'
import { inter } from './fonts'

export const metadata = {
  title: 'Dayana Loaiza Rivera',
  description: 'Dayana Loaiza is a Web Developer, here you can check some of her projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css"/>
        <link rel="stylesheet" href='./scss/style.scss'/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@300;400;500&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/da33aea8dd.js" crossOrigin="anonymous" async/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous" async/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
