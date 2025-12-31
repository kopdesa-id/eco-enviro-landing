import { Users, Award, Briefcase, TrendingUp } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary" />
                  </div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center">
                    <Briefcase className="w-12 h-12 text-accent" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/15 to-accent/15 rounded-2xl flex items-center justify-center">
                    <Award className="w-12 h-12 text-primary" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Tim Kami</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tenaga Ahli & Praktisi{" "}
              <span className="text-gradient">Berpengalaman</span>
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Eco Enviro Indonesia didukung oleh tenaga ahli dan praktisi lingkungan
              yang memiliki pengalaman lintas sektor industri. Dengan semangat
              kolaboratif dan kemampuan adaptasi tinggi, tim kami siap menjadi mitra
              terpercaya dalam menjawab kebutuhan lingkungan bisnis Anda.
            </p>

            <div className="space-y-4">
              {[
                { label: "Pengalaman Lintas Sektor", value: "Multi Industri" },
                { label: "Semangat Kerja", value: "Kolaboratif & Adaptif" },
                { label: "Komitmen", value: "Mitra Terpercaya" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl"
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-semibold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
