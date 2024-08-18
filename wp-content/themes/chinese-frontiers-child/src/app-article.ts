import ArticleNavigation from "./scripts/ArticleNav";

class App {
  private nav: ArticleNavigation = new ArticleNavigation(".article__aside--list");

  constructor() {
    this.initApp();
  }

  private initApp(): void {
    this.nav.init();
  }
}

document.addEventListener("DOMContentLoaded", () => new App());
