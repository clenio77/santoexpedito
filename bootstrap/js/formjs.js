function hgsubmit () {
  if (/\S+/.test(document.hgmailer.nome.value) == false) alert('Por favor, digite seu nome.')
  else if (/^\S+@[a-z0-9_.-]+\.[a-z]{2,6}$/i.test(document.hgmailer.email.value) == false) alert('Um endereço de e-mail válido é requerido.')
  else if (/\S+/.test(document.hgmailer.assunto.value) == false) alert('É necessário um assunto.')	
  else if (/\S+/.test(document.hgmailer.mensagem.value) == false) alert('É necessário um conteúdo para mensagem.')
  else {
    document.hgmailer.submit()
    alert('Obrigado!\nSeu e-mail foi enviado com sucesso.')
  }
}


function readCookie() {
    if (document.cookie == "") {
        writeCookie();
        alertMessage();
    } else {
        var the_cookie = document.cookie;
        the_cookie = unescape(the_cookie);
        the_cookie_split = the_cookie.split(";");
        for (loop=0;loop<the_cookie_split.length;loop++) {
            var part_of_split = the_cookie_split[loop];
            var find_name = part_of_split.indexOf("nfti_date")
            if (find_name!=-1) {
                break;
            } // Close if
        } // Close for
        if (find_name==-1) {
            writeCookie();
        } else {
            var date_split = part_of_split.split("=");
            var last = date_split[1];
            last=fixTheDate(last);
            alert (" - Bienvenido - Tu última visita a esta página fue: "+last);
            writeCookie();
        } // Close if (find_name==-1)
    }
} // Close function readCookie()


function writeCookie() {
    var today = new Date();
    var the_date = new Date("December 31, 2023");
    var the_cookie_date = the_date.toGMTString();
    var the_cookie = "nfti_date="+escape(today);
    var the_cookie = the_cookie + ";expires=" + the_cookie_date;
    document.cookie=the_cookie
}

function alertMessage(){
    alert ("Bienvenido\aquí agregas un mensaje de bienvenida.")
}

function fixTheDate(date) {
    var split = date.split(" ");
    var fix_the_time = split[3].split(":")
    var hours = fix_the_time[0]
    if (hours>=12) {
        var ampm="PM"
    } else {
        var ampm="AM"
    }
    if (hours > 12) {
        hours = hours-12
    }
    var new_time = hours+":"+fix_the_time[1]+" "+ampm
    var new_date = split[0]+" "+split[1]+", "+split[2]+" at "+new_time+", "+split[5]
    return new_date;
}
