import express from "express";

import connection from "../config/connectDB";





let router = express.Router();



let initWebRouters = (app) => {
  
  router.get("/", (req,res)=>{
    res.render("index.ejs");
  });
  

  router.get("/days",(req,res)=>{

    var my_answer_array =[];

    const days = [

      "pazartesi",
      "salı",
      "çarşamba",
      "perşembe",
      "Cuma",
      "Cumartesi",
      "Pazar"

    ]

    const month_days=[
      31,//ocak
      28,//şubat
      31,//mart
      30,//nisan
      31,//mayıs
      30,//haziran
      31,//temmuz
      31,//ağustos
      30,//eylül
      31,//ekim
      30,//kasım
      31//aralık
    ]

    const months = [

      "ocak",
      "şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık"

    ]
    // 1.ocak.1980’ de salı
    // ayın 1.günü salı olan aylar
    
    var muted=true;
    var start_year = 1980;
    var last_year = 2022;
    my_answer_array.push("1 Ocak 1980");
    var days_count = 0;
    while(start_year != 2023){

      if(start_year == 1980){
          muted = false;
      }
     
      for(var i=0;i<months.length;i++){
        
        if(muted == false && months[i] == "ocak"){
          days_count+=31;
          muted=true
          
        }else{
          var value = days_count%7;
          value+=1;
          if(value >= 7){
            value = 0;
          }
          var gun = days[value];
          if(gun == "salı"){
            my_answer_array.push("1 "+months[i]+" "+gun+" "+start_year);
          }
          //console.log(gun);
          
          if(months[i] == "şubat"){
            if(start_year %4 == 0){
              days_count+=29;
            }
            
          }
          else{
            
            days_count += month_days[i];
          }
        }
        
        
      }
      start_year+=1;
      
    }

   
    

    res.json({
      "days":my_answer_array
    })


  })
  
  

  router.get('*', function(req, res){
    res.status(404).render("404page.ejs");
  });


  return app.use("/", router);
}

module.exports = initWebRouters;
