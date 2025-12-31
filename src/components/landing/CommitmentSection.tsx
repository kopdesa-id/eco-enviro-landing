import { CheckCircle2 } from "lucide-react";

const commitments = [
  "Memberikan solusi yang aplikatif dan berorientasi kebutuhan pelanggan",
  "Membantu pelaku usaha dalam menghadapi tantangan kepatuhan regulasi lingkungan",
  "Menyelaraskan aspek teknis, strategis, dan keberlanjutan bisnis",
  "Menjadi bagian dari transformasi industri menuju praktik usaha yang bertanggung jawab dan berkelanjutan",
];

const CommitmentSection = () => {
  return (
    <section className="section-padding hero-gradient text-primary-foreground">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Komitmen Kami
          </h2>
          <p className="text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Eco Enviro Indonesia berkomitmen untuk memberikan layanan terbaik bagi pelanggan
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20"
              >
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="text-primary-foreground/90 leading-relaxed">
                  {commitment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
