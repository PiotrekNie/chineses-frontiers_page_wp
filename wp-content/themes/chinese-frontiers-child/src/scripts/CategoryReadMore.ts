class CategoryReadMore {
  private button: string;

  private container: string;

  constructor(button: string, container: string) {
    this.button = button;
    this.container = container;
  }

  public init(): void {
    let opened: boolean = false;
    const btn: HTMLLinkElement = document.querySelector(this.button);
    const cont: HTMLElement = document.querySelector(this.container);

    const funcToggle: (ev: Event) => void = (ev: Event) => {
      ev.preventDefault();

      opened = !opened;
      cont.classList.toggle('show');

      if (opened) {
        btn.textContent = 'Zwiń';

        return;
      }

      btn.textContent = 'Zobacz więcej';
    };

    if (!btn || !cont) return;

    btn.addEventListener('click', funcToggle);
  }
}

export default CategoryReadMore;
