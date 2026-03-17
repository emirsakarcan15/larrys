import { useState } from "react";

const reviews = [
  { name: "Ahmet Y.", text: "İstanbul'un en iyi sosislisi burada! Sos çeşitleri muhteşem.", rating: 5 },
  { name: "Elif K.", text: "Çocuklarla geldik, harika bir deneyimdi. Patates kızartması da çok lezzetli.", rating: 5 },
  { name: "Mehmet D.", text: "Larry's Classic'i mutlaka deneyin, bağımlılık yapıyor!", rating: 4 },
  { name: "Zeynep A.", text: "Mekan çok samimi ve personel çok ilgili. Kesinlikle tekrar geleceğiz.", rating: 5 },
];

const FeedbackSection = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSubmitted(true);
    setName("");
    setMessage("");
    setRating(5);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="feedback" className="py-20 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-display text-center tracking-wider mb-2">GERİ BİLDİRİM</h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-12 rounded-full" />

        {/* Existing Reviews */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-background rounded-xl p-6 shadow-sm border border-border"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg
                    key={s}
                    className={`w-5 h-5 ${s < review.rating ? "text-secondary" : "text-muted"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-foreground/80 mb-3 italic">"{review.text}"</p>
              <p className="font-display text-lg tracking-wide text-primary">{review.name}</p>
            </div>
          ))}
        </div>

        {/* Feedback Form */}
        <div className="max-w-lg mx-auto bg-background rounded-xl p-8 shadow-sm border border-border">
          <h3 className="text-2xl font-display tracking-wider text-center mb-6">YORUMUNUZU PAYLAŞIN</h3>
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-xl font-display text-primary tracking-wide">Teşekkürler!</p>
              <p className="font-body text-muted-foreground mt-2">Geri bildiriminiz için teşekkür ederiz.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-body font-semibold text-foreground mb-1 text-sm">İsim</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value.slice(0, 100))}
                  required
                  maxLength={100}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Adınız"
                />
              </div>
              <div>
                <label className="block font-body font-semibold text-foreground mb-1 text-sm">Puan</label>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setRating(s + 1)}
                      className="focus:outline-none"
                    >
                      <svg
                        className={`w-7 h-7 transition-colors ${s < rating ? "text-secondary" : "text-muted"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-body font-semibold text-foreground mb-1 text-sm">Yorumunuz</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value.slice(0, 500))}
                  required
                  maxLength={500}
                  rows={3}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Deneyiminizi paylaşın..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-display text-lg tracking-wider py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                GÖNDER
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
