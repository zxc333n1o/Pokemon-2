import Monster from "./Monster";

class SixthBunny extends Monster  {
    name = 'sixthBunny';
    Attack: number = 100;
    HealPoint: number = 150;
    Defense: number = 100;
    Speed: number = 50;
    ElementType: string | undefined;
    Level: number = 1;
    src: string = 'https://pixijs.io/pixi-react/img/bunny.png'
}

export default SixthBunny;