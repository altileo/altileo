import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { pcm } from '@/lib/content';

export function Pcm() {
  return (
    <section className="section-carbon py-24" aria-label="Partenariat PCM">
      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded-full px-3 py-1 text-xs font-medium text-brand mb-5">
            <span aria-hidden="true">*</span> {pcm.pill}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {pcm.title}
          </h2>
          <p className="mt-5 text-lg text-muted-dark leading-relaxed">{pcm.body}</p>
          <ul className="mt-8 space-y-3">
            {pcm.bullets.map((b) => (
              <li key={b.strong} className="flex items-start gap-3">
                <span className="text-success font-bold mt-0.5" aria-hidden="true">✓</span>
                <span className="text-muted-dark">
                  <strong className="text-white">{b.strong}</strong> — {b.body}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 bg-[#181818] border border-[#333] rounded-xl p-5">
            <div className="text-xs font-medium text-brand uppercase tracking-wide mb-2">
              {pcm.synergy.label}
            </div>
            <p className="text-sm text-muted-dark leading-relaxed">
              {pcm.synergy.body}
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="screen-frame border-white/10">
            <Image
              src="/screenshots/mcp05.png"
              alt="Panneaux de stockage thermique PCM (matériaux à changement de phase) installés en chambre froide — déploiement Altileo"
              width={1600}
              height={1200}
              className="w-full block h-auto"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
          <p className="mt-3 text-xs text-muted-dark text-center">
            Panneaux PCM installés en chambre froide — déploiement réel.
          </p>
        </div>
      </Container>
    </section>
  );
}
