
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Plus } from "lucide-react";
import { TestimonialForm } from "./TestimonialForm";
import { Button } from "@/components/ui/button";

export const Testimonials = () => {
  const [showForm, setShowForm] = useState(false);
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      text: "Got approved for ₹10,00,000 from HDFC Bank in just 15 minutes! The process was incredibly smooth and the rate was better than what I expected.",
      location: "Bangalore, KA"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 5,
      text: "Used the loan from ICICI to consolidate my credit cards. Saved over ₹15,000/month on payments through their competitive rates!",
      location: "Mumbai, MH"
    },
    {
      id: 3,
      name: "Amit Patel",
      rating: 5,
      text: "Fast, transparent, and no hidden fees. Got connected with Axis Bank and funded my business expansion perfectly. Highly recommend!",
      location: "Ahmedabad, GJ"
    }
  ]);

  // Load testimonials from localStorage on component mount
  useEffect(() => {
    const savedTestimonials = localStorage.getItem('userTestimonials');
    if (savedTestimonials) {
      const parsed = JSON.parse(savedTestimonials);
      setTestimonials(prev => [...prev, ...parsed]);
    }
  }, []);

  const addTestimonial = (newTestimonial: any) => {
    setTestimonials(prev => {
      const updated = [newTestimonial, ...prev];
      // Save user testimonials to localStorage (excluding default ones)
      const userTestimonials = updated.filter(t => t.id > 3);
      localStorage.setItem('userTestimonials', JSON.stringify(userTestimonials));
      return updated;
    });
    setShowForm(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied customers who found their perfect loan through our partner banks
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            We work with HDFC Bank, ICICI Bank, Axis Bank, IDFC First Bank & other leading NBFCs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  {testimonial.id > 3 && (
                    <div className="text-xs text-primary mt-1">✓ Recent Review</div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          {!showForm ? (
            <Button 
              onClick={() => setShowForm(true)}
              className="mb-8"
              variant="outline"
            >
              <Plus className="mr-2 h-4 w-4" />
              Share Your Experience
            </Button>
          ) : (
            <div className="flex justify-center mb-8">
              <TestimonialForm onAddTestimonial={addTestimonial} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
