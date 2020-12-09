import React from 'react'

function YouEmbed(props) {

  const url = props.url || "https://www.youtube.com/watch?v=TxnbWa9SPdI"
  const vid = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=))([\w-]{10,12})\b/)[1]

  return (
    <iframe className="video-frame"
      title={vid}
      src={`https://www.youtube.com/embed/${vid}`}
      frameBorder="0"
      allow="fullscreen" 
    ></iframe>
  );
}

export default YouEmbed;