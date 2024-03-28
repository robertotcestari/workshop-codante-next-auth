'use client';

import { emailLogin } from '../_actions/email-login';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-96">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Entre com seu Email</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={emailLogin} className="text-left ">
          <div className="space-y-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input name="email" type="email" id="email" placeholder="Email" />
            </div>
          </div>
          <Button size={'lg'} type="submit" className=" w-full mt-10">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
