// Imported from 'react-eventemitter' package but with some updates

const EventEmitter = {
  // holds all the events
  events : {}, 
  // for redux lovers
  dispatch : function(event, data){
      if(!this.events[event]) return;
      this.events[event].forEach(callback => callback(data));
  },
  // for this module lovers
  subscribe : function(event, callback){
      if(!this.events[event]) this.events[event] = [];
      this.events[event].push(callback);
  },
  // unsubscribe
  unsubscribe: function(event) {
    if(this.events[event]) this.events[event] = null;
  }
}

module.exports = EventEmitter; 