
import React from 'react'

import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

import {withRoomConsumer} from '../context';
import Loading from './Loading';

function RoomConatiner({context}){
    const {loading , sortedRooms , rooms } = context;

    if(loading){
                               return <Loading/>;
                           }
                        
                        return (
                                <>
                       
                                <RoomsFilter rooms={rooms}/>
                                <RoomsList rooms={sortedRooms}/>
                            </>
                            );
}

export default withRoomConsumer(RoomConatiner);

// import React from 'react'

// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';

// import {RoomConsumer} from '../context';
// import Loading from './Loading';


// export default function RoomsContainer() {
//     return (
//         <RoomsContainer>
//             {
//             value => {
//                 const {loading , sortedRooms , rooms } = value;
//                    if(loading){
//                        return <Loading/>;
//                    }
                
//                 return (
//                         <div>
//                         Hello room container
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                     </div>
//                     );
//                 }
//             }
//         </RoomsContainer>

  
//     )
// }
