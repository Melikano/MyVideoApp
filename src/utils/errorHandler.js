// @flow

export default function (error: Object): string {
  const { response } = error || {};
  switch ((response || {}).status) {
    case 500:
      return 'مشکلی در ارتباط با سرور پیش‌آمده است. لطفا مجددا تلاش کنید';
    case 400:
      return 'نام کاربری یا رمز عبور معتبر نیست';
    default:
      return '';
  }
}
