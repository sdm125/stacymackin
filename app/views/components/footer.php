    <footer>
      <small class="text-muted">Stacy Mackin &copy; <?php echo date("Y"); ?></small>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js/min/menu.min.js"></script>
    <?php if ($view !== "about-bio"): ?>
      <script src="js/min/<?=$view?>.min.js"></script>
    <?php endif ?>
  </body>
</html>
