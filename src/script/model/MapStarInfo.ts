import AppConfig from "../../AppConfig"
import ModelBase from "./ModelBase";
import MapFontInfo from "./MapFontInfo";
export default class MapStarInfo extends ModelBase{
    public star_num : number;
    public speed_rate : number;
    public split_rate : number;

    protected static _pool = [];
    public static create(data? : Object) : MapStarInfo
    {
        if(AppConfig.pools['MapStarInfo'] == null)
        {
            AppConfig.pools['MapStarInfo'] = {sign : 'MapStarInfo', pool : MapStarInfo._pool, createCount : 0, recoverCount : 0};
        }
        AppConfig.pools['MapStarInfo'].createCount ++;
        let cout;
        if(MapStarInfo._pool.length > 0)
        {
            cout = MapStarInfo._pool.pop();
            cout.isRecover = false;
        }
        else 
        {
            cout = new MapStarInfo();
        }
        if(data != null)
            cout.setDataByKey(data)
        return cout;
    }

    public getStruct() : string[]
    {
        return MapFontInfo.DataSource["star_struct"];
    }

    public recover() : void
    {
        if(this.isRecover)
        {
            return;
        }
        if(AppConfig.pools['MapStarInfo'] == null)
        {
            AppConfig.pools['MapStarInfo'] = {sign : 'MapStarInfo', pool : MapStarInfo._pool, createCount : 0, recoverCount : 0};
        }
        AppConfig.pools['MapStarInfo'].recoverCount ++;
        
        MapStarInfo._pool.push(this);
        this.isRecover = true;
    }

    public setDataByKey(value : object) : void{
        let obj;
        let struct = this.getStruct();
        let datas = MapFontInfo.DataSource["star"];
        for(let i : number = 0; i < datas.length ; i++)
        {
            let fontArr = datas[i];
            let isMeet = true;
            for(let tempProperty in value)
            {
                if(value[tempProperty] != fontArr[struct.indexOf(tempProperty)])
                {
                    isMeet = false;
                    break;
                }
            }
            if(isMeet)
            {
                obj = {};
                for(let j : number = 0; j < struct.length; j++)
                {
                    obj[struct[j]] = fontArr[j];
                }
                break;
            }
        }
        if(obj != null)
        {
            this.setData(obj);
        }
    }
}