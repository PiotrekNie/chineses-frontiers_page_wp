import './css/app.scss';
import ScrollTo from './scripts/ScrollTo';
import Hamburger from './scripts/Hamburger';
import NavigationHeader from './scripts/NavigationHeader';
import Svg from './scripts/Svg';
import ActiveHeader from './scripts/ActiveHeader';
import MainForm from './scripts/Newsletter';
import ReadMore from './scripts/ReadMore';
import Checkbox from './scripts/Checkbox';
import { ProductCompare } from './scripts/ProductCompare';

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
  private hamburger: Hamburger = new Hamburger('.hamburger', '.menu-header-menu-bottom-container', '.mobile-menu', '.site-header__mobile', '.site-header');

  /**
   * Mobile search
   *
   * @private
   * @type {NavigationHeader}
   * @memberof App
   */
  private navigation: NavigationHeader = new NavigationHeader('.open-menu a + .sub-menu', '.open-menu > a', '.site-header__search--close');

  /**
   * Transform img file to svg
   *
   * @private
   * @type {Svg}
   * @memberof App
   */
  private convertSvg: Svg = new Svg('.convert-svg', /\.(svg)$/i);

  /**
   * Shrink header on scroll
   *
   * @private
   * @type {ActiveHeader}
   * @memberof App
   */
  private activeHeader: ActiveHeader = new ActiveHeader('.site-header');

  /**
   * Validate & submit newsletter form
   *
   * @private
   * @memberof App
   */
  private form = new MainForm('#newsletter');

  /**
   * Newsletter form - read more text for agreemenst
   *
   * @private
   * @type {ReadMore}
   * @memberof App
   */
  private readMore: ReadMore = new ReadMore('.label-readmore');

  /**
   * Change checkboxes value
   *
   * @private
   * @memberof App
   */
  private checkboxes = new Checkbox('input[type="checkbox"]');

  /**
   * Add products to compare
   *
   * @private
   * @type {ProductCompare}
   * @memberof App
   */
  private compare: ProductCompare = new ProductCompare('.compare-button');

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
    this.form.init();
    this.readMore.show();
    this.checkboxes.init();
    this.compare.init();
    this.compare.showButton();

    jQuery(document).on('yith-wcan-ajax-filtered', () => {
      this.scrollTo.init();
      this.hamburger.init();
      this.hamburger.copyNav();
      this.hamburger.close();
      this.navigation.init();
      this.convertSvg.init();
      this.activeHeader.pageScroll();
      this.form.init();
      this.readMore.show();
      this.checkboxes.init();
      this.compare.init();
      this.compare.showButton();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => new App());
