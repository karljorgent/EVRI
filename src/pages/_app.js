import Navbar from '@/components/navbar.js'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

function App({ Component, pageProps }) {
  return (
    <>
      <main className={inter.className}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App