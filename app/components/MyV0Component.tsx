/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EK8CUYHCrpy
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="w-full flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">v0 Motivational Quotes</h1>
      <Button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Quote</Button>
      <div className="p-4 max-w-xl mx-auto bg-white rounded-xl shadow-md space-x-2 text-center dark:bg-gray-900">
        <p className="text-gray-500 dark:text-gray-300">Click the button to display a motivational quote.</p>
      </div>
    </section>
  )
}
