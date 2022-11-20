import getCookie from '@/helpers/cookies/get-cookie.js'
export default {
    namespaced: true,
    state() {
        let lang = getCookie('lang') || "pl"
        let languages = ["pl", "en"]
        let ll = {
            pl: {
                welcomeHome: 'Hejka! - Witam na moim blogu!',
                categoryHeader: 'Kategorie',
                searchInput: 'Szukaj',
                changeLanguage: 'Język',
                loginHeader: 'Zaloguj',
                registerHeader: 'Zarejestruj się'
            },
            en: {
                welcomeHome: 'Hello Mate! - Welcome on my Blog!',
                categoryHeader: 'Categories',
                searchInput: 'Search',
                changeLanguage: 'Language',
                loginHeader: 'Login',
                registerHeader: 'Register'
            }
        }
        return {
            lang,
            languages,
            ll
        }
    },
}