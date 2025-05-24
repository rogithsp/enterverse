
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, Users, Video, Star } from 'lucide-react';

const sessions = [
  {
    id: 1,
    title: 'Building a Tech Startup from Scratch',
    instructor: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    rating: 4.9,
    students: 156,
    date: '2024-05-25',
    time: '14:00 EST',
    duration: '90 min',
    price: 'Free',
    category: 'Tech',
    description: 'Learn the fundamentals of building a successful tech startup, from ideation to execution.',
    isLive: true
  },
  {
    id: 2,
    title: 'Fundraising Strategies That Work',
    instructor: 'Michael Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 4.8,
    students: 203,
    date: '2024-05-26',
    time: '16:30 EST',
    duration: '120 min',
    price: '$29',
    category: 'Finance',
    description: 'Master the art of raising capital with proven strategies from a serial entrepreneur.',
    isLive: false
  },
  {
    id: 3,
    title: 'Scaling Your Business Operations',
    instructor: 'Emma Thompson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 4.9,
    students: 89,
    date: '2024-05-27',
    time: '13:00 EST',
    duration: '75 min',
    price: '$19',
    category: 'Operations',
    description: 'Discover how to scale your operations efficiently while maintaining quality and culture.',
    isLive: false
  },
  {
    id: 4,
    title: 'Digital Marketing for Entrepreneurs',
    instructor: 'David Park',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 4.7,
    students: 312,
    date: '2024-05-28',
    time: '15:00 EST',
    duration: '100 min',
    price: '$25',
    category: 'Marketing',
    description: 'Build a powerful digital presence and attract customers with modern marketing techniques.',
    isLive: false
  }
];

const mentors = [
  {
    name: 'Alex Johnson',
    expertise: 'E-commerce',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
    rating: 4.9,
    sessions: 47,
    hourlyRate: '$150'
  },
  {
    name: 'Lisa Wang',
    expertise: 'Fintech',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face',
    rating: 4.8,
    sessions: 62,
    hourlyRate: '$200'
  },
  {
    name: 'Robert Kim',
    expertise: 'SaaS',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 4.9,
    sessions: 38,
    hourlyRate: '$175'
  }
];

const LiveSessions = () => {
  const [filter, setFilter] = useState('all');

  const filteredSessions = filter === 'all' 
    ? sessions 
    : sessions.filter(session => session.category.toLowerCase() === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Live <span className="text-blue-600">Learning</span> Sessions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with industry experts and learn from successful entrepreneurs in real-time
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'tech', 'finance', 'operations', 'marketing'].map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
              className={filter === category ? 'bg-blue-600 hover:bg-blue-700' : ''}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sessions List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Sessions</h2>
            <div className="space-y-6">
              {filteredSessions.map((session) => (
                <Card key={session.id} className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={session.avatar} />
                          <AvatarFallback>{session.instructor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-xl font-bold text-gray-900 mb-1">
                            {session.title}
                          </CardTitle>
                          <p className="text-blue-600 font-medium">by {session.instructor}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        {session.isLive && (
                          <Badge className="bg-red-500 hover:bg-red-600 animate-pulse">
                            <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                            LIVE
                          </Badge>
                        )}
                        <Badge variant="outline">{session.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{session.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(session.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        {session.time}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        {session.students} enrolled
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Star className="h-4 w-4 mr-1 text-yellow-400" />
                        {session.rating}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">
                        {session.price}
                      </span>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Video className="h-4 w-4 mr-2" />
                        {session.isLive ? 'Join Now' : 'Reserve Spot'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mentors Sidebar */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Mentors</h2>
            <div className="space-y-4">
              {mentors.map((mentor, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar>
                        <AvatarImage src={mentor.avatar} />
                        <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
                        <p className="text-sm text-blue-600">{mentor.expertise} Expert</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        {mentor.rating} ({mentor.sessions} sessions)
                      </div>
                      <span className="font-semibold text-green-600">{mentor.hourlyRate}/hr</span>
                    </div>
                    
                    <Button size="sm" className="w-full">
                      Book 1-on-1 Session
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats Card */}
            <Card className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-4">Platform Stats</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold">10,000+</div>
                    <div className="text-sm text-blue-100">Students Taught</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-blue-100">Sessions Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm text-blue-100">Satisfaction Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSessions;
