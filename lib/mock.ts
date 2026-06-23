export type Usuario = {
  id: string;
  nombre: string;
  email: string;
  avatar: string;
  creadoEn: string;
};

export type Etiqueta = {
  id: string;
  nombre: string;
  color: string;
  usuarioId: string;
};

export type Nota = {
  id: string;
  titulo: string;
  contenido: string;
  usuarioId: string;
  archivada: boolean;
  fijada: boolean;
  creadaEn: string;
  actualizadaEn: string;
};

export type NotaEtiqueta = {
  id: string;
  notaId: string;
  etiquetaId: string;
};

export const usuarios: Usuario[] = [
  {
    id: "u1",
    nombre: "Sofía Ramírez",
    email: "sofia.ramirez@uni.edu",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sofia",
    creadoEn: "2025-08-15T09:00:00Z",
  },
  {
    id: "u2",
    nombre: "Mateo Torres",
    email: "mateo.torres@uni.edu",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mateo",
    creadoEn: "2025-08-20T11:30:00Z",
  },
  {
    id: "u3",
    nombre: "Valentina Cruz",
    email: "val.cruz@uni.edu",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=valentina",
    creadoEn: "2025-09-01T08:45:00Z",
  },
  {
    id: "u4",
    nombre: "Andrés Molina",
    email: "andres.molina@uni.edu",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=andres",
    creadoEn: "2025-09-05T14:20:00Z",
  },
];

export const etiquetas: Etiqueta[] = [
  { id: "e1", nombre: "Matemáticas", color: "#6366f1", usuarioId: "u1" },
  { id: "e2", nombre: "Física", color: "#0ea5e9", usuarioId: "u1" },
  { id: "e3", nombre: "Historia", color: "#f59e0b", usuarioId: "u1" },
  { id: "e4", nombre: "Programación", color: "#10b981", usuarioId: "u1" },
  { id: "e5", nombre: "Literatura", color: "#ec4899", usuarioId: "u1" },
  { id: "e6", nombre: "Examen", color: "#ef4444", usuarioId: "u1" },
  { id: "e7", nombre: "Proyecto", color: "#8b5cf6", usuarioId: "u1" },
  { id: "e8", nombre: "Repaso", color: "#14b8a6", usuarioId: "u1" },
];

export const notas: Nota[] = [
  {
    id: "n1",
    titulo: "Derivadas e integrales — Resumen Parcial 2",
    contenido:
      "La derivada de f(x) = xⁿ es f'(x) = n·xⁿ⁻¹. Regla del producto: (f·g)' = f'g + fg'. Regla de la cadena: (f∘g)' = f'(g(x))·g'(x). Integral definida: área bajo la curva entre a y b. Teorema fundamental del cálculo: F'(x) = f(x) donde F es la antiderivada.",
    usuarioId: "u1",
    archivada: false,
    fijada: true,
    creadaEn: "2026-06-10T10:15:00Z",
    actualizadaEn: "2026-06-18T16:40:00Z",
  },
  {
    id: "n2",
    titulo: "Leyes de Newton y aplicaciones",
    contenido:
      "1ª Ley (Inercia): un cuerpo en reposo permanece en reposo salvo fuerza neta. 2ª Ley: F = ma. 3ª Ley: acción y reacción iguales y opuestas. Aplicación: plano inclinado con rozamiento → F_rozamiento = μ·N. Ejercicios resueltos en páginas 45-52 del libro de Serway.",
    usuarioId: "u1",
    archivada: false,
    fijada: true,
    creadaEn: "2026-06-08T09:00:00Z",
    actualizadaEn: "2026-06-15T11:20:00Z",
  },
  {
    id: "n3",
    titulo: "Revolución Francesa — Causas y consecuencias",
    contenido:
      "Causas: crisis económica de la monarquía, desigualdad social (Ancien Régime), influencia de la Ilustración, mal gobierno de Luis XVI. Etapas: Asamblea Nacional (1789), Terror (1793-94), Directorio (1795). Consecuencias: caída del absolutismo, Declaración de los Derechos del Hombre, ascenso de Napoleón.",
    usuarioId: "u1",
    archivada: false,
    fijada: false,
    creadaEn: "2026-06-05T14:30:00Z",
    actualizadaEn: "2026-06-12T10:05:00Z",
  },
  {
    id: "n4",
    titulo: "Algoritmos de ordenamiento en Python",
    contenido:
      "Bubble Sort: O(n²) — comparar pares adyacentes y permutar. Merge Sort: O(n log n) — divide y vencerás, estable. Quick Sort: O(n log n) promedio, O(n²) peor caso. Heap Sort: O(n log n), no estable. Para el proyecto final usar Merge Sort porque los datos no están ordenados y el tamaño supera 10k registros.",
    usuarioId: "u1",
    archivada: false,
    fijada: false,
    creadaEn: "2026-06-14T08:50:00Z",
    actualizadaEn: "2026-06-20T17:30:00Z",
  },
  {
    id: "n5",
    titulo: "García Márquez — Cien años de soledad",
    contenido:
      "Realismo mágico: mezcla de elementos cotidianos con hechos sobrenaturales presentados con naturalidad. Estructura: saga familiar de los Buendía en Macondo. Temas: soledad, tiempo cíclico, memoria colectiva. El coronel Aureliano Buendía como símbolo del fracaso heroico. Publicada en 1967, Premio Nobel 1982.",
    usuarioId: "u1",
    archivada: false,
    fijada: false,
    creadaEn: "2026-06-02T11:00:00Z",
    actualizadaEn: "2026-06-09T13:15:00Z",
  },
  {
    id: "n6",
    titulo: "Checklist examen Cálculo — 25 junio",
    contenido:
      "✅ Repasar límites y continuidad. ✅ Reglas de derivación. ⬜ Integrales por sustitución. ⬜ Integrales por partes. ⬜ Series de Taylor. ⬜ Ejercicios del capítulo 7. Llevar calculadora científica. El examen es de 09:00 a 11:00 en Aula Magna B.",
    usuarioId: "u1",
    archivada: false,
    fijada: true,
    creadaEn: "2026-06-20T20:00:00Z",
    actualizadaEn: "2026-06-22T09:00:00Z",
  },
  {
    id: "n7",
    titulo: "Estructura de datos — Árboles binarios",
    contenido:
      "Árbol binario de búsqueda (BST): nodo izquierdo < raíz < nodo derecho. Operaciones: inserción O(log n), búsqueda O(log n), eliminación O(log n). Recorridos: inorden (ascendente), preorden, postorden. Árbol AVL: autobalanceado, rotaciones simples y dobles. Implementación en Python disponible en repo del proyecto.",
    usuarioId: "u1",
    archivada: true,
    fijada: false,
    creadaEn: "2026-05-28T15:20:00Z",
    actualizadaEn: "2026-06-01T10:45:00Z",
  },
  {
    id: "n8",
    titulo: "Termodinámica — Primera y Segunda Ley",
    contenido:
      "1ª Ley: la energía no se crea ni se destruye, ΔU = Q - W. 2ª Ley: la entropía de un sistema aislado nunca disminuye. Ciclo de Carnot: η = 1 - T_fría/T_caliente, máxima eficiencia posible. Máquinas térmicas reales siempre tienen η < η_Carnot. Entropía como medida del desorden del sistema.",
    usuarioId: "u1",
    archivada: false,
    fijada: false,
    creadaEn: "2026-06-11T13:00:00Z",
    actualizadaEn: "2026-06-17T14:30:00Z",
  },
];

