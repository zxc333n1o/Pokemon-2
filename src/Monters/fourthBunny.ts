import Monster from "./Monster";

class FourthBunny extends Monster  {
    name = 'fourthBunny';
    Attack: number = 100;
    HealPoint: number = 150;
    Defense: number = 100;
    Speed: number = 70;
    ElementType: string | undefined;
    Level: number = 1;
    src: string = 'https://pixijs.io/pixi-react/img/bunny.png'
}

export default FourthBunny;