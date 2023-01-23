<head>
	<!--<script type="text/javascript" src="_includes/jq/index.inc.js"></script>-->
	<script type="text/javascript" src="_includes/jq/gallery2.inc.js"></script>
</head>
<!--<div class="col-sm-12 pb-2">
	&nbsp;
</div>-->
<div id="gallery"></div>
<!--<div class="templatemo-service">-->
<!--<div class="navbar navfar">
	<a href="#"><i class="fa fa-instagram bisc"></i><span class="mini"></span></a>
</div>-->
<!-- Page Content -->
<div class="container">
	<div class="col-sm-12 p-0">
		<img src="_images/gallery_triangles.png" style="position:absolute; top:40%; right:7%; width:4%; height:auto;" class="w10">
		<div style="font-size:36px !important;" align="center" class="pt-4">
			<strong class="fsLight">GALLERY</strong>
		</div>
	</div>

	<div class="col-sm-2">
		&nbsp;
	</div>
	
	<div class="row text-center">
		<div class="col-sm-2 pr-0 mobileHide">
			&nbsp;
		</div>
		<div class="col-sm-8 pl-5 pr-5" style="font-size: 17px;">
			<p align="center" class="m-0 pb-3 fsLight" style="font-size: 17px;">
				Learn more about who we are, where we come from and what we stand for. Find out how we engage in shaping the "Pharmacy of Tomorrow."
			</p>
		</div>
		<div class="col-sm-2 pr-0 mobileHide">&nbsp;</div>
	</div>
	<div class="col-sm-12 pb-1">
		&nbsp;
	</div>
	

	<div class="row">
		<div class="col-sm-2 w50 p-0">
			<img src="_images/linedot.png" style="width: 100%; height:auto; margin-left:-177%;" class="w50 mml-102">
		</div>
		<div class="col-sm-10 l-10">
			&nbsp;
		</div>
	</div>
	


	<div id="jquery-script-menu">
		<div class="jquery-script-center">
			<div id="carbon-block"></div>
			<div class="jquery-script-clear"></div>
		</div>
	</div>

	<div class="p-0 m-0" id="thisCarousel">
		<!--<div class="col-sm-12 mobileDisplay p-0 m-0">
			<p class="text-left p-0 m-0">
				<strong style="font-size:14px !important;"><?php echo $section; ?></strong>
			</p>
		</div>
		<div class="row">
			<div class="col-sm-2 pr-0 mobileHide">
				<p class="text-right pr-3">
					<strong style="font-size:14px !important;"><?php echo $section; ?></strong>
				</p>
			</div>
			<div class="col-sm-10 w100">
				<div class="container">
					<?php include('gallery_'.$action.'.php'); ?>
				</div>
			</div>
		</div>-->


	</div>
	
		<div class="col-sm-12 mobileDisplay p-0 m-0">
			<p class="text-left p-0 m-0">
				<strong style="font-size:14px !important;" onclick="showGallery('riedl');">RIEDL Phasys</strong>
			</p>
		</div>
		<div class="row">
			<div class="col-sm-2 pr-0 mobileHide">
				<p class="text-left pl-3">
					<strong style="font-size:calc((1 - 1) * 1.2vw + 1rem); cursor:pointer;" onclick="showGallery('riedl');">RIEDL Phasys</strong>
				</p>
			</div>
			<div class="col-sm-10 w100">
				<div class="container text-center" id="gallery_riedl">
					<?php include('_views/gallery_riedl.php'); ?>
				</div>
			</div>
		</div>
	
		<div class="col-sm-12 pb-2">
			&nbsp;
		</div>
		
		<div class="row">
			<div class="col-sm-2 w50 p-0">
				<img src="_images/linedot.png" style="width: 100%; height:auto; margin-left:-177%;" class="w50 mml-102">
			</div>
			<div class="col-sm-10 l-10">
				&nbsp;
			</div>
		</div>
		<div class="col-sm-12 mobileDisplay p-0 m-0">
			<p class="text-left p-0 m-0">
				<strong style="font-size:14px !important;" onclick="showGallery('mekapharm');">Mekapharm Apoteka</strong>
			</p>
		</div>
		<div class="row">
			<div class="col-sm-2 pr-0 mobileHide">
				<p class="text-left pl-3">
					<strong style="font-size:calc((1 - 1) * 1.2vw + 1rem); cursor:pointer;" onclick="showGallery('mekapharm');">Mekapharm Apoteka</strong>
				</p>
			</div>
			<div class="col-sm-10 w100">
				<div class="container text-center" id="gallery_mekapharm">
					<!--<h2 class="fsLight" style="cursor:pointer;" onclick="showGallery('mekapharm');">View Gallery</h2>-->
					<?php include('_views/gallery_mekapharm.php'); ?>
				</div>
			</div>
		</div>

		<div class="col-sm-12 pb-2">
			&nbsp;
		</div>
		
		<div class="row">
			<div class="col-sm-2 w50 p-0">
				<img src="_images/linedot.png" style="width: 100%; height:auto; margin-left:-177%;" class="w50 mml-102">
			</div>
			<div class="col-sm-10 l-10">
				&nbsp;
			</div>
		</div>
		<div class="col-sm-12 mobileDisplay p-0 m-0">
			<p class="text-left p-0 m-0">
				<strong style="font-size:14px !important;" onclick="showGallery('conveying');">Intelligent Conveying</strong>
			</p>
		</div>
		<div class="row">
			<div class="col-sm-2 pr-0 mobileHide">
				<p class="text-left pl-3">
					<strong style="font-size:calc((1 - 1) * 1.2vw + 1rem); cursor:pointer;" onclick="showGallery('conveying');">Intelligent Conveying</strong>
				</p>
			</div>
			<div class="col-sm-10 w100">
				<div class="container text-center" id="gallery_conveying">
					<!--<h2 class="fsLight" style="cursor:pointer;" onclick="showGallery('conveying');">View Gallery</h2>-->
					<?php include('_views/gallery_conveying.php'); ?>
				</div>
			</div>
		</div>

		<div class="col-sm-12">
			&nbsp;
		</div>
		
		<div class="row">
			<div class="col-sm-2 w50 p-0">
				<img src="_images/linedot.png" style="width: 100%; height:auto; margin-left:-177%;" class="w50 mml-102">
			</div>
			<div class="col-sm-10 l-10">
				&nbsp;
			</div>
		</div>
		<div class="col-sm-12 mobileDisplay p-0 m-0">
			<p class="text-left p-0 m-0">
				<strong style="font-size:14px !important;" onclick="showGallery('projects');">Projects</strong>
			</p>
		</div>
		<div class="row">
			<div class="col-sm-2 pr-0 mobileHide">
				<p class="text-left pl-3">
					<strong style="font-size:calc((1 - 1) * 1.2vw + 1rem); cursor:pointer;" onclick="showGallery('projects');">Projects</strong>
				</p>
			</div>
			<div class="col-sm-10 w100">
				<div class="container text-center" id="gallery_projects">
					<!--<h2 class="fsLight" style="cursor:pointer;" onclick="showGallery('projects');">View Gallery</h2>-->
					<?php include('_views/gallery_projects.php'); ?>
				</div>
			</div>
		</div>

		<div class="col-sm-12 pb-2">
			&nbsp;
		</div>
		
		<div class="row">
			<div class="col-sm-2 w50 p-0">
				<img src="_images/linedot.png" style="width: 100%; height:auto; margin-left:-177%;" class="w50 mml-102">
			</div>
			<div class="col-sm-10 l-10">
				&nbsp;
			</div>
		</div>
		<div class="col-sm-12 mobileDisplay p-0 m-0">
			<p class="text-left p-0 m-0">
				<strong style="font-size:14px !important;" onclick="showGallery('software');">eRx Smart Software</strong>
			</p>
		</div>
		<div class="row">
			<div class="col-sm-2 pr-0 mobileHide">
				<p class="text-left pl-3">
					<strong style="font-size:calc((1 - 1) * 1.2vw + 1rem); cursor:pointer;" onclick="showGallery('software');">eRx Smart Software</strong>
				</p>
			</div>
			<!--<div class="col-sm-10 w100 pt-5">-->
			<div class="col-sm-10 w100">
				<!--<div class="col-sm-12 pb-5 mobileDisplay">&nbsp;</div>-->
				<!--<div class="col-sm-12 pb-5 mobileDisplay">&nbsp;</div>-->
				<!--<div class="container text-center pml3 pmt0" style="width: 96%;padding-left:5%; padding-top:5%; padding-bottom:0;padding-right:0;" id="gallery_software">-->
				<div class="container text-center" id="gallery_software">
					<!--<h2 class="fsLight" style="cursor:pointer;" onclick="showGallery('software');">View Gallery</h2>-->
					<?php include('_views/gallery_software.php'); ?>
				</div>
			</div>
		</div>

	
	
