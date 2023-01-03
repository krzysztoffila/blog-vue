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
        login: 'Zaloguj',
        register: 'Zarejestruj się',
        logoutButton: 'Wyloguj',
        searchPlaceholder: 'Szukaj',
        enterName: 'Podaj Imię',
        enterEmail: 'Podaj Email',
        enterPassword: 'Podaj Hasło',
        confirmPassword: 'Powtórz Hasło',
        noAccount: 'Czy nie masz jeszcze konta?',
        rememberMe: 'Zapamiętaj mnie',
        noShareEmailInfo: 'Nigdy nie udostępnimy Twojego maila nikomu innemu.',
        categoryList: 'Kategoria',
        noFindBlogs: 'Nie znaleziono blogów',
        invalidEmail: 'Niepoprawny Email',
        noAccountFound: 'Nie znaleziono konta przypisanego do tego maila',
        incorrectPassword: 'Niepoprawne hasło',
        disabledUser: 'Nazwa tego uzytkownika jest zajęta',
        emailNotFound: 'Nie znaleziono maila',
        emailOrPasswordNotFound: 'Email lub hasło jest nieprawidłowe',
      },
      en: {
        welcomeHome: 'Hello Mate! - Welcome on my Blog!',
        categoryHeader: 'Categories',
        searchInput: 'Search',
        changeLanguage: 'Language',
        login: 'Login',
        register: 'Register',
        logoutButton: 'Logout',
        searchPlaceholder: 'Search',
        enterName: 'Enter Name',
        enterEmail: 'Enter Email',
        enterPassword: 'Enter Password',
        confirmPassword: 'Confirm Password',
        noAccount: `You don't have an account?`,
        rememberMe: 'Remember Me',
        noShareEmailInfo: `We'll never share your email with anyone else.`,
        categoryList: 'Category',
        noFindBlogs: 'No Find Blogs',
        invalidEmail: 'Invalid email',
        noAccountFound: 'No account with thah email was found"',
        incorrectPassword: 'Incorrect password',
        disabledUser: 'User is disabled',
        emailNotFound: 'Email not Found',
        emailOrPasswordNotFound: 'Email or password was incorrect',
      }
    }
    return {
      lang,
      languages,
      ll
    }
  },
}
