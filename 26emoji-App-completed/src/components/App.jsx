
//1. Extract the repeated parts of the App into a Entry component.
//2. Use props to make the Entry component render different data.
//3a. Import the emojipedia constant.
//3b. Map through the emojipedia array and render Entry components.

//Emojipedia has 3 entries, so createEntry gets called 3 times.
//Each time, it passes 1 item from the emojipedia array as a var called emojiTerm.


// import React from "react";
// import Entry from "./Entry";
// import emojipedia from "../emojipedia";

// function App() {  
//   return (
//     <div>
//       <h1> <span>emojipedia</span> </h1>
      
//       <dl className="dictionary"> 

//         <dt>       
//           <span className="emoji" role="img" aria-label="Tense Biceps">emoji</span>
//           <span>Tense Biceps</span>
//         </dt>
//         <dd>You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.</dd>


//        <dt>        
//           <span className="emoji" role="img" aria-label="Tense Biceps">emoji</span>
//           <span>Tense Biceps</span>
//         </dt>
//         <dd>You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.</dd>


//          <dt>       
//           <span className="emoji" role="img" aria-label="Tense Biceps">emoji</span>
//           <span>Tense Biceps</span>
//         </dt>
//         <dd>You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.</dd>
      
//       </dl>

// </div>
//  );
// }

// export default App;


////////////////////
// import React from "react";
// import Entry from "./Entry";
// import emojipedia from "../emojipedia";

// function createEntry(emojiTerm) {
//   return (
//     <Entry
//       key={emojiTerm.id}
//       emoji={emojiTerm.emoji}
//       name={emojiTerm.name}
//       description={emojiTerm.meaning}
//     />
//   );
// }

// function App() {  
//   return (
//     <div>
//       <h1> <span>emojipedia</span> </h1>

//       <dl className="dictionary">

//       {emojipedia.map(createEntry)}

//       </dl>

//     </div>
//   );
// }

// export default App;


///////////////put createEntry-fxn inside App() + using arrow function
import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";


function App() {
  return (
    <div>
      <h1><span>emojipedia</span> </h1>

      <dl className="dictionary">

        {emojipedia.map(emojiTerm => {
         return (
          <Entry
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
          />
        )
         })
     }
      </dl>
      
    </div>
  );
}

export default App;


