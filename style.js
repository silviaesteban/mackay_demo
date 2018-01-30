(function (blink) {
	'use strict';

	var LnplatStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	LnplatStyle.prototype = {
		bodyClassName: 'content_type_clase_lnplat',
		ckEditorStyles: {
			name: 'lnplat',
			styles: [
				{ name: 'Título 1', element: 'h2', attributes: { 'class': 'bck-title1'} },
				{ name: 'Título 2', element: 'h3', attributes: { 'class': 'bck-title2'} },
				{ name: 'Título 3', element: 'h3', attributes: { 'class': 'bck-title3'} },

				{ name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis'} },
				{ name: 'Énfasis Naranja', element: 'span', attributes: { 'class': 'bck-enfasis-naranja'} },
				{ name: 'Versalitas', element: 'span', attributes: { 'class': 'bck-versalitas'} },

				{ name: 'Lista Desordenada', element: 'ul', attributes: { 'class': 'bck-ul'} },
				{ name: 'Lista Desordenada 2', element: 'ul', attributes: { 'class': 'bck-ul-2'} },
				{ name: 'Lista Desordenada 3', element: 'ul', attributes: { 'class': 'bck-ul-3'} },
				{ name: 'Lista Ordenada', element: 'ol', attributes: { 'class': 'bck-ol' } },
				{ name: 'Lista Ordenada 2', element: 'ol', attributes: { 'class': 'bck-ol-2' } },

				{ name: 'Caja simple', type: 'widget', widget: 'blink_box', attributes: { 'class': 'simple' } },
				{ name: 'Caja simple 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'simple-2' } },
				{ name: 'Caja simple 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'simple-3' } },

				{ name: 'Tabla', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table'} },
				{ name: 'Celda', element: 'td', attributes: { 'class': 'bck-td'} },

				{ name: 'Presentación', element: 'h4', attributes: { 'class': 'presentation'} },
				{ name: 'Presentación 2', element: 'h4', attributes: { 'class': 'presentation-2'} },
				{ name: 'Título Presentación Video', element: 'h4', attributes: { 'class': 'titulo-video'} },
				{ name: 'Título Presentación Video 2', element: 'h4', attributes: { 'class': 'titulo-video-2'} },
				{ name: 'Actividad Scorm', element: 'h4', attributes: { 'class': 'actividad-scorm'} },
				{ name: 'Actividad Blink', element: 'h4', attributes: { 'class': 'actividad-blink'} },
				{ name: 'Título Slider Imágen', element: 'h4', attributes: { 'class': 'slider-imagen'} },
				{ name: 'Título Trabajar Imágen', element: 'h4', attributes: { 'class': 'trabajar-imagen'} },
				{ name: 'Título Escuchar', element: 'h4', attributes: { 'class': 'titulo-escuchar'} },

				{ name: 'Título2 Hablar', element: 'h4', attributes: { 'class': 'titulo-2 hablar'} },
				{ name: 'Título2 Escuchar', element: 'h4', attributes: { 'class': 'titulo-2 escuchar'} },
				{ name: 'Título2 Leer', element: 'h4', attributes: { 'class': 'titulo-2 leer'} },
				{ name: 'Título2 Escribir', element: 'h4', attributes: { 'class': 'titulo-2 escribir'} },
				{ name: 'Título2 Aprender', element: 'h4', attributes: { 'class': 'titulo-2 aprender'} },

				{ name: 'Presentación Imagen', type: 'widget', widget: 'blink_box', attributes: { 'class': 'presentation-img' } },
				{ name: 'Presentación Video', type: 'widget', widget: 'blink_box', attributes: { 'class': 'presentation-video' } },
				{ name: 'Presentación Video 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'presentation-video-2' } },
				{ name: 'Slider Imagen', type: 'widget', widget: 'blink_box', attributes: { 'class': 'slider-img' } },
				{ name: 'Trabajar Imagen', type: 'widget', widget: 'blink_box', attributes: { 'class': 'trabajar-img' } },
				{ name: 'Escuchar', type: 'widget', widget: 'blink_box', attributes: { 'class': 'escuchar-box' } },
				{ name: 'Actividad Scorm ', type: 'widget', widget: 'blink_box', attributes: { 'class': 'actividad-scorm-box' } },

				{ name: 'Desplegable', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'lnplat-dropdown' } },
				{ name: 'Desplegable 2', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'lnplat-dropdown-2' } },

				{ name: 'Imagen Sin Bordes', type: 'widget', widget: 'image', attributes: { 'class': 'normal-img' } },
				{ name: 'Imagen derecha', element: 'img', attributes: { 'class': 'bck-img right' } },
				{ name: 'Imagen izquierda', element: 'img', attributes: { 'class': 'bck-img left' } },

				{ name: 'Icono Clase', element: 'span', attributes: { 'class': 'icon icon-clase' } },
				{ name: 'Icono Clase Rosa', element: 'span', attributes: { 'class': 'icon icon-clase-rosa' } },
				{ name: 'Icono Conversación', element: 'span', attributes: { 'class': 'icon icon-conversation' } },
				{ name: 'Icono Conversación Verde', element: 'span', attributes: { 'class': 'icon icon-conversation-verde' } },
				{ name: 'Icono Conversación Azul', element: 'span', attributes: { 'class': 'icon icon-conversation-azul' } },
				{ name: 'Icono Conversación Rosa', element: 'span', attributes: { 'class': 'icon icon-conversation-rosa' } },
				{ name: 'Icono Herramienta', element: 'span', attributes: { 'class': 'icon icon-tool' } },
				{ name: 'Icono Herramienta Verde', element: 'span', attributes: { 'class': 'icon icon-tool-verde' } },
				{ name: 'Icono Herramienta Azul', element: 'span', attributes: { 'class': 'icon icon-tool-azul' } },
				{ name: 'Icono Herramienta Rosa', element: 'span', attributes: { 'class': 'icon icon-tool-rosa' } },
				{ name: 'Icono Llave', element: 'span', attributes: { 'class': 'icon icon-llave' } },
				{ name: 'Icono Ratón', element: 'span', attributes: { 'class': 'icon icon-raton' } },
				{ name: 'Icono Museo', element: 'span', attributes: { 'class': 'icon icon-museo' } },
				{ name: 'Icono Talento', element: 'span', attributes: { 'class': 'icon icon-talento' } },
				{ name: 'Icono Talento 2', element: 'span', attributes: { 'class': 'icon icon-talento-2' } },
				{ name: 'Icono Talento Verde', element: 'span', attributes: { 'class': 'icon icon-talento-verde' } },

				{ name: 'icono ablink', element: 'span', attributes: { 'class': 'icono ablink' } },
				{ name: 'icono ascorm', element: 'span', attributes: { 'class': 'icono ascorm' } }
			]
		},
		slidesTitle: {},

		init: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.init.call(this);
			this.addActivityTitle();
			this.fillSlidesTitle();
			this.formatCarouselindicators();
			this.animateNavbarOnScroll();
			this.addSlideNavigators();
		},

		removeFinalSlide: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.removeFinalSlide.call(this, true);
		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},

		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html() + ' > ' + blink.courseInfo.unit;
			})
		},

		fillSlidesTitle: function () {
			var self = this.slidesTitle;
			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = window['t'+index+'_slide'];
				var slideTitle = slide.title;
				slideTitle = slideTitle.replace(/<span class="index">\s*([\d]+)\s*<\/span>/i, '$1. ');
				slideTitle = slideTitle.replace(/\s+/, ' ');
				slideTitle = stripHTML(slideTitle);

				self['t'+index+'_slide'] = slideTitle;
			}
		},

		formatCarouselindicators: function () {
			var $navbarBottom = $('.navbar-bottom'),
				$carouselIndicators = $('.slider-indicators').find('li');
			var firstSlide = eval('t0_slide');
			var dropDown = '' +
					'<div class="dropdown">' +
						'<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">' +
							'<span class="sectionTitle"></span>' +
							'<span class="caret"></span>' +
						'</button>' +
						'<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">';

			$navbarBottom.find('li').tooltip('destroy');

			var navigatorIndex = 0;

			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = eval('t'+index+'_slide'),
					slideTitle = slide.title.replace(/<span class="index">[\d]+<\/span>/g, ''),
					textIndice = stripHTML(slideTitle),
					clase = '';

				if (slide.isConcatenate) continue;

				if (slide.seccion) {
					clase = (slide.seccion == 'taller') ? ('fa fa-edit') : ('fa fa-check');
				}

				dropDown += '<li role="presentation"><a role="menuitem"></span> <span class="title">' + textIndice + '</span></a></li>';

				navigatorIndex++;
			};

			dropDown += '' +
						'</ul>' +
					'</div>';

			$navbarBottom
				.attr('class', 'lnplat-navbar')
				.wrapInner('<div class="navbar-content"></div>')
				.find('ol')
					.before(dropDown)
					.wrap('<div id="top-navigator" class="hidden"/>')
					.end()
				.find('.dropdown')
					.find('li')
						.on('click', function (event) {
							$navbarBottom.find('ol').find('li').eq($(this).index()).trigger('click');
						});

			$('#volverAlIndice').click(function() {
				return showCursoCommit();
			})

			blink.events.on('section:shown', function() {
				var sectionTitle = eval('t' + blink.activity.getFirstSlideIndex(window.activeSlide) + '_slide').title;
				$navbarBottom.find('.sectionTitle').text(sectionTitle);
			});

			var curso = blink.getCourse(idcurso);
			curso.done(function () {
				var units = curso.responseJSON.units;
				var number = 0;
				var dropDownTemas = '' +
					'<div class="dropdownTemas">' +
						'<button id="tLabel" type="button" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">' +
							'<h2><span id="courseIndex"></span>' +
								'<div id="nombre-tema-wrapper">' +
									'</span><span id="nombre-tema">' + blink.courseInfo.unit + '<span class="caret"></span></span>' +
									'<a href="#" id="goTo-indice">' + text_web.slide_volver_indice + '</a>' +
								'</div>' +
							'</h2>' +
						'</button>' +
						'<ul class="dropdown-menu" role="menu" aria-labelledby="tLabel">';

				for (var i in units) {
					var title = units[i].title;
					if (title && units[i].subunits.length) { //Si el tema tiene actividades
						dropDownTemas += '' +
							'<li role="presentation" class="lista-temas" data-url="' + units[i].subunits[0].url + '">' +
								'<span>'+ units[i].number + '</span><a role="menuitem">' + title + '</a>' +
							'</li>'
						if (title == blink.courseInfo.unit) number = units[i].number;
					}
				}

				dropDownTemas += '' +
						'</ul>' +
					'</div>';

				$('.dropdown')
					.before(dropDownTemas)
					.end()
					.find('#courseIndex').text(number);

				$('.lista-temas').click(function() {
					redireccionar($(this).data('url'));
				})

				$('#goTo-indice').click(function(event) {
					event.stopPropagation();
					return showCursoCommit();
				});
			});

			if (firstSlide.seccion) {
				$navbarBottom.addClass('first-is-section');
			}


			if (!blink.hasTouch) {
				$navbarBottom
					.find('ol').find('span')
						.tooltip({
							placement: 'bottom',
							container: 'body'
						});
			}

			blink.events.trigger(true, 'style:endFormatCarousel');
		},

		addSlideNavigators: function () {
			var $navigator = $('<div class="navigator"><div class="main-navigator"><div class="left"></div><div class="right"></div></div></div>'),
				$leftControl = $('.left.slider-control').clone(),
				$rightControl = $('.right.slider-control').clone();

			var self = this.slidesTitle;

			var esdeber = blink.activity.esdeber;

			$leftControl.add($rightControl).find('span').remove();

			var slideIndex = 0; // se utiliza como indice para saltarnos los concatenados en el each
			var slidesNav = $('.item-container');
			// Filtramos para que solo coja las slides que no son final slide para iterar sobre ellas
			slidesNav = slidesNav.filter(function(element){
				if ($(slidesNav[element]).find('#final').length > 0) {
					return false;
				}
				return true;
			});

			slidesNav.each(function (index, element) {
				var $itemNavigator = $navigator.clone(),
					$left, $right, hasLeft = false;

				var prevSlide,
					prevIndex = slideIndex-1;
				// si  hay una slide anterior se recorre hacia atras hasta que no haya concatenados
				// si estoy en la slide 0 no se pinta
				while(prevIndex>=0){
					prevSlide = window['t'+ prevIndex +'_slide'];
					if(!esdeber && prevSlide.isConcatenate){
						prevIndex--;
					}
					else{
						$left = $leftControl.clone();
						$left.append('<span class="title">'+self['t'+prevIndex+'_slide']+'</span>');
						$itemNavigator.find('.left').append($left);
						hasLeft = true;
						break;
					}
				}

				slideIndex++;
				var nextSlide;
				// si  hay una slide siguiente se recorre hacia adelante hasta que no haya concatenados
				// si estoy en la slide ultima no se pinta boton next
				while(slideIndex<window.secuencia.length){
					nextSlide = window['t'+ slideIndex +'_slide'];
					if(!esdeber && nextSlide.isConcatenate){
						slideIndex++;
					}
					else{
						$right = $rightControl.clone();
						$right.prepend('<span class="title">'+self['t'+slideIndex+'_slide']+'</span>');
						$itemNavigator.find('.right').append($right);
						hasLeft && $right.parent('.right').addClass('separator');
						break;
					}
				}
				$(element).append($itemNavigator);
			});

			$('.navigator')
				.on('click', '.left.slider-control', function () {
					blink.activity.showPrevSection();
				})
				.on('click', '.right.slider-control', function () {
					blink.activity.showNextSection();
				});
		},

		getEditorStyles: function () {
			return this.ckEditorStyles;
		},

		animateNavbarOnScroll: function () {
			if (!blink.isApp) return;
			var $navbar = $('.lnplat-navbar');
			var lastScrollTop = 0;
			$('.js-slider-item').scroll(function () {
				var scrollTop = $(this).scrollTop();
				(scrollTop > lastScrollTop && scrollTop) ? $navbar.addClass('ocultar') : $navbar.removeClass('ocultar');
				lastScrollTop = scrollTop;
			});
		},
                
                changeHighBar: function () {
                    if($('.lnplat-navbar').length>0 && $('.navbar').length>0){
                        blink.theme.setTopByHeight('.navbar', '.lnplat-navbar');
                    }
                }
	};

	LnplatStyle.prototype = _.extend({}, new blink.theme.styles.basic(), LnplatStyle.prototype);

	blink.theme.styles['lnplat'] = LnplatStyle;

})( blink );
