import Navbar from "@/components/Navbar";
import FeedbackSection from "@/components/FeedbackSection";
import FooterSection from "@/components/FooterSection";

const Comment = () => {
  return (
    <section id="yorum" className="min-h-screen bg-background">
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-16">
          <FeedbackSection />
        </div>
        <FooterSection />
      </div>
    </section>
  );
};

export default Comment;