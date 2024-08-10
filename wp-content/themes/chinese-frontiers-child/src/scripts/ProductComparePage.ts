import apiFetch from '@wordpress/api-fetch';
import { BuldProduct, BuildAttributes } from './CompareFetchProduct';
import currentLang from './Lang';

interface RestAPI {
  acf: {
    wc_api: {
      consumer_key: string;
      consumer_secret: string;
    };
  };
}

interface Attribute {
  key: string;
  value: any;
}

interface Lang {
  [key: string]: string;
}

interface LangObj {
  [key: string]: Lang;
}

export interface Translation {
  name: string;
  label: string;
  id: string;
}
interface ProductObj {
  acf: {
    kategoria_glowna: {
      name: string;
      slug: string;
    };
  };
  id: number;
  name: string;
  slug: string;
  permalink: string;
  images: { alt: string; src: string }[];
  attributes: { [key: string]: any }[];
}

interface SingleAttribute {
  id: number;
  name: string;
  options: string[];
}

class ProductComparePage {
  private container: string;

  private homeUrl: HTMLElement = document.getElementById('home-url');

  private themeURL: HTMLElement = document.getElementById('theme-url');

  private consumerKey: string;

  private consumerSecret: string;

  constructor(container: string) {
    this.container = container;
  }

  public async init(): Promise<void> {
    let tableObj: SingleAttribute[] = [];
    let p: ProductObj[] = [];
    const divContainer: HTMLElement = document.querySelector(`#${this.container}`);
    const urlAsk: string = document.location.search;

    if (!urlAsk || !divContainer) return;

    const urlAskSplit: string = urlAsk.substring(1);
    const searchObject = JSON.parse('{"' + decodeURI(urlAskSplit).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    const searchProductCat = 'product_cat' in searchObject;
    const searchObjectFilter = 'products' in searchObject;
    const funcCleanContainer = async () => {
      document.body.classList.add('loading');
      divContainer.classList.add('hide');

      divContainer.innerHTML = `<span class="lg:absolute mb-8 block left-4 font-bold text-xl text-gray">${currentLang.title}</span>`;
    };
    const funcInsertError = () => {
      divContainer.innerHTML = `<div class="bg-gray-200 bg-opacity-20 py-20 text-center aos-init aos-animate" data-aos="fade"> <div class="text-gray-300 md:text-2xl text-xl font-bold"> <p><strong>${currentLang.oneProduct}</strong></p></div><div class="flex items-center justify-center pt-10"> <a href="${(<HTMLInputElement>this.homeUrl).value}" class="cta cta-full-blue">${currentLang.home}</a></div></div>`;
    };
    const funcBuildGrid = async () => {
      const centerContainer: HTMLElement = document.createElement('div');

      centerContainer.className = 'sec-compare__table';
      centerContainer.innerHTML = `<div class="flex justify-center sec-compare__table--col"><div class="md:w-11/12 w-full relative"><div class="${this.container}__cards grid grid-cols-3 sm:gap-x-5 gap-x-3 lg:pl-40"></div></div></div><div class="flex justify-center md:pt-20 pt-12 sec-compare__table--col"><div class="${this.container}__attributes md:w-11/12 w-full relative"><div class="bg-gray-200 bg-opacity-20 lg:px-12 px-6 py-3 font-bold text-gray mb-9"><h4>${currentLang.dataTitle}</h4></span></div></div></div>`;

      divContainer.appendChild(centerContainer);
    };
    const attrExists = (array: { [k: string]: any }[], id: number | string) => {
      return array.some(function (el) {
        return el.id === id;
      });
    };
    const addAttr = (array: { [k: string]: any }[], id: number, name: string, options: string[]) => {
      if (attrExists(array, id)) {
        const elementPos = array
          .map(function (x) {
            return x.id;
          })
          .indexOf(id);

        array[elementPos].options.push(options.join(', '));

        return false;
      }

      array.push({ id: id, name: name, options: options });
      return true;
    };

    if (!searchProductCat || !searchObjectFilter) return;

    const productsArr: string[] = decodeURIComponent(searchObject.products).split(',');

    if (productsArr.length === 1) {
      funcInsertError();
      throw new Error('Single product!');
    }

    const url: string = `${(<HTMLInputElement>this.homeUrl).value}/wp-json/acf/v3/options/options`;

    if (!url) return;

    const funcFetchData = async () => {
      let attributes: unknown[] = [];
      let buildAttributes: BuildAttributes;
      let attributesObj: SingleAttribute[];

      apiFetch({
        path: url,
        credentials: 'same-origin',
      })
        .then((acf: RestAPI) => {
          const api = acf.acf.wc_api;

          if (!api) return;

          this.consumerKey = acf.acf.wc_api.consumer_key;
          this.consumerSecret = acf.acf.wc_api.consumer_secret;

          return [this.consumerKey, this.consumerSecret];
        })
        .then((keys) => {
          const [key, secret] = keys;
          const cardsContainer: HTMLElement = document.querySelector(`.${this.container}__cards`);
          const attrContainer: HTMLElement = document.querySelector(`.${this.container}__attributes`);

          [...productsArr].forEach((id: string, index: number) => {
            const productURL: string = `${(<HTMLInputElement>this.homeUrl).value}/wp-json/wc/v3/products/${id}?consumer_key=${key}&consumer_secret=${secret}`;

            apiFetch({
              path: productURL,
              credentials: 'same-origin',
            }).then((product: ProductObj) => {
              const buildProduct: BuldProduct = new BuldProduct(cardsContainer, index, product, (<HTMLInputElement>this.homeUrl).value, (<HTMLInputElement>this.themeURL).value);

              buildProduct.build();

              attributes.push(product.attributes);

              p.push(product);

              product.attributes.forEach((obj) => {
                addAttr(tableObj, obj.id, obj.name, obj.options);
              });

              if (productsArr.length === index + 1) {
                setTimeout(async () => {
                  p.forEach((el: ProductObj, index: number) => {
                    tableObj.forEach((a) => {
                      if (!attrExists(el.attributes, a.id)) {
                        a.options.splice(index, 0, '—');
                      }
                    });
                  });

                  attributesObj = await this.replaceProductNames(tableObj);

                  buildAttributes = new BuildAttributes(attrContainer, divContainer, tableObj);

                  buildAttributes.build();
                }, 3000);
              }
            });
          });
        });
    };

    await funcCleanContainer();
    await funcBuildGrid();
    await funcFetchData();
  }

  private async replaceProductNames(tableObj: SingleAttribute[]): Promise<SingleAttribute[]> {
    const storage: string = sessionStorage.getItem('prodAttributes');

    if (!storage) return tableObj;

    const lsData: Translation[] = JSON.parse(storage);

    tableObj.map((obj: SingleAttribute) => {
      lsData.filter((item: Translation) => {
        const id: number = Number(item.id);
        if (id === obj.id) {
          obj.name = item.label;
        }
      });
    });

    return tableObj;
  }
}

export { ProductComparePage, ProductObj, SingleAttribute };
