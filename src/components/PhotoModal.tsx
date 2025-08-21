import { useEffect } from "react";
import { Photo } from "@/data/photos";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoModalProps {
  photo: Photo;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalPhotos: number;
}

export default function PhotoModal({
  photo,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  currentIndex,
  totalPhotos,
}: PhotoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-background rounded-lg overflow-hidden cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-black/30 transition-colors"
          aria-label="Fechar modal"
        >
          <X size={20} className="text-white" />
        </button>

        {/* Navegação: Anterior */}
        {totalPhotos > 1 && (
          <button
            onClick={onPrevious}
            className="absolute top-1/2 -translate-y-1/2 left-4 z-10 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-black/30 transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
        )}

        {/* Navegação: Próximo */}
        {totalPhotos > 1 && (
          <button
            onClick={onNext}
            className="absolute top-1/2 -translate-y-1/2 right-4 z-10 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-black/30 transition-colors"
            aria-label="Próxima foto"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        )}

        {/* Imagem */}
        <img
          src={photo.src}
          className="w-full h-auto max-h-[80vh] object-contain"
        />
        {/* Legenda opcional */}
        <div className="p-4 text-sm text-muted-foreground flex justify-between items-center">
          <span>
            {currentIndex + 1} de {totalPhotos}
          </span>
        </div>
      </div>
    </div>
  );
}
