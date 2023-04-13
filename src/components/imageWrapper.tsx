import * as React from "react";
import type { CSSProperties } from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface ImageWrapperProps {
  image: IGatsbyImageData | string;
  alt?: string;
  loading?: "eager" | "lazy";
  className?: string;
  imgClassName?: string;
  style?: CSSProperties;
}

const ImageWrapper = ({
  image,
  alt = "",
  loading = "lazy",
  className = "",
  imgClassName = "",
  style = {},
}: ImageWrapperProps) => {
  if (typeof image === "object") {
    return (
      <GatsbyImage {...{ image, alt, loading, className, imgClassName, style }} />
    );
  } else {
    return <img src={image} {...{ alt, loading, className }} />;
  }
};

export default ImageWrapper;
