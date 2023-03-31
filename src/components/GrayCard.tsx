import clsxm from '@/lib/clsxm';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GrayCard({ children, className }: CardProps) {
  return (
    <div
      className={clsxm(
        'rounded-3xl bg-gradient-to-tr from-gray-900/50 to-slate-700/50 px-12 py-12',
        className
      )}
    >
      {children}
    </div>
  );
}
