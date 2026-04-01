async function startVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
    });
    
    document.getElementById("localVideo").srcObject = stream;
    }
    
    startVideo();

    const socket = io();

    function sendMessage(){
    
    const input=document.getElementById("messageInput");
    
    socket.emit("chat-message",input.value);
    
    input.value="";
    }
    
    socket.on("chat-message",(msg)=>{
    
    const chat=document.getElementById("chatBox");
    
    const p=document.createElement("p");
    
    p.textContent=msg;
    
    chat.appendChild(p);
    
    });