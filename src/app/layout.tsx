import type { Metadata } from 'next';
import "./global.css"
// import "../../public/FontAwesome/css/all.css";

import {Nunito} from 'next/font/google';

export const metadata: Metadata = {
  title: "Jef Asamoah",
  description: "Jeffrey Asamoah's personal website"
}

const nunito = Nunito({
  weight: '400',
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={nunito.className}>
      <body>{children}</body>
    </html>
  )
}
