class FilterToogle {
  private button: string;

  private filterContainer: string;

  constructor(button: string, filterContainer: string) {
    this.button = button;
    this.filterContainer = filterContainer;
  }

  public init(): void {
    const btn: NodeListOf<HTMLButtonElement | HTMLLinkElement> = document.querySelectorAll(this.button);
    const filter: HTMLElement = document.querySelector(this.filterContainer);
    const funcToogle: () => void = () => {
      filter.classList.toggle('show');
    };

    if (btn.length === 0 || !filter) return;

    btn.forEach((b: HTMLButtonElement | HTMLLinkElement) => {
      b.addEventListener('click', funcToogle);
    });
  }
}

export default FilterToogle;
