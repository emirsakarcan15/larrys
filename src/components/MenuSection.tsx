const menuItems = [
  {
    name: "Klasik Larry's",
    description: "Sığır eti sosis, hardal, ketçap ve taze soğan",
    price: "₺85",
    badge: "En Popüler",
  },
  {
    name: "Chicago Dog",
    description: "Sığır eti sosis, turşu, domates, hardal, soğan ve acı biber",
    price: "₺95",
    badge: null,
  },
  {
    name: "Chili Cheese Dog",
    description: "Sığır eti sosis, ev yapımı chili sos ve eritilmiş cheddar",
    price: "₺105",
    badge: "Yeni",
  },
  {
    name: "BBQ Bacon Dog",
    description: "Sığır eti sosis, çıtır bacon, BBQ sos ve coleslaw",
    price: "₺110",
    badge: null,
  },
  {
    name: "Veggie Dog",
    description: "Bitkisel sosis, avokado, domates ve özel sos",
    price: "₺90",
    badge: null,
  },
  {
    name: "Larry's Special",
    description: "Çift sosis, karamelize soğan, jalapeño ve şef özel sosu",
    price: "₺130",
    badge: "Şef Önerisi",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-display text-center text-foreground mb-2 tracking-wider">
          MENÜMÜZ
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        <div className="grid gap-6 md:grid-cols-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-body font-bold text-foreground">
                  {item.name}
                </h3>
                <span className="text-2xl font-display text-primary">
                  {item.price}
                </span>
              </div>
              {item.badge && (
                <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-full mb-2">
                  {item.badge}
                </span>
              )}
              <p className="text-muted-foreground font-body text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
