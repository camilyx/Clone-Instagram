import React, { useState } from "react";
import Post from "./components/posts/Post";
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "isThisReal",
      caption: "nature",
      imageUrl:
        "https://i.pinimg.com/564x/7b/44/e8/7b44e8a0be6fb1a0c4ce3647f6d43f68.jpg",
     
        legenda: "does this ever make sense?",
        coments: "Ver todos os 10 comentários",
        engajamento: "Curtido por user22 e outras pessoas",
        time: "1 dia",
        comentario: "Adicione um comentário...",
        smile: "https://img.icons8.com/ios-glyphs/30/undefined/happy--v1.png",
    },
    {
      username: "loveDrake&Josh",
      caption: "nice",
      imageUrl:
        "https://i.pinimg.com/564x/73/d3/eb/73d3eb6181f834ba7b0879067b32ec19.jpg",
        legenda: "Passeio tranquilo :)",
        coments: "Ver todos os 30 comentários",
        engajamento: "Curtido por bot45 e outras pessoas",
        time: "5 horas",
        comentario: "Adicione um comentário...",
      },
    {
      username: "UwUgiRL",
      caption: "cute!",
      imageUrl:
        "https://i.pinimg.com/564x/6a/31/ff/6a31ff9ef6fd33fa6b5c09a62b9b21c4.jpg",
        legenda: "Meu gato fofo! <3",
        coments: "Ver todos os 15 comentários",
        engajamento: "Curtido por mãe e outras pessoas",
        time: "2 horas",
        comentario: "Adicione um comentário...",
      },
    {
      username: "Sammy_2",
      caption: "night",
      imageUrl:
        "https://i.pinimg.com/564x/9c/b8/34/9cb83438c30080a081416f8278566ab1.jpg",
        legenda: "Come be lonely with me",
        coments: "Ver todos os 5 comentários",
        engajamento: "Curtido por pepEdr0 e outras pessoas",
        time: "2 dias",
        comentario: "Adicione um comentário...",
      },
  ]);

  return (
    <div className="app">

      <div className="app__header">
        <div className="app__headerWrapper">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo" title="Instagram original logo"
          />

          <main className="search">
            
        <input placeholder="Pesquisar" />
        </main>

          <div className="app__headerButtons">

            <div className="home">
          <img src="https://img.icons8.com/fluency-systems-filled/48/undefined/home.png"/>
          </div>

          <div className="direct">
            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/undefined/external-send-email-flatart-icons-outline-flatarticons.png"/>
          </div>

          <div className="plus">
            <img src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/undefined/external-plus-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"/>
          </div>

          <div className="compass">
          <img src="https://img.icons8.com/ios/50/undefined/compass--v1.png"/>
          </div>

          <div className="heart">
          <img src="https://img.icons8.com/ios/50/undefined/like--v1.png"/>
          </div>

          <div className="profile">
          <img src="https://img.icons8.com/material-outlined/24/undefined/user-male-circle.png"/>
          </div>

          </div>


        </div>

      </div>
      <div className="side-profile">
        <div className="profile-side">
          <img src="https://img.icons8.com/material-outlined/24/undefined/user-male-circle.png"/>
        
          <div className="user-info">
          <div className="info">
            <span><b>crycamily</b></span>
            <p>☆</p>
          </div>

          <div className="switch">
            <h5>Mudar</h5>
          </div>

          <div className="sugestoes">
            <h4>Sugestões para você</h4>
          </div>

          <div className="ver-tudo">
            <h5>Ver tudo</h5>
          </div>

          <div className="user-sugestao">
            <div className="user1">
              <img src="https://i.pinimg.com/564x/1c/13/ee/1c13ee4d72c897283367eb46d7f2d5dc.jpg"/>
              
              </div>
            
            <div className="user2">
              <img src="https://i.pinimg.com/564x/e5/da/11/e5da11f21e7f509b9a9660e4f007cf82.jpg"/>
            <div className="user2-info">
            <span>d3adb0dy</span>
            <p>Novo no instagram</p>

            <div className="follow">
              <h5>Seguir</h5>
            </div>

            </div>
            </div>

            <div className="user3">
              <img src="https://i.pinimg.com/564x/96/6f/b9/966fb9d41d9a664c7faefb23dc12ea96.jpg"/>
              <div className="user3-info">
              <span>duck_inlaw</span>
              <p>Seguido por mãe e mais 11 pessoas</p>

              <div className="follow2">
              <h5>Seguir</h5>
            </div>
            </div>
            </div>

            <div className="user4">
              <img src="https://i.pinimg.com/564x/7e/3c/3d/7e3c3d1893d85fd35afde5ca8bdd4a38.jpg"/>
              <div className="user4-info">
              <span>sansao2</span>
              <p>Seguido por Pedrin_7</p>

              <div className="user4-info2">
              <span>camikasy</span>
              <p>Seguido por day.1 e mais 1 pessoa</p>

              <div className="follow3">
              <h5>Seguir</h5>
            </div>

            <div className="follow4">
              <h5>Seguir</h5>
            </div>
              </div>
              
            </div>

            
            </div>

            <footer className="footer-suggestion" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull;</p> <p>Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2022 INSTAGRAM FROM META</p>

            </footer>
           
            </div>
          

        </div>

        </div>
      </div>


      <div className="timeline">

      <div className="container">

      <div className="storys">

        <div className="story1">

        <div className="border">

        <img className="img-user" src="https://i.pinimg.com/564x/bd/e9/21/bde921e2295aa79975d876e0bb1e8f93.jpg"/>
          

      </div>

      <div className="nome1">
          <p>dumbye</p>
        </div>
      </div>


      <div className="story2">
      <div className="border">
          
      <img className="img-user" src="https://i.pinimg.com/564x/cf/ec/5f/cfec5f58a3ec676a9e7a28346c01e2ff.jpg"/>
     
      </div>

      <div className="nome2">
          <p>anny.3</p>
        </div>
      </div>


      <div className="story3">
      <div className="border">
          
      <img className="img-user" src="https://i.pinimg.com/564x/cc/09/62/cc096207d3ff5c3eccce677eaf356964.jpg"/>
     
      </div>

      <div className="nome3">
          <p>sunDay...</p>
        </div>
      </div>


      <div className="story4">
      <div className="border">
          
      <img className="img-user" src="https://i.pinimg.com/564x/3d/58/9f/3d589f5f44a94730752bb6658e520e26.jpg"/>
     
      </div>

      <div className="nome4">
          <p>alicya_...</p>
        </div>
      </div>

      <div className="story5">
      <div className="border">
          
      <img className="img-user" src="https://i.pinimg.com/736x/58/ff/e9/58ffe93c0d7ae6ce972383c360421bb1.jpg"/>
     
      </div>
      <div className="nome5">
          <p>daysie...</p>
        </div>
      </div>


      <div className="story6">
      <div className="border">
          
      <img className="img-user" src="https://i.pinimg.com/736x/d4/56/04/d456049fa196d234e23d12b6a2eee4f2.jpg"/>
     
      </div>
      <div className="nome6">
          <p>pinkYez...</p>
        </div>
      </div>

      </div>

        </div>



        {posts.map((post) => (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
            legenda={post.legenda}
            engajamento={post.engajamento}
            coments={post.coments}
            time={post.time}
            comentario={post.comentario}
            smile={post.smile}
          />
        ))}
      </div>
    
    </div>

  );
}

export default App;
