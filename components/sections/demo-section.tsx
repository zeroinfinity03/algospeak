export default function DemoSection() {
  return (
    <section id="demo" className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-8">
          Live Demo
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-8">
          Experience our content moderation AI in action.
        </p>
        <div className="bg-gray-50 dark:bg-neutral-900 p-8 rounded-lg">
          <div className="mb-6">
            <label className="block text-left text-sm font-medium mb-2">
              Test Content Input:
            </label>
            <textarea
              className="w-full p-4 border border-gray-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white"
              rows={4}
              placeholder="Enter content to analyze..."
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Analyze Content
          </button>
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-green-800 dark:text-green-200 font-medium">
              ✓ Content approved - No harmful patterns detected
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}