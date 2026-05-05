import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { Profiles } from '@/components/sections/Profiles';
import { Stats } from '@/components/sections/Stats';
import { Method } from '@/components/sections/Method';
import { Product } from '@/components/sections/Product';
import { Pcm } from '@/components/sections/Pcm';
import { Comparison } from '@/components/sections/Comparison';
import { BacsDiagnostic } from '@/components/sections/BacsDiagnostic';
import { ContactCta } from '@/components/sections/ContactCta';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Profiles />
        <Stats />
        <Method />
        <Product />
        <Pcm />
        <Comparison />
        <BacsDiagnostic />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
