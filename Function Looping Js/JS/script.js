function looping(StartNum,EndNum,BreakNum,ContinueNum){
    if(StartNum!=undefined&&EndNum!=undefined&&BreakNum!=undefined&&ContinueNum!=undefined)
    {
        for(var i=StartNum;i<=EndNum;i++)
        {
            console.log(i);
            if(i==BreakNum)
                break;
            else if(i==ContinueNum)
                continue;

        }

    }

    


}

looping(2,10)

looping(2,4,3)

looping(10,20,15,2)
