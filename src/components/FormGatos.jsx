import React from 'react';

const FormGatos = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center text-2xl font-bold transition-all hover:scale-110 z-10"
        >
          ×
        </button>

        {/* Content */}
        <div className="p-6 md:p-10 max-h-[85vh] overflow-y-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">Consulta Inicial Conducta Felina</h1>
          
          <form action="mailto:proanimalacademy@gmail.com" method="post" encType="text/plain" className="space-y-6">
            {/* Datos del Tutor */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-amber-400 pb-2">Datos del Tutor</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre *</label>
                  <input type="text" name="nombre" placeholder="Primero" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Apellido *</label>
                  <input type="text" name="apellido" placeholder="Apellido" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Otro tutor o responsable</label>
                  <input type="text" name="otro-tutor-primero" placeholder="Primero" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Apellido</label>
                  <input type="text" name="otro-tutor-apellido" placeholder="Apellido" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Número de teléfono *</label>
                <input type="tel" name="telefono" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Correo electrónico *</label>
                <input type="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Dirección *</label>
                <input type="text" name="direccion-linea1" placeholder="Línea 1" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                <input type="text" name="direccion-linea2" placeholder="Línea 2" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input type="text" name="ciudad" placeholder="Ciudad" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                  <input type="text" name="estado" placeholder="Estado" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input type="text" name="codigo-zip" placeholder="Código ZIP" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                  <input type="text" name="pais" placeholder="País" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿A quién debo agradecer por referirte con nosotros? *</label>
                <input type="text" name="referencia" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>
            </div>

            {/* Datos del Gato */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-amber-400 pb-2">Datos del Gato</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre *</label>
                <input type="text" name="nombre-gato" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Edad *</label>
                  <input type="number" name="edad-gato" placeholder="Ej: 3" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Unidad</label>
                  <select name="edad-unidad" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent">
                    <option value="meses">Meses</option>
                    <option value="años">Años</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Sexo *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="sexo" value="Hembra esterilizada" required className="text-amber-500 focus:ring-amber-400" /> Hembra esterilizada</label>
                  <label className="flex items-center gap-2"><input type="radio" name="sexo" value="Hembra sin esterilizar" className="text-amber-500 focus:ring-amber-400" /> Hembra sin esterilizar</label>
                  <label className="flex items-center gap-2"><input type="radio" name="sexo" value="Macho castrado" className="text-amber-500 focus:ring-amber-400" /> Macho castrado</label>
                  <label className="flex items-center gap-2"><input type="radio" name="sexo" value="Macho sin castrar" className="text-amber-500 focus:ring-amber-400" /> Macho sin castrar</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Raza *</label>
                <select name="raza" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent">
                  <option value="">Selecciona una raza</option>
                  <option value="Siamés">Siamés</option>
                  <option value="Persa">Persa</option>
                  <option value="Maine Coon">Maine Coon</option>
                  <option value="Bengalí">Bengalí</option>
                  <option value="Ragdoll">Ragdoll</option>
                  <option value="Esfinge">Esfinge</option>
                  <option value="British Shorthair">British Shorthair</option>
                  <option value="Abisinio">Abisinio</option>
                  <option value="Birmano">Birmano</option>
                  <option value="Mestizo">Mestizo</option>
                  <option value="Otra">Otra (especificar)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Peso (kg) *</label>
                <input type="number" name="peso" step="0.1" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Medio de Adquisición *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="adquisicion" value="Criadero" required className="text-amber-500 focus:ring-amber-400" /> Criadero</label>
                  <label className="flex items-center gap-2"><input type="radio" name="adquisicion" value="Refugio" className="text-amber-500 focus:ring-amber-400" /> Refugio</label>
                  <label className="flex items-center gap-2"><input type="radio" name="adquisicion" value="Rescate" className="text-amber-500 focus:ring-amber-400" /> Rescate</label>
                  <label className="flex items-center gap-2"><input type="radio" name="adquisicion" value="Regalo" className="text-amber-500 focus:ring-amber-400" /> Regalo</label>
                  <label className="flex items-center gap-2"><input type="radio" name="adquisicion" value="Otra" className="text-amber-500 focus:ring-amber-400" /> Otra</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Edad de adquisición *</label>
                  <input type="number" name="edad-adquisicion" placeholder="Ej: 2" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Unidad</label>
                  <select name="edad-adquisicion-unidad" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent">
                    <option value="meses">Meses</option>
                    <option value="años">Años</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Está desungulado? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="desungulado" value="Sí" required className="text-amber-500 focus:ring-amber-400" /> Sí</label>
                  <label className="flex items-center gap-2"><input type="radio" name="desungulado" value="No" className="text-amber-500 focus:ring-amber-400" /> No</label>
                </div>
              </div>
            </div>

            {/* Evolución */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-amber-400 pb-2">Evolución</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Describe el motivo de la consulta *</label>
                <textarea name="motivo-consulta" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Cuándo notaste que inició el problema? *</label>
                <input type="text" name="inicio-problema" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Enlista cualquier circunstancia, situación, hora, etc, que detone el (los) problemas *</label>
                <textarea name="circunstancias-problema" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Se ha atendido este caso anteriormente? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="atendido" value="Sí" required className="text-amber-500 focus:ring-amber-400" /> Sí</label>
                  <label className="flex items-center gap-2"><input type="radio" name="atendido" value="No" className="text-amber-500 focus:ring-amber-400" /> No</label>
                </div>
              </div>
            </div>

            {/* Otros aspectos de la conducta del gato */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-amber-400 pb-2">Otros aspectos de la conducta del gato</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Muestra miedo ante algún estímulo o cosa? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="miedo" value="Sí" required className="text-amber-500 focus:ring-amber-400" /> Sí</label>
                  <label className="flex items-center gap-2"><input type="radio" name="miedo" value="No" className="text-amber-500 focus:ring-amber-400" /> No</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Viven más animales en casa? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="mas-animales" value="Sí" required className="text-amber-500 focus:ring-amber-400" /> Sí</label>
                  <label className="flex items-center gap-2"><input type="radio" name="mas-animales" value="No" className="text-amber-500 focus:ring-amber-400" /> No</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Cuántas personas viven en casa incluyéndote? *</label>
                <input type="number" name="numero-personas" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Has tenido animales anteriormente? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="animales-anteriores" value="Sí" required className="text-amber-500 focus:ring-amber-400" /> Sí</label>
                  <label className="flex items-center gap-2"><input type="radio" name="animales-anteriores" value="No" className="text-amber-500 focus:ring-amber-400" /> No</label>
                </div>
              </div>
            </div>

            {/* Aspectos médicos */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-amber-400 pb-2">Aspectos médicos</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Existen condiciones médicas? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="condicion-medica" value="Sí" required className="text-amber-500 focus:ring-amber-400" /> Sí</label>
                  <label className="flex items-center gap-2"><input type="radio" name="condicion-medica" value="No" className="text-amber-500 focus:ring-amber-400" /> No</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Toma actualmente alguna medicación? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="medicacion" value="Sí" required className="text-amber-500 focus:ring-amber-400" /> Sí</label>
                  <label className="flex items-center gap-2"><input type="radio" name="medicacion" value="No" className="text-amber-500 focus:ring-amber-400" /> No</label>
                </div>
              </div>
            </div>

            {/* Datos relativos a la vida de tu gato */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-amber-400 pb-2">Datos relativos a la vida de tu gato</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Tiene acceso a exteriores? *</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2"><input type="radio" name="acceso-exteriores" value="Sí" required className="text-amber-500 focus:ring-amber-400" /> Sí</label>
                  <label className="flex items-center gap-2"><input type="radio" name="acceso-exteriores" value="No" className="text-amber-500 focus:ring-amber-400" /> No</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">¿Ha habido algún cambio desde que tu gato vive en casa? *</label>
                <select name="cambio-vida" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent">
                  <option value="No">No</option>
                  <option value="Pérdida de un miembro de la familia">Pérdida de un miembro de la familia</option>
                  <option value="Pérdida de un animal en casa">Pérdida de un animal en casa</option>
                  <option value="Matrimonio">Matrimonio</option>
                  <option value="Divorcio">Divorcio</option>
                  <option value="Nacimiento de un bebé">Nacimiento de un bebé</option>
                  <option value="Llegada de un miembro nuevo en la familia">Llegada de un miembro nuevo en la familia</option>
                  <option value="Cambio de vivienda">Cambio de vivienda</option>
                  <option value="Alguien se ha ido a vivir fuera de casa">Alguien se ha ido a vivir fuera de casa</option>
                  <option value="Animal nuevo en casa">Animal nuevo en casa</option>
                  <option value="Cambio de trabajo y rutinas">Cambio de trabajo y rutinas</option>
                  <option value="Durante o post confinamiento de COVID-19">Durante o post confinamiento de COVID-19</option>
                </select>
              </div>
            </div>

            {/* Pronóstico */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-amber-400 pb-2">Pronóstico</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Enumera los objetivos a lograr *</label>
                <textarea name="objetivos-consulta" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"></textarea>
              </div>
            </div>

            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 text-lg">
              Enviar Consulta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormGatos;
