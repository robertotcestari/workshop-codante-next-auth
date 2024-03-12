import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { ModeToggle } from '@/components/ui/mode-toggle';

export const metadata: Metadata = {
  title: 'Next Auth - Workshop',
  description: 'Workshop do Codante.io sobre autenticação no Next.js',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased  relative',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute top-5 right-5">
            <ModeToggle />
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
