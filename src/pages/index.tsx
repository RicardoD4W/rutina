import { SignedIn, SignedOut, useClerk } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function IndexPage() {
  const { signOut } = useClerk();

  return (
    <div>
      <header className="header">
        <div>
          <>
            <section className="min-h-screen bg-fondo flex  justify-center items-center">
              <article className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm ">
                <SignedOut>
                  <button
                    type="submit"
                    className="w-full bg-principal text-white py-2 px-4 rounded-md hover:bg-acento focus:outline-none focus:ring focus:bg-acento transition-colors duration-300"
                  >
                    <Link to="/sign-in">Iniciar sesión</Link>
                  </button>
                </SignedOut>
                <SignedIn>
                  <div className="flex flex-col gap-5">
                    <Link to="/dashboard">
                      <button className="w-full  bg-principal text-white py-2 px-4 rounded-md hover:bg-acento focus:outline-none focus:ring focus:bg-acento transition-colors duration-300">
                        Ir a la página principal
                      </button>
                    </Link>

                    <button
                      onClick={() => signOut()}
                      className="w-full flex items-center bg-principal text-white py-2 px-4 rounded-md hover:bg-acento focus:outline-none focus:ring focus:bg-acento transition-colors duration-300"
                    >
                      <span className="w-full text-center">Cerrar sesión</span>
                    </button>
                  </div>
                </SignedIn>
              </article>
            </section>
          </>
        </div>
      </header>
    </div>
  );
}
