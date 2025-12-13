import { memo } from "react";

/* Button component */
export const Button = ({
  children,
  variant = "filled",
  className = "",
  icon: Icon,
  iconPosition = "right",
  ...props
}) => {
  const variants = {
    filled: "btn-filled",
    outlined: "btn-outlined",
    tonal: "btn-tonal",
  };

  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {Icon && iconPosition === "left" && <Icon size={20} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={20} />}
    </button>
  );
};

/* Chip component */
export const Chip = memo(({ label, isActive, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`chip ${isActive ? "chip-selected" : "chip-unselected"} ${className}`}
  >
    {label}
  </button>
));

/* Icon button component */
export const IconButton = memo(
  ({
    icon: Icon,
    isFilled = false,
    badge = null,
    onClick,
    className = "",
    "aria-label": ariaLabel,
  }) => (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`icon-btn ${isFilled ? "icon-btn-filled" : "icon-btn-standard"} relative ${className}`}
    >
      <Icon size={24} strokeWidth={isFilled ? 2.5 : 2} />
      {badge && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 text-white text-xs font-bold flex items-center justify-center rounded-full">
          {badge}
        </span>
      )}
    </button>
  ),
);

/* Card component */
export const M3Card = ({
  title,
  subtitle,
  icon: Icon,
  variant = "primary",
  className = "",
  onClick,
  children,
}) => {
  const variants = {
    primary: "bg-primary-200 text-primary-900",
    secondary: "bg-secondary-100 text-secondary-900",
    tertiary: "bg-tertiary-100 text-tertiary-900",
    surface: "bg-surface-200 text-surface-900",
  };

  return (
    <div
      className={`m3-card ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children || (
        <>
          <div className="flex justify-between items-start">
            {Icon && (
              <div className="p-4 bg-white/30 rounded-2xl w-fit backdrop-blur-sm">
                <Icon size={32} strokeWidth={2} />
              </div>
            )}
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-medium mb-2">{title}</h3>
            {subtitle && (
              <p className="opacity-80 leading-relaxed">{subtitle}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

/* Feature card component */
export const FeatureCard = memo(
  ({ icon: Icon, title, description, variant = "primary", className = "" }) => {
    const variants = {
      primary: "bg-primary-200 text-primary-900",
      secondary: "bg-secondary-100 text-secondary-900",
      tertiary: "bg-tertiary-100 text-tertiary-900",
      surface: "bg-surface-200 text-surface-900",
    };

    return (
      <div
        className={`m3-card ${variants[variant]} min-h-[200px] flex flex-col ${className}`}
      >
        <div className="p-4 bg-white/30 rounded-2xl w-fit backdrop-blur-sm">
          <Icon size={32} strokeWidth={1.8} />
        </div>
        <div className="mt-6 flex-1">
          <h3 className="text-2xl font-medium mb-2">{title}</h3>
          <p className="opacity-80 leading-relaxed">{description}</p>
        </div>
      </div>
    );
  },
);

/* Benefit chip component */
export const BenefitChip = memo(({ icon: Icon, text, className = "" }) => (
  <div
    className={`flex items-center gap-3 p-4 bg-surface-100 rounded-2xl hover:bg-surface-200 transition-colors ${className}`}
  >
    <div className="p-3 bg-primary-200 rounded-xl text-primary-900">
      <Icon size={24} strokeWidth={2} />
    </div>
    <span className="font-bold text-surface-900">{text}</span>
  </div>
));

/* Section header component */
export const SectionHeader = memo(
  ({ eyebrow, title, description, className = "" }) => (
    <div className={`max-w-3xl mb-12 ${className}`}>
      {eyebrow && (
        <span className="text-sm font-black tracking-wider uppercase text-primary-600 mb-4 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-6xl font-normal leading-tight mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-surface-700 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  ),
);

/* Background blob component */
export const BackgroundBlob = ({
  position = "top-right",
  size = "lg",
  color = "primary",
  className = "",
}) => {
  const positions = {
    "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
    "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  };

  const sizes = {
    sm: "w-48 h-48 blur-[60px]",
    md: "w-64 h-64 blur-[80px]",
    lg: "w-96 h-96 blur-[100px]",
  };

  const colors = {
    primary: "bg-primary-400",
    secondary: "bg-primary-300",
  };

  return (
    <div
      className={`absolute ${positions[position]} ${sizes[size]} ${colors[color]} rounded-full opacity-10 ${className}`}
      aria-hidden="true"
    />
  );
};

/* Stats card component */
export const StatCard = memo(({ value, label, className = "" }) => (
  <div className={`text-center ${className}`}>
    <div className="text-4xl md:text-5xl font-black text-primary-600 mb-2">
      {value}
    </div>
    <div className="text-sm md:text-base text-surface-700 font-medium">
      {label}
    </div>
  </div>
));

/* Footer link component */
export const FooterLink = memo(({ href, children, className = "" }) => (
  <a
    href={href}
    className={`text-surface-400 hover:text-primary-300 transition-colors ${className}`}
  >
    {children}
  </a>
));

/* Container component */
export const Container = memo(({ children, className = "" }) => (
  <div className={`container-custom ${className}`}>{children}</div>
));

/* Section component */
export const Section = memo(({ children, className = "" }) => (
  <section className={`py-16 md:py-24 ${className}`}>{children}</section>
));