</div>
<div class="modal fade" id="galleryModalCentered" tabindex="-1" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3001">
  <div class="modal-dialog modal-dialog-centered mxw5" role="document">
    <div class="modal-content w100">
      <div class="modal-header">
        <h5 class="modal-title text-blue" id="galleryModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="galleryImageView" style="font-weight:bold;">
        <img id="modalImg" src="" style="width:100%; height:auto;">
      </div>
      <div class="modal-footer">
      	    
    <!--visibility: hidden;
    transition: opacity .35s, visibility .35s, height .35s;-->
    
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="closeLoader();">Close</button>-->
        <label id="galleryModalDesc" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>
<div class="modal fade vidCarousel" id="erx_video4ModalCentered" tabindex="-2" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3002">
  <div class="modal-dialog modal-dialog-centered mxw5" role="document">
    <div class="modal-content w100">
      <div class="modal-header">
        <h5 class="modal-title text-blue" id="erx_video4ModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="videoView" style="font-weight:bold;">
				<video id="erx_video4Player" preload="auto" controls style="width:100%;height:auto;" class="vidPlay">
					<source id="erx_video4VidSrc" src="_videos/erx_video4.mp4" type="video/mp4" style="height: auto; width: 100%;" class="w100">
						Your browser does not support this format.
				</video>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="closeLoader();">Close</button>-->
        <label id="galleryModalDesc4" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>
