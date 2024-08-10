class ProductAttr {
  private classes: string[];

  constructor(classes: string[]) {
    this.classes = classes;
  }

  public init(): void {
    if (this.classes.length === 0) return;

    [...this.classes].forEach((classEl: string) => {
      const el: NodeListOf<HTMLElement> = document.querySelectorAll(classEl);

      if (el.length === 0) return;

      el.forEach((e: HTMLElement) => {
        e.setAttribute('data-aos', 'fade');
      });
    });
  }
}

export default ProductAttr;
