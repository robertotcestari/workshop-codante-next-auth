'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import githubLogin from '../_actions/github-login';
import { SiGithub } from '@icons-pack/react-simple-icons';

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-96">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Entre com seu Github</CardDescription>
      </CardHeader>
      <CardContent>
        {' '}
        <form className="text-left " action={githubLogin}>
          <Button
            size={'lg'}
            type="submit"
            className="w-full mt-10 flex items-center gap-3"
          >
            <SiGithub className="w-4 h-4" />
            Login com Github
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
