class NavigationHeader {
  private navigation: string;

  private button: string;

  private closeButton: string;

  constructor(navigation: string, button: string, closeButton: string) {
    this.navigation = navigation;
    this.button = button;
    this.closeButton = closeButton;
  }

  public init(): void {
    let ticking: boolean = false;
    let isActiveButton: HTMLLinkElement;
    let activeNavigation: Element[];
    let funcHideOnScroll: () => void;
    let funcHide: (ev: Event) => void;
    const navigationContainer: Element[] = Array.from(
      document.querySelectorAll(`${this.navigation}`)
    );
    const btn: Element[] = Array.from(document.querySelectorAll(this.button));
    const siteHeader: HTMLElement = document.querySelector(".site-header");

    if (!navigationContainer || !btn || !siteHeader) {
      throw new Error("Missing element!");
    }

    const funcHideEl: (el: HTMLElement) => void = (el: HTMLElement) => {
      el.classList.remove("active");
      el.parentElement.parentElement.classList.remove("menu-opened");
    };

    const funcHideAllNav: (elArray: Element[]) => void = async (elArray: Element[]) => {
      [...elArray].forEach((key: HTMLElement) => funcHideEl(key));

      isActiveButton = null;

      document.body.removeEventListener("click", funcHide);

      document.removeEventListener("scroll", funcHideOnScroll);
    };

    funcHide = async (ev?: Event) => {
      const target: Element = <Element>ev.target;

      if (!activeNavigation[0]) {
        // if (target instanceof HTMLElement && target?.href.)

        return;
      }

      if (
        !activeNavigation[0].previousElementSibling.classList.contains("active") ||
        target.classList.contains("open-menu")
      ) {
        return;
      }

      if (!activeNavigation[0].parentElement.contains(target)) {
        funcHideAllNav(btn);

        activeNavigation = [];

        document.body.removeEventListener("click", funcHide);

        isActiveButton = null;

        document.removeEventListener("scroll", funcHideOnScroll);
      }
    };

    funcHideOnScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(async () => {
          funcHideAllNav(btn);

          ticking = false;

          activeNavigation = [];
        });

        ticking = true;

        document.body.removeEventListener("click", funcHide);

        document.removeEventListener("scroll", funcHideOnScroll);

        isActiveButton = null;
      }
    };

    const funcToogleNavigation: (ev: Event) => void = async (ev: Event) => {
      ev.preventDefault();

      const target: HTMLLinkElement = <HTMLLinkElement>ev.target;
      const keyElement: HTMLElement = <HTMLElement>target.nextElementSibling;
      const close: HTMLLinkElement = document.querySelector(this.closeButton);
      const windowHeight: number = window.innerHeight;

      if (target !== isActiveButton) {
        funcHideAllNav(navigationContainer);

        funcHideAllNav(btn);

        target.classList.toggle("active");

        target.parentElement.parentElement.classList.toggle("menu-opened");

        activeNavigation = [keyElement, target];

        document.body.addEventListener("click", funcHide);

        if (keyElement && keyElement.clientHeight + siteHeader.clientHeight < windowHeight) {
          document.addEventListener("scroll", funcHideOnScroll);
        }

        isActiveButton = target;

        if (!keyElement) return;

        const formInput: HTMLInputElement = keyElement.querySelector("input");

        if (!formInput) return;

        formInput.focus();

        if (!close) return;

        close.addEventListener("click", () => {
          funcHideAllNav(navigationContainer);
          funcHideAllNav(btn);
        });

        return;
      }

      funcHideAllNav(navigationContainer);

      funcHideAllNav(btn);
    };

    [...btn].forEach((key: Element) => {
      key.addEventListener("click", funcToogleNavigation);
    });
  }
}

export default NavigationHeader;
