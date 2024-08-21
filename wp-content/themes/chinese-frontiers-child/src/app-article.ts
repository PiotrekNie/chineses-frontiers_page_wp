import ArticleNavigation from "./scripts/ArticleNav";

class App {
  private nav: ArticleNavigation = new ArticleNavigation(".article__aside--list");

  constructor() {
    this.initApp();
  }

  private initApp(): void {
    this.nav.init();

    jQuery(document).on("yith-wcan-ajax-filtered", () => {
      this.nav.init();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => new App());
