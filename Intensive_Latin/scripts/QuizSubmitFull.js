function submitQuiz(button) {

    // establish the "before" and "after" sections associated
    // with the particular button that was pressed
    var before = button.parentElement;
    var after = before.parentElement.getElementsByClassName("after")[0];

    // collect the forms (one for each question)
    var forms = before.getElementsByTagName("form");

    // arrays to hold each type of response
    var textResponses = [];
    var radioResponses = [];
    var checkResponses = [];

    // iterate over each form element, extracting responses and
    // adding them to the above arrays based on input type
    var i, j;
    for (i = 0; i < forms.length; i++) {

        // collect the inputs in this form
        var inputs = forms[i].getElementsByTagName("input");
        
        // push empty strings in case no response has been clicked
        radioResponses.push("");
        checkResponses.push("");

        // sort values into arrays
        for (j = 0; j < inputs.length; j++) {
            switch (inputs[j].type.toLowerCase()) {
            case "text":
                textResponses.push(inputs[j].value);
                break;
            case "radio":
                if (inputs[j].checked) {
                    radioResponses[i] += inputs[j].value;
                }
                break;
            case "checkbox":
                if (inputs[j].checked) {
                    if (checkResponses[i] == "") {
                        checkResponses[i] += inputs[j].value;
                    } else {
                        checkResponses[i] += ", " + inputs[j].value;
                    }
                }
            }
        }
    }

    // populate the response fields with the gathered values
    var tr = after.getElementsByClassName("text-response");
    for (i = 0; i < tr.length; i++) {
        tr[i].innerHTML = textResponses[i];
    }

    var rr = after.getElementsByClassName("radio-response");
    for (i = 0; i < rr.length; i++) {
        rr[i].innerHTML = radioResponses[i];
    }
    
    var cr = after.getElementsByClassName("check-response")
    for (i = 0; i < cr.length; i++) {
        cr[i].innerHTML = checkResponses[i];
    }
    
    // show the responses and hide the questions
    after.style.display = "block";
    before.style.display = "none";

}