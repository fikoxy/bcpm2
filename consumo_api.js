
function inicio(letra1) {
	let contenido = document.getElementById("contenido");

	fetch('https://digimon-api.vercel.app/api/digimon')
		.then(response => response.json())
		.then(resp => {
			crearTabla(resp, letra1)
		});
}

function buscartexto(texto1) {
	let contenido = document.getElementById("contenido");

	fetch('https://digimon-api.vercel.app/api/digimon')
		.then(response => response.json())
		.then(resp => {
			crearTabla2(resp, texto1)
		});
}


function crearTabla(resp, letra) {
	contenido.innerHTML = '';
	switch (letra) {
		case '0':
			buscarTodos(resp);
			break;
		case '1':
			buscarTipo(resp, 'Fresh');
			break;
		case '2':
			buscarTipo(resp, 'In Training');
			break;
		case '3':
			buscarTipo(resp, 'Rookie');
			break;
		case '4':
			buscarTipo(resp, 'Champion');
			break;
		case '5':
			buscarTipo(resp, 'Ultimate');
			break;
		case '6':
			buscarTipo(resp, 'Mega');
			break;
		case '7':
			buscarTipo(resp, 'Armor');
			break;
		default:
			buscarLetra(resp, letra);
			break;
	}

}

function buscarLetra(r1, letra2) {
	for (let datoTemporal of r1) {
		var nombre = datoTemporal.name;
		if (nombre.charAt(0) == letra2) {
			contenido.innerHTML +=
				`
					<td>${datoTemporal.name}</td>
					<td><img src="${datoTemporal.img}" style="width: 2rem;"></td>
					<td>${datoTemporal.level}</td>
					<td>
						<a class="nav-link" onclick="buscarunico('${datoTemporal.name.toLowerCase()}');" href="#" style="text-decoration: underline">Ver Detalle</a>
      				</td>
				`
		}
	}
}

function buscarTipo(r2, t) {
	for (let datoTemporal of r2) {
		var tipo = datoTemporal.level;
		if (tipo == t) {
			contenido.innerHTML +=
				`
				<td>${datoTemporal.name}</td>
				<td><img src="${datoTemporal.img}" style="width: 2rem;"></td>
				<td>${datoTemporal.level}</td>
				<td>
					<a class="nav-link" onclick="buscarunico('${datoTemporal.name.toLowerCase()}');" href="#" style="text-decoration: underline">Ver Detalle</a>
      			</td>
			`
		}
	}
}

function buscarTodos(r3) {
	let nd = document.getElementById("nombreDigi");

	for (let datoTemporal of r3) {

		contenido.innerHTML +=
			`
				<td>${datoTemporal.name} </td>
				<td><img src="${datoTemporal.img}" style="width: 2rem;"></td>
				<td>${datoTemporal.level}</td>
				<td>
					<a class="nav-link" onclick="buscarunico('${datoTemporal.name.toLowerCase()}');" href="#" style="text-decoration: underline">Ver Detalle</a>
      			</td>
			`
			
	}
}

function crearTabla2(resp, txt) {
	contenido.innerHTML = '';

	for (let datoTemporal of resp) {
		var nombre = datoTemporal.name;
		if (nombre.search(txt) != -1) {
			contenido.innerHTML +=
				`
					<td>${datoTemporal.name}</td>
					<td><img src="${datoTemporal.img}" style="width: 2rem;"></td>
					<td>${datoTemporal.level}</td>
					<td>
						<a class="nav-link" onclick="buscarunico('${datoTemporal.name.toLowerCase()}');" href="#" style="text-decoration: underline">Ver Detalle</a>
      				</td>
				`
		}
	}
}

function buscarunico(texto2) {
	contenido.innerHTML = '';
	fetch('https://digimon-api.vercel.app/api/digimon/name/'+texto2)
		.then(response => response.json())
		.then(resp1 => {
			cargarDatos(resp1)
		});
}

function cargarDatos(resp) {
	console.log(resp);
	console.log(resp[0]['name']);
	let foto = document.getElementById("foto");
	
	foto.innerHTML =
		`
			<div class="card" style="width: 18rem;">
				<img src="${resp[0]['img']}">
			</div>
			<div class="container-sm">
				<H2>NOMBRE: ${resp[0]['name']}</h2>
				<H2>NIVEL: ${resp[0]['level']}</H2>
				<p></p>
				<a class "nav-link" href="consumo_api.html">Volver</a>
			</div>
		`
}

















