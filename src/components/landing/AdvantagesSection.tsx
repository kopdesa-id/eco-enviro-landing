import { Layers, Scale, UserCheck, Heart } from "lucide-react";

const advantages = [
  {
    icon: Layers,
    title: "Pendekatan Terintegrasi",
    description: "Layanan menyeluruh dari perencanaan hingga pendampingan implementasi.",
  },
  {
    icon: Scale,
    title: "Berbasis Kepatuhan dan Strategi Bisnis",
    description: "Solusi lingkungan yang tidak hanya patuh regulasi, tetapi juga mendukung pengembangan usaha.",
  },
  {
    icon: UserCheck,
    title: "Tim Profesional",
    description: "Didukung oleh tim kerja yang berpengalaman, enerjik, dan adaptif terhadap perubahan regulasi dan industri.",
  },
  {
    icon: Heart,
    title: "Customer-Oriented Solution",
    description: "Setiap layanan dirancang sesuai karakteristik dan kebutuhan spesifik pelanggan.",
  },
];

const AdvantagesSection = () => {
  return (
    <section id="keunggulan" className="section-padding section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Keunggulan Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mengapa memilih Eco Enviro Indonesia sebagai mitra bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <advantage.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {advantage.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
