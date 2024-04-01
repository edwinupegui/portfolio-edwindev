import React from 'react'

import { PiShapesThin } from 'react-icons/pi'

const Bio = () => {
  return (
    <div className="px-5 lg:px-0">
      <h2 className="my-4 font-bold">Biografía</h2>
      <p className="my-3 text-[12px] font-normal">
        Soy un apasionado desarrollador de software con especialización en tecnologías JavaScript, incluyendo
        TypeScript, Node.js, React, React Native, Next.js, Express.js y NestJS. Además, tengo experiencia en Dart,
        Flutter, PostgreSQL, GraphQL y MongoDB. Siempre estoy buscando nuevos desafíos y oportunidades de aprendizaje en
        el mundo de la programación, y estoy comprometido con el desarrollo de soluciones innovadoras y de alta calidad.
      </p>
      <div className="mt-6 flex justify-between text-sm">
        <div className="flex items-center gap-x-1">
          <PiShapesThin />
          <span className="text-xs font-normal">2 años de experiencia como programador</span>
        </div>
      </div>
    </div>
  )
}

export default Bio
