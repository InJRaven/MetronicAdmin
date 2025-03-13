import clsx from "clsx";

interface ProgressBarPropsType {
  progress?: number | undefined;
  max: number;
  size: "Small" | "Medium";
  colors:
    | "Primary"
    | "Secondary"
    | "Success"
    | "Warning"
    | "Danger"
    | "Info"
    | "Dark";
  id?: string;
  ProgressBarsClassName?: string;
  ProgressTrackClassName?: string;
}
const ProgressBar: React.FC<ProgressBarPropsType> = ({
  progress = 0,
  max = 100,
  size = "Small",
  colors = "Primary",
  id,
  label,
  ProgressBarsClassName,
  ProgressTrackClassName,
}) => {
  const progressSize = {
    Small: "h-[0.4rem]",
    Medium: "h-[0.6rem]",
  };

  const progressColors = {
    Primary: {
      bar: "bg-primary-light",
      track: "bg-primary",
    },
    Secondary: {
      bar: "bg-secondary-light",
      track: "bg-secondary",
    },
    Success: {
      bar: "bg-success-light",
      track: "bg-success",
    },
    Warning: {
      bar: "bg-warning-light",
      track: "bg-warning",
    },
    Danger: {
      bar: "bg-danger-light",
      track: "bg-danger",
    },
    Info: {
      bar: "bg-info-light",
      track: "bg-info",
    },
    Dark: {
      bar: "bg-dark-light",
      track: "bg-dark dark:bg-dark-active",
    },
  };
  const processBarClass = clsx(
    "progress-bar",
    progressSize[size],
    progress !== 0 ? progressColors[colors].bar : 'bg-gray-300',
    ProgressBarsClassName
  );
  const processTrackClass = clsx(
    "progress-track",
    progressColors[colors].track,
    ProgressTrackClassName
  );
  return (
    <div className={processBarClass}>
      <div className={processTrackClass} style={{width: `${Math.min(progress, max)}%`}}></div>
    </div>
  );
};

export default ProgressBar;
