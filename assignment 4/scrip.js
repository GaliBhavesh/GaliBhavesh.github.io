var names=new Array();
names[0]="Bhavesh";
names[1]="sandeep";
names[2]="arjun";
names[3]="prabhas";
names[4]="narendra";
names[5]="pavan";
names[6]="venkat";
names[7]="venkatesh";
names[8]="rishith";
names[9]="sukesh";


for(var i=0;i<names.length;i++){
    if(names[i].charAt(0)==='V'||names[i].charAt(0)==='v'){
        console.log("Goodbye "+ names[i])
    }
    else{
        console.log("hello "+names[i])
    }
}
