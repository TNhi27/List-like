let initState = {
    color: "#FFFFFF"
  };
  
// export default function themeReducer(state = initState, action) {
//     switch (action.type) {
//       case 'CHANGE_THEME':
//           console.log('themeReducer: ' + JSON.stringify(state))
//         return Object.assign({}, state, {
//           color: action.payload.color
//         });
//       default:
//         return initState;
//     }
// }

export default function themeReducer(state = initState, action) {
  switch (action.type) {
    case 'CHANGE_THEME':
        console.log('themeReducer: ' + JSON.stringify(state))
      return {...state,color:action.payload.color}
    default:
      return initState;
  }
}