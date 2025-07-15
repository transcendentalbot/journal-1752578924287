// app/auth/signin/page.tsx
import AuthForm from '@/components/AuthForm';

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Sign In</h1>
        <AuthForm mode="signin" />
      </div>
    </div>
  );
}