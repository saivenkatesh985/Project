import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  BookOpen, 
  Upload, 
  BarChart3, 
  Target, 
  Award, 
  Clock, 
  TrendingUp,
  FileText,
  Users,
  Zap,
  Star,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/learning-hero.jpg";
import InteractiveUpload from "./InteractiveUpload";
import AdvancedAnalytics from "./AdvancedAnalytics";
import AssessmentPreview from "./AssessmentPreview";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";

const LearningPlatform = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data for the platform
  const userProgress = {
    overallProgress: 68,
    currentStreak: 12,
    totalAchievements: 24,
    weeklyGoal: 85,
    subjectsCompleted: 8,
    totalSubjects: 12
  };

  const recentActivities = [
    { subject: "Machine Learning", score: 94, time: "2h ago", type: "assessment" },
    { subject: "Data Structures", score: 87, time: "1d ago", type: "study" },
    { subject: "Algorithms", score: 91, time: "2d ago", type: "assessment" },
  ];

  const recommendedStudies = [
    { title: "Advanced Neural Networks", difficulty: "Hard", estimatedTime: "45 min", priority: "High" },
    { title: "Graph Algorithms Review", difficulty: "Medium", estimatedTime: "30 min", priority: "Medium" },
    { title: "Linear Algebra Basics", difficulty: "Easy", estimatedTime: "20 min", priority: "Low" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Adaptive Learning
                <span className="block gradient-accent bg-clip-text text-transparent">
                  Made Personal
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Upload your materials, get AI-powered assessments, and track your progress 
                with our intelligent study companion that adapts to your learning style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-success">
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Content
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Brain className="mr-2 h-5 w-5" />
                  Take Assessment
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Students learning with AI technology" 
                className="rounded-2xl shadow-learning animate-float"
              />
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground p-4 rounded-xl shadow-success animate-pulse-slow">
                <Award className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-card border-b shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 py-4">
            {[
              { id: "dashboard", label: "Dashboard", icon: BarChart3 },
              { id: "upload", label: "Upload Content", icon: Upload },
              { id: "assessments", label: "Assessments", icon: Brain },
              { id: "analytics", label: "Analytics", icon: TrendingUp },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-smooth ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-learning"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Dashboard Content */}
      {activeTab === "dashboard" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Progress Overview */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="shadow-card transition-smooth hover:shadow-learning">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Overall Progress</p>
                      <p className="text-2xl font-bold">{userProgress.overallProgress}%</p>
                    </div>
                    <div className="p-3 gradient-learning rounded-full">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <Progress value={userProgress.overallProgress} className="mt-4" />
                </CardContent>
              </Card>

              <Card className="shadow-card transition-smooth hover:shadow-learning">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Current Streak</p>
                      <p className="text-2xl font-bold">{userProgress.currentStreak} days</p>
                    </div>
                    <div className="p-3 gradient-success rounded-full">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-sm text-success mt-2">Keep it up! 🔥</div>
                </CardContent>
              </Card>

              <Card className="shadow-card transition-smooth hover:shadow-learning">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Achievements</p>
                      <p className="text-2xl font-bold">{userProgress.totalAchievements}</p>
                    </div>
                    <div className="p-3 gradient-accent rounded-full">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-sm text-learning-accent mt-2">+3 this week</div>
                </CardContent>
              </Card>

              <Card className="shadow-card transition-smooth hover:shadow-learning">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Weekly Goal</p>
                      <p className="text-2xl font-bold">{userProgress.weeklyGoal}%</p>
                    </div>
                    <div className="p-3 bg-primary rounded-full">
                      <BookOpen className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <Progress value={userProgress.weeklyGoal} className="mt-4" />
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Recent Activities */}
              <Card className="lg:col-span-2 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Recent Activities
                  </CardTitle>
                  <CardDescription>
                    Your latest study sessions and assessments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-accent rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className={`p-2 rounded-full ${
                            activity.type === "assessment" ? "bg-primary" : "bg-success"
                          }`}>
                            {activity.type === "assessment" ? (
                              <Brain className="h-4 w-4 text-white" />
                            ) : (
                              <BookOpen className="h-4 w-4 text-white" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{activity.subject}</p>
                            <p className="text-sm text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                        <Badge variant={activity.score >= 90 ? "default" : "secondary"}>
                          {activity.score}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Personalized Recommendations */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 h-5 w-5" />
                    Recommended Studies
                  </CardTitle>
                  <CardDescription>
                    AI-powered suggestions based on your progress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recommendedStudies.map((study, index) => (
                      <div key={index} className="p-4 border rounded-lg hover:shadow-sm transition-smooth">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-sm">{study.title}</h4>
                          <Badge 
                            variant={study.priority === "High" ? "destructive" : 
                                   study.priority === "Medium" ? "secondary" : "outline"}
                            className="text-xs"
                          >
                            {study.priority}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{study.difficulty}</span>
                          <span>{study.estimatedTime}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 gradient-learning border-0">
                    View All Recommendations
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Upload Content Tab */}
      {activeTab === "upload" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <InteractiveUpload />
          </div>
        </section>
      )}

      {/* Assessments Tab */}
      {activeTab === "assessments" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AssessmentPreview />
          </div>
        </section>
      )}

      {/* Analytics Tab */}
      {activeTab === "analytics" && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AdvancedAnalytics />
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Intelligent Learning Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of education with AI-powered personalization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Assessments",
                description: "Automatically generate quizzes and tests from your study materials",
                color: "primary"
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics", 
                description: "Track your progress with detailed performance insights and trends",
                color: "success"
              },
              {
                icon: Target,
                title: "Personalized Learning",
                description: "Get custom study recommendations based on your learning patterns",
                color: "learning-accent"
              },
              {
                icon: Upload,
                title: "Document Processing",
                description: "Upload PDFs, texts, and documents for instant content analysis",
                color: "primary"
              },
              {
                icon: Award,
                title: "Achievement System",
                description: "Earn badges and track milestones to stay motivated",
                color: "success"
              },
              {
                icon: TrendingUp,
                title: "Progress Tracking",
                description: "Monitor your improvement over time with comprehensive dashboards",
                color: "learning-accent"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-learning transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className={`p-4 rounded-full w-fit mx-auto mb-4 ${
                      feature.color === "primary" ? "gradient-learning" :
                      feature.color === "success" ? "gradient-success" : "gradient-accent"
                    }`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center mt-12">
            <Card className="max-w-3xl mx-auto shadow-learning">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Experience Personalized Learning?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Join thousands of students who have transformed their study habits with our AI-powered platform
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="gradient-learning border-0">
                    <Upload className="mr-2 h-5 w-5" />
                    Start Learning Now
                  </Button>
                  <Button variant="outline" size="lg">
                    <Star className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center justify-center mt-6 space-x-8 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Users className="mr-1 h-4 w-4" />
                    50K+ students
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4 text-yellow-400" />
                    4.9/5 rating
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    94% improvement
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Pricing */}
      <PricingSection />

      {/* Final CTA */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Start Your Learning Transformation Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the educational revolution. Experience AI-powered personalized learning 
            that adapts to your unique style and accelerates your academic success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-success">
              <Upload className="mr-2 h-5 w-5" />
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <ArrowRight className="mr-2 h-5 w-5" />
              Book a Demo
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default LearningPlatform;