export const notaEtiquetas: NotaEtiqueta[] = [
  { id: "ne1", notaId: "n1", etiquetaId: "e1" },
  { id: "ne2", notaId: "n1", etiquetaId: "e6" },
  { id: "ne3", notaId: "n2", etiquetaId: "e2" },
  { id: "ne4", notaId: "n2", etiquetaId: "e8" },
  { id: "ne5", notaId: "n3", etiquetaId: "e3" },
  { id: "ne6", notaId: "n4", etiquetaId: "e4" },
  { id: "ne7", notaId: "n4", etiquetaId: "e7" },
  { id: "ne8", notaId: "n5", etiquetaId: "e5" },
  { id: "ne9", notaId: "n6", etiquetaId: "e1" },
  { id: "ne10", notaId: "n6", etiquetaId: "e6" },
  { id: "ne11", notaId: "n7", etiquetaId: "e4" },
  { id: "ne12", notaId: "n7", etiquetaId: "e8" },
  { id: "ne13", notaId: "n8", etiquetaId: "e2" },
  { id: "ne14", notaId: "n8", etiquetaId: "e6" },
];

export const USUARIO_ACTIVO_ID = "u1";

export function getEtiquetasByNota(notaId: string): Etiqueta[] {
  const ids = notaEtiquetas
    .filter((ne) => ne.notaId === notaId)
    .map((ne) => ne.etiquetaId);
  return etiquetas.filter((e) => ids.includes(e.id));
}

export function getNotasByEtiqueta(etiquetaId: string): Nota[] {
  const ids = notaEtiquetas
    .filter((ne) => ne.etiquetaId === etiquetaId)
    .map((ne) => ne.notaId);
  return notas.filter((n) => ids.includes(n.id));
}

export function getNotasActivas(): Nota[] {
  return notas.filter((n) => !n.archivada && n.usuarioId === USUARIO_ACTIVO_ID);
}

export function getNotasArchivadas(): Nota[] {
  return notas.filter((n) => n.archivada && n.usuarioId === USUARIO_ACTIVO_ID);
}

export function getNotasFijadas(): Nota[] {
  return notas.filter((n) => n.fijada && !n.archivada && n.usuarioId === USUARIO_ACTIVO_ID);
}

// Auto-stub (deploy validator): exports que las paginas usan pero faltaban.
export const mockNotes: any = {};
export const mockTags: any = {};
export const mockUsers: any = {};
