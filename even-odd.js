function sortEvenOdd(arr,arrSize) {
    //solve in 3 steps
    //1. seperate out the even odd frm list
    for(let i=0;i< arrSize;i++)
    {
        if (arr[i] %2 ==0)
        even_array_push(arr[i]);
    
    else
    odd_array.push(arr[i]);
    }
    

    //2. sort odd in desc and even in asc
    const even_asc_array = even_array.sort((a,b) => a-b);
    const odd_desc_array = odd_array.sort((a,b) => b-a);


    //3. assembling  both the  sortd arrays  into  a single arr
    const result = odd_desc_array.concat(even_asc_array);

    
    
}