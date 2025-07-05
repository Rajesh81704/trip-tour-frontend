"use client";

import { useState } from "react";
import { Star, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
  verified: boolean;
  avatar?: string;
}

const dummyReviews: Review[] = [
  {
    id: 1,
    author: "Sarah Johnson",
    rating: 5,
    date: "2 weeks ago",
    title: "Absolutely Incredible Experience!",
    content:
      "This was hands down the best vacation I've ever taken. The attention to detail was remarkable, from the perfectly timed activities to the amazing accommodations. Our guide was knowledgeable and made every moment special. The itinerary was perfectly balanced with adventure and relaxation. I can't recommend this enough!",
    helpful: 24,
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    author: "Michael Chen",
    rating: 5,
    date: "1 month ago",
    title: "Exceeded All Expectations",
    content:
      "From the moment we booked until we returned home, everything was flawless. The local experiences were authentic, the food was amazing, and the sights were breathtaking. The small group size made it feel personal and intimate. Worth every penny!",
    helpful: 18,
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    author: "Emily Rodriguez",
    rating: 4,
    date: "3 weeks ago",
    title: "Great Value for Money",
    content:
      "Really enjoyed this trip! The accommodations were comfortable, the activities were well-planned, and the guides were friendly. Only giving 4 stars because the weather wasn't perfect, but that's not the company's fault. Would definitely book again!",
    helpful: 12,
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    author: "David Thompson",
    rating: 5,
    date: "2 months ago",
    title: "Perfect for Adventure Seekers",
    content:
      "If you're looking for an adventure that combines culture, nature, and excitement, this is it! The activities were challenging but accessible, and the guides ensured everyone's safety while having fun. The group dynamic was fantastic too.",
    helpful: 31,
    verified: true,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    author: "Lisa Wang",
    rating: 5,
    date: "1 week ago",
    title: "Unforgettable Memories",
    content:
      "This trip created memories that will last a lifetime. The local interactions were genuine, the food was incredible, and every day brought new adventures. The photography opportunities were endless. Highly recommend for anyone wanting an authentic experience.",
    helpful: 8,
    verified: false,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
];

const ReviewSection = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    title: "",
    content: "",
    rating: 5,
  });

  const averageRating =
    dummyReviews.reduce((acc, review) => acc + review.rating, 0) /
    dummyReviews.length;
  const totalReviews = dummyReviews.length;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle review submission logic here
    console.log("Review submitted:", newReview);
    setShowReviewForm(false);
    setNewReview({ title: "", content: "", rating: 5 });
  };

  return (
    <div className="space-y-8">
      {/* Review Summary */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex justify-center mt-1">
                {renderStars(Math.round(averageRating))}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Based on {totalReviews} reviews
              </div>
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Customer Reviews
              </h3>
              <p className="text-gray-600">
                Read what our travelers have to say about their experiences
              </p>
            </div>
          </div>
          <Button
            onClick={() => setShowReviewForm(true)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Write a Review
          </Button>
        </div>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-6">
            <form onSubmit={handleSubmitReview} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() =>
                        setNewReview({ ...newReview, rating: i + 1 })
                      }
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          i < newReview.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        } hover:text-yellow-400 transition-colors`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Review Title
                </label>
                <input
                  type="text"
                  value={newReview.title}
                  onChange={(e) =>
                    setNewReview({ ...newReview, title: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Summarize your experience"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Review
                </label>
                <Textarea
                  value={newReview.content}
                  onChange={(e) =>
                    setNewReview({ ...newReview, content: e.target.value })
                  }
                  placeholder="Share your experience in detail..."
                  className="min-h-[120px] resize-none"
                  required
                />
              </div>

              <div className="flex space-x-4">
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                >
                  Submit Review
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowReviewForm(false)}
                  className="px-6 py-2 rounded-lg"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {dummyReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl p-6 border border-gray-200/50"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={
                    review.avatar ||
                    "https://ui-avatars.com/api/?name=" + review.author
                  }
                  alt={review.author}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800">
                  {review.author}
                </h4>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                {renderStars(review.rating)}
                <span className="text-sm text-gray-500">
                  {review.rating} out of 5
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{review.helpful}</span>
                </button>
              </div>
            </div>
            <div className="text-gray-600">{review.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
