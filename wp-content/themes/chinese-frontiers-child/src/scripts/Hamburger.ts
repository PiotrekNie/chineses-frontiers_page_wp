import wait from './helpers/wait';

class Hamburger {
  private hamburgerClass: string;

  private navigationClass: string;

  private navigationMobile: string;

  private headerClass: string;

  private navigationMobileBack: string;

  private backButton: HTMLLinkElement;

  private submenuTitle: HTMLElement;

  private menuMobileSubmenu: NodeListOf<HTMLElement>;

  private mobileBack: HTMLElement;

  constructor(hamburgerClass: string, navigationClass: string, navigationMobile: string, navigationMobileBack: string, headerClass: string) {
    this.hamburgerClass = hamburgerClass;
    this.navigationClass = navigationClass;
    this.navigationMobile = navigationMobile;
    this.navigationMobileBack = navigationMobileBack;
    this.headerClass = headerClass;
  }

  public init(): void {
    const hamburger: HTMLElement = document.querySelector(this.hamburgerClass);
    const header: HTMLElement = document.querySelector(this.headerClass);
    this.mobileBack = document.querySelector(this.navigationMobileBack);
    this.backButton = document.querySelector(`${this.navigationMobileBack}--back`);
    this.submenuTitle = document.querySelector(`${this.navigationMobileBack}--title`);

    if (!hamburger && !header) {
      return;
    }

    (<HTMLElement>document.querySelector(`.mobile-menu__nav`)).dataset.clicks = '0';

    const menuMobile: HTMLElement = document.querySelector(this.navigationMobile);

    if (!menuMobile) {
      return;
    }

    const funcToggleMenu: (ev: Event) => void = async (ev: Event) => {
      ev.preventDefault();
      menuMobile.classList.toggle('show');
      hamburger.classList.toggle('active');
      header.classList.toggle('menu-opened');

      if (!menuMobile.classList.contains('show')) {
        this.menuMobileSubmenu = document.querySelectorAll('#mobile-menu .menu-item.active');

        // Reset header navigation
        this.mobileBack.classList.remove('show');
        (<HTMLElement>document.querySelector(`.mobile-menu__nav`)).dataset.clicks = '0';

        if (this.menuMobileSubmenu.length === 0) return;

        await wait(1000)
          .then(() => {
            this.menuMobileSubmenu.forEach((key: HTMLElement) => {
              key.classList.remove('active');
              key.parentElement.classList.remove('menu-opened');
              key.firstElementChild.classList.remove('active');
            });
          })
          .then(() => {
            this.backButton.removeEventListener('click', this.back);
            // Change navigation title
            this.submenuTitle.textContent = '';

            // Hide header navigation
            this.mobileBack.classList.remove('show');
          });

        return;
      }
    };

    hamburger.addEventListener('click', funcToggleMenu);
  }

  public copyNav(): void {
    const menuContainer: HTMLElement = document.querySelector(this.navigationClass);
    const menuMobile: HTMLElement = document.querySelector(`${this.navigationMobile}__nav`);

    if (!menuContainer || !menuMobile) {
      return;
    }

    const nav: HTMLElement = document.createElement('nav');

    const menu: string = menuContainer.innerHTML;

    const activeLinks = menu.replace(/open-menu/g, '');

    nav.className = 'd-flex flex-column align-items-center';

    nav.innerHTML = activeLinks;

    menuMobile.appendChild(nav);
  }

  public activeMenu(): void {
    const menuMobile: HTMLElement = document.querySelector(`${this.navigationMobile}__nav`);

    const funcOpenSubmenu: (ev: Event) => void = (ev: Event) => {
      const target: HTMLElement = <HTMLElement>ev.target;
      const targetText: string = target.textContent;
      this.menuMobileSubmenu = document.querySelectorAll('#mobile-menu .menu-item.active');

      if (target.parentElement.classList.contains('menu-item-has-children')) {
        ev.preventDefault();
        target.classList.add('active');
        target.parentElement.classList.add('active');
        target.parentElement.parentElement.classList.add('menu-opened');

        // Change navigation title
        this.submenuTitle.textContent = targetText;

        let clicks: number = Number(menuMobile.dataset.clicks);

        (() =>
          new Promise((resolve: (value: number) => void) => {
            resolve((clicks += 1));
          })
            .then((result: number) => {
              menuMobile.dataset.clicks = String(result);

              return result;
            })
            .then((result: number) => {
              if (result === 1) {
                this.mobileBack.classList.add('show');
                this.backButton.addEventListener('click', this.back);
              }
            }))();

        // Setup back button
        this.backButton.dataset.backid = target.parentElement.id;
      }
    };

    if (!menuMobile) return;

    menuMobile.addEventListener('click', funcOpenSubmenu);
  }

  public close(): void {
    const closeMenu: HTMLElement = document.querySelector(`${this.navigationMobile}__button`);
    const menuMobile: HTMLElement = document.querySelector(this.navigationMobile);

    if (!closeMenu || !menuMobile) {
      return;
    }
    0;
    const funcCloseMenu: (ev: Event) => void = (ev: Event) => {
      ev.preventDefault();

      menuMobile.classList.remove('show');
    };

    closeMenu.addEventListener('click', funcCloseMenu);
  }

  protected back(ev: Event): void {
    ev.preventDefault();
    let menuMobile: number = Number((<HTMLElement>document.querySelector(`.mobile-menu__nav`)).dataset.clicks);
    const target: HTMLLinkElement = <HTMLLinkElement>ev.target;
    const targetDataId: string = target.dataset.backid;
    const targetElement: HTMLElement = document.querySelector(`#mobile-menu #${targetDataId}`);

    targetElement.classList.remove('active');
    targetElement.firstElementChild.classList.remove('active');
    targetElement.parentElement.classList.remove('menu-opened');

    menuMobile -= 1;

    (<HTMLElement>document.querySelector(`.mobile-menu__nav`)).dataset.clicks = String(menuMobile);

    // Change target data id & hide
    const activeLinks: NodeListOf<HTMLElement> = document.querySelectorAll('#mobile-menu .menu-item.active');

    if (activeLinks.length === 0) {
      target.nextElementSibling.textContent = '';

      target.parentElement.classList.remove('show');

      (<HTMLElement>document.querySelector(`.mobile-menu__nav`)).dataset.clicks = '0';

      return;
    }

    const lastActiveLink: HTMLElement = activeLinks[activeLinks.length - 1];

    target.dataset.backid = lastActiveLink.id;

    target.nextElementSibling.textContent = lastActiveLink.firstElementChild.textContent;
  }
}

export default Hamburger;
