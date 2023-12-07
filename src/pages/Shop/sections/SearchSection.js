function SearchSection() {
  return (
    <div className="flex items-center justify-between sm:flex-row">
      <header className="my-8 text-center sm:my-16">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-5xl">Búsqueda</h2>
      </header>
      <ul className="flex items-center gap-3">
        <li className="text-xs">
          <label htmlFor="order_by" className="flex items-center gap-2">
            Ordenar:
            <select name="order_by" id="order_by" className="p-2 text-black">
              <option value="1">Popularidad</option>
            </select>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default SearchSection;
