import Image from 'next/image'
import Link from "next/link";


export default function Home() {
  return (
    <div className="space-y-6 w-full">
      <div className="flex w-full flex-row items-center justify-center"> 
        <div className="mb-6">
          <Image src="/portrait.JPEG" alt="portrait" width={500} height={300} />
        </div>
        <div className="w-full mb-6 ml-6 font-serif">
          <p>I'm currently a Research Engineer at <Link href="https://pika.art" className="text-cyan-600">Pika</Link>, leading data curation and post-training efforts.</p>
          <br />
          <p>I'm interested in AI systems, products, and research. Particularly, at the intersection of NLP and vision - so multimodal LLMs, OCR systems, etc.</p>

          <br />
          <p className="font-serif">vashisht.madhavan@gmail.com</p>
          <Link href="https://twitter.com/vashmadhavan" className="text-cyan-600 font-serif">Twitter</Link>
          <br />
          <Link href="https://github.com/VashishtMadhavan" className="text-cyan-600 font-serif">Github</Link>
          <br />
          <Link href="https://www.linkedin.com/in/vashishtmadhavan/" className="text-cyan-600 font-serif">LinkedIn</Link>
        </div>
      </div>
      <div className="flex w-full flex-col items-left justify-left font-serif"> 
        <h2 className="text-2xl">Past</h2>
        <ul className="list-none pt-2">
          <li className="flex items-center mb-2">
            <Image className="mr-6" src="/humanlike.avif" alt="Humanlike" width={42} height={42} />
            <p>I was the co-founder/CTO of <Link href="https://humanlike.app/" className="text-cyan-600">Humanlike</Link>, which built AI voice bots to automate phone calls for businesses. We went through the <Link href="https://www.ycombinator.com/" className="text-cyan-600">YCombinator</Link> S23 batch.</p>
          </li>
          <li className="flex items-center mb-2">
            <Image className="mr-6" src="/snorkel-logo.webp" alt="Snorkel AI" width={42} height={42} />
            <p>I was a Staff ML Engineer at <Link href="http://snorkelai.com/" className="text-cyan-600">Snorkel AI</Link>, where I led development on the NLP platform for structured documents (i.e. PDFs, Images, Excel, etc.), now used by some of the largest  <Link href="https://snorkel.ai/how-schlumberger-uses-snorkel-flow-to-enhance-proactive-well-management/" className="text-cyan-600">Fortune 500s</Link>.</p>
          </li>
          <li className="flex items-center mb-2">
            <Image className="mr-4" src="/uber-logo.webp" alt="Uber" width={50} height={50} />
            <p>Previously, I was an AI Researcher at <Link href="https://www.uber.com/us/en/uberai/" className="text-cyan-600">Uber AI</Link>, working with <Link href="http://jeffclune.com/" className="text-cyan-600">Jeff Clune</Link>. I focused on <Link href="https://www.uber.com/blog/deep-neuroevolution/" className="text-cyan-600">RL research</Link> and applications for business units like <Link href="https://www.uber.com/blog/freight-markov/" className="text-cyan-600">Uber Freight</Link>.</p>
          </li>
          <li className="flex items-center">
            <Image className="mr-4" src="/berkeley-seal.png" alt="Berkeley" width={50} height={50} />
            <p>At Berkeley, I was a grad student at <Link href="https://bair.berkeley.edu/" className="text-cyan-600">BAIR</Link>, working with <Link href="https://people.eecs.berkeley.edu/~trevor/" className="text-cyan-600">Trevor Darrell</Link> on computer vision systems for autonomous driving. Here, I helped put together one of the <Link href="https://bair.berkeley.edu/blog/2018/05/30/bdd/" className="text-cyan-600">largest datasets</Link> of annotated driving videos.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}