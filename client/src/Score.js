import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Helmet} from 'react-helmet';

function Score() {
  var loadScript = function(src) {
    var tag = document.createElement('script');
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName('body')[0].appendChild(tag);
  };
  const [html, setHtml] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:'+process.env.REACT_APP_SERVER_PORT+'/scoreboard').then((response) => {
      setHtml(response.data);
    });
    loadScript('http://localhost:'+process.env.REACT_APP_SERVER_PORT+'/scoreboard.js');
    loadScript('http://localhost:'+process.env.REACT_APP_SERVER_PORT+'/lottie.js');
  }, [])
  return (
    <div dangerouslySetInnerHTML={{ __html: html }}></div>
  )
}
export default Score;