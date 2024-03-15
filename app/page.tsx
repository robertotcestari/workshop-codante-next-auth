import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="container p-20 mx-auto text-center">
      <header>
        <h1 className="font-extrabold text-slate-600 dark:text-transparent text-7xl dark:bg-gradient-to-r dark:from-slate-50 dark:via-slate-400 dark:to-slate-200 bg-clip-text">
          Workshop Auth.js
        </h1>
        <hr className="w-1/4 mx-auto mt-5 mb-16" />
      </header>

      <section className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/dashboard"
          className={cn(
            buttonVariants({ variant: 'outline', size: 'lg' }),
            'font-bold'
          )}
        >
          Dashboard
        </Link>
        <Link href="/api/auth/signin" className={cn(buttonVariants())}>
          Login Simples
        </Link>
        <Link href="/login-server" className={cn(buttonVariants())}>
          Login - Server Components
        </Link>
        <Link href="/login-client" className={cn(buttonVariants())}>
          Login - Client Components
        </Link>
        <Link
          href="/login-github"
          className={cn(buttonVariants(), 'flex items-center gap-3')}
        >
          <SiGithub className="w-4 h-4" />
          Login com Github
        </Link>
        <Link href="/login-email" className={cn(buttonVariants(), 'flex items-center gap-3')}>
          <Mail className='w-4 h-4' />
          Login com Email
        </Link>
      </section>
    </main>
  );
}
