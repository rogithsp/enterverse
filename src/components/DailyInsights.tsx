
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, DollarSign, BookOpen } from 'lucide-react';

const insights = [
  {
    icon: TrendingUp,
    title: 'Market Trends',
    content: 'AI startups raised $50B in 2024, with 78% focusing on B2B solutions. The future is automated.',
    trend: '+127%',
    category: 'Investment'
  },
  {
    icon: Users,
    title: 'Startup Ecosystem',
    content: 'Remote-first companies are 35% more likely to achieve unicorn status according to latest research.',
    trend: '+35%',
    category: 'Growth'
  },
  {
    icon: DollarSign,
    title: 'Funding News',
    content: 'Seed funding rounds increased by 23% this quarter, with average ticket size reaching $2.5M.',
    trend: '+23%',
    category: 'Funding'
  },
  {
    icon: BookOpen,
    title: 'Learning Focus',
    content: 'Top entrepreneurs spend 5+ hours weekly learning new skills. Continuous education drives success.',
    trend: '5+ hrs',
    category: 'Education'
  }
];

const dailyQuote = {
  quote: "The way to get started is to quit talking and begin doing.",
  author: "Walt Disney",
  context: "Disney built an entertainment empire by taking action on his creative visions."
};

const DailyInsights = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl my-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Daily <span className="text-purple-600">Entrepreneurship</span> Insights
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest trends, news, and wisdom from the entrepreneurial world
        </p>
      </div>

      {/* Daily Quote */}
      <div className="mb-12">
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <blockquote className="text-2xl md:text-3xl font-light italic mb-4">
              "{dailyQuote.quote}"
            </blockquote>
            <footer className="text-purple-100">
              <cite className="text-lg font-semibold">— {dailyQuote.author}</cite>
              <p className="text-sm mt-2 opacity-90">{dailyQuote.context}</p>
            </footer>
          </CardContent>
        </Card>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {insights.map((insight, index) => {
          const IconComponent = insight.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {insight.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  {insight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {insight.content}
                </p>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-green-600">
                    {insight.trend}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">
                    vs last period
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* News Ticker */}
      <div className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
          Latest Entrepreneurship News
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Badge className="bg-red-100 text-red-700 border-red-200">Breaking</Badge>
            <span className="text-sm text-gray-700">Tesla announces new AI chip manufacturing plant</span>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">Funding</Badge>
            <span className="text-sm text-gray-700">Fintech startup raises $100M Series B led by Sequoia</span>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-green-100 text-green-700 border-green-200">Success</Badge>
            <span className="text-sm text-gray-700">Former Uber exec launches sustainable transport company</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyInsights;
