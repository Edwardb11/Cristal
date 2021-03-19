let fecha = {
	mes: "Marzo",
	dia: 12,
	año: 2021,
	dias: ["Domingo", "Lunes", "Marzo", "Miercoles", "Jueves", "Viernes", "Sabado"],
}
let dt = new Date(fecha.mes + ', ' + fecha.dia + ', ' + fecha.año);
let text = "Dia de la semana : " + fecha.dias[dt.getUTCDay()];
document.getElementById('demo').innerHTML=text;
