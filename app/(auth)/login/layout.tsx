export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container p-20 mx-auto text-center">
      {children}
    </main>
  );
}
