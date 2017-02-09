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

var dialclient;

var terminals= [];






//var connect = function (index,channel) {
//    var terminal = terminals[index];
//    var app2appRemoteBaseUrl = terminal && terminal.X_HbbTV_App2AppURL || app2appURL;
//    var ws = new WebSocket(app2appRemoteBaseUrl + channel);
//    ws.binaryType = "arraybuffer";
//    ws.onopen = function(evt) {
//        log("Connection waiting ...");
//    };
//    ws.onclose = function(evt) {
//        log("Connection closed.");
//    };
//    ws.onerror = function (evt) {
//        log("Connection error.");
//    };
//    ws.onmessage = function(evt) {
//        console.log(evt.data);
//        if (evt.data == "pairingcompleted") {
//            log("connection paired");
//            ws.onmessage = function(evt) {
//                log( "Received Message: " + evt.data);
//            };
//            var msg = "Hello from Companion Screen";
//            ws.send(msg);
//            if(typeof Int8Array != "undefined"){
//                var array = [0,1,2,3,4,5,6,7,8,9];
//                var binary = new Int8Array(array).buffer;
//                ws.send(binary);
//            }
//        } else {
//            log("Unexpected message received from terminal.");
//            ws.close();
//        }
//    };
//};



var app = {
    // Application Constructor
initialize: function() {
    this.bindEvents();
},
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
bindEvents: function() {
    document.addEventListener('deviceready', app.onDeviceReady, false);
},
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
onDeviceReady: function() {
    app.receivedEvent('deviceready');
    app.log("Discover HbbTV Terminals");
    $("#terminals").html("Searching for HbbTV terminals:  please wait ...");
    app.discoverTerminals();
    
    
    
},
    // Update DOM on a Received Event
receivedEvent: function(id) {
    
    console.log('Received Event: ' + id);
},
    
    discoverTerminals : function () {
        dialclient = DIALClient && DIALClient.getDIALClient();
        dialclient.startDiscovery(function (discoveredTerminals) {
                                  app.log('object evt: %O', discoveredTerminals);
                                  terminals = discoveredTerminals;
                                  $("#terminals").empty();
                                  $(terminals).each(function (i,terminal) {
                                                    var channel = Math.random().toString(36).substring(2);
                                                    $("#terminals").append("<li id='"+i+"'>"+terminal.friendly_name+"  <button class='launch' data-index='"+i+"' data-channel='"+channel+"'>Launch</button>  <button class='connect' data-index='"+i+"' data-channel='"+channel+"'>Connect</button> <div class='log'></div></li>");
                                                    });
                                  if(terminals.length==0){
                                  $("#terminals").html("No HbbTV terminals found.");
                                  }
                                  else{
                                  $("button.launch").click(function () {
                                                           var index = $(this).attr("data-index");
                                                           var channel = $(this).attr("data-channel");
                                                           //                               launchHbbTVApp(index,channel);
                                                           });
                                  $("button.connect").click(function () {
                                                            var index = $(this).attr("data-index");
                                                            var channel = $(this).attr("data-channel");
                                                            connect(index,channel);
                                                            });
                                  }
                                  app.log(terminals.length+" HbbTV terminals found");
                                  });
    },
    log : function (msg) {
        console.log(msg);
        var logElem = $("#log");
        logElem.val(logElem.val()+msg+"\n");
        logElem.scrollTop(logElem[0].scrollHeight);
    }
};

app.initialize();

