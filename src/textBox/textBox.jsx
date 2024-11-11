import React from "react";

function TextBox() {
    return (
        <div className="card bg-white rounded-lg shadow-xl p-6 max-w-lg mx-auto">
            <div className="card__border"></div>
            <div className="card_title__container mb-4">
                <span class="text-gray-300 text-2xl font-semibold">Biografia</span>
            </div>
            <hr className="line my-4" />
            <ul className="card__list space-y-2">
            <li className="card__list_item">
              <span class="text-gray-300">Apesar do inicio muito cedo, esses dois são um casal muito mais maduro que muitos outros. É lindo ver este amor florescendo e cada vez dando mais frutos. passamos juntos muitas dificuldades e obstáculos até chegar nesse momento, porem o melhor é ver que ao seu lado é possivel sempre encontrar soluções para qualquer problema. Achei em você um futuro, um caminho e a minha paz interior, obrigado por cada momento juntos Estamos...</span>
            </li>
            </ul>
        </div>
    );
  }
  export default TextBox;