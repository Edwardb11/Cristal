let mes = "Marzo";
let dia = 12;
let año = 2021;
let dias = ["Domingo", "Lunes", "Marzo", "Miercoles", "Jueves", "Viernes", "Sabado"];
let dt = new Date(mes + ', ' + dia + ', ' + año);
let text = "Dia de la semana : " + dias[dt.getUTCDay()];
document.getElementById('demo').innerHTML=text;
