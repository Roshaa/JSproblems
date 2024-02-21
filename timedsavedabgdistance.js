timeSaved(80, 90, 40)
timeSaved(80, 90, 4000)
timeSaved(80, 100, 40 )
timeSaved(80, 100, 10)

function timeSaved(x,y,z){
    kmminute=y/60;
    timespentavgspeed=z/kmminute
    kmminutespeedlimit=x/60
    timespentkmminutespeedlimit=z/kmminutespeedlimit
    diff=timespentavgspeed-timespentkmminutespeedlimit
    diff=Math.abs(diff)
    console.log(diff)
}