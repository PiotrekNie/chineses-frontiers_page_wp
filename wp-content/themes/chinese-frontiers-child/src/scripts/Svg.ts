class Svg {
  private elClass: string;

  private extension: RegExp;

  constructor(elClass: string, extension: RegExp) {
    this.elClass = elClass;
    this.extension = extension;
  }

  public init() {
    const allImages: NodeListOf<HTMLImageElement> = document.querySelectorAll(this.elClass);
    const parser: DOMParser = new DOMParser();

    if (allImages.length === 0) return;

    allImages.forEach((img: HTMLImageElement) => {
      const src: string = img.src;

      if (this.extension.exec(src)) {
        fetch(src)
          .then((response: Response) => response.text())
          .then((text) => {
            const parsed: Document = parser.parseFromString(text, 'text/html');

            const svg: SVGSVGElement = parsed.querySelector('svg');

            if (img !== null && svg !== null) {
              img.replaceWith(svg);
            }
          });
      }
    });
  }
}

export default Svg;
