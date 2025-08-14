"use client";

import { useEffect, useState } from "react";
import { Star, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import api from "@/lib/api";
import { useSelector } from "react-redux";
import { RootState } from "@/store/slice";

export interface Review {
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

const ReviewSection = ({ packageId }: { packageId: string }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    title: "",
    content: "",
    rating: 5,
  });
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await api.get("/reviews", {
          params: {
            packageId: packageId,
          },
        });
        setReviews(response.data as unknown as Review[]);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [packageId]);

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
      : 0;
  const totalReviews = reviews.length;

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

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const response = await api.post("/reviews", {
        packageId,
        ...newReview,
      });

      if (response.data) {
        setReviews([...reviews, response.data as unknown as Review]);
        setShowReviewForm(false);
        setNewReview({ title: "", content: "", rating: 5 });
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Review Summary */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">
                {totalReviews > 0 ? averageRating.toFixed(1) : "N/A"}
              </div>
              <div className="flex justify-center mt-1">
                {renderStars(Math.round(averageRating))}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {totalReviews > 0
                  ? `Based on ${totalReviews} reviews`
                  : "No reviews yet"}
              </div>
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Customer Reviews
              </h3>
              <p className="text-gray-600">
                {totalReviews > 0
                  ? "Read what our travelers have to say about their experiences"
                  : "Be the first to review this package"}
              </p>
            </div>
          </div>
          {user ? (
            <Button
              onClick={() => setShowReviewForm(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Write a Review
            </Button>
          ) : (
            <div className="mt-4 md:mt-0">
              <p className="text-sm md:text-base text-gray-600 mb-2">
                Want to share your experience?
              </p>
              <Button
                onClick={() => (window.location.href = "/login")}
                className="bg-gray-200 hover:bg-gray-300 text-blue-600 font-medium px-4 py-2 rounded-full text-sm transition-all duration-300 flex items-center gap-2"
              >
                <span>Login to write a review</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Review Form */}
      {showReviewForm && user && (
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
      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map((review) => (
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
      ) : (
        <div className="text-center py-8 text-gray-500">
          No reviews yet. Be the first to share your experience!
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
