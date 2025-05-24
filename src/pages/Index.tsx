
import React from 'react';
import Navigation from '@/components/Navigation';
import EntrepreneurStories from '@/components/EntrepreneurStories';
import DailyInsights from '@/components/DailyInsights';
import HeroSection from '@/components/HeroSection';
import FeaturedSection from '@/components/FeaturedSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      <HeroSection />
      <EntrepreneurStories />
      <DailyInsights />
      <FeaturedSection />
    </div>
  );
};

export default Index;
