import Image from 'next/image'
import Link from "next/link";


export default function Home() {
  return (
    <div className="space-y-6 w-full font-serif">
      <div className="flex w-full flex-row items-left justify-left"> 
        <p>
        Occasionally, I angel invest. Here are a few exciting companies I've invested in:
        </p>
      </div>
      <div className="flex w-full flex-col items-left justify-left font-serif space-y-2"> 
        <div className="flex items-center gap-2">
          <span>•</span>
          <Link href="https://yarn.so" className="text-blue-600">Yarn</Link>
          <span>- AI-powered video editor for sales/marketing</span>
        </div>
        <div className="flex items-center gap-2">
          <span>•</span>
          <Link href="https://magichour.ai/" className="text-blue-600">Magic Hour</Link>
          <span>- platform for AI video generation</span>
        </div>
        <div className="flex items-center gap-2">
          <span>•</span>
          <Link href="https://www.retailreadyai.com/" className="text-blue-600">RetailReady</Link>
          <span>- AI supply chain compliance platform</span>
        </div>
        <div className="flex items-center gap-2">
          <span>•</span>
          <Link href="https://adagyrobotics.com/" className="text-blue-600">Adagy Robotics</Link>
          <span>- remote intervention for robotic fleets</span>
        </div>
      </div>
    </div>
  )
}