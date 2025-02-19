import { Button } from "@/components/ui/button"

export default function MainContent() {
  return (
    <div className="flex-1 p-8">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">Developer Tools Documentation</h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Everything you need to build amazing applications
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              View on GitHub
            </Button>
          </div>
        </section>

        {/* Documentation Content */}
        <section className="prose prose-gray dark:prose-invert max-w-none">
          <h2>Introduction</h2>
          <p>
            Welcome to our comprehensive developer tools documentation. This guide
            will help you understand and implement our tools effectively in your
            projects.
          </p>

          <h3>Quick Start</h3>
          <p>
            Get up and running quickly with our developer tools. Follow these
            simple steps to integrate our solutions into your workflow.
          </p>

          <div className="my-6 rounded-lg bg-muted p-4">
            <pre className="text-sm">
              <code>{`npm install @dev-tools/core
# or
yarn add @dev-tools/core`}</code>
            </pre>
          </div>

          <h3>Key Features</h3>
          <ul>
            <li>Easy integration with existing projects</li>
            <li>Comprehensive API documentation</li>
            <li>Performance optimization tools</li>
            <li>Debug utilities</li>
          </ul>

          <h3>Example Usage</h3>
          <div className="my-6 rounded-lg bg-muted p-4">
            <pre className="text-sm">
              <code>{`import { DevTools } from '@dev-tools/core'

const tools = new DevTools({
  debug: true,
  environment: 'development'
})

tools.initialize()`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}