import './App.css'
import KitchenSinkExample from './Components/Cards'
import Player from './Components/Player'

function App() {
  const playerProfile = [
    { 
      image: 'https://shorturl.at/disH2',
      logo: 'https://shorturl.at/mnFV7',
      playerName: 'Cristiano Ronaldo',
      team: 'Al nassyr  FC',
      nationality: 'Portugal',
      age: '38yrs',
      jerseyNumber: 'No.7',
    },
    { 
      image: 'https://shorturl.at/esyHL',
      logo: 'https://shorturl.at/cdAD7',
      playerName: 'Bukayo Saka',
      team: 'Arsenal',
      nationality: 'England',
      age: '22yrs',
      jerseyNumber: 'No.7',
    },
    { 
      image: 'https://shorturl.at/AX678',
      logo: 'https://shorturl.at/cdAD7',
      playerName: 'Gabriel Martinelli',
      team: 'Arsenal FC',
      nationality: 'Brazil',
      age: '21yrs',
      jerseyNumber: 'No.11',
    },
    { 
      image: 'https://shorturl.at/d0378',
      logo: 'https://shorturl.at/nwCDJ',
      playerName: 'Jude Bellingham',
      team: 'Real Madrid',
      nationality: 'England',
      age: '20yrs',
      jerseyNumber: 'No.5',
    },
    { 
      image: 'https://shorturl.at/jKRX9',
      logo: 'https://shorturl.at/nwCDJ',
      playerName: 'Vinicius Junior',
      team: 'Real Madrid',
      nationality: 'Brazil',
      age: '24yrs',
      jerseyNumber: 'No.7',
    },
    { 
      image: 'https://media.tycsports.com/files/2023/06/15/581651/lionel-messi-seleccion-argentina_1440x810_wmk.webp',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Inter_Miami_CF_logo.svg/1200px-Inter_Miami_CF_logo.svg.png',
      playerName: 'Lionel Messi',
      team: 'Inter Miami',
      nationality: 'Argentina',
      age: '36yrs',
      jerseyNumber: 'No.10',
    },
    { 
      image: 'https://icdn.football-espana.net/wp-content/uploads/2023/06/Kylian-Mbappe-PSG-042922-169.jpg',
      logo: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4d8.png',
      playerName: 'Kylian Mbappe',
      team: 'PSG',
      nationality: 'France',
      age: '24yrs',
      jerseyNumber: 'No.7',
    },
    { 
      image: 'https://phantom-marca.unidadeditorial.es/6593d7de2cddc1fbd7a9c4d061cbb279/resize/828/f/jpg/assets/multimedia/imagenes/2022/10/07/16651227457766.jpg',
      logo: 'https://shorturl.at/huCIJ',
      playerName: 'Erling Halaand',
      team: 'Manchester City',
      nationality: 'Norway',
      age: '23yrs',
      jerseyNumber: 'No.9',
    },
  ]
  return (
    <>
    <h1>PLAYERS PROFILE</h1>
    <div className="grid">
    {playerProfile.map(({image, logo, playerName, team, nationality, age, jerseyNumber, index}) => (
      <Player
      key = {index}
      image = {image}
      logo = {logo}
      playerName = {playerName}
      team = {team}
      nationality = {nationality}
      age = {age}
      jerseyNumber={jerseyNumber}
      />
      
      

    ))}
    </div>
    </>
  )
    }






export default App
