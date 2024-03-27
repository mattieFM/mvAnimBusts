# how to use  
Each animation should be a png sequence in a folder within the faces folder. For instance, if I have 10 images named 1.png,2.png, ..., 10.png, in a folder within the faces folder titled "animatedFace"    
Then I would call MATTIE.msgAPI.showAnim(1,10,"/animatedFace/",10) in a script tag  


The function is as follows  

/**  
 * @description show an animation within an existing msgbox  
 * @param {*} startNum the number of image to start at. IE: 1 for 1.png  
 * @param {*} endNum the number of image to end at IE: 10 for 10.png  
 * @param {*} folder the folder within the faces folder to find your files in. IE: if I have an anim in /faces/anim, then I would enter "/anim/" as the folder  
 * @param {*} frameDelay the delay between each frame in milli seconds  
 */  
MATTIE.msgAPI.showAnim(startNum,endNum,folder,frameDelay)  

## examples

For iamges 1.png through 10.png within /faces/animatedFace, with 100fps:  
MATTIE.msgAPI.showAnim(1,10,"/animatedFace/",10)  

For iamges 1.png through 5.png within /faces/anim/, with 10fps:  
MATTIE.msgAPI.showAnim(1,5,"/anim/",100)  
