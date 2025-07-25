export default function PresentationSection() {
  return (
    <section id="presentation" className="min-h-screen bg-gray-50 dark:bg-neutral-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-8">
          Presentation
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-8">
          Learn more about our AI-powered content moderation solution and how it works.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Real-time Detection</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Instantly identify harmful content as it's posted across platforms.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">AI Reasoning</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Advanced pattern matching combined with contextual understanding.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Global Scale</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Deployed worldwide to protect communities across all platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}