const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-display text-foreground mb-2 tracking-wider">
          HİKAYEMİZ
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />
        <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto mb-8">
          Larry amca, 1987 yılında küçük bir tezgahla başladı. "İyi malzeme, basit tarif, bol sevgi" 
          felsefesiyle hazırladığı sosisli sandviçler kısa sürede şehrin favorisi oldu. Bugün aynı 
          tutku ve kaliteyle sizlere hizmet vermeye devam ediyoruz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-display text-primary mb-2">37+</span>
            <span className="text-muted-foreground font-body">Yıllık Deneyim</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-display text-primary mb-2">1M+</span>
            <span className="text-muted-foreground font-body">Mutlu Müşteri</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-display text-primary mb-2">%100</span>
            <span className="text-muted-foreground font-body">Taze Malzeme</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
