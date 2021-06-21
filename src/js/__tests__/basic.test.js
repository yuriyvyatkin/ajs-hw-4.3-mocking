import getLevel from '../basic';
import fetchData from '../http';

jest.mock('../http');

test('should return level info', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 1,
  });

  const response = getLevel(1);
  expect(response).toBe('Ваш текущий уровень: 1');
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('should return error massage', () => {
  fetchData.mockReturnValue({
    status: 'error',
  });

  const response = getLevel(1);
  expect(response).toBe('Информация об уровне временно недоступна');
});
