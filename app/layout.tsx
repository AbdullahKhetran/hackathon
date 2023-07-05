import Header from '../components/SmNav'
import './globals.css'
import { Sora } from 'next/font/google'

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
})


export const metadata = {
  title: 'hackathon',
  // title: 'Dine Market',
  description: 'Best Streetwear in the town',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
      {/* <Header /> */}

    </html>
  )
}
