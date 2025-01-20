import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'BIZ-MUN',
  description: ' BIZ-MUN is a transformative journey  namely Collaborative Business Conference 2024, meticulously crafted to elevate strategicdiscussions and foster effective cooperationwithin the business landscape',
}

import { Poppins } from "@next/font/google";
import { classNames } from '@/components/utils/helper';
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="viewport" content="width=device-width" initial-scale="1" interactive-widget="resizes-content" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <link rel='icon' href='/assets/logo.png' />
      </head>
      <body className={classNames("w-screen h-screen", poppins.className)}>
        <Providers>
          <div className="flex flex-col-reverse md:flex-row md:h-screen relative md:overflow-x-hidden">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
