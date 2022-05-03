// Next.js.
import Image from "next/image";

// Types.
import { TimelinePoint } from "../types/types";

// Styles.
import styles from "../styles/Timeline.module.scss";

interface TimelineProps {
  timelinePoints: TimelinePoint[];
}

const Timeline = ({ timelinePoints }: TimelineProps) => {
  return (
    <div className={styles.points}>
      {timelinePoints.map((point, index) => (
        <div key={index} className={styles.point}>
          <div className={styles.dateAndLocation}>
            <p className={styles.location}>{point.location}</p>
            <p className={styles.date}>{point.date}</p>
          </div>
          <div className={styles.connectorAndCircle}>
            <span className={styles.circle} />
            <span className={styles.connector} />
          </div>
          <div className={styles.titleAndDescription}>
            <h3 className={styles.title}>{point.title}</h3>
            <div className={styles.descriptionContainer}>
              {point.description?.split("\n").map((paragraph) => (
                <p key={paragraph} className={styles.description}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          {point.image && (
            <div className={styles.imageContainer}>
              <Image
                src={point.image.src}
                alt={point.image.alt}
                width={point.image.width}
                height={point.image.height}
                placeholder="blur"
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
