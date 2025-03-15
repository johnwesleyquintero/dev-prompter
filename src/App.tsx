import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'

function App() {
  const [input, setInput] = useState('')

  const handleAnalyze = () => {
    if (!input.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter some log content to analyze',
        variant: 'destructive',
      })
      return
    }

    // TODO: Implement log analysis logic
    toast({
      title: 'Analysis Complete',
      description: 'Log analysis results will appear here',
    })
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="container mx-auto">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Dev Prompter</CardTitle>
            <CardDescription>
              Paste your build logs below for AI-powered analysis and recommendations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Paste your logs here..."
              className="min-h-[200px]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button
              variant="secondary"
              onClick={() => setInput('')}
            >
              Clear
            </Button>
            <Button
              onClick={handleAnalyze}
            >
              Analyze
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Toaster />
    </div>
  )
}

export default App