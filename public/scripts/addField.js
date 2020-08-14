// Search for the button
document.querySelector("#add-time")
.addEventListener('click', cloneField) //evento == click e cloneField == ação a ser executada qauando executar o evento (click)

// Executar uma acão
function cloneField() {

         //Duplicate the fields. What field?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Get the fields: What fields?
    const fields = newFieldContainer.querySelectorAll('input')


    // stop each field and clear
    fields.forEach(function(fields) {
        //take the field of the moment and clean it
        fields.value = ""

    })


  

    //Place the field(newFieldContainer) on the page: Where?
   document.querySelector('#schedule-items').appendChild(newFieldContainer) 
}

   