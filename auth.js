// Feature: Updated login logic for QE pipeline
function login(username, password) {
  // Tai khoan bi khoa
  if (username === 'locked_user') {
    return false;
  }

  // Kiem tra du lieu rong hoac chua ky tu dac biet nguy hiem
  if (!username || !password || password.includes(' ')) {
    return false;
  }

  // Dang nhap thanh cong dung thong tin
  if (username === 'admin' && password === '123
  }

  return false;
}

module.exports = login;
