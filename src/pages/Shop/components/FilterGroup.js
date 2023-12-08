import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

function FilterGroup({ title, data, dataKey }) {
  const dispatch = useDispatch();
  const { filteredArray, loading } = useSelector((store) => store[dataKey]);

  useEffect(() => {
    dispatch(data());
  }, [dispatch, data]);

  if (loading) {
    return (
      <legend className="w-full py-2 mb-5 text-base font-semibold text-center sm:text-lg bg-purple">
        Cargando...
      </legend>
    );
  }

  return (
    <fieldset>
      <legend className="w-full py-2 mb-5 text-base font-semibold text-center sm:text-lg bg-purple">
        {title}
      </legend>
      <div className="max-h-[8rem] overflow-auto">
        {filteredArray.map((item) => (
          <label
            key={item.id}
            className="flex items-center justify-between p-1 text-sm md:hover:bg-indigo-700 md:transition md:cursor-pointer"
            htmlFor={item.attributes.slug}
          >
            {item.attributes.name}
            <input
              type="checkbox"
              value={item.id}
              id={item.attributes.slug}
              className="w-5 h-5 text-xl border-none rounded-md outline-none"
            />
          </label>
        ))}
      </div>
    </fieldset>
  );
}

FilterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.func.isRequired,
  dataKey: PropTypes.string.isRequired,
};

export default FilterGroup;
