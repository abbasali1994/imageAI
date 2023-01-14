import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Create Styled Image"
    description="Generate Styled Image with Text Condition"
  >
    <VerticalFeatureRow
      title="Input"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
