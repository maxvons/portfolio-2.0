interface NavButtonCloseProps {
  className?: string;
}

const NavButtonClose = ({ className }: NavButtonCloseProps) => {
  return (
    <svg
      className={className}
      width="38"
      height="37"
      viewBox="0 0 38 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.29688"
        width="47"
        height="4"
        rx="2"
        transform="rotate(45 3.29688 0)"
      />
      <rect
        x="1"
        y="33.2653"
        width="47"
        height="4"
        rx="2"
        transform="rotate(-45 1 33.2653)"
      />
    </svg>
  );
};

export default NavButtonClose;
