define(
    [
        "../helper/pagination",
        "../helper/segment-viewer",
        "../helper/util"
    ],
    function(Pagination, Viewer, util) {
        function render(data, params) {
            let pagination = new Pagination(data.imageURLs.length, params);

            document.body.appendChild(pagination.render());

            for (let i = pagination.begin(); i < pagination.end(); ++i) {
                let name = data.imageURLs[i];

                let viewer = new Viewer(
                    data.imageURLs[i],
                    data.annotationURLs[i],
                    {
                        width: (params.width || 240),
                        height: (params.height || 320),
                        colormap: data.colormap,
                        labels: data.labels,
                        excludedLegends: [0],
                        overlay: name
                    });

                anchor = document.createElement("a");

                anchor.appendChild(viewer.container);

                anchor.href = util.makeQueryParams({ view: "edit", id: i });

                document.body.appendChild(anchor);
            }
        }

        return render;
    });
