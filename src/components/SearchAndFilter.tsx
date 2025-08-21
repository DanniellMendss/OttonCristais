import { Search, Filter } from 'lucide-react';

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
  totalPhotos: number;
  filteredCount: number;
}

export default function SearchAndFilter({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  totalPhotos,
  filteredCount
}: SearchAndFilterProps) {
  return (
    <div className="mb-8 space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search photos by title or tags..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input pl-10"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-muted-foreground" />
          <span className="text-sm font-medium">Categories:</span>
        </div>
        
        <button
          onClick={() => onCategoryChange('All')}
          className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredCount} of {totalPhotos} photos
        {searchTerm && ` for "${searchTerm}"`}
        {selectedCategory !== 'All' && ` in ${selectedCategory}`}
      </div>
    </div>
  );
}