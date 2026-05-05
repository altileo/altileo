import { Container } from '@/components/ui/Container';
import { pcm } from '@/lib/content';

export function Pcm() {
  return (
    <section
      className="py-24 bg-white border-y border-line"
      aria-label="Partenariat PCM"
    >
      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-highlight/30 rounded-full px-3 py-1 text-xs font-medium text-ink mb-5">
            <span aria-hidden="true">*</span> {pcm.pill}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            {pcm.title}
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed">{pcm.body}</p>
          <ul className="mt-8 space-y-3">
            {pcm.bullets.map((b) => (
              <li key={b.strong} className="flex items-start gap-3">
                <span
                  className="text-success font-bold mt-0.5"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="text-muted">
                  <strong className="text-ink">{b.strong}</strong> — {b.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid-dots bg-bg rounded-3xl border border-line h-96 flex items-center justify-center">
          <div className="text-center text-muted">
            <div
              className="text-7xl font-bold text-highlight mb-3"
              aria-hidden="true"
            >
              *
            </div>
            <div className="text-xs uppercase tracking-wider">
              Photo PCM à insérer
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
