document.addEventListener("DOMContentLoaded", () => {
	new Mmenu( "#nav", {
        "extensions": [ 
			"shadow-page",
			"position-right",
			"pagedim-black", 
			"multiline",
		],
		keyboardNavigation: {
			"enable": true,
			"enhance": true
		},
        "counters": true,
        "navbars": [{ 
			"content": [ 
				"prev",
				"title",
				"close",
			]
		}]
    });
});