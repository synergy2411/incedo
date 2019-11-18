// node myfile.js

function shouldContine(){
    var asyncPendingTimer = [];         // setTimeout / setInterval etc
    var asyncLocalFileAccess = [];         // read, write, XHR, etc
    var asyncOSTasksPending = [];            // allocating the sockets

    return asyncLocalFileAccess.length || asyncOSTasksPending.length || asyncPendingTimer.length
}

while(shouldContine()){                     // tick
// run your code here
}



// program terminates