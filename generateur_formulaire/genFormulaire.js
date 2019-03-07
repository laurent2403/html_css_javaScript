//fonction permettant l'affichage dans la zone de droite
function buildInput(typeInput) {

	// recuperation et enregistrement de la zone d'enregistrement a droite
	var $zoneDroiteEnregistrement = $('#idDivValidationDroite');
	// reset de la zone d'enregistrement de droite
	$zoneDroiteEnregistrement.empty();

	// appui sur les different boutons
	switch (typeInput) {
		 //////////////////////////
		 //clique sur le btn label/
         //////////////////////////
         case 1: 
               // creation du label
               var $label = $("<label>");
               // ajout d'un Id au label
               $label.text("Texte du label :");
               // ajout du label au panneau
               $zoneDroiteEnregistrement.append($label);
               // creation de zone de saisie
               $textAreaLabel = $('<input />').attr({'type':'text', 'id':'idNomLabel'});
               // ajout de la zone de saisi au panneau
               $zoneDroiteEnregistrement.append($textAreaLabel);
               // creation du bouton OK
               var $okBtnLabel = $('<input />').attr({'type':'submit', 'id':'idOkBtnLabel', 'value' : 'OK', 'onclick' : 'valid(1)'});
               // ajout du bouton OK au panneau
               $zoneDroiteEnregistrement.append($okBtnLabel);
               break;
		 //////////////////////////////////
		 //clique sur le btn zone de texte/
         //////////////////////////////////
         case 2: 
               // creation du label
               var $labelArea = $("<label>");
               $labelArea.text("Id de la zone de texte :");
               // ajout du label au panneau
               $zoneDroiteEnregistrement.append($labelArea);
               // creation de zone de saisie
               $textArea = $('<input />').attr({'type':'text', 'id':'idTxtArea'});
               // ajout de la zone de saisi au panneau
               $zoneDroiteEnregistrement.append($textArea);
               // creation du bouton OK
               var $okBtntxtArea = $('<input />').attr({'type':'submit', 'id':'idOkBtntxtArea', 'value' : 'OK', 'onclick' : 'valid(2)'});
               // ajout du bouton OK au panneau
               $zoneDroiteEnregistrement.append($okBtntxtArea);
               break;
         ///////////////////////////
		 //clique sur le btn bouton/
         ///////////////////////////
         case 3: 
               // creation du label
               var $labelBtn = $("<label>");
               $labelBtn.text("Nom du bouton :");
               // ajout du label au panneau
               $zoneDroiteEnregistrement.append($labelBtn);
               // creation de la zone de saisie pour definir le nom du bouton
               $textAreaBtn = $('<input />').attr({'type':'text', 'id':'idTxtAreaBtn'});
               // ajout de la zone de saisi au panneau
               $zoneDroiteEnregistrement.append($textAreaBtn);
               var $okBtn = $('<input />').attr({'type':'submit', 'id':'idOkBtn', 'value' : 'OK', 'onclick' : 'valid(3)'});
               // ajout du bouton OK au panneau
               $zoneDroiteEnregistrement.append($okBtn);
               break;
    }
    
}

 function valid(validTypeInput) {

 	// recuperation et enregistrement de la zone d'affectation des inputs à gauche
	var $zoneGaucheCreation = $('#idDivCreationGauche');
	// recuperation et enregistrement de la zone d'enregistrement a droite
	var $zoneDroiteEnregistrement = $('#idDivValidationDroite');

	// appui sur les different boutons
	switch (validTypeInput) {
		 ////////////////////////////////
		 //clique sur le btn ok du label/
         ////////////////////////////////
         case 1:
         // creation du label à afficher
         var $showLabel = $("<label >");
         // affectation de la zone de texte au label
         $showLabel.text($('#idNomLabel').val());
         // affichage du label dans sa zone
         $zoneGaucheCreation.append($showLabel);
         // reset de la zone d'enregistrement de droite
	     $zoneDroiteEnregistrement.empty();
         break;
         //////////////////////////////////////////
		 //clique sur le btn ok du champ de saisie/
         //////////////////////////////////////////
         case 2:
         var showTextArea = $('<input />').attr({'type':'text', 'id': $('#idTxtArea').val()});
         // affichage du champ de saisie dans sa zone
         $zoneGaucheCreation.append(showTextArea);
         // reset de la zone d'enregistrement de droite
         $zoneDroiteEnregistrement.empty();
         break;
         /////////////////////////////////
		 //clique sur le btn ok du bouton/
         /////////////////////////////////
         case 3:
         var showBtn = $('<input />').attr({'type':'submit', 'id' : 'idBtn', 'value': $('#idTxtAreaBtn').val()});
         // affichage du bouton dans sa zone
         $zoneGaucheCreation.append(showBtn);
         // reset de la zone d'enregistrement de droite
         $zoneDroiteEnregistrement.empty();
     }




 }
