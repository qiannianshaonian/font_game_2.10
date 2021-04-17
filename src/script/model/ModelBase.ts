import AppConfig from "../../AppConfig"
export default class ModelBase {
    public static modelIdIncrease : number = 0;
    private _____id : number;
    constructor(){
        this._____id = ModelBase.modelIdIncrease;
        ModelBase.modelIdIncrease ++;
    }
    protected static _pool = [];
    public isRecover = false;
    protected _sign : string;
    public setData(obj : any) : void{
        let struct = this.getStruct();
        if(obj instanceof Array && struct != null)
        {
            for(let i : number = 0; i < struct.length; i++)
            {
                this[struct[i]] = obj[i];
            }
        }
        else 
        {
            for(let tempPro in obj)
            {
                this[tempPro] = obj[tempPro];
            }
        }
    }

    public getStruct() : string[]
    {
        return null;
    }
    
    public getSign() : string
    {
        if(this._sign == null)
        {
            this._sign = this["__proto__"].constructor.name;
        }
        return this._sign;
    }

    public static create(data? : Object) : ModelBase
    {
        if(AppConfig.pools['ModelBase'] == null)
        {
            AppConfig.pools['ModelBase'] = {sign : 'ModelBase', pool : ModelBase._pool, createCount : 0, recoverCount : 0};
        }
        AppConfig.pools['ModelBase'].createCount ++;
        let cout;
        if(ModelBase._pool.length > 0)
        {
            cout = ModelBase._pool.pop();
            cout.isRecover = false;
        }
        else 
        {
            cout = new ModelBase();
        }
        if(data != null)
            cout.setDataByKey(data)
        return cout;
    }

    public recover() : void
    {
        if(this.isRecover)
        {
            return;
        }
        if(AppConfig.pools['ModelBase'] == null)
        {
            AppConfig.pools['ModelBase'] = {sign : 'ModelBase', pool : ModelBase._pool, createCount : 0, recoverCount : 0};
        }
        AppConfig.pools['ModelBase'].recoverCount ++;
        
        ModelBase._pool.push(this);
        this.isRecover = true;
    }

    public setDataByKey(value : object) : void{
    }
}