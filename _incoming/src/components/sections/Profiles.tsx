import { Container } from '@/components/ui/Container';
import { profiles } from '@/lib/content';

export function Profiles() {
  return (
    <section id="pour-qui" className="py-24 bg-white border-y border-line">
      <Container>
        <div className="max-w-3xl mb-14">
          <div className="text-sm font-semibold text-brand-deep tracking-wide uppercase mb-3">
            {profiles.label}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            {profiles.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.cards.map((card) => (
            <article
              key={card.title}
              className="bg-bg rounded-2xl border border-line p-7 hover:shadow-card transition"
            >
              <div
                className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-2xl mb-5"
                aria-hidden="true"
              >
                {card.icon}
              </div>
              <h3 className="font-bold text-ink text-xl">{card.title}</h3>
              <p className="text-sm text-muted mt-3 leading-relaxed">
                {card.body}
              </p>
              <div className="mt-5 pt-5 border-t border-line space-y-2">
                {card.tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 text-xs text-muted"
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-brand"
                      aria-hidden="true"
                    />
                    {tag}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
