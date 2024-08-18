import "./css/app-front.scss";

import AOS from "aos";
import MainForm from "./scripts/Newsletter";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import jQuery from "jquery";

class App {
  /**
   * Add AOS attributes
   *
   * @private
   * @type {ProductAttr}
   * @memberof App
   */
  /**
   * Validate & submit newsletter form
   *
   * @private
   * @memberof App
   */
  private form = new MainForm("#newsletter");

  private swiper: Swiper = new Swiper(".swiper-scenes", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    init: false,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  });

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
    this.form.init();
    this.swiper.init();

    jQuery(document).on("yith-wcan-ajax-filtered", () => {
      this.form.init();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => new App());
