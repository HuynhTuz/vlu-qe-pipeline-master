const login = require('./auth');

describe('Regression Tests: Kiem tra cac truong hop ngoai le', () => {
  test('Dang nhap that bai khi sai mat khau', () => {
    expect(login('admin', 'wrongpass')).toBe(false);
  });

  test('Dang nhap that bai khi de trong username', () => {
    expect(login('', '123')).toBe(false);
  });

  test('Dang nhap that bai khi de trong password', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('Dang nhap that bai khi mat khau chua khoang trang', () => {
    expect(login('admin', '12 3')).toBe(false);
  });

  test('Dang nhap that bai voi tai khoan bi khoa', () => {
    expect(login('locked_user', '123')).toBe(false);
  });
});
