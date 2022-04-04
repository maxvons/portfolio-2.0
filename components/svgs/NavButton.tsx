interface NavButtonProps {
  className?: string;
}

const NavButton = ({ className }: NavButtonProps) => {
  return (
    <svg
      className={className}
      width="48"
      height="14"
      viewBox="0 0 48 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="47" height="4" rx="2" />
      <rect y="10" width="47" height="4" rx="2" />
    </svg>
  );
};

export default NavButton;
