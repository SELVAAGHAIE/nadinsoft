import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      login: "Login",
      persian: "persian",
      english: "english",
      enter_your_name: "enter your name",
      language: "Language",
      AllrightsofthissitearereservedforNadinSadrAriaEngineeringCompany:
        "All rights of this site are reserved for Nadin Sadr Aria Engineering Company.",
      weeksForecast: "2 weeks Forecast",
      contactusinfonadinir: "contact us : info@nadin.ir",
      Monday23December2023: "12:25 . Monday 23 December 2023",
      FeelsLike: "Feels Like",
      SearchYourLocation: "Search Your Location",
      weatherDashboard: "Weather Dashboard",
      selectCountry: "Select Country",
      temperatureThroughoutDay: "Temperature Throughout the Day",
      selectCountryPrompt: "Please select a country to view the weather.",
      High: "High",
      low: "Low",
      feelsLike: "Feels Like",
      averageMonthlyTemperature: "Average Monthly Temperature",
    },
  },
  fa: {
    translation: {
      persian: "فارسی",
      login: "ورود",
      enterYourName: "نام خود را وارد کنید",
      language: "زبان",
      AllrightsofthissitearereservedforNadinSadrAriaEngineeringCompany:
        "همه حقوق این سایت برای شرکت مهندسی نادین صدر آریا محفوظ است.",
      Monday23December2023: "12.25 شنبه 2 دی 1402",
      contactusinfonadinir: "تماس با ما : info@nadin.ir",
      weeksForecast: "پیش بینی 2 هفته",
      Low: "کمینه",
      FeelsLike: "درجه احساس می شود",
      SearchYourLocation: "مکان مورد نظر را جستجو کنید",
      weatherDashboard: "داشبورد آب‌وهوا",
      selectCountry: "انتخاب کشور",
      enter_your_name: "نام خود را وارد کنید ",
      temperatureThroughoutDay: "دما در طول روز",
      selectCountryPrompt:
        "لطفاً یک کشور را برای مشاهده وضعیت آب‌وهوا انتخاب کنید.",
      high: "بیشینه",
      english: "انگلیسی",
      low: "کمینه",
      feelsLike: "احساس دما",
      averageMonthlyTemperature: "میانگین دمای ماهانه",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