<div class="modal fade vidCarousel" id="erx_video5ModalCentered" tabindex="-3" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3003">
  <div class="modal-dialog modal-dialog-centered mxw5" role="document">
    <div class="modal-content w100">
      <div class="modal-header">
        <h5 class="modal-title text-blue" id="erx_video5ModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="videoView" style="font-weight:bold;">
				<video id="erx_video5Player" preload="auto" controls style="width:100%;height:auto;">
					<source id="erx_video5VidSrc" src="_videos/erx_video5.mp4" type="video/mp4" style="height: auto; width: 100%;" class="w100">
						Your browser does not support this format.
				</video>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="closeLoader();">Close</button>-->
        <label id="galleryModalDesc5" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>
<div class="modal fade vidCarousel" id="erx_video6ModalCentered" tabindex="-4" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3004">
  <div class="modal-dialog modal-dialog-centered mxw5" role="document">
    <div class="modal-content w100">
      <div class="modal-header">
        <h5 class="modal-title text-blue" id="erx_video6ModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="videoView" style="font-weight:bold;">
				<video id="erx_video6Player" preload="auto" controls style="width:100%;height:auto;">
					<source id="erx_video6VidSrc" src="_videos/erx_video6.mp4" type="video/mp4" style="height: auto; width: 100%;" class="w100">
						Your browser does not support this format.
				</video>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="closeLoader();">Close</button>-->
        <label id="galleryModalDesc6" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>
<div class="modal fade vidCarousel" id="erx_video7ModalCentered" tabindex="-5" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3005">
  <div class="modal-dialog modal-dialog-centered mxw5" role="document">
    <div class="modal-content w100">
      <div class="modal-header">
        <h5 class="modal-title text-blue" id="erx_video7ModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="videoView" style="font-weight:bold;">
				<video id="erx_video7Player" preload="auto" controls style="width:100%;height:auto;">
					<source id="erx_video7VidSrc" src="_videos/erx_video7.mp4" type="video/mp4" style="height: auto; width: 100%;" class="w100">
						Your browser does not support this format.
				</video>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="closeLoader();">Close</button>-->
        <label id="galleryModalDesc7" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>
