import { Container } from '@/components/ui/Container';
import { method } from '@/lib/content';
import { cn } from '@/lib/cn';

const savingsColorMap: Record<'success' | 'ink', string> = {
  success: 'text-success',
  ink: 'text-ink',
};

export function Method() {
  return (
    <section id="methode" className="py-24 bg-white border-y border-line">
      <Container>
        <div className="max-w-3xl">
          <div className="text-sm font-semibold text-brand-deep tracking-wide uppercase mb-3">
            {method.label}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            {method.title}
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            {method.body}
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {method.layers.map((layer) => (
            <article
              key={layer.number}
              className={cn(
                'rounded-2xl p-6 lg:p-8 transition',
                layer.featured
                  ? 'bg-bg border-2 border-brand/30 shadow-card'
                  : 'bg-bg border border-line hover:shadow-card',
              )}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-5 md:flex-shrink-0 md:w-72">
                  <div
                    className={cn(
                      'num text-4xl font-bold',
                      layer.featured ? 'text-brand-deep' : 'text-brand/40',
                    )}
                  >
                    {layer.number}
                  </div>
                  <div>
                    <div className="font-semibold text-ink text-lg flex items-center gap-2 flex-wrap">
                      {layer.title}
                      {layer.featured && layer.badge && (
                        <span className="bg-highlight/40 text-ink text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded">
                          {layer.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-medium text-muted mt-1">
                      {layer.duration}
                    </div>
                  </div>
                </div>
                <p className="flex-1 text-muted leading-relaxed">{layer.body}</p>
                <div className="md:flex-shrink-0 md:w-48 md:text-right">
                  <div className="text-xs font-medium text-muted uppercase tracking-wide">
                    Économies typiques
                  </div>
                  <div
                    className={cn(
                      'num text-base font-bold mt-1',
                      savingsColorMap[layer.savingsColor],
                    )}
                  >
                    {layer.savings}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 bg-white border border-line rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-6 items-start">
          <span
            className="text-3xl font-bold flex-shrink-0 text-brand -translate-y-1"
            aria-hidden="true"
          >
            *
          </span>
          <p className="text-muted leading-relaxed">
            <strong className="text-ink">
              {method.modularNote.label}&nbsp;:
            </strong>{' '}
            {method.modularNote.body}
          </p>
        </div>
      </Container>
    </section>
  );
}
