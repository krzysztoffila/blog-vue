import getCookie from '@/helpers/cookies/get-cookie.js'
export default {
  namespaced: true,
  state() {
    let lang = getCookie('lang') || "pl"
    let languages = ["pl", "en"]
    let ll = {
      en: {
        categoryHeader: "Categories",
        categoryList: "Category",
        changeLanguage: "Language",
        confirmPassword: "Confirm Password",
        disabledUser: "User is disabled",
        emailNotFound: "Email not Found",
        emailOrPasswordNotFound: "Email or password was incorrect",
        enterEmail: "Enter Email",
        enterName: "Enter Name",
        enterPassword: "Enter Password",
        incorrectPassword: "Incorrect password",
        login: "Login",
        logoutButton: "Logout",
        noAccount: "You don't have an account?",
        noAccountFound: "No account with thah email was found",
        noFindBlogs: "No Find Blogs",
        noShareEmailInfo: "We'll never share your email with anyone else.",
        register: "Register",
        rememberMe: "Remember Me",
        searchInput: "Search",
        searchPlaceholder: "Search",
        successLogin: "Logged Successfully",
        successLogout: "Logout Successfully",
        welcomeHome: "Hello Mate! - Welcome on my Blog!"
      },
      pl: {
        categoryHeader: "Kategorie",
        categoryList: "Kategoria",
        changeLanguage: "Język",
        confirmPassword: "Powtórz Hasło",
        disabledUser: "Nazwa tego uzytkownika jest zajęta",
        emailNotFound: "Nie znaleziono maila",
        emailOrPasswordNotFound: "Email lub hasło jest nieprawidłowe",
        enterEmail: "Podaj Email",
        enterName: "Podaj Imię",
        enterPassword: "Podaj Hasło",
        incorrectPassword: "Niepoprawne hasło",
        invalidEmail: "Niepoprawny Email",
        login: "Zaloguj",
        logoutButton: "Wyloguj",
        noAccount: "Czy nie masz jeszcze konta?",
        noAccountFound: "Nie znaleziono konta przypisanego do tego maila",
        noFindBlogs: "Nie znaleziono blogów",
        noShareEmailInfo: "Nigdy nie udostępnimy Twojego maila nikomu innemu.",
        register: "Zarejestruj się",
        rememberMe: "Zapamiętaj mnie",
        searchInput: "Szukaj",
        searchPlaceholder: "Szukaj",
        successLogin: "Zalogowano Pomyślnie",
        successLogout: "Wylogowano Pomyślnie",
        welcomeHome: "Hejka! - Witam na moim blogu!",
      }
    }
    return {
      lang,
      languages,
      ll
    }
  },
}
