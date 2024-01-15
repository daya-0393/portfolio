import { Inter, Roboto_Mono, Noto_Sans_Mono } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

const noto_sans_mono = Noto_Sans_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export {inter, roboto_mono, noto_sans_mono}