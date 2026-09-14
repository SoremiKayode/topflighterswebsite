import {Blend,BookOpenCheck,Bot,BrainCircuit,Globe2,HeartHandshake,Languages,Laptop,Plane,UsersRound} from 'lucide-react';

const features=[
  ['Hybrid learning',Blend],['AI-powered school',BrainCircuit],['Life skills for life',BookOpenCheck],['International languages',Languages],['Global teachers',Globe2],
  ['Small classes, big impact',UsersRound],['Laptops from Grade 1',Laptop],['Coding & robotics',Bot],['Global discovery experiences',Plane],['Character & values driven',HeartHandshake],
] as const;

export function FutureReadyFeatures(){return <section aria-label="The Topflighters advantage" className="feature-ribbon bg-white py-8 sm:py-10"><div className="container-wide">
  <p className="mb-6 text-center text-[.68rem] font-extrabold uppercase tracking-[.24em] text-green">The Topflighters advantage</p>
  <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-4">
    {features.map(([label,Icon])=><div key={label} className="feature-ribbon-item group flex min-h-28 flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white px-3 py-4 text-center shadow-[0_10px_28px_-16px_rgba(7,31,75,.55)]"><span className="relative mb-3 flex h-11 w-11 items-center justify-center text-navy transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110"><span className="absolute inset-0 rotate-6 rounded-xl bg-green/10 transition-colors duration-300 group-hover:bg-white/35"/><Icon aria-hidden="true" className="relative" size={27} strokeWidth={1.9}/></span><strong className="max-w-[8.5rem] text-[.66rem] font-extrabold uppercase leading-[1.25] tracking-[-.01em] text-navy">{label}</strong></div>)}
  </div>
</div></section>}
