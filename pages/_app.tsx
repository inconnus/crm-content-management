import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/globals.sass'
function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, height=device-height ,initial-scale=1,minimum-scale=1 ,maximum-scale=1,user-scalable=no,viewport-fit=cover" />
      <link rel="icon" href="/favicon.ico" />
      <script charSet="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
      <title>Dataslot App</title>
    </Head>
    <Component {...pageProps} />
  </>
}
export default MyApp
