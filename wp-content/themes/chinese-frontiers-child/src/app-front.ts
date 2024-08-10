import './css/app-front.scss';
import AOS from 'aos';

class App {
  /**
   * Add AOS attributes
   *
   * @private
   * @type {ProductAttr}
   * @memberof App
   */
  constructor() {
    this.initApp();
  }

  private initApp(): void {
    AOS.init({
      duration: 300,
      offset: 200,
      easing: 'ease-in-sine',
      once: true,
    });
  }
}

document.addEventListener('DOMContentLoaded', () => new App());
