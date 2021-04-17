import ControllerBase from "./ControllerBase";
import PlayerInfo from "../model/PlayerInfo";

export default class PlayerController extends ControllerBase {
    public myPlayerInfo = new PlayerInfo();
}