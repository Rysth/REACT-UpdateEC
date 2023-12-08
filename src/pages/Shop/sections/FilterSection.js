import { fetchCategories } from '../../../redux/slices/categorySlice';
import { fetchBrands } from '../../../redux/slices/brandSlice';
import FilterGroup from '../components/FilterGroup';

function FilterSection() {
  return (
    <aside className="sm:w-52 purple">
      <form action="" className="grid grid-cols-2 gap-10 sm:grid-cols-1">
        <FilterGroup
          title="Categorías"
          data={fetchCategories}
          dataKey="category"
        />
        <FilterGroup title="Marcas" data={fetchBrands} dataKey="brand" />
      </form>
    </aside>
  );
}

export default FilterSection;
