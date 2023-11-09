interface HighlightProps {
  color: "primary" | "accent";
  tilt: "left" | "right";
  children: React.ReactNode;
  height: number;
  largeHeight: number;
}

const Highlight: React.FC<HighlightProps> = ({
  color,
  children,
  tilt,
  height,
  largeHeight,
}) => {
  return (
    <span
      className={`relative after:-left-3 after:top-0 after:-z-10 after:shrink-0 after:content-[''] ${
        tilt === "left" ? "after:rotate-1" : "after:-rotate-1"
      } text-white after:absolute after:-left-2 after:h-${height} after:w-[110%] after:rounded-[66px] after:bg-${color} after:lg:h-${largeHeight}`}
    >
      {children}
    </span>
  );
};

export default Highlight;
