<?php

	date_default_timezone_set('Africa/Johannesburg');
	$script_tz = date_default_timezone_get();
	
	session_start();
	
	if (file_exists("_lib/class.FPDF.php"))
	{
		require_once("_lib/class.FPDF.php");
	}
	else
	{
		require_once("../_lib/class.FPDF.php");
	}
	
	if (file_exists("_lib/class.TCFPDF.php"))
	{
		require_once("_lib/class.TCFPDF.php");
	}
	else
	{
		require_once("../_lib/class.TCFPDF.php");
	}
	
	if (file_exists("_lib/systemFunc.php"))
	{
		require_once("_lib/systemFunc.php");
	}
	else
	{
		require_once("../_lib/systemFunc.php");
	}
	
	
//			$pdf->Ln(3);			
//			$pdf->SetWidths(array(30,80));
//			$pdf->SetFont('Helvetica','I',8);	
	
	$pdf = new TCFPDF('P');
	$pdf->AliasNbPages();
	$pdf->AddPage();
	$pdf->SetWidths(array(190));
	$pdf->SetFont('Helvetica','B',12);	
	$terms = "1. INTRODUCTION";
	$pdf->Cell(100,10,$terms,0,1,'L');
//	$terms = "";
//	$pdf->Cell(100,10,$terms,0,1,'L');
	//$pdf->SetWidths(array(190));
	$pdf->SetFont('Helvetica','I',8);	
	$terms = "1.1 In this agreement, unless the context indicates to the contrary, the following words and expressions will bear the meanings assigned thereto and cognate words and expressions will bear corresponding meanings:";
	$pdf->Row(array($terms));	
	$terms = "1.1.1 “Ad/s” means advertisements made up of text, graphics, images or other material provided by the Advertiser to DYNAMIC ADVERTISING to be placed on websites owned by DYNAMIC ADVERTISING or managed by DYNAMIC ADVERTISING on behalf of an Affiliate, at the request of the Advertiser;";
	$pdf->Row(array($terms));
	$terms = "1.1.2 “Affiliate” means a third party with whom DYNAMIC ADVERTISING has entered into an agreement relating to the placement of Ads on websites owned by such third party;";
	$pdf->Row(array($terms));
	$terms = "1.1.3 “Business Day” means any day other than a Saturday, Sunday or proclaimed public holiday in the Republic of South Africa;";
	$pdf->Row(array($terms));
	$terms = "1.1.4 “IO” means the addition/s or update/s of Ads to which these terms are attached;";
	$pdf->Row(array($terms));
	$terms = "1.1.5 “Placement Duration” means the duration of the Ad placement as per the IO;";
	$pdf->Row(array($terms));
	$terms = "1.1.6 “Placement Start Date” means the date on which the Ad first appears on a website, as per the IO;";
	$pdf->Row(array($terms));
	$terms = "1.1.7 “Prime Rate” means the publicly quoted basic rate of the placement of an Ad.";
	$pdf->Row(array($terms));
	$terms = "1.1.8 “Services” means the rendering and placement of Ads on websites by DYNAMIC ADVERTISING and matters incidental thereto;";
	$pdf->Row(array($terms));
	$terms = "1.1.9 “Terms” means these terms and conditions read together with the IO;";
	$pdf->Row(array($terms));
	$terms = "1.2 The headings to the clauses of this agreement are inserted for reference purposes only and will not affect the interpretation of any of the provisions to which they relate.";
	$pdf->Row(array($terms));
	$terms = "1.3 These Terms shall be read together with the IO, however in the event of any conflict between the Terms and any provision contained in the IO, the IO shall prevail to the extent required to resolve such conflict.";
	$pdf->Row(array($terms));
	$terms = "1.4 These Terms shall come into operation upon the submission of an IO from the Advertiser to DYNAMIC ADVERTISING and shall terminate upon completion of an IO, unless terminated earlier in accordance with this agreement.";
	$pdf->Row(array($terms));
	$terms = "1.5 These Terms shall be governed and construed in accordance with the laws of the Republic of South Africa.";
	$pdf->Row(array($terms));
	$terms = "1.6 No alteration, consensual cancellation, variation of, or addition hereto shall be of any force or effect unless reduced to writing and signed by all parties to this agreement or their duly authorised representatives.";
	$pdf->Row(array($terms));
	$terms = "1.7 This document, together with the IO, contains the entire agreement between the parties and no party shall be bound by any undertakings, representations, warranties, promises or the like not recorded herein.";
	$pdf->Row(array($terms));
	$terms = "";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','B',12);	
	$terms = "2. ADDITION/S and UPDATE/S";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','I',8);	
	$terms = "2.1 The Advertiser shall complete all fields as per the IO relating to the Services required by the Advertiser from DYNAMIC ADVERTISING (“Advertiser Specifications”).";
	$pdf->Row(array($terms));
	$terms = "2.2 The Services shall be delivered in accordance with the Advertiser Specifications as indicated in an IO, subject to the terms of this agreement.";
	$pdf->Row(array($terms));
	$terms = "2.3 An IO shall not be valid and binding unless accepted by DYNAMIC ADVERTISING.";
	$pdf->Row(array($terms));
	$terms = "2.4 DYNAMIC ADVERTISING shall endeavor to accept an IO within 1 (one) Business Day of receipt of same. Acceptance of the IO will be made upon the earlier of:";
	$pdf->Row(array($terms));
	$terms = "2.4.1 approval confirmation by email by DYNAMIC ADVERTISING; or";
	$pdf->Row(array($terms));
	$terms = "2.4.2 the first Ad placement delivered by DYNAMIC ADVERTISING.";
	$pdf->Row(array($terms));
	$terms = "2.5 In the event that DYNAMIC ADVERTISING is unable to accept or adhere to the IO in any respect, DYNAMIC ADVERTISING shall endeavor to inform the Advertiser of same within 1 (one) Business Day of receipt of an IO.";
	$pdf->Row(array($terms));
	$terms = "2.6 DYNAMIC ADVERTISING shall use its best endeavours to comply with an IO in all material respects; however DYNAMIC ADVERTISING shall be entitled in its sole and absolute discretion to deviate from an IO where DYNAMIC ADVERTISING reasonably considers such deviation to be in the best interests of the Advertiser.";
	$pdf->Row(array($terms));
	$terms = "2.7 DYNAMIC ADVERTISING will endeavour, where possible and using commercially reasonable efforts to provide the Advertiser with at least 7 (seven) Business Days notice of any material change to an Ad (“Ad Modification” Notice”) which may potentially, materially affect the target audience and/or the size and/or placement of the Ad (“Ad Modification”).";
	$pdf->Row(array($terms));
	$terms = "2.8 Where DYNAMIC ADVERTISING sends an Ad Modification Notice to the Advertiser, the Advertiser will have to:";
	$pdf->Row(array($terms));
	$terms = "2.8.1 revise or amend the contents as per the reasons as described in the Ad Modification Notice from DYNAMIC ADVERTISING; or";
	$pdf->Row(array($terms));
	$terms = "2.8.2 request that DYNAMIC ADVERTISING remove the Ad completely.";
	$pdf->Row(array($terms));
	$terms = "2.9 DYNAMIC ADVERTISING shall use commercially reasonable efforts to prevent click fraud; however Advertiser shall have no claim of any nature whatsoever against DYNAMIC ADVERTISING in the event of any click fraud being detected or arising in respect of any Ad placed pursuant to an IO.";
	$pdf->Row(array($terms));
	$terms = "";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','B',12);
	$terms = "3. AMENDMENTS";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','I',8);	
	$terms = "Revisions or amendments to an IO shall be permitted only as agreed to in writing by both parties.";
	$pdf->Row(array($terms));
	$terms = "";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','B',12);
	$terms = "4. PAYMENT";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','I',8);	
	$terms = "4.1 The Advertiser shall pay to DYNAMIC ADVERTISING the amount stated on an IO (“Fee”).";
	$pdf->Row(array($terms));
	$terms = "4.2 The Fee due to DYNAMIC ADVERTISING by the Advertiser shall be made:";
	$pdf->Row(array($terms));
	$terms = "4.2.1 into a bank account specified by DYNAMIC ADVERTISING from time to time; and";
	$pdf->Row(array($terms));
	$terms = "4.2.2 free of bank charges and without deduction or set-off of whatsoever nature.";
	$pdf->Row(array($terms));
	$terms = "4.3 The payment will be due:";
	$pdf->Row(array($terms));
	$terms = "4.3.1 on acceptance of service by the Advertiser";
	$pdf->Row(array($terms));
	$terms = "4.3.2 every month on stated accrued date as per statement";
	$pdf->Row(array($terms));
	$terms = "4.4 Should the Advertiser fail to make payment of the Fee by the due date thereof, such non-payment shall constitute a breach of this agreement and DYNAMIC ADVERTISING shall be entitled, but not obliged, to immediately suspend the Services, cancel the IO and/or to claim immediate performance and/or payment of all of the Advertiser’s obligations in default.";
	$pdf->Row(array($terms));
	$terms = "4.5 Any amount due but unpaid in terms hereof shall bear interest at the Prime Rate from the due date to the actual date of payment.";
	$pdf->Row(array($terms));
	$terms = "4.6 Where the Advertiser is located outside of South Africa, or is represented by an agent, DYNAMIC ADVERTISING may impose further conditions in respect of acceptance of an IO, including payment of the Fee in advance. No Services shall be rendered until such time as the Fee is received by DYNAMIC ADVERTISING.";
	$pdf->Row(array($terms));
	$terms = "4.7 Any Advertiser represented by an agent undertakes and warrants that such agent has the necessary authority to represent the Advertiser. The Advertiser indemnifies DYNAMIC ADVERTISING for any and all losses incurred as a result of any breach by the agent of any obligation contemplated in terms of this agreement.";
	$pdf->Row(array($terms));
	$terms = "";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','B',12);
	$terms = "5. CANCELLATIONS AND POSTPONEMENTS";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','I',8);	
	$terms = "5.1 The Advertiser shall be entitled to cancel an IO on 30 (thirty) days written notice (“Cancellation Notice”) at any time after acceptance of same by DYNAMIC ADVERTISING.";
	$pdf->Row(array($terms));
	$terms = "5.2 Where a Cancellation Notice is received by DYNAMIC ADVERTISING 30 (thirty) days or more prior to the Fee due date no Fee shall be incurred by the Advertiser.";
	$pdf->Row(array($terms));
	$terms = "5.3 Where a Cancellation Notice is received less than 30 (thirty) days prior to the Fee due date, the Advertiser shall be liable for all Fees incurred for 30 (thirty) days following the Fee due date, or for all Fees incurred for 30 (thirty) days following receipt of a Cancellation Notice by DYNAMIC ADVERTISING, if such Cancellation Notice is received after the Fee due date.";
	$pdf->Row(array($terms));
	$terms = "5.4 An Advertiser may request a postponement of cancellation of IO and DYNAMIC ADVERTISING shall endeavor to comply with such postponement request, provided that:";
	$pdf->Row(array($terms));
	$terms = "5.5.1 such postponement request is made in writing by the Advertiser;";
	$pdf->Row(array($terms));
	$terms = "5.5.2 any postponement shall be concidered solely at the discretion of DYNAMIC ADVERTISING;";
	$pdf->Row(array($terms));
	$terms = "5.5.3 billing and payment of all Fees shall be as per the original acceptance of service and same shall not be amended in respect of a postponement; and";
	$pdf->Row(array($terms));
	$terms = "5.5.4 should the Advertiser deliver a Cancellation Notice after requesting a postponement, or on the basis that DYNAMIC ADVERTISING is unable to adhere to a postponement request, the cancellation shall be determined in accordance with the acceptance of service date and any Fees payable on cancellation (if any) shall be calculated in accordance with the clauses 5.2 to 5.4.";
	$pdf->Row(array($terms));
	$terms = "";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','B',12);
	$terms = "6. AD MATERIALS";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','I',8);	
	$terms = "6.1 The Advertiser shall provide DYNAMIC ADVERTISING via the online form with such materials including but not limited to content, graphics, logos and other wording and imagery as may be required by DYNAMIC ADVERTISING to deliver the Services (“Advertiser Materials”).";
	$pdf->Row(array($terms));
	$terms = "6.2 The Advertiser warrants in favour of DYNAMIC ADVERTISING and its Affiliates that it is, and at all relevant times shall be the lawful owner of all copyright in, and all other intellectual property rights (or alternatively that the Advertiser is the duly authorized representative of such lawful owner), relating to the Ad and all Advertiser Materials furnished by the Advertiser to DYNAMIC ADVERTISING for the purposes of fulfilling its obligations in terms of an IO.";
	$pdf->Row(array($terms));
	$terms = "6.3 The Advertiser irrevocably and unconditionally indemnifies and holds harmless DYNAMIC ADVERTISING and its Affiliates against any claim made by any person, howsoever arising as a result of any infringement of any intellectual property rights or other third party rights in respect of the Ad, any Advertiser Material or Services rendered by DYNAMIC ADVERTISING for the Advertiser.";
	$pdf->Row(array($terms));
	$terms = "6.4 DYNAMIC ADVERTISING shall not incur any liability whatsoever as a result of any delay in the Ad placement, or failure to comply with the IO as a result of such Late Material Supply; and";
	$pdf->Row(array($terms));
	$terms = "6.4 The Advertiser shall remain liable for all its obligations under the IO including payment of the Fee in full, notwithstanding any failure by DYNAMIC ADVERTISING to adhere to the IO or any loss of inventory as a result of such delay.";
	$pdf->Row(array($terms));
	$terms = "6.5 The Advertiser acknowledges that the Services shall be rendered subject to any internal policies governing the business of DYNAMIC ADVERTISING and its Affiliates, including but not limited to policies on content, privacy, public image, obscenity and indecency (“Policies”). In accordance therewith, DYNAMIC ADVERTISING shall be entitled at any time, whether acting for itself or upon the instructions of an Affiliate to refuse to provide any Services or to remove any Ad or suspend any Services where same does not comply, or will not comply with the Policies.";
	$pdf->Row(array($terms));
	$terms = "6.6 The removal or rejection of any Ad as contemplated in clause 6.5 above shall constitute an immediate cancellation of the IO and the terms of clause 5 shall apply as applicable.";
	$pdf->Row(array($terms));
	$terms = "";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','B',12);
	$terms = "7. LIABILITY";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','I',8);	
	$terms = "7.1 DYNAMIC ADVERTISING’s liability in relation to or in connection with the Services and that of its subsidiaries, holding companies, officers, directors, employees, agents and Affiliates (“Related Persons”) shall be limited to the matters expressly provided for in this agreement and DYNAMIC ADVERTISING and its Related Persons shall not be liable for any consequential, indirect, incidental, punitive or special damages of whatsoever nature, including but not limited damages for loss of profits, business interruption, loss of information or the like incurred by the Advertiser or any third party by, or arising out of these Terms or the IO.";
	$pdf->Row(array($terms));
	$terms = "7.2 Subject only to such agreed liabilities aforesaid, the Advertiser hereby indemnifies DYNAMIC ADVERTISING and its Related Persons in respect of any and all claims made by any third party against DYNAMIC ADVERTISING or its Related Persons in connection with:";
	$pdf->Row(array($terms));
	$terms = "7.2.1 the provision of the Services; and";
	$pdf->Row(array($terms));
	$terms = "7.2.2 the use of Advertiser Material.";
	$pdf->Row(array($terms));
	$terms = "7.3 DYNAMIC ADVERTISING and its Related Persons shall not incur any liability whatsoever as a result of any failure, corruption, interruption or other such event which may affect or render any website in respect of which Services have been rendered, temporarily or permanently unavailable.";
	$pdf->Row(array($terms));
	$terms = "";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','B',12);
	$terms = "8. CONFIDENTIALITY";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','I',8);	
	$terms = "The parties shall treat all information exchanged pursuant to this agreement as private and confidential and shall safeguard same accordingly.";
	$pdf->Row(array($terms));
	$terms = "";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','B',12);
	$terms = "9. BREACH";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','I',8);	
	$terms = "If any party commits a breach of this agreement and/or fails to comply with any of the provisions hereof (“the Defaulting Party”), then the remaining party (“the Aggrieved Party”) shall be entitled to give the Defaulting Party 7 (seven) days notice in writing to remedy such breach and/or failure, and if the Defaulting Party fails to comply with such notice then the Aggrieved Party shall forthwith be entitled, but not obliged, without prejudice to any other rights or remedies which the Aggrieved Party may have in law, including the right to claim damages :";
	$pdf->Row(array($terms));
	$terms = "9.1 to cancel this agreement; or";
	$pdf->Row(array($terms));
	$terms = "9.2 to claim immediate performance and/or payment of all the Defaulting Party’s obligations in terms hereof.";
	$pdf->Row(array($terms));
	$terms = "";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','B',12);
	$terms = "10. ARBITRATION";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','I',8);	
	$terms = "10.1 Any dispute arising from or in connection with this agreement shall be finally resolved in accordance with the Rules of the Arbitration Foundation of Southern Africa by a single arbitrator appointed by the Foundation. Such arbitration shall be held in Cape Town. The decision of the single arbitrator shall be final and binding on the parties, however, no party shall be precluded from applying to Court for a temporary interdict or other relief of an urgent and temporary nature, pending the decision or award of the arbitrator hereunder.";
	$pdf->Row(array($terms));
	$terms = "10.2 The provisions of this clause 10 are separate and severable from the rest of this agreement and, accordingly, shall remain in effect despite the termination or invalidity for any reason of this agreement.";
	$pdf->Row(array($terms));
	$terms = "";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','B',12);
	$terms = "11. NOTICES AND DOMICILIA";
	$pdf->Cell(100,10,$terms,0,1,'L');
	$pdf->SetFont('Helvetica','I',8);	
	$terms = "11.1 Each of the parties chooses domicilium citandi et executandi (“domicilium”) for the purposes of the giving of any notice, the serving of any process and for any other purposes arising from this agreement at their respective addresses set forth in clause 1 above or in the IO as the case may be.";
	$pdf->Row(array($terms));
	$terms = "11.2 Any notices to any party shall be sent by prepaid registered post, delivered by hand or communicated by facsimile or email. In the case of :";
	$pdf->Row(array($terms));
	$terms = "11.2.1 any notice sent by prepaid registered post, it shall be deemed to have been received, unless the contrary is proved, on the 5th (fifth) Business Day after posting;";
	$pdf->Row(array($terms));
	$terms = "11.2.2 any notice delivered by hand, it shall be deemed to have been received, unless the contrary is proved, on the date of delivery, provided such date is a Business Day or otherwise on the next following Business Day;";
	$pdf->Row(array($terms));
	$terms = "11.2.3 any notice communicated by facsimile or email, it shall be deemed to have been received, unless the contrary is proved, on the same day of transmission, providing the day of transmission is a Business Day or otherwise on the following Business Day.";
	$pdf->Row(array($terms));
	$terms = "11.3 Notwithstanding the above, any notice given in writing in English, and actually received by the party to whom the notice is addressed, will be deemed to have been properly given and received, notwithstanding that such notice has not been given in accordance with this clause.";
	
	$pdf->Row(array($terms));
	
	$pdf->Output();
	
	
	
	
	
	
	
?>