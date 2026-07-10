import Link from 'next/link';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary';
type Size = 'md' | 'lg';

const baseClasses =
  'inline-flex items-center justify-center font-medium rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand hover:bg-brand-deep text-white shadow-cta focus-visible:outline-brand-deep',
  secondary:
    'bg-white hover:bg-surface text-ink border border-line focus-visible:outline-brand-deep',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
};

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className,
  external = false,
}: ButtonLinkProps) {
  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
