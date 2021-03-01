import React, {useEffect} from 'react'
import date from 'datejs'


function Calendar2(props){

    const holidays = ['0101', '0211', '0212', '0213', '0301', '0505', '0519', '0606', '0815', '0920', '0921', '0922', '1003', '1009', '1225']
    const today = new Date();
    let dayOver = 0;
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let colorTemplate = "";

    useEffect(()=>{
        // renderCalendar();
        // return(()=>{
        //     renderCalendar();
        // });
    });

    return renderCalendar();

    function renderCalendar(){
        let year = props.year ?? currentYear
        let month = props.month ?? currentMonth
    
        let firstDay =  (new Date(`${year}-${month}-01`)).getDay();
        let strBuilder = '<table class=\'table table-bordered table-duty\'><tbody>'
        
        let date = 1;
        let i = 0, j = 0;
        for(i = 0; i < 6; i++){
            strBuilder += '<tr>'

            for(j=0; j<7; j++){

                if (i === 0 && j < firstDay) {
                    let subtract = (firstDay*-1)+j
                    colorTemplate = getColorTemplate((new Date(`${year}-${month}-01`)).addDays(subtract));
                    strBuilder += '<td class="dimmer"' + colorTemplate + '>' + (new Date(`${year}-${month}-01`)).addDays(subtract).getDate() +  '</td>';
                }
                else if (date > daysInMonth(month, year)) {
                    colorTemplate = getColorTemplate((new Date(`${year}-${month}-01`)).addMonths(1).addDays(dayOver));
                    strBuilder += '<td class="dimmer"' + colorTemplate + '>' + (new Date(`${year}-${month}-01`)).addMonths(1).addDays(dayOver).getDate() +  '</td>';
                    dayOver++;
                }
                else {
                    colorTemplate = getColorTemplate((new Date(`${year}-${month}-${date}`)));   
                    if (date === today.getDate() && year === today.getFullYear() && month === (today.getMonth()+1)) {
                        strBuilder += `<td class="today" ${colorTemplate}>${date}</td>`
                    } else{
                        strBuilder += `<td ${colorTemplate}>${date}</td>`
                    }
                    date++;
                }
            }
            strBuilder += '</tr>'
        }
        strBuilder += '</tbody></table>'
    
        return (
        <>
           <div dangerouslySetInnerHTML={ {__html: strBuilder} }></div>
        </>
        )       
    }

    function daysInMonth(iMonth, iYear) {
        return new Date(iYear, iMonth, 0).getDate();
    }

    function getColorTemplate(date){
        let nCurr = date.getDay();
        if(typeof nCurr === "number" && nCurr === 6){
            return "style=\"color:blue;\"";
        }
        else if(typeof nCurr === "number" && nCurr === 0){
            return "style=\"color:red;\"";
        }
        else if(holidays.indexOf(`${date.toString('MMdd')}`) !== -1){
            return "style=\"color:red;\"";
        }
        else{
            return "";
        }
    }

}

export default Calendar2;