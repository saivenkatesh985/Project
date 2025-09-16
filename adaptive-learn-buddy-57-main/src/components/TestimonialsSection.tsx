import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, Users, TrendingUp, Award } from "lucide-react";
import successStudents from "@/assets/success-students.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Computer Science Student",
      university: "MIT",
      rating: 5,
      quote: "EduLearn's AI assessments helped me identify my weak areas in data structures. My exam scores improved by 23% in just 4 weeks!",
      achievement: "Dean's List",
      subject: "Computer Science"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Medical Student",
      university: "Johns Hopkins",
      rating: 5,
      quote: "The personalized study recommendations are incredible. The AI actually understands how I learn and adapts accordingly.",
      achievement: "MCAT 98th percentile",
      subject: "Medicine"
    },
    {
      name: "Emma Thompson",
      role: "Engineering Major",
      university: "Stanford",
      rating: 5,
      quote: "I love how it processes my lecture notes into targeted practice questions. It's like having a personal tutor 24/7.",
      achievement: "Summa Cum Laude",
      subject: "Engineering"
    },
    {
      name: "David Kim",
      role: "Business Student",
      university: "Wharton",
      rating: 5,
      quote: "The analytics dashboard showed me exactly where to focus my study time. My productivity increased dramatically.",
      achievement: "Beta Gamma Sigma Honor Society",
      subject: "Business"
    },
    {
      name: "Lisa Wang",
      role: "Psychology Major",
      university: "Harvard",
      rating: 5,
      quote: "The adaptive difficulty feature challenged me at just the right level. I never felt overwhelmed or under-challenged.",
      achievement: "Research Publication",
      subject: "Psychology"
    },
    {
      name: "Alex Johnson",
      role: "Physics Student", 
      university: "Caltech",
      rating: 5,
      quote: "EduLearn's document processing is amazing - it turned my dense physics textbooks into digestible study materials instantly.",
      achievement: "Physics Olympiad Gold",
      subject: "Physics"
    }
  ];

  const stats = [
    { 
      number: "94%", 
      label: "Average Score Improvement", 
      icon: TrendingUp,
      description: "Students see significant grade improvements within 30 days"
    },
    { 
      number: "50K+", 
      label: "Active Learners", 
      icon: Users,
      description: "Students from top universities worldwide"
    },
    { 
      number: "4.9/5", 
      label: "Student Satisfaction", 
      icon: Star,
      description: "Based on 10,000+ verified reviews"
    },
    { 
      number: "85%", 
      label: "Study Time Reduction", 
      icon: Award,
      description: "More efficient learning through AI personalization"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Loved by Students Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join thousands of students who have transformed their learning experience 
            with our AI-powered platform
          </p>
          
          {/* Success Image */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <img 
              src={successStudents}
              alt="Successful students celebrating achievements"
              className="rounded-2xl shadow-learning w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-card text-center hover:shadow-learning transition-all duration-300">
                <CardContent className="p-6">
                  <div className="p-4 gradient-learning rounded-full w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold mb-2">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-learning transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 gradient-learning rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary font-medium">{testimonial.university}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground italic pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {testimonial.subject}
                  </Badge>
                  <Badge className="text-xs bg-success/10 text-success border-success/20">
                    <Award className="mr-1 h-3 w-3" />
                    {testimonial.achievement}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="shadow-learning gradient-hero text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Learning?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join the thousands of students who have already improved their academic performance 
                with AI-powered personalized learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-success">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Pricing Plans
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;