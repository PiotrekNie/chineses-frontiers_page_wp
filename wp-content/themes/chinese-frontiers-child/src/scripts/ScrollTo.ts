class ScrollTo {
  private links: NodeListOf<Element> = document.querySelectorAll(
    'a[href^="#"]:not([href="#"]):not(.tabs a)'
  );

  private sec: HTMLElement;

  public init(): void {
    this.links.forEach((link: HTMLElement) => {
      link.addEventListener("click", this.scrollFunc);
    });
  }

  protected scrollFunc: (event: Event) => void = (event: Event) => {
    event.preventDefault();
    // Get link href attribute value
    const linkhref: string = (<HTMLLinkElement>event.target).href;
    /**
     * @type {string} Get link href attribute value
     */
    const hash: string = linkhref.substring(linkhref.indexOf("#") + 1);
    /**
     * @type {object} Get section by id
     */
    this.sec = <HTMLElement>document.getElementById(hash);

    if (this.sec) {
      // Get header client height
      const headerHeight: number = document.querySelector("#masthead").clientHeight;
      // Offset: ex. Head height
      const offset: number = headerHeight + 100;
      // Get body position
      const bodyRect: number = document.body.getBoundingClientRect().top;
      // Get section position relative
      const sectionRect: number = Math.round(this.sec.getBoundingClientRect().top);
      // Substract: the section from body;
      const sectionPosition: number = sectionRect - bodyRect - offset;
      // Scroll animation
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };
}

export default ScrollTo;
