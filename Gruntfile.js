module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-concat');
	

	var configOpt = grunt.option('CONFIG') || 'config.json';
	var config = grunt.file.readJSON(configOpt);
	var data = grunt.file.readJSON(grunt.option('DB'));


	grunt.loadNpmTasks('grunt-contrib-jasmine');



	
	grunt.initConfig({
	  jasmine: {
	    JS: {
	      src: 'js/*.js',
	      options: {
	        specs: 'spec/*.spec.js'
	      }
	    }
	  }
	});

	

	


	


  	grunt.registerTask('generar1',function(){ 
		
		

		var jsonVar={prop1:true};
grunt.file.copy('index.html',config.buildFolder+'/index.html',{process: function(files){
	

return grunt.template.process(files,{data: {pageTitle1: config.appName}});
}});
	 });

  	grunt.registerTask('generar2',function(){ 
		
		

		var jsonVar={prop1:true};
grunt.file.copy('page1.html',config.buildFolder+'/page1.html',{process: function(files){
	

return grunt.template.process(files,{data: {pageTitle2: config.pageOneName}});
}});
     });


grunt.registerTask('generar3',function(){ 
		
		

		var jsonVar={prop1:true};
grunt.file.copy('page2.html',config.buildFolder+'/page2.html',{process: function(files){
	

return grunt.template.process(files,{data: {pageTitle3: config.pageTwoName}});
}});
	 });

grunt.registerTask('data',function(){ 
		
		
console.log(data.name);
		
	 });




  	grunt.registerTask('build', 
		['generar1','generar2','generar3','data']);







  	

};
