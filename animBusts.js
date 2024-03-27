/*:
 * @plugindesc a simple plugin to allow animated busts in rpgmaker mv
 * @author Mattie
 *
 * @help This plugin does not provide plugin commands.
 *
 * Each animation should be a png sequence in a folder within the faces folder. For instance, if I have 10 images named 1.png,2.png, ..., 10.png, in a folder within the faces folder titled "animatedFace"  
 * Then I would call MATTIE.msgAPI.showAnim(1,10,"/animatedFace/",10)
 *MATTIE.msgAPI.showAnim(startingImageNumber,EndingImageNumber,"/folderName/",delayBetweenFramesInMilliSeconds)
 */


var MATTIE = MATTIE || {};
MATTIE.msgAPI = MATTIE.msgAPI || {};
/**
 * @description get the current msg window if one exists
 * @returns 
 */
MATTIE.msgAPI.getMsgWindow = function(){
	let msgWin = SceneManager._scene._windowLayer.children.filter(e=>{
		return (e instanceof Window_Message)
	})[0];
	return msgWin;
}

/**
 * @description draw an image on top of the current face
 */
MATTIE.msgAPI.drawImageOveract = function(name,index){
	$gameMessage.setFaceImage(name,index);
	MATTIE.msgAPI.getMsgWindow().drawMessageFace();
}

MATTIE.msgAPI.showAnim = function(startNum, endNum, folder,frameDelay){
	for (let index = startNum; index <= endNum; index++) {
		setTimeout(() => {
			MATTIE.msgAPI.drawImageOveract(`${folder}${index}`,0);
		}, frameDelay*index);
		
	}


}
