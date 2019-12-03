function todaysMatch()
{
    var xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function()
        {
		    if(this.readyState==4 &&this.status==200)
		    {
                var obj = JSON.parse(this.responseText);
                console.log(obj);
                var bod = document.getElementsByTagName('body')[0];
                var mode ="";
                var flag = 0;
                if(bod.style.backgroundColor == "black")
                {
                    mode+="Dark-Mode : ON";
                    flag=0;
                }
                else
                {
                    mode+="Dark-Mode : OFF";
                    flag=1;
                }
                var section1 = document.createElement('section');
                document.getElementsByTagName('body')[0].appendChild(section1);
                var str=`<div id="div0"></div>
                <div id="div1">From - ${obj.filters.dateFrom}</div>
                <div id="div2">To - ${obj.filters.dateTo}</div>
                <div id="div3"><button class="btn">${mode}</button></div>
                <div class="hr"></div>`;
                section1.innerHTML = str;
                if(flag == 0)
                {
                    var btn = document.getElementsByClassName('btn')[0];
                    btn.style.backgroundColor = "white";
                    btn.style.color = "black";
                    var hr = document.querySelectorAll('.hr');
                    hr.forEach(element => {
                        element.style.backgroundColor = "white";                           
                    });
                }
                else
                {
                    var btn = document.getElementsByClassName('btn')[0];
                    btn.style.backgroundColor = "black";
                    btn.style.color = "white";
                    var hr = document.querySelectorAll('.hr');
                    hr.forEach(element => {
                        element.style.backgroundColor = "black";                           
                    });
                }
                for(var i=0 ; i < obj.matches.length ; i++)
                {
                    var section = document.createElement('section');
                    document.getElementsByTagName('body')[0].appendChild(section);
                    var da = new Date(obj.matches[i].lastUpdated);
                    da+="";
                    da = da.substring(0,25);
                    var exa = obj.matches[i].score.extraTime.awayTeam;
                    var exh = obj.matches[i].score.extraTime.homeTeam;
                    var hta = obj.matches[i].score.halfTime.awayTeam;
                    var hth = obj.matches[i].score.halfTime.homeTeam;
                    var fta = obj.matches[i].score.fullTime.awayTeam;
                    var fth = obj.matches[i].score.fullTime.homeTeam;
                    var pa = obj.matches[i].score.penalties.awayTeam;
                    var ph = obj.matches[i].score.penalties.homeTeam;
                    if(exa == null)
                    {
                        exa = 0;
                    }
                    if(exh == null)
                    {
                        exh = 0;
                    }
                    if(hta == null)
                    {
                        hta = 0;
                    }
                    if(hth == null)
                    {
                        hth = 0;
                    }
                    if(fta == null)
                    {
                        fta = 0;
                    }
                    if(fth == null)
                    {
                        fth = 0;
                    }
                    if(pa == null)
                    {
                        pa = 0;
                    }
                    if(ph == null)
                    {
                        ph = 0;
                    }
                    if(obj.matches[i].referees.length != 0)
                    {
                        //console.log(obj.matches[i].referees);
                        var str = ` 
                        <div class="divhl">${obj.matches[i].competition.name}</div>
                        <div class="divhr">${obj.matches[i].group}</div>
                        <div class="divul">${obj.matches[i].awayTeam.name}</div>
                        <div class="win-out">
                        <div class="divum" id="${i}"></div>
                        <div class="divum">VS</div>
                        </div>
                        <div class="divur">${obj.matches[i].homeTeam.name}</div>
                        <div class="divmr">MatchDay - ${obj.matches[i].matchday}</div>
                        <div class="divudl">Extra-Time : ${exa}</div>
                        <div class="divudm">|</div>
                        <div class="divudr">Extra-Time : ${exh}</div>
                        <div class="divudrhead">
                        <div class="divudrr">Referees</div>
                        <div class="divudrr">${obj.matches[i].referees[0].name == null ? "Not Known yet": obj.matches[i].referees[0].name}</div>
                        <div class="divudrr">${obj.matches[i].referees[1].name == null ? "Not Known yet": obj.matches[i].referees[1].name}</div>
                        <div class="divudrr">${obj.matches[i].referees[2].name == null ? "Not Known yet": obj.matches[i].referees[2].name}</div>
                        <div class="divudrr">${obj.matches[i].referees[3].name == null ? "Not Known yet": obj.matches[i].referees[3].name}</div>
                        </div>
                        <div class="divudl">Half-Time : ${hta}</div>
                        <div class="divudm">|</div>
                        <div class="divudr">Half-Time : ${hth}</div>
                        <div class="divudl">Full-Time : ${fta}</div>
                        <div class="divudm">|</div>
                        <div class="divudr">Full-Time : ${fth}</div>
                        <div class="divudl">Penalties : ${pa}</div>
                        <div class="divudm">|</div>
                        <div class="divudr">Penalties : ${ph}</div>
                        <div class="divfl">${obj.matches[i].status}</div>
                        <div class="divfm">Start At : ${new Date(obj.matches[i].utcDate).toString().substring(0,25)}</div> 
                        <div class ="divfr">Last-Updated : ${da}</div>
                        <div class="hr"></div>
                        `;
                        section.innerHTML = str;
                    }
                    else
                    {          
                        //console.log(obj.matches[i].referees);              
                        var str = ` 
                        <div class="divhl">${obj.matches[i].competition.name}</div>
                        <div class="divhr">${obj.matches[i].group}</div>
                        <div class="divul">${obj.matches[i].awayTeam.name}</div>
                        <div class="win-out">
                        <div class="divum" id="${i}"></div>
                        <div class="divum">VS</div>
                        </div>
                        <div class="divur">${obj.matches[i].homeTeam.name}</div>
                        <div class="divmr">MatchDay - ${obj.matches[i].matchday}</div>
                        <div class="divudl">Extra-Time : ${exa}</div>
                        <div class="divudm">|</div>
                        <div class="divudr">Extra-Time : ${exh}</div>
                        <div class="divudrhead">
                        <div class="divudrr">Referees</div>
                        <div class="divudrm">Not yet Announced</div>
                        </div>
                        <div class="divudl">Half-Time : ${hta}</div>
                        <div class="divudm">|</div>
                        <div class="divudr">Half-Time : ${hth}</div>
                        <div class="divudl">Full-Time : ${fta}</div>
                        <div class="divudm">|</div>
                        <div class="divudr">Full-Time : ${fth}</div>
                        <div class="divudl">Penalties : ${pa}</div>
                        <div class="divudm">|</div>
                        <div class="divudr">Penalties : ${ph}</div>
                        <div class="divfl">${obj.matches[i].status}</div>
                        <div class="divfm">Start At : ${new Date(obj.matches[i].utcDate).toString().substring(0,25)}</div> 
                        <div class ="divfr">Last-Updated : ${da}</div>
                        <div class="hr"></div>
                        `;
                        section.innerHTML = str;
                    }
                    if(flag == 0)
                    {
                        var hr = document.querySelectorAll('.hr');
                        hr.forEach(element => {
                            element.style.backgroundColor = "white";                           
                        });
                    }
                    else
                    {
                        var hr = document.querySelectorAll('.hr');
                        hr.forEach(element => {
                            element.style.backgroundColor = "black";                           
                        });
                    }
                    if(obj.matches[i].score.winner == 'AWAY_TEAM')
                    {
                        document.getElementById(i).innerHTML = "<<< Winner";
                    }
                    else if(obj.matches[i].score.winner == 'HOME_TEAM')
                    {
                        document.getElementById(i).innerHTML = "Winner >>>";
                    }
                    else
                    {
                        document.getElementById(i).innerHTML = "DRAW";
                    }                    
                }
                var btnn = document.getElementsByClassName('btn')[0];
                   // console.log(btnn);
                    btnn.addEventListener("click",function(event)
                    {
                        
                       if(btnn.innerHTML == "Dark-Mode : OFF")
                       {
                        var body = document.getElementsByTagName('body')[0];
                        body.style.backgroundColor = "black";
                        body.style.color = "white";
                        btnn.innerHTML = "Dark-Mode : ON";
                        btnn.style.backgroundColor = "white";
                        btnn.style.color = "black";
                        var hr = document.querySelectorAll('.hr');
                        hr.forEach(element => {
                            element.style.backgroundColor = "white";                    
                        });
                       }
                       else
                       {
                        var body = document.getElementsByTagName('body')[0];
                        body.style.backgroundColor = "whitesmoke";
                        body.style.color = "black";
                        btnn.innerHTML = "Dark-Mode : OFF";
                        btnn.style.backgroundColor = "black";
                        btnn.style.color = "white";
                        var hr = document.querySelectorAll('.hr');
                        hr.forEach(element => {
                            element.style.backgroundColor = "black";                            
                        });
                       }
                    });                                
	    	}
	    };
		xhttp.open("GET","https://api.football-data.org/v2/matches",true); 
		xhttp.setRequestHeader('X-Auth-Token', '9375095dbe9d4b7686bc5a2d603eef0d');
		xhttp.send();
}
function championLeague()
{
    var xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function()
        {
		    if(this.readyState==4 &&this.status==200)
		    {
                var obj = JSON.parse(this.responseText);
                console.log(obj);
                var bod = document.getElementsByTagName('body')[0];
                var mode ="";
                var flag = 0;
                if(bod.style.backgroundColor == "black")
                {
                    mode+="Dark-Mode : ON";
                    flag=0;
                }
                else
                {
                    mode+="Dark-Mode : OFF";
                    flag=1;
                }
                var section1 = document.createElement('section');
                document.getElementsByTagName('body')[0].appendChild(section1);
                var str=`<div id="div0"></div>
                <div id="div1">${obj.competition.area.name}</div>
                <div id="div2">${obj.competition.name}</div>
                <div id="div3"><button class="btn">${mode}</button></div>
                <div class="hr"></div>`;
                section1.innerHTML = str;
                if(flag == 0)
                {
                    var btn = document.getElementsByClassName('btn')[0];
                    btn.style.backgroundColor = "white";
                    btn.style.color = "black";
                    var hr = document.querySelectorAll('.hr');
                    hr.forEach(element => {
                        element.style.backgroundColor = "white";                           
                    });
                }
                else
                {
                    var btn = document.getElementsByClassName('btn')[0];
                    btn.style.backgroundColor = "black";
                    btn.style.color = "white";
                    var hr = document.querySelectorAll('.hr');
                    hr.forEach(element => {
                        element.style.backgroundColor = "black";                           
                    });
                }
                for(var i=0 ; i < obj.matches.length ; i++)
                {
                    var section = document.createElement('section');
                    document.getElementsByTagName('body')[0].appendChild(section);
                    var da = new Date(obj.matches[i].lastUpdated);
                    da+="";
                    da = da.substring(0,25);
                    var exa = obj.matches[i].score.extraTime.awayTeam;
                    var exh = obj.matches[i].score.extraTime.homeTeam;
                    var hta = obj.matches[i].score.halfTime.awayTeam;
                    var hth = obj.matches[i].score.halfTime.homeTeam;
                    var fta = obj.matches[i].score.fullTime.awayTeam;
                    var fth = obj.matches[i].score.fullTime.homeTeam;
                    var pa = obj.matches[i].score.penalties.awayTeam;
                    var ph = obj.matches[i].score.penalties.homeTeam;
                    if(exa == null)
                    {
                        exa = 0;
                    }
                    if(exh == null)
                    {
                        exh = 0;
                    }
                    if(hta == null)
                    {
                        hta = 0;
                    }
                    if(hth == null)
                    {
                        hth = 0;
                    }
                    if(fta == null)
                    {
                        fta = 0;
                    }
                    if(fth == null)
                    {
                        fth = 0;
                    }
                    if(pa == null)
                    {
                        pa = 0;
                    }
                    if(ph == null)
                    {
                        ph = 0;
                    }
                  //  console.log(obj.matches[i].referees);
                    if(obj.matches[i].referees.length != 0)
                    {
                        //console.log(obj.matches[i].referees);
                        var str = ` 
                        <div class="divhl"></div>
                        <div class="divhr">${obj.matches[i].stage.substring(0,1).toUpperCase()+obj.matches[i].stage.substring(1).toLowerCase()}</div>
                        <div class="divul">${obj.matches[i].awayTeam.name}</div>
                        <div class="win-out">
                        <div class="divum" id="${i}"></div>
                        <div class="divum">VS</div>
                        </div>
                        <div class="divur">${obj.matches[i].homeTeam.name}</div>
                        <div class="divmr">MatchDay - ${obj.matches[i].matchday}</div>
                        <div class="divudl">Extra-Time : ${exa}</div>
                        <div class="divudm">|</div>
                        <div class="divudr">Extra-Time : ${exh}</div>
                        <div class="divudrhead">
                        <div class="divudrr">Referees</div>
                        <div class="divudrr">${obj.matches[i].referees[0].name == null ? "Not Known yet": obj.matches[i].referees[0].name}</div>
                        <div class="divudrr">${obj.matches[i].referees[1].name == null ? "Not Known yet": obj.matches[i].referees[1].name}</div>
                        <div class="divudrr">${obj.matches[i].referees[2].name == null ? "Not Known yet": obj.matches[i].referees[2].name}</div>
                        <div class="divudrr">${obj.matches[i].referees[3].name == null ? "Not Known yet": obj.matches[i].referees[3].name}</div>
                        </div>
                        <div class="divudl">Half-Time : ${hta}</div>
                        <div class="divudm">|</div>
                        <div class="divudr">Half-Time : ${hth}</div>
                        <div class="divudl">Full-Time : ${fta}</div>
                        <div class="divudm">|</div>
                        <div class="divudr">Full-Time : ${fth}</div>
                        <div class="divudl">Penalties : ${pa}</div>
                        <div class="divudm">|</div>
                        <div class="divudr">Penalties : ${ph}</div>
                        <div class="divfl">${obj.matches[i].status}</div>
                        <div class="divfm">Start At : ${new Date(obj.matches[i].utcDate).toString().substring(0,25)}</div> 
                        <div class ="divfr">Last-Updated : ${da}</div>
                        <div class="hr"></div>
                        `;
                        section.innerHTML = str;
                        
                    }
                    else
                    {          
                        //console.log(obj.matches[i].referees);              
                        var str = ` 
                        <div class="divhl"></div>
                        <div class="divhr">${obj.matches[i].stage}</div>
                        <div class="divul">${obj.matches[i].awayTeam.name}</div>
                        <div class="win-out">
                        <div class="divum" id="${i}"></div>
                        <div class="divum">VS</div>
                        </div>
                        <div class="divur">${obj.matches[i].homeTeam.name}</div>
                        <div class="divmr">MatchDay - ${obj.matches[i].matchday}</div>
                        <div class="divudl">Extra-Time : ${exa}</div>
                        <div class="divudm">|</div>
                        <div class="divudr">Extra-Time : ${exh}</div>
                        <div class="divudrhead">
                        <div class="divudrr">Referees</div>
                        <div class="divudrm">Not yet Announced</div>
                        </div>
                        <div class="divudl">Half-Time : ${hta}</div>
                        <div class="divudm">|</div>
                        <div class="divudr">Half-Time : ${hth}</div>
                        <div class="divudl">Full-Time : ${fta}</div>
                        <div class="divudm">|</div>
                        <div class="divudr">Full-Time : ${fth}</div>
                        <div class="divudl">Penalties : ${pa}</div>
                        <div class="divudm">|</div>
                        <div class="divudr">Penalties : ${ph}</div>
                        <div class="divfl">${obj.matches[i].status}</div>
                        <div class="divfm">Start At : ${new Date(obj.matches[i].utcDate).toString().substring(0,25)}</div> 
                        <div class ="divfr">Last-Updated : ${da}</div>
                        <div class="hr"></div>
                        `;
                        section.innerHTML = str;
                    }
                    if(flag == 0)
                    {
                        var hr = document.querySelectorAll('.hr');
                        hr.forEach(element => {
                            element.style.backgroundColor = "white";                           
                        });
                    }
                    else
                    {
                        var hr = document.querySelectorAll('.hr');
                        hr.forEach(element => {
                            element.style.backgroundColor = "black";                           
                        });
                    }
                    if(obj.matches[i].score.winner == 'AWAY_TEAM')
                    {
                        document.getElementById(i).innerHTML = "<<< Winner";
                    }
                    else if(obj.matches[i].score.winner == 'HOME_TEAM')
                    {
                        document.getElementById(i).innerHTML = "Winner >>>";
                    }
                    else
                    {
                        document.getElementById(i).innerHTML = "DRAW";
                    }
                }
                var btnn = document.getElementsByClassName('btn')[0];
                   // console.log(btnn);
                    btnn.addEventListener("click",function(event)
                    {
                        
                       if(btnn.innerHTML == "Dark-Mode : OFF")
                       {
                        var body = document.getElementsByTagName('body')[0];
                        body.style.backgroundColor = "black";
                        body.style.color = "white";
                        btnn.innerHTML = "Dark-Mode : ON";
                        btnn.style.backgroundColor = "white";
                        btnn.style.color = "black";
                        var hr = document.querySelectorAll('.hr');
                        hr.forEach(element => {
                            element.style.backgroundColor = "white";                    
                        });
                       }
                       else
                       {
                        var body = document.getElementsByTagName('body')[0];
                        body.style.backgroundColor = "whitesmoke";
                        body.style.color = "black";
                        btnn.innerHTML = "Dark-Mode : OFF";
                        btnn.style.backgroundColor = "black";
                        btnn.style.color = "white";
                        var hr = document.querySelectorAll('.hr');
                        hr.forEach(element => {
                            element.style.backgroundColor = "black";                            
                        });
                       }
                    });
	    	}
	    };
		xhttp.open("GET","https://api.football-data.org/v2/competitions/CL/matches",true); 
		xhttp.setRequestHeader('X-Auth-Token', '9375095dbe9d4b7686bc5a2d603eef0d');
		xhttp.send();
}
function matchUpdate()
{

    var sectionp = document.createElement('section');
    document.getElementsByTagName('body')[0].appendChild(sectionp);
    var strp = `
    <div id="div0"></div>
    <div style="height:100px;width:100%;padding-top:2%;padding-bottom:2%;text-align:center">
    <div class="example">
    <input id="inp" type="text" placeholder="   Enter Matchday Value .... ">
    <button id="sr"><i class="fa fa-search"></i></button>
    </div>
    `;
    sectionp.innerHTML = strp;
    var sr = document.getElementById('sr');
    sr.addEventListener("click",function(event)
    {
        var x = document.getElementById('inp').value;
        var len = document.getElementsByTagName('section').length;
        for(var i =1;i<len;i++)
        {
            var sec = document.getElementsByTagName('section')[1];
            sec.remove();
        }
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange=function() {
            if (this.readyState == 4 && this.status == 200) {
             var obj = JSON.parse(this.responseText);
            console.log(obj);
                    var bod = document.getElementsByTagName('body')[0];
                    var mode ="";
                    var flag = 0;
                    if(bod.style.backgroundColor == "black")
                    {
                        mode+="Dark-Mode : ON";
                        flag=0;
                    }
                    else
                    {
                        mode+="Dark-Mode : OFF";
                        flag=1;
                    }
                    var section1 = document.createElement('section');
                    document.getElementsByTagName('body')[0].appendChild(section1);
                    var str=`
                    <div id="div1">${obj.competition.area.name}</div>
                    <div id="div2">${obj.competition.name}</div>
                    <div id="div3"><button class="btn">${mode}</button></div>
                    <div class="hr"></div>`;
                    section1.innerHTML = str;
                    if(flag == 0)
                    {
                        var btn = document.getElementsByClassName('btn')[0];
                        btn.style.backgroundColor = "white";
                        btn.style.color = "black";
                        var hr = document.querySelectorAll('.hr');
                        hr.forEach(element => {
                            element.style.backgroundColor = "white";                           
                        });
                    }
                    else
                    {
                        var btn = document.getElementsByClassName('btn')[0];
                        btn.style.backgroundColor = "black";
                        btn.style.color = "white";
                        var hr = document.querySelectorAll('.hr');
                        hr.forEach(element => {
                            element.style.backgroundColor = "black";                           
                        });
                    }
                    for(var i=0 ; i < obj.matches.length ; i++)
                    {
                        var section = document.createElement('section');
                        document.getElementsByTagName('body')[0].appendChild(section);
                        var da = new Date(obj.matches[i].lastUpdated);
                        da+="";
                        da = da.substring(0,25);
                        var exa = obj.matches[i].score.extraTime.awayTeam;
                        var exh = obj.matches[i].score.extraTime.homeTeam;
                        var hta = obj.matches[i].score.halfTime.awayTeam;
                        var hth = obj.matches[i].score.halfTime.homeTeam;
                        var fta = obj.matches[i].score.fullTime.awayTeam;
                        var fth = obj.matches[i].score.fullTime.homeTeam;
                        var pa = obj.matches[i].score.penalties.awayTeam;
                        var ph = obj.matches[i].score.penalties.homeTeam;
                        if(exa == null)
                        {
                            exa = 0;
                        }
                        if(exh == null)
                        {
                            exh = 0;
                        }
                        if(hta == null)
                        {
                            hta = 0;
                        }
                        if(hth == null)
                        {
                            hth = 0;
                        }
                        if(fta == null)
                        {
                            fta = 0;
                        }
                        if(fth == null)
                        {
                            fth = 0;
                        }
                        if(pa == null)
                        {
                            pa = 0;
                        }
                        if(ph == null)
                        {
                            ph = 0;
                        }
                      //  console.log(obj.matches[i].referees);
                        if(obj.matches[i].referees.length != 0)
                        {
                            //console.log(obj.matches[i].referees);
                            var str = ` 
                            <div class="divhl"></div>
                            <div class="divhr">${obj.matches[i].stage.substring(0,1).toUpperCase()+obj.matches[i].stage.substring(1).toLowerCase()}</div>
                            <div class="divul">${obj.matches[i].awayTeam.name}</div>
                            <div class="win-out">
                            <div class="divum" id="${i}"></div>
                            <div class="divum">VS</div>
                            </div>
                            <div class="divur">${obj.matches[i].homeTeam.name}</div>
                            <div class="divmr">MatchDay - ${obj.matches[i].matchday}</div>
                            <div class="divudl">Extra-Time : ${exa}</div>
                            <div class="divudm">|</div>
                            <div class="divudr">Extra-Time : ${exh}</div>
                            <div class="divudrhead">
                            <div class="divudrr">Referees</div>
                            <div class="divudrr">${obj.matches[i].referees[0].name == null ? "Not Known yet": obj.matches[i].referees[0].name}</div>
                            <div class="divudrr">${obj.matches[i].referees[1].name == null ? "Not Known yet": obj.matches[i].referees[1].name}</div>
                            <div class="divudrr">${obj.matches[i].referees[2].name == null ? "Not Known yet": obj.matches[i].referees[2].name}</div>
                            <div class="divudrr">${obj.matches[i].referees[3].name == null ? "Not Known yet": obj.matches[i].referees[3].name}</div>
                            </div>
                            <div class="divudl">Half-Time : ${hta}</div>
                            <div class="divudm">|</div>
                            <div class="divudr">Half-Time : ${hth}</div>
                            <div class="divudl">Full-Time : ${fta}</div>
                            <div class="divudm">|</div>
                            <div class="divudr">Full-Time : ${fth}</div>
                            <div class="divudl">Penalties : ${pa}</div>
                            <div class="divudm">|</div>
                            <div class="divudr">Penalties : ${ph}</div>
                            <div class="divfl">${obj.matches[i].status}</div>
                            <div class="divfm">Start At : ${new Date(obj.matches[i].utcDate).toString().substring(0,25)}</div> 
                            <div class ="divfr">Last-Updated : ${da}</div>
                            <div class="hr"></div>
                            `;
                            section.innerHTML = str;
                            
                        }
                        else
                        {          
                            //console.log(obj.matches[i].referees);              
                            var str = ` 
                            <div class="divhl"></div>
                            <div class="divhr">${obj.matches[i].stage}</div>
                            <div class="divul">${obj.matches[i].awayTeam.name}</div>
                            <div class="win-out">
                            <div class="divum" id="${i}"></div>
                            <div class="divum">VS</div>
                            </div>
                            <div class="divur">${obj.matches[i].homeTeam.name}</div>
                            <div class="divmr">MatchDay - ${obj.matches[i].matchday}</div>
                            <div class="divudl">Extra-Time : ${exa}</div>
                            <div class="divudm">|</div>
                            <div class="divudr">Extra-Time : ${exh}</div>
                            <div class="divudrhead">
                            <div class="divudrr">Referees</div>
                            <div class="divudrm">Not yet Announced</div>
                            </div>
                            <div class="divudl">Half-Time : ${hta}</div>
                            <div class="divudm">|</div>
                            <div class="divudr">Half-Time : ${hth}</div>
                            <div class="divudl">Full-Time : ${fta}</div>
                            <div class="divudm">|</div>
                            <div class="divudr">Full-Time : ${fth}</div>
                            <div class="divudl">Penalties : ${pa}</div>
                            <div class="divudm">|</div>
                            <div class="divudr">Penalties : ${ph}</div>
                            <div class="divfl">${obj.matches[i].status}</div>
                            <div class="divfm">Start At : ${new Date(obj.matches[i].utcDate).toString().substring(0,25)}</div> 
                            <div class ="divfr">Last-Updated : ${da}</div>
                            <div class="hr"></div>
                            `;
                            section.innerHTML = str;
                        }
                        if(flag == 0)
                        {
                            var hr = document.querySelectorAll('.hr');
                            hr.forEach(element => {
                                element.style.backgroundColor = "white";                           
                            });
                        }
                        else
                        {
                            var hr = document.querySelectorAll('.hr');
                            hr.forEach(element => {
                                element.style.backgroundColor = "black";                           
                            });
                        }
                        if(obj.matches[i].score.winner == 'AWAY_TEAM')
                        {
                            document.getElementById(i).innerHTML = "<<< Winner";
                        }
                        else if(obj.matches[i].score.winner == 'HOME_TEAM')
                        {
                            document.getElementById(i).innerHTML = "Winner >>>";
                        }
                        else
                        {
                            document.getElementById(i).innerHTML = "DRAW";
                        }
                    }
                        
                        var btnn = document.getElementsByClassName('btn')[0];
                        console.log(btnn);
                        btnn.addEventListener("click",function(event)
                        {
                            
                            if(btnn.innerHTML == "Dark-Mode : OFF")
                            {
                                var body = document.getElementsByTagName('body')[0];
                                body.style.backgroundColor = "black";
                                body.style.color = "white";
                                btnn.innerHTML = "Dark-Mode : ON";
                                btnn.style.backgroundColor = "white";
                                btnn.style.color = "black";
                                var hr = document.querySelectorAll('.hr');
                                hr.forEach(element => {
                                    element.style.backgroundColor = "white";                    
                                });
                                console.log("hi");
                            }
                            else
                            {
                                var body = document.getElementsByTagName('body')[0];
                                body.style.backgroundColor = "whitesmoke";
                                body.style.color = "black";
                                btnn.innerHTML = "Dark-Mode : OFF";
                                btnn.style.backgroundColor = "black";
                                btnn.style.color = "white";
                                var hr = document.querySelectorAll('.hr');
                                hr.forEach(element => {
                                element.style.backgroundColor = "black";                            
                                });
                            }
                        });
            }
        };
        xhttp.open("GET", "https://api.football-data.org/v2/competitions/PL/matches?matchday="+x,true);  
        xhttp.setRequestHeader('X-Auth-Token','9375095dbe9d4b7686bc5a2d603eef0d');
        xhttp.send();
    });
}
function doc2()
{
     var val = decodeURIComponent(window.location.search);
     val = val.substring(1);
     if(val == 1)
     {
         todaysMatch();
         setTimeout("func()",30000);
     }
     else if(val == 2)
     {
         championLeague();
     }
     else if(val == 3)
     {
         matchUpdate();
     }

}
function loadDoc(ele)
{
       var str = "?"+ele;
       window.location.href="competition.html" + str;
}
function func()
{
    var len = document.getElementsByTagName('section').length;
    for(var j = 0; j < len ; j++)
    {
        var sec = document.getElementsByTagName('section')[0];
        sec.remove();
    }
    doc2();
}
