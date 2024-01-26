import React from "react";
import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { useSpring } from "react-spring";

const Draggable = () => {
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    let phi = 5;
    let width = 0;

    const onResize = () =>
    canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 250,
      height: 250,
      phi: 0,
      theta: 0.25,
      dark: 0,
      diffuse: 1.95,
      scale: 1,
      mapSamples: 14000,
      markerSize: 2.95,
      mapBrightness: 5.6,
      baseColor: [1, 1, 1],
      markerColor: [37.773972, 0.3, -122.431297],
      glowColor: [0.8, 0.8, 0.8],   
      offset: [0, 0],
      markers: [
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.03 },
          { location: [30.7128, -70.006], size: 0.03 },
          { location: [2.7128, -70.006], size: 0.05 },
          { location: [10.7128, -60.006], size: 0.03 }, 
          { location: [11.0321, -2.3216], size: 0.03 },
          { location: [30.0522, -118.2437], size: 0.01 },
          { location: [12.0522, -108.2437], size: 0.02 },
          { location: [19.0522, -18.2437], size: 0.02 },
          { location: [54.0522, -88.2437], size: 0.03 },
          { location: [28.0522, -8.2437], size: 0.05 },
          { location: [14.0522, -14.2437], size: 0.04 },
          { location: [24.0522, -82.2437], size: 0.02 },
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.004;
        }
        state.phi = phi + r.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });
    setTimeout(() => (canvasRef.current.style.opacity = "1"));
    return () => globe.destroy();
  }, [ r ]);

  return (
    <>
      <div
        className="relative mx-auto flex justify-center items-center lg:!mt-12 md:mt-8"
        style={{
          width:"350px",
          maxWidth:'350px',
          aspectRatio: 1,
        }}
      >
        <canvas
          ref={canvasRef}
          onPointerDown={(e) => {
            pointerInteracting.current =
              e.clientX - pointerInteractionMovement.current;
            canvasRef.current.style.cursor = "grabbing";
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = "grab";
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = "grab";
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({
                r: delta / 200,
              });
            }
          }}
          onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
              const delta = e.touches[0].clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({
                r: delta / 100,
              });
            }
          }}
          style={{
            width: 350,
            height: 350,
            cursor: "grab",
            contain: "layout paint size",
            opacity: 0,
            transition: "opacity 1s ease",
          }}
        />
      </div>
    </>
  );
};

export default Draggable;
