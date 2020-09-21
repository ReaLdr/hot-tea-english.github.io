eventListeners();

function eventListeners() {
  if(document.getElementById('info_contacto')){
    document.getElementById('info_contacto').addEventListener('submit', validate_form_contact);
  }
}

function validate_form_contact(e){
  e.preventDefault();

  //alert("Validamos");
}
