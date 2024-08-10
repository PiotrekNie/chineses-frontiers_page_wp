import apiFetch from '@wordpress/api-fetch';
import ProductCompareButton from './ProductCompareButton';
import lang from './Lang';

interface RestAPI {
  acf: {
    wc_api: {
      consumer_key: string;
      consumer_secret: string;
    };
  };
}

interface FetchUrlObj {
  image: {
    src: string;
  };
}
interface LSData {
  group: string;
  product: string[];
}

type ResponseData = LSData & {
  response: 'ok';
};

class CreateLink {
  private container: HTMLElement;

  private numberContainer: HTMLElement;

  private homeUrl: HTMLInputElement;

  private data: LSData;

  private innerText: string;

  constructor(container: HTMLElement, numberContainer: HTMLElement, homeUrl: HTMLInputElement, data: LSData, innerText: string) {
    this.container = container;
    this.numberContainer = numberContainer;
    this.homeUrl = homeUrl;
    this.data = data;
    this.innerText = innerText;
  }

  public insert(): void {
    const linkEl: HTMLAnchorElement = document.createElement('a');

    linkEl.href = `${(<HTMLInputElement>this.homeUrl).value}/porownaj-produkty?product_cat=${this.data.group}&products=${this.data.product}`;
    linkEl.textContent = this.innerText;

    (() =>
      new Promise<void>((resolve) => {
        this.container.innerHTML = '';

        resolve();
      })
        .then(() => {
          this.container.appendChild(linkEl);
        })
        .then(() => {
          this.numberContainer.innerText = String(this.data.product.length);
        }))();
  }

  public updateNavLinks(): void {
    const navLinksItems: HTMLElement[] = Array.from(document.querySelectorAll('.compare-item'));
    const url = `${(<HTMLInputElement>this.homeUrl).value}/porownaj-produkty?product_cat=${this.data.group}&products=${this.data.product}`;

    if (navLinksItems.length === 0) return;

    navLinksItems.forEach((item: HTMLElement) => {
      const linkItem: HTMLAnchorElement = item.querySelector('a');

      if (!linkItem) return;

      linkItem.href = url;
    });
  }
}

class ProductCompare {
  private addCompare: string;

  private lsValue: string = 'CompareDataObject';

  private homeUrl: HTMLElement = document.getElementById('home-url');

  private themeUrl: HTMLElement = document.getElementById('theme-url');

  private compareUrl: HTMLElement = document.getElementById('compare-url');

  private consumerKey: string;

  private consumerSecret: string;

  constructor(addCompare: string) {
    this.addCompare = addCompare;
  }

  public getKeys(): void {
    let key: string;
    let secret: string;
    const url: string = `${(<HTMLInputElement>this.homeUrl).value}/wp-json/acf/v3/options/options`;

    apiFetch({
      path: url,
      credentials: 'same-origin',
    }).then((acf: RestAPI) => {
      const api = acf.acf.wc_api;

      if (!api) return;

      key = acf.acf.wc_api.consumer_key;
      secret = acf.acf.wc_api.consumer_secret;

      return [key, secret];
    });
  }

  public init(): void {
    const buttons: NodeListOf<HTMLLinkElement> = document.querySelectorAll(this.addCompare);

    if (this.addCompare.length === 0) return;

    const funcAddProd: (ev: Event) => void = (ev: Event) => {
      ev.preventDefault();

      let compareDataObject: string;
      let data: LSData;
      const target: HTMLLinkElement = <HTMLLinkElement>ev.target;
      const dataGroup: string = target.dataset.group;
      const dataProduct: string = target.dataset.product;

      if (!dataGroup && !dataProduct) {
        throw new Error('Missing data!');
      }

      compareDataObject = localStorage.getItem(this.lsValue);
      data = {
        group: dataGroup,
        product: [dataProduct],
      };

      if (!compareDataObject) {
        this.setLocalStorage(data);

        return;
      }

      /**
       * If LS exists, check Product Group
       * If not match, change LS
       */
      this.changeLocalStorage(compareDataObject, data);
    };

    buttons.forEach((button: HTMLLinkElement) => {
      button.addEventListener('click', funcAddProd);
    });
  }

  public showButton(): void {
    let data: LSData;
    const compareDataObject: string = localStorage.getItem(this.lsValue);

    if (!compareDataObject) {
      return;
    }

    data = JSON.parse(compareDataObject);

    this.fetchGroupdData(data);
  }

  protected setLocalStorage(data: LSData): void {
    this.fetchGroupdData(data);

    localStorage.setItem(this.lsValue, JSON.stringify(data));
  }

  protected updateLocalStorage(currentData: LSData, newID: string): LSData {
    const ids: string[] = currentData.product;

    ids.push(newID);

    currentData.product = ids;

    return currentData;
  }

