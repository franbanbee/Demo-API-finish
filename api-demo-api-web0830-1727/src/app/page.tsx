import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col item-center justify-between p-24'>
      <Link href='/posts'>Go Posts</Link>
    </main>
  )
}





