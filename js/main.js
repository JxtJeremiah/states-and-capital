let btn = document.getElementsByClassName("btn")
const checknow = ()=>{
    let getForm = document.forms['form1']['text1']
    let results = document.querySelector("#results")

    if(getForm.value == ""){
        results.innerHTML = "Input a state in the box "
    }else if(getForm.value == "abia"){
        results.innerHTML = "The capital is umuahia"
    }else if(getForm.value == "adamawa"){
        results.innerHTML = "The capital is yola"
    }else if(getForm.value == "akwaibom"){
        results.innerHTML = "The capital is uyo"
    }else if(getForm.value == "anambra"){
        results.innerHTML = "The capital is awka"
    }else if(getForm.value == "bauchi"){
        results.innerHTML = "The capital is bauchi"
    }else if(getForm.value == "bayelsa"){
        results.innerHTML = "The capital is yenegoa"
    }else if(getForm.value == "benue"){
        results.innerHTML = "The capital is makurdi"
    }else if(getForm.value == "borno"){
        results.innerHTML = "The capital is maiduguri"
    }else if(getForm.value == "cross-rivers"){
        results.innerHTML = "The capital is calabar"
    }else if(getForm.value == "delta"){
        results.innerHTML = "The capital is asaba"
    }else if(getForm.value == "ebonyi"){
        results.innerHTML = "The capital is abakiliki"
    }else if(getForm.value == "edo"){
        results.innerHTML = "The capital is benin-city"
    }else if(getForm.value == "ekiti"){
        results.innerHTML = "The capital is ado-ekiti"
    }else if(getForm.value == "enugu"){
        results.innerHTML = "The capital is enugu"
    }else if(getForm.value == "gombe"){
        results.innerHTML = "The capital is gombe"
    }else if(getForm.value == "imo"){
        results.innerHTML = "The capital is owerri"
    }else if(getForm.value == "jigawa"){
        results.innerHTML = "The capital is dutse"
    }else if(getForm.value == "kaduna"){
        results.innerHTML = "The capital is kaduna"
    }else if(getForm.value == "kano"){
        results.innerHTML = "The capital is kano"
    }else if(getForm.value == "katsina"){
        results.innerHTML = "The capital is katsina"
    }else if(getForm.value == "kebbi"){
        results.innerHTML = "The capital is bernin kebbi"
    }else if(getForm.value == "kogi"){
        results.innerHTML = "The capital is logoka"
    }else if(getForm.value == "kwara"){
        results.innerHTML = "The capital is illorin"
    }else if(getForm.value == "lagos"){
        results.innerHTML = "The capital is ikeja"
    }else if(getForm.value == "nasarawa"){
        results.innerHTML = "The capital is lafia"
    }else if(getForm.value == "niger"){
        results.innerHTML = "The capital is minna"
    }else if(getForm.value == "ogun"){
        results.innerHTML = "The capital is abeokuta"
    }else if(getForm.value == "ondo"){
        results.innerHTML = "The capital is akure"
    }else if(getForm.value == "osun"){
        results.innerHTML = "The capital is osogbo"
    }else if(getForm.value == "oya"){
        results.innerHTML = "The capital is ibadan"
    }else if(getForm.value == "plateau"){
        results.innerHTML = "The capital is jos"
    }else if(getForm.value == "rivers"){
        results.innerHTML = "The capital is port-harcourt"
    }else if(getForm.value == "sokoto"){
        results.innerHTML = "The capital is sokoto"
    }else if(getForm.value == "taraba"){
        results.innerHTML = "The capital is jalingo"
    }else if(getForm.value == "yobe"){
        results.innerHTML = "The capital is damaturu"
    }else if(getForm.value == "zamfara"){
        results.innerHTML = "The capital is gasau"
    }else if(getForm.value == "fct"){
        results.innerHTML = "The capital is abuja"
    }else{
        results.innerHTML = "<br>" + "Sorry, can't find state"
    }
}

btn[0].onclick = checknow
    
    
    
    
    
