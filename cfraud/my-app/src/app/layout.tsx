import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton,ClerkLoaded,ClerkLoading } from '@clerk/nextjs'
import './globals.css';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
          <div className='mx-36 text-2xl'>
            <ClerkLoading>
              <div className='flex flex-col items-center text-center mt-32'>Loading..</div>
            </ClerkLoading>
          </div>
          </header>
          <main>
                <ClerkLoaded>
                <Navbar/>
                {children}
                </ClerkLoaded>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}