//First X bytes are plaintext JSON of replay author, players, then a byte flag structured below
//| Bit number | Field name                
//| ---------- | ----------                
//| 4-7        | `Unused Bit`     
//| 3          | `Tournament Match Flag`              
//| 2          | `Match Type, Arena = 0, Combat = 1`            
//| 1          | `Public or Private, Public = 0, Private = 1`
//| 0          | `Winner, 0 = Blue, 1 = Orange`

//Frame is denoted by 0xFEFD 2-byte
//1 Frame contains the recorded frame rate amount of chunks
//| Byte Amount | Field name                
//| ----------  | ----------    
//| 2           | `Magic Header`                 
//| 6           | `Clock MM/SS/mm`
//| 1           | `Blue Points`
//| 1           | `Orange Points`
//| ?           | `Last Score`
//| ?           | `Team Stats`
//| ?           | `Player Stats`

//Chunk is denoted by 0xFDFE 2-byte
//| Byte Amount | Field name                
//| ----------  | ----------   
//| 2           | `Magic Header`            
//| 6           | `Disc Position` 
//| 1           | `Game State`        
//| X           | `Position Data`            
//| 1           | `Possession`         
//| 1           | `is Blocking`  
//| 1           | `is Stunned`              


Alrighty so I feel like this will be a little tough to explain.
So I kept the concept of frames and chunks. A frame contains 60 chunks (since in this example I'm recording at 60fps).

The file is currently started with plaintext json that says
- Who made the replay
- Who the players are on each team and their numbers

The header ends with a single byte that's structured like this 
```
| Bit number | Field name                
| ---------- | ----------                
| 4-7        | Unused Bits     
| 3          | Tournament Match Flag              
| 2          | Match Type, Arena = 0, Combat = 1`           
| 1          | Public or Private, Public = 0, Private = 1
| 0          | Winner, 0 = blue, 1 = orange``'

This uses the same frame / chunk structure where 1 frame = 60 chunks (assuming you're recording at 60fps).
To keep size down, the team/player stats, clock, last score, and orange/blue points get stored at the start of each frame.
Each chunk contains disc position, game state, all player positions (including the left,up,forward,velocity vectors), possession, blocking status, stunned status.

It only applies to the values before the decimal and that's because I need to handle negative numbers since the max arena length is -80 to 80 or whatever it is. So to be able to handle negative and positive floats, my starting point is decimal (I don't know if this is more accurately called an int) value 126 or '0x7E` like it points to in the table below. Where I treat the float number like it's just the decimal value so a value that was -30 is decimal 30 but it's being subtracted from the 126 so it's 96 or `0x60`. So when it gets decoded I'd read in the byte `0x60` convert to decimal, so 96 and then just treat it as a normal number and do 96-126 and get my -30