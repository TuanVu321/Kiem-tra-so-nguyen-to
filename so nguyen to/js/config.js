let number = parseInt(prompt('Nhap vao so ban muon kiem tra'));
let count = 0;
for (i=2;i<= Math.floor(Math.sqrt(number));i++){
    if(number%i==0){
        count++
    }
}
if(count==0){
    alert('Day la so nguyen to');
}else{
    alert('Day khong la so nguyen to');
}
