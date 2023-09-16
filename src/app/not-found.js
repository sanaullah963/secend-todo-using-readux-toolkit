import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex justify-center'>
      
      <Link href="/" className='underline text-blue-400 mx-auto'>Return Home</Link>
    </div>
  )
}