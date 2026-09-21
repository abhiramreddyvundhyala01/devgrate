import { type ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'default' | 'soft';
  as?: 'div' | 'section' | 'p' | 'span' | 'li' | 'h2' | 'h3';
};

export function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'default',
  as: Tag = 'div',
}: RevealProps) {
  const { ref, visible } = useScrollReveal();
  const baseClass = variant === 'soft' ? 'reveal-soft' : 'reveal';

  return (
    <Tag
      ref={ref as never}
      className={`${baseClass} ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

type WordRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
};

export function WordReveal({
  text,
  className = '',
  delay = 0,
  wordDelay = 60,
}: WordRevealProps) {
  const { ref, visible } = useScrollReveal({ threshold: 0.3 });
  const words = text.split(' ');

  return (
    <span ref={ref as never} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className={`word-reveal ${visible ? 'reveal-visible' : ''}`}
          style={{ ['--word-delay' as string]: `${delay + i * wordDelay}ms` }}
        >
          <span className="word-inner">{word}&nbsp;</span>
        </span>
      ))}
    </span>
  );
}
