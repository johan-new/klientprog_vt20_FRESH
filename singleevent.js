document.getElementById('singleEvent').addEventListener
('click', SingleEvent); 

function singleEvent() {
fetch('https://brottsplatskartan.se/sida/api/event/4095')
.then((res) => res.text())
.then((data) => {
    document.getElementById('div').innerHTML = data;
})
.catch((err) => console.log(err))


}