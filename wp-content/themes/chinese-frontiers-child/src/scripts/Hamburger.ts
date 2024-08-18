import wait from "./helpers/wait";

class Hamburger {
  private hamburger: HTMLElement;

  private navigationClass: string;

  private navigationMobile: HTMLElement;

  private navigationMobileBack: string;

  private mobileBack: HTMLElement;

  private header: HTMLElement;

  private menuMobile: HTMLElement;

  private closeButton: HTMLElement;

  constructor(
    hamburgerClass: string,
    navigationClass: string,
    navigationMobile: string,
    header: string
  ) {
    this.hamburger = document.querySelector(hamburgerClass);
    this.navigationClass = navigationClass;
    this.navigationMobile = document.querySelector(navigationMobile);
    this.header = document.querySelector(header);
    this.menuMobile = document.querySelector(`${navigationMobile}__nav`);
    this.closeButton = document.querySelector(`${navigationMobile}__button`);
  }

  public init(): void {
    this.mobileBack = document.querySelector(this.navigationMobileBack);

    if (!this.hamburger) {
      return;
    }

    (<HTMLElement>document.querySelector(`.mobile-menu__nav`)).dataset.clicks = "0";

    if (!this.navigationMobile) {
      return;
    }

    const funcToggleMenu: (ev: Event) => void = async (ev: Event) => {
      ev.preventDefault();
      this.navigationMobile.classList.toggle("show");
      this.hamburger.classList.toggle("active");
      this.header.classList.toggle("menu-opened");
    };

    this.hamburger.addEventListener("click", funcToggleMenu);
  }

  private funcCloseMenu = () => {
    this.navigationMobile.classList.remove("show");
    this.hamburger.classList.remove("active");
    this.header.classList.remove("menu-opened");
  };

  public copyNav(): void {
    const menuContainer: HTMLElement = document.querySelector(this.navigationClass);
    const funcMobileMenuTrigger = (ev: Event) => {
      const linkhref: string = (<HTMLLinkElement>ev.target).href;
      const hash: string = linkhref.substring(linkhref.indexOf("#") + 1);

      if (hash) {
        ev.preventDefault();

        const section = <HTMLElement>document.getElementById(hash);

        if (section) {
          const headerHeight: number = document.querySelector("#masthead").clientHeight;
          const offset: number = headerHeight + 100;
          const bodyRect: number = document.body.getBoundingClientRect().top;
          const sectionRect: number = Math.round(section.getBoundingClientRect().top);
          const sectionPosition: number = sectionRect - bodyRect - offset;
          // Scroll animation
          window.scrollTo({
            top: sectionPosition,
            behavior: "smooth",
          });
          this.menuMobile.removeEventListener("click", funcMobileMenuTrigger);
          this.funcCloseMenu();
        }
      }
    };

    if (!menuContainer || !this.menuMobile) {
      return;
    }

    const nav: HTMLElement = document.createElement("nav");

    const menu: string = menuContainer.innerHTML;

    const activeLinks = menu.replace(/open-menu/g, "");

    nav.className = "d-flex flex-column align-items-center";

    nav.innerHTML = activeLinks;

    this.menuMobile.appendChild(nav);

    const menuItems: NodeListOf<HTMLAnchorElement> = this.menuMobile.querySelectorAll("a");

    menuItems.forEach((menuItem: HTMLAnchorElement) => {
      menuItem.addEventListener("click", funcMobileMenuTrigger);
    });
  }

  public activeMenu(): void {
    const funcOpenSubmenu: (ev: Event) => void = (ev: Event) => {
      const target: HTMLElement = <HTMLElement>ev.target;

      if (target.parentElement.classList.contains("menu-item-has-children")) {
        ev.preventDefault();
        target.classList.add("active");
        target.parentElement.classList.add("active");
        target.parentElement.parentElement.classList.add("menu-opened");

        let clicks: number = Number(this.menuMobile.dataset.clicks);

        (() =>
          new Promise((resolve: (value: number) => void) => {
            resolve((clicks += 1));
          })
            .then((result: number) => {
              this.menuMobile.dataset.clicks = String(result);

              return result;
            })
            .then((result: number) => {
              if (result === 1) {
                this.mobileBack.classList.add("show");
              }
            }))();
      }
    };

    if (!this.menuMobile) return;

    this.menuMobile.addEventListener("click", funcOpenSubmenu);
  }

  public close(): void {
    if (!this.closeButton || !this.navigationMobile) {
      return;
    }
    0;
    const funcCloseMenu: (ev: Event) => void = (ev: Event) => {
      ev.preventDefault();

      this.navigationMobile.classList.remove("show");
    };

    this.closeButton.addEventListener("click", funcCloseMenu);
  }

  protected back(ev: Event): void {
    ev.preventDefault();
    let menuMobile: number = Number(
      (<HTMLElement>document.querySelector(`.mobile-menu__nav`)).dataset.clicks
    );
    const target: HTMLLinkElement = <HTMLLinkElement>ev.target;
    const targetDataId: string = target.dataset.backid;
    const targetElement: HTMLElement = document.querySelector(`#mobile-menu #${targetDataId}`);

    targetElement.classList.remove("active");
    targetElement.firstElementChild.classList.remove("active");
    targetElement.parentElement.classList.remove("menu-opened");

    menuMobile -= 1;

    (<HTMLElement>document.querySelector(`.mobile-menu__nav`)).dataset.clicks = String(menuMobile);

    // Change target data id & hide
    const activeLinks: NodeListOf<HTMLElement> = document.querySelectorAll(
      "#mobile-menu .menu-item.active"
    );

    if (activeLinks.length === 0) {
      target.nextElementSibling.textContent = "";

      target.parentElement.classList.remove("show");

      (<HTMLElement>document.querySelector(`.mobile-menu__nav`)).dataset.clicks = "0";

      return;
    }

    const lastActiveLink: HTMLElement = activeLinks[activeLinks.length - 1];

    target.dataset.backid = lastActiveLink.id;

    target.nextElementSibling.textContent = lastActiveLink.firstElementChild.textContent;
  }
}

export default Hamburger;
