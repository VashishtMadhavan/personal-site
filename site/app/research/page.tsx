import Image from 'next/image'
import Link from "next/link";
import { PublicationLink } from "@/components/publication"


export default function Home() {
  return (
    <div className="space-y-6 w-full font-serif">
      <div className="flex w-full flex-row items-left justify-left"> 
        <p>
        Most of my <Link href="https://scholar.google.com/citations?user=WjF1dugAAAAJ&hl=en&oi=ao" className="text-cyan-600">research</Link> has been in RL or computer vision. At Uber AI, I focused on finding sample-efficient exploration methods for RL and at Berkeley, I worked on computer vision systems for autonomous driving.
        There, my work revolved around transfer learning, specifically from synthetic environments, and data labeling for large-scale datasets.
        </p>
      </div>
      <div className="flex w-full flex-col items-left justify-left font-serif"> 
        <PublicationLink 
            href="https://openaccess.thecvf.com/content/CVPR2022/papers/Alwani_DECORE_Deep_Compression_With_Reinforcement_Learning_CVPR_2022_paper.pdf" 
            title="DECORE: Deep Compression with Reinforcement Learning" 
            conference="CVPR '22"
        />
        <PublicationLink 
            href="https://arxiv.org/pdf/2003.01825.pdf%5D"
            title="Scaling Map-Elites to Deep Neuroevolution"
            conference="GECCO '20"
        />
        <PublicationLink 
            href="https://arxiv.org/pdf/1812.07069"
            title="An Atari Model Zoo for Analyzing, Visualizing, and Comparing Deep Reinforcement Learning Agents"
            conference=""
            blog="https://www.uber.com/blog/atari-zoo-deep-reinforcement-learning/"
            code="https://github.com/uber-research/atari-model-zoo"
        />
        <PublicationLink 
            href="https://openaccess.thecvf.com/content_CVPR_2020/papers/Yu_BDD100K_A_Diverse_Driving_Dataset_for_Heterogeneous_Multitask_Learning_CVPR_2020_paper.pdf"
            title="Bdd100k: A Diverse Driving Dataset for Heterogeneous Multitask Learning"
            conference="CVPR '20"
            blog="http://bair.berkeley.edu/blog/2018/05/30/bdd/"
        />
        <PublicationLink 
            href="https://proceedings.neurips.cc/paper/2018/file/b1301141feffabac455e1f90a7de2054-Paper.pdf"
            title="Improving Exploration in Evolution Strategies for Deep RL via a Population of Novelty-Seeking Agents"
            conference="NeurIPS '18"
            blog="https://www.uber.com/blog/deep-neuroevolution/"
            code="https://github.com/uber-research/deep-neuroevolution"
        />
        <PublicationLink 
            href="https://arxiv.org/pdf/1712.06567"
            title="Deep Neuroevolution: Genetic Algorithms are a Competitive Alternative for Training Deep Neural Networks for RL"
            conference=""
            blog="https://www.uber.com/blog/deep-neuroevolution/"
            code="https://github.com/uber-research/deep-neuroevolution"
        />
        <PublicationLink
            href="https://repository.oceanbestpractices.org/bitstream/handle/11329/1250/0002.pdf?sequence=1"
            title="Best Practices for Fine-Tuning Visual Classifiers to New Domains"
            conference="ECCV '16"
        />
      </div>
    </div>
  )
}