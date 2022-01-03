function myOne(){
var data = document.getElementById("container");
 
 form.addEventListener('submit',function(event){
     event.preventDefault()

     tot_cons = document.getElementById("tot_cons").value
     prim_parc = document.getElementById("prim_parc").value
     vlr_lance = document.getElementById("vlr_lance").value
     nv_vlr_parc = document.getElementById("nv_vlr_parc").value
     grupo = document.getElementById("grupo").value    
     segmento = document.getElementById("segmento").value    
     situacao = document.getElementById("situacao").value    
     pz_atual = document.getElementById("pz_atual").value    
     tx_adm = document.getElementById("tx_adm").value    
     atualizacao = document.getElementById("atualizacao").value    

     let array = {
         Total_Contratado: tot_cons,
         Primeira_Parcela: prim_parc,
     }

     console.log(tot_cons,prim_parc,vlr_lance, nv_vlr_parc, grupo, segmento, situacao, pz_atual,tx_adm, atualizacao)
   
     console.table(array)

     let valor = array.Primeira_Parcela

     console.log(valor)

     document.getElementById("grupo").value = valor

     //document.getElementById("form").style.visibility = "hidden";

     
 })
}

