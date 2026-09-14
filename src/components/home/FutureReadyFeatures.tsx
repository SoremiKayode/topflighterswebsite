import {Blend,BookOpenCheck,Bot,BrainCircuit,Globe2,HeartHandshake,Languages,Laptop,Plane,UsersRound} from 'lucide-react';

const features=[
  ['Hybrid learning',Blend],['AI-powered school',BrainCircuit],['Life skills for life',BookOpenCheck],['International languages',Languages],['Global teachers',Globe2],
  ['Small classes, big impact',UsersRound],['Laptops from Grade 1',Laptop],['Coding & robotics',Bot],['Global discovery experiences',Plane],['Character & values driven',HeartHandshake],
] as const;

export function FutureReadyFeatures(){return <section aria-label="The Topflighters advantage" className="feature-ribbon bg-white py-5 sm:py-7"><div className="container-wide">
  <p className="mb-5 text-center text-[.68rem] font-extrabold uppercase tracking-[.24em] text-green">A complete, future-ready education</p>
  <div className="grid grid-cols-2 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_50px_-32px_rgba(7,31,75,.45)] sm:grid-cols-5">
    {features.map(([label,Icon],index)=><div key={label} className={`feature-ribbon-item flex min-h-28 flex-col items-center justify-center px-3 py-4 text-center ${index%2?'bg-slate-50/55':'bg-white'}`}><span className="relative mb-2 flex h-10 w-10 items-center justify-center text-navy"><span className="absolute inset-0 rotate-6 rounded-xl bg-green/10"/><Icon aria-hidden="true" className="relative" size={27} strokeWidth={1.9}/></span><strong className="max-w-[8.5rem] text-[.66rem] font-extrabold uppercase leading-[1.25] tracking-[-.01em] text-navy">{label}</strong></div>)}
  </div>
</div></section>}
