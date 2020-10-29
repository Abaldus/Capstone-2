import React from 'react';
import "./dominos.css";

import trexTarget from './assets/trex-image/trex.fset';
import trexModel from './assets/scene.gltf';

export default function Dominos() {
  return (
    <div className="Dominos">

       {/* this is the start of the code =======================================*/}



       {/* <script src='https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js'></script> */}
        {/*
       <style>
        .arjs-loader {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .arjs-loader div {
          text-align: center;
          font-size: 1.25em;
          color: white;
        }
        </style>
      */}
        {/*<!-- rawgithack development URL --> */}
        {/* <script src='https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js'></script> */}

        {/* <body style='margin : 0px; overflow: hidden;'> */}
        {/* <!-- minimal loader shown until image descriptors are loaded --> */}
        {/* <div class="arjs-loader">
          <div>Loading, please wait...</div>
        </div>
        <a-scene
            vr-mode-ui='enabled: false;'
            renderer="logarithmicDepthBuffer: true;"
            embedded arjs='trackingMethod: best; sourceType: webcam; debugUIEnabled: false;'>

           
            <a-nft
                type='nft' url={trexTarget}
                smooth='true' smoothCount='10' smoothTolerance='0.01' smoothThreshold='5'>
                <a-entity
                    gltf-model={trexModel}
                    scale="5 5 5"
                    position="50 150 -100"
                    >
                </a-entity>
            </a-nft>
        <a-entity camera></a-entity>
        </a-scene> */}



    {/* </body> */}
    {/* this is the end of the code ===================================================================*/}
       
    </div>
  );
}