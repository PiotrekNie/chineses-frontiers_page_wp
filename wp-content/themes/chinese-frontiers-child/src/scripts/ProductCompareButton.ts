import { doc } from 'prettier';
import wait from './helpers/wait';
import currentLang from './Lang';

interface LSData {
  group: string;
  product: string[];
}

class ProductCompareButton {
  private imageUrl: string;

  private count: number;

  private pageUrl: string;

  private lsValue: string = 'CompareDataObject';

  private data: LSData;

  private navLinks?: string;

  constructor(imageUrl: string, count: number, pageUrl: string, data: LSData, navLinks?: string) {
    this.imageUrl = imageUrl;
    this.count = count;
    this.pageUrl = pageUrl;
    this.data = data;
    this.navLinks = navLinks;
  }

  public async displayButton(): Promise<void> {
    let button: HTMLElement;
    const navLinksItems: HTMLElement[] = Array.from(document.querySelectorAll(this.navLinks));
    const url: string = `${this.pageUrl}?product_cat=${this.data.group}&products=${this.data.product}`;
    const funcUpdateLinks = async (url: string) => {
      navLinksItems.forEach((item: HTMLElement) => {
        const linkItem: HTMLAnchorElement = item.querySelector('a');

        if (!linkItem) return;

        linkItem.href = url;
      });
    };

    const insertButton = async () => {
      button = document.createElement('div');
      const copy: string = this.count === 1 ? `<span>${currentLang.minProducts}</span>` : `<a href="${url}">${currentLang.compare}</a>`;

      button.className = 'compare-cta';

      button.innerHTML = `<span class="compare-cta__icon"><img src="${this.imageUrl}" alt="product"><span class="compare-cta__count">${this.count}</span></span><span class="compare-cta__close">&times;</span><span class="compare-cta__copy">${copy}</span>`;

      document.body.appendChild(button);
    };

    const funcRemoveButton: (ev: Event) => void = async (ev: Event) => {
      const target: HTMLElement = <HTMLElement>ev.target;

      if (!target.classList.contains('compare-cta__close')) {
        return;
      }

      const hideButton: () => void = async () => {
        target.parentElement.classList.remove('show');
      };

      hideButton();
      await wait(1000)
        .then(() => {
          localStorage.removeItem(this.lsValue);
        })
        .then(() => {
          (<HTMLElement>ev.target).parentElement.remove();
        })
        .then(() => {
          document.body.removeEventListener('click', funcRemoveButton);
        })
        .then(() => funcUpdateLinks(`${this.pageUrl}/porownaj-produkty`));
    };

    await insertButton();
    await funcUpdateLinks(url);
    await wait(1000)
      .then(() => {
        button.classList.add('show');
      })
      .then(() => {
        document.body.addEventListener('click', funcRemoveButton);
      });
  }
}

export default ProductCompareButton;
