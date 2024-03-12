'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginForm() {
  return (
    <form className="text-left ">
      <div className="space-y-6">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input name="email" type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Senha</Label>
          <Input
            name="password"
            type="password"
            id="password"
            placeholder="password"
          />
        </div>
      </div>
      <Button size={'lg'} type="submit" className="w-full mt-10 ">
        Login
      </Button>
    </form>
  );
}
