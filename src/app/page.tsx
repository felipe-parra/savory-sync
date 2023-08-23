'use client'

import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);

  const handleTouchStart = (e) => {

    setIsDragging(true);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {

    if (!isDragging) return;

    const deltaY = e.touches[0].clientY - startY;

    // Aplica transformaciones CSS para simular el "swipe up"
    // Esto podría ser una rotación o desplazamiento hacia arriba

    if (deltaY < -100) {
      // onSwipeUp();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {

    setIsDragging(false);
    // Limpia las transformaciones CSS
  };
  return (
    <section
      className="bg-white shadow-lg p-6 text-black rounded-lg h-full w-full relative pb-4"
      onClick={() => {
        console.log('click')
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <FoodCard food={{ name: "Tacos" }} />
    </section>
  )
}

function FoodCard({ food }: any) {
  return (
    <section className="food__card__container">
      <Image
        alt="pizza"
        width={435}
        height={100}
        className="food__card__image"
        src="https://images.unsplash.com/photo-1609795829951-325b91a41471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
      />
      <h2 className="food__card__title">{food.name}</h2>
    </section>
  )
}