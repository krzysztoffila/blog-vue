import getCookie from '@/helpers/cookies/get-cookie.js'
export default {
  namespaced: true,
  state() {
    let lang = getCookie('lang') || "pl"
    let languages = ["pl", "en"]
    let ll = {}
    return {
      lang,
      languages,
      ll
    }
  },
}
