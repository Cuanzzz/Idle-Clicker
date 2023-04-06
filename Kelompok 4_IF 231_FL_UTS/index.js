var koin = 40000;
var autoClicker = 0;
var autoClickerCost = 1500;
let intervalTime = 5000;
let intervalTimeK = 1000;

var NavalCurry = 0;
var RoyalGourmet = 0;
var KamagiMochi = 0;

var curryCost = 2000;
var royalCost = 3000;
var mochiCost = 4000;

function buyCurry()
{
  if(koin < curryCost)
  {
    alert('Maaf, jumlah koin tidak cukup untuk membeli upgrade ini.');
  }
  
  if (koin >= curryCost && NavalCurry === 0)
  {
    koin -= curryCost;
    NavalCurry++;
    if(NavalCurry === 1)
    {
      curryCost = "Level Maksimal";
      intervalTimeK -= 800;
    }
  }
  updateDisplay();
}

function buyRoyal()
{
  if(koin < royalCost)
  {
    alert('Maaf, jumlah koin tidak cukup untuk membeli upgrade ini.');
  }
  if (koin >= royalCost && RoyalGourmet === 0)
  {
    koin -= royalCost;
    RoyalGourmet++;
    if(RoyalGourmet === 1)
    {
      royalCost = "Level Maksimal";
      intervalTime -= 2000;
    }
  }
  updateDisplay();
}

function buyMochi()
{
  if(koin < mochiCost)
  {
    alert('Maaf, jumlah koin tidak cukup untuk membeli upgrade ini.');
  }
  if (koin >= mochiCost && KamagiMochi === 0)
  {
    koin -= mochiCost;
    KamagiMochi++;
    if(KamagiMochi === 1)
    {
      mochiCost = "Level Maksimal";
      intervalTime -= 2500;
    }
  }
  updateDisplay();
}


let coolDown = false;

function addCoin() 
{
  if (!coolDown) 
  {
    koin += 30 * multiplierLevel;
    updateDisplay();
    coolDown = true;
    setTimeout(() => 
    {
      coolDown = false;
    }, intervalTimeK);
  } else 
  {
    alert('Tunggu sebentar, makanan sedang dibuat. Beli Naval Curry untuk mengurangi Cooldown');
  }
}


function buyAutoClicker() 
{
  if(koin < autoClickerCost)
  {
    alert('Maaf, jumlah koin tidak cukup untuk membeli upgrade ini.');
  }

  if (koin >= autoClickerCost && autoClicker === 0) 
  {
    koin -= autoClickerCost;
    autoClicker++;
    if (autoClicker === 1) 
    {
      autoClickerCost = "Level Maksimal";
    }
    updateDisplay();
    clickAutoClicker();
  }
}

function clickAutoClicker() 
{
  koin += (30 * multiplierLevel);
  updateDisplay();
  setTimeout(clickAutoClicker, intervalTime);
}


var multiplier = 0;
var multiplierLevel = 1;
var multiplierCost = [5000, 9000, 12000];

function buyMultiplier() 
{
  if(koin < multiplierCost[multiplierLevel - 1])
  {
    alert('Maaf, jumlah koin tidak cukup untuk membeli item ini.');
  }

  if (koin >= multiplierCost[multiplierLevel - 1]) 
  {
    koin -= multiplierCost[multiplierLevel - 1];
    multiplierLevel++;
    updateDisplay();
  }
}


function updateDisplay() {
  document.getElementById("curry").innerHTML = "<b> Harga </b> : " + curryCost;
  document.getElementById("royale").innerHTML = "<b> Harga </b> : " + royalCost;
  document.getElementById("mochi").innerHTML = "<b> Harga </b> : " + mochiCost;
  document.getElementById("uang").innerHTML = "<b>Koin </b>: " + koin;

  document.getElementById("atasa").innerHTML = "<b>Auto Clicker </b>: " + autoClicker;
  document.getElementById("hargaauto").innerHTML = "<b>Harga </b>: " + autoClickerCost;

  var multiplierCostDisplay = multiplierCost[multiplierLevel - 1];
    if(multiplierLevel > 3)
    {
      multiplierCostDisplay = "Level Maksimal";
    }
    
  document.getElementById("atasb").innerHTML = "<b>Buka Cabang Toko Baru </b>: " + multiplierLevel;
  document.getElementById("hargacab").innerHTML = "<b>Harga </b>: " + multiplierCostDisplay;
}
updateDisplay();

var lagu = new Audio("images/y2mate.com - Sonic The Hedgehog OST  Labyrinth Zone.mp3");
lagu.autoplay = true;
