import React, { useState, useMemo, useEffect } from "react";
import Star from "./Star";
import clsx from "clsx";

type RatingProps = {
  totalStar: 5 | 6 | 7 | 8 | 9 | 10;
  initialRating?: number;
  precision: 0.5 | 1;
  readonly?: boolean;
  isHalf?: boolean;
  disabled?:boolean
};

const Rating: React.FC<RatingProps> = ({
  totalStar,
  initialRating = 0,
  precision = 1,
  readonly = false,
  isHalf = false,
  disabled = false
}) => {
  const [activeStar, setActiveStar] = useState<number>(initialRating);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  useEffect(() => {
    setActiveStar(initialRating);
  }, [initialRating]);

  const displayRating = useMemo(() => {
    const rating = hoverRating ?? activeStar;
    return precision === 1.0 ? Math.round(rating) : Math.round(rating * 2) / 2;
  }, [hoverRating, activeStar, precision]);

  const handleMouseMove = (event: React.MouseEvent, index: number) => {
    if (!readonly) {
      const { clientX, currentTarget } = event;
      const { left, width } = currentTarget.getBoundingClientRect();
      const hoverValue =
        precision === 0.5
          ? index + (clientX - left < width / 2 ? 0.5 : 1)
          : index + 1;
      setHoverRating(hoverValue);
    }
  };

  const handleActiveStar = () => {
    setActiveStar(displayRating);
  };
  return (
    <div
      className={clsx("rating", {
        "pointer-events-none": readonly,
        "opacity-50 pointer-events-none" : disabled
      })}
    >
      {[...Array(totalStar)].map((_, i) => {
        const halfFilled = isHalf && displayRating - i === 0.5;
        return (
          <div
            key={i}
            className='rating__item'
            onMouseMove={(event) => handleMouseMove(event, i)}
            onMouseLeave={() => setHoverRating(null)}
            onClick={handleActiveStar}
          >
            <Star
              filled={i + 1 <= displayRating}
              halfFilled={halfFilled}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
