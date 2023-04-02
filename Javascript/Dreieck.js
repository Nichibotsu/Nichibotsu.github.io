
function einsteig()
{
    let a,b,c;
    console.log("text");
    a =parseFloat(document.getElementById("a").value);
    b =parseFloat(document.getElementById("b").value);  
    c =parseFloat(document.getElementById("c").value);
    rechnen(a,b,c)
        
    
}

function rechnen(a,b,c){

    var alpha,beta,gamma;
    //Eingabe
    alpha=Math.acos((Math.pow(b,2)+Math.pow(c,2)-Math.pow(a,2))/(2*b*c))*(180/Math.PI);
    beta=Math.acos(((c*c)+(a*a)-(b*b))/(2*c*a))*(180/Math.PI);
    gamma=Math.acos(((a*a)+(b*b)-(c*c))/(2*a*b))*(180/Math.PI);

    //Runden
    alpha=alpha.toFixed(2);
    beta=beta.toFixed(2);
    gamma=gamma.toFixed(2);

    //Output
    document.getElementById("alpha").innerText="Alpha= "+alpha+"°";
    document.getElementById("beta").innerText="Beta= "+beta+"°";
    document.getElementById("gamma").innerText="Gamma= "+gamma+"°";


    
    

}
