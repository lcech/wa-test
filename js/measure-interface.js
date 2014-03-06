/**
 * Update the Instance Variable with the new functionality
 * @param {function} measure The original function with page data
 */
measure = (function (measure) {
    /**
     * New function to operate the gathered data
     * @method measureInterface
     * @param {String} action What should happen
     * @param {Object} data Object with data to measure
     */
    var measureInterface = function (data) {
        if (typeof data === 'undefined') {
            measureInterface._operateData({});
        } else if (typeof data !== 'object') {
            measureInterface._operateData({
                id: 'Error',
                err: 'Function measure only accepts parameter of type object.'
            });
        } else {
            measureInterface._operateData(data);
        }
    };
    
    /**
     * Ready flag to allow measurement
     * @private
     */
    measureInterface._ready = false;

    /**
     * Local data queue
     * @private
     */
    measureInterface._queue = [];

    /**
     * Default measure page function to override
     * @method _processQueue
     * @private
     */
    measureInterface._processQueue = function () {
        while (this._queue.length > 0) {
            this.process(this._queue.shift());
        }
    };
    
    /**
     * Default measure process function to override
     * @method process
     * @param {Object} data Object with data to measure
     */
    measureInterface.process = function (data) {
        // Do nothing
    };

    /**
     * Operate data inputs
     * @method _operateData
     * @param {Object} data Object with data to measure
     */
    measureInterface._operateData = function (data) {
        this._queue.push(data);
        if (this._ready === true) { // If the library is not fully loaded
            this.process(data);   // Send immediately
        }
    };
    
    /**
     * Ready function to fire in the end of the tool specific library
     * @method ready
     */
    measureInterface.ready = function () {
        this._ready = true;
        this._processQueue();
    };
    
    if (typeof measure.q !== 'undefined') {
        for (var i = 0; i < measure.q.length; i++) {
            measureInterface(measure.q[i][0]); // Keep the previously inserted data
        }
    }
    return measureInterface;
}(measure));

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

/** Override the process menthod with the tool-specific code */
measure.process = function (data) {
    var eventData, thisEventData;
    try {
        eventData = {
            /** PAGES */
            'PAGE_ID': {
                type: 'page',
                variables: {
                }
            },
            /** EVENTS */
            'EVENT_ID': {
                type: 'event',
                variables: {
                }
            }
        };

        if (typeof data.id === 'undefined') {
            data.id = (function (l, p) {
                p = l.href.split('/');
                p.splice(0, 3);
                return '/' + p.join('/');
            } (document.location));
            data.type = 'page';
        }
        thisEventData = eventData[data.id] || {type: 'page', variables: {}};
        switch (thisEventData.type) {
        case 'page':
            ga('create', 'UA-48682569-1');
            ga('send', 'pageview', data.id);
            break;
        case 'event':
            ga('send', 'event', data.category || 'Event', data.action || 'occurance', data.id);
            break;
        }
    } catch (err) {
        console.log(err);
        //ga('send', 'event', 'JS Error', 'fire', err);
    }
};

measure.ready();