import { MainNavbar } from "./components/header/MainNavbar"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main lang="en"  className={` mx-auto py-4 font-sans`} style={{ fontFamily: "'Poppins', sans-serif" }}>
      <MainNavbar/>
        {children}
      </main>
    </>
  )
}