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



    // Rum, Ananassaft ist  "checked"
    if ((checkBoxRum.checked == true)&& (checkBoxAnanassaft.checked == true)) {
      sectionPinaColada.style.display = "block";
      sectionJungleBird.style.display = "block";
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
    if ((checkBoxJägermeister.checked == true)&& (checkBoxMalibu.checked == true)) {
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
    if ((((((((((((((((((((((((((((((checkBoxRum.checked == true)&& (checkBoxTequila.checked == false)&& (checkBoxGin.checked == false)&& (checkBoxVodka.checked == false)&& (checkBoxTripleSec.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (ch&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)&& (checkBoxTequila.checked == false)eckBoxTequila.checked == false)))))))))))))))))))))))))))))){
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
    if (checkBoxVodka.checked == true){
      sectionCaipiroska.style.display = "block";
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() { 
    }
    }


    // Tequila ist "checked"
    if (checkBoxTequila.checked == true){
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
    if (checkBoxTrojkaGrün.checked == true){
      sectionGreenLemon.style.display = "block";
      sectionCaipigreeshka.style.display = "block";
      sectionGreenUp.style.display = "block";
      sectionGummibärliGrün.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // TrojkaRot ist "checked"
    if (checkBoxTrojkaRot.checked == true){
      sectionGingerFlame.style.display = "block";
      sectionGummibärliRot.style.display = "block";
      sectionTrojkaSunrise.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Passoa ist "checked"
    if (checkBoxPassoa.checked == true){
      sectionPassionfruitMojito.style.display = "block";
      sectionPassoaFresh.style.display = "block";
      sectionTrojkaSunrise.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Malibu ist "checked"
    if (checkBoxMalibu.checked == true){
      sectionCaliforniaSurfer.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Jägermeister ist "checked"
    if (checkBoxJägermeister.checked == true){
      sectionJägermeisterMule.style.display = "block";
      sectionCaliforniaSurfer.style.display = "block";
      sectionBedOfRoses.style.display = "block";
      sectionColt45.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    
    // CaptainMorgan ist "checked"
    if (checkBoxCaptainMorgan.checked == true){
      sectionCubaLibre.style.display = "block";
      sectionCaptainGinger.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Gin ist "checked"
    if (checkBoxGin.checked == true){
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
    if (checkBoxProsecco.checked == true){
      sectionAperolSpritz.style.display = "block";
      sectionHugo.style.display = "block";
      sectionCampariSpritz.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Champagner ist "checked"
    if (checkBoxChampagner.checked == true){
      sectionGrandMarnieralOrange.style.display = "block";
      sectionFrench75.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Whiskey ist "checked"
    if (checkBoxWhiskey.checked == true){
      sectionWhiskeySour.style.display = "block";
      sectionWhiskeyGingerAle.style.display = "block";
      sectionWhiskeyCola.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // TripleSec ist "checked"
    if (checkBoxTripleSec.checked == true){
      sectionWhiteDragon.style.display = "block";
      sectionMargarita.style.display = "block";
      sectionStrawberryMargarita.style.display = "block";
      sectionLongIslandIcedTea.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Campari ist "checked"
    if (checkBoxCampari.checked == true){
      sectionCampariSpritz.style.display = "block";
      sectionJungleBird.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // GrandMarnier ist "checked"
    if (checkBoxGrandMarnier.checked == true){
      sectionGrandMarnierTonic.style.display = "block";
      sectionGrandMarnieralOrange.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }




    // Citro ist "checked"
    if (checkBoxCitro.checked == true){
      sectionGreenLemon.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Cola ist "checked"
    if (checkBoxCola.checked == true){
      sectionCubaLibre.style.display = "block";
      sectionWhiskeyCola.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Energydrink ist "checked"
    if (checkBoxEnergydrink.checked == true){
      sectionGummibärliRot.style.display = "block";
      sectionGummibärliGrün.style.display = "block";
      sectionColt45.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // GingerAle ist "checked"
    if (checkBoxGingerAle.checked == true){
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
    if (checkBoxTonicWater.checked == true){
      sectionGinTonic.style.display = "block";
      sectionPassoaFresh.style.display = "block";
      sectionGreenUp.style.display = "block";
      sectionGrandMarnierTonic.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Holunderblütensirup ist "checked"
    if (checkBoxHolunderblütensirup.checked == true){
      sectionHugo.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Grenadinesirup ist "checked"
    if (checkBoxGrenadinesirup.checked == true){
      sectionTrojkaSunrise.style.display = "block";
      sectionBedOfRoses.style.display = "block";
      sectionTequilaSunrise.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Himbeersirup ist "checked"
    if (checkBoxHimbeersirup.checked == true){
      sectionCloverClub.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }
  
    // Orangensaft ist "checked"
    if (checkBoxOrangensaft.checked == true){
      sectionTrojkaSunrise.style.display = "block";
      sectionTequilaSunrise.style.display = "block";
      sectionGrandMarnieralOrange.style.display = "block";
    } else {
      function myinitialFunction() {
      }
  
    }


    // Passionsfruchtsaft ist "checked"
    if (checkBoxPassionsfruchtsaft.checked == true){
      sectionPassionfruitMojito.style.display = "block";
    } else {
      function myinitialFunction() {
      }
  
    }


     // Zitronensaft ist "checked"
     if (checkBoxZitronensaft.checked == true){
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
    if (checkBoxAnanassaft.checked == true){
      sectionPinaColada.style.display = "block";
      sectionCaliforniaSurfer.style.display = "block";
      sectionJungleBird.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }


    // Kokosnussmilch ist "checked"
    if (checkBoxKokosnussmilch.checked == true){
      sectionPinaColada.style.display = "block";
    } else {
      function myinitialFunction() {
    }
    }

    // Limettensaft ist "checked"
    if (checkBoxLimettensaft.checked == true){
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

  }











  