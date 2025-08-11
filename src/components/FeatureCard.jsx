import { DynamicIcon } from "lucide-react/dynamic";

function FeatureCard({ iconName, title, description }) {
  return (
    <div>
      <DynamicIcon name={iconName} size={48} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export { FeatureCard };
