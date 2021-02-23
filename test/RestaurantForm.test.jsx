import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RestaurantForm from '../src/RestaurantForm';

test('RestaurantForm', () => {
  const restaurant = {
    name: '마법사주방',
    category: '이탈리안',
    address: '서울시 강남구',
  };

  const handleClick = jest.fn();

  const { getByText, getByDisplayValue } = render((
    <RestaurantForm
      restaurant={restaurant}
      onClick={handleClick}
    />
  ));

  expect(getByDisplayValue('마법사주방')).not.toBeNull();
  expect(getByDisplayValue('이탈리안')).not.toBeNull();
  expect(getByDisplayValue('서울시 강남구')).not.toBeNull();
  expect(getByText('등록')).not.toBeNull();

  fireEvent.click(getByText(/등록/));

  expect(handleClick).toBeCalled();
});