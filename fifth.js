function every(arr,fn){
    if(arr.every){
        return arr.every(function(item,index,array){
            fn(item,index,array);
        })
    }else{
        for(var i = 0 , len = arr.length; i < len ; i++){
            if( !fn(arr[i],i,arr) ) break;                          
                return  fn(arr[i],i,arr);
        }    
        return  fn(arr[i],i,arr);
    }
}
function some(arr,fn){
    if(arr.some){
        return arr.some(function(item,index,array){
            fn(item,index,array);
        })
    }else{
        for(var i = 0 , len = arr.length; i < len ; i++){
            if( fn(arr[i],i,arr)) break;
        }    
        return fn(arr[i],i,arr);
    }
} 
function filter(arr,fn){
    var a = [];
    if(arr.filter){
        return arr.filter(function(item,index,array){
             fn(item,index,array);
        })
    }else{
        for(var i = 0 , len = arr.length; i < len ; i++){
            if( fn(arr[i],i,arr) ){
                a.push(arr[i]);
            }    
        }         
        return a; 
    } 
}
function map(arr,fn){
    if(arr.map){
        return arr.map(function(item,index,array){
            fn(item,index,array);
        })
    }else{
        for(var i = 0 , len = arr.length; i < len ; i++){
            arr[i] = fn(arr[i],i,arr);
        }
        return arr;
    }
}
  function forEach(arr,fn){
     if(arr.forEach){
        arr.forEach(function(item,index,array){
            fn(item,index,array);
        })
    }else{
         for(var i = 0 , len = arr.length; i < len ; i++){
            fn(arr[i],i,arr);
        }
    }
}
function indexOf(arr,index,start){
    var start = start || 0;
    if(arr.indexOf){
        return arr.indexOf(index,start);
    }else{
        for(var i = start , len = arr.length; i < len ; i++){
            if(arr[i] == index){
                return i;
                break;          
            }
        }return -1;
    }        
} 
function lastIndexOf(arr,index,start){
    var start = start || arr.length-1;
    if(arr.lastIndexOf){
        return arr.lastIndexOf(index,start);
    }else{
        for(var i = start; i > -1 ; i--){
            if(arr[i] == index){
                return i;
                break;          
            }
        }return -1;
    }        
} 
function reduce(arr,fn,first){
    var a = first,
        i = 0;
    if(typeof a === "undefined"){
        a = arr[0]; 
        i = 1;
    }
    if(arr.reduce){
        return arr.reduce(function(prev,cur,index,array){
            fn(prev,cur,index,array);
        })
    }else{          
        for( i ; i < arr.length; i++){
            a = fn(a,arr[i],i,arr);
        } 
        return a;      
    }       
}   
function reduceRight(arr,fn,first){
    var a = first,
        i = arr.length-1;
    if(typeof a === "undefined"){
        a = arr[arr.length-1]; 
        i = arr.length-2;
    }
    if(arr.reduceRight){
        return arr.reduceRight(function(prev,cur,index,array){
            fn(prev,cur,index,array);
        })
    }else{          
        for( i ; i > -1; i--){
            a = fn(a,arr[i],i,arr);
        } 
        return a;      
    }       
}   