  protected changeLocalStorage(lsData: string, newData: LSData): void {
    let data: LSData;
    const displayError = (message: string) => {
      const errorContaienr: HTMLElement = document.createElement('div');

      errorContaienr.className = 'compare-error bg-white text-red text-center md:text-lg font-bold px-12 py-4 border-2 border-red fixed left-1/2 bottom-4 z-50 transition-all duration-300 ease-out shadow-xl';
      errorContaienr.innerHTML = `<span>${message}</span>`;

      (() =>
        new Promise((resolve): void => {
          document.body.appendChild(errorContaienr);

          resolve(errorContaienr);
        })
          .then((cont: HTMLElement) => {
            setTimeout(() => {
              cont.classList.add('show');
            }, 250);

            return cont;
          })
          .then((cont: HTMLElement) => {
            setTimeout(() => {
              (() =>
                new Promise((resolve) => {
                  cont.classList.remove('show');

                  resolve(cont);
                }).then((cont: HTMLElement) => {
                  setTimeout(() => {
                    cont.remove();
                  }, 300);
                }))();
            }, 5000);

            return cont;
          }))();
    };
    const update: Promise<LSData> = new Promise((resolve, reject) => {
      data = JSON.parse(lsData);

      if (!data.group) {
        this.setLocalStorage(newData);

        reject(new Error('Missing LS Data!'));
      }

      resolve(data);
    })
      .then((resp: LSData) => {
        const currentGroup: string = resp.group;
        const newGroup: string = newData.group;

        if (currentGroup !== newGroup) {
          const linkContainer: HTMLElement = document.querySelector('.compare-cta__copy');
          const numContainer: HTMLSpanElement = document.querySelector('.compare-cta__count');

          (() =>
            new Promise<void>((resolve) => {
              localStorage.setItem(this.lsValue, JSON.stringify(newData));

              resolve();
            })
              .then(() => {
                linkContainer.innerHTML = '';
              })
              .then(() => {
                if (!linkContainer) return;
                const spanEl: HTMLSpanElement = document.createElement('span');

                spanEl.innerText = 'Min. 2 produkty aby porównać';

                linkContainer.appendChild(spanEl);
              })
              .then(() => {
                if (!numContainer) return;

                numContainer.innerText = '1';
              })
              .then(() => {
                const url: string = `${(<HTMLInputElement>this.homeUrl).value}/wp-json/wc/v3/products/categories/${newData.group}?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;

                apiFetch({
                  path: url,
                  credentials: 'same-origin',
                })
                  .then((category: FetchUrlObj) => {
                    const image = category.image;

                    if (!category.image) {
                      const src: string = `${(<HTMLInputElement>this.themeUrl).value}/img/kitchen_blender.svg`;

                      return src;
                    }
                    return image.src;
                  })
                  .then((url: string) => {
                    const image: HTMLImageElement = document.querySelector('.compare-cta__icon img');

                    image.src = url;
                  });
              })
              .catch((err) => {
                return err;
              }))();

          return;
        }

        if (resp.product.length >= 3) {
          displayError(lang.tooManuProducts);

          throw new Error(lang.tooManuProducts);
        }

        const [newProducId] = newData.product;

        if (resp.product.includes(newProducId)) {
          throw new Error('Product already exists!');
        }

        return this.updateLocalStorage(resp, newProducId);
      })
      .then((resp: LSData) => {
        const response: ResponseData = {
          response: 'ok',
          group: resp.group,
          product: resp.product,
        };

        localStorage.setItem(this.lsValue, JSON.stringify(resp));

        return response;
      })
      .catch((err) => {
        return err;
      });

    update.then((data: ResponseData) => {
      if (data.response !== 'ok') {
        throw 'Product exists!';
      }

      if (data.product.length > 1) {
        let link: CreateLink;
        const linkContainer: HTMLElement = document.querySelector('.compare-cta__copy');
        const numContainer: HTMLSpanElement = document.querySelector('.compare-cta__count');

        if (!linkContainer || !numContainer) return;

        link = new CreateLink(linkContainer, numContainer, <HTMLInputElement>this.homeUrl, data, 'Sprawdź');

        link.insert();

        link.updateNavLinks();

        return;
      }

      this.fetchGroupdData(data);
    });
  }

  protected fetchGroupdData(data: LSData): void {
    const optionsURL: string = `${(<HTMLInputElement>this.homeUrl).value}/wp-json/acf/v3/options/options`;

    apiFetch({
      path: optionsURL,
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

        const url: string = `${(<HTMLInputElement>this.homeUrl).value}/wp-json/wc/v3/products/categories/${data.group}?consumer_key=${key}&consumer_secret=${secret}`;

        apiFetch({
          path: url,
          credentials: 'same-origin',
        })
          .then((category: FetchUrlObj) => {
            const image = category.image;

            if (!category.image) {
              const src: string = `${(<HTMLInputElement>this.themeUrl).value}/img/kitchen_blender.svg`;

              return src;
            }
            return image.src;
          })
          .then((img: string) => {
            const newButton: ProductCompareButton = new ProductCompareButton(img, data.product.length, (<HTMLInputElement>this.compareUrl).value, data, '.compare-item');

            newButton.displayButton();
          })
          .catch((err) => {
            return err;
          });
      });
  }
}

export { ProductCompare, LSData };
