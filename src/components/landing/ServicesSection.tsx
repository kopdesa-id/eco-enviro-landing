import { FileText, Users, GraduationCap, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "Konsultansi dan Dokumen Lingkungan",
    description: "Penyusunan dokumen perencanaan dan perizinan berbasis risiko",
    items: [
      "Penyusunan AMDAL",
      "Penyusunan UKL-UPL",
      "Dokumen Perencanaan Lingkungan",
      "Persetujuan Teknis (Pertek)",
      "Dokumen pendukung perizinan",
      "Penyusunan & Sertifikasi PBG dan SLF",
    ],
  },
  {
    icon: Users,
    title: "Jasa Pendampingan dan Implementasi",
    description: "Pendampingan komprehensif untuk pemenuhan komitmen lingkungan",
    items: [
      "Pendampingan CSR / TJSL",
      "Program Community Development",
      "Pendampingan komitmen lingkungan",
      "Monitoring dan evaluasi kinerja",
    ],
  },
  {
    icon: GraduationCap,
    title: "Pendidikan dan Pelatihan Lingkungan",
    description: "Peningkatan kapasitas SDM dalam pengelolaan lingkungan",
    items: [
      "Pelatihan untuk industri dan institusi",
      "Pelatihan kepatuhan regulasi",
      "Peningkatan kapasitas SDM",
      "Workshop pengelolaan lingkungan",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="layanan" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 mb-4">
            <span className="text-sm text-primary font-medium">Layanan Kami</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ruang Lingkup Layanan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Layanan lingkungan komprehensif dari perencanaan hingga implementasi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-hover group border-2 hover:border-primary/30 transition-all"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
