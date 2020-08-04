
function addValue(btnValue){
 document.getElementById('checkPinInput').value += btnValue;
}

function clearValue(){
    document.getElementById('checkPinInput').value ='';
}

function clearSingleValue(){
  let existValue =  document.getElementById('checkPinInput').value.slice(0, -1);
  document.getElementById('checkPinInput').value =existValue;
}

function generatePin(){
    let randomValue = Math.round(Math.random()*2000+1000);
    document.getElementById('pinGeneratorInput').value = randomValue;
}


function checkMatching(){
    let generatedPin = parseInt(document.getElementById('pinGeneratorInput').value);
    let inputPin = parseInt(document.getElementById('checkPinInput').value);
    let tryCount = parseInt(document.getElementById('tryCounter').innerText);

    if(generatedPin == inputPin){
        document.getElementById('successNotify').style.display='block';
        document.getElementById('errorNotify').style.display='none';
        document.getElementById('tryNotification').style.display='none';
        document.getElementById('pinGeneratorInput').value = '';
        document.getElementById('checkPinInput').value = '';
    }else{
        document.getElementById('successNotify').style.display='none';
        document.getElementById('errorNotify').style.display='block';
        document.getElementById('tryNotification').style.display='block';


        if(tryCount>=1){document.getElementById('tryCounter').innerText = tryCount -1;}
        else{
              document.getElementById('tryCounter').innerText = 0;    
              document.getElementById('submitValue').setAttribute('disabled','');
              document.getElementById('errorNotify').style.display='none';
              document.getElementById('limitNotify').style.display='block';
          }
    }

}



