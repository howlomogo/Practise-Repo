<html ng-app>
    <head>
        <title>Akero Labs Blog</title>
        <script src="<?php echo get_template_directory_uri(); ?>/bower_components/angular/angular.js"></script>
    </head>
    <body>
    	<header><h3><a href="/">Cool Header</a></h3></header>

    	<div>TODO: Have angular inject the content here via ajax</div>

    	<input type="text" ng-model="name"><br>
    	<h2>hello {{ name }}</h2>
    </body>
</html>