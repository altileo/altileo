import { Container } from '@/components/ui/Container';
import { caseStudy } from '@/lib/content';
import { cn } from '@/lib/cn';

const colorMap: Record<'navy' | 'success' | 'ink', string> = {
  navy: 'text-white',
  success: 'text-success',
  ink: 'text-brand',
};

export function CaseStudy() {
  const titleLines = caseStudy.title.split('\n');

  return (
    <section id="cas-client" className="section-carbon py-24">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="text-sm font-medium text-brand tracking-wide uppercase mb-3">
              {caseStudy.label}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="mt-5 text-lg text-muted-dark leading-relaxed">
              {caseStudy.body1}
            </p>
            <p className="mt-4 text-muted-dark leading-relaxed">
              {caseStudy.body2}
            </p>
            <a
              href={caseStudy.ctaHref}
              className="inline-flex items-center gap-2 mt-8 text-brand font-medium hover:gap-3 transition-all"
            >
              {caseStudy.cta} &rarr;
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {caseStudy.kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="bg-[#181818] rounded-2xl border border-[#333] p-6"
              >
                <div className="text-xs font-medium text-muted-dark uppercase tracking-wide">
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
                <div className="text-xs text-muted-dark mt-1">{kpi.caption}</div>
              </div>
            ))}

            <div className="col-span-2 bg-[#181818] rounded-2xl border border-[#333] p-6 lg:p-8 mt-2">
              <span
                className="text-3xl font-bold text-brand"
                aria-hidden="true"
              >
                *
              </span>
              <p className="mt-3 text-sm text-muted-dark leading-relaxed">
                {caseStudy.note}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
