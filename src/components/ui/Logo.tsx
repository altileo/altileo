import Link from 'next/link';
import { cn } from '@/lib/cn';

interface LogoProps {
  theme?: 'light' | 'dark';
  className?: string;
}

export function Logo({ theme = 'light', className }: LogoProps) {
  const wordColor = theme === 'dark' ? 'text-white' : 'text-ink';
  const asteriskColor = theme === 'dark' ? 'text-highlight' : 'text-brand';

  return (
    <Link
      href="/"
      className={cn('flex items-baseline gap-1', className)}
      aria-label="Altileo — accueil"
    >
      <span className={cn('text-2xl font-bold tracking-tight', wordColor)}>
        altileo
      </span>
      <span
        className={cn(
          'text-xl font-bold inline-block -translate-y-1',
          asteriskColor,
        )}
        aria-hidden="true"
      >
        *
      </span>
    </Link>
  );
}
