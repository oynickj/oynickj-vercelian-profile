/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3zoEzlkeoBR
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Guestbook</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Please sign in and leave your message</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="visitor-name">Name</Label>
          <Input id="visitor-name" placeholder="Your Name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="visitor-message">Message</Label>
          <Textarea id="visitor-message" placeholder="Your Message" required />
        </div>
        <Button className="w-full transform transition-transform hover:rotate-180 focus:rotate-180" type="submit">
          Submit Entry
        </Button>
      </div>
    </div>
  )
}

