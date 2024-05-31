let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabName){
  for(tablink of tablinks){
      tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

let sidemenu = document.getElementById("sideMenu");

function openMenu(){
  sidemenu.style.right = "0";
}

function closeMenu(){
  sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyPjL2lXxahK3TN-SBtMCfMgTZUXgsSQF9wGDlFBF-uWpPHVVMWGfP6Nd5S4PNAvQdw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => { 
    msg.innerHTML = "Message successfully sent";
    setTimeout(function (){
      msg.innerHTML="";
    },5000);
    form.reset();
  })
  .catch(error => console.error('Error!', error.message))
})