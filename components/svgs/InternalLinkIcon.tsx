interface InternalLinkIconProps {
  className?: string;
}

const InternalLinkIcon = ({ className }: InternalLinkIconProps) => {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.25 15H23.75" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15 6.25L23.75 15L15 23.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InternalLinkIcon;
