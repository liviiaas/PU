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
    var checkBoxEnergyDrink = document.getElementById("InEnergyDrink");
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




    // Rum ist "checked"
    if (checkBoxRum.checked == true){
      sectionPinaColada.style.display = "block";
      sectionMojito.style.display = "block";
      sectionPassionfruitMojito.style.display = "block";
      sectionLongIslandIcedTea.style.display = "block";
      sectionJungleBird.style.display = "block"
    } else {
       
    }


    // Vodka ist "checked"
    if (checkBoxVodka.checked == true){
      sectionCaipiroska.style.display = "block";
      sectionLongIslandIcedTea.style.display = "block";
    } else {
       
    }

  }