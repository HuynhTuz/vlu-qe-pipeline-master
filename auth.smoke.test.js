const login = require('./auth');

test('Smoke Test: Dang nhap thanh cong voi admin va 123', () => {
  expect(login('admin', '123')).toBe(true);
});
