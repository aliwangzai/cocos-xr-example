import { _decorator, Component, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {
    @property(Sprite)
    icon: Sprite = null;

    start() {
        
    }

    update(deltaTime: number) {

    }

    click_btn() {
        console.log("test1!!!!!")
        this.icon.node.active = !this.icon.node.active
    }
}

