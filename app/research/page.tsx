import { PublicationLink } from "@/components/publication";

const publications = [
  ["https://arxiv.org/abs/2410.03051", "AuroraCap: Efficient, Performant Video Detailed Captioning and a New Benchmark", "ICLR ’25", "https://wenhaochai.com/aurora-web/", "https://github.com/rese1f/aurora"],
  ["https://openaccess.thecvf.com/content/CVPR2022/papers/Alwani_DECORE_Deep_Compression_With_Reinforcement_Learning_CVPR_2022_paper.pdf", "DECORE: Deep Compression with Reinforcement Learning", "CVPR ’22"],
  ["https://openaccess.thecvf.com/content_CVPR_2020/papers/Yu_BDD100k_A_Diverse_Driving_Dataset_for_Heterogeneous_Multitask_Learning_CVPR_2020_paper.pdf", "BDD100k: A Diverse Driving Dataset for Heterogeneous Multitask Learning", "CVPR ’20", "http://bair.berkeley.edu/blog/2018/05/30/bdd/"],
  ["https://arxiv.org/pdf/2003.01825.pdf", "Scaling Map-Elites to Deep Neuroevolution", "GECCO ’20"],
  ["https://arxiv.org/pdf/1812.07069", "An Atari Model Zoo for Analyzing, Visualizing, and Comparing Deep Reinforcement Learning Agents", "IJCAI ’19", "https://www.uber.com/blog/atari-zoo-deep-reinforcement-learning/", "https://github.com/uber-research/atari-model-zoo"],
  ["https://proceedings.neurips.cc/paper/2018/file/b1301141feffabac455e1f90a7de2054-Paper.pdf", "Improving Exploration in Evolution Strategies for Deep RL via a Population of Novelty-Seeking Agents", "NeurIPS ’18", "https://www.uber.com/blog/deep-neuroevolution/", "https://github.com/uber-research/"],
  ["https://arxiv.org/pdf/1712.06567", "Deep Neuroevolution: Genetic Algorithms are a Competitive Alternative for Training Deep Reinforcement Learning Agents", "", "https://www.uber.com/blog/deep-neuroevolution/", "https://github.com/uber-research/deep-neuroevolution"],
  ["https://repository.oceanbestpractices.org/bitstream/handle/11329/1250/0002.pdf?sequence=1", "Best Practices for Fine-Tuning Visual Classifiers to New Domains", "ECCV ’16"],
] as const;

export default function Research() {
  return <div><h1 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Research</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">Selected work in reinforcement learning, computer vision, and multimodal systems.</p><div className="mt-7 space-y-3">{publications.map(([href, title, conference, blog, code]) => <PublicationLink key={title} href={href} title={title} conference={conference} blog={blog} code={code} />)}</div></div>;
}
