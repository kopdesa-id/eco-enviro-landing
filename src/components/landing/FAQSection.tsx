import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Apa itu AMDAL dan kapan diperlukan?",
    answer: "AMDAL (Analisis Mengenai Dampak Lingkungan) adalah kajian mengenai dampak penting suatu usaha atau kegiatan yang direncanakan pada lingkungan hidup. AMDAL diperlukan untuk kegiatan yang berpotensi menimbulkan dampak penting terhadap lingkungan sesuai dengan kriteria yang ditetapkan dalam peraturan perundang-undangan.",
  },
  {
    question: "Berapa lama proses penyusunan UKL-UPL?",
    answer: "Proses penyusunan UKL-UPL (Upaya Pengelolaan Lingkungan - Upaya Pemantauan Lingkungan) umumnya memakan waktu 2-4 minggu, tergantung pada kompleksitas kegiatan dan kelengkapan data yang tersedia. Kami akan membantu Anda mempercepat proses ini dengan pendampingan yang komprehensif.",
  },
  {
    question: "Apa saja layanan pendampingan CSR yang tersedia?",
    answer: "Layanan pendampingan CSR kami meliputi: identifikasi stakeholder, penyusunan program CSR, implementasi program community development, monitoring dan evaluasi program, serta pelaporan kegiatan CSR sesuai dengan regulasi yang berlaku.",
  },
  {
    question: "Bagaimana cara memulai konsultasi dengan Eco Enviro Indonesia?",
    answer: "Anda dapat memulai konsultasi dengan menghubungi kami melalui form kontak di website ini, WhatsApp, atau email. Tim kami akan merespons dalam 1x24 jam untuk menjadwalkan diskusi awal mengenai kebutuhan Anda.",
  },
  {
    question: "Apakah ada pelatihan untuk karyawan perusahaan?",
    answer: "Ya, kami menyediakan berbagai program pelatihan lingkungan yang dapat disesuaikan dengan kebutuhan perusahaan Anda, meliputi: pelatihan kepatuhan regulasi, pengelolaan limbah, sistem manajemen lingkungan, dan peningkatan kapasitas SDM di bidang lingkungan.",
  },
  {
    question: "Sektor industri apa saja yang dilayani?",
    answer: "Eco Enviro Indonesia melayani berbagai sektor industri termasuk pertambangan, manufaktur, agribisnis, energi, infrastruktur, properti, dan sektor lainnya yang memerlukan layanan konsultansi dan jasa lingkungan.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 mb-4">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
