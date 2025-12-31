import { Target, TrendingUp, Users, Leaf } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="tentang" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 mb-6">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Tentang Kami</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ekosistem Bisnis Jasa Lingkungan yang{" "}
              <span className="text-gradient">Profesional</span>
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Eco Enviro Indonesia adalah sebuah ekosistem bisnis jasa lingkungan
              yang hadir sebagai mitra strategis bagi pelaku usaha dalam menjawab
              tantangan kepatuhan regulasi dan pengelolaan lingkungan yang semakin
              kompleks.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Kami menyediakan layanan konsultansi dan jasa lingkungan terintegrasi,
              mulai dari penyusunan dokumen perencanaan hingga pendampingan
              implementasi yang berorientasi pada keberlanjutan bisnis.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Target, text: "Pendekatan Profesional" },
                { icon: TrendingUp, text: "Solutif & Adaptif" },
                { icon: Users, text: "Tim Berpengalaman" },
                { icon: Leaf, text: "Berorientasi Keberlanjutan" },
              ].map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Eco Enviro Indonesia
                </h3>
                <p className="text-muted-foreground">
                  Partner for Sustainable Business and Environmental Excellence
                </p>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-card shadow-lg rounded-xl p-4 border border-border">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card shadow-lg rounded-xl p-4 border border-border">
              <div className="text-2xl font-bold text-accent">100+</div>
              <div className="text-sm text-muted-foreground">Proyek Selesai</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
