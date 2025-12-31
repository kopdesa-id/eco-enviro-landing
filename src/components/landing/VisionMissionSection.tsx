import { Eye, Target, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const missions = [
  "Menyediakan solusi alternatif yang tepat guna pada aspek teknis dan strategis lingkungan.",
  "Memberikan layanan terbaik yang disesuaikan dengan kebutuhan pelanggan.",
  "Mendukung pelaku usaha dalam mencapai kepatuhan regulasi dan keunggulan kompetitif.",
  "Mengembangkan ekosistem bisnis yang mendorong keberlanjutan lingkungan dan pertumbuhan ekonomi.",
];

const VisionMissionSection = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visi & Misi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Komitmen kami dalam mewujudkan bisnis yang berkelanjutan dan ramah lingkungan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <Card className="card-hover border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Visi</h3>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi mitra strategis pelaku bisnis dalam menghadapi perubahan
                industri yang dinamis melalui solusi jasa lingkungan yang
                profesional, inovatif, dan berkelanjutan.
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="card-hover border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Misi</h3>
              <ul className="space-y-3">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{mission}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
