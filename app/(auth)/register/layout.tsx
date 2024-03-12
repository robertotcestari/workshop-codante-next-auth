import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { redirect } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { UserIcon } from './_components/user-icon';

export default async function LoginPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container p-20 mx-auto text-center">
      <Card className="mx-auto max-w-96">
        <CardHeader>
          <CardTitle className='flex items-center justify-center gap-2'>
            <UserIcon className='w-6 h-6' />
            Cadastre-se
          </CardTitle>
          <CardDescription>Crie uma conta gratuitamente</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <Link
            className={cn(
              buttonVariants({ variant: 'link', size: 'sm' }),
              'mt-2 mx-auto'
            )}
            href="/login"
          >
            Já possui conta?
          </Link>
        </CardFooter>
      </Card>
      <Link
        className={cn(buttonVariants({ variant: 'link', size: 'lg' }), 'mt-8')}
        href="/"
      >
        Voltar para Home
      </Link>
    </main>
  );
}
