var names=new Array();
names[0]="jagadeesh";
names[1]="sandeep";
names[2]="Jay";
names[3]="prabhas";
names[4]="narendra";
names[5]="janaki";
names[6]="venkat";
names[7]="venkatesh";
names[8]="Jitendra";
names[9]="sukesh";


for(var i=0;i<names.length;i++){
    if(names[i].charAt(0)==='J'||names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
    }
    else{
        console.log("hello "+names[i])
    }
}
