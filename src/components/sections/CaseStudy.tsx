import { Container } from '@/components/ui/Container';
import { caseStudy } from '@/lib/content';
import { cn } from '@/lib/cn';

const colorMap: Record<'navy' | 'success' | 'ink', string> = {
  navy: 'text-navy',
  success: 'text-success',
  ink: 'text-ink',
};

export function CaseStudy() {
  const titleLines = caseStudy.title.split('\n');

  return (
    <section id="cas-client" className="py-24">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="text-sm font-semibold text-brand-deep tracking-wide uppercase mb-3">
              {caseStudy.label}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-ink">
              {titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              {caseStudy.body1}
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              {caseStudy.body2}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 text-brand-deep font-semibold hover:gap-3 transition-all"
            >
              {caseStudy.cta}
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {caseStudy.kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="bg-white rounded-2xl border border-line p-6"
              >
                <div className="text-xs font-medium text-muted uppercase tracking-wide">
                  {kpi.label}
                </div>
                <div
                  className={cn(
                    'num text-4xl lg:text-5xl font-bold mt-2',
                    colorMap[kpi.color],
                  )}
                >
                  {kpi.value}
                </div>
                <div className="text-xs text-muted mt-1">{kpi.caption}</div>
              </div>
            ))}

            <div className="col-span-2 bg-white rounded-2xl border-2 border-brand/20 p-6 lg:p-8 mt-2">
              <span
                className="text-3xl font-bold text-highlight"
                aria-hidden="true"
              >
                *
              </span>
              <blockquote className="mt-3 text-lg lg:text-xl text-ink leading-relaxed italic">
                {caseStudy.quote}
              </blockquote>
              <div className="mt-4 text-sm not-italic">
                <div className="font-semibold text-ink">
                  {caseStudy.quoteAuthor}
                </div>
                <div className="text-muted">{caseStudy.quoteCompany}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
