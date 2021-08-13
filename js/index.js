var year = document.querySelector("#year");
var option;
var registerbtn = document.querySelector(".reg");
var loginbtn = document.querySelector(".log");
var btn = document.querySelector(".btn1");
var login = document.querySelector("#login");
var register = document.querySelector("#register");


function cretElement()
{
    option = document.createElement("option");
}

for (var i = 1970; i <= 2020 ; i++ )
{

    cretElement();
    year.appendChild(option);
    option.setAttribute("value",i);
    option.textContent = i;
}




login.style.cssText="display:none";

loginbtn.addEventListener("click",function ()
{   
    btn.animate([
        {left:'50%'}
    ],{
        duration:250,
        fill:"both",
        easing:'cubic-bezier(0.85, 0, 0.15, 1)'
    });

    register.style.cssText = "display:none;";
    login.style.cssText = "display:block;";
    login.animate([
        {
            opacity:"0"
        }
        ,
        {
            opacity:"1"
        }
        
    ],
    {
        duration:250,
        fill:"both",
        easing:'cubic-bezier(0.85, 0, 0.15, 1)'
    })
    
});


registerbtn.addEventListener("click",function ()
{   
    btn.animate([
        {left:'0px'}
    ],{
        duration:250,
        fill:'both',
        easing:'cubic-bezier(0.85, 0, 0.15, 1)'
    });

    login.style.cssText = "display:none;";
    register.style.cssText = "display:block;";
    register.animate([
        {
            opacity:"0"
        }
        ,
        {
            opacity:"1"
        }
        
    ],
    {
        duration:250,
        fill:"both",
        easing:'cubic-bezier(0.85, 0, 0.15, 1)'
    })
    
});
