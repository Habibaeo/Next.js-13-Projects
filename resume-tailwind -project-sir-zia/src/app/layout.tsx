import { personalData } from '@/data/personaldata'

import './globals.css'
import Sidebar from '@/component/Sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      
      <body className='flex flex-col sm:flex-row '>
      <Sidebar data={personalData}/>
       <main className='grow-full p-8 sm:p-16 w-full sm:basis-2/3 ml-auto'> {children} </main> 
        </body>
    </html>
  )
}
