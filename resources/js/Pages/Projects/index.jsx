import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index({ projects }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Mis Proyectos (React)
                </h2>
            }
        >
            <Head title="Proyectos" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-medium">Lista de Proyectos</h3>
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                                Nuevo Proyecto
                            </button>
                        </div>

                        {projects.length === 0 ? (
                            <p className="text-gray-500">No hay proyectos aún. ¡Crea el primero!</p>
                        ) : (
                            <ul className="divide-y divide-gray-200">
                                {projects.map((project) => (
                                    <li key={project.id} className="py-4">
                                        <h4 className="font-bold">{project.title}</h4>
                                        <p className="text-sm text-gray-600">{project.description}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
