Package.describe({
	name: "sergeyt:typeahead",
	summary: "Autocomplete package for meteor powered by twitter typeahead.js",
	git: "https://github.com/sergeyt/meteor-typeahead.git",
	version: "1.2.1"
});

Package.onUse(function(api) {
	//api.versionsFrom('METEOR@1.2');
	api.use(['jquery', 'blaze', 'ui'], 'client');
	api.use('twbs:bootstrap@3.0.0', 'client', {weak: true});
	api.addFiles('typeahead.bundle.js', 'client');
	api.addFiles('index.js', 'client');
});
