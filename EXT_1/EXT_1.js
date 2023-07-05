define(["qlik"
],
	function (qlik) {
console.log('oi')
		return {
			initialProperties: {
				qHyperCubeDef: {
					qDimensions: [],
					qMeasures: [],
					qInitialDataFetch: [{
						qWidth: 10,
						qHeight: 1000
					}]
				}
			},
			definition: {
				type: "items",
				component: "accordion",
				items: {
					dimensions: {
						uses: "dimensions"
					},
					measures: {
						uses: "measures"
					},
					sorting: {
						uses: "sorting"
					},
					addons: {
						uses: "addons"
					},
					settings: {
						uses: "settings",
						items: {
							MyIntPropX: {
								type: "items",
								label: "Valor Min/Max de X",
								items: {
									MyIntProp1: {
										type: "integer",
										label: "Valor Mínimo X",
										ref: "myproperties.min",
										defaultValue: "10"
									},
									MyIntProp2: {
										type: "integer",
										label: "Valor Máximo X",
										ref: "myproperties.max",
										defaultValue: "10"
									},
									MyIntProp3: {
										type: "number",
										label: "Valor Número Somado",
										ref: "myproperties.numerico",
										defaultValue: "10.59"
									},
									MyIntProp4: {
										type: "string",
										label: "Expressão de Cor ou Valor",
										ref: "myproperties.cor_valor",
										defaultValue: "",
										expression: "always",
										show: true
									},
									MyIntProp5: {
										label: "Botão",
										ref: "myproperties.botao",
										component: "button",
										action: function (data) {
											alert("My visualization extension name is '" + data.visualization + "'and have id'" + data.qInfo.qId + "'.")
										}
									}
								}
							},
							MyIntPropY: {
								type: "items",
								label: "Valor Min/Max de Y",
								items: {
									grupoDeBotoes: {
										type: "string",
										component: "dropdown",
										label: "Tipo de valor",
										ref: "myproperties.grupo_botao",
										options: [{
											value: "v",
											label: "Vertical",
											tooltip: "Select for vertical"
										}, {
											value: "h",
											label: "Horizontal",
											tooltip: "Select for horizontal"
										}],
										defaultValue: "v"
									},
									grupoDeBotoes2: {
										type: "string",
										component: "buttongroup",
										label: "Tipo de valor",
										ref: "myproperties.grupo_botao",
										options: [{
											value: "v",
											label: "Vertical",
											tooltip: "Select for vertical"
										}, {
											value: "h",
											label: "Horizontal",
											tooltip: "Select for horizontal"
										}],
										defaultValue: "v"
									},
									MyCheckProp: {
										type: "boolean",
										label: "Eixo Visível",
										ref: "myproperties.eixo_visivel",
										defaultValue: true
									},
									MyColorPicker: {
										label: "Color Picker",
										component: "color-picker",
										ref: "myproperties.myColor",
										type: "object"
									},
									MyLink: {
										label: "Link",
										component: "link",
										url: "https://www.amazon.com.br"
									},
									MyMidia: {
										label: "Media",
										component: "media",
										ref: "myproperties.myMedia",
										layoutRef: "myMedia",
										type: "string"
									},
									MyAccordion: {
										type: "string",
										component: "radiobuttons",
										label: "Radio",
										ref: "myproperties.orientation",
										options: [{
											value: "v",
											label: "Vertical"
										}, {
											value: "h",
											label: "Horizoooontal"
										}],
										defaultValue: "v"
									},
									Slider: {
										type: "number",
										component: "slider",
										label: "Slider",
										ref: "myproperties.range",
										min: 10,
										max: 20,
										step: 0.5,
										defaultValue: 15
									}
								}
							},
							propriedadesAdicionais:  {
								type: "items",
								label: "Propriedades Adicionais",
								items: {
									rangeSlider: {
										type: "array",
										component: "slider",
										label: "Range Slider",
										ref: "myproperties.rangeslider",
										min: 10,
										max: 20,
										step: 0.5,
										defaultValue: [13, 17]
									}

								}
							}
						}
					}
				}
				,
				support: {
					snapshot: true,
					export: true,
					exportData: true
				},
				paint: function ($element, layout) {
					//add your rendering code here
					console.log(layout);

					let valorSoma = layout.myproperties.numerico + layout.myproperties.min
					setTimeout
					$element.html(layout.myproperties.cor_valor);
					//needed for export
					return qlik.Promise.resolve();
				}
			}

		}
	});