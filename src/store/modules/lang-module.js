export default {
    namespaced: true,
    state() {
        let lang = "pl"
        let languages = ["pl", "en"]
        let ll = {
            pl: {
                welcomeHome: 'Witamy na Blogu!'
            },
            en: {
                welcomeHome: 'Welcome on my Blog!'
            }
        }
        return {
            lang,
            languages,
            ll
        }
    },
}