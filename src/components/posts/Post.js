import React from "react";
import "./Post.css";

function Post({username, caption, imageUrl, legenda, engajamento, coments, time, comentario, smile}) {
  return (
    <div className="post">

      <div className="post__header">

        <div className="user-profile">
          <img src="https://i.pinimg.com/564x/3a/22/2c/3a222c77ae154024c6d285300ef93a35.jpg"/>
        </div>

        <h4>{username}</h4>
      </div>
      {/*  */}
      <img className="post__image" src={imageUrl} alt={caption} title={caption}/>
      {/* */}
      <h4 className="post__text">

        <div className="section-footer">
          <div className="heart2">
          <img src="https://img.icons8.com/ios/50/undefined/like--v1.png"/>
        </div>

        <div className="coment">
        <img src="https://img.icons8.com/ios/50/undefined/topic.png"/>
       </div>

        <div className="direct2">
        <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/undefined/external-send-email-flatart-icons-outline-flatarticons.png"/>
        </div>

        </div>

        
        <div className="section-right">
        <img src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/undefined/external-Save-social-media-bearicons-detailed-outline-bearicons.png"/>
        </div>

          <div className="engajamento">
        {engajamento}
        </div>


      <div className="legend">
        <strong>{username}</strong> <span>{legenda}</span>
        </div>

        <div className="comentarios">
          <span>{coments}</span>
        </div>

        <div className="time">
          <span> Há {time}</span>
        </div>

        <div className="coments">
          <div className="img-smile">
        <img src="https://img.icons8.com/ios-glyphs/30/undefined/happy--v1.png"/>
        </div>
          <span>{comentario}</span>
          <h5>Publicar</h5>
        </div>

        
      </h4>    

    </div>

    
  );
}

export default Post;