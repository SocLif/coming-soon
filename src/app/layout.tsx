import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import "../globals.css";

export const metadata: Metadata = {
  title:
    "Soclif.com | Unlock Revolutionary Connections with soclif | Your Hub for Seamless Social Networking",
  description:
    "Discover soclif, where influencers, businesses, and users converge for a revolutionary social networking experience. Seamlessly connect, collaborate, and redefine your online presence. Join soclif for boundless possibilities in the world of social media interactions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="container-min-h-fill flex flex-col py-10 px-4 gap-10 justify-center align-middle items-center">
            <div className="p-2 w-auto absolute top-0 right-0">
              <ThemeModeToggle />
            </div>
            <section className="flex justify-center align-middle items-center">
              {children}
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
