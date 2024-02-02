let check = document.getElementById('check');
check.checked = false
let submit = document.getElementById('submit');
let decline = document.getElementById('decline');

let steps = document.querySelectorAll('.steps')
steps[0].style.fontWeight = 600;

var url = window.location.href;
console.log(url)
url = url.replace('https://carlsfencingdecking.github.io/PaymentPortalAgreement/?', '').replaceAll('%26', '').replaceAll('1=','').replaceAll('2=','').replaceAll('3=','').replaceAll('4=','').replaceAll('5=','').replaceAll('6=','').replaceAll('7=','');

url = url.split('param')
url.shift();
console.log(url)


check.onclick = function(event){
    if(check.checked){
        steps[0].style.fontWeight = 100
        steps[1].style.fontWeight = 600
        submit.style.opacity = '1'
        submit.classList.add('on')
        submit.href = url[6]
    }else {
        
        steps[0].style.fontWeight = 600
        steps[1].style.fontWeight = 100
        submit.href = '#';
        submit.style.opacity = '.5'
        submit.classList.remove('on')
    }
};

submit.onclick = function(event){
    if(!check.checked){
        alert('To Proceed Please Agree To The Terms and Conditions.')
    }
}

decline.addEventListener('click', function(event){
    window.close()
});



let payPlans = document.querySelectorAll('.payPlans');
let paySpans = document.querySelectorAll('.paySpans');

payPlans.forEach(function(p,i){
    p.innerText = url[i];

    if(url[i] === '$0.00' || url[i] === '' || url[i] === undefined || url[i] === null){
        paySpans[i].remove();
    }
    
});
