import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  X, 
  Brain,
  Sparkles,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  type: string;
  status: 'uploading' | 'processing' | 'completed' | 'error';
  progress: number;
  extractedConcepts?: string[];
  generatedQuestions?: number;
}

const InteractiveUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    processFiles(files);
  };

  const processFiles = (files: File[]) => {
    files.forEach(file => {
      const newFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        type: file.type.includes('pdf') ? 'PDF' : file.type.includes('text') ? 'Text' : 'Document',
        status: 'uploading',
        progress: 0
      };

      setUploadedFiles(prev => [...prev, newFile]);

      // Simulate upload and processing
      simulateFileProcessing(newFile.id);
    });
  };

  const simulateFileProcessing = async (fileId: string) => {
    // Upload simulation
    for (let progress = 0; progress <= 100; progress += 10) {
      await new Promise(resolve => setTimeout(resolve, 150));
      setUploadedFiles(prev => prev.map(file => 
        file.id === fileId ? { ...file, progress } : file
      ));
    }

    // Processing phase
    setUploadedFiles(prev => prev.map(file => 
      file.id === fileId ? { ...file, status: 'processing', progress: 0 } : file
    ));

    for (let progress = 0; progress <= 100; progress += 20) {
      await new Promise(resolve => setTimeout(resolve, 300));
      setUploadedFiles(prev => prev.map(file => 
        file.id === fileId ? { ...file, progress } : file
      ));
    }

    // Completion with extracted data
    setUploadedFiles(prev => prev.map(file => 
      file.id === fileId ? { 
        ...file, 
        status: 'completed',
        progress: 100,
        extractedConcepts: ['Machine Learning', 'Neural Networks', 'Data Science', 'Statistics'],
        generatedQuestions: Math.floor(Math.random() * 20) + 10
      } : file
    ));
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Brain className="h-4 w-4 text-primary animate-pulse" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'uploading':
        return 'Uploading...';
      case 'processing':
        return 'AI Processing...';
      case 'completed':
        return 'Ready for Assessment';
      case 'error':
        return 'Processing Failed';
      default:
        return status;
    }
  };

  return (
    <div className="space-y-8">
      {/* Upload Area */}
      <Card className="shadow-learning">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Upload className="mr-2 h-5 w-5" />
            Upload Educational Content
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={cn(
              "relative border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300",
              isDragging 
                ? "border-primary bg-primary/5 scale-105" 
                : "border-border hover:border-primary hover:bg-accent"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              multiple
              accept=".pdf,.txt,.docx,.md"
              onChange={handleFileSelect}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            
            <div className={cn("transition-all duration-300", isDragging && "animate-bounce")}>
              <Upload className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">
                {isDragging ? "Drop files here!" : "Drag & drop your educational materials"}
              </h3>
              <p className="text-muted-foreground mb-4">
                Support for PDF, DOCX, TXT, MD files up to 20MB each
              </p>
              <Button className="gradient-learning border-0">
                <FileText className="mr-2 h-4 w-4" />
                Choose Files
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* File Processing List */}
      {uploadedFiles.length > 0 && (
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <Brain className="mr-2 h-5 w-5" />
                Processing Queue
              </span>
              <Badge variant="outline">{uploadedFiles.length} files</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(file.status)}
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {file.size} • {file.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={file.status === 'completed' ? 'default' : 'secondary'}>
                        {getStatusText(file.status)}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(file.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {(file.status === 'uploading' || file.status === 'processing') && (
                    <Progress value={file.progress} className="w-full" />
                  )}

                  {file.status === 'completed' && file.extractedConcepts && (
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Sparkles className="mr-1 h-3 w-3" />
                        Extracted Concepts:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {file.extractedConcepts.map((concept, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {concept}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-success">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Generated {file.generatedQuestions} assessment questions
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {uploadedFiles.some(f => f.status === 'completed') && (
              <div className="mt-6 flex gap-3">
                <Button className="gradient-learning border-0 flex-1">
                  <Brain className="mr-2 h-4 w-4" />
                  Create Assessment
                </Button>
                <Button variant="outline" className="flex-1">
                  <Clock className="mr-2 h-4 w-4" />
                  Schedule Study Session
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* AI Processing Info */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-3">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium mb-2">Content Analysis</h4>
            <p className="text-sm text-muted-foreground">
              AI extracts key concepts, topics, and learning objectives from your documents
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="p-3 bg-success/10 rounded-full w-fit mx-auto mb-3">
              <Sparkles className="h-6 w-6 text-success" />
            </div>
            <h4 className="font-medium mb-2">Question Generation</h4>
            <p className="text-sm text-muted-foreground">
              Automatically creates multiple choice, short answer, and essay questions
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="p-3 bg-learning-accent/10 rounded-full w-fit mx-auto mb-3">
              <CheckCircle className="h-6 w-6 text-learning-accent" />
            </div>
            <h4 className="font-medium mb-2">Adaptive Difficulty</h4>
            <p className="text-sm text-muted-foreground">
              Questions adjust to your performance and learning progress
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveUpload;