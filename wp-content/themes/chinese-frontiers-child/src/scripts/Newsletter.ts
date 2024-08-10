import FormValidation from './helpers/form-validation';
import { DEFAULT_REQUEST_OPTIONS, httpRequest, RequestResult } from './helpers/http-request';

interface MainFormClasses {
  FORM: string;
  THANK_YOU: string;
  LOADING: string;
  SEND: string;
}

interface DataLayer {
  event: string;
}

declare global {
  interface Window {
    dataLayer: DataLayer[];
  }
}

class MainForm extends FormValidation {
  private form: string;

  private thankYou: HTMLElement;

  private formContainer: HTMLDivElement = document.querySelector('.newsletter');

  private errorContainer: HTMLSpanElement = document.querySelector('.nulead-error');

  constructor(form: string) {
    super();
    this.form = form;
  }

  public static get CLASSES(): MainFormClasses {
    return {
      FORM: '#newsletter',
      THANK_YOU: '#thank-you',
      LOADING: 'loading',
      SEND: 'send',
    };
  }

  public init(): void {
    this.setDOMElements();

    this.initFormValidation(this.form);
  }

  protected bouncerFormValid: (event: Event) => void = (event: Event) => {
    if (event.target instanceof HTMLFormElement) {
      const form: HTMLFormElement = event.target;
      const formData: FormData = new FormData(form);
      formData.append('LeadHref', window.location.href);
      formData.append('LeadReferrer', document.referrer);
      formData.append('LeadUA', navigator.userAgent);

      form.classList.add('loading');

      this.errorContainer.textContent = '';
      this.errorContainer.className = 'nulead-error';

      httpRequest('post', 'https://api.nulead.pl/set', DEFAULT_REQUEST_OPTIONS, formData).then((result: RequestResult) => {
        const resultData: { status: string; message: string } = JSON.parse(result.data);

        form.classList.remove(MainForm.CLASSES.LOADING);

        if (resultData.status === 'error') {
          if (resultData.message === 'E-mail already exists.') {
            this.errorContainer.textContent = 'Ten adres e-mail już został zarejestrowany.';

            this.errorContainer.classList.add('show');
          }
          return false;
        }
        if (result.ok) {
          form.reset();
          this.formContainer.classList.add(MainForm.CLASSES.SEND);

          // Push GTM Custom event
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'NewsletterSubmit',
          });
        }

        return true;
      });
    }
  };

  protected setDOMElements(): void {
    this.thankYou = document.querySelector(MainForm.CLASSES.THANK_YOU);
  }
}

export default MainForm;
