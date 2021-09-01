setInterval(() => {
    d = new Date();
    hd = d.getHours();
    md = d.getMinutes();
    sd = d.getSeconds();
    
    hrotation = (30*hd) + (md/2);
    mrotation = 6*md;
    srotation = 6*sd;

    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000);