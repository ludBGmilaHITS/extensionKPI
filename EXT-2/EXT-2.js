define(["qlik"
],
    function (qlik) {

        return {

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
                        uses: "settings"
                    },

                    //support: {
                        //snapshot: true,
                        //export: true,
                        //exportData: false
                    },
                    paint: function ($element) {
                        //add your rendering code here
                        $element.html("EXT-2");
                        //needed for export
                        return qlik.Promise.resolve();
                    }
                }

            }
        }
    );

