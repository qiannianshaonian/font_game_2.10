import ModelBase from "./ModelBase";
import MapStarInfo from "./MapStarInfo";

export default class PlayerInfo extends ModelBase {
    public name : string = "test";
    public url : string = "http://cdn.duitang.com/uploads/item/201410/08/20141008150015_dP8yJ.thumb.700_0.jpeg";
    private _starInfo : MapStarInfo;
    public wannengUseTimes : number =4;
    public guideUseTimes : number = 4;
    public comeBackTimes : number = 1;
    public guideRemainTimes : number;
    public getStarInfo(score : number) : MapStarInfo{
        let starNum;
        if(score < 1200)
        {
            starNum =0;
        }
        else if(score < 2000)
        {
            starNum = 1;
        }
        else if(score < 3000)
        {
            starNum = 2;
        }
        else if(score < 4000)
        {
            starNum = 3;
        }
        else if(score < 5000)
        {
            starNum = 4;
        }
        else if(score < 6000)
        {
            starNum = 5;
        }
        else if(score < 7000)
        {
            starNum = 6;
        }
        else if(score < 8000)
        {
            starNum = 7;
        }
        else if(score < 9000)
        {
            starNum = 8;
        }
        else if(score < 10000)
        {
            starNum = 9;
        }
        else 
        {
            starNum = 10;
        }
        if(this._starInfo == null || this._starInfo.star_num != starNum)
        {
            this._starInfo = MapStarInfo.create();
            if(this._starInfo.star_num != starNum)
            {
                this._starInfo.setDataByKey({star_num : starNum});
            }
        }
        return this._starInfo;
    }
}