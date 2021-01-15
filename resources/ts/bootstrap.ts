import { getCookieValue } from "./util";
import Axios, { AxiosStatic } from 'axios';

declare global {
  interface Window {
    axios: AxiosStatic;
  }
  interface Element {
    content: string;
  }
}

export default function bootstrap() {

  window.axios = Axios;

  // Ajaxリクエストであることを示すヘッダーを付与する
  window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

  window.axios.interceptors.request.use(config => {
    // クッキーからトークンを取り出してヘッダーに添付する
    config.headers['X-XSRF-TOKEN'] = getCookieValue('XSRF-TOKEN')

    return config
  })

  window.axios.interceptors.response.use(
    response => response,
    error => error.response || error
  )


}
