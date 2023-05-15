import Head from "next/head";
import { useEffect } from "react";
export default function webgl() {
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#myCanvas"),
    });
  }, []);
  return (
    <>
      {" "}
      <Head>
        <title>My page title</title>
        <script src="https://unpkg.com/three@0.137.4/build/three.min.js"></script>
      </Head>
      <div>Hello World</div>
      <div>
        {" "}
        <canvas id="myCanvas"></canvas>
      </div>
    </>
  );
}
