import { getCountries, postForm } from '../../redux/actions';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validate from './Validate';

function Create() {
  const allCountries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    country: [],
  });

  const [errors, setErrors] = useState({});
  const [disable, setDisable] = useState(true);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      if (checked) {
        setFormulario({
          ...formulario,
          [name]: [...formulario[name], value],
        });
      } else {
        setFormulario({
          ...formulario,
          [name]: formulario[name].filter((country) => country !== value),
        });
      }
    } else {
      setFormulario({ ...formulario, [name]: value });
    }

    if (formulario.country.length > 0) {
      setDisable(false);
    }

    setErrors(validate(formulario));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('actividad creada con exito');
    dispatch(postForm(formulario));
    navigate('/Home');
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className="mx-auto w-full max-w-xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
      <section className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-8">
        <h1 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">Create Activity</h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-1.5">
            <label htmlFor="name" className="filter-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formulario.name}
              onChange={handleChange}
              placeholder="Ingrese nombre de la Actividad"
              className="input-field"
            />
            {errors.nombre1 && <p className="form-error">{errors.nombre1}</p>}
            {errors.nombre2 && <p className="form-error">{errors.nombre2}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="difficulty" className="filter-label">
              Difficulty
            </label>
            <input
              id="difficulty"
              name="difficulty"
              value={formulario.difficulty}
              onChange={handleChange}
              placeholder="Ingrese un numero del 1 al 5"
              className="input-field"
            />
            {errors.difficulty1 && <p className="form-error">{errors.difficulty1}</p>}
            {errors.difficulty2 && <p className="form-error">{errors.difficulty2}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="duration" className="filter-label">
              Duration
            </label>
            <input
              id="duration"
              name="duration"
              value={formulario.duration}
              onChange={handleChange}
              placeholder="Ingrese las horas de duracion"
              className="input-field"
            />
            {errors.duration1 && <p className="form-error">{errors.duration1}</p>}
            {errors.duration2 && <p className="form-error">{errors.duration2}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="season" className="filter-label">
              Season
            </label>
            <select id="season" name="season" onChange={handleChange} className="select-field">
              <option value="" hidden>
                Select season...
              </option>
              <option value="summer">Summer</option>
              <option value="autumn">Autumn</option>
              <option value="winter">Winter</option>
              <option value="spring">Spring</option>
            </select>
            {errors.season1 && <p className="form-error">{errors.season1}</p>}
            {errors.season2 && <p className="form-error">{errors.season2}</p>}
          </div>

          <fieldset className="rounded-lg border border-border p-4">
            <legend className="px-2 text-sm font-semibold text-foreground">
              Seleccionar Paises
            </legend>
            <div className="mt-2 flex max-h-52 flex-col gap-2 overflow-y-auto pr-1">
              {allCountries.map((elemento, index) => (
                <label
                  key={elemento.id ?? elemento.name}
                  htmlFor={`country-${index}`}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted"
                >
                  <input
                    className="h-4 w-4 rounded border-border text-primary focus:ring-ring"
                    type="checkbox"
                    id={`country-${index}`}
                    value={elemento.id}
                    name="country"
                    onChange={handleChange}
                    checked={formulario.country.includes(elemento.id)}
                  />
                  <span>{elemento.name}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {errors.country && <p className="form-error">{errors.country}</p>}

          <button className="btn-primary w-full" type="submit" disabled={disable}>
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}

export default Create;
