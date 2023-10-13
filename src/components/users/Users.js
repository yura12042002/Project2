import '../users/Users.css'

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const users = [
 {
   name: 'Игорь',
   age: 23,
   photo: 'https://i1.sndcdn.com/artworks-000341738637-i6ff3i-t500x500.jpg',
   langs: ['KJ', "LK", 'OI'],
   isOnline: true,
 },
 {
   name: 'Владимир',
   age: 21,
   photo: 'https://pm1.aminoapps.com/7285/03a9f81096110d89cd6a1b0e18be400c2bfd3fbdr1-480-710v2_uhq.jpg',
   langs: ['KJ'],
   isOnline: false,
 },
 {
   name: 'Вадим',
   age: 76,
   photo: 'https://www.shutterstock.com/shutterstock/videos/1013260079/thumb/1.jpg?ip=x480',
   langs: ['KJ', "LK", 'KJ', 'OI'],
   isOnline: true,
 },
]

function App() {
 return (
   <div className = 'container'>
     <ul>
       {arr.map(el => {
         return <li>{el}</li>
       })}
     </ul>
     <div>
         <ul>
           {users.map(el => (
             <div className='nameAge'>
               <h1 className='nameUser'>Имя: {el.name}</h1>
               <h2 className='ageUser'>Возраст: {el.age}</h2>
               <img src={el.photo}></img>
               <div className='language'>{el.langs.map(el => (
                 <div>{el}</div>
               ))}
             </div>
             <div className='onlinePerson'>
                {el.isOnline && <div className='cyrcle'></div>}
             </div>
           </div>
           ))}
         </ul>
     </div>
     </div>
  );
}

export default App;