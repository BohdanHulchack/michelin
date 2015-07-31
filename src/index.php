<!DOCTYPE html>
<html lang="ru">
  <?php
   include 'functions.php';
   links();
  ?>
  <body><?php head(); ?>
    <main class="index"><?php carousel(); ?>
      <div id="choose_wrapper">
        <?php choose_one(); ?>
        <?php choose_two(); ?>
        <?php choose_three(); ?>
      </div><?php catalog(); ?>
      <?php why(); ?>
      <?php questions(); ?>
      <?php subscribe(); ?>
    </main><?php footer(); ?>
  </body>
</html>