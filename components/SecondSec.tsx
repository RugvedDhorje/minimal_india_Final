import About from "./About";
import CircularImageCarousel from "./CircleCarousel";
import { Design } from "./Design";
import FilmSection from "./FilmSection";
import HomePage from "./HomePage";
import Services from "./Services";
import { MacbookScroll } from "./ui/macbook-scroll";

export function SecondSec() {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <div className="h-screen snap-start">
        <HomePage />
      </div>
      <div className="h-screen snap-start">
        <Services />
      </div>
      <div className="h-screen snap-start">
        <Design />
      </div>
      <div className="h-screen snap-start">
        <MacbookScroll />
      </div>
      <div className="h-screen snap-start">
        <CircularImageCarousel />
      </div>
      <div className="h-screen snap-start">
        <FilmSection />
      </div>
      <div className="h-screen snap-start">
        <About />
      </div>
    </div>
  );
}
