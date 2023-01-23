<!--<div id="templatemo-contact" class="container templatemo-line-header mt-0 mb-0 pl-0 pr-0 pt-0" >
	<div class="col-sm-12 p-0 m-0 pt-5 pb-5 pl-2 pr-2">
		<img src="_images/contactus.png" style="position:absolute; top:10px; left:15px; width:70px; height:auto;" class="w10 pl-2 pb-2">
		<div style="font-size:36px !important;" align="center">
			<strong class="txt_white" style="font-size:18px;">
				<?php
					echo $resultArr['actionmsg'];
				?>						
			</strong>
		</div>
	</div>
</div>
-->
<head>
	<script type="text/javascript" src="_includes/jq/action.inc.js"></script>
</head>
<div id="tile_action"></div>
<div class="container pl-4 pt-3 text-center">
	<div class="row">
		<div class="col-md-12">
			<div style="display:inline-block;width:45%;vertical-align:top;" class="col-md-6 w100" align="center">
				<div class="templatemo-service-item" align="center">
					<p>
						<a href="#navbar"><img src="_images/tile_articles_128_336.png" style="width:100%; height:auto;" class="w100" align="center"></a>
					</p>
				</div>
				<div class="clearfix"></div>
			</div>
			<div id="actionContent" style="display:inline-block;width:45%;vertical-align:middle;top:25%;cursor:pointer;" class="col-md-6 w100 t25" align="center">
				<div class="templatemo-service-item" align="center" style="vertical-align:middle;">
					<p align="center" style="font-size:16px !important; font-weight:bold;" id="responseMsg1">If you no longer wish to receive newsletters from eRx Solutions per e-mail, please enter your e-mail address here:</p>
				</div>

				<form class="form-horizontal" id="frmAction" name="frmAction">
	    		<div class="row m-0 pb-3">
	    			<div class="col-md-12 w100 text-right">
			        <div style="display:inline-block;width:100%;vertical-align:top;" class="col-md-12 w100" align="right">
			        		<label class="error" for="sub_email" id="sub_email_error" >This field is required.</label>
			            <input type="text" id="sub_email" name="sub_email" class="form-control" placeholder="Email Address" maxlength="30" style="font-size:14px !important;" REQUIRED  />
			        </div>
	        	</div>
		      </div>
	    		<div class="row m-0 pb-3">
	    			<div class="col-md-12 w100 text-right">
			        <div style="display:inline-block;width:10%;vertical-align:top;" class="col-md-2 w100" align="left">
			            &nbsp;
			        </div>
			        <div style="display:inline-block;width:80%;vertical-align:top;" class="col-md-8 w100 pr-0" align="right">
			        		<div style="width:100%;vertical-align:top;" class="col-md-12 w100 text-right pb-2" align="right"><input type="button" name="unsubscribe" class="btn btn-white contactSubmitx" value="Unsubscribe" onclick="actionSumbit()" data-toggle="modal" data-target="#actionModalCentered" style="border-bottom: 0;"/></div>
			        </div>
	        	</div>
		      </div>
					<div class="col-sm-12">
						&nbsp;
					</div>
					<div class="col-sm-12">
						&nbsp;
					</div>							
					<div class="col-sm-12 p-0 m-0 pt-1">
						<div style="font-size:36px !important;" align="center">&nbsp;</div>
						<img src="_images/privacypolicy.png" style="position:absolute; top:10px; right:-15px; width:120px; height:auto;" class="w25 t-68">
					</div>
	    	</form>
			</div>
		</div>
	</div>
</div>

<div class="modal fade" id="actionModalCentered" tabindex="-1" role="dialog" aria-labelledby="actionModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header" style="background-color:#ffffff;">
        <h5 class="modal-title text-blue" id="actionModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="closearia p-0 pl-2 pr-2 pb-1">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center" id="responseMsg" style="font-weight:bold;">
        Please enter a valid email address.
      </div>
      <!--<div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="closeLoader();">Close</button>
      </div>-->
    </div>
  </div>
</div>