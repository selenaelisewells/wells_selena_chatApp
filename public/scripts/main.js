import ChatMessage from "./components/TheMessageComponent.js"

(() => {
    console.log('fired');

    //load the socket library and make a connection     
    const socket = io();

    //messenger service event handling -> incoming from the manager
    function setUserId({ socketID, message }) {
        //incoming connected event with data
        vm.socket_ID = socketID;
    }

    function appendMessage(message) {
        vm.messages.push(message);
    }

    const vm = new Vue({
        data: {
            messages: [],
            nickname: "",
            username: "",
            socket_ID: "",
            message: ""
        },
        create: function() {
            console.log("its alive!!");
        },

        methods: {

            dispatchMessage() {
                debugger;
                socket.emit('chatmessage', { content: this.message, name: this.nickname || "Anonymous" })
            }
        },
        components: {
            newmessage: ChatMessage
        }

    }).$mount("#app");

    socket.addEventListener("connected", setUserId);
    socket.addEventListener("message", appendMessage);

})();