<div class="modal fade vidCarousel" id="erx_video8ModalCentered" tabindex="-6" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3006">
  <div class="modal-dialog modal-dialog-centered mxw5" role="document">
    <div class="modal-content w100">
      <div class="modal-header">
        <h5 class="modal-title text-blue" id="erx_video8ModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="videoView" style="font-weight:bold;">
				<video id="erx_video8Player" preload="auto" controls style="width:100%;height:auto;">
					<source id="erx_video8VidSrc" src="_videos/erx_video8.mp4" type="video/mp4" style="height: auto; width: 100%;" class="w100">
						Your browser does not support this format.
				</video>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="closeLoader();">Close</button>-->
        <label id="galleryModalDesc8" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>

<div class="modal fade vidPlayer vidPlayerCar" id="mekapharmvideo1ModalCentered" tabindex="-6" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3006">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content w100">
      <div class="modal-header" style="background-color:#ffffff;">
        <h5 class="modal-title text-blue" id="mekapharmvideo1ModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1" id="mekapharmvideo1Close">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="mekapharmvideo1View" style="font-weight:bold;">
				<video id="mekapharmvideo1Player" preload="auto" controls style="width:100%;height:auto;">
					<source id="mekapharmvideo1Src" src="_videos/mekapharmvideo1.mp4" type="video/mp4" style="height: auto; width: 100%;" class="w100">
						Your browser does not support this format.
				</video>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" id="videomClose" onclick="closeLoader();">Close</button>-->
        <label id="mekapharmvideo1ModalDesc" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>
<div class="modal fade vidPlayer vidPlayerCar" id="mekapharmvideo2ModalCentered" tabindex="-6" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3006">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content w100">
      <div class="modal-header" style="background-color:#ffffff;">
        <h5 class="modal-title text-blue" id="mekapharmvideo2ModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1" id="mekapharmvideo2Close">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="mekapharmvideo2View" style="font-weight:bold;">
				<video id="mekapharmvideo2Player" preload="auto" controls style="width:100%;height:auto;">
					<source id="mekapharmvideo2Src" src="_videos/videom.mp4" type="video/mp4" style="height: auto; width: 100%;" class="w100">
						Your browser does not support this format.
				</video>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" id="videomClose" onclick="closeLoader();">Close</button>-->
        <label id="mekapharmvideo2ModalDesc" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>
<div class="modal fade vidPlayer vidPlayerCar" id="conveyingvideo1ModalCentered" tabindex="-6" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3006">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content w100">
      <div class="modal-header" style="background-color:#ffffff;">
        <h5 class="modal-title text-blue" id="conveyingvideo1ModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1" id="conveyingvideo1Close">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="conveyingvideo1View" style="font-weight:bold;">
				<video id="conveyingvideo1Player" preload="auto" controls style="width:100%;height:auto;">
					<source id="conveyingvideo1Src" src="_videos/conveyingvideo1.mp4" type="video/mp4" style="height: auto; width: 100%;" class="w100">
						Your browser does not support this format.
				</video>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" id="videomClose" onclick="closeLoader();">Close</button>-->
        <label id="conveyingvideo1ModalDesc" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>
<div class="modal fade vidPlayer vidPlayerCar" id="conveyingvideo2ModalCentered" tabindex="-6" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3006">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content w100">
      <div class="modal-header" style="background-color:#ffffff;">
        <h5 class="modal-title text-blue" id="conveyingvideo2ModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1" id="conveyingvideo2Close">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="conveyingvideo2View" style="font-weight:bold;">
				<video id="conveyingvideo2Player" preload="auto" controls style="width:100%;height:auto;">
					<source id="conveyingvideo2Src" src="_videos/video3.mp4" type="video/mp4" style="height: auto; width: 100%;" class="w100">
						Your browser does not support this format.
				</video>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" id="videomClose" onclick="closeLoader();">Close</button>-->
        <label id="conveyingvideo2ModalDesc" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>
<div class="modal fade vidPlayer vidPlayerCar" id="conveyingvideo3ModalCentered" tabindex="-6" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3006">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content w100">
      <div class="modal-header" style="background-color:#ffffff;">
        <h5 class="modal-title text-blue" id="conveyingvideo3ModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1" id="conveyingvideo3Close">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="conveyingvideo3View" style="font-weight:bold;">
				<video id="conveyingvideo3Player" preload="auto" controls style="width:100%;height:auto;">
					<source id="conveyingvideo3Src" src="_videos/video1.mp4" type="video/mp4" style="height: auto; width: 100%;" class="w100">
						Your browser does not support this format.
				</video>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" id="videomClose" onclick="closeLoader();">Close</button>-->
        <label id="conveyingvideo3ModalDesc" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>
