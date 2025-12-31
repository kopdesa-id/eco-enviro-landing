import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Ahmad Fauzi",
    position: "Direktur Operasional",
    company: "PT Industri Mandiri",
    content: "Eco Enviro Indonesia sangat membantu kami dalam penyusunan dokumen AMDAL. Prosesnya cepat, profesional, dan hasilnya memuaskan. Sangat direkomendasikan!",
    rating: 5,
  },
  {
    name: "Siti Nurhaliza",
    position: "Manager HSE",
    company: "PT Tambang Sejahtera",
    content: "Pendampingan CSR yang diberikan sangat komprehensif. Tim yang responsif dan selalu memberikan solusi terbaik untuk kebutuhan perusahaan kami.",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    position: "CEO",
    company: "PT Agro Nusantara",
    content: "Pelatihan lingkungan yang diselenggarakan sangat berkualitas. Materi mudah dipahami dan langsung bisa diaplikasikan. Terima kasih Eco Enviro Indonesia!",
    rating: 5,
  },
  {
    name: "Diana Putri",
    position: "Compliance Manager",
    company: "PT Energi Hijau",
    content: "Dokumentasi UKL-UPL yang disusun sangat detail dan sesuai regulasi terbaru. Proses perizinan jadi lebih lancar berkat bantuan tim Eco Enviro.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimoni" className="section-padding section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 mb-4">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Testimoni</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apa Kata Klien Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kepuasan klien adalah prioritas utama kami
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-card rounded-3xl p-8 md:p-12 border border-border shadow-lg">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
