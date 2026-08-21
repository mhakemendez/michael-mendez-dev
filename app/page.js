import Image from "next/image";
import Waves from '@/components/Waves';
import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import Developer from '@/components/sections/Developer';
import Projects from '@/components/sections/Projects';
import Stack from '@/components/sections/Stack';
import Journey from '@/components/sections/Journey';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import TargetCursor from '@/components/ui/TargetCursor';

export default function Home() {
  return (

    <main className="">
      {/* <TargetCursor
        spinDuration={2}
        hoverDuration={0.2}
        cursorColor="#10B981"
        cursorColorOnTarget="#10B981"
      /> */}
      <div id="nav-hero-section" className="relative pt-5 pb-15">
        <Navigation />
        <Hero />
        <Waves
          lineColor="#073741"
          backgroundColor="rgba(0, 0, 0, 1)"
          waveSpeedX={0.05}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>
      <Developer />
      <Projects />
      <Stack />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
