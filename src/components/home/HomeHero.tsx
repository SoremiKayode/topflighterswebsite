import {useEffect,useState} from 'react';
import {AnimatePresence,motion} from 'framer-motion';
import {ArrowRight,ChevronLeft,ChevronRight,Plane,Sparkles} from 'lucide-react';
import {Button,Reveal,TextLink} from '../common/UI';

const slides = ['Enrollment in progress','Where great minds take flight'];

export function HomeHero(){
  const [active,setActive]=useState(0);
  const [paused,setPaused]=useState(false);
  useEffect(()=>{
    if(paused)return;
    const timer=window.setInterval(()=>setActive(current=>(current+1)%slides.length),6000);
    return()=>window.clearInterval(timer);
  },[paused]);
  const move=(direction:number)=>setActive(current=>(current+direction+slides.length)%slides.length);

  return <section
    className="hero-carousel relative min-h-[850px] overflow-hidden bg-mist sm:min-h-[780px] lg:min-h-[760px]"
    aria-roledescription="carousel"
    aria-label="Topflighters Academy highlights"
    onMouseEnter={()=>setPaused(true)}
    onMouseLeave={()=>setPaused(false)}
    onFocusCapture={()=>setPaused(true)}
    onBlurCapture={()=>setPaused(false)}
  >
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={active}
        className="absolute inset-0"
        initial={{clipPath:'circle(0% at 16% 88%)'}}
        animate={{clipPath:'circle(160% at 16% 88%)'}}
        exit={{opacity:0}}
        transition={{clipPath:{duration:1.25,ease:[.22,1,.36,1]},opacity:{duration:.35}}}
        role="group"
        aria-roledescription="slide"
        aria-label={`${active+1} of ${slides.length}: ${slides[active]}`}
      >
        {active===0?<EnrollmentSlide/>:<OriginalSlide/>}
      </motion.div>
    </AnimatePresence>
    <div className="container-wide absolute inset-x-0 bottom-6 z-20 flex items-center justify-between sm:bottom-8">
      <div className="flex items-center gap-2" aria-label="Choose a slide">
        {slides.map((label,index)=><button key={label} type="button" onClick={()=>setActive(index)} aria-label={`Show ${label} slide`} aria-current={active===index} className={`hero-bubble ${active===index?'is-active':''}`}><span className="sr-only">{label}</span></button>)}
      </div>
      <div className="flex gap-2">
        <button type="button" onClick={()=>move(-1)} aria-label="Previous slide" className="hero-arrow"><ChevronLeft/></button>
        <button type="button" onClick={()=>move(1)} aria-label="Next slide" className="hero-arrow"><ChevronRight/></button>
      </div>
    </div>
  </section>
}

function EnrollmentSlide(){return <div className="hero-slide enrollment-slide h-full bg-[radial-gradient(circle_at_78%_34%,rgba(19,133,28,.12),transparent_28%),linear-gradient(120deg,#fbfdff_0%,#edf6ff_48%,#dcecff_100%)] pb-24 pt-10 lg:pt-14"><div className="container-wide grid h-full items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
  <div className="enrollment-content relative z-10">
    <span className="eyebrow"><Plane size={16}/> Admissions now open</span>
    <h1 className="hero-title max-w-2xl text-[clamp(3rem,6vw,5.5rem)] font-extrabold uppercase leading-[.88] text-navy">Enrollment<br/><span className="text-green">in progress!</span></h1>
    <p className="mt-5 inline-block -skew-x-6 bg-gold px-4 py-2 font-display text-sm font-extrabold uppercase text-navy"><span className="inline-block skew-x-6">A launchpad for life.</span></p>
    <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">Give your child a confident start with future-ready learning, caring teachers and personalised attention from Creche through Primary.</p>
    <div className="mt-7 flex flex-wrap gap-3"><Button to="/contact#enquiry">Secure Your Child's Future <ArrowRight size={18}/></Button><a href="#programmes" className="inline-flex min-h-12 items-center rounded-full border border-navy/20 bg-white/70 px-6 font-bold text-navy hover:bg-white">View Classes</a></div>
  </div>
  <div className="relative hidden h-[570px] items-center justify-center lg:flex">
    <div className="absolute h-[510px] w-[510px] rounded-full bg-green/10"/><div className="absolute right-0 top-4 h-32 w-32 rounded-full bg-gold/25"/>
    <img src="/assets/hero/enrollment.svg" alt="Illustration of two happy Topflighters Academy pupils" className="relative z-10 max-h-[535px] w-full rounded-[2rem] object-contain drop-shadow-2xl"/>
    <div className="absolute bottom-7 left-1/2 z-20 w-64 -translate-x-1/2 rounded-full border-4 border-gold bg-navy px-8 py-4 text-center text-xs font-extrabold uppercase tracking-wider text-white shadow-xl">Creche — Primary</div>
  </div>
</div></div>}

function OriginalSlide(){return <div className="hero-slide original-slide h-full bg-[radial-gradient(circle_at_85%_24%,rgba(244,204,16,.16),transparent_25%),linear-gradient(135deg,#f7f9fc,#f0f7f2)] pb-24 pt-14 lg:pt-20"><div className="flight-path absolute left-0 top-20 h-24 w-2/3 -rotate-6 opacity-30"/><div className="container-wide relative grid h-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr]"><Reveal><span className="eyebrow"><Plane size={16}/> A future-ready school in Ikorodu</span><h2 className="hero-title text-[clamp(3rem,6vw,5.8rem)] font-extrabold leading-[.98] text-navy">Where great minds <span className="text-green">take flight.</span></h2><p className="mt-6 max-w-xl text-xl font-semibold text-navy">Raising global leaders. Building better futures.</p><p className="mt-4 max-w-xl leading-8 text-slate-600">Topflighters Academy combines strong academic foundations, technology, character development, life skills and global exposure in a nurturing learning community.</p><div className="mt-8 flex flex-wrap gap-3"><Button to="/contact#enquiry">Enquire About Admission <ArrowRight size={18}/></Button><a href="#programmes" className="inline-flex min-h-12 items-center rounded-full border border-navy/20 px-6 font-bold text-navy hover:bg-white">Explore Programmes</a></div><TextLink to="/contact#visit"><span className="mt-6 inline-block">Book a School Visit</span></TextLink></Reveal><Reveal className="relative hidden lg:block"><img className="aspect-[4/5] max-h-[570px] w-full rounded-[2rem] object-cover shadow-premium" src="/assets/hero/hero.svg" alt="Topflighters learners exploring ideas in a modern learning environment"/><div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-5 shadow-premium"><strong className="block text-3xl text-navy">≈ 8:1</strong><span className="text-xs font-semibold text-slate-500">Student–teacher ratio</span></div><div className="absolute -right-3 top-8 rounded-2xl bg-navy p-4 text-white"><Sparkles className="mb-2 text-gold"/><span className="text-sm font-bold">AI-powered<br/>learning</span></div></Reveal></div></div>}
