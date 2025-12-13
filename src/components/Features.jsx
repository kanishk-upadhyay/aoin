import { memo } from "react";
import {
  Radio,
  Store,
  Zap,
  TrendingUp,
  Shield,
  Package,
  Heart,
  Headphones,
} from "lucide-react";
import { FeatureCard, BenefitChip, SectionHeader } from "./ui";

const SHOPPER_FEATURES = [
  {
    icon: Radio,
    title: "AOIN Live",
    description: "Real-time shopping and interaction with sellers",
    variant: "primary",
  },
  {
    icon: Store,
    title: "Themed Shops",
    description: "Curated shopping experiences tailored to your interests",
    variant: "secondary",
  },
  {
    icon: Zap,
    title: "Innovation Window",
    description: "Limited-time daily deals on trending products",
    variant: "tertiary",
  },
  {
    icon: TrendingUp,
    title: "Smart Discovery",
    description: "Featured, promo, and trending products just for you",
    variant: "surface",
  },
];

const BENEFITS = [
  { icon: Shield, text: "Secure Payments & Easy Returns" },
  { icon: Package, text: "Fast Delivery & Order Tracking" },
  { icon: Heart, text: "Wishlist & Cart Support" },
  { icon: Headphones, text: "24/7 Customer Service" },
];

const Features = () => {
  return (
    <section className="container-custom py-16 md:py-24">
      {/* Section header */}
      <SectionHeader
        eyebrow="For Shoppers"
        title="Shop smarter with live product demonstrations"
        description="Experience themed shops and exclusive daily deals that bring shopping to life."
      />

      {/* Features grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {SHOPPER_FEATURES.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            variant={feature.variant}
          />
        ))}
      </div>

      {/* Benefits section */}
      <div className="bg-surface-100 rounded-m3-lg p-8 md:p-12">
        <h3 className="text-3xl md:text-4xl font-normal mb-8 text-center">
          Why Shop on AOIN
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BENEFITS.map((benefit) => (
            <BenefitChip
              key={benefit.text}
              icon={benefit.icon}
              text={benefit.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Features);
