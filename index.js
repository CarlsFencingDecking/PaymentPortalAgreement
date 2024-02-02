let check = document.getElementById('check');
check.checked = false
let submit = document.getElementById('submit');
let decline = document.getElementById('decline');

let steps = document.querySelectorAll('.steps')
steps[0].style.fontWeight = 600


check.onclick = function(event){
    if(check.checked){
        steps[0].style.fontWeight = 100
        steps[1].style.fontWeight = 600
        submit.style.opacity = '1'
        submit.classList.add('on')
        submit.href = 'https://533330.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4050&deploy=1&compid=533330&h=e501275711f091b66330&mesaltid=22214-370834230241501-43e094e4-2&meskey=U2FsdGVkX1%2FOyBB7%2F0D6TgnWKAWy4hs0dMwo%2Bfrxzhhoxt4LppSrMeos%2BwBQMM%2BtN2JbDuOGHG41Hrsl5IVtxg%3D%3D'
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


const urlParams = new URLSearchParams(window.location.search);

// Get the value of 'param1'
const param1Value = urlParams.get('param1');

// Log the value to the console or use it as needed
console.log('param1 value:', param1Value);
