/* Next.js. */
import Image, { StaticImageData } from "next/image";

/* Types. */
import { ImageSize } from "../types/types";

/* Styles. */
import styles from "../styles/CustomImage.module.scss";

interface CustomImageProps {
  src: StaticImageData | string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
  size: ImageSize;
  className?: string;
  round?: boolean;
}

const CustomImage = ({
  src,
  alt,
  width,
  height,
  objectPosition,
  size,
  className,
  round,
}: CustomImageProps) => {
  const getContainerStyles = () => {
    if (round) {
      switch (size) {
        case ImageSize.MEDIUM:
          return `${styles.imageContainer}  ${styles.medium} ${styles.round} ${className}`;
        case ImageSize.LARGE:
          return `${styles.imageContainer} ${styles.large} ${styles.round} ${className}`;
        case ImageSize.AVATAR:
          return `${styles.imageContainer} ${styles.avatar} ${styles.round} ${className}`;
        default:
          return `${styles.imageContainer} ${styles.large} ${styles.round} ${className}`;
      }
    } else {
      switch (size) {
        case ImageSize.MEDIUM:
          return `${styles.imageContainer} ${styles.medium} ${className}`;
        case ImageSize.LARGE:
          return `${styles.imageContainer} ${styles.large} ${className}`;
        case ImageSize.AVATAR:
          return `${styles.imageContainer} ${styles.avatar} ${className}`;
        default:
          return `${styles.imageContainer} ${styles.large} ${className}`;
      }
    }
  };

  return (
    <div className={getContainerStyles()}>
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        layout="fill"
        objectFit="cover"
        objectPosition={objectPosition}
        width={width}
        height={height}
        sizes="50vw"
      />
    </div>
  );
};

export default CustomImage;
