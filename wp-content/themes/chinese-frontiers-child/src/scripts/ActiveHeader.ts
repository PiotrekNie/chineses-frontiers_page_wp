import { debounce } from 'ts-debounce';

class ActiveHeader {
  private headerClass: string;

  constructor(headerClass: string) {
    this.headerClass = headerClass;
  }

  public pageScroll(): void {
    const header: HTMLElement = document.querySelector(this.headerClass);
    const headerClassName = header.className;
    const scroll: () => void = () => {
      window.pageYOffset === 0 ? (header.className = headerClassName) : (header.className = `${headerClassName} active`);
    };
    const debouncedFunction: () => Promise<void> = debounce(scroll, 300);

    scroll();

    window.addEventListener('scroll', debouncedFunction);
  }
}

export default ActiveHeader;
