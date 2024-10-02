import Monster from "./Monster";

class FirstBunny extends Monster  {
    name = 'firstBunny';
    Attack: number = 100;
    HealPoint: number = 150;
    Defense: number = 100;
    Speed: number = 100;
    ElementType: string | undefined;
    Level: number = 1;
    src: string = 'https://pixijs.io/pixi-react/img/bunny.png'
}

export default FirstBunny;