import getCookie from '@/helpers/cookies/get-cookie.js'
export default {
  namespaced: true,
  state() {
    let lang = getCookie('lang') || "pl"
    let languages = ["pl", "en"]
    let ll = {
      pl: {
        categoryHeader: "Kategorie",
        // Dodaj inne tłumaczenia
      },
      en: {
        categoryHeader: "Categories",
        // Dodaj inne tłumaczenia
      }
    }
    return {
      lang,
      languages,
      ll
    }
  },
}
