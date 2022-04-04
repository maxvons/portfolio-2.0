interface LightIconProps {
  className?: string;
}

const LightIcon = ({ className }: LightIconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 1V3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 21V23" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4.2207 4.21997L5.6407 5.63997"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3594 18.3601L19.7794 19.7801"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M1 12H3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12H23" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4.21875 19.7801L5.63875 18.3601"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3594 5.63997L19.7794 4.21997"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LightIcon;
