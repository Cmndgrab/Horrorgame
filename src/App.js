import "./App.css"
import React from 'react';
import { Terminal, useEventQueue, textLine, textWord, commandWord } from 'crt-terminal';
import Start from './components/Start.js'
const bannerText = "type start";

export default function App() {
  const eventQueue = useEventQueue();
  
   
  
  const { print } = eventQueue.handlers;

  return (
    <div style={{ width: '1000px', height: '600px', float : 'center' ,}}>
      <Terminal
        queue={eventQueue}
        banner={[textLine({ words: [textWord({ characters: bannerText })] })]}
        onCommand={(command) =>
          print([
            textLine({
              words: [
                textWord({ characters: 'You chose ' }),
                commandWord({ characters: command, prompt: '>' }),
                useEventQueue.nextEvent
              ],
              
            }), 
          ])
        }
        
      />
      
    </div>
  );
}
 
