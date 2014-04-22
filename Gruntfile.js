module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    {
                        expand: true, 
                        src: ['src/index.html'], 
                        dest: 'build/', 
                        filter: 'isFile', 
                        flatten: true
                    },
                    {
                        expand: true, 
                        src: ['**/*'], 
                        dest: 'build/data/', 
                        cwd: 'src/data/'
                    },
                    {
                        expand: true, 
                        src: ['src/js/scriptLoader.js'], 
                        dest: 'build/js/', 
                        filter: 'isFile', 
                        flatten: true
                    },
                    {
                        expand: true, 
                        src: ['src/js/libraries/require.js', 'src/js/libraries/modernizr.js'], 
                        dest: 'build/js/libraries/', 
                        filter: 'isFile', 
                        flatten: true
                    }
                ]
            }
        },
        less: {
            dist: {
                files: {
                        'build/css/gui.css' : 'src/**/*.less'
                }
            },
            options:{
                compress:true
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace:"Handlebars.templates",
                    processName: function(filePath) {
                        var newFilePath = filePath.split("/");
                        newFilePath = newFilePath[newFilePath.length - 1].replace(/\.[^/.]+$/, "");
                        return  newFilePath;
                    },
                    partialRegex: /^part_/,
                    partialsPathRegex: /\/partials\//
                },
                files: {
                    "src/templates/templates.js": "src/templates/*.hbs"
                }
            }
        },
        requirejs: {
            dev: {
                options: {
                    name: "js/app",
                    baseUrl: "src",
                    mainConfigFile: "./config.js",
                    out: "./build/js/app.js",
                    generateSourceMaps: true,
                    preserveLicenseComments:false,
                    optimize: "none"
                }
            },
            compile: {
                options: {
                    name: "js/app",
                    baseUrl: "src",
                    mainConfigFile: "./config.js",
                    out: "./build/js/app.js",
                    optimize:"uglify2"
                }
            }
        },
        watch: {
            files: ['src/**/*.less', 'src/**/*.hbs'],
            tasks: ['less', 'handlebars']
        }
    });
    
    grunt.registerTask('default',['less', 'handlebars', 'watch']);
    grunt.registerTask('build',['copy', 'less', 'handlebars', 'requirejs:compile']);
    grunt.registerTask('dev',['copy', 'less', 'handlebars', 'requirejs:dev']);
};