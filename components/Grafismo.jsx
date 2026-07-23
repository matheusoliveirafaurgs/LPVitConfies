/**
 * Grafismo institucional da Vitora, derivado das letras V e A.
 * Inlinado (1,2 KB) para permitir controle de cor e opacidade via CSS,
 * sem requisição de rede adicional.
 *
 * Manual da marca: aplicar como fundo decorativo em baixa opacidade.
 * Não rotacionar, não distorcer, não escalar de forma não uniforme.
 */
export default function Grafismo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 959.75201 809.492"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="grafismo-clip-a">
          <path
            d="M 0,607.119 H 719.814 V 0 H 0 Z"
            transform="translate(-418.54251,-607.11942)"
          />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="grafismo-clip-b">
          <path
            d="M 0,607.119 H 719.814 V 0 H 0 Z"
            transform="translate(-308.01751)"
          />
        </clipPath>
      </defs>
      <g>
        <path
          d="m 0,0 -226.777,-379.965 c -51.556,-89.021 -57.188,-90.051 -112.667,-89.195 0,0 -0.242,306.467 -0.097,398.806 h -79.001 v -469.46 h 79.221 c 87.682,0.002 113.652,18.998 167.218,112.88 L 79.245,0 Z"
          fill="currentColor"
          fillRule="nonzero"
          transform="matrix(1.3333333,0,0,-1.3333333,558.05667,-5.3333333e-4)"
          clipPath="url(#grafismo-clip-a)"
        />
        <path
          d="m 0,0 220.032,376.649 c 51.555,89.02 57.187,90.051 112.666,89.194 0,0 0.242,-306.466 0.097,-398.806 h 79.002 v 469.46 H 332.575 C 244.893,536.495 218.923,517.499 165.357,423.618 L -79.245,0 Z"
          fill="currentColor"
          fillRule="nonzero"
          transform="matrix(1.3333333,0,0,-1.3333333,410.69,809.492)"
          clipPath="url(#grafismo-clip-b)"
        />
      </g>
    </svg>
  );
}
