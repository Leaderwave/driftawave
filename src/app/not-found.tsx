
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-brand-light text-center px-4">
      <h1 className="text-9xl font-brush text-brand-coral mb-4">404</h1>
      <h2 className="text-3xl font-bold font-brush text-brand-ink mb-6">Page Not Found</h2>
      <p className="text-muted-foreground font-serif text-lg max-w-md mb-8">
        Oops! It seems you've drifted a bit too far. The page you are looking for doesn't exist or has been moved.
      </p>
      
      <div className="flex gap-4">
        <Button asChild size="lg" className="bg-brand-coral hover:bg-brand-coral/90">
          <Link href="/">Return Home</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  );
}

