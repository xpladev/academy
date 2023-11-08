import clsx from "clsx";
import React from "react";

const Picture = ({
  sources,
  alt,
  width,
  height,
  className,
}: {
  sources: [string, string];
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}) => {
  return (
    <picture>
      <source srcSet={sources[0]} type="image/webp" />
      <source srcSet={sources[1]} type="image/svg+xml" />
      <img
        src={sources[1]}
        alt={alt}
        width={width}
        height={height}
        className={clsx("block", className || "")}
      />
    </picture>
  );
};

export default Picture;
