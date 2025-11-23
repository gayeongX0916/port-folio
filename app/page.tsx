import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { AboutSection } from "./components/Sections/AboutSection";
import { BlogSection } from "./components/Sections/BlogSection";
import { ProjectSection } from "./components/Sections/ProjectSection";

export default function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <ProjectSection />
      <AboutSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
