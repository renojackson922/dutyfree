import React, { useEffect } from 'react'


function Calendar(props){

    /** 
     * TODO: National Holiday API로부터 가져오기
     * */ 

    let i = 1, j= 1, minus=0;
    const year = 2021;
    const month = 3;
    const day = 1;

    let strBuilder = '<table class=\'table table-bordered table-duty\'><tbody>'

    let d = new Date(`${year}-${month}-${day}`);
    let n = d.getDay()
    let lastDay = new Date(year, month, 0).getDate();

    for(i=1; i<=6; i++){
        strBuilder += '<tr>'

        for(j=1; j<=7; j++){
            let num = (7*(i-1)) + j;
            let numMinus =  num-minus;
            console.log(`${num}-${minus}=${numMinus}`)
            let dCurr = new Date(`${year}-${month}-${numMinus}`);
            let nCurr = dCurr.getDay();
            let colorTemplate = "";

            if(typeof nCurr === "number" && nCurr === 6){
                colorTemplate = "style=\"color:blue;\"";
            }
            if(typeof nCurr === "number" && nCurr === 0){
                colorTemplate = "style=\"color:red;\"";
            }

            if(num <= n){
                strBuilder += '<td></td>'
                minus++;
            }
            else if(num > lastDay){
                if(minus > 0){
                    strBuilder += `<td ${colorTemplate}>${numMinus}</td>`
                    minus--;
                }else{
                    strBuilder += '<td></td>'
                }
            }
            else{
                strBuilder += `<td ${colorTemplate}>${numMinus}</td>`
            }  

        }
        strBuilder += '</tr>'
    }

    strBuilder += '</tbody></table>'

    return(
        <>
            <div dangerouslySetInnerHTML={ {__html: strBuilder} }></div>
        </>
    )

}

export default Calendar;