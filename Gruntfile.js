// Generated on 2014-07-08 using generator-angular 0.8.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            dist: 'dist',
            injectorFiles:[
                '<%= yeoman.app %>/app.js',
                '<%= yeoman.app %>/modules/**/*.js',
                '!<%= yeoman.app %>/modules/**/*_test.js'
            ],
            configModulePath:'<%= yeoman.app %>/modules/config/config-constant.js',
            configJsonPath:'<%= yeoman.app %>/modules/config/config.json'
          
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['bowerInstall']
            },
            js: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: true
                }
            },
            jsTest: {
                files: ['<%= yeoman.app %>/scripts/**/*_test.js'],
                tasks: ['newer:jshint:test', 'karma']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: ['<%= yeoman.app %>/{,*/}*.html',
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= yeoman.app %>/modules/**/*.js',
                        '!<%= yeoman.app %>/modules/**/*_test.js'
                       ]
            },
            appConfig:{
                files:['<%= yeoman.app %>/modules/config/config.json'],
                tasks:['ngconstant:app']
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: ['.tmp', '<%= yeoman.app %>']
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: ['.tmp', 'test', '<%= yeoman.app %>']
                }
            },
            dist: {
                options: {
                    base: '<%= yeoman.dist %>'
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: ['Gruntfile.js', '<%= yeoman.app %>/scripts/{,*/}*.js'],
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: ['.tmp', '<%= yeoman.dist %>/*', '!<%= yeoman.dist %>/.git*']
    }]
            },
            server: '.tmp',
            docs:'tmp/documentation'
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
    }]
            }
        },

        // Automatically inject Bower components into the app
        bowerInstall: {
            app: {
                src: ['<%= yeoman.app %>/index.html'],
                ignorePath: '<%= yeoman.app %>/'
            },
            sass: {
                src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                ignorePath: '<%= yeoman.app %>/bower_components/'
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: ['<%= yeoman.dist %>/scripts/{,*/}*.js', '<%= yeoman.dist %>/styles/{,*/}*.css', '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}', '<%= yeoman.dist %>/styles/fonts/*']
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= yeoman.dist %>']
            }
        },

        // The following *-min tasks produce minified files in the dist folder
        cssmin: {
            options: {
                root: '<%= yeoman.app %>'
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.dist %>/images'
    }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
    }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html', 'views/{,*/}*.html'],
                    dest: '<%= yeoman.dist %>'
    }]
            }
        },

        // ngmin tries to make the code safe for minification automatically by
        // using the Angular long form for dependency injection. It doesn't work on
        // things like resolve or inject so those have to be done manually.
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
    }]
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/*.html']
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: ['*.{ico,png,txt}', '.htaccess', '*.html', 'views/{,*/}*.html', 'images/{,*/}*.{webp}', 'fonts/*']
    }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: ['generated/*']
    }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            },
            docs:{
                expand: true,
                cwd:'docs',
                dest: 'tmp/documentation/',
                src: 'img/**/*'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
   //'compass:server'
   ],
            test: [
   //  'compass'
   ],
            dist: ['imagemin', 'svgmin']
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/styles/main.css': [
        //         '.tmp/styles/{,*/}*.css',
        //         '<%= yeoman.app %>/styles/{,*/}*.css'
        //       ]
        //     }
        //   }
        // },
        // uglify: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/scripts/scripts.js': [
        //         '<%= yeoman.dist %>/scripts/scripts.js'
        //       ]
        //     }
        //   }
        // },
        // concat: {
        //   dist: {}
        // },

        // Test settings
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: false
            }
        },
        //WARN:Adds the file on alphabatical order oly
        injector: {
            app: {
                options: {
                    addRootSlash: false,
                    template: '<%= yeoman.app %>/index.html',
                    ignorePath: ['app/'],
                    starttag: '<!-- build:js({.tmp,app}) scripts/scripts.js -->',
                    endtag: '<!-- endbuild -->'
                },
                files: {
                    '<%= yeoman.app %>/index.html': '<%= yeoman.injectorFiles %>'
                }

            },
            appCss: {
                options: {
                    addRootSlash: false,
                    template: '<%= yeoman.app %>/index.html',
                    ignorePath: ['app/'],
                    starttag: '<!-- nonbower css-->',
                    endtag: '<!--nonbower endbuild -->'
                },
                files: {
                    '<%= yeoman.app %>/index.html': ['<%= yeoman.app %>/styles/*.css', '<%= yeoman.app %>/styles/**/*.css'],
                }

            }

        },
        ngdocs: {
            options: {
                dest: 'tmp/documentation',
                html5Mode: false,
                discussions: {
                    shortName: 'angularskeleton',
                    url: 'http://ashwin2488.github.io/pro-angular-yeoman',
                    dev: false
                }
            },
            api: {
                src: ['<%= yeoman.app %>/modules/**/!(*_test.js)+(*.js)','<%= yeoman.app %>/app.js','docs/content/api/*.ngdoc'],
                title: "API documentation"
            },
            guide: {
                src: ['docs/content/guide/*.ngdoc'],
                title: "Guide"

            }
        },
        ngconstant: {
            app: {
                options: {
                    dest: '<%= yeoman.configModulePath %>',
                    name: 'pro.config',
                },
                constants: {
                    PROCONFIG: grunt.file.readJSON('app/modules/config/config.json')
                },
                values: {
                    debug: true
                }
            }
        }

    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run(['clean:server', 'bowerInstall', 'ngconstant', 'injector', 'concurrent:server', 'autoprefixer', 'connect:livereload', 'watch']);
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('test', ['clean:server', 'concurrent:test', 'autoprefixer', 'connect:test', 'karma']);
    grunt.registerTask('docs', ['clean:docs','ngdocs','copy:docs']);
    grunt.registerTask('build', ['clean:dist', 'bowerInstall', 'useminPrepare', 'concurrent:dist', 'autoprefixer', 'concat', 'ngmin', 'copy:dist', 'cdnify', 'cssmin', 'uglify', 'rev', 'usemin', 'htmlmin']);

    grunt.registerTask('default', ['newer:jshint', 'test', 'build']);
};