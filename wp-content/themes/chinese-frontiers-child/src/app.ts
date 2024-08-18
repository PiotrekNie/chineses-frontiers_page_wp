import "./css/app.scss";
import ScrollTo from "./scripts/ScrollTo";
import Hamburger from "./scripts/Hamburger";
import NavigationHeader from "./scripts/NavigationHeader";
import Svg from "./scripts/Svg";
import ActiveHeader from "./scripts/ActiveHeader";
import ReadMore from "./scripts/ReadMore";
import Checkbox from "./scripts/Checkbox";
import jQuery from "jquery";

class App {
  /**
   * Smooth scroll
   *
   * @private
   * @type {ScrollTo}
   * @memberof App
   */
  private scrollTo: ScrollTo = new ScrollTo();

  /**
   * Mobile navigation
   *
   * @private
   * @type {Hamburger}
   * @memberof App
   */
  private hamburger: Hamburger = new Hamburger(
    ".hamburger",
    ".menu-main-menu-container",
    ".mobile-menu",
    ".site-header"
  );

  /**
   * Mobile search
   *
   * @private
   * @type {NavigationHeader}
   * @memberof App
   */
  private navigation: NavigationHeader = new NavigationHeader(
    "#languages-menu a + .sub-menu",
    "#languages-menu li:not(.lang-item) > a",
    ".site-header__search--close"
  );

  /**
   * Transform img file to svg
   *
   * @private
   * @type {Svg}
   * @memberof App
   */
  private convertSvg: Svg = new Svg(".convert-svg", /\.(svg)$/i);

  /**
   * Shrink header on scroll
   *
   * @private
   * @type {ActiveHeader}
   * @memberof App
   */
  private activeHeader: ActiveHeader = new ActiveHeader(".site-header");

  /**
   * Newsletter form - read more text for agreemenst
   *
   * @private
   * @type {ReadMore}
   * @memberof App
   */
  private readMore: ReadMore = new ReadMore(".label-readmore");

  /**
   * Change checkboxes value
   *
   * @private
   * @memberof App
   */
  private checkboxes = new Checkbox('input[type="checkbox"]');

  constructor() {
    this.initApp();
  }

  private initApp(): void {
    this.scrollTo.init();
    this.hamburger.init();
    this.hamburger.copyNav();
    this.hamburger.activeMenu();
    this.hamburger.close();
    this.navigation.init();
    this.convertSvg.init();
    this.activeHeader.pageScroll();
    this.readMore.show();
    this.checkboxes.init();

    jQuery(document).on("yith-wcan-ajax-filtered", () => {
      this.scrollTo.init();
      this.hamburger.init();
      this.hamburger.copyNav();
      this.hamburger.close();
      this.navigation.init();
      this.convertSvg.init();
      this.activeHeader.pageScroll();
      this.readMore.show();
      this.checkboxes.init();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => new App());
