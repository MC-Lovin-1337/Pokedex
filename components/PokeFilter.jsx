const PokeFilter = ({ options, defaultValue, value, onChange, title }) => {
  return (
    <div>
      <label
        htmlFor="filter"
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
      <select
        id="filter"
        name="filter"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md capitalize"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option} value={option} />
        ))}
      </select>
    </div>
  );
};

export default PokeFilter;
