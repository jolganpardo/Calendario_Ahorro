import React, { useState } from "react";

// Calendario de Ahorro
function App() {
  // Metas y parámetros principales
  const ahorroMensual = 170000;
  const mesesTotales = 12;
  const metaTotal = ahorroMensual * mesesTotales; // Cálculo dinámico del total
  const metaCelular = 1500000;

  // Estado de los meses completados
  const [mesesAhorro, setMesesAhorro] = useState(Array(12).fill(false));

  // Cálculos de progreso
  const ahorroAcumulado = mesesAhorro.filter(Boolean).length * ahorroMensual;
  const porcentajeTotal = ((ahorroAcumulado / metaTotal) * 100).toFixed(1);
  const porcentajeCelular = Math.min(
    ((ahorroAcumulado / metaCelular) * 100).toFixed(1),
    100
  );

  // Nombres de los meses
  const nombresMeses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  // Alternar estado de ahorro mensual
  const alternarMes = (indice) => {
    const nuevosMeses = [...mesesAhorro];
    nuevosMeses[indice] = !nuevosMeses[indice];
    setMesesAhorro(nuevosMeses);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex flex-col items-center py-10 px-6 relative overflow-hidden">
      
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-400 via-transparent to-transparent pointer-events-none"></div>

      {/* Encabezado */}
      <header className="text-center mb-12 mt-6 relative z-10">
        <h1 className="text-5xl font-extrabold text-teal-700 mb-3 tracking-tight drop-shadow-sm">
          Calendario de Ahorro
        </h1>
        <p className="text-gray-700 text-lg font-medium">
          Ahorra mes a mes hasta cumplir tus metas.
        </p>
      </header>

      {/* Resumen de metas */}
      <section className="bg-white shadow-xl rounded-2xl p-6 mb-10 w-full max-w-5xl border border-gray-100 text-center relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-gray-600 uppercase font-semibold">Meta Total</p>
            <p className="text-2xl font-bold text-teal-700">${metaTotal.toLocaleString("es-CO")}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 uppercase font-semibold">Meta Celular</p>
            <p className="text-2xl font-bold text-amber-600">${metaCelular.toLocaleString("es-CO")}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 uppercase font-semibold">Duración</p>
            <p className="text-2xl font-bold text-teal-700">{mesesTotales} Meses</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 uppercase font-semibold">Ahorro Mensual</p>
            <p className="text-2xl font-bold text-teal-700">${ahorroMensual.toLocaleString("es-CO")}</p>
          </div>
        </div>
      </section>

      {/* Tarjetas de meses */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl relative z-10">
        {nombresMeses.map((mes, i) => (
          <div
            key={i}
            onClick={() => alternarMes(i)}
            className={`cursor-pointer p-6 rounded-xl transition-all duration-300 transform shadow-md hover:shadow-lg hover:-translate-y-1 border text-center 
              ${
                mesesAhorro[i]
                  ? "bg-teal-500 text-white border-teal-600"
                  : "bg-white text-gray-800 border-gray-200 hover:bg-teal-50"
              }`}
          >
            <h3 className="text-2xl font-semibold mb-2">{mes}</h3>
            <p className="text-sm">
              {mesesAhorro[i]
                ? "Ahorro completado"
                : `Ahorra ${ahorroMensual.toLocaleString("es-CO")} COP`}
            </p>
          </div>
        ))}
      </section>

      {/* Progreso general */}
      <section className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl mt-12 border border-gray-100 relative z-10">
        <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">Progreso del Año</h2>

        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div
              className="bg-teal-600 h-6 rounded-full text-right pr-3 text-sm text-white font-semibold transition-all duration-500"
              style={{ width: `${porcentajeTotal}%` }}
            >
              {porcentajeTotal}%
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div
              className="bg-amber-500 h-6 rounded-full text-right pr-3 text-sm text-white font-semibold transition-all duration-500"
              style={{ width: `${porcentajeCelular}%` }}
            >
              {porcentajeCelular}% celular
            </div>
          </div>
        </div>

        <p className="text-center text-gray-700 mt-6 text-lg font-medium">
          Total ahorrado: ${ahorroAcumulado.toLocaleString("es-CO")}
        </p>
      </section>

      {/* Frase motivadora */}
      <footer className="mt-14 text-center text-gray-500 italic text-sm relative z-10">
        “Cada mes ahorrado es un paso más cerca de tus metas.”
      </footer>
    </div>
  );
}

export default App;
