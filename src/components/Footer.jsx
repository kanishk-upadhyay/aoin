import { memo } from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { FooterLink } from "./ui";
import { FOOTER_LINKS, SOCIAL_LINKS, LEGAL_LINKS } from "../constants";

const SOCIAL_ICONS_MAP = {
  Facebook: Facebook,
  Twitter: Twitter,
  Instagram: Instagram,
  Youtube: Youtube,
};

const Footer = () => {
  return (
    <footer className="bg-surface-900 text-surface-100">
      <div className="border-b border-surface-700">
        <div className="container-custom py-16">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-normal mb-4">
              Stay in the loop
            </h3>
            <p className="text-surface-300 mb-8 text-lg">
              Subscribe to get special offers, free giveaways, and exclusive
              deals.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-surface-400"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 bg-surface-800 text-surface-100 rounded-full border-2 border-surface-700 focus:outline-none focus:border-primary-400 transition-colors"
                />
              </div>
              <button className="btn-filled">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="/" className="mb-4 inline-block">
              <img
                src="/logo.png"
                alt="AOIN"
                className="h-10 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-surface-400 mb-6 max-w-sm leading-relaxed">
              Your premium live shopping destination. Connecting shoppers and
              merchants through interactive commerce.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS_MAP[social.name];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-12 h-12 rounded-full bg-surface-800 hover:bg-primary-400 hover:text-surface-900 flex items-center justify-center transition-all"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-surface-50">Shop</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-surface-50">Sell</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.merchant.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-surface-50">Support</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-surface-50">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-surface-700">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-surface-400 text-sm">
              © 2024 AOIN. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              {LEGAL_LINKS.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
