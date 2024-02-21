tallestBuildingHeight([
    "            ##",
    "            ##",
    "            ##",
    "###   ###   ##",
    "###   ###   ###",
    "###   ###   ###",
    "###   ###   ###"
  ]) 
  
  // Tallest building is 7 rows
  // 7 x 20m = 140m
  
  tallestBuildingHeight([
    "               ",
    "               ",
    "               ",
    "       #    ###",
    "      # #   ###",
    "###   ###   ###",
    "###   ###   ###"
  ]) 
  
  // tallest building is 4 rows
  // 4 x 20m = 80m
  
  tallestBuildingHeight([
    "                              ",
    "                         ###  ",
    "                         ###  ",
    "###                    #####  ",
    "###      #             #####  ",
    "###     ###            #####  ",
    "######  ###            #######",
    "######  ######  ###    #######",
    "###################    #######",
    "###############################",
    "###############################"
  ])
  
  // Tallest building is 10 rows
  // 10 x 20m = 200m


  function tallestBuildingHeight(array){
    let buildheight= 0
        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            if (element.includes('#',0)) {
                buildheight=buildheight+1
            }
            
        }
        console.log(buildheight)
  }