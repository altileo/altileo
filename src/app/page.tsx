import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Product } from '@/components/sections/Product';
import { Method } from '@/components/sections/Method';
import { CaseStudy } from '@/components/sections/CaseStudy';
import { Profiles } from '@/components/sections/Profiles';
import { Comparison } from '@/components/sections/Comparison';
import { BacsDiagnostic } from '@/components/sections/BacsDiagnostic';
import { Pcm } from '@/components/sections/Pcm';
import { Team } from '@/components/sections/Team';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Product />
        <Method />
        <CaseStudy />
        <Profiles />
        <Comparison />
        <BacsDiagnostic />
        <Pcm />
        <Team />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
