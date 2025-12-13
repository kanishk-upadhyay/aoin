import { memo } from "react";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { BackgroundBlob, StatCard, Button } from "./ui";
import { STATS } from "../constants";

const CallToAction = () => {
  return (
    <>
      <section className="container-custom py-16 md:py-24">
        <div className="bg-primary-900 rounded-m3-lg p-8 md:p-16 text-primary-50 relative overflow-hidden">
          {/* Background shapes */}
          <BackgroundBlob position="top-right" size="lg" color="primary" />
          <BackgroundBlob position="bottom-left" size="md" color="secondary" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 bg-primary-400/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary-300 rounded-full animate-pulse" />
              <span className="text-sm font-bold tracking-wider uppercase text-primary-200">
                Join AOIN Today
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-normal mb-6 leading-tight">
              Join the future of{" "}
              <span className="font-serif italic text-primary-300">
                commerce
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-primary-100 mb-12 leading-relaxed max-w-2xl mx-auto">
              Whether you shop or sell, AOIN is your platform for interactive,
              live commerce experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="filled" icon={ArrowRight} iconPosition="right">
                Start Shopping
              </Button>
              <button className="px-8 py-4 border-2 border-primary-300/30 text-primary-50 rounded-full font-bold text-lg hover:bg-primary-300/10 transition-all active:scale-95">
                Become a Merchant
              </button>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-primary-700/50">
              {STATS.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  className="text-primary-300 [&>div:first-child]:text-primary-300 [&>div:last-child]:text-primary-200"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating action button */}
      <button
        className="fixed bottom-6 right-6 fab shadow-m3-lg z-50"
        aria-label="Shopping Cart"
      >
        <ShoppingCart size={28} strokeWidth={2.5} />
      </button>
    </>
  );
};

export default memo(CallToAction);
