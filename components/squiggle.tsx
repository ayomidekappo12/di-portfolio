interface SquiggleProps {
  className?: string;
}

export function Squiggle({ className = "" }: SquiggleProps) {
  return (
    <svg
      viewBox="0 0 80 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M2 20 Q12 4, 22 20 T42 20 T62 20 T78 20" />
    </svg>
  );
}