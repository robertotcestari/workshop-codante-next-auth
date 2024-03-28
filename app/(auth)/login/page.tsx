import { auth } from '@/auth';
import LoginForm from './_components/login-form';
import { redirect } from 'next/navigation';

export default async function LoginPage() {

  const session = await auth();
  if (session) {
    return redirect('/dashboard');
  }

  return <LoginForm />;
}
