var report = document.getElementById('report');
var dots_btn = document.getElementById('dots_btn'); 
var flag = document.getElementById('flag');
var reportFlag = document.getElementById('reportFlag');


flag.onclick = function() {
    reportFlag.style.display = 'block';
}

document.addEventListener('click', (e) => {
    const flagChecker = e.composedPath().includes(flag);
    const reportFlagChecker = e.composedPath().includes(reportFlag);

    if(!flagChecker & !reportFlagChecker) {
        reportFlag.style.display = 'none';
    }
})

dots_btn.onclick = function() {
    report.style.display = 'block';
}

document.addEventListener( 'click', (e) => {
    const BtnClickCheker = e.composedPath().includes(dots_btn);
    const clickCheker = e.composedPath().includes(report);

    if(!BtnClickCheker & !clickCheker) {
        reportClosed()
    }

})

function reportClosed() {
    report.style.display = 'none';
}
