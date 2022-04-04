interface DarkIconProps {
  className?: string;
}

const DarkIcon = ({ className }: DarkIconProps) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7507 9.5925C15.6327 10.8692 15.1536 12.0858 14.3693 13.1001C13.5851 14.1144 12.5283 14.8843 11.3224 15.3199C10.1166 15.7555 8.81165 15.8386 7.56028 15.5596C6.30892 15.2805 5.1629 14.6509 4.25633 13.7443C3.34975 12.8378 2.72011 11.6917 2.44109 10.4404C2.16207 9.18901 2.2452 7.88406 2.68075 6.67822C3.11631 5.47238 3.88628 4.41552 4.90057 3.63131C5.91485 2.84711 7.13151 2.36798 8.40816 2.25C7.66072 3.2612 7.30105 4.50709 7.39456 5.76106C7.48807 7.01503 8.02856 8.19379 8.91771 9.08295C9.80687 9.97211 10.9856 10.5126 12.2396 10.6061C13.4936 10.6996 14.7395 10.3399 15.7507 9.5925V9.5925Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DarkIcon;
