/**
 * クッキーの値を取得する
 * @params (string) searchKey 検索するキー
 * @returns (string) キーに対応する値
 **/
export function getCookieValue(searchKey: string) {
  if (typeof searchKey === 'undefined') {
    return ''
  }

  let val = ''

  document.cookie.split(',').forEach(cookie => {
    const [key, value] = cookie.split('=')
    if (key === searchKey) {
      return val = value;
    } else {
      return val = ''
    }
  })

  return val;
}