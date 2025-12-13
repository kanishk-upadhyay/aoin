import { memo } from "react";
import { Play, ArrowRight, Zap, ShoppingBag, Compass } from "lucide-react";
import { StatCard } from "./ui";
import { STATS } from "../constants";

const Card = ({
  title,
  subtitle,
  icon: Icon,
  backgroundColor,
  textColor,
  className = "",
}) => (
  <div
    className={`m3-card flex flex-col justify-between ${backgroundColor} ${className}`}
  >
    <div className="flex justify-between items-start">
      <div
        className={`p-4 rounded-2xl ${textColor} bg-white/20 backdrop-blur-sm`}
      >
        <Icon size={32} strokeWidth={2} />
      </div>
      <button
        className={`p-2 rounded-full hover:bg-black/5 ${textColor} transition-all`}
      >
        <ArrowRight size={20} />
      </button>
    </div>

    <div className="mt-8">
      <h3 className={`text-3xl font-normal leading-tight ${textColor}`}>
        {title}
      </h3>
      <p className={`mt-2 font-medium opacity-80 ${textColor}`}>{subtitle}</p>
    </div>
  </div>
);

const MainHeroCard = () => (
  <div className="col-span-1 md:col-span-2 bg-primary-900 rounded-m3-lg p-8 md:p-12 text-primary-100 relative overflow-hidden group min-h-[400px] md:min-h-[500px]">
    {/* Abstract background shapes */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400 rounded-full blur-[80px] opacity-20 translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-300 rounded-full blur-[60px] opacity-10 -translate-x-1/2 translate-y-1/2" />

    <div className="relative z-10 flex flex-col h-full justify-between">
      <div className="flex items-center gap-3">
        <span className="bg-primary-400 text-primary-900 px-3 py-1 rounded-lg text-xs font-black tracking-wide uppercase">
          Live
        </span>
        <span className="text-sm font-medium tracking-wide opacity-90">
          12.5k watching
        </span>
      </div>

      <div className="my-8">
        <h1 className="text-5xl md:text-7xl font-normal tracking-tight leading-[0.9]">
          Your Premium <br />
          <span className="font-serif italic text-primary-300">
            Live Shopping
          </span>
        </h1>
        <p className="text-xl md:text-2xl mt-6 opacity-90 max-w-xl">
          Shop smart. Sell smarter. AOIN connects you through live, interactive
          commerce.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button className="h-14 px-8 bg-primary-400 text-primary-900 rounded-full font-bold text-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 active:scale-95">
          <Play size={20} fill="currentColor" />
          <span>Start Shopping</span>
        </button>
        <button className="h-14 px-8 border-2 border-primary-300/30 rounded-full font-bold text-lg hover:bg-primary-300/10 transition-all active:scale-95">
          Become a Merchant
        </button>
      </div>
    </div>

    {/* Gradient overlay */}
    <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent z-0 pointer-events-none" />
  </div>
);

const Hero = () => {
  return (
    <section className="container-custom py-6 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(300px,auto)]">
        {/* Main hero card */}
        <MainHeroCard />

        {/* Daily deals card */}
        <div className="row-span-1 md:row-span-2 bg-surface-200 rounded-m3-lg p-8 flex flex-col relative overflow-hidden min-h-[400px]">
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-primary-600 shadow-m3 z-10">
            ENDING SOON
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-normal text-surface-900 mt-8">
                Daily
                <br />
                Deals
              </h3>
              <p className="text-surface-700 mt-3 font-medium">
                Limited time offers
              </p>
            </div>

            <div className="mt-auto">
              <div className="text-[80px] font-black text-primary-500/20 leading-none tracking-tighter text-right">
                -50%
              </div>
            </div>
          </div>

          <Zap
            size={64}
            className="absolute bottom-8 left-8 text-primary-600"
            strokeWidth={1.5}
          />
        </div>

        {/* Feature cards */}
        <Card
          title="Themed Shops"
          subtitle="Curated for you"
          icon={ShoppingBag}
          backgroundColor="bg-secondary-100"
          textColor="text-secondary-900"
          className="min-h-[300px]"
        />

        <Card
          title="Discovery"
          subtitle="AI Recommendations"
          icon={Compass}
          backgroundColor="bg-tertiary-100"
          textColor="text-tertiary-900"
          className="min-h-[300px]"
        />
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-3 gap-8 mt-12 md:mt-16">
        {STATS.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            className="text-primary-600 [&>div:first-child]:text-primary-600 [&>div:last-child]:text-surface-700"
          />
        ))}
      </div>
    </section>
  );
};

export default memo(Hero);
