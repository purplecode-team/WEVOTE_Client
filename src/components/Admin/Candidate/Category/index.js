import React, { useState } from 'react';

import Category from './Category';

const initialIndex = {
  top: 0,
  middle: 0,
  bottom: 0,
};

const CategoryContainer = () => {
  const [categoryIndex, setCategoryIndex] = useState(initialIndex);

  return (
    <Category
      categoryIndex={categoryIndex}
      setCategoryIndex={setCategoryIndex}
      initialIndex={initialIndex}
    />
  );
};

export default CategoryContainer;
