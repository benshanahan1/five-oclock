import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useCronitor } from '@cronitorio/cronitor-rum-nextjs'

const debug = process.env.NODE_ENV !== "production";

export default function App({ Component, pageProps }: AppProps) {
  // Load the Cronitor tracker once in your app
  useCronitor("7b656641cca7796bef032620b6464196", { debug });
  return <Component {...pageProps} />
}
