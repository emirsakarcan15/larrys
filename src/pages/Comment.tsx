import Navbar from "@/components/Navbar";
import FeedbackSection from "@/components/FeedbackSection";
import FooterSection from "@/components/FooterSection";

const Comment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <FeedbackSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Comment;