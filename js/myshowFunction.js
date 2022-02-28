function myshowFunction() {
    var checkBoxRum = document.getElementById("InRum");
    var checkBoxVodka = document.getElementById("InVodka");
    var checkBoxTequila = document.getElementById("InTequila");
    var checkBoxTrojkaGrün = document.getElementById("InTrojkaGrün");
    var checkBoxTrojkaRot = document.getElementById("InTrojkaRot");
    var checkBoxPassoa = document.getElementById("InPassoa");
    var checkBoxMalibu = document.getElementById("InMalibu");
    var checkBoxJägermeister = document.getElementById("InJägermeister");
    var checkBoxCaptainMorgan = document.getElementById("InCaptainMorgan");
    var checkBoxGin = document.getElementById("InGin");
    var checkBoxProsecco = document.getElementById("InProsecco");
    var checkBoxChampagner = document.getElementById("InChampagner");
    var checkBoxWhiskey = document.getElementById("InWhiskey");
    var checkBoxTripleSec = document.getElementById("InTripleSec");
    var checkBoxCampari = document.getElementById("InCampari");
    var checkBoxGrandMarnier = document.getElementById("InGrandMarnier");

    var checkBoxCitro = document.getElementById("InCitro");
    var checkBoxCola = document.getElementById("InCola");
    var checkBoxEnergydrink = document.getElementById("InEnergydrink");
    var checkBoxGingerAle = document.getElementById("InGingerAle");
    var checkBoxTonicWater = document.getElementById("InTonicWater");

    var checkBoxHolunderblütensirup = document.getElementById("InHolunderblütensirup");
    var checkBoxGrenadinesirup = document.getElementById("InGrenadinesirup");
    var checkBoxHimbeersirup = document.getElementById("InHimbeersirup");

    var checkBoxOrangensaft = document.getElementById("InOrangensaft");
    var checkBoxPassionsfruchtsaft = document.getElementById("InPassionsfruchtsaft");
    var checkBoxZitronensaft = document.getElementById("InZitronensaft");
    var checkBoxAnanassaft = document.getElementById("InAnanassaft");
    var checkBoxKokosnussmilch = document.getElementById("InKokosnussmilch");
    var checkBoxLimettensaft = document.getElementById("InLimettensaft");

    


    
    var sectionPinaColada = document.getElementById("PinaColada-Box");
    var sectionMojito = document.getElementById("Mojito-Box");
    var sectionVirginMojito = document.getElementById("VirginMojito-Box");
    var sectionCaipiroska = document.getElementById("Caipiroska-Box");
    var sectionGinFizz = document.getElementById("GinFizz-Box");
    var sectionGinTonic = document.getElementById("GinTonic-Box");
    var sectionAperolSpritz = document.getElementById("AperolSpritz-Box");
    var sectionCloverClub = document.getElementById("CloverClub-Box");
    var sectionFrench75 = document.getElementById("French75-Box");
    var sectionPassionfruitMojito = document.getElementById("PassionfruitMojito-Box");
    var sectionPassoaFresh = document.getElementById("PassoaFresh-Box");
    var sectionGingerFlame = document.getElementById("GingerFlame-Box");
    var sectionGreenLemon = document.getElementById("GreenLemon-Box");
    var sectionCaipigreeshka = document.getElementById("Caipigreeshka-Box");
    var sectionGreenUp = document.getElementById("GreenUp-Box");
    var sectionGummibärliRot = document.getElementById("GummibärliRot-Box");
    var sectionGummibärliGrün = document.getElementById("GummibärliGrün-Box");
    var sectionTrojkaSunrise = document.getElementById("TrojkaSunrise-Box");
    var sectionJägermeisterMule = document.getElementById("JägermeisterMule-Box");
    var sectionCaliforniaSurfer = document.getElementById("CaliforniaSurfer-Box");
    var sectionBedOfRoses = document.getElementById("BedOfRoses-Box");
    var sectionColt45 = document.getElementById("Colt45-Box");
    var sectionCubaLibre = document.getElementById("CubaLibre-Box");
    var sectionCaptainGinger = document.getElementById("CaptainGinger-Box");
    var sectionHugo = document.getElementById("Hugo-Box");
    var sectionTequilaSunrise = document.getElementById("TequilaSunrise-Box");
    var sectionWhiteDragon = document.getElementById("WhiteDragon-Box");
    var sectionMargarita = document.getElementById("Margarita-Box");
    var sectionStrawberryMargarita = document.getElementById("StrawberryMargarita-Box");
    var sectionWhiskeySour = document.getElementById("WhiskeySour-Box");
    var sectionWhiskeyGingerAle = document.getElementById("WhiskeyGingerAle-Box");
    var sectionWhiskeyCola = document.getElementById("WhiskeyCola-Box");
    var sectionLongIslandIcedTea = document.getElementById("LongIslandIcedTea-Box");
    var sectionCampariSpritz = document.getElementById("CampariSpritz-Box");
    var sectionJungleBird = document.getElementById("JungleBird-Box");
    var sectionGrandMarnierTonic = document.getElementById("GrandMarnierTonic-Box");
    var sectionGrandMarnieralOrange = document.getElementById("GrandMarnieralOrange-Box");

    var sectionDefault = document.getElementById("Default-Box");



    // initialisieren - Boxen der letzten Auswahl ausblenden

    sectionPinaColada.style.display = "none";
    sectionMojito.style.display = "none";
    sectionVirginMojito.style.display = "none";
    sectionCaipiroska.style.display = "none";
    sectionGinFizz.style.display = "none";
    sectionGinTonic.style.display = "none";
    sectionAperolSpritz.style.display = "none";
    sectionCloverClub.style.display = "none";
    sectionFrench75.style.display = "none";
    sectionPassionfruitMojito.style.display = "none";
    sectionPassoaFresh.style.display = "none";
    sectionGingerFlame.style.display = "none";
    sectionGreenLemon.style.display = "none";
    sectionCaipigreeshka.style.display = "none";
    sectionGreenUp.style.display = "none";
    sectionGummibärliRot.style.display = "none";
    sectionGummibärliGrün.style.display = "none";
    sectionTrojkaSunrise.style.display = "none";
    sectionJägermeisterMule.style.display = "none";
    sectionCaliforniaSurfer.style.display = "none";
    sectionBedOfRoses.style.display = "none";
    sectionColt45.style.display = "none";
    sectionCubaLibre.style.display = "none";
    sectionCaptainGinger.style.display = "none";
    sectionHugo.style.display = "none";
    sectionTequilaSunrise.style.display = "none";
    sectionWhiteDragon.style.display = "none";
    sectionMargarita.style.display = "none";
    sectionStrawberryMargarita.style.display = "none";
    sectionWhiskeySour.style.display = "none";
    sectionWhiskeyGingerAle.style.display = "none";
    sectionWhiskeyCola.style.display = "none";
    sectionLongIslandIcedTea.style.display = "none";
    sectionCampariSpritz.style.display = "none";
    sectionJungleBird.style.display = "none";
    sectionGrandMarnierTonic.style.display = "none";
    sectionGrandMarnieralOrange.style.display = "none";
    
    sectionDefault.style.display = "none";



    // Rum, Tequila, Gin, Vodka, Triple Sec ist  "checked"
    if (((((checkBoxRum.checked == true)&& (checkBoxTequila.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxVodka.checked == true)&& (checkBoxTripleSec.checked == true))))){
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

     // Rum, Campari, Ananassaft, Limettensaft ist  "checked"
     if ((((checkBoxRum.checked == true)&& (checkBoxCampari.checked == true)&& (checkBoxAnanassaft.checked == true)&& (checkBoxLimettensaft.checked == true)))){
      sectionJungleBird.style.display = "block";
    } else {
      function myinitialFunction() {

    }
    }

    // Rum, Tequila ist  "checked"
    if ((checkBoxRum.checked == true)&& (checkBoxTequila.checked == true)) {
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {    
    }
    }

    // Rum, Gin ist  "checked"
    if ((checkBoxRum.checked == true)&& (checkBoxGin.checked == true)) {
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {    
    }
    }




    // Rum, Vodka ist  "checked"
    if ((checkBoxRum.checked == true)&& (checkBoxVodka.checked == true)) {
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {    
    }
    }

    // Rum, TripleSec ist  "checked"
    if ((checkBoxRum.checked == true)&& (checkBoxTripleSec.checked == true)) {
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {    
    }
    }

    // Vodka, Tequila ist  "checked"
    if ((checkBoxVodka.checked == true)&& (checkBoxTequila.checked == true)) {
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {    
    }
    }

    // Vodka, Gin ist  "checked"
    if ((checkBoxVodka.checked == true)&& (checkBoxGin.checked == true)) {
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {    
    }
    }

    // Vodka, TripleSec ist  "checked"
    if ((checkBoxVodka.checked == true)&& (checkBoxTripleSec.checked == true)) {
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {    
    }
    }


    // Gin, Tequila ist  "checked"
    if ((checkBoxGin.checked == true)&& (checkBoxTequila.checked == true)) {
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {    
    }
    }




    // Rum, Ananassaft ist  "checked"
    if ((checkBoxRum.checked == true)&& (checkBoxAnanassaft.checked == true)) {
      sectionPinaColada.style.display = "block";
      sectionJungleBird.style.display = "block";
    } else {
      function myinitialFunction() {    
    }
    }


    // Rum, Kokosnussmilch ist  "checked"
    if ((checkBoxRum.checked == true)&& (checkBoxKokosnussmilch.checked == true)) {
      sectionPinaColada.style.display = "block";
    } else {
      function myinitialFunction() {    
    }
    }



    // Rum, Limettensaft ist  "checked"
    if ((checkBoxRum.checked == true)&& (checkBoxLimettensaft.checked == true)) {
      sectionMojito.style.display = "block";
      sectionPassionfruitMojito.style.display = "block";
      sectionJungleBird.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }

    // GingerAle, Limettensaft ist  "checked"
    if ((checkBoxGingerAle.checked == true)&& (checkBoxLimettensaft.checked == true)) {
      sectionVirginMojito.style.display = "block";
    } else {
      function myinitialFunction() { 
    }
    }

    // Rum, Passoa  ist  "checked"
    if ((checkBoxRum.checked == true)&& (checkBoxPassoa.checked == true)) {
      sectionPassionfruitMojito.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }

    // Rum, Campari ist  "checked"
    if ((checkBoxRum.checked == true)&& (checkBoxCampari.checked == true)) {
      sectionJungleBird.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Vodka, Limettensaft  ist  "checked"
    if ((checkBoxVodka.checked == true)&& (checkBoxLimettensaft.checked == true)) {
      sectionCaipiroska.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }
  
   
    // Gin, Zitronensaft, Himbeersirup ist  "checked"
    if (((checkBoxGin.checked == true)&& (checkBoxZitronensaft.checked == true)&& (checkBoxHimbeersirup.checked == true))) {
      sectionCloverClub.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }



    // Gin, Zitronensaft  ist  "checked"
    if ((checkBoxGin.checked == true)&& (checkBoxZitronensaft.checked == true)) {
      sectionGinFizz.style.display = "block";
      sectionCloverClub.style.display = "block";
      sectionFrench75.style.display = "block";
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction(){   
    }
    }


    // Gin, TonicWater  ist  "checked"
    if ((checkBoxGin.checked == true)&& (checkBoxTonicWater.checked == true)) {
      sectionGinTonic.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Gin, Jägermeister, Energydrink ist  "checked"
    if (((checkBoxGin.checked == true)&& (checkBoxJägermeister.checked == true)&& (checkBoxEnergydrink.checked == true))) {
      sectionColt45.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }



    // Gin, Jägermeister  ist  "checked"
    if ((checkBoxGin.checked == true)&& (checkBoxJägermeister.checked == true)) {
      sectionColt45.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Gin, Energydrink  ist  "checked"
    if ((checkBoxGin.checked == true)&& (checkBoxEnergydrink.checked == true)) {
      sectionColt45.style.display = "block";
    } else {
      function myinitialFunction()  {  
    }
    }

    // Jägermeister, Energydrink  ist  "checked"
    if ((checkBoxJägermeister.checked == true)&& (checkBoxEnergydrink.checked == true)) {
      sectionColt45.style.display = "block";
    } else {
      function myinitialFunction()  {  
    }
    }
    

    // Passoa, TonicWater  ist  "checked"
    if ((checkBoxPassoa.checked == true)&& (checkBoxTonicWater.checked == true)) {
      sectionPassoaFresh.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }

    // Passoa, Passionsfruchtsaft  ist  "checked"
    if ((checkBoxPassoa.checked == true)&& (checkBoxPassionsfruchtsaft.checked == true)) {
      sectionPassionfruitMojito.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }



    // TrojkaRot, GingerAle  ist  "checked"
    if ((checkBoxTrojkaRot.checked == true)&& (checkBoxGingerAle.checked == true)) {
      sectionGingerFlame.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }



    // TrojkaRot, Orangensaft, Grenadinesirup ist  "checked"
    if (((checkBoxTrojkaRot.checked == true)&& (checkBoxOrangensaft.checked == true)&& (checkBoxGrenadinesirup.checked == true))) {
      sectionTrojkaSunrise.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // TrojkaRot, Orangensaft  ist  "checked"
    if ((checkBoxTrojkaRot.checked == true)&& (checkBoxOrangensaft.checked == true)) {
      sectionTrojkaSunrise.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // TrojkaRot, Grenadinesirup  ist  "checked"
    if ((checkBoxTrojkaRot.checked == true)&& (checkBoxGrenadinesirup.checked == true)) {
      sectionTrojkaSunrise.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Orangensaft, Grenadinesirup ist "checked"
    if ((checkBoxOrangensaft.checked == true)&& (checkBoxGrenadinesirup.checked == true)) {
      sectionTrojkaSunrise.style.display = "block";
      sectionTequilaSunrise.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // TrojkaRot, Energydrink ist "checked"
    if ((checkBoxTrojkaRot.checked == true)&& (checkBoxEnergydrink.checked == true)) {
      sectionGummibärliRot.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // TrojkaGrün, Citro ist "checked"
    if ((checkBoxTrojkaGrün.checked == true)&& (checkBoxCitro.checked == true)) {
      sectionGreenLemon.style.display = "block";
    } else {
      function myinitialFunction(){   
    }
    }

    // TrojkaGrün, Limettensaft ist "checked"
    if ((checkBoxTrojkaGrün.checked == true)&& (checkBoxLimettensaft.checked == true)) {
      sectionCaipigreeshka.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }

    // TrojkaGrün, TonicWater ist "checked"
    if ((checkBoxTrojkaGrün.checked == true)&& (checkBoxTonicWater.checked == true)) {
      sectionGreenUp.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }

    // TrojkaGrün, Energydrink ist "checked"
    if ((checkBoxTrojkaGrün.checked == true)&& (checkBoxEnergydrink.checked == true)) {
      sectionGummibärliGrün.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }



    // Jägermeister, GingerAle ist "checked"
    if ((checkBoxJägermeister.checked == true)&& (checkBoxGingerAle.checked == true)) {
      sectionJägermeisterMule.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Jägermeister, Malibu, Ananassaft ist "checked"
    if (((checkBoxJägermeister.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxAnanassaft.checked == true))) {
      sectionCaliforniaSurfer.style.display = "block";
    } else {
      function myinitialFunction() {    
    }
    }


    // Jägermeister, Malibu ist "checked"
    if ((checkBoxJägermeister.checked == true)&& (checkBoxMalibu.checked == true)) {
      sectionCaliforniaSurfer.style.display = "block";
    } else {
      function myinitialFunction() {    
    }
    }


     // Jägermeister, Ananassaft ist "checked"
     if ((checkBoxJägermeister.checked == true)&& (checkBoxAnanassaft.checked == true)) {
      sectionCaliforniaSurfer.style.display = "block";
    } else {
      function myinitialFunction() {     
    }
    }


    // Malibu, Ananassaft ist "checked"
    if ((checkBoxMalibu.checked == true)&& (checkBoxAnanassaft.checked == true)) {
      sectionCaliforniaSurfer.style.display = "block";
    } else {
      function myinitialFunction() {    
    }
    }



    // Jägermeister, Zitronensaft, Grenadinesirup ist "checked"
    if (((checkBoxJägermeister.checked == true)&& (checkBoxZitronensaft.checked == true)&& (checkBoxGrenadinesirup.checked == true))) {
      sectionBedOfRoses.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Jägermeister, Zitronensaft ist "checked"
    if ((checkBoxJägermeister.checked == true)&& (checkBoxZitronensaft.checked == true)) {
      sectionBedOfRoses.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }



    // Jägermeister, Grenadinesirup ist "checked"
    if ((checkBoxJägermeister.checked == true)&& (checkBoxGrenadinesirup.checked == true)) {
      sectionBedOfRoses.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Zitronensaft, Grenadinesirup ist "checked"
    if ((checkBoxZitronensaft.checked == true)&& (checkBoxGrenadinesirup.checked == true)) {
      sectionBedOfRoses.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }



    // CaptainMorgan, Cola ist "checked"
    if ((checkBoxCaptainMorgan.checked == true)&& (checkBoxCola.checked == true)) {
      sectionCubaLibre.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // CaptainMorgan, GingerAle ist "checked"
    if ((checkBoxCaptainMorgan.checked == true)&& (checkBoxGingerAle.checked == true)) {
      sectionCaptainGinger.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Prosecco, Holunderblütensirup ist "checked"
    if ((checkBoxProsecco.checked == true)&& (checkBoxHolunderblütensirup.checked == true)) {
      sectionHugo.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Prosecco, Campari ist "checked"
    if ((checkBoxProsecco.checked == true)&& (checkBoxCampari.checked == true)) {
      sectionCampariSpritz.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Tequila, Orangensaft, Grenadinesirup ist "checked"
    if (((checkBoxTequila.checked == true)&& (checkBoxOrangensaft.checked == true)&& (checkBoxGrenadinesirup))) {
      sectionTequilaSunrise.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Tequila, Orangensaft ist "checked"
    if ((checkBoxTequila.checked == true)&& (checkBoxOrangensaft.checked == true)) {
      sectionTequilaSunrise.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Tequila, Grenadinesirup ist "checked"
    if ((checkBoxTequila.checked == true)&& (checkBoxGrenadinesirup.checked == true)) {
      sectionTequilaSunrise.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Tequila, TripleSec, Zitronensaft ist "checked"
    if (((checkBoxTequila.checked == true)&& (checkBoxTripleSec.checked == true)&& (checkBoxZitronensaft))) {
      sectionWhiteDragon.style.display = "block";
      sectionMargarita.style.display = "block";
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }

    // Tequila, TripleSec, Limettensaft ist "checked"
    if (((checkBoxTequila.checked == true)&& (checkBoxTripleSec.checked == true)&& (checkBoxLimettensaft))) {
      sectionStrawberryMargarita.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Tequila, TripleSec ist "checked"
    if ((checkBoxTequila.checked == true)&& (checkBoxTripleSec.checked == true)) {
      sectionWhiteDragon.style.display = "block";
      sectionMargarita.style.display = "block";
      sectionStrawberryMargarita.style.display = "block";
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Tequila, Zitronensaft ist "checked"
    if ((checkBoxTequila.checked == true)&& (checkBoxZitronensaft.checked == true)) {
      sectionWhiteDragon.style.display = "block";
      sectionMargarita.style.display = "block";
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // TripleSec, Zitronensaft ist "checked"
    if ((checkBoxTripleSec.checked == true)&& (checkBoxZitronensaft.checked == true)) {
      sectionWhiteDragon.style.display = "block";
      sectionMargarita.style.display = "block";
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Tequila, Limettensaft ist "checked"
    if ((checkBoxTequila.checked == true)&& (checkBoxLimettensaft.checked == true)) {
      sectionStrawberryMargarita.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }

    // TripleSec, Limettensaft ist "checked"
    if ((checkBoxTripleSec.checked == true)&& (checkBoxLimettensaft.checked == true)) {
      sectionStrawberryMargarita.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Whiskey, Zitronensaft ist "checked"
    if ((checkBoxWhiskey.checked == true)&& (checkBoxZitronensaft.checked == true)) {
      sectionWhiskeySour.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


     // Whiskey, GingerAle ist "checked"
     if ((checkBoxWhiskey.checked == true)&& (checkBoxGingerAle.checked == true)) {
      sectionWhiskeyGingerAle.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }


    // Whiskey, Cola ist "checked"
    if ((checkBoxWhiskey.checked == true)&& (checkBoxCola.checked == true)) {
      sectionWhiskeyCola.style.display = "block";
    } else {
      function myinitialFunction() {    
    }
    }


    // GrandMarnier, TonicWater ist  "checked"
    if ((checkBoxGrandMarnier.checked == true)&& (checkBoxTonicWater.checked == true)) {
      sectionGrandMarnierTonic.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }

    // GrandMarnier, Champagner, Orangensaft ist  "checked"
    if (((checkBoxGrandMarnier.checked == true)&& (checkBoxTonicWater.checked == true)&& (checkBoxOrangensaft.checked == true))) {
      sectionGrandMarnieralOrange.style.display = "block";
    } else {
      function myinitialFunction() {    
    }
    }

    // GrandMarnier, Champagner ist  "checked"
    if ((checkBoxGrandMarnier.checked == true)&& (checkBoxChampagner.checked == true)) {
      sectionGrandMarnieralOrange.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }

    // GrandMarnier, Orangensaft ist  "checked"
    if ((checkBoxGrandMarnier.checked == true)&& (checkBoxOrangensaft.checked == true)) {
      sectionGrandMarnieralOrange.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }

    // Champagner, Orangensaft ist  "checked"
    if ((checkBoxChampagner.checked == true)&& (checkBoxOrangensaft.checked == true)) {
      sectionGrandMarnieralOrange.style.display = "block";
    } else {
      function myinitialFunction() {   
    }
    }



    // Rum ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionPinaColada.style.display = "block";
      sectionMojito.style.display = "block";
      sectionPassionfruitMojito.style.display = "block";
      sectionLongIslandIcedTea.style.display = "block";
      sectionJungleBird.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Vodka ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxVodka.checked == true)&& (checkBoxRum.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionCaipiroska.style.display = "block";
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() { 
    }
    }


    // Tequila ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxTequila.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionTequilaSunrise.style.display = "block";
      sectionWhiteDragon.style.display = "block";
      sectionMargarita.style.display = "block";
      sectionStrawberryMargarita.style.display = "block";
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {  
    }
    }


    // TrojkaGrün ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxTrojkaGrün.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionGreenLemon.style.display = "block";
      sectionCaipigreeshka.style.display = "block";
      sectionGreenUp.style.display = "block";
      sectionGummibärliGrün.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // TrojkaRot ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxTrojkaRot.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionGingerFlame.style.display = "block";
      sectionGummibärliRot.style.display = "block";
      sectionTrojkaSunrise.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Passoa ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxPassoa.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionPassionfruitMojito.style.display = "block";
      sectionPassoaFresh.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxMalibu.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionCaliforniaSurfer.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxJägermeister.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionJägermeisterMule.style.display = "block";
      sectionCaliforniaSurfer.style.display = "block";
      sectionBedOfRoses.style.display = "block";
      sectionColt45.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    
    // CaptainMorgan ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxCaptainMorgan.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionCubaLibre.style.display = "block";
      sectionCaptainGinger.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Gin ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxGin.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionGinFizz.style.display = "block";
      sectionGinTonic.style.display = "block";
      sectionCloverClub.style.display = "block";
      sectionFrench75.style.display = "block";
      sectionColt45.style.display = "block";
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Prosecco ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxProsecco.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionAperolSpritz.style.display = "block";
      sectionHugo.style.display = "block";
      sectionCampariSpritz.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxChampagner.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionGrandMarnieralOrange.style.display = "block";
      sectionFrench75.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Whiskey ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxWhiskey.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionWhiskeySour.style.display = "block";
      sectionWhiskeyGingerAle.style.display = "block";
      sectionWhiskeyCola.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // TripleSec ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxTripleSec.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionWhiteDragon.style.display = "block";
      sectionMargarita.style.display = "block";
      sectionStrawberryMargarita.style.display = "block";
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Campari ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxCampari.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionCampariSpritz.style.display = "block";
      sectionJungleBird.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // GrandMarnier ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxGrandMarnier.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionGrandMarnierTonic.style.display = "block";
      sectionGrandMarnieralOrange.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }




    // Citro ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxCitro.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionGreenLemon.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Cola ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxCola.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionCubaLibre.style.display = "block";
      sectionWhiskeyCola.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Energydrink ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxEnergydrink.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionGummibärliRot.style.display = "block";
      sectionGummibärliGrün.style.display = "block";
      sectionColt45.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // GingerAle ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxGingerAle.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionVirginMojito.style.display = "block";
      sectionGingerFlame.style.display = "block";
      sectionJägermeisterMule.style.display = "block";
      sectionCaptainGinger.style.display = "block";
      sectionWhiskeyGingerAle.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // TonicWater ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxTonicWater.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionGinTonic.style.display = "block";
      sectionPassoaFresh.style.display = "block";
      sectionGreenUp.style.display = "block";
      sectionGrandMarnierTonic.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Holunderblütensirup ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxHolunderblütensirup.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionHugo.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Grenadinesirup ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxGrenadinesirup.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionTrojkaSunrise.style.display = "block";
      sectionBedOfRoses.style.display = "block";
      sectionTequilaSunrise.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Himbeersirup ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxHimbeersirup.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionCloverClub.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }
  
    // Orangensaft ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxOrangensaft.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionTrojkaSunrise.style.display = "block";
      sectionTequilaSunrise.style.display = "block";
      sectionGrandMarnieralOrange.style.display = "block";
    } else {
      function myinitialFunction() {
      }
  
    }


    // Passionsfruchtsaft ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxPassionsfruchtsaft.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionPassionfruitMojito.style.display = "block";
    } else {
      function myinitialFunction() {
      }
  
    }


     // Zitronensaft ist "checked"
     if ((((((((((((((((((((((((((((((checkBoxZitronensaft.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionGinFizz.style.display = "block";
      sectionCloverClub.style.display = "block";
      sectionFrench75.style.display = "block";
      sectionBedOfRoses.style.display = "block";
      sectionWhiteDragon.style.display = "block";
      sectionMargarita.style.display = "block";
      sectionWhiskeySour.style.display = "block";
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Ananassaft ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxAnanassaft.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionPinaColada.style.display = "block";
      sectionCaliforniaSurfer.style.display = "block";
      sectionJungleBird.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Kokosnussmilch ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxKokosnussmilch.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxRum.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionPinaColada.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Limettensaft ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxLimettensaft.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxRum.checked == false)))))))))))))))))))))))))))))){
      sectionMojito.style.display = "block";
      sectionVirginMojito.style.display = "block";
      sectionCaipiroska.style.display = "block";
      sectionPassionfruitMojito.style.display = "block";
      sectionCaipigreeshka.style.display = "block";
      sectionJägermeisterMule.style.display = "block";
      sectionStrawberryMargarita.style.display = "block";
      sectionJungleBird.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }





    // Nothing ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaGrün ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaRot ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Rum, TrojkaGrün, TrojkaRot ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaGrün, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaRot, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaGrün, TrojkaRot, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaGrün, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaRot, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaGrün, TrojkaRot, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, TrojkaGrün, TrojkaRot, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, TrojkaGrün, TrojkaRot, ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, TrojkaGrün, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, TrojkaRot, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, TrojkaGrün ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, TrojkaRot ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }
    
    // Passoa, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaGrün, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, CaptainMorgan ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, CaptainMorgan, TrojkaGrün ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CaptainMorgan, TrojkaGrün ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, CaptainMorgan, TrojkaRot ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CaptainMorgan, TrojkaRot ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CaptainMorgan, TrojkaRot, TrojkaGrün ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CaptainMorgan, TrojkaGrün, TrojkaRot, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaGrün, TrojkaRot, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, CaptainMorgan, TrojkaGrün, TrojkaRot, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CaptainMorgan, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CaptainMorgan, Jägermeister, TrojkaGrün ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CaptainMorgan, Jägermeister, TrojkaRot ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }
    

    // CaptainMorgan, TrojkaRot, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CaptainMorgan, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, CaptainMorgan, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaRot, CaptainMorgan, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaRot, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaRot, CaptainMorgan, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaRot, CaptainMorgan, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Tequila, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaRot, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Tequila, TrojkaRot, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, Passoa, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, Passoa, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Tequila, Passoa, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, Passoa, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Vodka, TrojkaRot, Passoa, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaRot, Passoa, Malibu, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Malibu, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Jägermeister, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Gin, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Prosecco, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Champagner, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }
    
    // Whiskey, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == true)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TripleSec, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == true)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Campari, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == true)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // GrandMarnier, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Cola, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Energydrink, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == true)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // GingerAle, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == true)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TonicWater, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == true)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Holunderblütensirup, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == true)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Grenadinesirup, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == true)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Himbeersirup, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == true)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Orangensaft, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == true)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passionsfruchtsaft, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == true)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Zitronensaft, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == true)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Ananassaft, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == true)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Kokosnussmilch, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == true)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Limettensaft, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == true)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Tequila, Campari, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == true)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, Jägermeister, CaptainMorgan  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, Malibu, CaptainMorgan  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaGrün, TrojkaRot, Malibu, CaptainMorgan  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaGrün, TrojkaRot, Malibu, CaptainMorgan, Prosecco  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }
    

    // Rum, TrojkaRot, Malibu, CaptainMorgan, Prosecco  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Rum, TrojkaGrün, Malibu, CaptainMorgan, Prosecco  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

     // Rum, TrojkaGrün, TrojkaRot, Malibu, CaptainMorgan, Prosecco, Champagner ist "checked"
     if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaGrün, TrojkaRot, Malibu, CaptainMorgan, Prosecco, Champagner, Whiskey ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == true)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaGrün, TrojkaRot, Malibu, CaptainMorgan, Prosecco, Whiskey, GrandMarnier ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == true)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == true)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaRot  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaGrün  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaRot, TrojkaGrün  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, TrojkaGrün  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, Passoa ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Tequila, Passoa ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Tequila, Passoa, TrojkaGrün ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Tequila, Passoa, TrojkaGrün, TrojkaRot ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Tequila, Passoa, TrojkaRot ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }



    // Vodka, Passoa, TrojkaRot ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, Passoa, TrojkaRot, TrojkaGrün ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, Passoa, TrojkaGrün ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, Passoa, TrojkaRot, TrojkaGrün, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaRot, TrojkaGrün, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Vodka, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, CaptainMorgan ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, Prosecco ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, Whiskey ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == true)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, Campari ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == true)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, GrandMarnier ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == true)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaRot, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaGrün, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // TrojkaRot, TrojkaGrün, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Vodka, TrojkaRot, TrojkaGrün, Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaGrün, Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaRot, Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, TrojkaGrün, Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // TrojkaGrün, Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // TrojkaRot, Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaGrün, TrojkaRot, Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

     // TrojkaRot, TrojkaGrün, Champagner, Whiskey ist "checked"
     if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == true)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaRot, TrojkaGrün, Champagner, Whiskey ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == true)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaRot, TrojkaGrün, Champagner, Whiskey ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == true)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaRot, TrojkaGrün, Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaRot, TrojkaGrün, Whiskey ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == true)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, TrojkaRot, TrojkaGrün, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, TrojkaGrün, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, TrojkaRot, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaGrün, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Tequila, TrojkaRot, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

     // Tequila, TrojkaGrün, Malibu ist "checked"
     if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Tequila, TrojkaGrün, TrojkaRot, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Tequila, TrojkaGrün, TrojkaRot, Malibu, Passoa ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    
    // TrojkaRot, TrojkaGrün, Gin ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, TrojkaGrün, Gin, CaptainMorgan ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // TrojkaGrün, Gin ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, Gin ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, Gin ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Malibu, Gin ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CaptainMorgan, Gin ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, TrojkaGrün, Gin, Passoa ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, TrojkaGrün, Gin, Passoa, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, TrojkaGrün, Gin, Passoa, Malibu, CaptainMorgan ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, TrojkaGrün, Gin, Passoa, CaptainMorgan ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, TrojkaGrün, Gin, Malibu, CaptainMorgan ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, Gin, Malibu, CaptainMorgan ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaGrün, Gin, Malibu, CaptainMorgan ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, Gin, Passoa, Malibu, CaptainMorgan ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaGrün, Gin, Passoa, Malibu, CaptainMorgan ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaRot, Passoa, Citro, Jägermeister  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, Malibu, Vodka ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, Malibu, Tequila ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

     // Passoa, Malibu, CapainMorgan ist "checked"
     if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, Malibu, Gin ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, Malibu, CapainMorgan, Gin ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, Malibu, CapainMorgan, Gin, Prosecco ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, Malibu, CapainMorgan, Prosecco ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, Malibu, Prosecco ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, Malibu, Prosecco, Gin ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, CapainMorgan, Gin, Prosecco ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, CapainMorgan, Gin, Prosecco, Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, CapainMorgan, Gin, Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, CapainMorgan, Prosecco, Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, Gin, Prosecco, Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CapainMorgan, Gin, Prosecco, Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, CapainMorgan, Gin, Prosecco, Champagner, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, CapainMorgan, Prosecco, Champagner, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, CapainMorgan, Prosecco, Champagner, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CapainMorgan, Prosecco, Champagner, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Prosecco, Champagner, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Champagner, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Prosecco, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Prosecco, Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Prosecco, Champagner, Malibu, Passoa ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Prosecco, Champagner, Passoa ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Champagner, Malibu, Passoa ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Prosecco, Passoa ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Prosecco, Passoa, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Prosecco, Jägermeister ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Prosecco, Jägermeister, Champagner ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Prosecco, Jägermeister, Champagner, CaptainMorgan ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Jägermeister, Champagner, CaptainMorgan ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Prosecco, Jägermeister, CaptainMorgan ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CapainMorgan, Gin, Prosecco, Champagner, TrojkaRot ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CapainMorgan, Gin, Prosecco, Champagner, TrojkaRot, TrojkaGrün ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CapainMorgan, Gin, Prosecco, TrojkaRot, TrojkaGrün ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CapainMorgan, Gin, Champagner, TrojkaRot, TrojkaGrün ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CapainMorgan, Gin, Prosecco, Champagner, TrojkaRot, TrojkaGrün, Passoa ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CapainMorgan, Gin, Prosecco, Champagner, TrojkaRot, TrojkaGrün, Passoa, Malibu ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CaptainMorgan, TrojkaRot, TonicWater  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == true)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // CaptainMorgan, Citro, Energydrink  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == true)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, CaptainMorgan, Citro, Energydrink  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == true)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaRot, CaptainMorgan, Citro, Tonicwater  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == true)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaRot, Citro , Cola ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaRot, Cola ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, TrojkaRot, CaptainMorgan, Citro, Tonicwater ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == true)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == true)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, Cola ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Vodka, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Tequila, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaRot, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaRot, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Tequila, TrojkaRot, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Tequila, TrojkaRot, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked ==true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passoa, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, Passoa, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Rum, Passoa, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, Passoa, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, Passoa, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }
    

    // Tequila, Passoa, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Tequila, Passoa, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, Passoa, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, Passoa, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaGrün, Passoa, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaGrün, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Vodka, TrojkaRot, Passoa, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaRot, Passoa, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaRot, Passoa, Malibu, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Vodka, TrojkaRot, Passoa, Malibu, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Malibu, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Malibu, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Malibu, Cola, TrojkaGrün  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == true)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Jägermeister, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Jägermeister, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Jägermeister, Cola, TrojkaGrün  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Jägermeister, Cola, TrojkaGrün, Passoa  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == true)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Gin, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Gin, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Gin, Cola, TrojkaGrün ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Gin, Cola, TrojkaGrün, TrojkaRot ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Cola, TrojkaGrün, TrojkaRot ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Gin, Cola, TrojkaRot ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }
    

    // Gin, Cola, TrojkaGrün, TrojkaRot, Passoa ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Cola, TrojkaGrün, TrojkaRot, Passoa ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Gin, Cola, TrojkaGrün, Passoa ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == true)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Gin, Cola, TrojkaRot, Passoa ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Gin, Cola, TrojkaRot, Passoa, Citro ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Gin, TrojkaRot, Passoa, Citro ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Gin, Cola, TrojkaRot, Citro ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Gin, TrojkaRot, Citro ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == true)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Cola, TrojkaRot, Passoa ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Cola, TrojkaRot, Passoa, Citro ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TrojkaRot, Passoa, Citro ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == true)&& (checkBoxPassoa.checked == true)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Prosecco, Citro  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Prosecco, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Prosecco, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == true)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Champagner, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Champagner, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == true)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }
    

    // TripleSec, Citro, Cola ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == true)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TripleSec, Cola ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == true)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Campari, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == true)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Campari, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == true)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // GrandMarnier, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == true)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // GrandMarnier, Citro,  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == true)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // GrandMarnier, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == true)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    

    // Cola, Citro, Energydrink  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == true)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Cola, Energydrink  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == true)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Energydrink, Citro, Rum  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == false)&& (checkBoxEnergydrink.checked == true)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // GingerAle, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == true)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // GingerAle, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == true)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TonicWater, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == true)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // TonicWater, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == true)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Holunderblütensirup, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == true)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Holunderblütensirup, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == true)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Grenadinesirup, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == true)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Grenadinesirup, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == true)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Himbeersirup, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == true)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Himbeersirup, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == true)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Orangensaft, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == true)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Orangensaft, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == true)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passionsfruchtsaft, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == true)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Passionsfruchtsaft, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == true)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Zitronensaft, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == true)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Zitronensaft, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == true)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Ananassaft, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == true)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Ananassaft, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == true)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Kokosnussmilch, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == true)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Kokosnussmilch, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == true)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Limettensaft, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == true)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Limettensaft, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == false)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == true)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Tequila, Campari, Citro, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == true)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == true)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Tequila, Campari, Cola  ist "checked"
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTequila.checked == true)&& (checkBoxTrojkaGrün.checked == false)&& (checkBoxTrojkaRot.checked == false)&& (checkBoxPassoa.checked == false)&& (checkBoxMalibu.checked == false)&& (checkBoxJägermeister.checked == false)&& (checkBoxCaptainMorgan.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxProsecco.checked == false)&& (checkBoxChampagner.checked == false)&& (checkBoxWhiskey.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxCampari.checked == true)&& (checkBoxGrandMarnier.checked == false)&& (checkBoxCitro.checked == false)&& (checkBoxCola.checked == true)&& (checkBoxEnergydrink.checked == false)&& (checkBoxGingerAle.checked == false)&& (checkBoxTonicWater.checked == false)&& (checkBoxHolunderblütensirup.checked == false)&& (checkBoxGrenadinesirup.checked == false)&& (checkBoxHimbeersirup.checked == false)&& (checkBoxOrangensaft.checked == false)&& (checkBoxPassionsfruchtsaft.checked == false)&& (checkBoxZitronensaft.checked == false)&& (checkBoxAnanassaft.checked == false)&& (checkBoxKokosnussmilch.checked == false)&& (checkBoxLimettensaft.checked == false)))))))))))))))))))))))))))))){
      sectionDefault.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }



  



  }











  