import { auth } from '@/auth';
import RegisterForm from './_components/register-form';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect('/');

  return <RegisterForm />;
}
