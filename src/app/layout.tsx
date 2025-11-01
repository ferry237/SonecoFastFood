"use client";
import './globals.css'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const metadata = {
  title: 'FastFood',
  description: 'FastFood web application',
  viewport: "width=device-width, initial-scale=1"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    // Vérifie si c’est un vrai rechargement (F5 ou Cmd+R)
    if (performance.navigation.type === 1) {
      router.replace("/"); // Redirige vers la page d'accueil
    }
  }, []);

  return (
    <html lang="fr">
      <body className="relative bg-[var(--color-primary)] w-screen">
        {children}
      </body>
    </html>
  );
}






