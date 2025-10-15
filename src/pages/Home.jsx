import AyHungry from "../assets/img/LogoAyHungry.png";
import { transformar } from "../components/LetterLogic.jsx";
import { useState } from "react";

export const Home = () => {
	const [input, setInput] = useState("El chef hizo un merge y salió una pizza con piña.");
	const output = transformar(input);

	return (
  <div className="container py-5">
    <div className="row justify-content-center align-items-start">
      <div className="col-lg-4 text-center text-lg-start mb-5 mb-lg-0">
        <img
          src={AyHungry}
          alt="AyHungry"
          className="img-fluid"
          style={{
            maxWidth: "350px",
            height: "auto",
          }}
        />
        
      </div>

      <div className="col-lg-7 text-start">
        <h2 className="crazy-title mb-4">Puzzle de las letras locas</h2>

        <h5 className="fw-bold mb-3">Instrucciones:</h5>
        <p className="mb-2">
          Si estos <em>strings</em> pasan por una función misteriosa, generan estos
          outputs:
        </p>
        <ul className="list-unstyled mb-3">
          <li>Hola Mundo → Jspa Mflhs</li>
          <li>Si hay hambre → Ñg jat jamnod</li>
          <li>Ayhungry → Atjfluot</li>
        </ul>
        <p className="fw-semibold mb-5">
          ¿Cuál es la lógica detrás de los outputs?
        </p>

        <div className="mb-3">
          <label htmlFor="in" className="form-label fw-bold">
            Escribí tu texto:
          </label>
          <textarea
            id="in"
            className="form-control"
            rows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribí acá…"
          />
        </div>

        <div className="text-start mt-4">
          <span className="fw-bold">Output:</span>
          <pre className="mt-2 border rounded p-3 bg-light">{output}</pre>
        </div>
      </div>
    </div>
  </div>
);

};