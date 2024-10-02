import {useEffect, useState, useCallback} from 'react';
import {Stage, Sprite, Graphics} from '@pixi/react';
import './pvp.css';

import FirstBunny from './Monters/firstBunny';
import SecondBunny from './Monters/secondBunny';
import ThirdBunny from './Monters/thirdBunny';
import FourthBunny from './Monters/fourthBunny';
import FivethBunny from './Monters/fivethBunny';
import SixthBunny from './Monters/sixthBunny';

const Pvp = () => {
  
  //window Size
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const firstBunny = new FirstBunny();
  const secondBunny = new SecondBunny();
  const thirdBunny = new ThirdBunny();
  const fourthBunny = new FourthBunny();
  const fivethBunny = new FivethBunny();
  const sixthBunny = new SixthBunny();

  //HealPoint 
  const [hpBarFirstPoke, sethpBarFirstPoke] = useState(firstBunny.HealPoint);
  const [hpBarSecondPoke, sethpBarSecondPoke] = useState(secondBunny.HealPoint);
  const [hpBarThirdPoke, sethpBarThirdPoke] = useState(thirdBunny.HealPoint);
  const [hpBarFourthPoke, sethpBarFourthPoke] = useState(fourthBunny.HealPoint);
  const [hpBarFivethPoke, sethpBarFivethPoke] = useState(fivethBunny.HealPoint);
  const [hpBarSixthPoke, sethpBarSixthPoke] = useState(sixthBunny.HealPoint);

  const stageProps = {
    width: width * 0.7,
    height: height * 0.7,
    options: {
      backgroundAlpha: 0
    }
  };

  let queue = [
    firstBunny.name,
    fourthBunny.name,
    secondBunny.name,
    fivethBunny.name,
    thirdBunny.name,
    sixthBunny.name
  ];

  /*
  const changeQueue = (queue) => {
    if (queue.length > 0) {
      let firstElement = queue.shift();
      queue.push(firstElement);
      return queue;
    } else {
      return queue;
    }
  }
  */

 const hideOrShowButonns = (props) => {
    const id = document.getElementById(props);
    if (id.classList.contains('showButton')) {
      id.classList.remove('showButton');
      id.classList.add('hideButton')
    } else {
      id.classList.remove('hideButton')
      id.classList.add('showButton')
    }
 }

 const leaveForBattle = () => {
  
 }

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const hpBarFirstPlayer = useCallback((g) => {
    g.clear();
    //FirstPoke
    g.beginFill(0x000000);
    g.drawRect(stageProps.width * 0.01, stageProps.height * 0.02, 160, 30);
    g.endFill();
    
    g.beginFill(0x00ff00);
    g.drawRect(stageProps.width * 0.01 + 5, stageProps.height * 0.02 + 5, hpBarFirstPoke, 20);
    g.endFill();

    //SecondPoke
    g.beginFill(0x000000);
    g.drawRect(stageProps.width * 0.01, stageProps.height * 0.1, 160, 30);
    g.endFill();

    g.beginFill(0x00ff00);
    g.drawRect(stageProps.width * 0.01 + 5, stageProps.height * 0.1 + 5, hpBarSecondPoke, 20);
    g.endFill();
    //ThirdPoke
    g.beginFill(0x000000);
    g.drawRect(stageProps.width * 0.01, stageProps.height * 0.18, 160, 30);
    g.endFill();

    g.beginFill(0x00ff00);
    g.drawRect(stageProps.width * 0.01 + 5, stageProps.height * 0.18 + 5, hpBarThirdPoke, 20);
    g.endFill();
  }, [hpBarFirstPoke, hpBarSecondPoke, hpBarThirdPoke]);

  const hpBarSecondPlayer = useCallback((g) => {
    g.clear();
    //fourthPoke
    g.beginFill(0x000000);
    g.drawRect(stageProps.width * 0.84, stageProps.height * 0.02, 160, 30);
    g.endFill();
    
    g.beginFill(0x00ff00);
    g.drawRect(stageProps.width * 0.84 + 5, stageProps.height * 0.02 + 5, hpBarFourthPoke, 20);
    g.endFill();

    //fivethPoke
    g.beginFill(0x000000);
    g.drawRect(stageProps.width * 0.84, stageProps.height * 0.1, 160, 30);
    g.endFill();

    g.beginFill(0x00ff00);
    g.drawRect(stageProps.width * 0.84 + 5, stageProps.height * 0.1 + 5, hpBarFivethPoke, 20);
    g.endFill();
    //sixthPoke
    g.beginFill(0x000000);
    g.drawRect(stageProps.width * 0.84, stageProps.height * 0.18, 160, 30);
    g.endFill();

    g.beginFill(0x00ff00);
    g.drawRect(stageProps.width * 0.84 + 5, stageProps.height * 0.18 + 5, hpBarSixthPoke, 20);
    g.endFill();
  }, [hpBarFourthPoke, hpBarFivethPoke, hpBarSixthPoke]);
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };



  }, []);
  
  return (<>
    <Stage {...stageProps} className='pvpArea'>
      <Sprite image={firstBunny.src} x={stageProps.width * 0.05} y={stageProps.height * 0.4} tint={'red'}></Sprite>
      <Sprite image={secondBunny.src} x={stageProps.width * 0.05} y={stageProps.height * 0.6} tint={'yellow'}></Sprite>
      <Sprite image={thirdBunny.src} x={stageProps.width * 0.05} y={stageProps.height * 0.8} tint={'green'}></Sprite>
      <Sprite image={fourthBunny.src} x={stageProps.width * 0.93} y={stageProps.height * 0.4} tint={'blue'}></Sprite>
      <Sprite image={fivethBunny.src} x={stageProps.width * 0.93} y={stageProps.height * 0.6} tint={'purple'}></Sprite>
      <Sprite image={sixthBunny.src} x={stageProps.width * 0.93} y={stageProps.height * 0.8} tint={'orange'}></Sprite>
      <Graphics draw={hpBarFirstPlayer}></Graphics>
      <Graphics draw={hpBarSecondPlayer}></Graphics>
    </Stage>
    <div className='buttonMenu'>
      <div id='firstPlayerButton' className='showButton'>
        <button onClick={() => {
          hideOrShowButonns('firstPlayerButton');
          hideOrShowButonns('firstCombatMenuButton')
        }}>Атака</button>
        <button onClick={() => {
          hideOrShowButonns('firstPlayerButton');
        }}>Предметы</button>
        <button>Сбежать</button>
        <button>1</button>
      </div>

      <div id='firstCombatMenuButton' className='hideButton'>
        <button onClick={() => {
          hideOrShowButonns('firstCombatMenuButton');
          hideOrShowButonns('yourChoose');
        }}>Удар</button>
        <button onClick={() => {
          hideOrShowButonns('firstCombatMenuButton');
          hideOrShowButonns('firstPlayerButton');
        }}>Назад</button>
      </div>

      <div id='yourChoose' className='hideButton'>
        <button onClick={() => {
          sethpBarFourthPoke(hpBarFourthPoke - 25)
          hideOrShowButonns('yourChoose');
          hideOrShowButonns('secondPlayerButton');
        }}>Ударить 1 врага</button>
        <button onClick={() => {
          sethpBarFivethPoke(hpBarFivethPoke - 25)
          hideOrShowButonns('yourChoose');
          hideOrShowButonns('secondPlayerButton');
        }}>Ударить 2 врага</button>
        <button onClick={() => {
          sethpBarSixthPoke(hpBarSixthPoke - 25)
          hideOrShowButonns('yourChoose');
          hideOrShowButonns('secondPlayerButton');
        }}>Ударить 3 врага</button>
      </div>

      <div id='secondPlayerButton' className='hideButton'>
        <button onClick={() => {
          hideOrShowButonns('secondPlayerButton');
          hideOrShowButonns('secondCombatMenuButton')
        }}>Атака</button>
        <button onClick={() => {
          hideOrShowButonns('secondPlayerButton');
        }}>Предметы</button>
        <button>Сбежать</button>
        <button>2</button>
      </div>

      <div id='secondCombatMenuButton' className='hideButton'>
        <button onClick={() => {
          hideOrShowButonns('secondCombatMenuButton');
          hideOrShowButonns('enemyChoose');
        }}>Удар</button>
        <button onClick={() => {
          hideOrShowButonns('secondCombatMenuButton');
          hideOrShowButonns('secondPlayerButton');
        }}>Назад</button>
      </div>

      <div id='enemyChoose' className='hideButton'>
        <button onClick={() => {
          sethpBarFirstPoke(hpBarFirstPoke - 25)
          hideOrShowButonns('enemyChoose');
          hideOrShowButonns('firstPlayerButton');
        }}>Ударить 1 врага</button>
        <button onClick={() => {
          sethpBarSecondPoke(hpBarSecondPoke - 25)
          hideOrShowButonns('enemyChoose');
          hideOrShowButonns('firstPlayerButton');
        }}>Ударить 2 врага</button>
        <button onClick={() => {
          sethpBarThirdPoke(hpBarThirdPoke - 25)
          hideOrShowButonns('enemyChoose');
          hideOrShowButonns('firstPlayerButton');
        }}>Ударить 3 врага</button>
      </div>
    </div>
  </>)
};


export default Pvp