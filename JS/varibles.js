//varibles.js
const gdname="online group discussion";
const maxparticipants=10;
let participantcount=0;
let discussionstatus="not-started";
//waits until html loads
window.onload=function()
{
  let topicname=prompt("enter topic name");
  if(topicname!=null)
  {
    document.getElementById("todaytopic").value=topicname;
    
  }
  
  let userrole=prompt("enter your role");
 
 document.getElementById("participantrole").value=userrole;
 document.getElementById('participantcount').innerText="Interested (" + participantcount + ")";
 document.getElementById('selecttechtopic').addEventListener('change',function(){document.getElementById('todaytopic').value=this.value});
 document.getElementById('selectgametopic').addEventListener('change',function(){document.getElementById('todaytopic').value=this.value});
 document.getElementById('selectmovietopic').addEventListener('change',function(){document.getElementById('todaytopic').value=this.value});
}
function increasecount()
{
  participantcount++;
  //document.getElementById('interested').innerText=participantcount;
  document.getElementById('participantcount').innerText="Interested (" + participantcount + ")";
}
function joingd()
{
  /*//arrow function
  const showmessage=()=>{alert("welcome to online groupdiscussion")}*/
  confirm("Are you sure to join in group discussion?");
  //save topicname in browser
  let topic=document.getElementById("todaytopic").value
  localStorage.setItem("gdTopic",topic)
  window.location.href="ogd3.html"
}
 //showmessage()

