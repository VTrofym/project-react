
import { PageTitle } from './PageTitle/PageTitle';
import { EventBoard } from './EventBoard/EventBoard'
import upcomingEvents from '../upcoming-events.json'

export const App = () => {
  return (
    <>
      <PageTitle text="24-th Conference" />
      <EventBoard events={upcomingEvents} />
    </>
  );
};















// (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );