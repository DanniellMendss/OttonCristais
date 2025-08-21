export default function LoadingSkeleton() {
  return (
    <div className="gallery-grid">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="space-y-3">
          <div className="loading-skeleton aspect-[4/3] w-full" />
          <div className="space-y-2">
            <div className="loading-skeleton h-4 w-3/4" />
            <div className="loading-skeleton h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}