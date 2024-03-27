'use server';

import { signIn } from '@/auth';

export default async function githubLogin() {
  try {
    await signIn('github', {
      redirectTo: '/dashboard'
    });
  } catch (e) {
    throw e;
  }
}

