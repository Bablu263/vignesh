import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center gap-2 text-sm">
          Made with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> by
          Vigneshwar Pothuraju
        </p>
        <p className="text-xs mt-2 opacity-80">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
