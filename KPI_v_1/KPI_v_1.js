define(["qlik", "jquery", "text!./style.css"], function (qlik, $, cssContent) {
    'use strict';
    $("<style>").html(cssContent).appendTo("head");


    return {
        initialProperties: {
            qHyperCubeDef: {
                qDimensions: [],
                qMeasures: [],
                qInitialDataFetch: [{
                    qWidth: 10,
                    qHeight: 50
                }]
            }
        },
        definition: {
            type: "items",
            component: "accordion",
            items: {
                measures: {
                    uses: "measures",
                    min: 1,
                    max: 2,
					items: {
					cores_kpi: {
							ref: "qDef.cor_medida",							
							label: "Cor Hex",
							type: "string",
							defaultValue: "#0000FF",
							extression: "always"
						}					
					}
                },
                settings: {
                    uses: "settings",
					items: {
						customATTR: {
							ref: "tamanho",
							label: "tamanho dos KPIs",
							type: "string",
							defaultValue: "12",
							expression: "always"
						},
						cores_kpi: {
							ref: "cores_geral",
							label: "Cor Hex",
							type: "string",
							defaultValue: "#0000FF",
							expression: "always" 
						}
					}
                }
            }
        },
        snapshot: {
            canTakeSnapshot: true
        },
        paint: function ($element, layout) {
            var html = "", self = this,
                hypercube = layout.qHyperCube,
                rowcount = hypercube.qDataPages[0].qMatrix.length,
                colcount = hypercube.qDimensionInfo.length + hypercube.qMeasureInfo.length;

            var div_id = layout.qInfo.qId
			var tamanho = layout.tamanho
			var cores = layout.cores_geral
            console.log(layout)

            html += "<div id='" + div_id + "'  style='height: 50%; font-size: "+tamanho+"px; text-align: center; background-color: "+ cores +";'>"
            html += layout.qHyperCube.qDataPages[0].qMatrix[0][0].qText
            html += "</div>"

            html += "<div id='" + div_id + "'  style='height: 50%; font-size: "+tamanho+"px; text-align: center; background-color: "+ cores +";'>"
            html += layout.qHyperCube.qDataPages[0].qMatrix[0][1].qText
            html += "</div>"

            $element.html(html);


            return qlik.Promise.resolve();
        }
    };
});
