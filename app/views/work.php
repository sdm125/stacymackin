
<div class="container">

  <header>
    <h2 class="slide-down-in">WORK</h2>
  </header>

  <?php foreach($this->results as $project): ?>
    <div class="row work mt-5">
      <div class="col-lg-6">
        <img src=<?php echo "images/" . $project["image"]; ?>>
      </div>
      <div class="col-lg-6">
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

  <!-- <div class="row work mt-5">
    <div class="col-lg-6">
      <img src="images/mec-combined.png">
    </div>
    <div class="col-lg-6">
      <h2 class="mt-3">MACKIN ENGINEERING COMPANY</h2>
      <span>REDESIGNED, RESPONSIVE WEBSITE</span>
      <p class="mt-3">
        Designed and developed a new responsive company website. Coordinated
        updated content with the Manager of Marketing and various departments.
        Utilized many web development technologies such as HTML, CSS,
        JavaScript, jQuery, AngularJS, Bootstrap, and MongoDB.
      </p>
        <a href="http://www.mackinengineering.com" target="_blank"><button>VISIT SITE</button></a>
    </div>
  </div>

  <div class="row work mt-5">
    <div class="col-lg-6">
    <img src="images/upmc-combined.png">
  </div>
  <div class="col-lg-6">
      <h2 class="mt-3">UNIVERSITY OF PITTSBURGH MEDICAL CENTER</h2>
    <span>CONTENT MIGRATION</span>
    <p class="mt-3">
      Worked on UPMC Infonet team to build a new responsive SharePoint website that provides news and information to all 60,000 members of the UPMC staff. Tested mobile responsiveness of styling and formatting.  Created a JavaScript program that takes a filename as input and outputs the name in the correct naming convention format. Produced web browser macros to automate repetitive tasks.
    </p>
  </div>
</div> -->

  <div style="position:relative;" class="row">
    <div style="margin:auto;" class="col-lg-4 col-md-6 clearfix">
      <i class="arrow fa fa-long-arrow-left fa-5x pull-left" aria-hidden="true"></i>
        <div style="margin:auto;height:20px;width:43px;position:absolute;right:0;left:0;top:0;bottom:0;">
          <i class="indicator fa fa-circle fa-lg" aria-hidden="true"></i>
          <i class="indicator fa fa-circle-o fa-lg" aria-hidden="true"></i>
        </div>
      <i class="arrow fa fa-long-arrow-right fa-5x pull-right" aria-hidden="true"></i>
    </div>
  </div>

</div>

<div style="width:100%;height:25px;"></div>
