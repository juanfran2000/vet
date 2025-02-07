import { Hero } from "../components/Hero";
import { HeroDesktop } from "../components/HeroDesktop";
export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="block lg:hidden">
        <Hero />
      </div>
      <div className="hidden lg:block">
        <HeroDesktop />
      </div>
    </main>
  );
}
