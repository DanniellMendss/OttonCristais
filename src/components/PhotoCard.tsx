import { Photo } from '@/data/photos';
import { Camera } from 'lucide-react';
interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
}
export default function PhotoCard({
  photo,
  onClick
}: PhotoCardProps) {
  return <div className="photo-card animate-fade-in-up" onClick={onClick}>
      <img src={photo.src} alt={photo.title} className="photo-card-image" loading="lazy" />
      <div className="photo-card-overlay" />
      <div className="photo-card-content">
        
        
        {photo.photographer}
      </div>
    </div>;
}