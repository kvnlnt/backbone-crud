'use strict';

function loadConfig(path) {

    // get blob
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', { cwd: path })
        .forEach(function(option) {
            key = option.replace(/\.js$/, '');
            object[key] = require(path + option);
        });

    return object;
}

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // config
    var config = { pkg: grunt.file.readJSON('package.json'), env: process.env };

    // load options
    grunt.util._.extend(config, loadConfig('./tasks/options/'));

    // load configs
    grunt.initConfig(config);

    // load all tasks from tasks folder
    grunt.loadTasks('tasks');

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // default task
    grunt.registerTask('default', ['connect']);

};
