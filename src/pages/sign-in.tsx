import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <>
      <section className="min-h-screen bg-fondo flex justify-center items-center">
        <SignIn
          redirectUrl="/dashboard"
          appearance={{
            elements: {
              footerAction: { display: "none" },
            },
          }}
        />
      </section>
    </>
  );
}
