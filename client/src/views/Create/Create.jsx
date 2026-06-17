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
  const [searchCountry, setSearchCountry] = useState('');

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    let updatedForm = { ...formulario };

    if (type === 'checkbox') {
      if (checked) {
        updatedForm.country = [...formulario.country, value];
      } else {
        updatedForm.country = formulario.country.filter((c) => c !== value);
      }
    } else {
      updatedForm[name] = value;
    }

    setFormulario(updatedForm);
    setErrors(validate(updatedForm));
  };

  const handleSelectSeason = (seasonValue) => {
    const updatedForm = { ...formulario, season: seasonValue };
    setFormulario(updatedForm);
    setErrors(validate(updatedForm));
  };

  const handleSelectDifficulty = (diffValue) => {
    const updatedForm = { ...formulario, difficulty: String(diffValue) };
    setFormulario(updatedForm);
    setErrors(validate(updatedForm));
  };

  const handleRemoveCountry = (countryId) => {
    const updatedForm = {
      ...formulario,
      country: formulario.country.filter((id) => id !== countryId),
    };
    setFormulario(updatedForm);
    setErrors(validate(updatedForm));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Actividad creada con éxito');
    dispatch(postForm(formulario));
    navigate('/home');
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  // Form validity effect
  useEffect(() => {
    const validationErrors = validate(formulario);
    const allFilled =
      formulario.name &&
      formulario.difficulty &&
      formulario.duration &&
      formulario.season &&
      formulario.country.length > 0;
    
    setDisable(!allFilled || Object.keys(validationErrors).length > 0);
  }, [formulario]);

  const filteredCountries = allCountries.filter((c) =>
    c.name.toLowerCase().includes(searchCountry.toLowerCase())
  );

  const seasons = [
    { value: 'summer', label: 'Summer', icon: '☀️' },
    { value: 'autumn', label: 'Autumn', icon: '🍂' },
    { value: 'winter', label: 'Winter', icon: '❄️' },
    { value: 'spring', label: 'Spring', icon: '🌸' },
  ];

  return (
    <div className="mx-auto w-full max-w-2xl flex-1 px-4 py-8 sm:px-6 lg:px-8 animate-fade-in">
      <section className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
        
        {/* Form Title */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Activity Planner
          </span>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-foreground">
            Create Activity
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Add tourist activities to countries so users can explore schedules and options.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Name Field */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="filter-label">
              Activity Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formulario.name}
              onChange={handleChange}
              placeholder="e.g. Skiing, Museum Tour, Rafting"
              className="input-field"
            />
            {errors.nombre1 && <p className="form-error">{errors.nombre1}</p>}
            {errors.nombre2 && <p className="form-error">{errors.nombre2}</p>}
          </div>

          {/* Difficulty Star Field */}
          <div className="space-y-2">
            <label className="filter-label">
              Difficulty Rating
            </label>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((num) => {
                const isSelected = Number(formulario.difficulty) >= num;
                const isExact = Number(formulario.difficulty) === num;
                return (
                  <button
                    key={num}
                    type="button"
                    onClick={() => handleSelectDifficulty(num)}
                    className={`h-11 w-11 rounded-xl border flex items-center justify-center font-bold text-sm transition-all focus:outline-none focus:ring-4 focus:ring-primary/10 ${
                      isSelected
                        ? 'bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20 scale-105'
                        : 'bg-card border-border hover:bg-muted text-muted-foreground'
                    }`}
                  >
                    {num}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              Select difficulty from 1 (very easy) to 5 (extremely challenging).
            </p>
            {errors.difficulty1 && <p className="form-error">{errors.difficulty1}</p>}
            {errors.difficulty2 && <p className="form-error">{errors.difficulty2}</p>}
          </div>

          {/* Duration Field */}
          <div className="space-y-1.5">
            <label htmlFor="duration" className="filter-label">
              Duration (Hours)
            </label>
            <input
              id="duration"
              name="duration"
              value={formulario.duration}
              onChange={handleChange}
              placeholder="Enter number between 1 and 24 hours"
              className="input-field"
            />
            {errors.duration1 && <p className="form-error">{errors.duration1}</p>}
            {errors.duration2 && <p className="form-error">{errors.duration2}</p>}
          </div>

          {/* Season Cards Grid */}
          <div className="space-y-2">
            <label className="filter-label">
              Preferred Season
            </label>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {seasons.map((season) => {
                const isSelected = formulario.season === season.value;
                return (
                  <button
                    key={season.value}
                    type="button"
                    onClick={() => handleSelectSeason(season.value)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border text-sm font-semibold transition-all focus:outline-none focus:ring-4 focus:ring-primary/10 ${
                      isSelected
                        ? 'border-primary bg-primary/10 text-primary scale-105 font-bold shadow-sm'
                        : 'border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <span className="text-xl mb-1">{season.icon}</span>
                    <span>{season.label}</span>
                  </button>
                );
              })}
            </div>
            {errors.season1 && <p className="form-error">{errors.season1}</p>}
            {errors.season2 && <p className="form-error">{errors.season2}</p>}
          </div>

          {/* Countries Selector Field */}
          <div className="space-y-3">
            <label className="filter-label">
              Select Countries
            </label>

            {/* Selected countries badges panel */}
            {formulario.country.length > 0 && (
              <div className="flex flex-wrap gap-1.5 p-3 rounded-xl border border-border bg-muted/20">
                {formulario.country.map((cId) => {
                  const cName = allCountries.find((c) => c.id === cId)?.name || cId;
                  return (
                    <span
                      key={cId}
                      className="inline-flex items-center gap-1 rounded-lg bg-primary/10 border border-primary/20 pl-2.5 pr-1.5 py-1 text-xs font-semibold text-primary animate-fade-in"
                    >
                      {cName}
                      <button
                        type="button"
                        onClick={() => handleRemoveCountry(cId)}
                        className="rounded-full p-0.5 hover:bg-primary/20 text-primary/80 hover:text-primary transition-colors"
                      >
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  );
                })}
              </div>
            )}

            {/* Search list and Checklist box */}
            <div className="rounded-xl border border-border p-4 bg-muted/10 space-y-3">
              <input
                type="text"
                placeholder="Search country..."
                value={searchCountry}
                onChange={(e) => setSearchCountry(e.target.value)}
                className="input-field py-2 bg-card"
              />

              <div className="max-h-52 flex flex-col gap-1 overflow-y-auto pr-1">
                {filteredCountries.length === 0 ? (
                  <p className="text-xs text-muted-foreground p-3 text-center">No countries match search.</p>
                ) : (
                  filteredCountries.map((elemento, index) => (
                    <label
                      key={elemento.id ?? elemento.name}
                      htmlFor={`country-${index}`}
                      className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-card/80"
                    >
                      <span>{elemento.name}</span>
                      <input
                        className="h-4.5 w-4.5 rounded border-border text-primary focus:ring-ring cursor-pointer"
                        type="checkbox"
                        id={`country-${index}`}
                        value={elemento.id}
                        name="country"
                        onChange={handleChange}
                        checked={formulario.country.includes(elemento.id)}
                      />
                    </label>
                  ))
                )}
              </div>
            </div>
            
            {(errors.country || errors.selectCountry) && (
              <p className="form-error">
                {errors.country || errors.selectCountry}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn-primary w-full py-3.5 mt-4 text-base"
            disabled={disable}
          >
            Create Activity
          </button>
        </form>
      </section>
    </div>
  );
}

export default Create;
