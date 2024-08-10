interface Lang {
  [key: string]: string;
}

interface LangObj {
  [key: string]: Lang;
}

let currentLang: Lang;
const windowLang: string = document.documentElement.lang || 'pl-PL';

const lang: LangObj = {
  pl: {
    title: 'Porównywanie <br>produktów',
    dataTitle: 'Dane podstawowe',
    home: 'Strona główna',
    oneProduct: 'Dodaj minimum dwa produkty, aby je porównać.',
    delete: 'USUŃ',
    goToPage: 'Przejdź na kartę produktu',
    compare: 'Porównaj',
    minProducts: 'Min. 2 produkty aby porównać',
    tooManuProducts: 'Możesz umieścić maksymalnie 3 produkty!',
  },
  en: {
    title: 'Compare <br>products',
    dataTitle: 'Basic information',
    home: 'Home page',
    oneProduct: 'Add at least two products to have them.',
    delete: 'DELETE',
    goToPage: 'Go to product page',
    compare: 'Compare',
    minProducts: 'Min. 2 products to compare',
    tooManuProducts: 'You can place up to 3 products!',
  },
};

switch (windowLang) {
  case 'pl-PL':
    currentLang = lang.pl;
    break;
  case 'en-US':
    currentLang = lang.en;
    break;
  default:
    currentLang = lang.pl;
}

export default currentLang;
