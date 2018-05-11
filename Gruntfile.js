module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-concat');
	//var config = grunt.file.readJSON('config.json');
	var config ={};
	config.buildFolder = grunt.option('build');
	config.appName= grunt.option('app');
	config.pageOneName=grunt.option('one');
	config.pageTwoName=grunt.option('two');

	


	


  	grunt.registerTask('generar1',function(){ 
		//var config = grunt.file.readJSON('config.json');
		

		var jsonVar={prop1:true};
grunt.file.copy('index.html',config.buildFolder+'/index.html',{process: function(files){
	//console.log(content);

return grunt.template.process(files,{data: {pageTitle1: config.appName}});
}});
	 });

  	grunt.registerTask('generar2',function(){ 
		//var config = grunt.file.readJSON('config.json');
		

		var jsonVar={prop1:true};
grunt.file.copy('page1.html',config.buildFolder+'/page1.html',{process: function(files){
	//console.log(content);

return grunt.template.process(files,{data: {pageTitle2: config.pageOneName}});
}});


grunt.registerTask('generar3',function(){ 
		//var config = grunt.file.readJSON('config.json');
		

		var jsonVar={prop1:true};
grunt.file.copy('page2.html',config.buildFolder+'/page2.html',{process: function(files){
	//console.log(content);

return grunt.template.process(files,{data: {pageTitle1: config.appName}});
}});
	 });





  	grunt.registerTask('build', 
		['generar1','generar2','generar3']);




  	

};
