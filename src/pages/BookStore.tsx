
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Star, Search, ShoppingCart, BookOpen } from 'lucide-react';

const books = [
  {
    id: 1,
    title: 'The Everything Store',
    author: 'Brad Stone',
    subject: 'Jeff Bezos',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop',
    rating: 4.8,
    reviews: 2134,
    price: 24.99,
    originalPrice: 29.99,
    category: 'Biography',
    description: 'The definitive story of Amazon.com and its founder Jeff Bezos.',
    bestseller: true
  },
  {
    id: 2,
    title: 'Elon Musk',
    author: 'Ashlee Vance',
    subject: 'Elon Musk',
    cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
    rating: 4.9,
    reviews: 3421,
    price: 22.99,
    originalPrice: 27.99,
    category: 'Biography',
    description: 'The life and genius of the real-life Iron Man.',
    bestseller: true
  },
  {
    id: 3,
    title: 'Shoe Dog',
    author: 'Phil Knight',
    subject: 'Nike Founder',
    cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    rating: 4.7,
    reviews: 1876,
    price: 19.99,
    originalPrice: 24.99,
    category: 'Memoir',
    description: 'The story behind Nike and its journey from startup to global empire.',
    bestseller: false
  },
  {
    id: 4,
    title: 'The Lean Startup',
    author: 'Eric Ries',
    subject: 'Startup Methodology',
    cover: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300&h=400&fit=crop',
    rating: 4.6,
    reviews: 2987,
    price: 21.99,
    originalPrice: 25.99,
    category: 'Business',
    description: 'How constant innovation creates radically successful businesses.',
    bestseller: true
  },
  {
    id: 5,
    title: 'Zero to One',
    author: 'Peter Thiel',
    subject: 'Startup Guide',
    cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=400&fit=crop',
    rating: 4.5,
    reviews: 1654,
    price: 18.99,
    originalPrice: 23.99,
    category: 'Business',
    description: 'Notes on startups, or how to build the future.',
    bestseller: false
  },
  {
    id: 6,
    title: 'The Hard Thing About Hard Things',
    author: 'Ben Horowitz',
    subject: 'Business Management',
    cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop',
    rating: 4.8,
    reviews: 1432,
    price: 23.99,
    originalPrice: 28.99,
    category: 'Business',
    description: 'Building a business when there are no easy answers.',
    bestseller: false
  }
];

const categories = ['All', 'Biography', 'Business', 'Memoir'];

const BookStore = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<number[]>([]);

  const filteredBooks = books.filter(book => {
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.subject.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (bookId: number) => {
    setCart(prev => [...prev, bookId]);
  };

  const isInCart = (bookId: number) => cart.includes(bookId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entrepreneur <span className="text-green-600">Bookstore</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the stories, strategies, and wisdom of the world's most successful entrepreneurs
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search books, authors, or entrepreneurs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-green-600 hover:bg-green-700' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="h-5 w-5 text-green-600" />
                <span className="font-medium text-green-800">
                  {cart.length} book{cart.length > 1 ? 's' : ''} in cart
                </span>
              </div>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                View Cart
              </Button>
            </div>
          </div>
        )}

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
              <div className="relative">
                <img 
                  src={book.cover} 
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
                {book.bestseller && (
                  <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600">
                    Bestseller
                  </Badge>
                )}
                <Badge 
                  variant="outline" 
                  className="absolute top-3 right-3 bg-white/90"
                >
                  {book.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">
                  {book.title}
                </CardTitle>
                <div className="space-y-1">
                  <p className="text-blue-600 font-medium">by {book.author}</p>
                  <p className="text-sm text-gray-600">About: {book.subject}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {book.description}
                </p>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(book.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{book.rating}</span>
                  <span className="text-sm text-gray-500">({book.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-600">
                        ${book.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${book.originalPrice}
                      </span>
                    </div>
                    <span className="text-xs text-green-600 font-medium">
                      Save ${(book.originalPrice - book.price).toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <Button 
                      size="sm"
                      onClick={() => addToCart(book.id)}
                      disabled={isInCart(book.id)}
                      className={isInCart(book.id) 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-green-600 hover:bg-green-700'
                      }
                    >
                      {isInCart(book.id) ? 'Added!' : 'Add to Cart'}
                    </Button>
                    <Button variant="outline" size="sm">
                      <BookOpen className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Collections */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Collections
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Tech Titans</h3>
                <p className="text-blue-100 mb-6">
                  Stories of tech entrepreneurs who changed the world
                </p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  Explore Collection
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-green-600 to-teal-600 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Startup Guides</h3>
                <p className="text-green-100 mb-6">
                  Essential reading for aspiring entrepreneurs
                </p>
                <Button className="bg-white text-green-600 hover:bg-gray-100">
                  Explore Collection
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookStore;
