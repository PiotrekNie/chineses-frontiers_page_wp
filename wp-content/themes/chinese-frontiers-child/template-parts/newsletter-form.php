<?php $newsletter = get_field('sekcja_newsletter', 'options'); ?>
<form id="newsletter" class="newsletter" novalidate="true">
  <input type="hidden" name="GUID" value="ea2b283c54dc4ac20dad9021ff614e20">
  <div id="newsletter__main" class="flex">
    <div class="form_container margin-t-sm-24 margin-t-md-0 padding-t-lg-8">
      <div class="newsletter__inputs">
        <div class="mb-3">
          <input type="text" id="name" name="name" placeholder="Imię" required>
        </div>
        <input type="email" id="email" name="email" placeholder="E-mail" required>
      </div>
      <?php if ($newsletter['zgody_markeringowe']) : ?>
        <div class="newsletter__checkboxes">
          <?php foreach ($newsletter['zgody_markeringowe'] as $key => $zgoda) : ?>
            <div class="newsletter__checkbox" id="collapse-<?php echo $key + 1; ?>">
              <input type="checkbox" <?php echo ($zgoda['pole_wymagane']) ? 'required' : ''; ?> name="agree<?php echo $key + 1; ?>" id="agree<?php echo $key + 1; ?>" value="0">
              <div class="label-container">
                <label class="newsletter__checkbox" for="agree<?php echo $key + 1; ?>">
                  <span><?php echo $zgoda['nazwa_skrocona']; ?></span>
                  <button class="label-readmore" data-collapse="<?php echo $key + 1; ?>"></button>
                </label>
              </div>
              <div class="newsletter__collapse">
                <div class="newsletter__collapse--content">
                  <?php echo $zgoda['zgoda']; ?>
                </div>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>
      <button class="cta cta-full-blue max-w-none" type="submit" id="submitbtn"><?php _e('ZAPISZ SIĘ', 'zelmer'); ?></button>
      <div class="pt-5">
        <span class="nulead-error"></span>
        <span class="newsletter__notify"><small><?php _e('Nie dostałeś od nas wiadomości? Sprawdź folder spam.', 'zelmer'); ?></small></span>
      </div>
    </div>
  </div>
</form>
<div class="newsletter__thank-you">
  <div class="form_container margin-t-sm-24 margin-t-md-0">
    <h3><?php _e('Cieszymy się, że chcesz być z nami w kontakcie!', 'zelmer'); ?></h3>
    <p><?php _e('Wysłaliśmy link z potwierdzeniem zapisu na Twój adres
        e-mail.'); ?></p>
    <p><strong><?php _e('Potwierdź subskrypcję', 'zelmer'); ?></strong><br>
      <?php _e('i przygotuj się na regularną porcję nowości!', 'zelmer'); ?></p>
  </div>
</div>