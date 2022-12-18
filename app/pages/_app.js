import '../styles/globals.css'
import './css/integracao1.css' // css importado de forma global

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