<div class="modal fade vidPlayer vidPlayerCar" id="riedlvideo1ModalCentered" tabindex="-6" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3006">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content w100">
      <div class="modal-header" style="background-color:#ffffff;">
        <h5 class="modal-title text-blue" id="riedlvideo1ModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1" id="riedlvideo1Close">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="riedlvideo1View" style="font-weight:bold;">
				<video id="riedlvideo1Player" preload="auto" controls style="width:100%;height:auto;">
					<source id="riedlvideo1Src" src="_videos/riedlvideo1.mp4" type="video/mp4" style="height: auto; width: 100%;" class="w100">
						Your browser does not support this format.
				</video>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" id="videomClose" onclick="closeLoader();">Close</button>-->
        <label id="riedlvideo1ModalDesc" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>
<div class="modal fade vidPlayer vidPlayerCar" id="riedlvideo2ModalCentered" tabindex="-6" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3006">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content w100">
      <div class="modal-header" style="background-color:#ffffff;">
        <h5 class="modal-title text-blue" id="riedlvideo2ModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1" id="riedlvideo2Close">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="riedlvideo2View" style="font-weight:bold;">
				<video id="riedlvideo2Player" preload="auto" controls style="width:100%;height:auto;">
					<source id="riedlvideo2Src" src="_videos/riedlvideo2.mp4" type="video/mp4" style="height: auto; width: 100%;" class="w100">
						Your browser does not support this format.
				</video>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" id="videomClose" onclick="closeLoader();">Close</button>-->
        <label id="riedlvideo2ModalDesc" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>
<div class="modal fade vidPlayer vidPlayerCar" id="riedlvideo3ModalCentered" tabindex="-6" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3006">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content w100">
      <div class="modal-header" style="background-color:#ffffff;">
        <h5 class="modal-title text-blue" id="riedlvideo3ModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1" id="riedlvideo3Close">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="riedlvideo3View" style="font-weight:bold;">
				<video id="riedlvideo3Player" preload="auto" controls style="width:100%;height:auto;">
					<source id="riedlvideo3Src" src="_videos/riedlvideo3.mp4" type="video/mp4" style="height: auto; width: 100%;" class="w100">
						Your browser does not support this format.
				</video>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" id="videomClose" onclick="closeLoader();">Close</button>-->
        <label id="riedlvideo3ModalDesc" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>
<div class="modal fade vidPlayer vidPlayerCar" id="riedlvideo4ModalCentered" tabindex="-6" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3006">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content w100">
      <div class="modal-header" style="background-color:#ffffff;">
        <h5 class="modal-title text-blue" id="riedlvideo4ModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1" id="riedlvideo4Close">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="riedlvideo4View" style="font-weight:bold;">
				<video id="riedlvideo4Player" preload="auto" controls style="width:100%;height:auto;">
					<source id="riedlvideo4Src" src="_videos/riedlvideo4.mp4" type="video/mp4" style="height: auto; width: 100%;" class="w100">
						Your browser does not support this format.
				</video>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" id="videomClose" onclick="closeLoader();">Close</button>-->
        <label id="riedlvideo4ModalDesc" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>
<div class="modal fade vidPlayer vidPlayerCar" id="riedlvideo5ModalCentered" tabindex="-6" role="dialog" aria-labelledby="galleryModalLabel" aria-hidden="true" style="z-index:3006">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content w100">
      <div class="modal-header" style="background-color:#ffffff;">
        <h5 class="modal-title text-blue" id="riedlvideo5ModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1" id="riedlvideo5Close">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="riedlvideo5View" style="font-weight:bold;">
				<video id="riedlvideo5Player" preload="auto" controls style="width:100%;height:auto;">
					<source id="riedlvideo5Src" src="_videos/video2.mp4" type="video/mp4" style="height: auto; width: 100%;" class="w100">
						Your browser does not support this format.
				</video>
      </div>
      <div class="modal-footer">
        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal" id="videomClose" onclick="closeLoader();">Close</button>-->
        <label id="riedlvideo5ModalDesc" style="color:#ffffff"></label>
      </div>
    </div>
  </div>
</div>