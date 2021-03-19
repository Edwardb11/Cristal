var mes = "Marzo";
var dia = 12;
var año = 2021;
var dias = ["Domingo", "Lunes", "Marzo", "Miercoles", "Jueves", "Viernes", "Sabado"];
var dt = new Date(mes + ', ' + dia + ', ' + año);
var text = "Dia de la semana : " + dias[dt.getUTCDay()];
//Element = document.getElementById('demo');
document.getElementById('demo').innerHTML=text;
//document.write(text);