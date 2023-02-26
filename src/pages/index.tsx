import Head from 'next/head'
import { Shantell_Sans } from 'next/font/google'
import ClientOnly from '@/components/ClientOnly';
import clsx from 'clsx';
import Cheers from '@/components/Cheers';
import getLocationAndPhrase from '@/utils/locations';
import Link from 'next/link';

const shantellSans = Shantell_Sans({ subsets: ['latin'] })

/** If a custom link is not provided, generate a google search so users can learn more about the location. */
function makeLink(name: string) {
  const search = name.replaceAll(" ", "+").toLowerCase();
  return `https://www.google.com/search?q=${search}`;
}

export default function Home() {
  const location = getLocationAndPhrase();
  const minutes = new Date().getMinutes().toString().padStart(2, "0");

  return (
    <ClientOnly>
      <Head>
        <title>It&apos;s Five O&apos;Clock Somewhere...</title>
        <meta name="description" content="It's Five O'Clock Somewhere..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-96 lg:h-screen m-0">
        <div className="h-full p-0 m-0 flex items-center justify-center">
          <div className={clsx(shantellSans.className, "flex flex-col h-36 lg:h-60 justify-between text-center")} >
            <div className='text-3xl lg:text-5xl text-slate-400'>
              It&apos;s
              {' '}
              <span className="text-slate-100">5:{minutes} PM</span>
              {' '}
              in
            </div>
            <Link
              href={location.link ?? makeLink(location.name)}
              target="_blank"
              className="p-2 font-bold text-transparent text-5xl lg:text-8xl hover:text-slate-300 bg-clip-text bg-gradient-to-b from-slate-50 to-slate-400"
            >
              {location.name}
            </Link>
            <div className='text-3xl lg:text-5xl text-slate-400'>
              <Cheers message={location.phrase} />
            </div>
          </div>
          <Link
            href="#"
            className={clsx(shantellSans.className, "fixed underline hover:text-red-400 top-2 text-lg lg:text-xl text-center text-slate-300 animate-pulse hover:animate-none")}
          >
            It&apos;s Five O&apos;Clock Somewhere...
          </Link>
          <Link href="https://github.com/benshanahan1/five-oclock" target="_blank" className='fixed bottom-1 text-center text-slate-400 hover:text-red-400'>
            Made with ❤️
            {' '}
            {new Date().getFullYear().toString()}
          </Link>
        </div>
      </div>
    </ClientOnly >
  )
}