import "./css/app-page.scss";
import AOS from "aos";
import FilterToogle from "./scripts/FilterToggle";
import CategoryReadMore from "./scripts/CategoryReadMore";

class App {
  /**
   * Toggle category filter menu on mobile
   *
   * @private
   * @type {FilterToogle}
   * @memberof App
   */
  private filter: FilterToogle = new FilterToogle(".btn-toggle", ".filter__yith");

  /**
   * Category page: Toggle category description text
   *
   * @private
   * @type {CategoryReadMore}
   * @memberof App
   */
  private button: CategoryReadMore = new CategoryReadMore(
    ".post-object__button",
    ".post-object__text--content"
  );

  constructor() {
    this.initApp();
  }

  private initApp(): void {
    AOS.init({
      duration: 300,
      offset: 200,
      easing: "ease-in-sine",
      once: true,
    });

    this.filter.init();
    this.button.init();

    jQuery(document).on("yith-wcan-ajax-filtered", () => {
      this.filter.init();
      this.button.init();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => new App());
