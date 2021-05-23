const btn = document.querySelector('#play');
const modal = document.querySelector('#video-modal');
const span = document.querySelector('.close');

btn.onclick = () => modal.style.display = "block";

span.onclick = () => modal.style.display = "none";

window.onclick = (e) =>{
    if (e.target == modal){
        modal.style.display = "none";
    }
}
