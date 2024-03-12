import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default async function Dashboard() {
  return (
    <main className="container p-20 mx-auto text-center">
      <div>
        <h1 className="font-extrabold text-slate-600 dark:text-transparent text-7xl dark:bg-gradient-to-r dark:from-slate-50 dark:via-slate-400 dark:to-slate-200 bg-clip-text">
          Dashboard
        </h1>
        <h3 className="mt-4 font-bold text-muted-foreground">Boas vindas!</h3>
        <hr className="w-1/4 mx-auto mt-5 mb-16" />

        <section className='flex flex-wrap items-center justify-center gap-3'>
          <form>
            <Button>Logout</Button>
          </form>
          <Link href="/" className={cn(buttonVariants({variant: 'outline'}))}>Home</Link>
        </section>
      </div>
    </main>
  );
}
