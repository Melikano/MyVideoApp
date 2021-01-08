// @flow
export default {
  login: 'ورود',
  logout: 'خروج',
  username: 'نام‌کاربری',
  password: 'رمز عبور',
  aboutUs: 'درباره ما',
  contactWithSupport: 'تماس با پشتیبانی',
  loginToAccount: 'ورود به حساب کاربری',
  favourits: 'نشان‌شده‌ها',
  watched: 'مشاهده‌شده‌ها',
  categories: 'دسته‌بندی‌ها',
  categoryMoviesTitle: (category: string): string =>
    `دسته‌بندی ${category || ''}`,
};
