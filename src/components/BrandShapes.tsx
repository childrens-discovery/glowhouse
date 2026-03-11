export const RoundedStar = ({ className = "", color = "#F8C264", size = 60 }: { className?: string; color?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill={color}>
    <path d="M50 0C55 35 65 45 100 50C65 55 55 65 50 100C45 65 35 55 0 50C35 45 45 35 50 0Z" />
  </svg>
);

export const Arc = ({ className = "", color = "#FFB8B0", size = 60 }: { className?: string; color?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill={color}>
    <path d="M0 100C0 44.77 44.77 0 100 0V30C61.34 30 30 61.34 30 100H0Z" />
  </svg>
);

export const PlusCross = ({ className = "", color = "#52CCAB", size = 60 }: { className?: string; color?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill={color}>
    <rect x="35" y="5" width="30" height="90" rx="12" />
    <rect x="5" y="35" width="90" height="30" rx="12" />
  </svg>
);

export const RoundedTriangle = ({ className = "", color = "#FF734F", size = 60 }: { className?: string; color?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill={color}>
    <path d="M50 8C53 8 56 10 57.5 13L93 78C96 83 92 90 86 90H14C8 90 4 83 7 78L42.5 13C44 10 47 8 50 8Z" />
  </svg>
);

export const Circle = ({ className = "", color = "#F8C264", size = 60 }: { className?: string; color?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill={color}>
    <circle cx="50" cy="50" r="45" />
  </svg>
);
