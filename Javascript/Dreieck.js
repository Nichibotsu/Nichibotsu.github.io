
function einsteig()
{
    let a,b,c;
    console.log("text");
    a =parseFloat(document.getElementById("a").value);
    b =parseFloat(document.getElementById("b").value);  
    c =parseFloat(document.getElementById("c").value);
    
    rechnen(a,b,c) 
    
}

function zeichnen(a,b,c,gamma,alpha,beta){

    var a_r=a*1;
    var b_r=b*1;
    var c_r=c*1;
    const canvas=document.querySelector('canvas');
    var beta_m=Math.tan(beta);
    var aplpha_m=Math.tan(alpha);
    var gamma_m=Math.tan(gamma);

    canvas.width=600;
    canvas.height=600;
    const ctx=canvas.getContext('2d');
    ctx.translate(300,300);

    ctx.strokeStyle='black';
    ctx.lineWidth=3;
    ctx.beginPath();
    ctx.moveTo(0,0);//Point A
    //Point B
    ctx.lineTo(a_r*Math.cos(beta),a_r*Math.sin(beta));
    ctx.lineTo(b_r*Math.cos(gamma),b_r*Math.sin(gamma));
    ctx.lineTo(a_r*Math.cos(beta),a_r*Math.sin(beta));
    //TODO:fix points
    
    ctx.stroke();


}

function rechnen(a,b,c){

    var array=[a,b,c];
    array.sort();
    array.reverse();
    if(array[0]>=array[1]+array[2]){//Gegenbedingung für ein Dreieck
        alert("kein Dreieck");
    }
    else{
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
        zeichnen(a,b,c,gamma,alpha,beta)

    }
    


    
    

}
