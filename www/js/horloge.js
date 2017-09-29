/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.onreadystatechange = function () {
    setInterval(function() {
        let d = new Date();
        let hr = d.getHours();
        let min = d.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        let sec = d.getSeconds();
        if (sec < 10) {
            sec = "0" + sec;
        }

        document.getElementById('horloge').innerHTML = hr +' : ' + min +' : ' + sec ;
        
    }, 1000); 
}
