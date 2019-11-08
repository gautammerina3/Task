let data = [[1,10], [2,10], [4,12], [5,12]];

let keys = [] ;
let values = [];
let pos0 = data[0][0];
let value0= data[0][1];

for(let i=0; i < data.length; i++)
{
     pos1 = (data[i][0]);
     keys.push(pos1);

     let value1 = (data[i][1]);
     values.push(value1);

    if((pos1-pos0) !=0 && (pos1-pos0) !=1 && (pos1-pos0) < 5)
    {
    switch(pos1-pos0)
    {
        case 2:
            value2=(value1+value0)/2;
            console.log("The missing reading is: ", "(", pos0+1, ",", value2,  ")");
            break;
        case 3:
            value2=(value1+value0)/2;
            value3=(value1+value0)/2;
            console.log("The missing readings are: ",  "(", pos0+1, ",", value2,  ")", "(", pos0+2, ",", value3, ")");
            break;
        case 4:
            value2=(value1+value0)/2;
            value3=(value1+value0)/2;
            value4=(value1+value0)/2;
            console.log("The missing readings are: ", "(", pos0+1, ",", value2, ")", "(", pos0+2, ",", value3,")", ",", "(", pos0+3, ",", value4, ")");
            break;
    }
    }
    pos0=pos1;
    value0=value1;
}

// alert(pos);

// console.log(keys);
// console.log(values);
// // alert(data[0][0]);
