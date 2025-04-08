'use client';

import { 
  LucideGauge, 
  LucideBarChart2, 
  LucideSparkles, 
  LucideWand2, 
  LucideTarget, 
  LucideBell, 
  LucideLink, 
  LucideMousePointerClick, 
  LucideLock 
} from 'lucide-react';

const features = [
  {
    icon: LucideGauge,
    title: 'User-friendly dashboard',
    description: 'Perform complex SEO audits and optimizations with a single click.',
  },
  {
    icon: LucideBarChart2,
    title: 'Visual reports',
    description: 'Visual insights into your site’s performance.',
  },
  {
    icon: LucideSparkles,
    title: 'Smart Keyword Generator',
    description: 'Automatic suggestions and the best keywords to target.',
  },
  {
    icon: LucideWand2,
    title: 'Content evaluation',
    description: 'Simple corrections for immediate improvements.',
  },
  {
    icon: LucideTarget,
    title: 'SEO goal setting',
    description: 'Helps you set and achieve SEO goals with guided assistance.',
  },
  {
    icon: LucideBell,
    title: 'Automated alerts',
    description: 'Automatic notifications about your SEO health, including quick fixes.',
  },
  {
    icon: LucideLink,
    title: 'Link Optimization Wizard',
    description: 'Guides you through the process of creating and managing links.',
  },
  {
    icon: LucideMousePointerClick,
    title: 'One-click optimization',
    description: 'Perform complex SEO audits and optimizations with a single click.',
  },
  {
    icon: LucideLock,
    title: 'Competitor reports',
    description: 'Provides insights into competitors’ keyword strategies and ranking.',
  },
];

export default function Features() {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-[#0c011a] to-black text-white">
       <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-5xl font-bold leading-tight text-white text-left">Elevate your SEO efforts.</h2>
        </div>



      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col gap-2">
            <feature.icon className="text-purple-400 w-6 h-6 mb-2" />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
