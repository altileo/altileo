import { Container } from '@/components/ui/Container';
import { comparison } from '@/lib/content';
import { cn } from '@/lib/cn';

function formatCell(value: string, highlighted: boolean): string {
  if (highlighted && value.startsWith('✓')) {
    return 'text-success font-semibold';
  }
  return 'text-muted';
}

export function Comparison() {
  return (
    <section className="py-24" aria-label="Comparaison concurrentielle">
      <Container>
        <div className="max-w-3xl mb-12">
          <div className="text-sm font-semibold text-brand-deep tracking-wide uppercase mb-3">
            {comparison.label}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            {comparison.title}
          </h2>
        </div>

        <div className="overflow-x-auto -mx-6 lg:mx-0">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-line">
                <th className="text-left px-4 py-4 text-sm font-medium text-muted">
                  <span className="sr-only">Critère</span>
                </th>
                {comparison.columns.map((col) => (
                  <th
                    key={col.name}
                    className={cn(
                      'text-left px-4 py-4',
                      col.highlighted && 'bg-brand/5 rounded-t-xl',
                    )}
                  >
                    <div className="font-bold text-ink text-base">
                      {col.name}
                    </div>
                    <div className="text-xs text-muted mt-0.5">
                      {col.subtitle}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              {comparison.rows.map((row, rowIdx) => {
                const isLast = rowIdx === comparison.rows.length - 1;
                return (
                  <tr
                    key={row.criterion}
                    className={cn(!isLast && 'border-b border-line')}
                  >
                    <td className="px-4 py-4 text-muted">{row.criterion}</td>
                    {row.values.map((value, i) => {
                      const col = comparison.columns[i];
                      return (
                        <td
                          key={i}
                          className={cn(
                            'px-4 py-4',
                            col.highlighted && 'bg-brand/5',
                            col.highlighted && isLast && 'rounded-b-xl',
                          )}
                        >
                          <span className={formatCell(value, col.highlighted)}>
                            {value}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
