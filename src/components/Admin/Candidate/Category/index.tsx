import React, { useState } from 'react';

import Category from './Category';

type indexType = {
  top: number,
  middle: number,
  bottom: number,
}

const initialIndex = {
  top: 0,
  middle: 0,
  bottom: 0,
};

export default function CategoryContainer () {
  const [categoryIndex, setCategoryIndex] = useState<indexType>(initialIndex);

  return (
    <Category
      categoryIndex={categoryIndex}
      setCategoryIndex={setCategoryIndex}
      initialIndex={initialIndex}
    />
  );
};