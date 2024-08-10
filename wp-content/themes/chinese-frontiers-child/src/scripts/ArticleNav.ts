class ArticleNavigation {
  private navigationClass: string;

  private articleH2List: HTMLElement[];

  constructor(navigationClass: string) {
    this.navigationClass = navigationClass;
    this.articleH2List = Array.from(document.querySelectorAll('article h2'));
  }

  public async init(): Promise<void> {
    await this.addNavigationList();
    await this.addListener();
  }

  protected async addNavigationList(): Promise<void> {
    const navigationListContainer: HTMLOListElement = document.querySelector(this.navigationClass);

    if (!navigationListContainer) {
      throw new Error('Article: Missing navigation container!');
    }

    [...this.articleH2List].forEach((h2: HTMLElement, index: number) => {
      const li: HTMLElement = document.createElement('li');

      li.innerHTML = `<a href="#subtitle-${index}">${h2.textContent}</a>`;

      h2.id = `subtitle-${index}`;
      navigationListContainer.appendChild(li);
    });
  }

  protected async addListener(): Promise<void> {
    const navigationListContainer: HTMLOListElement = document.querySelector(this.navigationClass);

    navigationListContainer.addEventListener('click', (ev: Event) => {
      const link = <HTMLLinkElement>ev.target;

      if (link.tagName.toLowerCase() === 'a') {
        ev.preventDefault();

        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

export default ArticleNavigation;
