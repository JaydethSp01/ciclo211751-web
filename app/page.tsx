"use client";
export const dynamic = "force-dynamic";
import { MetricCard } from "@/components/ui/MetricCard";
import { Hero } from "@/components/ui/Hero";
import Link from "next/link";
import { mockNotes, mockTags, mockUsers } from "@/lib/mock";
import { FileText, Tag, Users, TrendingUp, ArrowRight, Clock, Plus, Search } from "lucide-react";

const totalNotes = mockNotes?.length;
const totalTags = mockTags?.length;
const totalUsers = mockUsers?.length;

const oneWeekAgo = new Date();
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
const recentNotesCount = (mockNotes ?? []).filter(
  (n) => new Date(n.updatedAt) >= oneWeekAgo
).length;

const recentNotes = [...mockNotes]
  .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
  .slice(0, 5);

interface MetricCardProps {
  title: string;
  value: number | string;
  description: string;
  icon: React.ReactNode;
  colorIcon: string;
  colorBg: string;
  href: string;
}

function MetricCard({ title, value, description, icon, colorIcon, colorBg, href }: MetricCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${colorBg}`}>
            <span className={colorIcon}>{icon}</span>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all duration-200" />
        </div>
        <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
        <p className="text-sm font-medium text-gray-700 mb-0.5">{title}</p>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
    </Link>
  );
}

export default function DashboardPage() {
  const getTagById = (tagId: string) => (mockTags ?? []).find((t) => t.id === tagId);
  const getUserById = (userId: string) => (mockUsers ?? []).find((u) => u.id === userId);

  return (
    <div className="min-h-screen bg-slate-50">
      <Hero title="Panel de control" subtitle="Bienvenido de vuelta — aquí tienes el resumen de tu actividad de estudio." />
      {/* Header */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Panel de control</h1>
          <p className="text-sm text-gray-500 mt-1">Bienvenido de vuelta — aquí tienes el resumen de tu actividad de estudio.</p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard title="Total de notas" value={totalNotes} description="Notas creadas en la plataforma" icon={<FileText className="w-5 h-5" />} colorIcon="text-indigo-600" colorBg="bg-indigo-50" href="/notes" />
          <MetricCard title="Etiquetas activas" value={totalTags} description="Categorías para organizar apuntes" icon={<Tag className="w-5 h-5" />} colorIcon="text-emerald-600" colorBg="bg-emerald-50" href="/tags" />
          <MetricCard title="Editadas esta semana" value={recentNotesCount} description="Notas modificadas en 7 días" icon={<TrendingUp className="w-5 h-5" />} colorIcon="text-amber-600" colorBg="bg-amber-50" href="/notes" />
          <MetricCard title="Estudiantes" value={totalUsers} description="Usuarios registrados en el sistema" icon={<Users className="w-5 h-5" />} colorIcon="text-rose-600" colorBg="bg-rose-50" href="/users" />
        </div>

        {/* Tabla + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tabla de notas recientes */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <h2 className="text-base font-semibold text-gray-900">Notas recientes</h2>
                <p className="text-xs text-gray-400 mt-0.5">Las últimas notas modificadas</p>
              </div>
              <Link href="/notes" className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                Ver todas <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-6 py-3">Nota</th>
                    <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-6 py-3">Etiquetas</th>
                    <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-6 py-3">Autor</th>
                    <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-6 py-3 whitespace-nowrap">Última edición</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {(recentNotes ?? []).map((note) => {
                    const author = getUserById(note.userId);
                    const initials = author?.name
                      ? author.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
                      : "?";
                    return (
                      <tr key={note.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 max-w-xs">
                          <Link href={`/notes/${note.id}`} className="flex items-start gap-3 group">
                            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <FileText className="w-4 h-4 text-indigo-400" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors truncate">{note.title}</p>
                              <p className="text-xs text-gray-400 mt-0.5 truncate">{note.content}</p>
                            </div>
                          </Link>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {note.tagIds.slice(0, 2).map((tagId) => {
                              const tag = getTagById(tagId);
                              if (!tag) return null;
                              return (
                                <span key={tagId} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: `${tag.color}18`, color: tag.color }}>
                                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: tag.color }} />
                                  {tag.name}
                                </span>
                              );
                            })}
                            {note.tagIds?.length > 2 && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-500">+{note.tagIds?.length - 2}</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                              {initials}
                            </div>
                            <span className="text-sm text-gray-600 whitespace-nowrap">{author?.name ?? "—"}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5 text-xs text-gray-400 whitespace-nowrap">
                            <Clock className="w-3 h-3 flex-shrink-0" />
                            {new Date(note.updatedAt).toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" })}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4">
            {/* Tags usage */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <div>
                  <h2 className="text-base font-semibold text-gray-900">Uso de etiquetas</h2>
                  <p className="text-xs text-gray-400 mt-0.5">Notas por categoría</p>
                </div>
                <Link href="/tags" className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                  Gestionar <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="p-4 space-y-1">
                {(mockTags ?? []).map((tag) => {
                  const count = (mockNotes ?? []).filter((n) => n.tagIds.includes(tag.id)).length;
                  const pct = totalNotes > 0 ? Math.round((count / totalNotes) * 100) : 0;
                  return (
                    <Link key={tag.id} href={`/tags/${tag.id}`} className="block">
                      <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group">
                        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: tag.color }} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors truncate">{tag.name}</span>
                            <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{count} nota{count !== 1 ? "s" : ""}</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                            <div className="h-1.5 rounded-full transition-all duration-300" style={{ width: `${pct}%`, backgroundColor: tag.color }} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 rounded-2xl p-6 text-white shadow-lg shadow-indigo-200">
              <p className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-1">Acciones rápidas</p>
              <h3 className="text-base font-bold mb-1">¿Listo para estudiar?</h3>
              <p className="text-xs text-indigo-200 mb-5 leading-relaxed">Organiza tus apuntes y encuentra información al instante.</p>
              <div className="space-y-2">
                <Link href="/notes/new" className="flex items-center gap-2.5 w-full bg-white text-indigo-700 hover:bg-indigo-50 transition-colors rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm">
                  <Plus className="w-4 h-4" />
                  Crear nueva nota
                </Link>
                <Link href="/search" className="flex items-center gap-2.5 w-full bg-white/15 hover:bg-white/25 transition-colors rounded-xl px-4 py-2.5 text-sm font-semibold backdrop-blur-sm">
                  <Search className="w-4 h-4" />
                  Buscar en mis notas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

---

**Decisiones de diseño del archivo:**

| Elemento | Decisión |
|---|---|
| `` | Primera línea — el componente usa cómputo de fechas en cliente |
| Métricas | **4 MetricCards**: Total notas · Etiquetas activas · Editadas esta semana · Estudiantes — todas derivadas de `mockNotes/mockTags/mockUsers` |
| Tabla | 5 notas más recientes ordenadas por `updatedAt`, con avatar inicial, etiquetas coloreadas con el `tag.color` del mock y fecha formateada |
| Sidebar | Barra de progreso por etiqueta (% de notas que la usan) + bloque CTA degradado para acciones rápidas |
| Navegación | 100% `next/link` y rutas estáticas — sin `next/router` |
| Datos | Todo se calcula desde `@/lib/mock` — cero `useState([])` ni `null` |
| Etiquetas coloreadas | `backgroundColor: ${tag.color}18` (hex + 18 = 10% opacidad) para el chip, color sólido en el punto y la barra |

El mock en `@/lib/mock` debe exportar `mockNotes` (con `tagIds: string[]`, `userId`, `title`, `content`, `createdAt`, `updatedAt`), `mockTags` (con `id`, `name`, `color` hex) y `mockUsers` (con `id`, `name`, `email`).