const searchinput = document.querySelector("#searchinput") 
searchinput.addEventListener("keydown",function(event){
    if(event.code==="Enter"){
        search();
    }
});
function search(){
    const input = searchinput.value;

    window.location.href = "https://www.google.com/search?q="+ input + "&rlz=1C1CHBF_enIN990IN990&oq="+ input + "&aqs=chrome.0.0i355i433i512j46i433i512l2j0i433i512j0i131i433j0i131i433i512j46i131i199i433i465j46i512j0i131i433j0i512.1117j0j7&sourceid=chrome&ie=UTF-8"
}