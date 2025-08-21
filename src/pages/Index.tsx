import { useState, useEffect } from "react";
import { photos, Photo } from "@/data/photos";
import PhotoCard from "@/components/PhotoCard";
import PhotoModal from "@/components/PhotoModal";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { Camera, Github, Heart, Mail, MessageCircle } from "lucide-react";

const Index = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const navigateModal = (direction: "next" | "prev") => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % photos.length;
    } else {
      newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    }
    setSelectedPhoto(photos[newIndex]);
  };

  const currentPhotoIndex = selectedPhoto
    ? photos.findIndex((p) => p.id === selectedPhoto.id)
    : -1;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-sky-50">
                  Otton Cristais
                </h1>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#contact"
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 font-extralight md:text-5xl">
            Catálogo
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text ml-3 text-blue-700 text-center text-6xl font-extralight">
              Otton Cristais
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-center text-base font-extralight">
            Catálogo interativo de cristais e pedras preciosas, com informações
            completas sobre cada item, incluindo propriedades, aplicações e
            imagens em alta resolução.
          </p>
        </div>

        {/* Gallery Grid */}
        {isLoading ? (
          <LoadingSkeleton />
        ) : photos.length > 0 ? (
          <div className="gallery-grid">
            {photos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                onClick={() => openModal(photo)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
              <Camera className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No photos found</h3>
            <p className="text-muted-foreground">
              No photos available at the moment
            </p>
          </div>
        )}
      </main>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-16 text-center"
      >
        <h2 className="text-3xl font-semibold text-foreground mb-4">
          Entre em contato para orçamentos
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Interessado em nossos cristais ou deseja um orçamento personalizado?
          Estamos prontos para atender você com qualidade e agilidade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Email Button */}
          <a
            href="mailto:contato@ottoncristais.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Enviar E-mail
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/5531998845674?text=Oi!%20Tudo%20bem?%20Gostaria%20de%20saber%20mais%20sobre%20os%20valores.%20Pode%20me%20enviar%20um%20or%C3%A7amento%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 text-white font-medium shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="border-t border-border mt-20 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Logo & Description */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Otton Cristais
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Especialistas em cristais e pedras naturais. Qualidade, energia
                e beleza em cada peça.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>ottoncristais@gmail.com.com</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    Catálogo
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Social & Connect */}
            {/* Social & Connect */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Conecte-se</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Siga-nos e fique por dentro de novidades e promoções.
              </p>
              <div className="flex gap-5">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/5531998845674"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-green-500 transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/otton.cristaisbr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-pink-500 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.163c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441-.645-1.441-1.44s.645-1.44 1.441-1.44c.795 0 1.439.645 1.439 1.44s-.644 1.44-1.439 1.44z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/ottoncristais.cristais"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-600 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.983h-1.5c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Otton Cristais. Todos os direitos
              reservados.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 mt-4 md:mt-0 text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>
                por{" "}
                <span className="font-semibold text-foreground">Daniell</span>{" "}
                da{" "}
                <a
                  href="https://dmcodesolutions.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:underline transition duration-300"
                >
                  DmCode Solutions
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          isOpen={isModalOpen}
          onClose={closeModal}
          onNext={() => navigateModal("next")}
          onPrevious={() => navigateModal("prev")}
          currentIndex={currentPhotoIndex}
          totalPhotos={photos.length}
        />
      )}
    </div>
  );
};

export default Index;
