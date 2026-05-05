import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Product } from '@/components/sections/Product';
import { Method } from '@/components/sections/Method';
import { Profiles } from '@/components/sections/Profiles';
import { Comparison } from '@/components/sections/Comparison';
import { BacsDiagnostic } from '@/components/sections/BacsDiagnostic';
import { Pcm } from '@/components/sections/Pcm';
import { ContactCta } from '@/components/sections/ContactCta';
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
        <Profiles />
        <Comparison />
        <BacsDiagnostic />
        <Pcm />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
