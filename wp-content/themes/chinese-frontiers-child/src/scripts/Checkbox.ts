class Checkbox {
  private checkboxClass: string;
  constructor(checkboxClass: string) {
    this.checkboxClass = checkboxClass;
  }

  public init(): void {
    const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(this.checkboxClass);
    const funcToggleValue = (ev: Event): void => {
      const input = <HTMLInputElement>ev.target;

      if (input.checked) {
        input.value = '1';
        return;
      }

      input.value = '0';
    };

    checkboxes.forEach((input) => {
      input.addEventListener('change', funcToggleValue);
    });
  }
}

export default Checkbox;
