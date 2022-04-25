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
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-gray-700 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md capitalize"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        defaultValue={defaultValue}
      >
         <option value=""/>
        {options.map((option) => (
          <option className="text-gray-700" key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default PokeFilter;
