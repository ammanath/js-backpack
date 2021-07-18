class BackPack{
    constructor(
        name,
        volume,
        color,
        pocketNum, 
        strapLengthL,
        strapLengthR,
        lidOpen,
        dateAcquired,
        image,
    ){
        this.name=name;
        this.volume=volume;
        this.color=color;
        this.pocketNum=pocketNum;
        this.strapLength = {
            left:strapLengthL,
            right:strapLengthR
        };
        this.lidOpen=lidOpen;
        this.dateAcquired=dateAcquired;
        this.image = image;
    }
    toggleLid(newState){
        this.lidOpen =  newState;
    }
    setNewStrapLength(newLeft, newRight){
        this.strapLength.left = newLeft;
        this.strapLength.right = newRight;
    }
    getBackPackAge(){
        let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
    }
}

export default BackPack;