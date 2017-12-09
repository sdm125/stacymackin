
<div class="container-fluid">

  <header>
    <h2 class="slide-down-in">WORK</h2>
  </header>

  <div class="work-wrapper">
    <?php foreach($this->results as $project): ?>
      <div class="row work mt-5 slide-down-in">
        <div class="col-lg-6">
          <img src=<?php echo "https://s3.us-east-2.amazonaws.com/stacymackin/" . $project["image"]; ?>>
        </div>
        <div class="col-lg-5">
          <h2 class="mt-3"><?php echo strtoupper($project["title"]); ?></h2>
          <span><?php echo strtoupper($project["subtitle"]); ?></span>
          <p class="mt-3">
            <?php echo $project["description"]; ?>
          </p>
          <?php if($project["url"]): ?>
            <a href=<?php echo "\"" . $project["url"] . "\""; ?> target="_blank">
              <button class="hidden-sm-up btn-block">VISIT SITE</button>
              <button class="hidden-xs-down">VISIT SITE</button></a>
          <?php endif; ?>
        </div>
      </div>
    <?php endforeach ?>

    <div id="workNav" class="row slide-down-in mt-3">
      <div class="col-lg-4 col-md-6 clearfix">
        <i class="arrow fa fa-long-arrow-left fa-5x pull-left" aria-hidden="true"></i>
          <div id="workIndicators">
            <i class="indicator fa fa-circle fa-lg" aria-hidden="true"></i>
            <i class="indicator fa fa-circle-o fa-lg" aria-hidden="true"></i>
          </div>
        <i class="arrow fa fa-long-arrow-right fa-5x pull-right" aria-hidden="true"></i>
      </div>
    </div>
  </div>

</div>
