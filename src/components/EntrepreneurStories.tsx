
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const entrepreneurs = [
  {
    id: 1,
    name: 'Elon Musk',
    title: 'CEO of Tesla & SpaceX',
    story: 'From sleeping on couches to revolutionizing electric cars and space travel. Elon\'s journey shows how bold vision and relentless execution can change the world.',
    achievement: 'Worth $240B+',
    industry: 'Technology',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=face',
    keyLessons: ['Think from first principles', 'Embrace failure as learning', 'Solve real problems']
  },
  {
    id: 2,
    name: 'Sara Blakely',
    title: 'Founder of Spanx',
    story: 'Started with $5,000 and an idea to create better undergarments. Now a billionaire who revolutionized the shapewear industry.',
    achievement: 'Self-made billionaire',
    industry: 'Fashion',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=face',
    keyLessons: ['Bootstrap your business', 'Listen to customer needs', 'Never give up on your vision']
  },
  {
    id: 3,
    name: 'Jeff Bezos',
    title: 'Founder of Amazon',
    story: 'Started Amazon in his garage selling books online. Built it into the world\'s largest e-commerce platform and cloud computing provider.',
    achievement: 'Built $1.5T company',
    industry: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face',
    keyLessons: ['Customer obsession', 'Think long-term', 'Innovate constantly']
  },
  {
    id: 4,
    name: 'Oprah Winfrey',
    title: 'Media Mogul',
    story: 'From poverty to becoming one of the most influential media personalities. Built a media empire through authentic storytelling and connection.',
    achievement: 'First black female billionaire',
    industry: 'Media',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop&crop=face',
    keyLessons: ['Authenticity is power', 'Give back to society', 'Continuous self-improvement']
  }
];

const EntrepreneurStories = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Success Stories That <span className="text-blue-600">Inspire</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn from the journeys of legendary entrepreneurs who transformed their dreams into reality
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {entrepreneurs.map((entrepreneur, index) => (
          <Card key={entrepreneur.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="relative">
              <img 
                src={entrepreneur.image} 
                alt={entrepreneur.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white/90 text-gray-800">
                  {entrepreneur.industry}
                </Badge>
              </div>
            </div>
            
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-1">
                    {entrepreneur.name}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">
                    {entrepreneur.title}
                  </CardDescription>
                </div>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  {entrepreneur.achievement}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {entrepreneur.story}
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Lessons:</h4>
                <ul className="space-y-1">
                  {entrepreneur.keyLessons.map((lesson, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Read Full Story
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default EntrepreneurStories;
