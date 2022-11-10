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
//ll jest na sztywno -> potrzeba się dobrać dynamicznie, aby nie przepisywać osobno wartości dla PL i EN 
// Powinno od razu wyciagac ..._pl lub ..._en