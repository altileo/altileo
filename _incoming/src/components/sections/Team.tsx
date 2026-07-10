import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { team } from '@/lib/content';

export function Team() {
  return (
    <section id="equipe" className="py-24">
      <Container>
        <div className="max-w-3xl mb-14">
          <div className="text-sm font-semibold text-brand-deep tracking-wide uppercase mb-3">
            {team.label}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            {team.title}
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed">{team.body}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.members.map((m, i) => (
            <article
              key={`${m.name}-${i}`}
              className="bg-white rounded-2xl border border-line p-6"
            >
              <div className="aspect-square bg-bg rounded-xl mb-4 flex items-center justify-center text-muted text-xs overflow-hidden">
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={m.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  'Photo'
                )}
              </div>
              <div className="font-bold text-ink">{m.name}</div>
              <div className="text-sm text-brand-deep font-medium">
                {m.role}
              </div>
              <p className="text-sm text-muted mt-3 leading-relaxed">{m.bio}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
