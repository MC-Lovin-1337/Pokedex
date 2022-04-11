const SearchBar = ({ input, placeholder, onChange, className }) => {
  return (
    <div className={className}>
      <label htmlFor="search" className="sr-only">
        Suche
      </label>
      <input
        type="text"
        name="search"
        id="search"
        className="shadow-md pl-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full sm:text-sm border-gray-300 rounded-md"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        input={input}
      />
    </div>
  );
};

export default SearchBar;
