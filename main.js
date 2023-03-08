const addH1 = () => {
    const h1 = document.createElement("h1");
    h1.innerText = "Michelle Mounde";
    h1.id = "main-heading";
    h1.className = "name";

    document.body.appendChild(h1);
}

const addBio = () => {
    const ul = document.createElement("ul");
    ul.className = "my-details";
    document.body.appendChild(ul);
    addBioItems();
}

const addBioItems = () => {
    const bio = document.querySelector("ul");

    const content = [
        "I’m currently learning full-stack web development on App Academy Open",
        "I’m looking to collaborate on projects that have a great socio-economic impact",
        "Email me @michellemounde@gmail.com or Message me on LinkedIn @moundem",
        "Fun fact: I made a career switch from QS(Quantity Surveying) to CS(Customer Service) and I am now making a career switch from CS(Customer Service) to CS(Computer Science)",
        "I live in Nairobi, Kenya and it's currently"
    ];

    content.forEach(info => {
        let li = document.createElement("li");
        li.innerText = info;
        li.className = "detail";
        bio.appendChild(li);
    });
}

const addClock = () => {
    const bio = document.querySelector("ul");

    let date = new Date();
    let time = `${date.toDateString()} ${date.toTimeString()}`;

    setInterval(() => {
        date = new Date();
        time = `${date.toDateString()} ${date.toTimeString()}`;
        bio.lastChild.innerText = `I live in Nairobi, Kenya and it's currently ${time} here`
    }, 1000);

    bio.lastChild.innerText += time;
    bio.lastChild.innerText += "here";
}

window.addEventListener("load", () => {
    addH1();
    addBio();
    addClock();
});
