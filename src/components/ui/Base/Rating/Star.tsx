import React from "react";

interface StarProps {
  filled: boolean;
  halfFilled: boolean;
  // onMouseMove?: (event: React.MouseEvent) => void;
  // onMouseLeave?: () => void;
  // onClick?: () => void;
}

const Star: React.FC<StarProps> = ({
  filled,
  halfFilled,
  // onMouseMove,
  // onMouseLeave,
  // onClick,
}) => (
  // Kiểm tra nếu sao này đã được đánh giá hoặc đang được hover

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill={
      filled
        ? "currentColor"
        : halfFilled
        ? "url(#halfGradient)"
        : "transparent"
    }
    stroke={
      halfFilled
        ? "url(#strokeGradient)"
        : filled
        ? "transparent"
        : "var(--tw-gray-400)"
    }
    strokeWidth="1"
    className={`cursor-pointer ${filled ? "text-warning" : "transparent"}`}
    // onMouseMove={onMouseMove}
    // onMouseLeave={onMouseLeave}
    // onClick={onClick}
  >
    {halfFilled && (
      <>
        <defs>
          <linearGradient id="halfGradient">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>

          <linearGradient id="strokeGradient" x1="100%" x2="0" y1="0%" y2="0%">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </>
    )}
    <path d="M8.26178 1.13334L9.48845 3.28668C9.53373 3.37044 9.59643 3.44353 9.67233 3.50102C9.74822 3.55852 9.83556 3.59909 9.92845 3.62001L12.2884 4.16001C12.56 4.22892 12.8093 4.36624 13.0127 4.55888C13.2162 4.75152 13.3668 4.99305 13.4504 5.26045C13.5339 5.52784 13.5476 5.81219 13.4901 6.08636C13.4326 6.36054 13.3058 6.61541 13.1218 6.82668L11.5218 8.69334C11.459 8.76746 11.4119 8.85351 11.3833 8.94631C11.3546 9.03911 11.345 9.13675 11.3551 9.23334L11.5951 11.72C11.6296 11.9962 11.5905 12.2767 11.4818 12.5329C11.373 12.7892 11.1985 13.0122 10.9759 13.1793C10.7533 13.3464 10.4905 13.4518 10.214 13.4847C9.93762 13.5176 9.65741 13.4769 9.40178 13.3667L7.18845 12.3667C7.1025 12.328 7.00934 12.3081 6.91511 12.3081C6.82088 12.3081 6.72773 12.328 6.64178 12.3667L4.42845 13.3667C4.17406 13.4706 3.89698 13.5063 3.62455 13.4704C3.35213 13.4345 3.09377 13.3282 2.875 13.1619C2.65623 12.9956 2.4846 12.7752 2.37706 12.5223C2.26952 12.2695 2.22979 11.9929 2.26178 11.72L2.49511 9.23334C2.50519 9.13675 2.49562 9.03911 2.46698 8.94631C2.43833 8.85351 2.39121 8.76746 2.32845 8.69334L0.728447 6.82668C0.544462 6.61541 0.417663 6.36054 0.36014 6.08636C0.302617 5.81219 0.316287 5.52784 0.399848 5.26045C0.483409 4.99305 0.634074 4.75152 0.837478 4.55888C1.04088 4.36624 1.29024 4.22892 1.56178 4.16001L3.92178 3.62001C4.01467 3.59909 4.102 3.55852 4.1779 3.50102C4.2538 3.44353 4.3165 3.37044 4.36178 3.28668L5.59511 1.13334C5.73166 0.901072 5.92652 0.708499 6.16038 0.574699C6.39425 0.440899 6.65901 0.370514 6.92845 0.370514C7.19788 0.370514 7.46265 0.440899 7.69651 0.574699C7.93038 0.708499 8.12523 0.901072 8.26178 1.13334Z" />
  </svg>
);
export default Star;
