class ReadMore {
  private readMoreClass: string;

  constructor(readMoreClass: string) {
    this.readMoreClass = readMoreClass;
  }

  public show(): void {
    const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll(this.readMoreClass);

    if (links.length === 0) return;

    const linkClick: (ev: Event) => void = (ev: Event) => {
      ev.preventDefault();

      const target: HTMLLinkElement = <HTMLLinkElement>ev.target;
      const linkData: string = target.dataset.collapse;
      const textContainer: HTMLElement = document.getElementById(`collapse-${linkData}`);

      textContainer.classList.toggle('show');
    };

    links.forEach((link: HTMLButtonElement) => {
      link.addEventListener('click', linkClick);
    });
  }
}

export default ReadMore;
