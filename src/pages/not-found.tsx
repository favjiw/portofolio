import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center glass-card p-12 rounded-3xl max-w-md mx-4">
        <h1 className="text-8xl font-display font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="inline-block">
          <Button size="lg" className="w-full">
            Return Home
          </Button>
        </a>
      </div>
    </div>
  );
}
