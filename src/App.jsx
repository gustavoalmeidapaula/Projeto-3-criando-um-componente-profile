import Profile from "./components/Profile"

export default function App(){
  return(

    <div className="profile" >
      <Profile
      img={'./perfil.png'} 
      name={'Gustavo Almeida'} 
      experience={'Técnico - Desenvolvedor de Sistemas'} 
      fone={'+5585992528215'} 
      email={'gustavoalmeida2208@gmail.com'} 
      gitHub={'GitHub'} 
      linkedin={'LinkedIn'} 
      twitter={'Twitter'}
      />
    </div>
  )
}