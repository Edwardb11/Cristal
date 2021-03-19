let fecha = {
	mes: "Marzo",
	dia: 12,
	año: 2021,
	dias: ["Domingo", "Lunes", "Marzo", "Miercoles", "Jueves", "Viernes", "Sabado"],
}

function dt() {
	return new Date(fecha.mes + ', ' + fecha.dia + ', ' + fecha.año);
}

function diaDeLaSemana() {
	return "Dia de la semana : " + fecha.dias[dt().getUTCDay()];
}

document.getElementById('demo').innerHTML=diaDeLaSemana();
