/* Next.js. */
import Image, { StaticImageData } from "next/image";

/* Types. */
import { ImageSize } from "../types/types";

/* Styles. */
import styles from "../styles/CustomImage.module.scss";

interface CustomImageProps {
  src: StaticImageData | string;
  alt: string;
  objectPosition?: string;
  size: ImageSize;
  round?: boolean;
  noShadow?: boolean;
  className?: string;
}

const CustomImage = ({
  src,
  alt,
  objectPosition,
  size,
  round,
  noShadow,
  className,
}: CustomImageProps) => {
  const getContainerStyles = () => {
    if (round) {
      switch (size) {
        case ImageSize.MEDIUM:
          return `${styles.imageContainer}  ${styles.medium} ${styles.round} ${
            noShadow && styles.noShadow
          } ${className}`;
        case ImageSize.LARGE:
          return `${styles.imageContainer} ${styles.large} ${styles.round} ${
            noShadow && styles.noShadow
          } ${className}`;
        case ImageSize.LARGEHORIZONTAL:
          return `${styles.imageContainer} ${styles.largeHorizontal} ${
            styles.round
          } ${noShadow && styles.noShadow} ${className}`;
        case ImageSize.AVATAR:
          return `${styles.imageContainer} ${styles.avatar} ${styles.round} ${
            noShadow && styles.noShadow
          } ${className}`;
        default:
          return `${styles.imageContainer} ${styles.large} ${styles.round} ${
            noShadow && styles.noShadow
          } ${className}`;
      }
    } else {
      switch (size) {
        case ImageSize.MEDIUM:
          return `${styles.imageContainer} ${styles.medium} ${
            noShadow && styles.noShadow
          } ${className}`;
        case ImageSize.LARGE:
          return `${styles.imageContainer} ${styles.large} ${
            noShadow && styles.noShadow
          } ${className}`;
        case ImageSize.LARGEHORIZONTAL:
          return `${styles.imageContainer} ${styles.largeHorizontal} ${
            noShadow && styles.noShadow
          } ${className}`;
        case ImageSize.AVATAR:
          return `${styles.imageContainer} ${styles.avatar} ${
            noShadow && styles.noShadow
          } ${className}`;
        default:
          return `${styles.imageContainer} ${styles.large} ${
            noShadow && styles.noShadow
          } ${className}`;
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
        /* Consider adding the `sizes` prop here. */
      />
    </div>
  );
};

export default CustomImage;
