import Games from "@/components/layout/games/Games";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Next Play",
  description: "Next Play - Free Games platform developed by Daniel Cikora",
  category: "WebApp - Next.js, TypeScript, Zustand, Tailwind.css",
  authors: [
    {
      name: "Daniel Cikora",
      url: "https://danielcikora.netlify.app",
    },
  ],
  icons: ["/icons/PlayIcon.ico"],
  keywords: [
    "Free Games",
    "Next Play",
    "Next.js App",
    "Indie Dev",
    "Frontend Project",
    "Zustand",
    "Tailwind CSS",
    "TypeScript",
    "Game Browser",
  ],
  generator: "Next.js",
  applicationName: "Next Play",
  creator: "Daniel Cikora",
  publisher: "Daniel Cikora",
};
export default function Home() {
  return (
    <main className='games-page'>
      <div className='wrapper flex md:flex-row flex-col md:items-start items-center'>
        <Sidebar />
        <Games />
      </div>
    </main>
  );
}
