let check = document.getElementById('check');
check.checked = false
let submit = document.getElementById('submit');
let decline = document.getElementById('decline');

let steps = document.querySelectorAll('.steps')
steps[0].style.fontWeight = 600;

var url = window.location.href;
//var url = 'https://carlsfencingdecking.github.io/PaymentPortalAgreement/?param1=$588.60%26param2=$122.17%26param3=$305.43%26param4=$91.63%26param5=$61.09%26param6=$30.54%26param7=https://533330.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=4050&deploy=1&compid=533330&h=e501275711f091b66330&mesaltid=19432-520760330240202-3a7c8ac9-9&meskey=U2FsdGVkX1%2BRzfspXBsSbmd4tl2j4oR3Ugpm3EaG8404aUyYIT2ySE6dALG34yCMl%2FwZA2jYC6OvcCC38zAMRQ%3D%3D';
console.log(url)
url = url.replace('https://carlsfencingdecking.github.io/PaymentPortalAgreement/?', '').replaceAll('%26', '').replaceAll('1=','').replaceAll('2=','').replaceAll('3=','').replaceAll('4=','').replaceAll('5=','').replaceAll('6=','').replaceAll('7=','').replaceAll('$', '');

url = url.split('param')
url.shift();

let setPrices = [url[1],url[2],url[3],url[4],url[5],url[0],url[6]];
console.log(setPrices)


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
let n = 0;
let pVal = [];

payPlans.forEach(function(p,i){
    p.value = setPrices[i];

    if(url[i] === '$0.00' || url[i] === '' || url[i] === undefined || url[i] === null){
        paySpans[i].remove();
    }

    

    p.onclick = function(){

        n++;
        
        
        p.select();
        navigator.clipboard.writeText(p.value);
        steps[2].style.fontWeight = 600;
        pVal.unshift(p.value);
        console.log(pVal)

        if(n === 1){
            steps[2].innerText = steps[2].innerText+' || Copied Amount : $'+pVal[0];
        }else if(n > 1){
            steps[2].innerText = steps[2].innerText.replaceAll(pVal[1], pVal[0])
        }
        



    }

   
});


// Replace these values with your own Box API credentials and file ID
const BOX_ACCESS_TOKEN = '6mUVX25egVKBPFlVEIodHQf7ITh2nfSm';
const FILE_ID = '1443475163741';

// API endpoint for file content
const BOX_API_URL = `https://api.box.com/2.0/files/${FILE_ID}/content`;

// Fetch options including authorization header
const fetchOptions = {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${BOX_ACCESS_TOKEN}`,
  }
};

// Fetch the PDF file content from Box
fetch(BOX_API_URL, fetchOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch PDF file from Box');
    }
    return response.blob();
  })
  .then(pdfBlob => {
    // Convert blob to a URL
    const pdfUrl = URL.createObjectURL(pdfBlob);
    
    // Now you can use the PDF URL to display or manipulate the PDF
    console.log('PDF URL:', pdfUrl);
    document.getElementById('pdfViewer').src = pdfUrl
    
    // For example, you could set an iframe src attribute to display the PDF
    // document.getElementById('pdfViewer').src = pdfUrl;
  })
  .catch(error => {
    console.error('Error:', error);
  });
