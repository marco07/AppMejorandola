/*un evento es algo que ocurre cuando algo pasa
 3 objetos de javascript
 browser --------navigator
 ventana/tab --- window
 Documento ----- document(DOM)

 forma para trabajar en jquery es 
 -jQuery
 -$
*/
	/*cargar pagina*/   /*funcion*/
$(document).on("ready",inicio);

function inicio(){
	//aqui va todo el codigo relacionado con DOM
	$("#personalizar").on("click",transicion);
}
function transicion(){
	//JSON: objeto de javascript cargado con datos

	var cambiosCSS = {
		//variable: valor
		//background:"red",
		//color:"#222"
		margin: 0,
		overflow: "hidden",
		padding:0,
		width:0
	};
	var cambiosPersonalizacion ={
		height: "auto",
		opacity:1,
		width:"40%"
	}

	$("#historia").css(cambiosCSS);//personalizando css mediante json
	$("#personalizacion").css(cambiosPersonalizacion);
	
	$("#color div").on("click",cambiarColor);

}
function cambiarColor(datos){
	var color = datos.currentTarget.id;
	var nuevoCoche = "c" + color + ".jpg";
	$("#cochecito img").attr("src",nuevoCoche);//attr cambia un atributo
	
}
