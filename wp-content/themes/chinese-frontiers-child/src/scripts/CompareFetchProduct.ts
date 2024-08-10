import { ProductObj, SingleAttribute } from './ProductComparePage';
import { LSData } from './ProductCompare';
import currentLang from './Lang';

class BuldProduct {
  private container: HTMLElement;

  private index: number;

  private product: ProductObj;

  private homeURL: string;

  private themeURL: string;

  constructor(container: HTMLElement, index: number, product: ProductObj, homeURL: string, themeURL: string) {
    this.container = container;
    this.index = index;
    this.product = product;
    this.homeURL = homeURL;
    this.themeURL = themeURL;
  }

  public build(): void {
    if (!this.container) return;

    const card: HTMLElement = document.createElement('div');
    const [featureImage] = this.product.images;

    card.className = `sec-compare__cards--card product-${this.index}`;
    card.innerHTML = `<div class="border border-gray-300 lg:pt-12 pt-8 lg:pb-8 pb-5 lg:px-12 px-6 relative">
    <a href="#" data-product="product-${this.index}" data-id="${this.product.id}" class="compare-remove w-11 py-1 absolute top-8 right-5 z-10 text-decoration-none flex flex-col align-items-center text-center uppercase text-gray-300 text-xxs hover:bg-gray-100"><img src="${this.themeURL}/img/trash.svg" class="h-6"><span class="pt-1">${currentLang.delete}</span></a>
    <div class="flex items-center justify-center w-full xl:h-96 h-44 ml-auto">
    <img src="${featureImage.src}" alt="${featureImage.alt}">
    </div>
    <div>
    <a href="${this.homeURL}/product-category/${this.product.acf.kategoria_glowna.slug}" class="block text-sm text-gray-300">${this.product.acf.kategoria_glowna.name}</a>
    <h3 class="text-blue font-semibold block mt-2">${this.product.name}</h3>
    </div>
    </div>
    <a href="${this.product.permalink}" class="cta cta-full-blue max-w-none mt-6 px-4">${currentLang.goToPage}</a>`;

    this.container.appendChild(card);
  }
}

class BuildAttributes {
  private container: HTMLElement;

  private section: HTMLElement;

  private attributes: SingleAttribute[];

  constructor(container: HTMLElement, section: HTMLElement, attributes: SingleAttribute[]) {
    this.container = container;
    this.section = section;
    this.attributes = attributes;
  }

  public build() {
    this.attributes.forEach((attribute) => {
      const grid: HTMLElement = document.createElement('div');
      const attrGrid: HTMLElement = document.createElement('div');

      grid.className = 'sm:grid block sm:grid-cols-4 sm:gap-y-0 gap-y-4 align-items-center lg:px-12 sm:px-6 py-3 font-semibold';
      attrGrid.className = 'grid grid-cols-3 col-span-3 sm:border-0 border border-gray-100 product-attribute';

      (() =>
        new Promise((resolve) => {
          grid.innerHTML = `<span class="text-gray block text-center sm:text-left sm:static sticky left-0 top-0 py-4 sm:py-0 sec-compare__attributes--title">${attribute.name}</span>`;

          attribute.options.forEach((a) => {
            const span: HTMLSpanElement = document.createElement('span');

            span.className = 'text-blue flex items-center justify-center text-center p-4 sm:p-0 sec-compare__attributes--attr';
            span.textContent = a;

            attrGrid.appendChild(span);
          });

          resolve(attrGrid);
        })
          .then((attr: HTMLElement) => {
            grid.appendChild(attr);
          })
          .then(() => {
            this.container.appendChild(grid);
          })
          .then(() => {
            this.section.classList.remove('hide');
            document.body.classList.remove('loading');
          })
          .then(() => {
            this.section.addEventListener('click', this.removeItem);
          }))();
    });
  }

  protected removeItem(ev: Event): void {
    const target: HTMLElement = <HTMLElement>ev.target;
    const homeUrl: HTMLElement = document.getElementById('home-url');
    const lsValue: string = 'CompareDataObject';
    const navLinksItems: HTMLElement[] = Array.from(document.querySelectorAll('.compare-item'));

    if (target.classList.contains('compare-remove')) {
      ev.preventDefault();

      const dataProduct: string = target.dataset.product;
      const dataID: string = target.dataset.id;
      const items: NodeListOf<HTMLElement> = document.querySelectorAll(`.${dataProduct}`);
      const indexArr: string[] = dataProduct.split('product-');
      const index: number = Number(indexArr[indexArr.length - 1]);
      const productAttributes: NodeListOf<HTMLElement> = document.querySelectorAll('.product-attribute');

      (() =>
        new Promise<void>((resolve) => {
          items.forEach((item: HTMLElement) => {
            item.remove();
          });

          resolve();
        })
          .then(() => {
            productAttributes.forEach((item: HTMLElement) => {
              item.childNodes[index].remove();
            });
          })
          .then(() => {
            const urlAsk: string = document.location.search;

            if (!urlAsk || !dataID) return;

            const urlAskSplit: string = urlAsk.substring(1);

            const searchObject = JSON.parse('{"' + decodeURI(urlAskSplit).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
            const searchObjectProducts: string[] = searchObject.products.split(',');
            const removeID: string[] = searchObjectProducts.filter((e) => e !== dataID);
            const joinID: string = removeID.join(',');
            const link: string = `${(<HTMLInputElement>homeUrl).value}/porownaj-produkty?product_cat=${searchObject.product_cat}&products=${joinID}`;

            history.replaceState({}, document.title, link);

            if (navLinksItems.length > 0) {
              navLinksItems.forEach((item: HTMLElement) => {
                const linkItem: HTMLAnchorElement = item.querySelector('a');
                if (!linkItem) return;
                linkItem.href = link;
              });
            }

            return removeID;
          })
          .then((removeID: string[]) => {
            const compareDataObject = JSON.parse(localStorage.getItem(lsValue));

            const data: LSData = {
              group: compareDataObject.group,
              product: removeID,
            };

            localStorage.setItem(lsValue, JSON.stringify(data));

            return removeID.length;
          })
          .then((num: number) => {
            const numContainer = document.querySelector('.compare-cta__count');

            if (!numContainer) return;

            numContainer.textContent = String(num);
          }))();
    }
  }
}

export { BuldProduct, BuildAttributes };
