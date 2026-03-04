import heroImg from "@/assets/hero-hotdog.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Larry's lezzetli sosisli sandviç"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-display tracking-wider text-primary-foreground mb-4 drop-shadow-lg">
          LARRY'S
        </h1>
        <p className="text-xl md:text-2xl font-body text-primary-foreground/90 mb-2 tracking-wide">
          HOT DOG SHOP
        </p>
        <div className="w-24 h-1 bg-secondary mx-auto my-6 rounded-full" />
        <p className="text-lg md:text-xl font-body text-primary-foreground/80 mb-8">
          1987'den beri şehrin en lezzetli sosisli sandviçleri
        </p>
        <a href="#menu">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-display text-xl px-10 py-6 tracking-wider">
            MENÜYE GÖZ AT
          </Button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
