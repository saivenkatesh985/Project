import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar
} from 'recharts';
import { 
  TrendingUp, 
  Target, 
  Clock, 
  Award, 
  Brain, 
  Zap,
  Calendar,
  BookOpen,
  Users,
  Star
} from "lucide-react";
import analyticsHero from "@/assets/analytics-hero.jpg";

const AdvancedAnalytics = () => {
  // Mock analytics data
  const progressData = [
    { date: 'Mon', score: 65, time: 120 },
    { date: 'Tue', score: 72, time: 145 },
    { date: 'Wed', score: 78, time: 160 },
    { date: 'Thu', score: 85, time: 180 },
    { date: 'Fri', score: 88, time: 200 },
    { date: 'Sat', score: 92, time: 175 },
    { date: 'Sun', score: 95, time: 190 },
  ];

  const subjectPerformance = [
    { subject: 'Mathematics', score: 92, improvement: '+8%' },
    { subject: 'Science', score: 88, improvement: '+12%' },
    { subject: 'History', score: 85, improvement: '+5%' },
    { subject: 'Literature', score: 90, improvement: '+15%' },
    { subject: 'Physics', score: 82, improvement: '+3%' },
  ];

  const studyTimeDistribution = [
    { name: 'Reading', value: 35, color: 'hsl(var(--primary))' },
    { name: 'Practice', value: 25, color: 'hsl(var(--success))' },
    { name: 'Assessments', value: 20, color: 'hsl(var(--learning-accent))' },
    { name: 'Review', value: 20, color: 'hsl(var(--muted))' },
  ];

  const weeklyGoals = [
    { goal: 'Complete 5 Assessments', progress: 80, current: 4, total: 5 },
    { goal: 'Study 10 Hours', progress: 70, current: 7, total: 10 },
    { goal: 'Master 3 New Topics', progress: 100, current: 3, total: 3 },
    { goal: 'Maintain 90% Accuracy', progress: 95, current: 95, total: 90 },
  ];

  const learningStreak = [
    { day: 1, active: true },
    { day: 2, active: true },
    { day: 3, active: true },
    { day: 4, active: true },
    { day: 5, active: true },
    { day: 6, active: true },
    { day: 7, active: true },
    { day: 8, active: true },
    { day: 9, active: true },
    { day: 10, active: true },
    { day: 11, active: true },
    { day: 12, active: true },
    { day: 13, active: false },
    { day: 14, active: false },
  ];

  return (
    <div className="space-y-8">
      {/* Analytics Header */}
      <div className="relative overflow-hidden rounded-2xl shadow-learning">
        <div className="absolute inset-0">
          <img 
            src={analyticsHero} 
            alt="Advanced Learning Analytics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Advanced Learning Analytics</h2>
          <p className="text-xl text-white/90 mb-6">
            Deep insights into your learning patterns and progress
          </p>
          <div className="flex flex-wrap gap-4">
            <Badge className="bg-white/20 text-white border-white/30">
              AI-Powered Insights
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              Real-time Tracking
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              Predictive Analytics
            </Badge>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card hover:shadow-learning transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Weekly Score</p>
                <p className="text-2xl font-bold text-success">94%</p>
                <p className="text-xs text-success">+12% vs last week</p>
              </div>
              <div className="p-3 gradient-success rounded-full">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-learning transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Study Streak</p>
                <p className="text-2xl font-bold text-learning-accent">12 days</p>
                <p className="text-xs text-learning-accent">Personal best!</p>
              </div>
              <div className="p-3 gradient-accent rounded-full">
                <Zap className="h-5 w-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-learning transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Time Studied</p>
                <p className="text-2xl font-bold text-primary">28.5h</p>
                <p className="text-xs text-primary">This week</p>
              </div>
              <div className="p-3 gradient-learning rounded-full">
                <Clock className="h-5 w-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-learning transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Achievements</p>
                <p className="text-2xl font-bold">24</p>
                <p className="text-xs text-muted-foreground">+3 this week</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full">
                <Award className="h-5 w-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Progress Over Time */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Progress Trend
            </CardTitle>
            <CardDescription>Your learning performance over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Study Time Distribution */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Study Time Breakdown
            </CardTitle>
            <CardDescription>How you spend your learning time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={studyTimeDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {studyTimeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {studyTimeDistribution.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject Performance */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Subject Performance
          </CardTitle>
          <CardDescription>Your performance across different subjects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subjectPerformance.map((subject, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-accent rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 gradient-learning rounded-lg">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">{subject.subject}</p>
                    <p className="text-sm text-muted-foreground">Average Score</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-lg font-bold">{subject.score}%</p>
                    <p className="text-sm text-success">{subject.improvement}</p>
                  </div>
                  <Progress value={subject.score} className="w-20" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Goals */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <Target className="mr-2 h-5 w-5" />
              Weekly Goals
            </span>
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Set New Goals
            </Button>
          </CardTitle>
          <CardDescription>Track your learning objectives for this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {weeklyGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{goal.goal}</h4>
                  <Badge variant={goal.progress >= 100 ? "default" : "secondary"}>
                    {goal.current}/{goal.total}
                  </Badge>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  {goal.progress >= 100 ? 'Completed! 🎉' : `${goal.progress}% complete`}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Streak Visualization */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="mr-2 h-5 w-5" />
            Learning Streak
          </CardTitle>
          <CardDescription>Keep the momentum going! 🔥</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-1 mb-4">
            {learningStreak.map((day) => (
              <div
                key={day.day}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                  day.active 
                    ? 'bg-success text-success-foreground shadow-success' 
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {day.day}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-success mb-1">12 Day Streak!</p>
            <p className="text-sm text-muted-foreground">
              You're on fire! Keep studying to maintain your streak.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedAnalytics;