
<div class="container-fluid">

  <header>
    <h2 class="slide-down-in">WORK</h2>
  </header>

  <div class="work-wrapper">
    <?php foreach($this->results as $project): ?>
      <div class="row work mt-5 slide-down-in">
        <div class="col-md-6">
        <div class="screen-shot-wrapper">
          <div class="browser-controls">
            <div class="browser-buttons">
              <i class="fa fa-arrow-left"></i>
              <i class="fa fa-arrow-right"></i>
            </div>
            <div class="url-bar"><?php echo $project["url"]; ?></div>
          </div>
          <img src=<?php echo "https://s3.us-east-2.amazonaws.com/stacymackin/" . $project["image"]; ?>>
          </div>
        </div>
        <div class="col-md-5">
          <h2 class="mt-3"><?php echo strtoupper($project["title"]); ?></h2>
          <span><?php echo strtoupper($project["subtitle"]); ?></span>
          <p class="mt-3">
            <?php echo $project["description"]; ?>
          </p>
          <?php if($project["url"]): ?>
            <a href=<?php echo "\"" . $project["url"] . "\""; ?> target="_blank">
              <button class="hidden-sm-up d-md-none btn-block">VISIT SITE</button>
              <button class="hidden-xs-down d-none d-md-inline">VISIT SITE</button>
            </a>
          <?php endif; ?>

          <?php if($project["github_url"]): ?>
            <a href=<?php echo "\"" . $project["github_url"] . "\""; ?> target="_blank">
              <button class="hidden-sm-up d-md-none btn-block" style="margin-top: 1rem;">GITHUB</button>
              <button class="hidden-xs-down d-none d-md-inline">GITHUB</button>
            </a>
          <?php endif; ?>
        </div>
      </div>
    <?php endforeach ?>

    <div id="workNav" class="row slide-down-in mt-3">
      <div class="col-lg-4 col-md-6 clearfix">
        <i class="arrow fa fa-long-arrow-left fa-5x pull-left" aria-hidden="true"></i>
          <div id="workIndicators">
            <i class="indicator fa fa-circle fa-lg" aria-hidden="true"></i>
            <?php for($i = 1; $i < sizeof($this->results); $i++){ ?>
              <i class="indicator fa fa-circle-o fa-lg" aria-hidden="true"></i>
            <?php } ?>
          </div>
        <i class="arrow fa fa-long-arrow-right fa-5x pull-right" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</div>
