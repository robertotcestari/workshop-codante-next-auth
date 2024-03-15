'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserIcon } from '../_components/user-icon';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function RegisterForm() {
  return (
    <>
      <Card className="mx-auto max-w-96">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2">
            <UserIcon className="w-6 h-6" />
            Cadastre-se
          </CardTitle>
          <CardDescription>Crie uma conta gratuitamente</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="text-left ">
            <div className="space-y-6">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input
                  name="name"
                  type="name"
                  id="name"
                  placeholder="Fulano de Tal"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="email@exemplo.com"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  placeholder="********"
                />
              </div>
            </div>
            <Button size={'lg'} type="submit" className="w-full mt-10 ">
              Registrar
            </Button>
          </form>
        </CardContent>
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
    </>
  );
}
