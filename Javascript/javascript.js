        let timerRunning = false;
        
        function iniciarReloj () {
        
            if(timerRunning) 
                timerRunning = false;

            obtenerFecha() 
            mostrarHora();
        
        }
        
        function obtenerFecha() {
            Todays = new Date();
            TheDate = "" + (Todays.getMonth()+ 1) +" / "+ Todays.getDate() + " / " + (Todays.getYear() + 1900) 
            document.clock.thedate.value = TheDate;
        }
        
        function mostrarHora() {
        
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds()
            let timeValue = "" + ((hours >12) ? hours -12 :hours)
        
            timeValue += ((minutes < 10) ? ":0" : ":") + minutes
            timeValue += ((seconds < 10) ? ":0" : ":") + seconds
            timeValue += (hours >= 12) ? " P.M." : " A.M."
            document.clock.face.value = timeValue;
        
        
            timerID = setTimeout("mostrarHora()",1000);
            timerRunning = true;
            
        }
        
