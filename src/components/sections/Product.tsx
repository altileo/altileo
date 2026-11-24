import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { product } from '@/lib/content';

export function Product() {
  return (
    <section id="produit" className="py-24">
      <Container>
        <div className="max-w-3xl mb-14">
          <div className="text-sm font-semibold text-brand-deep tracking-wide uppercase mb-3">
            {product.label}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            {product.title}
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            {product.body}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-line p-8 lg:p-12 shadow-soft mb-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-ink">
                {product.architecture.title}
              </h3>
              <p className="mt-4 text-muted leading-relaxed">
                {product.architecture.body}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {product.architecture.pillars.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="bg-bg rounded-xl p-4 border border-line"
                  >
                    <div className="text-xs font-semibold text-brand-deep uppercase tracking-wide">
                      {pillar.number}
                    </div>
                    <div className="text-sm font-bold text-ink mt-1">
                      {pillar.title}
                    </div>
                    <div className="text-xs text-muted mt-1">
                      {pillar.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-bg rounded-xl p-6 border border-line">
                <Image
                  src="/screenshots/architecture.png"
                  alt="Schéma d’architecture Altileo : signaux EPEX Spot, RTE et météo vers le Cloud Altileo, liaison 4G dédiée isolée du réseau IT/GTC, coffret industriel IP65 (compteur MID, HP flottante CEE BAT-TH-134, triple sécurité fail-safe) et raccordement non invasif sur votre installation frigorifique"
                  width={1920}
                  height={1452}
                  className="w-full block h-auto"
                  sizes="(max-width: 1024px) 100vw, 720px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-line p-8 shadow-soft">
            <div className="text-xs font-semibold text-brand-deep uppercase tracking-wide mb-2">
              {product.dashboard.eyebrow}
            </div>
            <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-ink">
              {product.dashboard.title}
            </h3>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              {product.dashboard.body}
            </p>
            <div className="mt-6 screen-frame">
              <Image
                src="/screenshots/dashboard.png"
                alt="Tableau de bord Altileo affichant les KPIs énergétiques en temps réel"
                width={2000}
                height={1100}
                className="w-full block h-auto"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-line p-8 shadow-soft">
            <div className="text-xs font-semibold text-brand-deep uppercase tracking-wide mb-2">
              {product.systemHealth.eyebrow}
            </div>
            <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-ink">
              {product.systemHealth.title}
            </h3>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              {product.systemHealth.body}
            </p>
            <div className="mt-6 screen-frame">
              <Image
                src="/screenshots/system-health.png"
                alt="Panneau de santé système Altileo : alimentation, température, monitoring, stockage, régulation, IoT, protection, conversion"
                width={1200}
                height={800}
                className="w-full block h-auto"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 bg-bg border border-line rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-6 items-start">
          <span
            className="text-3xl font-bold flex-shrink-0 text-brand -translate-y-1"
            aria-hidden="true"
          >
            *
          </span>
          <p className="text-muted leading-relaxed">{product.stack}</p>
        </div>
      </Container>
    </section>
  );
}
