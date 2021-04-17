import AppConfig from "../../AppConfig"
import ModelBase from "./ModelBase";
import { ResMgr } from "../../ResMgr";
import URI from "../../URI";
import { Skeleton } from "laya/ani/bone/Skeleton";

export default class MapFontInfo extends ModelBase {
    public static DataSource: object;
    private static _groupCache = {};
    public static getGroup(font: string): string[]  {
        if (MapFontInfo._groupCache[font] == null)  {
            let arr = [];
            for (let i = 0; i < MapFontInfo.DataSource["group"].length; i++)  {
                let tempGroup = MapFontInfo.DataSource["group"][i];
                if (tempGroup.indexOf(font) != -1)  {
                    arr.push(tempGroup);
                }
            }
            for (let i = 0; i < MapFontInfo.DataSource["bank"].length; i++)  {
                let tempGroup = MapFontInfo.DataSource["bank"][i];
                if (tempGroup.indexOf(font) != -1)  {
                    arr.push(tempGroup);
                }
            }
            MapFontInfo._groupCache[font] = arr;
        }
        return MapFontInfo._groupCache[font];
    }
    public id: number;
    public text: string;
    public structInfo: string;

    public x: number;
    public y: number;
    private _quality: number = 1;
    public get quality(): number {
        return this._quality;
    }
    //1,2,3,4 初始为1，没合成一次升级，最高4级
    public set quality(value: number) {
        if (value > 4)  {
            value = 4;
        }
        this._quality = value;
    }

    protected static _pool = [];
    public static create(data?: Object): MapFontInfo  {
        if (AppConfig.pools['MapFontInfo'] == null)  {
            AppConfig.pools['MapFontInfo'] = { sign: 'MapFontInfo', pool: MapFontInfo._pool, createCount: 0, recoverCount: 0 };
        }
        AppConfig.pools['MapFontInfo'].createCount++;
        let cout;
        if (MapFontInfo._pool.length > 0)  {
            cout = MapFontInfo._pool.pop();
            cout.isRecover = false;
        }
        else {
            cout = new MapFontInfo();
        }
        if (data != null)
            cout.setDataByKey(data)
        return cout;
    }

    private static _heChengCiZuObj = {};
    /**
     * 是否可合成词组
     */
    public get canHeChengGroup(): boolean {
        if (MapFontInfo._heChengCiZuObj[this.text] == null)  {
            let cout = [];
            MapFontInfo.DataSource["group"].forEach(element => {
                if (element.indexOf(this.text) != -1)  {
                    cout.push(element);
                }
            });
            MapFontInfo.DataSource["bank"].forEach(element => {
                if (element.indexOf(this.text) != -1)  {
                    cout.push(element);
                }
            });
            MapFontInfo._heChengCiZuObj[this.text] = cout;

        }
        return MapFontInfo._heChengCiZuObj[this.text].length > 0;
    }

    public get canHeChengGroups(): string[]  {
        if (this.canHeChengGroup)  {
            return MapFontInfo._heChengCiZuObj[this.text];
        }
        return [];
    }

    /**
     * 根据fontId,找出使用这个id的组合列表,未传入fontId，则输出所有组合列表
     * @param id font id
     * @param isExceptSelf 是否排除自己
     */
    public getStructInfos(fontId: number = null, isExceptSelf: boolean = true): string[]  {
        let cout = [];
        if (fontId == this.id && isExceptSelf == false)  {
            cout.push(fontId.toString());
        }
        else {
            this.structInfo.split(",").forEach(element => {
                if (fontId == null)  {
                    if (element == this.id.toString())  {
                        return;
                    }
                    cout.push(element);
                }
                else  {
                    if (isExceptSelf && element == fontId.toString())  {
                        return;
                    }

                    if (element.split("_").indexOf(fontId.toString()) != -1)  {
                        cout.push(element);
                    }
                }
            });
        }
        return cout;
    }

    private static _heChengHanZiObj = {};
    /**
     * 是否可合成其他汉子
     */
    public get canHeChengFont(): boolean {
        if (MapFontInfo._heChengHanZiObj[this.text] == null)  {
            let cout = [];
            MapFontInfo.DataSource["font"].forEach(element => {
                let fontInfo = MapFontInfo.create();
                fontInfo.setDataByValueArr(element);
                let structInfos = fontInfo.getStructInfos(this.id);
                if (structInfos.length > 0)  {
                    cout.push(fontInfo);
                }
            });
            MapFontInfo._heChengHanZiObj[this.text] = cout;
        }
        return MapFontInfo._heChengHanZiObj[this.text].length > 0;
    }

    public get canHeChengFontInfos(): MapFontInfo[] {
        if (this.canHeChengFont)  {
            return MapFontInfo._heChengHanZiObj[this.text];
        }
        return [];
    }

    /**
     * 是否是特技格子，特技格子：被消除或合成的时候，会触发屏幕上所有有这个汉子的格子消除
     */
    public isStuntFont: boolean;

    private _stuntFontEffect: Skeleton;
    public getStuntFontEffect(): Skeleton  {
        if (!this.isStuntFont)  {
            return null;
        }
        if (this._stuntFontEffect == null)  {
            this._stuntFontEffect = ResMgr.Instance().createSpine(URI.spineUrl + "other_wupinghuanrao_kin_little.sk", "animation", true);
            this._stuntFontEffect.x = this._stuntFontEffect.y = 44;
            this._stuntFontEffect.scaleX = this._stuntFontEffect.scaleY = 1.3;
        }
        return this._stuntFontEffect;
    }

    public destroyStuntEffect(): void {
        if (this._stuntFontEffect)  {
            this._stuntFontEffect.destroy(true);
            this._stuntFontEffect = null;
        }
    }

    public getStruct(): string[]  {
        return MapFontInfo.DataSource["font_struct"];
    }

    public recover(): void  {
        if (this.isRecover)  {
            return;
        }
        if (this._stuntFontEffect)  {
            this._stuntFontEffect.destroy(true);
        }
        this._stuntFontEffect = null;
        if (AppConfig.pools['MapFontInfo'] == null)  {
            AppConfig.pools['MapFontInfo'] = { sign: 'MapFontInfo', pool: MapFontInfo._pool, createCount: 0, recoverCount: 0 };
        }
        AppConfig.pools['MapFontInfo'].recoverCount++;

        MapFontInfo._pool.push(this);
        this.isRecover = true;
    }

    public setDataByValueArr(dataArr): void {
        let fontStruct = MapFontInfo.DataSource["font_struct"];
        let obj;
        for (let i: number = 0; i < dataArr.length; i++)  {
            if (fontStruct.length > i)
                this[fontStruct[i]] = dataArr[i];
        }
    }

    public setDataByKey(value: object): void {
        let obj;
        if (value["text"] == "*")  {
            obj = value;
        }
        else {
            let fontStruct = MapFontInfo.DataSource["font_struct"];
            let fontDatas = MapFontInfo.DataSource["font"];
            for (let i: number = 0; i < fontDatas.length; i++)  {
                let fontArr = MapFontInfo.DataSource["font"][i];
                let isMeet = true;
                for (let tempProperty in value)  {
                    if (value[tempProperty] != fontArr[fontStruct.indexOf(tempProperty)])  {
                        isMeet = false;
                        break;
                    }
                }
                if (isMeet)  {
                    obj = {};
                    for (let j: number = 0; j < fontStruct.length; j++)  {
                        obj[fontStruct[j]] = fontArr[j];
                    }
                    break;
                }
            }
        }
        if (obj != null)  {
            this.setData(obj);
        }
    }
}