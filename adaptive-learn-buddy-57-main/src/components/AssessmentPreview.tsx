import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Brain, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Target,
  Lightbulb,
  Trophy,
  Sparkles
} from "lucide-react";

interface Question {
  id: string;
  type: 'multiple-choice' | 'short-answer' | 'essay';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  options?: string[];
  correctAnswer?: string;
  points: number;
  topic: string;
  hint?: string;
}

const AssessmentPreview = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showHint, setShowHint] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(45 * 60); // 45 minutes in seconds

  // Mock assessment data
  const assessment = {
    title: "Machine Learning Fundamentals",
    description: "Test your understanding of basic ML concepts and algorithms",
    totalQuestions: 15,
    timeLimit: 45,
    difficulty: "Medium",
    estimatedScore: 87
  };

  const questions: Question[] = [
    {
      id: "q1",
      type: "multiple-choice",
      difficulty: "Medium",
      question: "What is the primary goal of supervised learning?",
      options: [
        "To find hidden patterns in unlabeled data",
        "To learn a mapping from input features to target labels",
        "To reduce the dimensionality of data",
        "To cluster similar data points together"
      ],
      correctAnswer: "To learn a mapping from input features to target labels",
      points: 5,
      topic: "Supervised Learning",
      hint: "Think about what 'supervised' means - there's a teacher providing correct answers!"
    },
    {
      id: "q2",
      type: "multiple-choice",
      difficulty: "Hard",
      question: "Which algorithm is most suitable for handling non-linear relationships in data?",
      options: [
        "Linear Regression",
        "Logistic Regression", 
        "Random Forest",
        "K-Means Clustering"
      ],
      correctAnswer: "Random Forest",
      points: 8,
      topic: "Algorithms",
      hint: "Consider which algorithms can capture complex, non-linear patterns."
    },
    {
      id: "q3",
      type: "short-answer",
      difficulty: "Easy",
      question: "Define overfitting in machine learning and explain why it's problematic.",
      points: 10,
      topic: "Model Evaluation",
      hint: "Think about what happens when a model learns the training data too well."
    }
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-success text-success-foreground';
      case 'Medium': return 'bg-learning-accent text-learning-accent-foreground';
      case 'Hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setShowHint(false);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowHint(false);
    }
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="space-y-8">
      {/* Assessment Header */}
      <Card className="shadow-learning gradient-hero text-white">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">{assessment.title}</h2>
              <p className="text-white/90 mb-4">{assessment.description}</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-white/20 text-white border-white/30">
                  {assessment.totalQuestions} Questions
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  {assessment.timeLimit} Minutes
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  {assessment.difficulty} Level
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <div className="p-6 bg-white/10 rounded-full w-fit mx-auto mb-3">
                <Brain className="h-12 w-12 text-white" />
              </div>
              <p className="text-white/90">AI-Generated Assessment</p>
            </div>
            <div className="text-center md:text-right">
              <div className="text-3xl font-bold mb-1">{assessment.estimatedScore}%</div>
              <p className="text-white/90 mb-2">Predicted Score</p>
              <div className="flex items-center justify-center md:justify-end text-sm">
                <Target className="mr-1 h-4 w-4" />
                Based on your progress
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assessment Progress */}
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{formatTime(timeRemaining)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="h-4 w-4 text-primary" />
                <span className="text-sm">Question {currentQuestion + 1} of {questions.length}</span>
              </div>
            </div>
            <Badge className={getDifficultyColor(currentQ.difficulty)}>
              {currentQ.difficulty} • {currentQ.points} pts
            </Badge>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="mt-2 text-xs text-muted-foreground text-right">
            {Math.round(progress)}% Complete
          </div>
        </CardContent>
      </Card>

      {/* Current Question */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Badge variant="outline" className="mr-3">
                {currentQ.topic}
              </Badge>
              Question {currentQuestion + 1}
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowHint(!showHint)}
              disabled={!currentQ.hint}
            >
              <Lightbulb className="mr-2 h-4 w-4" />
              Hint
            </Button>
          </div>
          <CardDescription className="text-base leading-relaxed">
            {currentQ.question}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Hint */}
          {showHint && currentQ.hint && (
            <div className="mb-6 p-4 bg-learning-accent/10 border border-learning-accent/20 rounded-lg">
              <div className="flex items-start space-x-2">
                <Lightbulb className="h-4 w-4 text-learning-accent mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-learning-accent mb-1">Hint:</p>
                  <p className="text-sm text-learning-accent">{currentQ.hint}</p>
                </div>
              </div>
            </div>
          )}

          {/* Multiple Choice */}
          {currentQ.type === 'multiple-choice' && currentQ.options && (
            <RadioGroup
              value={answers[currentQ.id] || ""}
              onValueChange={handleAnswerChange}
            >
              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent transition-colors">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          )}

          {/* Short Answer / Essay */}
          {(currentQ.type === 'short-answer' || currentQ.type === 'essay') && (
            <Textarea
              placeholder="Enter your answer here..."
              value={answers[currentQ.id] || ""}
              onChange={(e) => handleAnswerChange(e.target.value)}
              className="min-h-32"
            />
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4" />
              <span>
                {Object.keys(answers).length} of {questions.length} answered
              </span>
            </div>

            {currentQuestion === questions.length - 1 ? (
              <Button className="gradient-learning border-0">
                <Trophy className="mr-2 h-4 w-4" />
                Submit Assessment
              </Button>
            ) : (
              <Button onClick={nextQuestion}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* AI Assistance Panel */}
      <Card className="shadow-card border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sparkles className="mr-2 h-5 w-5 text-primary" />
            AI Study Assistant
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h4 className="font-medium mb-2 flex items-center">
                <Brain className="mr-2 h-4 w-4 text-primary" />
                Performance Prediction
              </h4>
              <p className="text-sm text-muted-foreground">
                Based on your current answers, you're on track for an 87% score. 
                Focus on the harder questions for maximum impact.
              </p>
            </div>
            <div className="p-4 bg-success/5 rounded-lg">
              <h4 className="font-medium mb-2 flex items-center">
                <Target className="mr-2 h-4 w-4 text-success" />
                Study Recommendations
              </h4>
              <p className="text-sm text-muted-foreground">
                Review "Decision Trees" and "Feature Selection" topics 
                to improve your score on similar questions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssessmentPreview;