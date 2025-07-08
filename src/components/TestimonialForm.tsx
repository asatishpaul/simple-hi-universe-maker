
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TestimonialFormProps {
  onAddTestimonial: (testimonial: any) => void;
}

export const TestimonialForm = ({ onAddTestimonial }: TestimonialFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    text: "",
    rating: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newTestimonial = {
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString()
      };

      onAddTestimonial(newTestimonial);
      
      toast({
        title: "Thank you for your feedback!",
        description: "Your testimonial has been added successfully.",
      });

      setFormData({
        name: "",
        location: "",
        text: "",
        rating: 5
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit testimonial. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center">Share Your Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="e.g., Mumbai, MH"
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="text">Your Review</Label>
            <Textarea
              id="text"
              placeholder="Share your experience with our loan service..."
              value={formData.text}
              onChange={(e) => handleChange("text", e.target.value)}
              required
              rows={4}
            />
          </div>
          
          <div>
            <Label>Rating</Label>
            <div className="flex gap-1 mt-2">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 cursor-pointer ${
                    i < formData.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                  onClick={() => handleChange("rating", i + 1)}
                />
              ))}
            </div>
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
