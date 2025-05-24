
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, BookOpen, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Accelerate Your <span className="text-blue-600">Journey</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access premium resources designed to fast-track your entrepreneurial success
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Live Sessions Card */}
        <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <CardHeader>
            <div className="p-3 bg-white/20 rounded-lg w-fit">
              <Video className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl font-bold">
              Live Sessions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Connect with successful entrepreneurs and expert mentors in real-time. Get personalized advice and network with like-minded individuals.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                Weekly expert sessions
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                1-on-1 mentorship available
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                Interactive Q&A sessions
              </div>
            </div>
            <Link to="/live-sessions">
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                Join Sessions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Book Store Card */}
        <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-600 to-teal-600 text-white border-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <CardHeader>
            <div className="p-3 bg-white/20 rounded-lg w-fit">
              <BookOpen className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl font-bold">
              Entrepreneur Books
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-100 mb-6 leading-relaxed">
              Discover biographies, business strategies, and success stories from the world's most successful entrepreneurs.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                Curated bestsellers
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                Exclusive interviews
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                Digital & physical copies
              </div>
            </div>
            <Link to="/books">
              <Button className="w-full bg-white text-green-600 hover:bg-gray-100">
                Browse Books
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Community Card */}
        <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <CardHeader>
            <div className="p-3 bg-white/20 rounded-lg w-fit">
              <Users className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl font-bold">
              Community
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-100 mb-6 leading-relaxed">
              Join thousands of aspiring and successful entrepreneurs in our vibrant community. Share ideas, get feedback, and grow together.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                50,000+ active members
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                Daily discussions
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                Networking events
              </div>
            </div>
            <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
              Join Community
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who are building the future. Your success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
