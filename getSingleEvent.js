document.getElementById('singleEvent').addEventListener
('click', SingleEvent); 

function singleEvent(x) {

    fetch(`https://brottsplatskartan.se/sida/api/event/${x}`)
.then((res) => res.text())
.then((data) => {
    document.getElementById('div').innerHTML = data;
})
.catch((err) => console.log(err))


}
