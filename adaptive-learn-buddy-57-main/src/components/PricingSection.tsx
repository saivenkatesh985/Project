import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  Brain,
  Upload,
  BarChart3,
  Users,
  Shield,
  Headphones,
  Infinity
} from "lucide-react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Student",
      description: "Perfect for individual learners getting started",
      monthlyPrice: 0,
      annualPrice: 0,
      popular: false,
      color: "border-border",
      buttonVariant: "outline" as const,
      features: [
        "5 document uploads per month",
        "Basic AI assessments",
        "Progress tracking",
        "Community support",
        "Mobile app access",
        "Basic analytics dashboard"
      ],
      limits: {
        documents: "5/month",
        assessments: "10/month", 
        storage: "500MB"
      }
    },
    {
      name: "Scholar",
      description: "Advanced features for serious students",
      monthlyPrice: 19,
      annualPrice: 15,
      popular: true,
      color: "border-primary shadow-learning",
      buttonVariant: "default" as const,
      features: [
        "Unlimited document uploads",
        "Advanced AI assessments",
        "Personalized study plans",
        "Detailed analytics & insights",
        "Priority support",
        "Collaborative study groups",
        "Custom assessment creation",
        "Performance predictions",
        "Study streak tracking"
      ],
      limits: {
        documents: "Unlimited",
        assessments: "Unlimited",
        storage: "10GB"
      }
    },
    {
      name: "Institution",
      description: "Comprehensive solution for schools & universities",
      monthlyPrice: 99,
      annualPrice: 79,
      popular: false,
      color: "border-learning-accent",
      buttonVariant: "outline" as const,
      features: [
        "Everything in Scholar",
        "Multi-user management",
        "Institutional dashboard", 
        "Custom branding",
        "API access",
        "Dedicated support manager",
        "Advanced security & compliance",
        "Bulk user import",
        "Custom integrations",
        "White-label solution"
      ],
      limits: {
        documents: "Unlimited",
        assessments: "Unlimited", 
        storage: "Unlimited",
        users: "Up to 1000"
      }
    }
  ];

  const enterpriseFeatures = [
    "Custom AI model training",
    "On-premise deployment",
    "24/7 dedicated support",
    "Custom feature development",
    "Advanced security audits",
    "Unlimited users & storage"
  ];

  const calculatePrice = (monthlyPrice: number) => {
    if (monthlyPrice === 0) return 0;
    return isAnnual ? monthlyPrice * 0.8 : monthlyPrice;
  };

  const calculateSavings = (monthlyPrice: number) => {
    if (monthlyPrice === 0) return 0;
    return Math.round((monthlyPrice * 12 - (monthlyPrice * 0.8 * 12)) * 100) / 100;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Choose Your Learning Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            From individual students to entire institutions, we have a plan that scales with your needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Label htmlFor="billing-toggle" className={!isAnnual ? "font-semibold" : ""}>
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <Label htmlFor="billing-toggle" className={isAnnual ? "font-semibold" : ""}>
              Annual
            </Label>
            {isAnnual && (
              <Badge className="bg-success text-success-foreground animate-pulse">
                Save 20%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:scale-105 ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-6 py-1">
                    <Star className="mr-1 h-3 w-3" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-4">
                  {plan.name === "Student" && (
                    <div className="p-3 bg-muted rounded-full">
                      <Brain className="h-8 w-8 text-muted-foreground" />
                    </div>
                  )}
                  {plan.name === "Scholar" && (
                    <div className="p-3 gradient-learning rounded-full">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                  )}
                  {plan.name === "Institution" && (
                    <div className="p-3 gradient-accent rounded-full">
                      <Crown className="h-8 w-8 text-white" />
                    </div>
                  )}
                </div>
                
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
                
                <div className="py-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">
                      ${calculatePrice(plan.monthlyPrice)}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      /{isAnnual ? 'month' : 'month'}
                    </span>
                  </div>
                  {isAnnual && plan.monthlyPrice > 0 && (
                    <p className="text-sm text-success">
                      Save ${calculateSavings(plan.monthlyPrice)} per year
                    </p>
                  )}
                  {!isAnnual && plan.monthlyPrice > 0 && (
                    <p className="text-sm text-muted-foreground">
                      Billed monthly
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <Button 
                  variant={plan.buttonVariant}
                  size="lg" 
                  className={`w-full mb-6 ${plan.popular ? 'gradient-learning border-0' : ''}`}
                >
                  {plan.monthlyPrice === 0 ? 'Get Started Free' : 'Start Free Trial'}
                </Button>

                {/* Usage Limits */}
                <div className="bg-accent rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-sm mb-2">Usage Limits</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Documents:</span>
                      <span className="font-medium">{plan.limits.documents}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Assessments:</span>
                      <span className="font-medium">{plan.limits.assessments}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Storage:</span>
                      <span className="font-medium">{plan.limits.storage}</span>
                    </div>
                    {plan.limits.users && (
                      <div className="flex justify-between">
                        <span>Users:</span>
                        <span className="font-medium">{plan.limits.users}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Check className="h-4 w-4 text-success" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise Section */}
        <Card className="shadow-learning gradient-hero text-white">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Crown className="mr-3 h-8 w-8" />
                  Enterprise Solution
                </h3>
                <p className="text-white/90 mb-6">
                  Need a custom solution? We work with large institutions to create 
                  tailored learning platforms that meet your specific requirements.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {enterpriseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-white" />
                      <span className="text-sm text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Contact Sales
                </Button>
              </div>
              <div className="text-center">
                <div className="p-8 bg-white/10 rounded-2xl backdrop-blur">
                  <Infinity className="h-16 w-16 text-white mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Unlimited Everything</h4>
                  <p className="text-white/90">
                    Custom pricing based on your organization's size and needs
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Comparison */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Feature Comparison</h3>
          <Card className="shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-accent">
                  <tr>
                    <th className="text-left p-4 font-semibold">Features</th>
                    <th className="text-center p-4 font-semibold">Student</th>
                    <th className="text-center p-4 font-semibold">Scholar</th>
                    <th className="text-center p-4 font-semibold">Institution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { feature: "Document Upload", student: "5/month", scholar: "Unlimited", institution: "Unlimited" },
                    { feature: "AI Assessments", student: "Basic", scholar: "Advanced", institution: "Advanced" },
                    { feature: "Analytics Dashboard", student: "Basic", scholar: "Advanced", institution: "Advanced" },
                    { feature: "Study Groups", student: false, scholar: true, institution: true },
                    { feature: "Custom Branding", student: false, scholar: false, institution: true },
                    { feature: "API Access", student: false, scholar: false, institution: true },
                    { feature: "Priority Support", student: false, scholar: true, institution: true },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-accent/50">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center">
                        {typeof row.student === 'boolean' ? (
                          row.student ? <Check className="h-4 w-4 text-success mx-auto" /> : <span className="text-muted-foreground">—</span>
                        ) : row.student}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.scholar === 'boolean' ? (
                          row.scholar ? <Check className="h-4 w-4 text-success mx-auto" /> : <span className="text-muted-foreground">—</span>
                        ) : row.scholar}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.institution === 'boolean' ? (
                          row.institution ? <Check className="h-4 w-4 text-success mx-auto" /> : <span className="text-muted-foreground">—</span>
                        ) : row.institution}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* FAQ Teaser */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Have questions? Check out our{" "}
            <Button variant="link" className="p-0 h-auto text-primary">
              frequently asked questions
            </Button>
            {" "}or{" "}
            <Button variant="link" className="p-0 h-auto text-primary">
              contact our support team
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;