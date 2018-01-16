/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


    // Swiping
    document.addEventListener('swipeleft', function(event) {
        if (event.target.matches('#detect-area')) {
            console.log('Swipe left is detected.');
        }
    });

    document.addEventListener('swiperight', function(event) {
        if (event.target.matches('#detect-area')) {
            console.log('Swipe right is detected.');
        }
    });

    //choose random images for the home
    var body = document.querySelector('body');
    var path = '/';
    var nameimg =['test1.jpg','test2.png','test3.jpg','test4.jpg','test5.jpg'];

    function displayImage() {
        var num = Math.floor(Math.random() * (nameimg.length));
        console.log(nameimg[num]);
        body.style.background = "url(" + nameimg[num] + ")";
    }
    displayImage();

app.initialize();
