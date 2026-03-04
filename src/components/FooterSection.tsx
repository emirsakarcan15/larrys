const FooterSection = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-display text-center tracking-wider mb-2">İLETİŞİM</h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-10 rounded-full" />
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-display text-xl text-secondary mb-2">ADRES</h3>
            <p className="text-primary-foreground/70 font-body">
              Bağdat Caddesi No: 42<br />
              Kadıköy, İstanbul
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-secondary mb-2">ÇALIŞMA SAATLERİ</h3>
            <p className="text-primary-foreground/70 font-body">
              Pazartesi - Cumartesi<br />
              11:00 - 23:00
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-secondary mb-2">TELEFON</h3>
            <p className="text-primary-foreground/70 font-body">
              (0216) 555 42 87<br />
              info@larrys.com.tr
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/50 font-body text-sm">
            © 2024 Larry's Hot Dog Shop. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
