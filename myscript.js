// load this code when page is done loading
window.onload = function () {

    // select clock elements from page

    // SELECTOR: document.getElementById is a helper function
    // that looks for id="year"
    const clockYear = document.getElementById('year');
    const clockMonth = document.getElementById('month');
    const clockDay = document.getElementById('day');
    const clockHours = document.getElementById('hours');
    const clockMinutes = document.getElementById('minutes');
    const clockSeconds = document.getElementById('seconds');

    // says re-run this every 1000 milliseconds
    setInterval(() => {
        // GET DATE: create an "object" date
        const date = new Date();

        // date.getFullYear functions return variables
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        // now we replace our "selector" content
        clockYear.innerHTML = 'year: ' + year;
        clockMonth.innerHTML = 'month: ' + month;
        clockDay.innerHTML = 'day: ' + day;
        clockHours.innerHTML = 'hours: ' + hours;
        clockMinutes.innerHTML = 'minutes: ' + minutes;
        clockSeconds.innerHTML = 'seconds: ' + seconds;
    }, 1000);
};