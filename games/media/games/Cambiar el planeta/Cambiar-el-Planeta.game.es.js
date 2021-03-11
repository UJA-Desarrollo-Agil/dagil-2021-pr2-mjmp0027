// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "12b4d560-828e-11eb-9881-0800200c9a66"; // GEnerado por http://www.famkruithof.net/uuid/uuidgen

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

// En modo depuración, que no haya efectos de jquery
jQuery.fx.off=false

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
				"<h1>Habitacion de la casa</h1>\
				<p>Estas en Lahiguera en 2050</p>",
				{
	        enter: function(character, system, from) {
	            system.doLink('habitacion');
	        }

				}
		),
		habitacion: new undum.SimpleSituation (
				"<p>Te propones a cambiar el mundo de esta pandemia que aún asola los paises del mundo y para ello necesitarás muchas cosas y te preguntas:</p>\
				<p class='dialogo'>- ¿Que debería llevarme?</p>\
        <p>Empiezas a pensar en un montón de cosas que encuentras en tu habitación y encuentras tu imitación perfecta \
		del <a href='./manipulador' class='once'>manipulador de campos de energia cero</a> del famoso Gordon Freeman, \
		<a href='./llaves' class='once'>las llaves</a>, <a href='comprarfiesta'>una botella de Whisky</a> y tu máquina del \
		tiempo recién inventada <a href='./timemachine' class='once'>Time Machine</a> \
		y te vas al <a href='patiotrasero'>patio trasero</a> a usar la máquina.</p>"
		,
				{
            actions: {
                'manipulador': function(character, system, action) {
															system.setQuality( "manipulador", true );
															system.setCharacterText("<p>Ahora tienes el manipulador te será útil para mover objetos muy pesados \
																						en el pasado, en el presente o en el futuro.</p>");
															},
				'timemachine': function(character, system, action) {
															system.setQuality( "timemachine", true );
															system.setCharacterText("<p>Has cogido la máquina decidido a volver al pasado y cambiar el planeta.</p>");
															},
				'llaves': function( character, system, action) {
																	system.setQuality( "llaves", true );
																	system.setCharacterText( "<p>Cuidado porque sin ellas no podrás entrar de nuevo.</p>" );
																}
					  }
				}
		),
		comprarfiesta: new undum.SimpleSituation(
			"<p>Pensativo empiezas a pensar que ese día tenías una fiesta de carnaval a escondidas de la policía</p>\
			<p> Por lo que te decides a comprar la bebida, buscando tu <a href='./mascarilla' class='once'>mascarilla</a>, \
			 y por supuesto <a href='./dinero' class='once'>dinero</a>. </p>\
			<p>Recapacitando puedes <a href='habitacion'>pensar mejor y no ir a la fiesta</a> o <a href='mercadona'>ir a comprar la bebida</a>.</p>",
				{
            actions: {
                'mascarilla': function( character, system, action) {
																	system.setCharacterText( "<p>Necesaria para salir de casa. \
																											Si no quieres que te multen claro está.(Virus a parte)</p>" );
																},
				'llaves': function( character, system, action) {
																	system.setQuality( "llaves", true );
																	system.setCharacterText( "<p>Cuidado porque sin ellas no podrás entrar de nuevo.</p>" );
																},
				'dinero': function( character, system, action) {
																	system.setCharacterText( "<p>Con esto podrás comprar todo lo que quieras. \
																														Sí eres rico asi que no escatimes.</p>" );
																},
					  }
				}
		),
		
		mercadona: new undum.SimpleSituation(
			"<h1>Mercadona</h1>\
			<p>Aquí te puedes comprar todo lo que necesites para la fiesta, una botella de <a href='./whisky' class='once'>Whisky</a>, \
			<a href='./coca-cola' class='once'>Coca-Cola</a>, <a href='./fanta' class='once'>Fanta</a>, <a href='./vasos' class='once'>Vasos</a> \
			y <a href='./hielo' class='once'>Hielo</a>. </p>\
			<p> <a href='casanollavenop'>Y vuelves a casa después de pagar todo lo que has cogido</a>. </p>",
				{
            actions: {
                'whisky': function( character, system, action) {
																	system.setCharacterText( "<p>Necesaria para salir de casa. \
																											Si no quieres que te multen claro está.(Virus a parte)</p>" );
																},
				'coca-cola': function( character, system, action) {
																	system.setCharacterText( "<p>Cuidado porque sin ellas no podrás entrar de nuevo.</p>" );
																},
				'fanta': function( character, system, action) {
																	system.setCharacterText( "<p>Con esto podrás comprar todo lo que quieras. \
																														Sí eres rico asi que no escatimes.</p>" );
																},
				'vasos': function( character, system, action) {
																	system.setCharacterText( "<p>Con esto podrás comprar todo lo que quieras. \
																														Sí eres rico asi que no escatimes.</p>" );
																},
				'hielo': function( character, system, action) {
																	system.setCharacterText( "<p>Con esto podrás comprar todo lo que quieras. \
																														Sí eres rico asi que no escatimes.</p>" );
																},
					  }
				}
		),
		casanollavenop: new undum.SimpleSituation(
			"<h1>Fachada de tu casa</h1>\
			<p>Te encuentras ya para entrar en casa y te propones a buscar las llaves para entrar. </p>",
			{
				enter: function( character, system, from ) {
					if( character.qualities.llaves ) {
						system.doLink( "casaconllavenop" );
					} else {
            $('body').css('background-image', 'url(https://bangbranding.com/blog/wp-content/uploads/2016/11/350x500_destacada-1.jpg')
						system.write( "<p>y descubres que al salir de tu casa olvidaste las llaves \
						por lo que recuerdas la llave que hay escondida en el <a href='patiotraserollavenop'>patio trasero</a>. </p>"
						
				);
					}
				}
			}
		),

		patiotraserollavenop: new undum.SimpleSituation(
			"<h1>Patio trasero</h1> \
			<p> Buscando en el árbol en el agujero trasero <a href='./llaves' class='once'>coges la llave</a> y vuelves a <a href='casanollavenop'>la puerta</a> para entrar.</p>",
				{
            actions: {
				enter: function( character, system, from ){
					$('body').css('background-image', 'url(https://decortips.com/es/_next/image?url=https%3A%2F%2Fdecortips.com%2Fes%2Fwp-content%2Fuploads%2F2019%2F04%2Ftener-jardin-bonito.jpg&w=1920&q=75)')
				},
				'llaves': function( character, system, action) {
																	system.setQuality( "llaves", true );
																	system.setCharacterText( "<p>Cuidado porque sin ellas no podrás entrar de nuevo.</p>" );
																}
					  }
				}
		),

		patiotraserollavesip: new undum.SimpleSituation(
			"<h1>Patio trasero</h1> \
			<p> Buscando en el árbol en el agujero trasero <a href='./llaves' class='once'>coges la llave</a> y vuelves a <a href='casanollavesip'>la puerta</a> para entrar.</p>",
				{
            actions: {
				'llaves': function( character, system, action) {
																	system.setQuality( "llaves", true );
																	system.setCharacterText( "<p>Cuidado porque sin ellas no podrás entrar de nuevo.</p>" );
																}
					  }
				}
		),
		casaconllavenop: new undum.SimpleSituation(
			"<h1>Casa</h1>\
			<p>Dejas todo lo comprado pensando en la fiesta y te olvidas de la idea de salvar el planeta. </p> \
			<h1>Fin de la historia.</h1>"
		),

		casaconllavesip: new undum.SimpleSituation(
			"<h1>Casa</h1>\
			<p>Haces arder al pangolin(si es que cogiste el pangolin) para que todo desaparezca y te asomas al ventana viendo todo en la \
			normalidad y la gente sin mascarilla como si nada hubiera pasado. </p>\
			<h1>Fin de la historia.</h1>"
		),

		patiotraseromaquina: new undum.SimpleSituation(
			"<p> <a href='pasado'>Usas la maquina </a>para volver al pasado .</p>"
		),

		patiotrasero: new undum.SimpleSituation(
			"<h1>Patio trasero</h1>\
			<p>Una vez en el patio te dispones a viajar al pasado al momento justo en que el maldito chino se comió el pangolín. </p>",
			{
				enter: function( character, system, from ) {
					$('body').css('background-image', 'url(https://decortips.com/es/_next/image?url=https%3A%2F%2Fdecortips.com%2Fes%2Fwp-content%2Fuploads%2F2019%2F04%2Ftener-jardin-bonito.jpg&w=1920&q=75')
					if( character.qualities.timemachine ) {
						system.doLink( "patiotraseromaquina" );
					} else {
            $('body').css('background-image', 'url(https://decortips.com/es/_next/image?url=https%3A%2F%2Fdecortips.com%2Fes%2Fwp-content%2Fuploads%2F2019%2F04%2Ftener-jardin-bonito.jpg&w=1920&q=75')
						system.write( "<p>y descubres que no has cogido la maquina del tiempo para viajar al pasado \
										por lo que decides <a href='habitacion'>volver a por ella</a>. </p>"
						
				);
					}
				}
			}
		),

		pasado: new undum.SimpleSituation(
			"<h1>Marzo de 2020</h1>\
			<p> Te encuentras en china en marzo en el año 2020 momentos antes de la consumición del pangolín.</p> \
			<p> De repente, te quedas pensativo y sorprendido al ver a toda la multitud sin mascarilla y recuerdas cuando todo antes estaba así \
			y te decides a <a href='restaurante'>entrar</a> al restaurante chino y evitar que ocurra todo. </p>"
		),

		restaurante: new undum.SimpleSituation(
			"<p> Estás en el restaurante y llamas al camarero para que te ponga a ti el pangolín que le ibas a poner al otro cliente ofreciendole 7000 yuanes. </p>\
			<p> El camarero se vuelve loco y obviamente te ofrece a ti el <a href='./pangolin' class='once'>pangolin</a>, por lo que tu decides guardarlo.\
			Después de todo no ha sido tan difícil... y te decides a <a href='casanollavesip'>volver a tu casa</a></p>",
				{
            actions: {
				'pangolin': function( character, system, action) {
																	system.setQuality( "pangolin", true );
																	system.setCharacterText( "<p>Ya tienes el pangolin causante de la tragedia.\
																										Cuidado no te lo comas o lo liaras todo de nuevo.</p>" );
																}
					  }
				}
		),

		casanollavesip: new undum.SimpleSituation(
			"<h1>Fachada de tu casa</h1>\
			<p>Te encuentras ya para entrar en casa y te propones a buscar las llaves para entrar. </p>",
			{
				enter: function( character, system, from ) {
					if( character.qualities.llaves ) {
						system.doLink( "casaconllavesip" );
					} else {
            $('body').css('background-image', 'url(https://bangbranding.com/blog/wp-content/uploads/2016/11/350x500_destacada-1.jpg')
						system.write( "<p>y descubres que al salir de tu casa olvidaste las llaves \
						por lo que recuerdas la llave que hay escondida en el <a href='patiotraserollavesip'>patio trasero</a>. </p>"
						
				);
					}
				}
			}
		)
		
		
};


// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    manipulador: new undum.OnOffQuality(
        "Manipulador de campos de energia cero", {priority:"0001", group:'inventario', onDisplay:"&#10003;"}
    ),

	llaves: new undum.OnOffQuality(
		"Llaves", {priority:"0002", group:'inventario', onDisplay:"&#10003;"}
	),
	
	timemachine: new undum.OnOffQuality(
		"Time Machine", {priority:"0003", group:'inventario', onDisplay:"&#10003;"}
	),

	pangolin: new undum.OnOffQuality(
		"Pangolin", {priority:"0004", group:'inventario', onDisplay:"&#10003;"}
	)
	  
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    inventario: new undum.QualityGroup('Inventario', {priority:"0001"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setQuality( "manipulador" , false )
	system.setQuality( "llaves" , false )
	system.setQuality( "timemachine", false )
	system.setQuality( "pangolin", false )
    system.setCharacterText("<p>¡Comienzas tu fascinante aventura!</p>");
};