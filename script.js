const malla = [
  {
    semestre: 1,
    asignaturas: [
      {
        nombre: "Anatomía I",
        requisitos: [],
        mencion: "común"
      },
      {
        nombre: "Biología Celular",
        requisitos: [],
        mencion: "común"
      }
    ]
  },
  {
    semestre: 2,
    asignaturas: [
      {
        nombre: "Fisiología",
        requisitos: ["Anatomía I"],
        mencion: "común"
      }
    ]
  }
];

const colores = {
  común: "#dfefff",
  laboratorio: "#ffdede",
  imagenologia: "#deffde"
};

const contenedor = document.getElementById("malla");
const modal = document.getElementById("modal");
const modalInfo = document.getElementById("modal-info");
const closeModal = document.getElementById("close-modal");

malla.forEach(bloque => {
  const semestreDiv = document.createElement("div");
  semestreDiv.className = "semestre";
  semestreDiv.innerHTML = `<h2>Semestre ${bloque.semestre}</h2>`;
  bloque.asignaturas.forEach(asig => {
    const a = document.createElement("div");
    a.className = "asignatura";
    a.style.backgroundColor = colores[asig.mencion] || "#fff";
    a.innerHTML = `<strong>${asig.nombre}</strong>`;
    a.addEventListener("click", () => {
      modalInfo.innerHTML = `
        <h3>${asig.nombre}</h3>
        <p><strong>Semestre:</strong> ${bloque.semestre}</p>
        <p><strong>Requisitos:</strong> ${asig.requisitos.join(", ") || "Ninguno"}</p>
        <p><strong>Mención:</strong> ${asig.mencion}</p>
      `;
      modal.classList.remove("hidden");
    });
    semestreDiv.appendChild(a);
  });
  contenedor.appendChild(semestreDiv);
});

closeModal.onclick = () => modal.classList.add("hidden");
modal.onclick = (e) => {
  if (e.target === modal) modal.classList.add("hidden");
};
