import { DynamicIcon } from "lucide-react/dynamic";

import styles from "./featureCard.module.css";

function FeatureCard({ iconName, title, description }) {
  return (
    <div className={styles.featureCard}>
      <DynamicIcon name={iconName} size={48} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export { FeatureCard };
