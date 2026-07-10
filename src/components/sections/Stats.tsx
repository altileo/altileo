import { Container } from '@/components/ui/Container';
import { stats } from '@/lib/content';

export function Stats() {
  return (
    <section
      className="section-carbon"
      aria-label="Le problème en chiffres"
    >
      <Container className="py-16 grid md:grid-cols-3 gap-10">
        {stats.map((stat) => (
          <div key={stat.value}>
            <div className="num text-5xl font-bold text-brand">{stat.value}</div>
            <p className="mt-3 text-sm text-muted-dark leading-relaxed">
              {stat.body}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
