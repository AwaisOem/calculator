const hamopen=document.querySelector('#hamicn');
const hamclose=document.querySelector('#close');
const ham=document.querySelector('#ham');
hamopen.addEventListener('click', ()=>{ham.className="";});
hamclose.addEventListener('click', ()=>{ham.className+=" hide";});
const hamopen2=document.querySelector('#hamicn2');
const hamclose2=document.querySelector('#close2');
const ham2=document.querySelector('#ham2');
hamopen2.addEventListener('click', ()=>{ham2.className="";});
hamclose2.addEventListener('click', ()=>{ham2.className+=" hide";});
const BtnsInString = document.querySelectorAll('div[data-btn]');
const input = document.querySelector('input[type="text"]');
for (let i  = 0; i < BtnsInString.length; i++) {
    BtnsInString[i].addEventListener('click',()=>
    {
        if(BtnsInString[i].innerText==="÷")
        input.value+="/";
        else if(BtnsInString[i].innerText==="×")
        input.value+="*";
        else
        input.value+=BtnsInString[i].innerText;
    });
}
const clear = document.querySelector('div[data-clear]');
clear.addEventListener('click',()=>{
    input.value="";
});
const equal = document.querySelector('div[data-equal]');
equal.addEventListener('click',()=>{
        try {
            input.value=eval(input.value);
        } catch (error) {
            alert("Expression is wrong");
        }
});
const sign = document.querySelector('div[data-sign]');
sign.addEventListener('click',()=>{
    if (input.value[input.value.length-1]>='0' && input.value[input.value.length-1]<='9')
    {
        let i;
        for ( i = input.value.length-1; i >=0; i--)
            if (!((input.value[i]>='0' && input.value[i]<='9')||input.value[i]==='.'))
                break;
        let st1=input.value.slice(0, i+1);
        let st2=input.value.slice(i+1);
        input.value=st1+"("+"-"+st2+")";
    }
});