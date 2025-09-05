"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="text-8xl font-bold text-muted-foreground mb-4">404</div>

        <h1 className="text-2xl font-bold text-foreground mb-4">
          Страница не найдена
        </h1>

        <p className="text-muted-foreground mb-8">
          Извините, но запрашиваемая страница не существует или была перемещена.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" className="w-full sm:w-auto">
              <Home className="w-4 h-4 mr-2" />
              На главную
            </Button>
          </Link>

          <Button
            variant="secondary"
            className="w-full sm:w-auto"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>
        </div>
      </div>
    </div>
  );
}
