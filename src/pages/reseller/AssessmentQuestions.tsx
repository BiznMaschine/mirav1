import { useState } from 'react';
import { Button, Card, ProgressBar } from '@mira/ui';
import { AuthLayout } from '@mira/ui';

interface AssessmentQuestionsProps {
  onComplete: () => void;
  onBack: () => void;
}

const questions = [
  {
    id: 1,
    question: 'How would you describe your experience with network marketing?',
    type: 'single',
    options: [
      "I'm completely new to network marketing",
      "I've tried it before but didn't have much success",
      "I have some experience and moderate success",
      "I'm an experienced network marketer with a track record",
    ],
  },
  {
    id: 2,
    question: 'What is your primary motivation for joining MIRA?',
    type: 'single',
    options: [
      'Earn additional income',
      'Support animal welfare causes',
      'Build a business and team',
      'All of the above',
    ],
  },
  {
    id: 3,
    question: 'How many hours per week can you dedicate to MIRA?',
    type: 'single',
    options: [
      'Less than 5 hours',
      '5-10 hours',
      '10-20 hours',
      'More than 20 hours',
    ],
  },
  {
    id: 4,
    question: 'Do you have experience with social media marketing?',
    type: 'single',
    options: [
      'No experience',
      'Basic (personal accounts)',
      'Intermediate (business accounts)',
      'Advanced (multiple platforms, content creation)',
    ],
  },
  {
    id: 5,
    question: 'What are your goals for the first 3 months?',
    type: 'multiple',
    options: [
      'Make my first sale',
      'Recruit 3-5 team members',
      'Earn €500+ in commissions',
      'Reach Bronze rank',
      'Build a sustainable income stream',
    ],
  },
];

// Mock answers for quick testing
const mockAnswers: Record<number, string | string[]> = {
  1: "I have some experience and moderate success",
  2: "All of the above",
  3: "10-20 hours",
  4: "Intermediate (business accounts)",
  5: ["Make my first sale", "Reach Bronze rank", "Build a sustainable income stream"],
};

export default function AssessmentQuestions({ onComplete, onBack }: AssessmentQuestionsProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>(mockAnswers);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    const question = questions[currentQuestion];
    if (question.type === 'multiple') {
      const currentAnswers = (answers[question.id] as string[]) || [];
      const newAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter((a) => a !== value)
        : [...currentAnswers, value];
      setAnswers({ ...answers, [question.id]: newAnswers });
    } else {
      setAnswers({ ...answers, [question.id]: value });
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentQ = questions[currentQuestion];
  const currentAnswer = answers[currentQ.id];

  return (
    <AuthLayout>
      <div className="w-full max-w-3xl">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-slate-900">Partner Assessment</h1>
            <span className="text-sm text-slate-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <ProgressBar value={progress} />
        </div>

        <Card>
          <div className="p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">{currentQ.question}</h2>

            <div className="space-y-3">
              {currentQ.options.map((option) => {
                const isSelected =
                  currentQ.type === 'multiple'
                    ? (currentAnswer as string[])?.includes(option)
                    : currentAnswer === option;

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                      isSelected
                        ? 'border-forest-600 bg-forest-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {currentQ.type === 'multiple' ? (
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleAnswer(option)}
                          className="rounded border-slate-300"
                        />
                      ) : (
                        <input
                          type="radio"
                          checked={isSelected}
                          onChange={() => handleAnswer(option)}
                          name={`question-${currentQ.id}`}
                          className="border-slate-300"
                        />
                      )}
                      <span className="text-slate-900">{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex gap-4 mt-8">
              <Button
                variant="secondary"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex-1"
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!currentAnswer || (Array.isArray(currentAnswer) && currentAnswer.length === 0)}
                className="flex-1"
              >
                {currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </AuthLayout>
  );
}
